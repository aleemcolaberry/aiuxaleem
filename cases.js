// Case study content, English and Arabic. Classic script so pages have it before first render.
// Numbers flagged in the hand-off report are placeholders until verified.
(function () {
  var fmtN = function (v) { return String(Math.round(v)); };
  var en = {
    ui: { all: 'All work', keyResults: 'Key results', onThisPage: 'On this page', problem: 'Problem', approach: 'Approach', result: 'Result', learnings: 'Learnings',
      problemTitle: 'Where trust was breaking', approachTitle: 'Redesign the workflow, then build it', resultTitle: 'What shipped, and what changed', learningsTitle: "What I'd carry into your team",
      inOneLine: 'In one line', needThis: 'Need this for your product?', seeService: 'See the service', more: 'More case studies', prev: 'Previous', next: 'Next', read: 'Read the case study',
      call: 'Book a 15-min call', resume: 'Download resume', ctaOverline: 'Next step', ctaTitle: 'Want this kind of result for your product?', ctaBody: "Tell me what you're building. I reply within 48 hours.", ctaButton: 'Email me', copyEmail: 'Copy email address', copied: 'Copied', pressCopy: 'Selected. Press Ctrl+C or Cmd+C to copy.',
      role: 'Role', team: 'Team', stack: 'Stack', year: 'Year' },
    cases: [
      { slug: 'colaberry-design-system', index: '01', title: 'Colaberry Design System', category: 'Design systems', year: '2025', role: 'Lead product designer', team: 'Me + 2 engineers', stack: 'Figma · React · Tailwind · Storybook',
        coverId: 'cover-colaberry-ds', coverLabel: 'Cover: Colaberry Design System', cover: 'assets/cases/colaberry-docs-overview.jpg', outcome: 'A new brand is a token file, not a rebuild: one accessible foundation under every Colaberry product.',
        metrics: [{ to: 245, fmt: fmtN, label: 'design tokens' }, { to: 20, fmt: fmtN, label: 'WCAG 2.2 AA components' }, { to: 5, fmt: fmtN, label: 'brands on one foundation' }],
        problem: 'Five Colaberry products, Colaberry, AgentCory, AIXcelerator, learn.colaberry.com and AIXFreight, each shipped their own buttons, colours and spacing. Engineers rebuilt the same components per brand, accessibility was whoever remembered, and every new surface started from zero.',
        approach: [
          { title: 'Token architecture first', body: 'Primitive, semantic and component tiers. A brand is a theme file that remaps the semantic layer; nothing in a component ever points at a raw value.' },
          { title: 'One spec file per component', body: 'Every component gets the same 8-section spec (metadata, overview, anatomy, tokens, props, states, code, cross-refs) so designers, engineers and AI agents read one source of truth.' },
          { title: 'Build with AI, validate in Storybook', body: 'Components are generated from their specs, then checked against WCAG 2.2 AA (contrast, focus, keyboard, reduced motion) before they can be published.' }],
        result: 'A new brand is a token file, not a rebuild. Twenty accessible components and 245 tokens now sit under five brands, and the spec files let AI agents produce on-system UI without a designer in the loop.',
        gallery: [{ id: 'cds-gallery-1', label: 'Logo lockups and mark in the docs', src: 'assets/cases/colaberry-docs-logo.jpg' }, { id: 'cds-gallery-2', label: 'Hand-off and prompting guide for marketers and developers', src: 'assets/cases/colaberry-docs-handoff.jpg' }],
        quote: 'A new brand is a token file, not a rebuild.',
        learnings: ['Ship the token reference before the first component: every argument about colour disappears once it is a named decision.', 'Spec files only work if engineers edit them too; we made the spec the PR template, not a design artefact.', 'Accessibility checks belong in Storybook, not in a final audit. Caught 11 contrast failures before anyone saw them.'],
        service: { title: 'Design System Build', body: 'Tokens, accessible components and spec files your engineers and AI agents can both consume.', href: 'Services.dc.html#offer-ds' },
        next: 'aixfreight-rebrand', prev: 'ai-ad-reel-pipeline' },
      { slug: 'aixfreight-rebrand', index: '02', title: 'AIXFreight rebrand', category: 'Brand and product', year: '2025', role: 'Brand and product designer', team: 'Me + marketing lead', stack: 'Figma · Design tokens · Next.js',
        coverId: 'cover-aixfreight', coverLabel: 'Cover: AIXFreight rebrand', cover: 'assets/cases/aixfreight-after-dashboard.jpg', outcome: 'One identity from wordmark to product UI, built as a token-driven theme from day one.',
        metrics: [{ to: 1646, fmt: function (v) { return Math.round(v).toLocaleString('en-US'); }, label: 'below-AA text nodes on the shipped console, cut to 7 in testing' }, { to: 97, fmt: fmtN, label: 'screens re-themed with no change in behaviour' }, { to: 0, fmt: fmtN, label: 'control types left without a focus ring (was 7)' }],
        problem: 'AIXFreight is an AI product for freight operations, but its inherited identity read as generic logistics. Marketing pages and the product looked like two companies, and every campaign asset was hand-built.',
        approach: [
          { title: 'Identity as a system', body: 'Wordmark, colour and type were defined as tokens before any artwork, so the brand could ship as a theme on the Colaberry Design System.' },
          { title: 'Product UI themed, not rebuilt', body: 'The app took the new identity through the semantic token layer: zero new components, no regression in accessibility.' },
          { title: 'Launch surface', body: 'A landing page composed from system components, with motion kept to the brand\u2019s restrained ease-out reveals.' }],
        result: 'Marketing and product now share one identity and one source of tokens. New campaign assets start from system components, and the brand lives alongside its siblings as a theme. On the shipped UAT console, the re-theme cut 1,646 below-AA text nodes to 7 in testing (0 expected on the deployed build) and gave every control a visible focus ring, across 97 screens, with no change in behaviour.',
        gallery: [{ id: 'aix-gallery-1', label: 'Before: dashboard on the shipped UAT console', src: 'assets/cases/aixfreight-before-dashboard.jpg' }, { id: 'aix-gallery-2', label: 'After: campaigns, themed with the AiXFreight system', src: 'assets/cases/aixfreight-after-campaigns.jpg' }],
        quote: 'Marketing and product finally looked like the same company.',
        learnings: ['Define the identity as tokens first; artwork second. The brand then ships anywhere the system does.', 'Theming the product instead of rebuilding it kept accessibility intact, and shipped in days.', 'One shared component library means a campaign page and the app never drift apart again.'],
        service: { title: 'UX Audit and Redesign', body: 'A measured teardown against UX laws and WCAG 2.2, then the redesign that moves the number.', href: 'Services.dc.html#offer-audit' },
        next: 'ai-ad-reel-pipeline', prev: 'colaberry-design-system' },
      { slug: 'ai-ad-reel-pipeline', index: '03', title: 'AI ad reel pipeline', category: 'AI workflow · Motion', year: '2026', role: 'Workflow and motion designer', team: 'Me + content lead', stack: 'Claude · Higgsfield · Agent skills',
        coverId: 'cover-reel-pipeline', coverLabel: 'Cover: AI ad reel pipeline', cover: 'assets/cases/reel-still.webp', outcome: 'Script to finished 9:16 ad in hours: a repeatable, branded generation pipeline.',
        metrics: [{ to: 3, fmt: fmtN, label: 'recurring characters, consistent across episodes' }, { to: 1, fmt: fmtN, label: 'skill file encodes the whole brand' }, { to: 5, fmt: fmtN, label: 'stages: script, scenes, render, captions, logo' }],
        problem: 'Each branded reel took days: writing, art direction, generation, captioning and the logo reveal were separate, manual passes, and the cast and style drifted between episodes.',
        approach: [
          { title: 'Encode the brand as a skill', body: 'Cast, visual style, accent colour, caption rules and the logo reveal live in one agent skill, so every run starts on-brand.' },
          { title: 'Design the stages, not the frames', body: 'Script, scene plan, generation, burned captions, logo reveal. Each stage has a check a human can approve in seconds.' },
          { title: 'Keep humans at the edits', body: 'The pipeline drafts; people recast a character or swap a scene with one instruction instead of starting over.' }],
        result: 'A script becomes a finished, captioned reel in hours. Consistency across episodes comes from the skill file, not from memory, and re-renders are a sentence, not a project.',
        gallery: [{ id: 'reel-gallery-1', label: 'Pipeline stages', src: '' }, { id: 'reel-gallery-2', label: 'Reel still', src: 'assets/cases/reel-still.webp' }],
        quote: 'Re-renders became a sentence, not a project.',
        learnings: ['Encode taste as constraints: cast, palette and caption rules in one skill file beat a style guide nobody opens.', 'Design the approval moments. A human check at each stage costs seconds and saves whole re-renders.', 'Keep the pipeline boring and the output branded: consistency is the feature.'],
        service: { title: 'AI Product Design', body: 'From model capability to a flow people trust: prompts, states, guardrails and the UI around them.', href: 'Services.dc.html#offer-ai' },
        next: 'colaberry-design-system', prev: 'aixfreight-rebrand' }
    ]
  };
  var ar = {
    ui: { all: 'كل الأعمال', keyResults: 'النتائج الرئيسية', onThisPage: 'في هذه الصفحة', problem: 'المشكلة', approach: 'المنهج', result: 'النتيجة', learnings: 'الدروس',
      problemTitle: 'أين كانت الثقة تنكسر', approachTitle: 'إعادة تصميم سير العمل، ثم بناؤه', resultTitle: 'ما أُطلق، وما تغيّر', learningsTitle: 'ما سأحمله معي إلى فريقك',
      inOneLine: 'في سطر واحد', needThis: 'هل تحتاج هذا لمنتجك؟', seeService: 'اطّلع على الخدمة (بالإنجليزية)', more: 'دراسات حالة أخرى', prev: 'السابقة', next: 'التالية', read: 'اقرأ دراسة الحالة',
      call: 'احجز مكالمة لمدة 15 دقيقة', resume: 'تحميل السيرة الذاتية', ctaOverline: 'الخطوة التالية', ctaTitle: 'هل تريد نتيجة كهذه لمنتجك؟', ctaBody: 'أخبرني بما تبنيه. أردّ خلال 48 ساعة.', ctaButton: 'راسلني', copyEmail: 'نسخ عنوان البريد', copied: 'تم النسخ', pressCopy: 'تم التحديد. اضغط Ctrl+C أو Cmd+C للنسخ.',
      role: 'الدور', team: 'الفريق', stack: 'الأدوات', year: 'السنة' },
    cases: [
      { slug: 'colaberry-design-system', index: '01', title: 'نظام تصميم Colaberry', category: 'أنظمة التصميم', year: '2025', role: 'مصمّم منتجات رئيسي', team: 'أنا + مهندسان', stack: 'Figma · React · Tailwind · Storybook',
        coverId: 'cover-colaberry-ds', coverLabel: 'غلاف: نظام تصميم Colaberry', cover: 'assets/cases/colaberry-docs-overview.jpg', outcome: 'العلامة الجديدة ملف رموز، لا إعادة بناء: أساس واحد سهل الوصول تحت كل منتجات Colaberry.',
        metrics: [{ to: 245, fmt: fmtN, label: 'رمز تصميم' }, { to: 20, fmt: fmtN, label: 'مكوّنًا متوافقًا مع WCAG 2.2 AA' }, { to: 5, fmt: fmtN, label: 'علامات تجارية على أساس واحد' }],
        problem: 'خمسة منتجات من Colaberry، هي Colaberry وAgentCory وAIXcelerator وlearn.colaberry.com وAIXFreight، كان لكلٍّ منها أزراره وألوانه ومسافاته. أعاد المهندسون بناء المكوّنات نفسها لكل علامة، وكانت إمكانية الوصول متروكة لمن يتذكّرها، وكل واجهة جديدة تبدأ من الصفر.',
        approach: [
          { title: 'بنية الرموز أولًا', body: 'طبقات أساسية ودلالية ومكوّنات. العلامة التجارية ملف سمة يعيد ربط الطبقة الدلالية؛ لا يشير أي مكوّن إلى قيمة خام أبدًا.' },
          { title: 'ملف مواصفات واحد لكل مكوّن', body: 'كل مكوّن يحصل على المواصفات ذاتها من ثمانية أقسام (البيانات الوصفية، النظرة العامة، التشريح، الرموز، الخصائص، الحالات، الكود، الإحالات) ليقرأ المصمّمون والمهندسون ووكلاء الذكاء الاصطناعي مصدر الحقيقة نفسه.' },
          { title: 'البناء بالذكاء الاصطناعي والتحقق في Storybook', body: 'تُولَّد المكوّنات من مواصفاتها، ثم تُفحص وفق WCAG 2.2 AA (التباين، التركيز، لوحة المفاتيح، تقليل الحركة) قبل نشرها.' }],
        result: 'العلامة الجديدة ملف رموز، لا إعادة بناء. عشرون مكوّنًا سهل الوصول و245 رمزًا تخدم الآن خمس علامات، وملفات المواصفات تتيح لوكلاء الذكاء الاصطناعي إنتاج واجهات متوافقة مع النظام دون مصمّم في الحلقة.',
        gallery: [{ id: 'cds-gallery-1', label: 'أشكال الشعار والعلامة في التوثيق', src: 'assets/cases/colaberry-docs-logo.jpg' }, { id: 'cds-gallery-2', label: 'دليل التسليم والكتابة للمسوّقين والمطوّرين', src: 'assets/cases/colaberry-docs-handoff.jpg' }],
        quote: 'العلامة الجديدة ملف رموز، لا إعادة بناء.',
        learnings: ['أطلق مرجع الرموز قبل أول مكوّن: كل جدال حول الألوان يختفي حين يصبح قرارًا مسمّى.', 'ملفات المواصفات تنجح فقط إذا حرّرها المهندسون أيضًا؛ جعلنا المواصفات قالب طلب الدمج، لا مستندًا تصميميًا.', 'فحوص إمكانية الوصول مكانها Storybook لا التدقيق النهائي. اكتشفنا 11 خطأ تباين قبل أن يراها أحد.'],
        service: { title: 'بناء نظام تصميم', body: 'رموز ومكوّنات سهلة الوصول وملفات مواصفات يستطيع مهندسوك ووكلاء الذكاء الاصطناعي استخدامها معًا.', href: 'Services.dc.html#offer-ds' },
        next: 'aixfreight-rebrand', prev: 'ai-ad-reel-pipeline' },
      { slug: 'aixfreight-rebrand', index: '02', title: 'إعادة هوية AIXFreight', category: 'العلامة والمنتج', year: '2025', role: 'مصمّم علامة ومنتج', team: 'أنا + مسؤول التسويق', stack: 'Figma · رموز التصميم · Next.js',
        coverId: 'cover-aixfreight', coverLabel: 'غلاف: إعادة هوية AIXFreight', cover: 'assets/cases/aixfreight-after-dashboard.jpg', outcome: 'هوية واحدة من الشعار إلى واجهة المنتج، مبنية كسمة قائمة على الرموز منذ اليوم الأول.',
        metrics: [{ to: 1646, fmt: function (v) { return Math.round(v).toLocaleString('en-US'); }, label: 'عنصرًا نصيًا دون تباين AA في وحدة التحكم، خُفّضت إلى 7 في الاختبار' }, { to: 97, fmt: fmtN, label: 'شاشة أُعيدت سمتها دون أي تغيير في السلوك' }, { to: 0, fmt: fmtN, label: 'نوع عنصر تحكّم بلا حلقة تركيز (كانت 7)' }],
        problem: 'AIXFreight منتج ذكاء اصطناعي لعمليات الشحن، لكن هويته الموروثة بدت كأي شركة لوجستيات. صفحات التسويق والمنتج بدت كشركتين مختلفتين، وكل مادة تسويقية كانت تُبنى يدويًا.',
        approach: [
          { title: 'الهوية كنظام', body: 'عُرّف الشعار واللون والخط كرموز قبل أي عمل فني، لتُطلق العلامة كسمة على نظام تصميم Colaberry.' },
          { title: 'واجهة منتج بسمة جديدة لا بناء جديد', body: 'تلقّى التطبيق الهوية الجديدة عبر طبقة الرموز الدلالية: لا مكوّنات جديدة، ولا تراجع في إمكانية الوصول.' },
          { title: 'واجهة الإطلاق', body: 'صفحة هبوط مركّبة من مكوّنات النظام، مع حركة محدودة بانزلاقات العلامة الهادئة.' }],
        result: 'يتشارك التسويق والمنتج الآن هوية واحدة ومصدر رموز واحدًا. تبدأ المواد الجديدة من مكوّنات النظام، وتعيش العلامة إلى جانب شقيقاتها كسمة. في وحدة تحكّم UAT المطلقة، خفّضت إعادة السمة 1,646 عنصرًا نصيًا دون تباين AA إلى 7 في الاختبار (0 متوقّع بعد النشر)، وأضافت حلقة تركيز ظاهرة لكل عنصر تحكّم، عبر 97 شاشة ودون أي تغيير في السلوك.',
        gallery: [{ id: 'aix-gallery-1', label: 'قبل: لوحة التحكم في وحدة UAT المطلقة', src: 'assets/cases/aixfreight-before-dashboard.jpg' }, { id: 'aix-gallery-2', label: 'بعد: الحملات بسمة نظام AiXFreight', src: 'assets/cases/aixfreight-after-campaigns.jpg' }],
        quote: 'بدا التسويق والمنتج أخيرًا كشركة واحدة.',
        learnings: ['عرّف الهوية كرموز أولًا والعمل الفني ثانيًا؛ عندها تصل العلامة إلى كل مكان يصل إليه النظام.', 'إعادة السمة بدل إعادة البناء حافظت على إمكانية الوصول، وأُنجزت خلال أيام.', 'مكتبة مكوّنات مشتركة تعني ألا تفترق صفحة الحملة عن التطبيق مرة أخرى.'],
        service: { title: 'تدقيق تجربة المستخدم وإعادة التصميم', body: 'مراجعة قابلة للقياس وفق قوانين تجربة المستخدم ومعايير WCAG 2.2، ثم إعادة تصميم تحرّك المؤشّر.', href: 'Services.dc.html#offer-audit' },
        next: 'ai-ad-reel-pipeline', prev: 'colaberry-design-system' },
      { slug: 'ai-ad-reel-pipeline', index: '03', title: 'مسار إنتاج الإعلانات القصيرة بالذكاء الاصطناعي', category: 'مسارات الذكاء الاصطناعي · الحركة', year: '2026', role: 'مصمّم مسارات وحركة', team: 'أنا + مسؤول المحتوى', stack: 'Claude · Higgsfield · مهارات الوكلاء',
        coverId: 'cover-reel-pipeline', coverLabel: 'غلاف: مسار إنتاج الإعلانات القصيرة', cover: 'assets/cases/reel-still.webp', outcome: 'من النص إلى إعلان عمودي جاهز خلال ساعات: مسار توليد متكرر يحمل هوية العلامة.',
        metrics: [{ to: 3, fmt: fmtN, label: 'شخصيات ثابتة عبر الحلقات' }, { to: 1, fmt: fmtN, label: 'ملف مهارة واحد يحمل العلامة كاملة' }, { to: 5, fmt: fmtN, label: 'مراحل: النص، المشاهد، التوليد، الترجمة، الشعار' }],
        problem: 'كان كل مقطع يستغرق أيامًا: الكتابة والإخراج الفني والتوليد والترجمة وظهور الشعار مراحل يدوية منفصلة، والشخصيات والأسلوب تنحرف بين الحلقات.',
        approach: [
          { title: 'ترميز العلامة كمهارة', body: 'الشخصيات والأسلوب البصري ولون التمييز وقواعد الترجمة وظهور الشعار تعيش في مهارة وكيل واحدة، فيبدأ كل تشغيل متوافقًا مع العلامة.' },
          { title: 'تصميم المراحل لا الإطارات', body: 'نص، ثم خطة مشاهد، ثم توليد، ثم ترجمة مدمجة، ثم ظهور الشعار. لكل مرحلة فحص يوافق عليه إنسان في ثوانٍ.' },
          { title: 'الإنسان عند نقاط التعديل', body: 'المسار يكتب المسودات؛ والناس يستبدلون شخصية أو مشهدًا بتعليمة واحدة بدل البدء من جديد.' }],
        result: 'يصبح النص مقطعًا جاهزًا ومترجمًا خلال ساعات. يأتي الاتساق بين الحلقات من ملف المهارة لا من الذاكرة، وإعادة التوليد جملة واحدة لا مشروعًا.',
        gallery: [{ id: 'reel-gallery-1', label: 'مراحل المسار', src: '' }, { id: 'reel-gallery-2', label: 'لقطة من مقطع', src: 'assets/cases/reel-still.webp' }],
        quote: 'صارت إعادة التوليد جملة، لا مشروعًا.',
        learnings: ['رمّز الذوق كقيود: الشخصيات والألوان وقواعد الترجمة في ملف مهارة واحد تتفوّق على دليل أسلوب لا يفتحه أحد.', 'صمّم لحظات الموافقة. فحص بشري في كل مرحلة يكلّف ثوانيَ ويوفّر إعادة توليد كاملة.', 'أبقِ المسار بسيطًا والمخرجات موسومة بالعلامة: الاتساق هو الميزة.'],
        service: { title: 'تصميم منتجات الذكاء الاصطناعي', body: 'من قدرات النموذج إلى تجربة يثق بها الناس: الأوامر والحالات وضوابط الأمان والواجهة المحيطة بها.', href: 'Services.dc.html#offer-ai' },
        next: 'colaberry-design-system', prev: 'aixfreight-rebrand' }
    ]
  };
  window.AIUX_CASES_I18N = { en: en, ar: ar };
  window.AIUX_CASES = en.cases;
  window.AIUX_CASE_BY_SLUG = function (slug, lang) { var list = (lang === 'ar' ? ar : en).cases; return list.filter(function (c) { return c.slug === slug; })[0] || list[0]; };
  window.AIUX_CASE_UI = function (lang) { return (lang === 'ar' ? ar : en).ui; };
})();
