"""Graph, policy, source-brand harvest and example PageSpecs for build_repo.py.

Reference examples carry the source's real copy as evidence (excerpted where a paragraph is long); generated
examples are a fictional studio ("Larkspur Atelier", a fictional designer "Noa Venn") with original copy,
generation-safe asset roles and reserved-domain URLs only.
"""
import hashlib
import json
import re
from pathlib import Path

PAGESPEC_VERSION = "1.0.0"
ALLOWLIST_VERSION = "1.0.0"

RULES = [
    ("TEMPLATE_ROUTE", "error", "route must match the template routePattern"),
    ("TEMPLATE_SEQUENCE", "error", "node sequence must match the declared template's node list (min/max per (section, variant))"),
    ("TEMPLATE_VARIANT", "error", "a section with variants needs one of them; a section without variants takes none"),
    ("ONE_HERO", "error", "exactly one HERO node, except NO_HERO_TEMPLATES"),
    ("HERO_FIRST_CONTENT", "error", "the HERO is the first in-flow content node (sticky nav and fixed overlays excluded)"),
    ("LAST_CONTENT_NODE", "error", "sections with mustBeLastContent close the in-flow content (footer excluded)"),
    ("PART_OPENER_FIRST", "error", "when a case study uses part openers, its first chapter is one (observed on both case studies that use them)"),
    ("PART_FIELDS_MATCH_VARIANT", "error", "partLabel/partTitle only on part-opener chapters, and required there"),
    ("DEMO_ONCE", "error", "each interactive demo kind appears at most once per page"),
    ("STAT_VALUE_NUMERIC", "error", "a count-up stat value must contain a number (the count-up parser needs one)"),
    ("LEGAL_LABEL_STYLE", "warn", "legal clause labels are parenthesised uppercase, e.g. (HOSTING)"),
    ("PRICE_FORMAT", "warn", "prices are a currency sign followed by a number"),
    ("MAX_WORDS", "error", "text over the field's measured maxWords"),
    ("MOTION_PATTERN_NOT_ALLOWED", "error", "motion pattern not allowed for the section"),
    ("MOTION_FALLBACK_MISMATCH", "error", "reducedMotionFallback differs from the pattern's pinned fallback"),
    ("ASSET_ROLE_NOT_ALLOWED", "error", "asset role not allowed for this field in this mode"),
    ("RETRIEVAL_MISMATCH", "error", "retrievalEligible disagrees with the pinned RETRIEVAL_INELIGIBLE set"),
    ("TOKEN_UNKNOWN", "error", "style value is not a catalog token"),
    ("TOKEN_RAW_COLOR", "error", "raw hex/rgb/hsl/named colour in a style field"),
    ("TOKEN_ARBITRARY_SPACING", "error", "raw length in a spacing field"),
    ("TOKEN_FONT_UNSUPPORTED", "error", "font outside token-policy allowedFonts"),
    ("TOKEN_WRONG_CATEGORY", "error", "token category not allowed for the style field"),
    ("TOKEN_SECTION_SURFACE", "error", "surface not allowed for the section"),
    ("TOKEN_THEME_COMBO", "error", "text token not allowed on that surface"),
    ("GENERATED_MODE_BRAND", "error", "source brand / wordmark / domain-name variants in a generated page"),
    ("GENERATED_MODE_PERSON", "error", "the real owner's name or handles in a generated page"),
    ("GENERATED_MODE_CLIENT", "error", "real client, collaborator or third-party company names in a generated page"),
    ("GENERATED_MODE_URL", "error", "source URLs, e-mails, social profiles, endpoints or non-reserved hosts in a generated page"),
    ("GENERATED_MODE_COPY", "error", "source copy (distinctive phrases or any shared 6-word sequence) in a generated page"),
    ("GENERATED_MODE_CTA", "error", "source-specific CTA strings in a generated page"),
    ("GENERATED_MODE_ASSET", "error", "non-generation-safe asset role or a source asset path in a generated page"),
    ("GENERATED_MODE_LIKENESS", "error", "the owner's portrait / likeness role in a generated page"),
    ("GENERATED_MODE_RATING", "error", "award badges, rankings or rating claims taken from the source in a generated page"),
]

GRAPH = {
    "graphVersion": "1.0.0",
    "note": "Every rule here is implemented in schema/semantic_validate.py with the same id and severity; verify_all fails if the two disagree.",
    "NO_HERO_TEMPLATES": ["art-lab"],
    "noHeroReason": {"art-lab": "One fixed full-viewport canvas; its title and description are visually hidden, so the page has no opening composition separate from the canvas."},
    "rules": [{"id": i, "severity": s, "description": d} for i, s, d in RULES],
    "adjacency": {
        "case-study": "role -> (context) -> process -> chapters (3-10) -> next-project, observed on all four case studies; context absent on one.",
        "home": "hero -> studio band -> projects -> art-lab teaser -> skillset (night) -> lead form (night)",
    },
}


def section_contract_schema(templates, motion, roles, breakpoints):
    return {
        "$schema": "http://json-schema.org/draft-07/schema#", "$id": "section-contract.schema.json", "title": "Section contract",
        "type": "object", "additionalProperties": False,
        "required": ["id", "title", "contractVersion", "source", "semantic", "retrievalEligible", "templates", "content", "constraints", "layout", "responsive", "motion", "assetRoles", "generatedAssetRoles"],
        "properties": {
            "id": {"type": "string", "pattern": "^[a-z]+\\.[a-z0-9-]+$"},
            "title": {"type": "string"}, "contractVersion": {"type": "string"},
            "source": {"type": "object", "additionalProperties": False, "required": ["id", "file", "tag", "lines", "citation"],
                       "properties": {"id": {"type": "string"}, "file": {"type": "string"}, "tag": {"type": "string"}, "lines": {"type": "string", "pattern": "^[0-9]+-[0-9]+$"}, "citation": {"type": "string", "pattern": "^cite\\."}}},
            "semantic": {"type": "object", "additionalProperties": False, "required": ["id", "category", "purpose"],
                         "properties": {"id": {"type": "string"}, "category": {"enum": ["SHELL", "OVERLAY", "HERO", "NARRATIVE", "WORK", "SERVICES", "ART", "COMMERCE", "CONVERSION", "LEGAL"]}, "purpose": {"type": "string", "minLength": 20}}},
            "retrievalEligible": {"type": "boolean"},
            "retrievalIneligibleReason": {"type": "string", "minLength": 30},
            "templates": {"type": "array", "minItems": 1, "items": {"enum": templates}},
            "variants": {"type": "array", "items": {"type": "object", "additionalProperties": False, "required": ["id", "description", "evidence"], "properties": {"id": {"type": "string"}, "description": {"type": "string"}, "evidence": {"type": "string", "pattern": "^cite\\."}}}},
            "content": {"type": "object", "additionalProperties": False, "required": ["fields"], "properties": {"fields": {"type": "object"}}},
            "constraints": {"type": "object", "additionalProperties": False, "properties": {k: {"type": "boolean"} for k in ("onePerPage", "mustBeFirstContent", "mustBeLastContent")}},
            "layout": {"type": "object", "additionalProperties": False, "required": ["position", "surfaceTokens", "height"],
                       "properties": {"position": {"enum": ["in-flow", "sticky", "fixed"]}, "surfaceTokens": {"type": "array", "minItems": 1, "items": {"type": "string"}}, "height": {"type": "string"}}},
            "responsive": {"type": "object", "additionalProperties": False, "required": ["breakpoints", "changes"],
                           "properties": {"breakpoints": {"type": "array", "items": {"enum": breakpoints}},
                                          "changes": {"type": "array", "minItems": 1, "items": {"type": "object", "additionalProperties": False, "required": ["at", "property", "below", "atOrAbove", "evidence"],
                                                                                                  "properties": {"at": {"enum": breakpoints}, "property": {"type": "string"}, "below": {"type": "string"}, "atOrAbove": {"type": "string"}, "evidence": {"type": "string", "pattern": "^cite\\."}}}}}},
            "motion": {"type": "object", "additionalProperties": False, "required": ["allowedPatterns", "default"], "properties": {"allowedPatterns": {"type": "array", "minItems": 1, "items": {"enum": motion}}, "default": {"enum": motion}}},
            "assetRoles": {"type": "array", "items": {"enum": roles}},
            "generatedAssetRoles": {"type": "array", "items": {"enum": roles}},
            "instances": {"type": "array", "items": {"type": "string", "pattern": "^cite\\."}},
            "notes": {"type": "string"},
            "measuredInstances": {"type": "integer", "minimum": 1},
        },
        "allOf": [{"if": {"properties": {"retrievalEligible": {"const": False}}}, "then": {"required": ["retrievalIneligibleReason"]}}],
    }


def token_policy(catalog):
    cats = sorted({c["category"] for c in catalog.values()})
    return {
        "policyVersion": "1.0.0",
        "enforcedBy": "schema/semantic_validate.py (TOKEN_* rules)",
        "catalogCategories": cats,
        "styleFields": {"surface": ["surface"], "text": ["text"], "accent": ["accent"], "paddingBlock": ["space"], "displayFont": ["font"]},
        "allowedFonts": ["font.display", "font.text", "font.grotesk"],
        "accentTokens": ["accent.primary"],
        "spacingTokensForPadding": [t for t in catalog if t.startswith("space.section") or t.startswith("space.block")],
        "surfaceTextPairs": {
            "surface.page": ["text.primary", "text.muted", "text.accent"],
            "surface.night": ["text.on-night", "text.on-night-body", "text.on-night-muted", "text.on-page-inverse", "text.accent"],
            "surface.ink": ["text.on-night", "text.on-page-inverse"],
        },
        "rawValueRestrictions": {c: "reference a catalog token id; raw values are rejected" for c in cats},
        "overrides": "PageSpec nodes may set only the five style fields above, each to a catalog token id of the listed category. Everything else is owned by the section contract.",
        "notTokens": "Inline hex values found only inside the recreated client product UI (dashboard prototypes, e.g. #111827, #6B7280) belong to the client's product, not to this visual language, and are deliberately absent from the catalog.",
    }


# ------------------------------------------------------------------------------------------- source brand
def _norm(s):
    return re.sub(r"\s+", " ", re.sub(r"[^\w\s']", " ", str(s).lower().replace("\u2019", "'"))).strip()


def _h(s):
    return hashlib.sha256(s.encode()).hexdigest()[:16]


DISTINCTIVE = [  # short headline/tagline phrases (< 6 words) that must be caught on their own; each must exist in the harvest
    "Brands, products & the art in between.", "I take the fun seriously.", "OPEN THE DOOR", "Somewhere between structure and instinct.",
    "LET'S WORK TOGETHER", "Be first when the next piece lands", "Selected Projects", "The Art Lab", "ORIGINALS & PRINTS",
    "a name that sounds like an entrance", "Enter The Lab", "More From The Shop", "Jump To Project", "(LEAVE YOUR DETAILS)",
    "(CLIENTS & COLLABORATIONS)", "(MORE DROPS SOON)", "(DRAG ANYWHERE)",
]


def source_brand(h, proj):
    texts = []
    for r, v in h["routes"].items():
        texts += [v["title"]] + v["blocks"] + v["attrs"]
    corpus = " \n ".join(texts)
    n = 6
    sh = set()
    for t in texts:
        w = _norm(t).split()
        for i in range(len(w) - n + 1):
            sh.add(_h(" ".join(w[i:i + n])))
    ncorp = _norm(corpus.replace("\u2019", "'"))
    phrases = {}
    for p in DISTINCTIVE:
        q = _norm(p)
        if q not in ncorp:
            raise SystemExit(f"distinctive phrase not found in harvest: {p}")
        phrases.setdefault(str(len(q.split())), []).append(_h(q))
    links = sorted({l for v in h["routes"].values() for l in v["links"]})
    media = sorted({m for v in h["routes"].values() for m in v["media"] if m})
    prefixes = sorted({"/" + m.split("/")[1] + "/" for m in media if m.startswith("/") and m.count("/") > 1})
    # client / collaborator names: client-logo alt texts in the clients marquee + case-study names + third parties named in case copy
    studio = (proj / "src/sections/home/HomeMain2Studio.jsx").read_text()
    logo_alts = sorted(set(re.findall(r'src="/logos/[^"]+" alt="([^"]+)"', studio)) - {"Client logo"})
    third = ["Elementor", "Salesforce", "Looker Studio", "Product Hunt", "YAMAM", "Border Police", "Resend", "Stripe", "Vercel", "Google Analytics", "Awwwards"]
    ambiguous = {"Rise", "Links", "Drama", "Getin", "Malka", "Gardi", "Samlat"}
    client_rx = []
    for name in logo_alts + ["Figcoms", "iMotion", "Israel Police"] + third:
        if name not in corpus and name not in studio:
            raise SystemExit(f"client name not found in harvest/source: {name}")
        esc = re.escape(name).replace("\\ ", "\\s+")
        client_rx.append(("(?-i:\\b" + esc + "\\b)") if name in ambiguous else ("\\b" + esc + "\\b"))
    prod_src = (proj / "src/lib/shop/products.js").read_text()
    products = re.findall(r'"name":\s*"([^"]+)"', prod_src)
    if len(products) < 5:
        raise SystemExit("shop product names not found")
    product_rx = ["\\b" + re.escape(p).replace("\\ ", "\\s+") + "\\b" for p in products]
    return {
        "sourceBrand": {
            "version": "1.0.0",
            "harvestedFrom": "extraction/harvest_copy.mjs over every route of the rendered clone + src/sections/home/HomeMain2Studio.jsx logo alts + src/lib/shop/products.js product names; copy is stored only as sha256 fingerprints (first 16 hex)",
            "patterns": {
                "brand": {"rule": "GENERATED_MODE_BRAND", "evidence": "cite.shell.nav-home", "regex": [
                    "pamid+or", "p\\W{0,3}a\\W{0,3}m\\W{0,3}i\\W{0,3}d\\W{0,3}o\\W{0,3}r", "pamidor\\s*\\.?\\s*studio", "pamidor[\\s_-]*design"] + product_rx},
                "person": {"rule": "GENERATED_MODE_PERSON", "evidence": "cite.routes", "regex": [
                    "\\bsharaby\\b", "\\bdor\\s*sharaby\\b", "dorsharaby", "dor-sharaby", "(?-i:\\bDor\\b)", "\\bdor@"]},
                "client": {"rule": "GENERATED_MODE_CLIENT", "evidence": "cite.home.studio", "names": logo_alts + ["Figcoms", "iMotion", "Israel Police"], "thirdParties": third,
                           "ambiguousCaseSensitive": sorted(ambiguous), "regex": client_rx},
                "url": {"rule": "GENERATED_MODE_URL", "evidence": "cite.shell.footer",
                        "domains": ["pamidordesign.co", "awwwards.com", "instagram.com/pamidor_design", "linkedin.com/in/dor-sharaby", "dribbble.com/pamidordesign69", "pinterest.com/pamidordesign", "tiktok.com/@dorsharaby"],
                        "emails": ["dor@pamidordesign.co"], "endpoints": ["/api/subscribe", "/api/lead"],
                        "externalLinksSeen": [l for l in links if l.startswith(("http", "mailto:"))],
                        "assetPathPrefixes": prefixes, "allowedHostSuffixes": [".example", ".invalid"]},
                "cta": {"rule": "GENERATED_MODE_CTA", "evidence": "cite.studio.cta",
                        "exact": ["start project", "jump to project", "enter the lab", "send details", "open the door", "let's work together", "drag anywhere", "leave your details", "notify me when the next piece lands"],
                        "regex": ["\\b(hire|meet|email|write to|contact|call)\\s+dor\\b", "\\b(visit|shop|enter|explore)\\s+(the\\s+)?pamid"]},
                "copy": {"rule": "GENERATED_MODE_COPY", "evidence": "cite.home.hero", "shingleWords": n, "shingleHashes": sorted(sh),
                         "phraseHashes": phrases, "normalisation": "lowercase, punctuation -> space, collapse whitespace, curly apostrophe -> '"},
                "asset": {"rule": "GENERATED_MODE_ASSET", "evidence": "cite.artlab.main", "mediaPathsSeen": len(media)},
                "likeness": {"rule": "GENERATED_MODE_LIKENESS", "evidence": "cite.home.hero", "roles": ["owner-portrait-photo"]},
                "rating": {"rule": "GENERATED_MODE_RATING", "evidence": "cite.shell.badge", "sections": ["shell.awwwards-badge"],
                           "regex": ["awwwards", "\\bnominee\\b", "site of the day", "honou?rable mention", "#\\s?\\d+\\s+on\\s+product\\s+hunt", "product\\s+hunt", "\\b\\d(\\.\\d)?\\s*/\\s*5\\b", "\u2605"]},
            },
        }
    }


# ------------------------------------------------------------------------------------------- examples
MO = {
    "none": "none", "page-enter": "static-final-state", "reveal-rise": "static-final-state", "char-sweep": "static-label",
    "scroll-char-wave": "fully-lit-static", "marquee-loop": "static-row", "count-up": "final-value", "hero-3d-entrance": "static-final-state",
    "image-trail": "disabled", "clip-reveal": "static-final-state", "accordion-height": "instant-toggle", "menu-slide": "instant-toggle",
    "route-curtain": "instant-swap", "intro-sequence": "skip-intro", "plane-inertia": "no-inertia", "inview-video": "poster-frame", "delayed-slide-in": "instant-show",
}


def N(section, content, motion="none", variant=None, **extra):
    n = {"section": section}
    if variant:
        n["variant"] = variant
    n["content"] = content
    n["motion"] = {"pattern": motion, "reducedMotionFallback": MO[motion]}
    n.update(extra)
    return n


def m(role, alt, src=None):
    d = {"assetRole": role, "alt": alt}
    if src:
        d["src"] = src
    return d


# ---- chrome builders (reference = real source content, generated = fictional studio)
def ref_head(variant="sticky-bar", loader=False):
    nodes = [N("shell.skip-link", {"label": "Skip to content"}, retrievalEligible=False)]
    if loader:
        nodes.append(N("overlay.intro-loader", {"letters": "PAMIDOR", "images": [m("owner-artwork", "", f"/images/intro/intro-{i}.png") for i in range(1, 10)]}, "intro-sequence", retrievalEligible=False))
    nodes.append(N("shell.primary-nav", {"wordmark": m("source-wordmark", "PAMIDOR® STUDIO", "/images/wordmark-pamidor-studio-ink.svg"), "menuLabel": "Open menu"}, "hero-3d-entrance" if variant == "in-hero" else "none", variant))
    nodes.append(N("overlay.menu-panel", {"items": [{"label": "Home", "href": "/"}, {"label": "Studio", "href": "/studio"}, {"label": "Work", "href": "/#projects"}, {"label": "Art Lab", "href": "/art-lab"}],
                                          "contact": {"assetRole": "owner-contact-link", "label": "DOR@PAMIDORDESIGN.CO", "href": "mailto:dor@pamidordesign.co"}}, "menu-slide", retrievalEligible=False))
    return nodes


def ref_tail(footer=True, lightbox=False):
    nodes = []
    if footer:
        nodes.append(N("shell.footer", {"wordmark": m("source-wordmark", "Pamidor.Studio®", "/images/wordmark-pamidor-studio.svg"), "motto": "Somewhere between structure and instinct.",
                                        "contact": {"assetRole": "owner-contact-link", "label": "DOR@PAMIDORDESIGN.CO", "href": "mailto:dor@pamidordesign.co"},
                                        "legalLinks": [{"label": "PRIVACY", "href": "/privacy"}, {"label": "TERMS", "href": "/terms"}],
                                        "socials": [{"label": "Instagram", "href": "https://www.instagram.com/pamidor_design/"}, {"label": "LinkedIn", "href": "https://www.linkedin.com/in/dor-sharaby/"},
                                                    {"label": "Dribbble", "href": "https://dribbble.com/pamidordesign69"}, {"label": "Pinterest", "href": "https://www.pinterest.com/PamidorDesign/"},
                                                    {"label": "TikTok", "href": "https://www.tiktok.com/@dorsharaby"}],
                                        "copyright": "© 2026 Pamidor Studio. All rights reserved.", "credit": "Designed and built at Pamidor Studio by Dor Sharaby."}, "clip-reveal"))
    nodes += [N("shell.awwwards-badge", {"badge": m("award-badge", "Nominee on Awwwards")}, retrievalEligible=False),
              N("overlay.cookie-notice", {"body": "Analytics only - a count of visits and which work gets read. No ads, nothing sold.", "policyLink": {"label": "Cookie policy", "href": "/privacy#cookies"},
                                          "accept": "Accept", "decline": "Decline"}, "delayed-slide-in", retrievalEligible=False),
              N("overlay.cart-drawer", {"title": "Cart", "closeLabel": "Close cart"}, retrievalEligible=False)]
    if lightbox:
        nodes.append(N("overlay.board-lightbox", {"closeLabel": "(CLOSE)", "prevLabel": "(PREV)", "nextLabel": "(NEXT)"}, retrievalEligible=False))
    nodes += [N("overlay.route-curtain", {}, "route-curtain", retrievalEligible=False),
              N("shell.custom-cursor", {"cursor": m("custom-cursor-image", "", "/icons/cursor-28.png")}, retrievalEligible=False)]
    return nodes


GEN_MAIL = {"assetRole": "placeholder-url", "label": "hello@larkspur.example", "href": "mailto:hello@larkspur.example"}


def gen_head(variant="sticky-bar", loader=False):
    nodes = [N("shell.skip-link", {"label": "Go to content"}, retrievalEligible=False)]
    if loader:
        nodes.append(N("overlay.intro-loader", {"letters": "LARKSPUR", "images": [m("generated-artwork-visual", "", f"https://media.larkspur.example/intro-{i}.webp") for i in range(1, 5)]}, "intro-sequence", retrievalEligible=False))
    nodes.append(N("shell.primary-nav", {"wordmark": m("placeholder-brand-mark", "Larkspur Atelier"), "menuLabel": "Menu"}, "hero-3d-entrance" if variant == "in-hero" else "none", variant))
    nodes.append(N("overlay.menu-panel", {"items": [{"label": "Index", "href": "/"}, {"label": "About", "href": "/about"}, {"label": "Projects", "href": "/#work"}, {"label": "Sketchbook", "href": "/sketchbook"}],
                                          "contact": GEN_MAIL}, "menu-slide", retrievalEligible=False))
    return nodes


def gen_tail(footer=True, lightbox=False):
    nodes = []
    if footer:
        nodes.append(N("shell.footer", {"wordmark": m("placeholder-brand-mark", "Larkspur Atelier"), "motto": "Careful systems, loose sketches.", "contact": GEN_MAIL,
                                        "legalLinks": [{"label": "Privacy", "href": "/privacy"}, {"label": "Terms", "href": "/terms"}],
                                        "socials": [{"label": "Journal", "href": "https://journal.larkspur.example/"}],
                                        "copyright": "© 2031 Larkspur Atelier (fictional).", "credit": "Sample page composed from a design system."}, "clip-reveal"))
    nodes += [N("overlay.cookie-notice", {"body": "This sample page stores one preference and runs no trackers.", "policyLink": {"label": "Read more", "href": "/privacy"},
                                          "accept": "Okay", "decline": "No"}, "delayed-slide-in", retrievalEligible=False),
              N("overlay.cart-drawer", {"title": "Basket", "closeLabel": "Close"}, retrievalEligible=False)]
    if lightbox:
        nodes.append(N("overlay.board-lightbox", {"closeLabel": "Close", "prevLabel": "Back", "nextLabel": "Forward"}, retrievalEligible=False))
    nodes += [N("overlay.route-curtain", {}, "route-curtain", retrievalEligible=False),
              N("shell.custom-cursor", {"cursor": m("ui-icon-glyph", "")}, retrievalEligible=False)]
    return nodes


def spec(mode, template, route, title, nodes):
    return {"pageSpecVersion": PAGESPEC_VERSION, "mode": mode, "template": template, "route": route, "meta": {"title": title}, "nodes": nodes}


from examples_content import reference_examples, generated_examples  # noqa: E402


def examples():
    out = {}
    out.update(reference_examples(N, m, ref_head, ref_tail, spec))
    out.update(generated_examples(N, m, gen_head, gen_tail, spec))
    return out
