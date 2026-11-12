#!/usr/bin/env python3
"""Adversarial suite: every mutation must be rejected with the expected rule, every control must pass.

Layers: schema, structural/template (cross-referenced against the declared template), case-study chapter rules,
maxWords, motion, R5 generated-mode leakage (brand, product, wordmark, person, client, third party, store / shop URL,
social URL, e-mail, endpoint, non-reserved host, copy, CTA, award / ranking, proprietary media, likeness),
R3 availability pins, R8 retrieval eligibility (node / contract / allowlist), R9 wrapper gate, R10 token policy.

    python3 schema/tests/adversarial_test.py
Requires: pip install jsonschema
"""
import copy
import json
import shutil
import subprocess
import sys
import tempfile
from pathlib import Path

sys.dont_write_bytecode = True
ROOT = Path(__file__).resolve().parent.parent.parent
sys.path.insert(0, str(ROOT / "schema"))
sys.path.insert(0, str(ROOT / "extraction"))
try:
    import jsonschema  # noqa: F401
except ImportError:
    sys.stderr.write("adversarial_test.py needs the 'jsonschema' package: pip install jsonschema\n")
    sys.exit(2)
import semantic_validate as sv  # noqa: E402
import wrapper_gate  # noqa: E402

REG = sv.load_registry(ROOT)
EX = ROOT / "schema/examples"
L = lambda n: json.loads((EX / n).read_text())
REF_HOME, REF_CASE, REF_STUDIO = L("reference/reference.home.json"), L("reference/reference.case-study.json"), L("reference/reference.studio.json")
REF_LEGAL, REF_LAB, REF_PROD = L("reference/reference.legal.json"), L("reference/reference.art-lab.json"), L("reference/reference.product-detail.json")
GEN_HOME, GEN_CASE, GEN_STUDIO = L("generated/generated.home.json"), L("generated/generated.case-study.json"), L("generated/generated.studio.json")
GEN_SHOP, GEN_PROD, GEN_LEGAL, GEN_LAB = L("generated/generated.shop-index.json"), L("generated/generated.product-detail.json"), L("generated/generated.legal.json"), L("generated/generated.art-lab.json")
GENERATED = [GEN_HOME, GEN_CASE, GEN_STUDIO, GEN_SHOP, GEN_PROD, GEN_LEGAL, GEN_LAB]

passed, failed = [], []


def idx(spec, section, k=0):
    return [i for i, n in enumerate(spec["nodes"]) if n["section"] == section][k]


def node(spec, section, k=0):
    return spec["nodes"][idx(spec, section, k)]


def C(spec, section, k=0):
    return node(spec, section, k)["content"]


def expect_reject(name, base, mutate, rule, reg=None):
    s = copy.deepcopy(base)
    mutate(s)
    res = sv.validate(s, reg or REG)
    rules = {x["rule"] for x in res.errors}
    (passed if res.errors and rule in rules else failed).append(name if res.errors and rule in rules else f"{name}: expected {rule}, got errors={sorted(rules)}")


def expect_warn(name, base, mutate, rule):
    s = copy.deepcopy(base)
    mutate(s)
    res = sv.validate(s, REG)
    ok = not res.errors and rule in {x["rule"] for x in res.warnings}
    (passed if ok else failed).append(name if ok else f"{name}: expected warning {rule}, got errors={[x['rule'] for x in res.errors]} warnings={[x['rule'] for x in res.warnings]}")


def put(section, field, value, k=0):
    return lambda s: C(s, section, k).__setitem__(field, value)


def style(section, field, value, k=0):
    return lambda s: node(s, section, k).setdefault("style", {}).__setitem__(field, value)


def W(n):
    return " ".join(["word"] * n)


# ------------------------------------------------------------------ schema layer
expect_reject("schema: mode outside closed enum", REF_HOME, lambda s: s.__setitem__("mode", "draft"), "SCHEMA")
expect_reject("schema: mode missing", REF_HOME, lambda s: s.pop("mode"), "SCHEMA")
expect_reject("schema: unknown template", REF_HOME, lambda s: s.__setitem__("template", "landing"), "SCHEMA")
expect_reject("schema: invented section type", REF_HOME, lambda s: s["nodes"][4].__setitem__("section", "hero.marketing"), "SCHEMA")
expect_reject("schema: missing reducedMotionFallback", REF_HOME, lambda s: node(s, "hero.home-intro")["motion"].pop("reducedMotionFallback"), "SCHEMA")
expect_reject("schema: invented motion field", REF_HOME, lambda s: node(s, "hero.home-intro")["motion"].__setitem__("easing", "bounce"), "SCHEMA")
expect_reject("schema: fallback not const-locked to its pattern", REF_HOME, lambda s: node(s, "hero.home-intro")["motion"].__setitem__("reducedMotionFallback", "none"), "SCHEMA")
expect_reject("schema: extra content field", REF_HOME, put("hero.home-intro", "subtitle", "x"), "SCHEMA")
expect_reject("schema: missing required content field", REF_STUDIO, lambda s: C(s, "narrative.faq").pop("items"), "SCHEMA")
expect_reject("schema: invented assetRole", REF_CASE, lambda s: C(s, "hero.case-header")["leadMedia"].__setitem__("assetRole", "image"), "SCHEMA")
expect_reject("schema: framework prop on node", REF_HOME, lambda s: node(s, "hero.home-intro").__setitem__("className", "bg-canvas"), "SCHEMA")
expect_reject("schema: wrong pageSpecVersion", REF_HOME, lambda s: s.__setitem__("pageSpecVersion", "0.9.0"), "SCHEMA")
expect_reject("schema: list over maxItems (5 disciplines max)", REF_HOME, lambda s: C(s, "hero.home-intro")["disciplines"].append("Type"), "SCHEMA")
expect_reject("schema: case meta must be 4 items", REF_CASE, lambda s: C(s, "hero.case-header")["meta"].pop(), "SCHEMA")
expect_reject("schema: chapter media kind outside enum", REF_CASE, lambda s: C(s, "work.case-chapter")["media"][0].__setitem__("kind", "carousel"), "SCHEMA")
expect_reject("schema: contact href not a URL/mailto/path", REF_STUDIO, lambda s: C(s, "conversion.studio-cta")["contact"].__setitem__("href", "javascript:alert(1)"), "SCHEMA")

# ------------------------------------------------------------------ structural / template
expect_reject("structure: duplicate hero", REF_HOME, lambda s: s["nodes"].insert(idx(s, "hero.home-intro") + 1, copy.deepcopy(node(s, "hero.home-intro"))), "ONE_HERO")
expect_reject("structure: mandatory projects list removed", REF_HOME, lambda s: s["nodes"].pop(idx(s, "work.projects-list")), "TEMPLATE_SEQUENCE")
expect_reject("structure: projects moved before studio band", REF_HOME, lambda s: s["nodes"].insert(idx(s, "narrative.studio-teaser"), s["nodes"].pop(idx(s, "work.projects-list"))), "TEMPLATE_SEQUENCE")
expect_reject("structure: home template on a case route", REF_HOME, lambda s: s.__setitem__("route", "/work/foo"), "TEMPLATE_ROUTE")
expect_reject("structure: case nodes declared as home (template cross-reference)", REF_CASE, lambda s: s.__setitem__("template", "home"), "TEMPLATE_SEQUENCE")
expect_reject("structure: 11 chapters (max 10)", REF_CASE, lambda s: [s["nodes"].insert(idx(s, "work.case-chapter"), copy.deepcopy(node(s, "work.case-chapter"))) for _ in range(6)], "TEMPLATE_SEQUENCE")
expect_reject("structure: 2 chapters (min 3)", REF_CASE, lambda s: [s["nodes"].pop(idx(s, "work.case-chapter")) for _ in range(3)], "TEMPLATE_SEQUENCE")
expect_reject("structure: chapter without variant", REF_CASE, lambda s: node(s, "work.case-chapter").pop("variant"), "TEMPLATE_VARIANT")
expect_reject("structure: variant on a section without variants", REF_CASE, lambda s: node(s, "work.case-role").__setitem__("variant", "wide"), "TEMPLATE_VARIANT")
expect_reject("structure: nav variant wrong for template", REF_STUDIO, lambda s: node(s, "shell.primary-nav").__setitem__("variant", "in-hero"), "TEMPLATE_SEQUENCE")
expect_reject("structure: hero not first content", REF_STUDIO, lambda s: s["nodes"].insert(idx(s, "hero.studio-intro"), s["nodes"].pop(idx(s, "narrative.approach-statement"))), "HERO_FIRST_CONTENT")
expect_reject("structure: next project removed (not last)", REF_CASE, lambda s: s["nodes"].pop(idx(s, "work.next-project")), "LAST_CONTENT_NODE")
expect_reject("structure: art lab given a hero", REF_LAB, lambda s: s["nodes"].insert(1, copy.deepcopy(node(REF_HOME, "hero.home-intro"))), "ONE_HERO")
expect_reject("structure: lead form on the studio page", REF_STUDIO, lambda s: s["nodes"].insert(idx(s, "conversion.studio-cta"), copy.deepcopy(node(REF_HOME, "conversion.lead-form"))), "TEMPLATE_SEQUENCE")
expect_reject("structure: second footer", REF_LEGAL, lambda s: s["nodes"].insert(idx(s, "shell.footer"), copy.deepcopy(node(s, "shell.footer"))), "TEMPLATE_SEQUENCE")
expect_reject("chapters: part opener not first", GEN_CASE, lambda s: s["nodes"].insert(idx(s, "work.case-chapter", 1), s["nodes"].pop(idx(s, "work.case-chapter", 0))), "PART_OPENER_FIRST")
expect_reject("chapters: part fields on a plain chapter", GEN_CASE, lambda s: C(s, "work.case-chapter", 1).update(partLabel="(PART 02)", partTitle="More"), "PART_FIELDS_MATCH_VARIANT")
expect_reject("chapters: part opener without part title", GEN_CASE, lambda s: C(s, "work.case-chapter", 0).pop("partTitle"), "PART_FIELDS_MATCH_VARIANT")
expect_reject("chapters: same demo twice", GEN_CASE, lambda s: C(s, "work.case-chapter", 1).__setitem__("demo", "dashboard-finder"), "DEMO_ONCE")
expect_reject("chapters: count-up stat without a number", GEN_CASE, lambda s: C(s, "work.case-chapter", 0)["stats"][0].__setitem__("value", "many"), "STAT_VALUE_NUMERIC")
expect_reject("motion: pattern not allowed for section", REF_HOME, lambda s: node(s, "hero.home-intro").__setitem__("motion", {"pattern": "plane-inertia", "reducedMotionFallback": "no-inertia"}), "MOTION_PATTERN_NOT_ALLOWED")

# ------------------------------------------------------------------ maxWords (measured budgets)
expect_reject("maxWords: hero name overflow", REF_HOME, put("hero.home-intro", "name", W(3)), "MAX_WORDS")
expect_reject("maxWords: FAQ answer overflow", REF_STUDIO, lambda s: C(s, "narrative.faq")["items"][0].__setitem__("answer", W(154)), "MAX_WORDS")
expect_reject("maxWords: legal paragraph overflow", REF_LEGAL, lambda s: C(s, "legal.clause")["paragraphs"].__setitem__(0, W(112)), "MAX_WORDS")
expect_reject("maxWords: link label overflow", REF_CASE, lambda s: C(s, "work.next-project")["project"].__setitem__("label", W(4)), "MAX_WORDS")
expect_reject("maxWords: alt text overflow", REF_PROD, lambda s: C(s, "hero.product-detail")["images"][0].__setitem__("alt", W(12)), "MAX_WORDS")

# ------------------------------------------------------------------ R8 retrieval eligibility
expect_reject("R8: node flips cookie notice to eligible", REF_HOME, lambda s: node(s, "overlay.cookie-notice").__setitem__("retrievalEligible", True), "RETRIEVAL_MISMATCH")
expect_reject("R8: node flips lightbox to eligible", REF_CASE, lambda s: node(s, "overlay.board-lightbox").__setitem__("retrievalEligible", True), "RETRIEVAL_MISMATCH")
expect_reject("R8: content section marked ineligible", REF_HOME, lambda s: node(s, "work.projects-list").__setitem__("retrievalEligible", False), "RETRIEVAL_MISMATCH")
reg_flip = copy.deepcopy(REG)
reg_flip["sections"]["overlay.menu-panel"]["retrievalEligible"] = True
expect_reject("R8: contract flips menu panel to eligible (in-memory registry)", REF_STUDIO, lambda s: None, "RETRIEVAL_MISMATCH", reg=reg_flip)

# ------------------------------------------------------------------ R10 token policy
expect_reject("R10: unknown token", REF_HOME, style("hero.home-intro", "surface", "surface.brand"), "TOKEN_UNKNOWN")
expect_reject("R10: raw hex colour", REF_HOME, style("hero.home-intro", "surface", "#efeeeb"), "TOKEN_RAW_COLOR")
expect_reject("R10: raw rgb colour", REF_HOME, style("services.skillset", "text", "rgb(255,255,255)"), "TOKEN_RAW_COLOR")
expect_reject("R10: named colour", REF_CASE, style("work.case-role", "accent", "red"), "TOKEN_RAW_COLOR")
expect_reject("R10: arbitrary spacing px", REF_HOME, style("work.projects-list", "paddingBlock", "150px"), "TOKEN_ARBITRARY_SPACING")
expect_reject("R10: arbitrary spacing calc(--px)", REF_CASE, style("work.case-chapter", "paddingBlock", "calc(140*var(--px))"), "TOKEN_ARBITRARY_SPACING")
expect_reject("R10: spacing token that is not a section padding", REF_HOME, style("work.projects-list", "paddingBlock", "space.gutter"), "TOKEN_WRONG_CATEGORY")
expect_reject("R10: unsupported font", REF_HOME, style("hero.home-intro", "displayFont", "Inter"), "TOKEN_FONT_UNSUPPORTED")
expect_reject("R10: invalid surface/text combination (ink on night)", REF_HOME, style("services.skillset", "text", "text.primary"), "TOKEN_THEME_COMBO")
expect_reject("R10: surface not allowed for the section", REF_HOME, style("hero.home-intro", "surface", "surface.night"), "TOKEN_SECTION_SURFACE")
expect_reject("R10: token of wrong category", REF_HOME, style("work.projects-list", "paddingBlock", "color.accent"), "TOKEN_WRONG_CATEGORY")

# ------------------------------------------------------------------ R5 generated-mode leakage
expect_reject("R5 brand: studio name in meta title", GEN_HOME, lambda s: s["meta"].__setitem__("title", "Pamidor Studio portfolio"), "GENERATED_MODE_BRAND")
expect_reject("R5 brand: wordmark text as alt", GEN_HOME, lambda s: C(s, "shell.primary-nav")["wordmark"].__setitem__("alt", "PAMIDOR.STUDIO"), "GENERATED_MODE_BRAND")
expect_reject("R5 brand: spelled loader letters", GEN_HOME, put("overlay.intro-loader", "letters", "P-A-M-I-D-O-R"), "GENERATED_MODE_BRAND")
expect_reject("R5 brand: source shop product name", GEN_SHOP, lambda s: C(s, "commerce.product-grid")["products"][0].__setitem__("title", "Red Series 01"), "GENERATED_MODE_BRAND")
expect_reject("R5 person: owner name as hero name", GEN_HOME, put("hero.home-intro", "name", "Dor Sharaby"), "GENERATED_MODE_PERSON")
expect_reject("R5 person: owner handle", GEN_STUDIO, put("hero.studio-intro", "answer", "Follow dorsharaby for updates."), "GENERATED_MODE_PERSON")
expect_reject("R5 client: client in projects list", GEN_HOME, lambda s: C(s, "work.projects-list")["projects"][0].__setitem__("name", "Figcoms"), "GENERATED_MODE_CLIENT")
expect_reject("R5 client/logo: client logo alt", GEN_HOME, lambda s: C(s, "narrative.studio-teaser")["clientLogos"][0].__setitem__("alt", "Kornit Digital"), "GENERATED_MODE_CLIENT")
expect_reject("R5 client: third party named in context", GEN_CASE, lambda s: C(s, "work.case-role")["points"].__setitem__(0, "Worked with Elementor teams."), "GENERATED_MODE_CLIENT")
expect_reject("R5 client: government client", GEN_CASE, put("hero.case-header", "title", "ISRAEL POLICE"), "GENERATED_MODE_CLIENT")
expect_reject("R5 store URL: source shop product link", GEN_SHOP, lambda s: C(s, "commerce.product-grid")["products"][0]["href"].__setitem__("href", "https://pamidordesign.co/shop/red-series-01"), "GENERATED_MODE_URL")
expect_reject("R5 store URL: third-party checkout host", GEN_PROD, lambda s: C(s, "hero.product-detail").__setitem__("backLink", {"label": "Checkout", "href": "https://checkout.stripe.com/x"}), "GENERATED_MODE_URL")
expect_reject("R5 url: social profile", GEN_HOME, lambda s: C(s, "shell.footer")["socials"].__setitem__(0, {"label": "Instagram", "href": "https://www.instagram.com/pamidor_design/"}), "GENERATED_MODE_URL")
expect_reject("R5 url: owner e-mail", GEN_STUDIO, lambda s: C(s, "conversion.studio-cta").__setitem__("contact", {"assetRole": "placeholder-url", "label": "Write", "href": "mailto:dor@pamidordesign.co"}), "GENERATED_MODE_URL")
expect_reject("R5 url: source form endpoint", GEN_SHOP, lambda s: C(s, "conversion.drops-signup").__setitem__("endpoint", {"assetRole": "placeholder-endpoint", "href": "/api/subscribe"}), "GENERATED_MODE_URL")
expect_reject("R5 url: non-reserved host", GEN_CASE, put("hero.case-header", "summary", "Live at tidewell-freight.com since spring."), "GENERATED_MODE_URL")
expect_reject("R5 copy: real tagline", GEN_HOME, lambda s: C(s, "hero.home-intro")["taglines"].__setitem__(0, "I take the fun seriously."), "GENERATED_MODE_COPY")
expect_reject("R5 copy: real headline", GEN_HOME, put("conversion.lead-form", "title", "Open the door"), "GENERATED_MODE_COPY")
expect_reject("R5 copy: footer motto", GEN_HOME, put("shell.footer", "motto", "Somewhere between structure and instinct."), "GENERATED_MODE_COPY")
expect_reject("R5 copy: reused 6-word sequence", GEN_STUDIO, put("narrative.process-steps", "intro", "Our projects move through five stages, adapted to what each one actually needs."), "GENERATED_MODE_COPY")
expect_reject("R5 copy: real legal sentence", GEN_LEGAL, lambda s: C(s, "legal.clause")["paragraphs"].__setitem__(0, "The short version: the site collects almost nothing, and nothing without telling you first."), "GENERATED_MODE_COPY")
expect_reject("R5 cta: Start Project", GEN_STUDIO, lambda s: C(s, "conversion.studio-cta").__setitem__("button", {"label": "Start Project", "href": "/contact"}), "GENERATED_MODE_CTA")
expect_reject("R5 cta: Enter The Lab", GEN_HOME, lambda s: C(s, "art.lab-teaser")["actions"].__setitem__(0, {"label": "Enter The Lab", "href": "/sketchbook"}), "GENERATED_MODE_CTA")
expect_reject("R5 cta: contact-the-owner pattern", GEN_HOME, put("conversion.lead-form", "directLabel", "Email Dor"), "GENERATED_MODE_CTA")
expect_reject("R5 rating: award badge in a generated page", GEN_HOME, lambda s: s["nodes"].insert(idx(s, "overlay.cookie-notice"), {"section": "shell.awwwards-badge", "content": {"badge": {"assetRole": "placeholder-rating", "alt": "Badge"}}, "motion": {"pattern": "none", "reducedMotionFallback": "none"}, "retrievalEligible": False}), "GENERATED_MODE_RATING")
expect_reject("R5 rating: launch ranking claim", GEN_CASE, lambda s: C(s, "work.case-role")["points"].__setitem__(1, "#33 on Product Hunt at launch."), "GENERATED_MODE_RATING")
expect_reject("R5 rating: award claim in copy", GEN_STUDIO, put("hero.studio-intro", "answer", "Our site won Site of the Day last spring."), "GENERATED_MODE_RATING")
expect_reject("R5 rating: star score", GEN_PROD, put("hero.product-detail", "shippingNote", "Rated 4.9/5 by buyers"), "GENERATED_MODE_RATING")
expect_reject("R5 media: client logo role", GEN_HOME, lambda s: C(s, "narrative.studio-teaser")["clientLogos"][0].__setitem__("assetRole", "client-logo"), "GENERATED_MODE_ASSET")
expect_reject("R5 media: source wordmark role", GEN_HOME, lambda s: C(s, "shell.primary-nav")["wordmark"].__setitem__("assetRole", "source-wordmark"), "GENERATED_MODE_ASSET")
expect_reject("R5 media: client case media", GEN_CASE, lambda s: C(s, "hero.case-header")["leadMedia"].__setitem__("assetRole", "client-case-media"), "GENERATED_MODE_ASSET")
expect_reject("R5 media: owner artwork", GEN_LAB, lambda s: C(s, "art.draggable-plane")["artworks"][0].__setitem__("assetRole", "owner-artwork"), "GENERATED_MODE_ASSET")
expect_reject("R5 media: studio showreel", GEN_HOME, lambda s: C(s, "narrative.studio-teaser")["showreel"].__setitem__("assetRole", "studio-showreel"), "GENERATED_MODE_ASSET")
expect_reject("R5 media: source asset path", GEN_CASE, lambda s: C(s, "hero.case-header")["leadMedia"].__setitem__("src", "/projects/figcoms/ui-design-1.jpg"), "GENERATED_MODE_ASSET")
expect_reject("R5 media: owner contact role", GEN_STUDIO, lambda s: C(s, "conversion.studio-cta")["contact"].__setitem__("assetRole", "owner-contact-link"), "GENERATED_MODE_ASSET")
expect_reject("R5 media: source endpoint role", GEN_HOME, lambda s: C(s, "conversion.lead-form")["endpoint"].__setitem__("assetRole", "source-endpoint"), "GENERATED_MODE_ASSET")
expect_reject("R5 likeness: owner portrait", GEN_HOME, lambda s: C(s, "hero.home-intro")["portrait"].__setitem__("assetRole", "owner-portrait-photo"), "GENERATED_MODE_LIKENESS")
expect_reject("R5 role: generation-safe role not allowed for the field", GEN_HOME, lambda s: C(s, "hero.home-intro")["portrait"].__setitem__("assetRole", "generated-backdrop-video"), "ASSET_ROLE_NOT_ALLOWED")
reg_loose = copy.deepcopy(REG)
reg_loose["roles"]["client-case-media"]["availability"] = "generation-safe"
expect_reject("R3 pin: registry loosened, pin still blocks client media", GEN_CASE, lambda s: C(s, "hero.case-header")["leadMedia"].__setitem__("assetRole", "client-case-media"), "GENERATED_MODE_ASSET", reg=reg_loose)

# ------------------------------------------------------------------ warn-level rules fire without failing
expect_warn("warn: legal label not parenthesised uppercase", REF_LEGAL, lambda s: C(s, "legal.clause").__setitem__("label", "Who I am"), "LEGAL_LABEL_STYLE")
expect_warn("warn: price without currency", REF_PROD, put("hero.product-detail", "price", "free"), "PRICE_FORMAT")


# ------------------------------------------------------------------ R9 wrapper gate + registry-level R8 / R3 (temp copies)
def temp_copy():
    t = Path(tempfile.mkdtemp(prefix="dr-adv-"))
    d = t / "design-repo"
    shutil.copytree(ROOT, d, ignore=shutil.ignore_patterns("__pycache__"))
    return d


WL_ENTRY = {"route": "/work/imotion", "section": "work.case-chapter", "maxHeightPx": 7000, "reviewedBy": "test reviewer",
            "justification": "One heading-bounded brand-system chapter used only to exercise the whitelist checks.", "measuredHeightPx": 6532}


def gate_case(name, mutate, want_error=None, want_warn=None):
    d = temp_copy()
    mvp, wlp = d / "extraction/measured-values.json", d / "extraction/wrapper-whitelist.json"
    mv, wl = json.loads(mvp.read_text()), json.loads(wlp.read_text())
    mutate(mv, wl)
    mvp.write_text(json.dumps(mv))
    wlp.write_text(json.dumps(wl))
    errs, warns = wrapper_gate.run(d)
    shutil.rmtree(d.parent)
    ok = (want_error is None or any(want_error in e for e in errs)) and (want_warn is None or any(want_warn in w for w in warns)) and (want_error is not None or not errs)
    (passed if ok else failed).append(name if ok else f"{name}: errors={errs[:3]} warnings={warns[:3]}")


def sec(mv, route, section, k=0):
    return [s for s in mv["sectionHeights"]["routes"][route]["sections"] if s["section"] == section][k]


def add_wl(**kw):
    return lambda mv, wl: wl["entries"].append(dict(WL_ENTRY, **kw))


gate_case("R9: HERO 1900px warns", lambda mv, wl: sec(mv, "/", "hero.home-intro").update(heightPx=1900), want_warn="HERO hero.home-intro 1900px")
gate_case("R9: HERO 3100px fails", lambda mv, wl: sec(mv, "/work/rise", "hero.case-header").update(heightPx=3100), want_error="HERO hero.case-header 3100px")
gate_case("R9: one section > 60% of its page fails", lambda mv, wl: sec(mv, "/work/imotion", "work.case-chapter", 2).update(heightPx=30000), want_error="holds")
gate_case("R9: one section 50-60% warns", lambda mv, wl: sec(mv, "/shop", "commerce.product-grid").update(heightPx=1700), want_warn="holds")
gate_case("R9: whitelist without justification fails", add_wl(justification="ok"), want_error="justification")
gate_case("R9: whitelist without reviewer fails", add_wl(reviewedBy=""), want_error="reviewedBy")
gate_case("R9: agent reviewer without attestation fails", add_wl(reviewedBy="build agent"), want_error="agent attestation")
gate_case("R9: stale whitelist cap fails", add_wl(maxHeightPx=100), want_error="maxHeightPx")
gate_case("R9: stale whitelist route fails", add_wl(route="/work/gone"), want_error="stale")
gate_case("R9: missing measurement fails", lambda mv, wl: mv["sectionHeights"]["routes"].pop("/terms"), want_error="/terms: no section-height measurement")
gate_case("R9: wrong viewport fails", lambda mv, wl: mv["sectionHeights"]["viewport"].update(width=1280), want_error="width 1280")


def verify_case(name, mutate, want):
    d = temp_copy()
    mutate(d)
    r = subprocess.run([sys.executable, "-B", str(d / "extraction/verify_all.py")], capture_output=True, text=True)
    shutil.rmtree(d.parent)
    ok = r.returncode != 0 and want in r.stdout
    (passed if ok else failed).append(name if ok else f"{name}: rc={r.returncode} missing '{want}' in output")


def edit_json(rel, fn):
    def m(d):
        p = d / rel
        o = json.loads(p.read_text())
        fn(o)
        p.write_text(json.dumps(o, indent=2))
    return m


verify_case("R8: allowlist flips cookie notice to eligible", edit_json("tokens/llm/component-allowlist.json", lambda o: o["sections"]["overlay.cookie-notice"].update(retrievalEligible=True)), "allowlist retrievalEligible")
verify_case("R8: contract flips drag cue to eligible", edit_json("sections/overlay.drag-cue.json", lambda o: (o.update(retrievalEligible=True), o.pop("retrievalIneligibleReason"))), "RETRIEVAL_INELIGIBLE")
verify_case("R3: registry availability loosened", edit_json("assets/asset-roles.json", lambda o: o["roles"]["owner-portrait-photo"].update(availability="generation-safe")), "registry availability")

# ------------------------------------------------------------------ controls
for p in sorted(EX.rglob("*.json")):
    res = sv.validate(json.loads(p.read_text()), REG)
    (failed if res.errors else passed).append(f"control {p.name}: {[(x['rule'], x['path']) for x in res.errors][:4]}" if res.errors else f"control {p.name}")
for t in REG["templates"]:
    for m in ("reference", "generated"):
        if not any(json.loads(p.read_text())["template"] == t and json.loads(p.read_text())["mode"] == m for p in EX.rglob("*.json")):
            failed.append(f"control: no {m} example for template {t}")
for g in GENERATED:
    f = sv.Findings()
    sv.leakage(f, g, REG)
    (failed if f else passed).append(f"control: generated {g['template']} leaks {[(x['rule'], x['path']) for x in f][:3]}" if f else f"control: generated {g['template']} has zero source identity")
for r in (REF_HOME, REF_CASE, REF_LEGAL):
    f = sv.Findings()
    sv.leakage(f, r, REG)
    (passed if f else failed).append(f"control: real {r['template']} content would trip {len({x['rule'] for x in f})} leakage rules if mislabelled generated, yet passes as reference" if f else f"control: leakage rules did not fire on real {r['template']} content")
gate_errs, _ = wrapper_gate.run(ROOT)
(passed if not gate_errs else failed).append("control: wrapper gate passes on the real measurements" if not gate_errs else f"control wrapper gate: {gate_errs}")

mutations = [p for p in passed if not p.startswith("control")]
ctrl = [p for p in passed if p.startswith("control")]
for p in passed:
    print("PASS ", p)
for x in failed:
    print("FAIL ", x)
print(f"\nadversarial: {len(mutations)} mutations rejected as expected, {len(ctrl)} controls passed, {len(failed)} failures")
sys.exit(1 if failed else 0)
