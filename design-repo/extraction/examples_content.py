"""Example PageSpec content.

reference_examples: one per template, built from the real source page (copy is the source's own, long paragraphs
excerpted to their opening sentences; asset paths are the clone's real public/ paths). They are EVIDENCE and
may only be used with mode "reference".
generated_examples: one per template for a fictional studio (Larkspur Atelier, fictional designer Noa Venn),
original copy, generation-safe roles, reserved-domain URLs. They are the controls of the R5 adversarial suite.
"""

OWNER_MAIL = {"assetRole": "owner-contact-link", "label": "dor@pamidordesign.co", "href": "mailto:dor@pamidordesign.co"}


def reference_examples(N, m, ref_head, ref_tail, spec):
    out = {}
    # ------------------------------------------------------------------ home
    home = ref_head("in-hero", loader=True) + [
        N("hero.home-intro", {"name": "Dor Sharaby", "taglines": ["Brands, products & the art in between.", "I take the fun seriously."],
                              "disciplines": ["Brand Design", "Product Design", "UX | UI", "Art Direction", "Motion & 3D"],
                              "portrait": m("owner-portrait-photo", "Dor Sharaby"),
                              "trail": [m("owner-artwork", "", f"/images/hero-trail/trail-{i}.webp") for i in range(1, 7)]}, "hero-3d-entrance",
          style={"surface": "surface.page", "text": "text.primary", "displayFont": "font.display"}),
        N("narrative.studio-teaser", {"statement": "Hi, I'm Dor - a brand & product designer with a name that sounds like an entrance. I build brands that people remember and products they don't have to think about. Identities, design systems and the interfaces they run on - and when the work needs art direction, motion or 3D, that gets made here too.",
                                      "showreel": m("studio-showreel", "Studio showreel", "/images/studio-showreel-poster.webp"), "clientsLabel": "(CLIENTS & COLLABORATIONS)",
                                      "clientLogos": [m("client-logo", "Rise", "/logos/c1-02.svg"), m("client-logo", "Gloog", "/logos/c1-03.png"), m("client-logo", "Kornit Digital", "/logos/c1-05.png")]}, "scroll-char-wave"),
        N("work.projects-list", {"title": "Selected Projects", "projects": [
            {"name": "Rise", "category": "Product · Client", "href": {"label": "Jump To Project", "href": "/work/rise"},
             "meta": [{"label": "ROLE", "value": "Brand · Product · Marketing · Motion & 3D"}, {"label": "TIMELINE", "value": "17 Months"}, {"label": "YEAR", "value": "2025-2026"}, {"label": "TEAM", "value": "In-House Studio"}],
             "cover": m("client-case-media", "Rise - Product · Client", "/images/project-rise.png")},
            {"name": "Figcoms", "category": "Product · Venture", "href": {"label": "Jump To Project", "href": "/work/figcoms"},
             "meta": [{"label": "ROLE", "value": "Brand & Product Design"}, {"label": "TIMELINE", "value": "4 Months"}, {"label": "YEAR", "value": "2025"}, {"label": "TEAM", "value": "Co-Founder"}],
             "cover": m("client-case-media", "Figcoms - Product · Venture", "/images/project-figcoms.png")},
            {"name": "iMotion", "category": "Brand · Device launch", "href": {"label": "Jump To Project", "href": "/work/imotion"},
             "meta": [{"label": "ROLE", "value": "Brand & Product Designer"}, {"label": "TIMELINE", "value": "3 Months"}, {"label": "YEAR", "value": "2025 / 2026"}, {"label": "TEAM", "value": "Co-founded studio"}],
             "cover": m("client-case-media", "iMotion - Brand · Device launch", "/images/project-imotion.png")},
            {"name": "Israel Police", "category": "Brand · Client", "href": {"label": "Jump To Project", "href": "/work/israel-police"},
             "meta": [{"label": "ROLE", "value": "Brand Design"}, {"label": "TIMELINE", "value": "Ongoing"}, {"label": "YEAR", "value": "2026"}, {"label": "TEAM", "value": "Israel Police (external)"}],
             "cover": m("client-case-media", "Israel Police - Brand · Client", "/projects/israel-police/border-police/cover.webp")}]}, "reveal-rise"),
        N("art.lab-teaser", {"title": "The Art Lab", "cards": [
            {"image": m("owner-artwork", "Art Lab - personal illustration work"), "body": "Let’s get one thing straight, I don't always play nicely within the lines. Welcome to my creative playground, This space is my unapologetic tribute to pure, unfiltered art. It’s where I completely ditch the grid, smash conventional aesthetics, and let my weirdest, most colorful thoughts run wildly out of control."},
            {"image": m("owner-artwork", "Art Lab - paintings and visual experiments"), "body": "Think of this section as a beautiful, chaotic dump of my personal illustrations, bold paintings, and non-stop visual experiments. It’s loud, it’s a little bit rebellious, and it’s driven entirely by raw creative instinct. No logic, no constraints, just pure art making a mess. Care to take a peek inside the madness?"}],
            "actions": [{"label": "Enter The Lab", "href": "/art-lab"}, {"label": "Art Shop", "href": "/shop"}]}, "reveal-rise"),
        N("services.skillset", {"title": "Skillset", "items": [
            {"index": "01", "name": "Product Design", "body": "From “we have an idea” to flows, prototypes and systems ready to grow.", "preview": m("client-case-media", "The iMotion device, controller and companion app", "/projects/imotion/hero.png")},
            {"index": "02", "name": "Brand & Art Direction", "body": "Identities with a point of view, built to be recognized, remembered and used.", "preview": m("client-case-media", "The Rise brand system - palette, logo, shapes and imagery", "/projects/rise/brand-system-preview.jpg")},
            {"index": "03", "name": "UX | UI", "body": "Clear interfaces for real behavior, weird edge cases and every screen in between.", "preview": m("client-case-media", "The Figcoms review board on desktop", "/projects/figcoms/ui-screens.png")},
            {"index": "04", "name": "Motion & 3D", "body": "Motion and 3D that explain, elevate and occasionally steal the show.", "preview": m("client-case-media", "Rise - glass forms from the 3D system", "/projects/rise/motion-3d-preview.jpg")}]}, "reveal-rise",
          style={"surface": "surface.night", "text": "text.on-night", "paddingBlock": "space.section-lg"}),
        N("conversion.lead-form", {"eyebrow": "(LEAVE YOUR DETAILS)", "title": "OPEN THE DOOR", "directLabel": "Or just write:", "contact": OWNER_MAIL,
                                   "fields": [{"label": "NAME", "placeholder": "Your full name"}, {"label": "EMAIL", "placeholder": "name@company.com"}, {"label": "PHONE", "placeholder": "+972"},
                                              {"label": "REASON"}, {"label": "MESSAGE", "placeholder": "A few words"}],
                                   "reasons": ["Freelance project", "Role / Opportunity", "Just saying hi"], "submitLabel": "Send Details",
                                   "privacyNote": "Sent details land in my inbox and nowhere else - privacy policy",
                                   "endpoint": {"assetRole": "source-endpoint", "href": "/api/lead"}, "backdrop": m("ambient-backdrop-video", "", "/images/form-sky.webp")}, "inview-video"),
    ] + ref_tail()
    out["reference.home"] = spec("reference", "home", "/", "Dor Sharaby | Brand & Product Designer | Pamidor Studio", home)

    # ------------------------------------------------------------------ studio
    studio = ref_head() + [
        N("hero.studio-intro", {"eyebrow": "(DOR SHARABY · PAMIDOR STUDIO)", "title": "Studio",
                                "facts": [{"label": "Designing since", "value": "2021"}, {"label": "Studio founded", "value": "2023"}, {"label": "Based in", "value": "Tel Aviv"}, {"label": "Clients", "value": "Israel & worldwide"}],
                                "question": "Who is Dor Sharaby?",
                                "answer": "I’m Dor Sharaby, a brand and product designer based in Tel Aviv, Israel, and the founder of Pamidor Studio. I’ve been designing professionally since 2021 and opened the studio in 2023."}, "reveal-rise"),
        N("narrative.approach-statement", {"statement": "I combine persistence, creative thinking, and attention to detail to solve problems through visual design.",
                                           "question": "What makes your approach different?",
                                           "answer": "I combine product thinking with a strong background in visual design, branding and art direction, and I enjoy solving complex problems through visual ideas that challenge both how people see and how they feel."}, "scroll-char-wave"),
        N("narrative.industries", {"sectors": ["Technology & SaaS", "Artificial Intelligence", "Fintech", "Cybersecurity", "AdTech", "Consumer Brands", "Digital Products"],
                                   "question": "Which industries do you work in?",
                                   "answer": "I work mostly in technology and SaaS, artificial intelligence, fintech, cybersecurity, adtech, consumer brands and digital products."}, "marquee-loop"),
        N("narrative.process-steps", {"title": "What does working with you look like?",
                                      "intro": "Most projects move through five stages, adapted to what each one actually needs. The process is flexible and changes with the kind of project - not every one needs all five stages, and some spend most of their time in just one or two of them.",
                                      "steps": [{"index": "01", "title": "Discovery & Research", "body": "Understanding the business, its audience, challenges, and goals."},
                                                {"index": "02", "title": "Strategy & Direction", "body": "Defining the creative direction, design approach, and project priorities."},
                                                {"index": "03", "title": "Concept & Exploration", "body": "Exploring visual ideas, structures, interactions, and possible solutions."},
                                                {"index": "04", "title": "Design & Development", "body": "Turning selected concepts into complete visual identities, interfaces, or digital experiences."},
                                                {"index": "05", "title": "Refinement & Delivery", "body": "Testing, refining, and preparing the final design assets for implementation."}]}, "reveal-rise"),
        N("narrative.faq", {"eyebrow": "(Questions)", "items": [
            {"question": "What do you specialize in?", "answer": "I focus on digital product design, brand identity and visual systems, combining UX/UI with strong visual direction."},
            {"question": "Do you work with startups?", "answer": "Yes - I work with early-stage startups, growing companies and established brands, and also with independent clients."},
            {"question": "Do you work internationally?", "answer": "Yes - I’m based in Tel Aviv and work with clients both in Israel and around the world."},
            {"question": "Can you handle both branding and product design?", "answer": "Yes - I can develop a visual identity and carry its design language into digital products and interfaces."},
            {"question": "Do you offer 3D and motion design?", "answer": "Yes - I use 3D, motion and digital illustration when they add value to the project, not as decoration laid on top of it."},
            {"question": "How do projects usually start?", "answer": "With a conversation about the idea, the challenges, the scope and what needs to be achieved."}]}, "accordion-height"),
        N("conversion.studio-cta", {"headlineLines": ["LET’S WORK", "TOGETHER"], "button": {"label": "Start Project", "href": "/#start-project"}, "contact": OWNER_MAIL}, "reveal-rise"),
    ] + ref_tail()
    out["reference.studio"] = spec("reference", "studio", "/studio", "Studio - Dor Sharaby · Pamidor Studio", studio)

    # ------------------------------------------------------------------ case study (figcoms)
    F = "/_img/projects/figcoms/"
    case = ref_head() + [
        N("hero.case-header", {"eyebrow": "(CASE STUDY · 02)", "title": "FIGCOMS", "disciplines": ["Product Design", "UX | UI", "Art Direction", "Motion & 3D"],
                               "summary": "Figcoms is a workflow platform built on a simple idea: Figma comments are powerful, but the work around them is broken. Instead of pulling teams out of Figma, Figcoms extends it - turning scattered comments into a structured, syncable workflow that lives where the work already happens.",
                               "leadMedia": m("client-case-media", "Figcoms - the review board, walkthrough", "/projects/figcoms/ui-design-1.jpg"),
                               "meta": [{"label": "ROLE", "value": "Brand & Product Design"}, {"label": "TIMELINE", "value": "4 Months"}, {"label": "YEAR", "value": "2025"}, {"label": "TEAM", "value": "Co-Founder"}]}, "page-enter"),
        N("work.case-role", {"eyebrow": "(MY ROLE)", "points": [
            "Co-founded Figcoms and designed the product: the board, the four states, and the flow between them.",
            "Replaced the first control set with an emoji-based status system once it started adding complexity instead of removing it.",
            "Built the identity, the motion language and the landing page in parallel with the app."]}, "reveal-rise"),
        N("work.case-context", {"items": [
            {"label": "(WHY IT EXISTS)", "body": "Out of work with the design and dev teams at Elementor and Salesforce. Everyone comments inside Figma; past ten frames nobody can tell what is waiting, working, in review or done."},
            {"label": "(THE FIRST VERSION DID TOO MUCH)", "body": "The early controls turned every comment into a form. They were cut for four states and an emoji."},
            {"label": "(AFTER LAUNCH)", "body": "Two people, four months. #33 on Product Hunt the day it shipped, and used on real projects since."}]}, "reveal-rise"),
        N("work.case-process", {"title": "Process", "steps": [
            {"index": "01", "title": "Research & Context", "body": "We mapped how teams actually use Figma comments today. The pain pointed to ownership, priority, and continuity - not to Figma itself."},
            {"index": "02", "title": "Concept & Flow", "body": "The core mechanic became “one link, instant clarity.” Paste a Figma URL, get an organized workspace built around four states every team already speaks."},
            {"index": "03", "title": "UX/UI & Interaction", "body": "Soft cards, generous whitespace, and a typographic hierarchy that lets the comment lead. Emoji-based status changes replaced heavy controls."},
            {"index": "04", "title": "System & Experience", "body": "Identity, motion language, and landing page were built in parallel with the app so marketing and product speak one sentence."}]}, "reveal-rise"),
        N("work.case-chapter", {"title": "How It Works", "intro": "Paste a Figma link. Every comment becomes a task with an owner and a status, and every change syncs back - what the team sees here is what they see in the file.",
                                "steps": ["User Flow", "Board Structure", "Sync Layer"],
                                "media": [{"kind": "board-gallery", "asset": m("client-case-media", "Figcoms user flow", "/projects/figcoms/userflow-diagram.png")},
                                          {"kind": "board-gallery", "asset": m("client-case-media", "Figcoms board structure", "/projects/figcoms/ux-diagram.png")},
                                          {"kind": "board-gallery", "asset": m("client-case-media", "Figcoms sync layer", "/projects/figcoms/sync-diagram.png")}]}, "reveal-rise", "chapter"),
        N("work.case-chapter", {"title": "The Board", "intro": "The interface had to look like a workflow tool without feeling like one. A Kanban-style flow across Backlog → Working → In Review → Done, stress-tested on real projects before any pixel was drawn.",
                                "media": [{"kind": "image", "asset": m("client-case-media", "Figcoms UX board", F + "ux-board-3840.webp")}, {"kind": "image", "asset": m("client-case-media", "Figcoms UI board", F + "ui-board-3840.webp")}]}, "reveal-rise", "chapter"),
        N("work.case-chapter", {"title": "In The Detail", "intro": "Soft cards, generous whitespace, and emoji-based status changes - fewer clicks, more personality, and a language teams already speak inside Figma.",
                                "media": [{"kind": "image-pair", "asset": m("client-case-media", "Figcoms detail A", F + "ui-detail-a-3840.webp")}, {"kind": "image-pair", "asset": m("client-case-media", "Figcoms detail B", F + "ui-detail-b-3840.webp")}]}, "reveal-rise", "chapter"),
        N("work.case-chapter", {"title": "Marketing Material", "intro": "Identity, motion language, and landing page were built in parallel with the app, so the product and the way it is talked about speak one sentence.",
                                "media": [{"kind": "image", "asset": m("client-case-media", "Figcoms waitlist e-mail", F + "marketing/email-waitlist-3840.webp")},
                                          {"kind": "image", "asset": m("client-case-media", "Figcoms onboarding step 1", F + "marketing/step1-visual-3840.webp")}]}, "reveal-rise", "chapter"),
        N("work.case-chapter", {"title": "Shipped", "media": [{"kind": "image", "asset": m("client-case-media", "Figcoms - the board on desktop", F + "ui-screens-3840.webp")},
                                                             {"kind": "video", "asset": m("client-case-media", "Figcoms - status change interaction", "/projects/figcoms/ui-design-2.jpg")}]}, "inview-video", "chapter"),
        N("work.next-project", {"eyebrow": "NEXT PROJECT", "project": {"label": "IMOTION", "href": "/work/imotion"}}, "char-sweep"),
    ] + ref_tail(lightbox=True)
    out["reference.case-study"] = spec("reference", "case-study", "/work/figcoms", "Figcoms - Case Study · Dor Sharaby", case)

    # ------------------------------------------------------------------ shop index
    def card(name, cat, price, line, slug):
        return {"category": cat, "flag": "SOLD OUT", "title": name, "price": price, "edition": line,
                "image": m("owner-artwork", name, f"/shop/{slug}.webp"), "href": {"label": name, "href": f"/shop/{slug}"}}
    cards = [card("Red Series 01", "PRINT", "$140", "Giclée print · Edition of 10", "red-series-01"), card("Red Series 02", "PRINT", "$140", "Giclée print · Edition of 10", "red-series-02"),
             card("Red Series 03", "PRINT", "$140", "Giclée print · Edition of 10", "red-series-03"), card("Inked Frame", "FRAMED", "$132", "Framed print · Edition of 10", "inked-frame"),
             card("Pink Portrait", "FRAMED", "$108", "Framed print · Edition of 10", "pink-portrait")]
    shop = ref_head() + [
        N("hero.shop-header", {"eyebrow": "(ART SHOP)", "titleLines": ["ORIGINALS", "& PRINTS"], "intro": "Original pieces and limited prints from the studio’s art practice. Every piece is signed, numbered and shipped worldwide, framed or rolled."}, "page-enter"),
        N("commerce.shop-filters", {"filters": ["All", "Prints", "Originals", "Framed"], "sortLabel": "SORT: NEWEST"}),
        N("commerce.product-grid", {"products": cards}, "reveal-rise"),
        N("conversion.drops-signup", {"eyebrow": "(MORE DROPS SOON)", "title": "Be first when the next piece lands", "promise": "One email per drop. Nothing else, ever.", "placeholder": "you@studio.com",
                                      "submitLabel": "Notify Me", "privacyNote": "Only for drop announcements. Unsubscribe any time by replying. See the Privacy Policy.",
                                      "endpoint": {"assetRole": "source-endpoint", "href": "/api/subscribe"}}, "char-sweep"),
    ] + ref_tail()
    out["reference.shop-index"] = spec("reference", "shop-index", "/shop", "Originals & Prints - Pamidor Studio", shop)

    # ------------------------------------------------------------------ product detail
    prod = ref_head() + [
        N("hero.product-detail", {"backLink": {"label": "Back to shop", "href": "/shop"},
                                  "images": [m("owner-artwork", "Red Series 01 - red ink illustration from the Pamidor series", "/shop/red-series-01.webp"), m("owner-artwork", "Red Series 01 - the original pencil sketch", "/shop/red-series-01-sketch.webp")],
                                  "editionChip": "PRINT · EDITION OF 10", "title": "Red Series 01", "price": "$140", "shippingNote": "Ships rolled or framed, worldwide",
                                  "description": "Red ink illustration from the Pamidor series, printed as a giclée on archival cotton paper. Each print is signed and numbered. The original pencil sketch is shown in the gallery.",
                                  "specs": [{"label": "SIZE", "value": "50 × 70 cm"}, {"label": "MEDIUM", "value": "Giclée on archival paper"}, {"label": "EDITION", "value": "Edition of 10, signed"},
                                            {"label": "SHIPPING", "value": "Worldwide, 5 to 7 days"}, {"label": "RETURNS", "value": "14 days, no questions"}],
                                  "editionNote": "Every piece is an edition of 10, signed and numbered by hand. Once all ten are gone the piece leaves the shop for good - a numbered edition is never reprinted.",
                                  "buyLabel": "SOLD OUT", "askLabel": "Ask a Question", "trustNote": "Secure checkout · Ships from Tel Aviv", "soldOut": True}, "page-enter"),
        N("commerce.more-from-shop", {"title": "More From The Shop", "viewAll": {"label": "VIEW ALL", "href": "/shop"}, "products": cards[1:4]}, "reveal-rise"),
    ] + ref_tail()
    out["reference.product-detail"] = spec("reference", "product-detail", "/shop/red-series-01", "Red Series 01 - Pamidor Studio Shop", prod)

    # ------------------------------------------------------------------ legal (privacy)
    clauses = [
        ("(WHO I AM)", ["This site, pamidordesign.co, is the portfolio of Dor Sharaby - Pamidor Studio - a designer working from Tel Aviv, Israel. For anything about your data, one address answers: dor@pamidordesign.co.",
                        "The short version: the site collects almost nothing, and nothing without telling you first."]),
        ("(THE CONTACT FORM)", ["If you write to me through the form, what you type - your name, email, phone if you add one, the reason you picked and your message - is delivered straight to my inbox."]),
        ("(THE SHOP & PAYMENTS)", ["Buying a piece happens on Stripe's own hosted checkout page - your card details go to Stripe, never to this site, which never sees and never stores them."]),
        ("(THE DROPS LIST)", ["The shop has one field that asks for an email address, and it does exactly what it says: it tells you when new work lands."]),
        ("(ANALYTICS)", ["Two things count visits here, and only one of them asks first."]),
        ("(COOKIES)", ["The site itself sets no cookies. It keeps one value in your browser's local storage to remember your cookie choice, and Google Analytics sets its cookies only after you accept:"]),
        ("(HOSTING)", ["The site is served by Vercel. Like any host, it processes the technical side of a request - your IP address and the page you asked for - to deliver the site and protect it from abuse."]),
        ("(YOUR RIGHTS)", ["Under Israel's Privacy Protection Law - and the GDPR, if you are writing from the EU - you can ask to see, correct or delete personal information held about you."]),
        ("(CHANGES)", ["If the site ever starts collecting something new, this page changes first, and the cookie notice is versioned so it will ask for consent again rather than lean on an old answer."]),
    ]
    legal = ref_head() + [N("hero.legal-header", {"eyebrow": "(LAST UPDATED: OCTOBER 18, 2026)", "title": "Privacy"}, "page-enter")]
    for label, paras in clauses:
        c = {"label": label, "paragraphs": paras}
        if label == "(COOKIES)":
            c["action"] = "Reset cookie choice"
        legal.append(N("legal.clause", c))
    legal += ref_tail()
    out["reference.legal"] = spec("reference", "legal", "/privacy", "Privacy Policy - Pamidor Studio", legal)

    # ------------------------------------------------------------------ art lab
    arts = ["n-14", "card2", "tee-burst", "q-black-tees", "im26", "card1", "tee-arches", "im04", "tote-plant", "shelf-bw", "im10", "im12"]
    lab = [N("shell.skip-link", {"label": "Skip to content"}, retrievalEligible=False),
           N("art.lab-header", {"wordmark": m("source-wordmark", "PAMIDOR® STUDIO", "/images/wordmark-pamidor-studio.svg"), "cornerLink": {"label": "Figcoms", "href": "/work/figcoms"}}, "char-sweep"),
           N("art.draggable-plane", {"srTitle": "The Art Lab",
                                     "srDescription": "164 pieces of personal work by Dor Sharaby - posters, apparel graphics, editorial spreads, 3D studies, packaging and type - arranged by color on one plane you can drag in any direction. Use the arrow keys to move the field.",
                                     "artworks": [m("owner-artwork", "Art Lab artwork", f"/art-lab/opt/{a}.webp") for a in arts]}, "plane-inertia"),
           N("overlay.drag-cue", {"label": "(DRAG ANYWHERE)"}, retrievalEligible=False)] + ref_tail(footer=False)
    out["reference.art-lab"] = spec("reference", "art-lab", "/art-lab", "The Art Lab - Pamidor Studio", lab)
    return out


GEN_MAIL = {"assetRole": "placeholder-url", "label": "hello@larkspur.example", "href": "mailto:hello@larkspur.example"}


def generated_examples(N, m, gen_head, gen_tail, spec):
    out = {}
    G = "https://media.larkspur.example/"
    home = gen_head("in-hero", loader=True) + [
        N("hero.home-intro", {"name": "Noa Venn", "taglines": ["Identity work for small, stubborn companies.", "Quiet systems, loud ideas."],
                              "disciplines": ["Identity", "Interfaces", "Editorial", "Illustration", "Type"],
                              "portrait": m("fictional-person-portrait", "Fictional designer portrait", G + "portrait.webp"),
                              "trail": [m("generated-artwork-visual", "", G + f"trail-{i}.webp") for i in range(1, 4)]}, "hero-3d-entrance",
          style={"surface": "surface.page", "text": "text.primary", "displayFont": "font.display"}),
        N("narrative.studio-teaser", {"statement": "Larkspur is a two-desk practice that draws identities, product screens and the odd poster. Most jobs begin as a messy brief and end as a small, well-labelled kit a team can keep using without us in the room.",
                                      "showreel": m("generated-project-media", "Sample reel", G + "reel.webp"), "clientsLabel": "(SAMPLE PARTNERS)",
                                      "clientLogos": [m("placeholder-brand-mark", "Partner mark A"), m("placeholder-brand-mark", "Partner mark B")]}, "scroll-char-wave"),
        N("work.projects-list", {"title": "Recent work", "projects": [
            {"name": "Hollow Pine", "category": "Identity · Cafe", "href": {"label": "Read the story", "href": "/projects/hollow-pine"},
             "meta": [{"label": "SCOPE", "value": "Identity and signage"}, {"label": "LENGTH", "value": "Ten weeks"}, {"label": "YEAR", "value": "2030"}, {"label": "CREW", "value": "Two people"}],
             "cover": m("generated-project-media", "Sample cafe identity board", G + "hollow-pine.webp")},
            {"name": "Tidewell", "category": "App · Logistics", "href": {"label": "Read the story", "href": "/projects/tidewell"},
             "meta": [{"label": "SCOPE", "value": "Dispatcher app"}, {"label": "LENGTH", "value": "Five months"}, {"label": "YEAR", "value": "2031"}, {"label": "CREW", "value": "Embedded"}],
             "cover": m("generated-project-media", "Sample dispatcher app screens", G + "tidewell.webp")}]}, "reveal-rise"),
        N("art.lab-teaser", {"title": "Sketchbook", "cards": [
            {"image": m("generated-artwork-visual", "Ink studies of birds", G + "sketch-1.webp"), "body": "Loose ink studies made between projects, mostly birds and street furniture, scanned without cleanup."},
            {"image": m("generated-artwork-visual", "Collage experiments in two colours", G + "sketch-2.webp"), "body": "Two-colour collage tests that sometimes turn into posters and usually turn into nothing at all."}],
            "actions": [{"label": "Open the sketchbook", "href": "/sketchbook"}, {"label": "Print shop", "href": "/prints"}]}, "reveal-rise"),
        N("services.skillset", {"title": "Services", "items": [
            {"index": "01", "name": "Identity", "body": "Marks, type pairings and rules a small team can apply alone.", "preview": m("generated-project-media", "Sample identity sheet", G + "svc-1.webp")},
            {"index": "02", "name": "Interfaces", "body": "Screens that stay legible when the data gets ugly.", "preview": m("generated-project-media", "Sample interface", G + "svc-2.webp")}]}, "reveal-rise",
          style={"surface": "surface.night", "text": "text.on-night", "paddingBlock": "space.section-lg"}),
        N("conversion.lead-form", {"eyebrow": "(SAY HELLO)", "title": "Start a brief", "directLabel": "Prefer e-mail?", "contact": GEN_MAIL,
                                   "fields": [{"label": "Name", "placeholder": "Full name"}, {"label": "Email", "placeholder": "you@mail.example"}, {"label": "Note", "placeholder": "Two lines"}],
                                   "reasons": ["New project", "Collaboration"], "submitLabel": "Send brief", "privacyNote": "Briefs go to one inbox and are deleted after a year.",
                                   "endpoint": {"assetRole": "placeholder-endpoint", "href": "https://forms.larkspur.invalid/brief"}, "backdrop": m("generated-backdrop-video", "", G + "dusk-loop.webp")}, "inview-video"),
    ] + gen_tail()
    out["generated.home"] = spec("generated", "home", "/", "Larkspur Atelier - identity and interface studio (sample)", home)

    studio = gen_head() + [
        N("hero.studio-intro", {"eyebrow": "(ABOUT THE ATELIER)", "title": "About", "facts": [{"label": "Drawing since", "value": "2019"}, {"label": "Desks", "value": "Two"}],
                                "question": "Who runs Larkspur?", "answer": "Noa Venn, a fictional designer used for this sample page, who splits time between identity systems and product screens."}, "reveal-rise"),
        N("narrative.approach-statement", {"statement": "We keep the first draft ugly on purpose, so nobody falls in love with it too early.",
                                           "question": "How do you work?", "answer": "Short loops, printed proofs on the wall, and a written decision log the client keeps."}, "scroll-char-wave"),
        N("narrative.industries", {"sectors": ["Hospitality", "Logistics", "Publishing"], "question": "Who do you work with?", "answer": "Mostly cafes, small publishers and operations teams that need tools to read clearly."}, "marquee-loop"),
        N("narrative.process-steps", {"title": "What a project looks like", "intro": "Three phases, each closed by a short written review.",
                                      "steps": [{"index": "01", "title": "Listen", "body": "Interviews and a walk through the current materials."},
                                                {"index": "02", "title": "Draft", "body": "Rough options pinned up side by side."},
                                                {"index": "03", "title": "Hand over", "body": "A kit, a guide and a call a month later."}]}, "reveal-rise"),
        N("narrative.faq", {"eyebrow": "(FAQ)", "items": [{"question": "Do you take small jobs?", "answer": "Yes, if the scope fits in a few weeks."},
                                                          {"question": "Can you work remotely?", "answer": "Always; reviews happen on calls and shared boards."}]}, "accordion-height"),
        N("conversion.studio-cta", {"headlineLines": ["New brief?", "Say hello"], "button": {"label": "Write us", "href": "/contact"}, "contact": GEN_MAIL}, "reveal-rise"),
    ] + gen_tail()
    out["generated.studio"] = spec("generated", "studio", "/studio", "About - Larkspur Atelier (sample)", studio)

    case = gen_head() + [
        N("hero.case-header", {"eyebrow": "(PROJECT · 01)", "title": "TIDEWELL", "disciplines": ["Interfaces", "Identity"],
                               "summary": "Tidewell is a fictional freight dispatcher used for this sample. Its operators juggled radio calls and spreadsheets; the project gave them one screen that shows every truck, every delay and who owns it.",
                               "leadMedia": m("generated-project-media", "Sample dispatcher dashboard", G + "tidewell-lead.webp"),
                               "meta": [{"label": "SCOPE", "value": "App and identity"}, {"label": "LENGTH", "value": "Five months"}, {"label": "YEAR", "value": "2031"}, {"label": "CREW", "value": "Embedded"}]}, "page-enter"),
        N("work.case-role", {"eyebrow": "(OUR PART)", "points": ["Mapped the dispatch desk with the night shift.", "Designed the board, the alerts and the handover view."]}, "reveal-rise"),
        N("work.case-process", {"title": "Method", "steps": [{"index": "01", "title": "Shadowing", "body": "Two nights at the desk, notes on every interruption."},
                                                              {"index": "02", "title": "Paper board", "body": "A wall of cards tested before any screen existed."},
                                                              {"index": "03", "title": "Pilot", "body": "One depot, four weeks, daily fixes."}]}, "reveal-rise"),
        N("work.case-chapter", {"partLabel": "(PART 01)", "partTitle": "The board", "partIntro": "Everything starts from one wall of moving cards.",
                                "eyebrow": "(VIEW 01)", "title": "Live board", "intro": "Each truck is a card; colour only marks a problem, never decoration.",
                                "stats": [{"value": "38", "caption": "trucks on one screen"}, {"value": "4", "caption": "alert levels"}],
                                "media": [{"kind": "image", "asset": m("generated-project-media", "Sample board view", G + "board.webp")}],
                                "demo": "dashboard-finder"}, "count-up", "part-opener"),
        N("work.case-chapter", {"title": "Handover", "intro": "Shift change became a single printed page instead of a phone call.",
                                "media": [{"kind": "image", "asset": m("generated-project-media", "Sample handover sheet", G + "handover.webp")}]}, "reveal-rise", "chapter"),
        N("work.case-chapter", {"title": "Identity", "intro": "A plain wordmark and a tide-line motif that survives fax and phone screens alike.",
                                "media": [{"kind": "board-gallery", "asset": m("generated-project-media", "Sample identity board", G + "identity.webp")},
                                          {"kind": "video", "asset": m("generated-project-media", "Sample motion study", G + "motion.webp")}]}, "inview-video", "chapter"),
        N("work.next-project", {"eyebrow": "Up next", "project": {"label": "HOLLOW PINE", "href": "/work/hollow-pine"}}, "char-sweep"),
    ] + gen_tail(lightbox=True)
    out["generated.case-study"] = spec("generated", "case-study", "/work/tidewell", "Tidewell - sample project (fictional)", case)

    def gcard(name, cat, price, slug):
        return {"category": cat, "title": name, "price": price, "edition": "Risograph · run of 30", "image": m("generated-artwork-visual", name, G + slug + ".webp"), "href": {"label": name, "href": "/shop/" + slug}}
    gcards = [gcard("Gull Study", "PRINT", "€40", "gull-study"), gcard("Bench No. 4", "PRINT", "€40", "bench-4"), gcard("Night Ferry", "POSTER", "€55", "night-ferry")]
    shop = gen_head() + [
        N("hero.shop-header", {"eyebrow": "(PRINT SHOP)", "titleLines": ["SMALL", "RUNS"], "intro": "Risograph prints from the sketchbook, printed in short runs and posted flat."}, "page-enter"),
        N("commerce.shop-filters", {"filters": ["Everything", "Prints", "Posters"], "sortLabel": "Latest first"}),
        N("commerce.product-grid", {"products": gcards}, "reveal-rise"),
        N("conversion.drops-signup", {"eyebrow": "(NEW RUNS)", "title": "Hear about the next print run", "promise": "A short note when something new is printed.", "placeholder": "you@mail.example",
                                      "submitLabel": "Subscribe", "privacyNote": "One list, no sharing, leave whenever you like.", "endpoint": {"assetRole": "placeholder-endpoint", "href": "https://forms.larkspur.invalid/runs"}}, "char-sweep"),
    ] + gen_tail()
    out["generated.shop-index"] = spec("generated", "shop-index", "/shop", "Prints - Larkspur Atelier (sample)", shop)

    prod = gen_head() + [
        N("hero.product-detail", {"backLink": {"label": "All prints", "href": "/shop"}, "images": [m("generated-artwork-visual", "Gull Study, two-colour risograph", G + "gull-study.webp")],
                                  "editionChip": "RISOGRAPH · RUN OF 30", "title": "Gull Study", "price": "€40", "shippingNote": "Posted flat within a week",
                                  "description": "A two-colour risograph of a gull on a harbour post, drawn on site and printed in a run of thirty.",
                                  "specs": [{"label": "SIZE", "value": "A3"}, {"label": "PAPER", "value": "Recycled 120g"}],
                                  "buyLabel": "Add to basket", "askLabel": "Ask about it", "trustNote": "Sample checkout, nothing is charged", "soldOut": False}, "page-enter"),
        N("commerce.more-from-shop", {"title": "Other prints", "viewAll": {"label": "See all", "href": "/shop"}, "products": gcards[1:]}, "reveal-rise"),
    ] + gen_tail()
    out["generated.product-detail"] = spec("generated", "product-detail", "/shop/gull-study", "Gull Study - Larkspur Atelier (sample)", prod)

    legal = gen_head() + [N("hero.legal-header", {"eyebrow": "(REVISED: MARCH 2031)", "title": "Privacy"}, "page-enter"),
                          N("legal.clause", {"label": "(WHO WE ARE)", "paragraphs": ["Larkspur Atelier is a fictional studio used to demonstrate this page layout."]}),
                          N("legal.clause", {"label": "(WHAT WE KEEP)", "paragraphs": ["Only what you type into the brief form, kept for one year and then deleted."]}),
                          N("legal.clause", {"label": "(YOUR CHOICES)", "paragraphs": ["Ask us to show, fix or remove anything we hold about you."], "action": "Clear my preference"})] + gen_tail()
    out["generated.legal"] = spec("generated", "legal", "/privacy", "Privacy - Larkspur Atelier (sample)", legal)

    lab = [N("shell.skip-link", {"label": "Go to content"}, retrievalEligible=False),
           N("art.lab-header", {"wordmark": m("placeholder-brand-mark", "Larkspur Atelier"), "cornerLink": {"label": "Tidewell", "href": "/work/tidewell"}}, "char-sweep"),
           N("art.draggable-plane", {"srTitle": "Sketchbook wall", "srDescription": "Forty sample sketches arranged by colour on one plane you can pan in any direction.",
                                     "artworks": [m("generated-artwork-visual", "Sample sketch", G + f"wall-{i}.webp") for i in range(1, 13)]}, "plane-inertia"),
           N("overlay.drag-cue", {"label": "(PULL AROUND)"}, retrievalEligible=False)] + gen_tail(footer=False)
    out["generated.art-lab"] = spec("generated", "art-lab", "/art-lab", "Sketchbook wall - Larkspur Atelier (sample)", lab)
    return out
