// aiuxaleem.com copy, English and Arabic. Classic script so every page has it before first render.
// Pages that exist in a language are declared in each page's boot script (data-langs on <html>).
(function () {
  var en = {
    chrome: {
      skip: 'Skip to content', homeAria: 'AIUXAleem home', display: 'Display settings', talk: "Let's talk", menu: 'Menu', openMenu: 'Open menu', closeMenu: 'Close menu',
      toDark: 'Switch to dark theme', toLight: 'Switch to light theme', themeTipDark: 'Dark theme', themeTipLight: 'Light theme',
      langLabel: 'العربية', langLabelLang: 'ar', langAria: 'read this page in Arabic', langAriaFallback: 'this page is English only, so this opens the closest Arabic page',
      langTip: 'Arabic', langTipFallback: 'English only. Opens the closest Arabic page.',
      resume: 'Download resume (PDF)', copyEmail: 'Copy email address', copied: 'Copied', pressCopy: 'Selected. Press Ctrl+C or Cmd+C to copy.',
      nav: [
        { key: 'work', label: 'Work', href: 'Work.dc.html' }, { key: 'content', label: 'Content', href: 'Content.dc.html' },
        { key: 'guides', label: 'Guides', href: 'Guides.dc.html' }, { key: 'services', label: 'Services', href: 'Services.dc.html' },
        { key: 'about', label: 'About', href: 'About.dc.html' }],
      footer: {
        overline: 'Hiring or building?', title: "Let's make it trustworthy.", call: 'Book a 15-min call', resume: 'Download resume',
        bio: 'Mohammad Abdul Aleem, AI-first Senior Product Designer. Enterprise UX, design systems and AI product design from Hyderabad, on GCC hours, for teams in KSA, UAE and anywhere.',
        rights: '© 2026 Mohammad Abdul Aleem · Hyderabad, India', navAria: 'Footer', linkedin: 'LinkedIn', youtube: 'YouTube'
      }
    },
    home: {
      meta: { title: 'AIUXAleem · AI-first Senior Product Designer' },
      hero: { badge: 'Open to senior roles and client work · KSA, UAE, remote', meta: '13+ years · 5 design systems · GCC hours', titleA: 'I design AI products people actually ', titleB: 'trust', titleC: '.',
        sub: 'Senior product designer with 13+ years in enterprise UX. I ship design as code: tokens, accessible components and AI workflows your engineers and your agents can both use.',
        work: 'See selected work', resume: 'Download resume', call: 'Book a 15-min call', workedWith: 'Worked with', brands: ['Colaberry', 'NTT DATA', 'Refactored.ai'] },
      demo: { overline: 'Live pattern · try it', controls: 'Demo display settings', dark: 'Dark', flip: 'عربي · RTL',
        caption: 'A trust pattern from my freight work: cost, impact and confidence before the action, undo after it. Built on this page\u2019s own tokens.',
        agent: 'AIX Copilot', time: 'now', badge: 'AI suggestion', msg: 'Reroute SHP-4821 through Jebel Ali. The current lane misses the Riyadh delivery window by two days.',
        confidence: 'Confidence', cost: 'Cost', impact: 'Impact', confidenceV: '92%', costV: '\u2212$1,240', impactV: '2 days earlier',
        apply: 'Apply reroute', why: 'Why this?', undo: 'Undo stays available for 30 seconds after you apply.', appliedMsg: 'Reroute applied.', undoBtn: 'Undo', applying: 'Applying', countdown: '{n}s to undo',
        undone: 'Reroute undone. The shipment is back on its original lane.', final: 'Reroute applied. The undo window has closed; the change is in the shipment log.', reset: 'Reset demo',
        whyHide: 'Hide reasons', why1: 'Jebel Ali has berth capacity this week; the current port is congested.', why2: 'Based on 1,240 similar shipments on this lane in the last 90 days.' },
      about: { overline: 'Point of view', text: 'AI is fast. Trust is slow. I design the gap.', portraitLabel: 'Portrait: Mohammad Abdul Aleem', initials: 'MA', more: 'More about me', href: 'About.dc.html',
        facts: [{ k: 'Based in', v: 'Hyderabad, India' }, { k: 'Hours', v: 'GCC working hours' }, { k: 'Experience', v: '13+ years, enterprise UX to AI products' }] },
      proof: { overline: 'Proof', title: 'Numbers from shipped work.',
        s1Label: 'below-AA text nodes on a shipped console, cut to 7 in testing (0 expected live)', s1Sub: 'AIXFreight', s1Href: 'Case Study.dc.html?case=aixfreight-rebrand', s1Link: 'Read the case',
        s2Label: 'brands shipped on one design system', s2Sub: 'Colaberry', s2Href: 'Case Study.dc.html?case=colaberry-design-system', s2Link: 'Read the case',
        s3Label: 'more leads after the redesign', s3Sub: 'learn.colaberry.com · Jan to May 2026',
        s4Label: 'more engagement from an accessibility-first redesign', s4Sub: 'NTT DATA · Jun to Aug 2024' },
      work: { overline: 'Selected work', title: 'Three products, one method.', prev: 'Previous case study', next: 'Next case study', of: 'of' },
      method: { overline: 'Method', title: 'Redesign the workflow, then build it.', stack: 'Stack' },
      bento: { overline: 'In public', title: 'What I build and share.' },
      oss: { overline: 'Open source', title: 'Shipped in public', gitLabel: 'GitHub', liveLabel: 'Live', all: 'All repositories', allHref: 'https://github.com/aleemcolaberry',
        items: [{ name: 'Colaberry Design System', meta: '245 tokens · 20 components', git: 'https://github.com/aleemcolaberry/ColaberrySchool', live: 'https://aleemcolaberry.github.io/ColaberrySchool/' },
          { name: 'AiXFreight Design System', meta: '43 components · agent skill pack', git: 'https://github.com/aleemcolaberry/AiXFreight-Design-System', live: 'https://aleemcolaberry.github.io/AiXFreight-Design-System/' }] },
      how: { title: 'How I work', s1t: 'Understand', s1b: 'Users, data and where trust breaks.', s2t: 'Redesign the workflow', s2b: 'Not the screen: the job to be done.',
        s3t: 'Build with AI', s3b: 'Real, coded prototypes in days.', s4t: 'Validate and ship', s4b: 'Measure, then hand off clean.',
        outLabel: 'Output', o1: 'Trust-break map', o2: 'Flow and state spec', o3: 'Coded prototype', o4: 'Metrics and a clean handoff' },
      toolkit: { title: 'Toolkit', items: ['Figma', 'Claude', 'Cursor', 'React', 'Tailwind', 'shadcn/ui', 'Design tokens', 'Storybook', 'GSAP', 'Three.js', 'WCAG 2.2', 'Higgsfield'] },
      article: { overline: 'LinkedIn article', title: 'Design systems were built for interfaces. AI needs more.', body: 'Three long-form articles so far, on design systems, AI product design and trust.', link: 'Read the article', href: 'https://www.linkedin.com/pulse/design-systems-were-built-interfaces-ai-needs-more-abdul-aleem-mofdf/' },
      reel: { overline: 'Latest reel', title: 'One prompt, one branded ad', aria: 'opens LinkedIn videos', placeholder: 'Reel thumbnail 9:16', slot: 'reel-thumb', href: 'https://www.linkedin.com/in/aiuxaleem/recent-activity/videos/' },
      video: { failed: "The video didn't load. Your network may block YouTube.", retry: 'Try again', overline: 'Latest long-form', title: 'Designing AI products people trust · 24 min', playAria: 'Play video: Designing AI products people trust', placeholder: 'Video thumbnail 16:9', slot: 'video-thumb', videoId: 'YOUR_VIDEO_ID', soon: 'Recording coming soon', loading: 'Loading video', onYouTube: 'Watch on YouTube' },
      post: { overline: 'Latest LinkedIn post · 1 Oct 2026', author: 'Mohammad Abdul Aleem', role: 'AI-first Senior Product Designer',
        body: "8 books I'd recommend to any designer moving into AI product design.",
        read: 'Read the post', href: 'https://www.linkedin.com/posts/aiuxaleem_ai-x-ux-reading-list-activity-7511236061377748993-4xzs/' },
      guide: { overline: 'Latest guide', title: 'Component spec files: the 8-section template', body: 'The tiered spec format I use so designers, engineers and AI agents read the same source of truth.', link: 'Read the guide', href: 'Guide.dc.html' },
      projects: { overline: 'Projects', title: 'Two design systems, both open source.', all: 'All repositories', allHref: 'https://github.com/aleemcolaberry', gitLabel: 'View on GitHub', liveLabel: 'Live site',
        items: [{ repo: 'ColaberrySchool', name: 'Colaberry Design System', desc: 'The single source of truth for the School of Data and AI: tokens, components, templates and rules a marketer, a developer or an AI can ship with.', tags: ['245 tokens', '20 components', '26 templates', 'WCAG 2.2 AA'], img: 'assets/cases/colaberry-ds-hero.jpg', alt: 'Colaberry Design System docs home: One system. Every Colaberry experience.', git: 'https://github.com/aleemcolaberry/ColaberrySchool', live: 'https://aleemcolaberry.github.io/ColaberrySchool/' },
          { repo: 'AiXFreight-Design-System', name: 'AiXFreight Design System', desc: 'React components, templates and a control-tower UI kit, plus an agent skill pack so AI can build on-system screens.', tags: ['43 components', '6 templates', 'Agent skill pack'], img: 'assets/cases/aixfreight-after-dashboard.jpg', alt: 'AiXFreight freight operations dashboard built on the system', git: 'https://github.com/aleemcolaberry/AiXFreight-Design-System', live: 'https://aleemcolaberry.github.io/AiXFreight-Design-System/' }] },
      read: { overline: 'Read', title: 'Articles, posts and guides.', more: 'All articles and posts', kicker: 'Article', link: 'Read the article', seriesKicker: 'LinkedIn posts', seriesTitle: 'Three running series, 8 posts so far', seriesLink: 'See every post',
        series: [{ name: 'AI x UX book series', count: '3 posts' }, { name: 'AI x UX x Product Design, EdTech', count: '4 posts' }, { name: 'Books reviewed by me', count: '1 post' }],
        articles: [{ title: 'Design systems were built for interfaces. AI needs more.', href: 'https://www.linkedin.com/pulse/design-systems-were-built-interfaces-ai-needs-more-abdul-aleem-mofdf/' }, { title: "What I'm learning building a career as an AI product designer", href: 'https://www.linkedin.com/pulse/what-im-learning-building-career-ai-product-designer-abdul-aleem-fc49f/' }, { title: 'Trust before intelligence', href: 'https://www.linkedin.com/pulse/trust-before-intelligence-what-book-ai-infrastructure-abdul-aleem-vovaf/' }] },
      watch: { overline: 'Watch', title: 'Videos on YouTube. Avatar reels on the way.', body: 'My videos are on YouTube. Short reels made with my digital avatar, NotebookLM and CapCut, are in production.', follow: 'Watch on YouTube', followAlt: 'Follow on LinkedIn' },
      services: { overline: 'For clients', title: 'Three ways to work together.', link: 'See services', href: 'Services.dc.html',
        ai: { title: 'AI Product Design', body: 'From model capability to a flow people trust: prompts, states, guardrails and the UI around them.', tags: ['Prompt and state design', 'Guardrails', 'Evaluation loops'] },
        ds: { title: 'Design System Build', body: 'Tokens, accessible components and docs your engineers and AI agents can both consume.', tags: ['Tokens', 'WCAG 2.2 components', 'Spec files'] },
        audit: { title: 'UX Audit and Redesign', body: 'A measured teardown against UX laws and WCAG 2.2, then the redesign that moves the number.', tags: ['UX laws', 'Accessibility', 'Conversion'] } },
      closing: { overline: 'Next step', title: "Have a product that needs to feel trustworthy? Let's talk.", body: 'I reply within 48 hours. A 15-minute call is the fastest way to start.', def: 'Email me', email: 'Email me', resumeLink: 'Resume (PDF)', github: 'github.com/aleemcolaberry' },
      notice: { text: 'The {page} page is in English only, so you are on the closest page in this language.', dismiss: 'Dismiss notice',
        pages: { work: 'Work', case: 'Case study', services: 'Services', about: 'About', content: 'Content', guides: 'Guides', guide: 'Guide' } }
    },
    cases: [
      { index: '01', title: 'Colaberry Design System', role: 'Lead product designer · Design systems', year: '2025', outcome: 'A new brand is a token file, not a rebuild: one accessible foundation under every Colaberry product.', link: 'Read the case study', href: 'Case Study.dc.html?case=colaberry-design-system', hreflang: 'en', coverId: 'cover-colaberry-ds', coverLabel: 'Cover: Colaberry Design System', cover: 'assets/cases/colaberry-docs-overview.jpg' },
      { index: '02', title: 'AIXFreight rebrand', role: 'Brand and product design', year: '2025', outcome: 'One identity from wordmark to product UI, built as a token-driven system from day one.', link: 'Read the case study', href: 'Case Study.dc.html?case=aixfreight-rebrand', hreflang: 'en', coverId: 'cover-aixfreight', coverLabel: 'Cover: AIXFreight rebrand', cover: 'assets/cases/aixfreight-after-dashboard.jpg' },
      { index: '03', title: 'AI ad reel pipeline', role: 'AI workflow design · Motion', year: '2026', outcome: 'Script to finished 9:16 ad in hours: a repeatable, branded generation pipeline.', link: 'Read the case study', href: 'Case Study.dc.html?case=ai-ad-reel-pipeline', hreflang: 'en', coverId: 'cover-reel-pipeline', coverLabel: 'Cover: AI ad reel pipeline', cover: 'assets/cases/reel-still.webp' }
    ],
    stress: 'Supercalifragilisticexpialidociousnesses'
  };

  var ar = {
    chrome: {
      skip: 'تخطَّ إلى المحتوى', homeAria: 'الصفحة الرئيسية لـ AIUXAleem', display: 'إعدادات العرض', talk: 'لنتحدّث', menu: 'القائمة', openMenu: 'افتح القائمة', closeMenu: 'أغلق القائمة',
      toDark: 'التبديل إلى الوضع الداكن', toLight: 'التبديل إلى الوضع الفاتح', themeTipDark: 'الوضع الداكن', themeTipLight: 'الوضع الفاتح',
      langLabel: 'English', langLabelLang: 'en', langAria: 'اقرأ هذه الصفحة بالإنجليزية', langAriaFallback: 'اقرأ هذه الصفحة بالإنجليزية',
      langTip: 'English', langTipFallback: 'English',
      resume: 'تحميل السيرة الذاتية (PDF)', copyEmail: 'نسخ عنوان البريد', copied: 'تم النسخ', pressCopy: 'تم التحديد. اضغط Ctrl+C أو Cmd+C للنسخ.',
      nav: [
        { key: 'work', label: 'الأعمال', href: 'AIUXAleem Home.dc.html?lang=ar#work' }, { key: 'content', label: 'المحتوى', href: 'AIUXAleem Home.dc.html?lang=ar#content' },
        { key: 'guides', label: 'الأدلة', href: 'AIUXAleem Home.dc.html?lang=ar#guides' }, { key: 'services', label: 'الخدمات', href: 'AIUXAleem Home.dc.html?lang=ar#services' },
        { key: 'about', label: 'نبذة عني', href: 'AIUXAleem Home.dc.html?lang=ar#about' }],
      footer: {
        overline: 'توظيف أم بناء؟', title: 'لنجعله جديرًا بالثقة.', call: 'احجز مكالمة لمدة 15 دقيقة', resume: 'تحميل السيرة الذاتية',
        bio: 'محمد عبد العليم، مصمّم منتجات أول يضع الذكاء الاصطناعي أولًا. تجربة مستخدم للمؤسسات وأنظمة تصميم وتصميم منتجات ذكاء اصطناعي، من حيدر آباد، بتوقيت الخليج، لفرق في السعودية والإمارات وأي مكان.',
        rights: '© 2026 محمد عبد العليم · حيدر آباد، الهند', navAria: 'تذييل الموقع', linkedin: 'LinkedIn', youtube: 'YouTube'
      }
    },
    home: {
      meta: { title: 'AIUXAleem · مصمّم منتجات أول يضع الذكاء الاصطناعي أولًا' },
      hero: { badge: 'متاح لأدوار قيادية ومشاريع مع العملاء · السعودية والإمارات وعن بُعد', meta: 'أكثر من 13 عامًا · 5 أنظمة تصميم · بتوقيت الخليج', titleA: 'أصمّم منتجات ذكاء اصطناعي ', titleB: 'يثق بها', titleC: ' الناس فعلًا.',
        sub: 'مصمّم منتجات أول بخبرة تتجاوز 13 عامًا في تجربة المستخدم للمؤسسات. أسلّم التصميم ككود: رموز تصميم ومكوّنات سهلة الوصول ومسارات ذكاء اصطناعي يستخدمها مهندسوك ووكلاؤك معًا.',
        work: 'شاهد الأعمال المختارة', resume: 'تحميل السيرة الذاتية', call: 'احجز مكالمة لمدة 15 دقيقة', workedWith: 'عملت مع', brands: ['Colaberry', 'NTT DATA', 'Refactored.ai'] },
      demo: { overline: 'نمط حيّ · جرّبه', controls: 'إعدادات العرض التجريبي', dark: 'داكن', flip: 'English · LTR',
        caption: 'نمط ثقة من عملي في الشحن: التكلفة والأثر ونسبة الثقة قبل الإجراء، وإمكانية التراجع بعده. مبني على رموز هذه الصفحة نفسها.',
        agent: 'مساعد AIX', time: 'الآن', badge: 'اقتراح ذكاء اصطناعي', msg: 'أعد توجيه الشحنة SHP-4821 عبر جبل علي. المسار الحالي يفوّت نافذة التسليم في الرياض بيومين.',
        confidence: 'الثقة', cost: 'التكلفة', impact: 'الأثر', confidenceV: '92%', costV: '\u2212$1,240', impactV: 'قبل الموعد بيومين',
        apply: 'تطبيق إعادة التوجيه', why: 'لماذا؟', undo: 'يبقى التراجع متاحًا 30 ثانية بعد التطبيق.', appliedMsg: 'تم تطبيق إعادة التوجيه.', undoBtn: 'تراجع', applying: 'جارٍ التطبيق', countdown: '{n} ث للتراجع',
        undone: 'تم التراجع عن إعادة التوجيه. عادت الشحنة إلى مسارها الأصلي.', final: 'تم تطبيق إعادة التوجيه. انتهت مهلة التراجع والتغيير مسجّل في سجل الشحنة.', reset: 'إعادة العرض',
        whyHide: 'إخفاء الأسباب', why1: 'لدى جبل علي سعة رصيف هذا الأسبوع، والميناء الحالي مزدحم.', why2: 'استنادًا إلى 1,240 شحنة مماثلة على هذا المسار خلال آخر 90 يومًا.' },
      about: { overline: 'وجهة نظر', text: 'الذكاء الاصطناعي سريع. الثقة بطيئة. وأنا أصمّم ما بينهما.', portraitLabel: 'صورة: محمد عبد العليم', initials: 'MA', more: 'المزيد عني (بالإنجليزية)', href: 'About.dc.html',
        facts: [{ k: 'المقر', v: 'حيدر آباد، الهند' }, { k: 'ساعات العمل', v: 'بتوقيت الخليج' }, { k: 'الخبرة', v: 'أكثر من 13 عامًا، من تجربة المستخدم للمؤسسات إلى منتجات الذكاء الاصطناعي' }] },
      proof: { overline: 'الإثبات', title: 'أرقام من أعمال أُطلقت فعلًا.',
        s1Label: 'عنصرًا نصيًا دون تباين AA في وحدة تحكّم مطلقة، خُفّضت إلى 7 في الاختبار (0 متوقّع بعد النشر)', s1Sub: 'AIXFreight', s1Href: 'Case Study.dc.html?lang=ar&case=aixfreight-rebrand', s1Link: 'اقرأ دراسة الحالة',
        s2Label: 'علامات تجارية على نظام تصميم واحد', s2Sub: 'Colaberry', s2Href: 'Case Study.dc.html?lang=ar&case=colaberry-design-system', s2Link: 'اقرأ دراسة الحالة',
        s3Label: 'زيادة في العملاء المحتملين بعد إعادة التصميم', s3Sub: 'learn.colaberry.com · يناير إلى مايو 2026',
        s4Label: 'زيادة في التفاعل بعد إعادة تصميم تضع إمكانية الوصول أولًا', s4Sub: 'NTT DATA · يونيو إلى أغسطس 2024' },
      work: { overline: 'أعمال مختارة', title: 'ثلاثة منتجات، ومنهج واحد.', prev: 'دراسة الحالة السابقة', next: 'دراسة الحالة التالية', of: 'من' },
      method: { overline: 'المنهج', title: 'أعد تصميم سير العمل، ثم ابنِه.', stack: 'الأدوات' },
      bento: { overline: 'في العلن', title: 'ما أبنيه وأشاركه.' },
      oss: { overline: 'مفتوح المصدر', title: 'منشور في العلن', gitLabel: 'GitHub', liveLabel: 'الموقع', all: 'كل المستودعات', allHref: 'https://github.com/aleemcolaberry',
        items: [{ name: 'نظام تصميم Colaberry', meta: '245 رمزًا · 20 مكوّنًا', git: 'https://github.com/aleemcolaberry/ColaberrySchool', live: 'https://aleemcolaberry.github.io/ColaberrySchool/' },
          { name: 'نظام تصميم AiXFreight', meta: '43 مكوّنًا · حزمة مهارات للوكلاء', git: 'https://github.com/aleemcolaberry/AiXFreight-Design-System', live: 'https://aleemcolaberry.github.io/AiXFreight-Design-System/' }] },
      how: { title: 'كيف أعمل', s1t: 'الفهم', s1b: 'المستخدمون والبيانات، وأين تنكسر الثقة.', s2t: 'إعادة تصميم سير العمل', s2b: 'ليست الشاشة، بل المهمة التي يجب إنجازها.',
        s3t: 'البناء بالذكاء الاصطناعي', s3b: 'نماذج أولية حقيقية ومبرمجة خلال أيام.', s4t: 'التحقّق والإطلاق', s4b: 'أقيس النتائج، ثم أسلّم العمل بوضوح.',
        outLabel: 'المُخرَج', o1: 'خريطة نقاط انكسار الثقة', o2: 'مواصفات المسار والحالات', o3: 'نموذج أولي مبرمج', o4: 'مقاييس وتسليم واضح' },
      toolkit: { title: 'أدوات العمل', items: ['Figma', 'Claude', 'Cursor', 'React', 'Tailwind', 'shadcn/ui', 'رموز التصميم', 'Storybook', 'GSAP', 'Three.js', 'WCAG 2.2', 'Higgsfield'] },
      article: { overline: 'مقال على LinkedIn', title: 'صُمّمت أنظمة التصميم للواجهات، والذكاء الاصطناعي يحتاج أكثر.', body: 'ثلاثة مقالات مطوّلة حتى الآن عن أنظمة التصميم وتصميم منتجات الذكاء الاصطناعي والثقة.', link: 'اقرأ المقال (بالإنجليزية)', href: 'https://www.linkedin.com/pulse/design-systems-were-built-interfaces-ai-needs-more-abdul-aleem-mofdf/' },
      reel: { overline: 'أحدث مقطع قصير', title: 'طلب واحد، وإعلان واحد بهوية العلامة', aria: 'شاهد أحدث مقطع على LinkedIn', placeholder: 'صورة مصغّرة للمقطع 9:16', slot: 'reel-thumb', href: 'https://www.linkedin.com/in/aiuxaleem/recent-activity/videos/' },
      video: { failed: 'لم يتم تحميل الفيديو. قد تحجب شبكتك YouTube.', retry: 'حاول مرة أخرى', overline: 'أحدث فيديو مطوّل', title: 'تصميم منتجات ذكاء اصطناعي يثق بها الناس · 24 دقيقة', playAria: 'تشغيل الفيديو: تصميم منتجات ذكاء اصطناعي يثق بها الناس', placeholder: 'صورة مصغّرة للفيديو 16:9', slot: 'video-thumb', videoId: 'YOUR_VIDEO_ID', soon: 'التسجيل قريبًا', loading: 'جارٍ تحميل الفيديو', onYouTube: 'شاهد على YouTube' },
      post: { overline: 'أحدث منشور على LinkedIn', author: 'محمد عبد العليم', role: 'مصمّم منتجات أول يضع الذكاء الاصطناعي أولًا',
        body: '8 كتب أنصح بها أي مصمّم ينتقل إلى تصميم منتجات الذكاء الاصطناعي.',
        read: 'اقرأ المنشور', href: 'https://www.linkedin.com/posts/aiuxaleem_ai-x-ux-reading-list-activity-7511236061377748993-4xzs/' },
      guide: { overline: 'أحدث دليل', title: 'ملفات مواصفات المكوّنات: قالب من ثمانية أقسام', body: 'صيغة المواصفات المتدرّجة التي أستخدمها ليقرأ المصمّمون والمهندسون ووكلاء الذكاء الاصطناعي مصدر الحقيقة نفسه.', link: 'اقرأ الدليل (بالإنجليزية)', href: 'Guide.dc.html' },
      projects: { overline: 'المشاريع', title: 'نظاما تصميم، كلاهما مفتوح المصدر.', all: 'كل المستودعات', allHref: 'https://github.com/aleemcolaberry', gitLabel: 'عرض على GitHub', liveLabel: 'الموقع المباشر',
        items: [{ repo: 'ColaberrySchool', name: 'نظام تصميم Colaberry', desc: 'مصدر الحقيقة الواحد لمدرسة البيانات والذكاء الاصطناعي: رموز ومكوّنات وقوالب وقواعد يستخدمها المسوّق والمطوّر والذكاء الاصطناعي.', tags: ['245 رمزًا', '20 مكوّنًا', '26 قالبًا', 'WCAG 2.2 AA'], img: 'assets/cases/colaberry-ds-hero.jpg', alt: 'الصفحة الرئيسية لنظام تصميم Colaberry', git: 'https://github.com/aleemcolaberry/ColaberrySchool', live: 'https://aleemcolaberry.github.io/ColaberrySchool/' },
          { repo: 'AiXFreight-Design-System', name: 'نظام تصميم AiXFreight', desc: 'مكوّنات React وقوالب وطقم واجهة لبرج التحكّم، مع حزمة مهارات تتيح للوكلاء بناء واجهات متوافقة مع النظام.', tags: ['43 مكوّنًا', '6 قوالب', 'حزمة مهارات للوكلاء'], img: 'assets/cases/aixfreight-after-dashboard.jpg', alt: 'لوحة تحكّم عمليات الشحن في AiXFreight', git: 'https://github.com/aleemcolaberry/AiXFreight-Design-System', live: 'https://aleemcolaberry.github.io/AiXFreight-Design-System/' }] },
      read: { overline: 'اقرأ', title: 'مقالات ومنشورات وأدلة.', more: 'كل المقالات والمنشورات (بالإنجليزية)', kicker: 'مقال', link: 'اقرأ المقال (بالإنجليزية)', seriesKicker: 'منشورات LinkedIn', seriesTitle: 'ثلاث سلاسل مستمرة، 8 منشورات حتى الآن', seriesLink: 'كل المنشورات (بالإنجليزية)',
        series: [{ name: 'سلسلة كتب AI x UX', count: '3 منشورات' }, { name: 'AI x UX x تصميم المنتجات، تقنيات التعليم', count: '4 منشورات' }, { name: 'كتب راجعتُها', count: 'منشور واحد' }],
        articles: [{ title: 'صُمّمت أنظمة التصميم للواجهات، والذكاء الاصطناعي يحتاج أكثر.', href: 'https://www.linkedin.com/pulse/design-systems-were-built-interfaces-ai-needs-more-abdul-aleem-mofdf/' }, { title: 'ما أتعلّمه وأنا أبني مسيرتي كمصمّم منتجات ذكاء اصطناعي', href: 'https://www.linkedin.com/pulse/what-im-learning-building-career-ai-product-designer-abdul-aleem-fc49f/' }, { title: 'الثقة قبل الذكاء', href: 'https://www.linkedin.com/pulse/trust-before-intelligence-what-book-ai-infrastructure-abdul-aleem-vovaf/' }] },
      watch: { overline: 'شاهد', title: 'فيديوهات على YouTube، ومقاطع قصيرة بصورتي الرقمية قريبًا.', body: 'فيديوهاتي على قناتي في YouTube. ومقاطع قصيرة بصورتي الرقمية، مصنوعة بـ NotebookLM وCapCut، قيد الإنتاج.', follow: 'شاهد على YouTube', followAlt: 'تابعني على LinkedIn' },
      services: { overline: 'للعملاء', title: 'ثلاث طرق للعمل معًا.', link: 'عرض الخدمات (بالإنجليزية)', href: 'Services.dc.html',
        ai: { title: 'تصميم منتجات الذكاء الاصطناعي', body: 'من قدرات النموذج إلى تجربة يثق بها الناس: الأوامر والحالات وضوابط الأمان والواجهة المحيطة بها.', tags: ['تصميم الأوامر والحالات', 'ضوابط الأمان', 'حلقات التقييم'] },
        ds: { title: 'بناء نظام تصميم', body: 'رموز ومكوّنات سهلة الوصول وتوثيق يستطيع مهندسوك ووكلاء الذكاء الاصطناعي استخدامه معًا.', tags: ['رموز التصميم', 'مكوّنات WCAG 2.2', 'ملفات المواصفات'] },
        audit: { title: 'تدقيق تجربة المستخدم وإعادة التصميم', body: 'مراجعة قابلة للقياس وفق قوانين تجربة المستخدم ومعايير WCAG 2.2، ثم إعادة تصميم تحرّك المؤشّر.', tags: ['قوانين تجربة المستخدم', 'إمكانية الوصول', 'معدّل التحويل'] } },
      closing: { overline: 'الخطوة التالية', title: 'هل لديك منتج يحتاج أن يبدو جديرًا بالثقة؟ لنتحدّث.', body: 'أردّ خلال 48 ساعة. ومكالمة من 15 دقيقة هي أسرع طريقة للبدء.', def: 'راسلني', email: 'راسلني', resumeLink: 'السيرة الذاتية (PDF)', github: 'github.com/aleemcolaberry' },
      notice: { text: 'صفحة «{page}» متاحة بالإنجليزية فقط، لذا انتقلت إلى أقرب قسم في الصفحة العربية.', dismiss: 'إخفاء التنبيه',
        pages: { work: 'الأعمال', case: 'دراسة الحالة', services: 'الخدمات', about: 'نبذة عني', content: 'المحتوى', guides: 'الأدلة', guide: 'الدليل' } }
    },
    cases: [
      { index: '01', title: 'نظام تصميم Colaberry', role: 'مصمّم منتجات رئيسي · أنظمة التصميم', year: '2025', outcome: 'العلامة الجديدة ملف رموز، لا إعادة بناء: أساس واحد سهل الوصول تحت كل منتجات Colaberry.', link: 'اقرأ دراسة الحالة', href: 'Case Study.dc.html?lang=ar&case=colaberry-design-system', hreflang: 'ar', coverId: 'cover-colaberry-ds', coverLabel: 'غلاف: نظام تصميم Colaberry', cover: 'assets/cases/colaberry-docs-overview.jpg' },
      { index: '02', title: 'إعادة هوية AIXFreight', role: 'تصميم العلامة والمنتج', year: '2025', outcome: 'هوية واحدة من الشعار إلى واجهة المنتج، مبنية كنظام قائم على الرموز منذ اليوم الأول.', link: 'اقرأ دراسة الحالة', href: 'Case Study.dc.html?lang=ar&case=aixfreight-rebrand', hreflang: 'ar', coverId: 'cover-aixfreight', coverLabel: 'غلاف: إعادة هوية AIXFreight', cover: 'assets/cases/aixfreight-after-dashboard.jpg' },
      { index: '03', title: 'مسار إنتاج الإعلانات القصيرة بالذكاء الاصطناعي', role: 'تصميم مسارات الذكاء الاصطناعي · الحركة', year: '2026', outcome: 'من النص إلى إعلان عمودي جاهز خلال ساعات: مسار توليد متكرر يحمل هوية العلامة.', link: 'اقرأ دراسة الحالة', href: 'Case Study.dc.html?lang=ar&case=ai-ad-reel-pipeline', hreflang: 'ar', coverId: 'cover-reel-pipeline', coverLabel: 'غلاف: مسار إنتاج الإعلانات القصيرة', cover: 'assets/cases/reel-still.webp' }
    ],
    stress: 'إعادة تصميم Internationalization‑Localization‑Accessibility للمؤسسات ومنصاتهاوتطبيقاتهاوأنظمتهاالمتكاملة'
  };

  // Closest Arabic destination for each English-only page (home shares the section ids).
  var closest = { work: 'work', case: 'case', services: 'services', about: 'about', content: 'content', guides: 'guides', guide: 'guides' };

  // Stress mode (?stress=1, or the QA toggle): append the stress string to every sentence-length field.
  function stressed(dict) {
    var s = dict.stress, keys = /^(sub|title|body|outcome|role|s\db|s\dLabel|s\dSub|text|bio|overline|link|read|stats|meta|badge)$/;
    var walk = function (o) {
      if (Array.isArray(o)) return o.map(walk);
      if (o && typeof o === 'object') { var r = {}; for (var k in o) r[k] = (typeof o[k] === 'string' && keys.test(k)) ? o[k] + ' ' + s : walk(o[k]); return r; }
      return o;
    };
    return walk(dict);
  }
  window.AIUX_I18N = { en: en, ar: ar, closest: closest, stressed: stressed };
  window.AIUX_COPY = function (lang, stress) { var d = lang === 'ar' ? ar : en; return stress ? stressed(d) : d; };
})();
