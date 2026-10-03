/* @ds-bundle: {"format":4,"namespace":"DesignSystem_ebeb85","components":[{"name":"ChatBubble","sourcePath":"components/content/ChatBubble.jsx"},{"name":"FeatureCard","sourcePath":"components/content/FeatureCard.jsx"},{"name":"StatCard","sourcePath":"components/content/StatCard.jsx"},{"name":"Testimonial","sourcePath":"components/content/Testimonial.jsx"},{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Chip","sourcePath":"components/core/Chip.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Toggle","sourcePath":"components/forms/Toggle.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"},{"name":"MediaFrame","sourcePath":"components/surfaces/MediaFrame.jsx"},{"name":"Tabs","sourcePath":"components/surfaces/Tabs.jsx"},{"name":"ThemeToggle","sourcePath":"components/surfaces/ThemeToggle.jsx"}],"sourceHashes":{"components/content/ChatBubble.jsx":"77f7953e826d","components/content/FeatureCard.jsx":"b335d5b1b36f","components/content/StatCard.jsx":"96b141df4fff","components/content/Testimonial.jsx":"724d3b05ffd0","components/core/Avatar.jsx":"5552817732f4","components/core/Badge.jsx":"0ee819f51ef4","components/core/Button.jsx":"949367099a3f","components/core/Chip.jsx":"16dab2626e60","components/core/IconButton.jsx":"982ce0bb26bb","components/forms/Checkbox.jsx":"395d6762f355","components/forms/Input.jsx":"d6986bb651fe","components/forms/Select.jsx":"4f204737c3ec","components/forms/Toggle.jsx":"90600ceb558f","components/surfaces/Card.jsx":"9ff0be00c66c","components/surfaces/MediaFrame.jsx":"be48914ca24c","components/surfaces/Tabs.jsx":"ac19c7f4610c","components/surfaces/ThemeToggle.jsx":"dcf6b776850c","doc-page.js":"f52ae9c02fca","showcase.js":"107931848269","ui_kits/roi-calculator/RoiCalculator.jsx":"0f65c08d3db2","ui_kits/website/App.jsx":"32bea3f11630","ui_kits/website/ChatWidget.jsx":"f06a78c4ab33","ui_kits/website/Features.jsx":"11e259a06126","ui_kits/website/Hero.jsx":"816370f67f42","ui_kits/website/Proof.jsx":"eafcc624c1f4","ui_kits/website/SiteHeader.jsx":"0f7fe78b5c04","ui_kits/website/Workflows.jsx":"017292acee5c"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DesignSystem_ebeb85 = window.DesignSystem_ebeb85 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/FeatureCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Feature / benefit card: icon tile, heading, copy, and trailing tag chips.
 * Mirrors the "Why Admissions Teams Choose Cory" grid.
 */
function FeatureCard({
  icon,
  title,
  children,
  tags = [],
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-xl)',
      padding: 'var(--space-6)',
      boxShadow: 'var(--shadow-sm)',
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      transition: 'box-shadow var(--duration-base) var(--ease-out), transform var(--duration-base) var(--ease-out)',
      ...style
    },
    onMouseEnter: e => {
      e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
      e.currentTarget.style.transform = 'translateY(var(--lift-hover))';
    },
    onMouseLeave: e => {
      e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
      e.currentTarget.style.transform = 'translateY(0)';
    }
  }, rest), icon && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 48,
      height: 48,
      borderRadius: 'var(--radius-md)',
      background: 'var(--blue-100)',
      color: 'var(--blue-600)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, icon), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--text-h4)',
      fontWeight: 'var(--weight-bold)',
      color: 'var(--text-strong)',
      margin: 0
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-ui)',
      lineHeight: 1.55,
      color: 'var(--text-body)',
      margin: 0
    }
  }, children), tags.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8,
      marginTop: 2
    }
  }, tags.map((t, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontSize: 'var(--text-overline)',
      fontWeight: 'var(--weight-medium)',
      color: 'var(--text-subtle)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 5,
      height: 5,
      borderRadius: '50%',
      background: 'var(--cyan-500)'
    }
  }), t))));
}
Object.assign(__ds_scope, { FeatureCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/FeatureCard.jsx", error: String((e && e.message) || e) }); }

// components/content/StatCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Big-number metric block, AgentCory's signature stat treatment.
 * Use `gradient` for the headline number on hero/ROI sections.
 */
function StatCard({
  value,
  label,
  sub,
  gradient = false,
  align = 'left',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: align === 'center' ? 'center' : 'flex-start',
      textAlign: align,
      gap: 4,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-extrabold)',
      fontSize: 'var(--text-metric-lg)',
      lineHeight: 1,
      letterSpacing: 'var(--tracking-tighter)',
      ...(gradient ? {
        background: 'var(--gradient-brand)',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        color: 'transparent'
      } : {
        color: 'var(--text-strong)'
      })
    }
  }, value), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-body-sm)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-body)'
    }
  }, label), sub && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-caption)',
      color: 'var(--text-muted)'
    }
  }, sub));
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/StatCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function CoryGlyph({
  dark
}) {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 120 120",
    width: "100%",
    height: "100%",
    style: {
      display: 'block'
    },
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("rect", {
    width: "120",
    height: "120",
    rx: "27.2727",
    fill: dark ? '#0B1F36' : '#F4F5FA'
  }), /*#__PURE__*/React.createElement("path", {
    d: "M87.675 60.3866C91.0899 60.3866 93.8581 63.1576 93.8581 66.5759V78.9544C93.8581 82.3728 91.0899 85.1437 87.675 85.1437H85.9277C85.0505 85.1437 84.3171 85.8003 84.1546 86.6632C82.0995 97.5763 72.8901 105.96 61.5902 106.746C60.6321 106.813 59.8511 106.027 59.8511 105.065V102.358C59.8511 101.396 60.6322 100.625 61.5885 100.537C71.0183 99.6597 78.4003 91.7173 78.4003 82.0491V63.4812C78.4003 53.2265 70.0955 44.9134 59.8511 44.9134C49.6066 44.9134 41.3019 53.2265 41.3019 63.4812V83.403C41.3019 84.3644 40.5233 85.1437 39.5629 85.1437H32.0272C28.6124 85.1437 25.8441 82.3728 25.8441 78.9544V66.5759C25.8441 63.1576 28.6124 60.3866 32.0272 60.3866H33.7745C34.6517 60.3866 35.385 59.73 35.5475 58.8671C37.7071 47.3991 47.767 38.7241 59.8511 38.7241C71.9351 38.7241 81.9951 47.3991 84.1546 58.8671C84.3171 59.73 85.0505 60.3866 85.9277 60.3866H87.675Z",
    fill: dark ? '#FFFFFF' : '#0B1F36'
  }), /*#__PURE__*/React.createElement("path", {
    d: "M55.9561 14.0971C54.6498 14.6457 48.3248 17.1143 41.8622 19.583C14.0868 30.1435 10.2368 31.7893 10.0305 33.2979C9.82429 34.6008 10.5805 35.0808 14.8431 36.6581C17.5931 37.6867 22.5432 39.6068 25.8432 40.8411C32.8967 44.043 35.2154 44.5986 39.5247 41.3897C51.1561 32.7282 67.7026 32.7124 80.1393 41.3897C82.484 43.4469 84.197 44.043 86.8055 43.7528C88.9367 43.7528 107.725 36.3838 109.169 34.9437C111.198 32.9197 110.063 32.2007 99.4754 28.0863C94.2503 26.029 83.3877 21.846 75.4126 18.6916C67.3687 15.5371 60.2186 12.9999 59.5999 12.9999C58.9124 13.0685 57.2624 13.5485 55.9561 14.0971Z",
    fill: "url(#cory_av_grad)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M109.728 51.3221L109.99 33.7503C109.991 33.6533 109.953 33.5599 109.885 33.4913C109.776 33.3821 109.609 33.3551 109.471 33.4241L105.447 35.4385C104.857 35.7333 104.485 36.3361 104.485 36.9954V51.2961C104.485 52.2575 105.264 53.0368 106.224 53.0368H107.989C108.939 53.0368 109.714 52.2732 109.728 51.3221Z",
    fill: "url(#cory_av_grad)"
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "cory_av_grad",
    x1: "10",
    y1: "33",
    x2: "110",
    y2: "33",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#258AFD"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#29BEDD"
  }))));
}

/**
 * Avatar: the Cory mascot tile (dark/light), an image, or initials.
 */
function Avatar({
  src,
  name,
  kind = 'cory',
  size = 40,
  ring = false,
  style,
  ...rest
}) {
  const dim = typeof size === 'number' ? `${size}px` : size;
  const base = {
    width: dim,
    height: dim,
    borderRadius: 'var(--radius-tile)',
    flexShrink: 0,
    overflow: 'hidden',
    display: 'inline-flex',
    boxShadow: ring ? '0 0 0 3px var(--surface-card), 0 0 0 4px var(--border-default)' : 'none',
    ...style
  };
  if (kind === 'cory' || kind === 'cory-light') {
    return /*#__PURE__*/React.createElement("span", _extends({
      style: base
    }, rest), /*#__PURE__*/React.createElement(CoryGlyph, {
      dark: kind === 'cory'
    }));
  }
  if (src) {
    return /*#__PURE__*/React.createElement("img", _extends({
      src: src,
      alt: name || '',
      style: {
        ...base,
        objectFit: 'cover'
      }
    }, rest));
  }
  const initials = (name || '?').split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase();
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      ...base,
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--navy-100)',
      color: 'var(--navy-700)',
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--weight-bold)',
      fontSize: typeof size === 'number' ? size * 0.38 : 15,
      letterSpacing: '-0.01em'
    }
  }, rest), initials);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/content/ChatBubble.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Chat message bubble for the Cory widget. `from="cory"` shows the mascot
 * avatar and a light bubble; `from="user"` is a right-aligned brand bubble.
 */
function ChatBubble({
  from = 'cory',
  children,
  time,
  showAvatar = true,
  style,
  ...rest
}) {
  const isUser = from === 'user';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: isUser ? 'row-reverse' : 'row',
      alignItems: 'flex-end',
      gap: 10,
      ...style
    }
  }, rest), showAvatar && !isUser ? /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    kind: "cory",
    size: 30
  }) : showAvatar && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 30,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: isUser ? 'flex-end' : 'flex-start',
      maxWidth: '78%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '10px 14px',
      fontSize: 'var(--text-ui-sm)',
      lineHeight: 1.45,
      borderRadius: isUser ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
      background: isUser ? 'var(--gradient-brand-deep)' : 'var(--surface-card)',
      color: isUser ? 'var(--text-on-brand)' : 'var(--text-body)',
      border: isUser ? '1px solid transparent' : '1px solid var(--border-subtle)',
      boxShadow: 'var(--shadow-xs)'
    }
  }, children), time && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-micro)',
      color: 'var(--text-subtle)',
      marginTop: 4,
      padding: '0 4px'
    }
  }, time)));
}
Object.assign(__ds_scope, { ChatBubble });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ChatBubble.jsx", error: String((e && e.message) || e) }); }

// components/content/Testimonial.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Testimonial card: a hero metric, the quote, and an attributed person.
 * Mirrors the "Trusted by Leading Institutions" cards.
 */
function Testimonial({
  metric,
  metricLabel,
  quote,
  name,
  role,
  photo,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("figure", _extends({
    style: {
      margin: 0,
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-xl)',
      padding: 'var(--space-6)',
      boxShadow: 'var(--shadow-sm)',
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      ...style
    }
  }, rest), metric && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-extrabold)',
      fontSize: 'var(--text-metric-md)',
      lineHeight: 1,
      letterSpacing: 'var(--tracking-tighter)',
      background: 'var(--gradient-brand)',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      color: 'transparent'
    }
  }, metric), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-caption)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-muted)'
    }
  }, metricLabel)), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontSize: 'var(--text-body)',
      lineHeight: 1.55,
      color: 'var(--text-body)',
      fontWeight: 'var(--weight-medium)'
    }
  }, "\u201C", quote, "\u201D"), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginTop: 'auto'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    kind: photo ? 'image' : 'initials',
    src: photo,
    name: name,
    size: 40
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      lineHeight: 1.3
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-ui-sm)',
      fontWeight: 'var(--weight-bold)',
      color: 'var(--text-strong)'
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-caption)',
      color: 'var(--text-muted)'
    }
  }, role))));
}
Object.assign(__ds_scope, { Testimonial });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Testimonial.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Compact status / metric label. Every tone passes WCAG AA for its text size.
 */
function Badge({
  children,
  tone = 'brand',
  size = 'md',
  dot = false,
  style,
  ...rest
}) {
  const tones = {
    brand: {
      background: 'var(--blue-100)',
      color: 'var(--blue-700)',
      dot: 'var(--blue-500)'
    },
    cyan: {
      background: 'var(--cyan-100)',
      color: 'var(--cyan-800)',
      dot: 'var(--cyan-500)'
    },
    success: {
      background: 'var(--green-100)',
      color: 'var(--green-700)',
      dot: 'var(--green-500)'
    },
    warning: {
      background: 'var(--amber-100)',
      color: 'var(--amber-700)',
      dot: 'var(--amber-500)'
    },
    danger: {
      background: 'var(--red-100)',
      color: 'var(--red-700)',
      dot: 'var(--red-500)'
    },
    neutral: {
      background: 'var(--slate-100)',
      color: 'var(--slate-700)',
      dot: 'var(--slate-500)'
    },
    ink: {
      background: 'var(--navy-800)',
      color: 'var(--white)',
      dot: 'var(--cyan-400)'
    },
    onInk: {
      background: 'var(--on-ink-fill)',
      color: 'var(--on-ink-strong)',
      dot: 'var(--cyan-400)'
    }
  };
  const sizes = {
    sm: {
      padding: '3px 9px',
      fontSize: 'var(--text-micro)'
    },
    md: {
      padding: '5px 12px',
      fontSize: 'var(--text-caption)'
    }
  };
  const t = tones[tone] || tones.brand;
  const s = sizes[size] || sizes.md;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: s.padding,
      fontSize: s.fontSize,
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--weight-semibold)',
      lineHeight: 1.2,
      borderRadius: 'var(--radius-pill)',
      background: t.background,
      color: t.color,
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: t.dot,
      flexShrink: 0
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * AgentCory primary action. Pill-shaped, soft elevation.
 * Variants: primary (AA-safe brand gradient), ink (navy), secondary (outline), ghost.
 * States: hover (darken/tint), focus-visible ring, press scale, loading, disabled.
 * Renders an <a> when `href` is given.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  fullWidth = false,
  disabled = false,
  loading = false,
  href,
  style,
  ...rest
}) {
  const [hover, setHover] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [focus, setFocus] = useState(false);
  const sizes = {
    sm: {
      padding: '8px 16px',
      fontSize: 'var(--text-ui-sm)',
      gap: 6,
      minHeight: 36
    },
    md: {
      padding: '11px 22px',
      fontSize: 'var(--text-ui)',
      gap: 8,
      minHeight: 44
    },
    lg: {
      padding: '15px 30px',
      fontSize: 'var(--text-ui-lg)',
      gap: 10,
      minHeight: 52
    }
  };
  const variants = {
    primary: {
      rest: {
        background: 'var(--gradient-brand-deep)',
        color: 'var(--text-on-brand)',
        boxShadow: 'var(--shadow-brand)',
        border: '1px solid transparent'
      },
      hover: {
        filter: 'brightness(1.08) saturate(1.05)',
        boxShadow: '0 16px 36px rgba(37,138,253,0.36)'
      }
    },
    ink: {
      rest: {
        background: 'var(--action-ink)',
        color: 'var(--surface-card)',
        boxShadow: 'var(--shadow-sm)',
        border: '1px solid transparent'
      },
      hover: {
        background: 'var(--action-ink-hover)',
        boxShadow: 'var(--shadow-md)'
      }
    },
    secondary: {
      rest: {
        background: 'var(--surface-card)',
        color: 'var(--text-strong)',
        boxShadow: 'var(--shadow-xs)',
        border: '1px solid var(--border-interactive)'
      },
      hover: {
        background: 'var(--action-secondary-hover)',
        boxShadow: 'var(--shadow-sm)'
      }
    },
    ghost: {
      rest: {
        background: 'transparent',
        color: 'var(--text-link)',
        boxShadow: 'none',
        border: '1px solid transparent'
      },
      hover: {
        background: 'var(--action-ghost-hover)',
        color: 'var(--text-link-hover)'
      }
    },
    onInk: {
      rest: {
        background: 'var(--on-ink-fill)',
        color: 'var(--on-ink-strong)',
        boxShadow: 'none',
        border: '1px solid var(--on-ink-border-strong)'
      },
      hover: {
        background: 'var(--on-ink-fill-hover)'
      }
    },
    onInkSolid: {
      rest: {
        background: 'var(--on-ink-strong)',
        color: 'var(--navy-800)',
        boxShadow: 'var(--shadow-md)',
        border: '1px solid transparent'
      },
      hover: {
        boxShadow: 'var(--shadow-lg), var(--shadow-glow)'
      }
    }
  };
  const s = sizes[size] || sizes.md;
  const v = variants[variant] || variants.primary;
  const inert = disabled || loading;
  const Tag = href && !inert ? 'a' : 'button';
  const transform = pressed && !inert ? `scale(var(--press-scale, 0.97))` : hover && !inert ? 'translateY(-1px)' : 'none';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: Tag === 'a' ? href : undefined,
    disabled: Tag === 'button' ? inert : undefined,
    "aria-disabled": inert || undefined,
    "aria-busy": loading || undefined,
    style: {
      position: 'relative',
      display: fullWidth ? 'flex' : 'inline-flex',
      width: fullWidth ? '100%' : 'auto',
      alignItems: 'center',
      justifyContent: 'center',
      gap: s.gap,
      padding: s.padding,
      minHeight: s.minHeight,
      fontSize: s.fontSize,
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--weight-semibold)',
      lineHeight: 1,
      letterSpacing: 'var(--tracking-ui)',
      borderRadius: 'var(--radius-pill)',
      textDecoration: 'none',
      cursor: inert ? 'not-allowed' : 'pointer',
      opacity: disabled ? 'var(--opacity-disabled)' : 1,
      transition: 'transform var(--duration-fast) var(--ease-out), box-shadow var(--duration-base) var(--ease-out), background var(--duration-base) var(--ease-out), filter var(--duration-base) var(--ease-out), color var(--duration-base) var(--ease-out)',
      whiteSpace: 'nowrap',
      outline: 'none',
      transform,
      ...v.rest,
      ...(hover && !inert ? v.hover : null),
      ...(focus ? {
        boxShadow: `var(--shadow-focus), ${v.rest.boxShadow}`
      } : null),
      ...style
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPressed(false);
    },
    onMouseDown: () => setPressed(true),
    onMouseUp: () => setPressed(false),
    onFocus: e => setFocus(e.currentTarget.matches(':focus-visible')),
    onBlur: () => setFocus(false)
  }, rest), loading && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 16,
      height: 16,
      borderRadius: '50%',
      border: '2px solid currentColor',
      borderRightColor: 'transparent',
      animation: 'cory-spin 0.8s linear infinite'
    }
  }), /*#__PURE__*/React.createElement("style", null, '@keyframes cory-spin{to{transform:rotate(360deg)}}')), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: s.gap,
      visibility: loading ? 'hidden' : 'visible'
    }
  }, iconLeft, children, iconRight));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Chip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * Interactive, selectable pill, filters, tags, toggles. Badge is static; Chip is a control.
 */
function Chip({
  children,
  selected = false,
  onToggle,
  icon,
  removable = false,
  onRemove,
  size = 'md',
  style,
  ...rest
}) {
  const [hover, setHover] = useState(false);
  const s = size === 'sm' ? {
    padding: '5px 12px',
    fontSize: 'var(--text-ui-sm)',
    minHeight: 32
  } : {
    padding: '8px 16px',
    fontSize: 'var(--text-ui)',
    minHeight: 40
  };
  const bg = selected ? 'var(--action-ink)' : hover ? 'var(--action-secondary-hover)' : 'var(--surface-card)';
  const color = selected ? 'var(--surface-card)' : 'var(--text-strong)';
  const border = selected ? 'var(--action-ink)' : 'var(--border-interactive)';
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    role: onToggle ? 'switch' : undefined,
    "aria-checked": onToggle ? selected : undefined,
    onClick: e => {
      onToggle && onToggle(!selected, e);
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      padding: s.padding,
      minHeight: s.minHeight,
      fontSize: s.fontSize,
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--weight-semibold)',
      lineHeight: 1,
      letterSpacing: 'var(--tracking-ui)',
      color,
      background: bg,
      border: `1px solid ${border}`,
      borderRadius: 'var(--radius-pill)',
      cursor: 'pointer',
      whiteSpace: 'nowrap',
      transition: 'background var(--duration-base) var(--ease-out), color var(--duration-base) var(--ease-out), border-color var(--duration-base) var(--ease-out), transform var(--duration-fast) var(--ease-spring)',
      transform: hover && !selected ? 'translateY(-1px)' : 'none',
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex'
    }
  }, icon), children, removable && /*#__PURE__*/React.createElement("span", {
    role: "button",
    "aria-label": "Remove",
    onClick: e => {
      e.stopPropagation();
      onRemove && onRemove(e);
    },
    style: {
      display: 'inline-grid',
      placeItems: 'center',
      width: 18,
      height: 18,
      marginRight: -6,
      borderRadius: '50%',
      background: selected ? 'var(--on-ink-fill-hover)' : 'var(--surface-sunken)',
      fontSize: 14,
      lineHeight: 1
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Chip.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * Square-ish icon-only action. Always needs `label` (aria-label + tooltip title).
 */
function IconButton({
  children,
  label,
  variant = 'secondary',
  size = 'md',
  active = false,
  style,
  ...rest
}) {
  const [hover, setHover] = useState(false);
  const px = {
    sm: 36,
    md: 44,
    lg: 52
  }[size] || 44;
  const variants = {
    primary: {
      rest: {
        background: 'var(--gradient-brand-deep)',
        color: 'var(--text-on-brand)',
        border: '1px solid transparent',
        boxShadow: 'var(--shadow-brand)'
      },
      hover: {
        filter: 'brightness(1.08)'
      }
    },
    ink: {
      rest: {
        background: 'var(--action-ink)',
        color: 'var(--surface-card)',
        border: '1px solid transparent'
      },
      hover: {
        background: 'var(--action-ink-hover)'
      }
    },
    secondary: {
      rest: {
        background: 'var(--surface-card)',
        color: 'var(--text-strong)',
        border: '1px solid var(--border-interactive)',
        boxShadow: 'var(--shadow-xs)'
      },
      hover: {
        background: 'var(--action-secondary-hover)'
      }
    },
    ghost: {
      rest: {
        background: active ? 'var(--action-ghost-hover)' : 'transparent',
        color: active ? 'var(--text-link)' : 'var(--text-body)',
        border: '1px solid transparent'
      },
      hover: {
        background: 'var(--action-ghost-hover)',
        color: 'var(--text-link)'
      }
    },
    onInk: {
      rest: {
        background: 'var(--on-ink-fill)',
        color: 'var(--on-ink-strong)',
        border: '1px solid var(--on-ink-border)'
      },
      hover: {
        background: 'var(--on-ink-fill-hover)'
      }
    }
  };
  const v = variants[variant] || variants.secondary;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    "aria-pressed": variant === 'ghost' && active ? true : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-grid',
      placeItems: 'center',
      width: px,
      height: px,
      borderRadius: 'var(--radius-pill)',
      cursor: 'pointer',
      fontSize: Math.round(px * 0.45),
      lineHeight: 1,
      padding: 0,
      transition: 'background var(--duration-base) var(--ease-out), color var(--duration-base) var(--ease-out), transform var(--duration-fast) var(--ease-out), filter var(--duration-base) var(--ease-out)',
      transform: hover ? 'translateY(-1px)' : 'none',
      ...v.rest,
      ...(hover ? v.hover : null),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/** Checkbox with label + optional hint. Controlled or uncontrolled. Supports indeterminate. */
function Checkbox({
  label,
  hint,
  checked,
  defaultChecked = false,
  indeterminate = false,
  disabled = false,
  onChange,
  id,
  style,
  ...rest
}) {
  const [inner, setInner] = useState(defaultChecked);
  const on = checked !== undefined ? checked : inner;
  const [focus, setFocus] = useState(false);
  const fieldId = id || (label ? `cb-${String(label).replace(/\s+/g, '-').toLowerCase()}` : undefined);
  const toggle = e => {
    if (checked === undefined) setInner(e.target.checked);
    onChange && onChange(e.target.checked, e);
  };
  const active = on || indeterminate;
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      display: 'inline-flex',
      alignItems: 'flex-start',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 'var(--opacity-disabled)' : 1,
      minHeight: 24,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      width: 20,
      height: 20,
      flexShrink: 0,
      marginTop: 1
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    type: "checkbox",
    checked: on,
    disabled: disabled,
    onChange: toggle,
    ref: el => {
      if (el) el.indeterminate = indeterminate;
    },
    onFocus: e => setFocus(e.currentTarget.matches(':focus-visible')),
    onBlur: () => setFocus(false),
    style: {
      position: 'absolute',
      inset: 0,
      margin: 0,
      opacity: 0,
      width: '100%',
      height: '100%',
      cursor: 'inherit'
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 'var(--radius-xs)',
      border: `1px solid ${active ? 'var(--action-primary)' : 'var(--border-interactive)'}`,
      background: active ? 'var(--action-primary)' : 'var(--surface-card)',
      boxShadow: focus ? 'var(--shadow-focus)' : 'none',
      display: 'grid',
      placeItems: 'center',
      transition: 'background var(--duration-fast) var(--ease-out), border-color var(--duration-fast) var(--ease-out), box-shadow var(--duration-base) var(--ease-out)'
    }
  }, indeterminate ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 2,
      background: '#fff',
      borderRadius: 1
    }
  }) : on && /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2.5 6.5l2.5 2.5 4.5-5",
    stroke: "#fff",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })))), (label || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-ui-sm)',
      fontWeight: 'var(--weight-medium)',
      color: 'var(--text-strong)',
      lineHeight: 1.4
    }
  }, label), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-overline)',
      color: 'var(--text-muted)'
    }
  }, hint)));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * Labelled text input matching AgentCory's demo-request forms.
 * Soft rounded field, blue focus ring. States: default, focus, error, success, disabled.
 */
function Input({
  label,
  hint,
  error,
  success,
  required = false,
  multiline = false,
  disabled = false,
  iconLeft,
  iconRight,
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = useState(false);
  const fieldId = id || (label ? `f-${String(label).replace(/\s+/g, '-').toLowerCase()}` : undefined);
  const msgId = fieldId ? `${fieldId}-msg` : undefined;
  const Tag = multiline ? 'textarea' : 'input';
  const border = error ? 'var(--red-500)' : success ? 'var(--green-500)' : focus ? 'var(--border-focus)' : 'var(--border-strong)';
  const msg = error || success || hint;
  const msgColor = error ? 'var(--text-danger)' : success ? 'var(--text-success)' : 'var(--text-muted)';
  const pad = multiline ? '12px 14px' : '11px 14px';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      opacity: disabled ? 'var(--opacity-disabled)' : 1,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontSize: 'var(--text-label)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-strong)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      color: 'var(--text-danger)',
      marginLeft: 3
    }
  }, "*")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: multiline ? 'flex-start' : 'center'
    }
  }, iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 14,
      top: multiline ? 13 : '50%',
      transform: multiline ? 'none' : 'translateY(-50%)',
      color: 'var(--text-subtle)',
      display: 'inline-flex',
      pointerEvents: 'none'
    }
  }, iconLeft), /*#__PURE__*/React.createElement(Tag, _extends({
    id: fieldId,
    disabled: disabled,
    required: required,
    "aria-invalid": !!error || undefined,
    "aria-describedby": msg ? msgId : undefined,
    rows: multiline ? 4 : undefined,
    style: {
      width: '100%',
      boxSizing: 'border-box',
      padding: pad,
      minHeight: multiline ? undefined : 44,
      paddingLeft: iconLeft ? 42 : undefined,
      paddingRight: iconRight ? 42 : undefined,
      fontSize: 'var(--text-ui)',
      fontFamily: 'var(--font-sans)',
      color: 'var(--text-strong)',
      background: 'var(--surface-card)',
      border: `1px solid ${border}`,
      borderRadius: 'var(--radius-md)',
      outline: 'none',
      resize: multiline ? 'vertical' : undefined,
      cursor: disabled ? 'not-allowed' : undefined,
      boxShadow: focus ? 'var(--shadow-focus)' : 'none',
      transition: 'border-color var(--duration-base) var(--ease-out), box-shadow var(--duration-base) var(--ease-out)'
    },
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false)
  }, rest)), iconRight && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 14,
      top: '50%',
      transform: 'translateY(-50%)',
      color: 'var(--text-subtle)',
      display: 'inline-flex'
    }
  }, iconRight)), msg && /*#__PURE__*/React.createElement("span", {
    id: msgId,
    role: error ? 'alert' : undefined,
    style: {
      fontSize: 'var(--text-overline)',
      fontWeight: error ? 'var(--weight-medium)' : undefined,
      color: msgColor
    }
  }, msg));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/** Native select styled like Input, label, hint, error, disabled, placeholder option. */
function Select({
  label,
  hint,
  error,
  required = false,
  disabled = false,
  placeholder,
  options = [],
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = useState(false);
  const fieldId = id || (label ? `s-${String(label).replace(/\s+/g, '-').toLowerCase()}` : undefined);
  const msgId = fieldId ? `${fieldId}-msg` : undefined;
  const border = error ? 'var(--red-500)' : focus ? 'var(--border-focus)' : 'var(--border-strong)';
  const msg = error || hint;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      opacity: disabled ? 'var(--opacity-disabled)' : 1,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontSize: 'var(--text-label)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-strong)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      color: 'var(--text-danger)',
      marginLeft: 3
    }
  }, "*")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: fieldId,
    disabled: disabled,
    required: required,
    "aria-invalid": !!error || undefined,
    "aria-describedby": msg ? msgId : undefined,
    defaultValue: rest.value === undefined && rest.defaultValue === undefined && placeholder ? '' : undefined,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      minHeight: 44,
      padding: '11px 42px 11px 14px',
      appearance: 'none',
      WebkitAppearance: 'none',
      fontSize: 'var(--text-ui)',
      fontFamily: 'var(--font-sans)',
      color: 'var(--text-strong)',
      background: 'var(--surface-card)',
      border: `1px solid ${border}`,
      borderRadius: 'var(--radius-md)',
      outline: 'none',
      cursor: disabled ? 'not-allowed' : 'pointer',
      boxShadow: focus ? 'var(--shadow-focus)' : 'none',
      transition: 'border-color var(--duration-base) var(--ease-out), box-shadow var(--duration-base) var(--ease-out)'
    }
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder), options.map(o => {
    const v = typeof o === 'string' ? o : o.value;
    const l = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v,
      disabled: o.disabled
    }, l);
  })), /*#__PURE__*/React.createElement("svg", {
    "aria-hidden": "true",
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    style: {
      position: 'absolute',
      right: 14,
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      color: 'var(--text-subtle)'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 6l4 4 4-4",
    stroke: "currentColor",
    strokeWidth: "1.75",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), msg && /*#__PURE__*/React.createElement("span", {
    id: msgId,
    role: error ? 'alert' : undefined,
    style: {
      fontSize: 'var(--text-overline)',
      fontWeight: error ? 'var(--weight-medium)' : undefined,
      color: error ? 'var(--text-danger)' : 'var(--text-muted)'
    }
  }, msg));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Toggle.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/** On/off switch for settings that apply immediately. */
function Toggle({
  label,
  hint,
  checked,
  defaultChecked = false,
  disabled = false,
  onChange,
  size = 'md',
  labelPosition = 'right',
  id,
  style,
  ...rest
}) {
  const [inner, setInner] = useState(defaultChecked);
  const on = checked !== undefined ? checked : inner;
  const [focus, setFocus] = useState(false);
  const fieldId = id || (label ? `tg-${String(label).replace(/\s+/g, '-').toLowerCase()}` : undefined);
  const w = size === 'sm' ? 36 : 44,
    h = size === 'sm' ? 20 : 24,
    k = h - 6;
  const flip = e => {
    if (disabled) return;
    const next = !on;
    if (checked === undefined) setInner(next);
    onChange && onChange(next, e);
  };
  const track = /*#__PURE__*/React.createElement("button", _extends({
    id: fieldId,
    type: "button",
    role: "switch",
    "aria-checked": on,
    "aria-label": label ? undefined : 'Toggle',
    disabled: disabled,
    onClick: flip,
    onFocus: e => setFocus(e.currentTarget.matches(':focus-visible')),
    onBlur: () => setFocus(false),
    style: {
      position: 'relative',
      width: w,
      height: h,
      flexShrink: 0,
      borderRadius: 'var(--radius-pill)',
      border: '1px solid transparent',
      padding: 0,
      cursor: disabled ? 'not-allowed' : 'pointer',
      outline: 'none',
      background: on ? 'var(--gradient-brand-deep)' : 'var(--border-strong)',
      boxShadow: focus ? 'var(--shadow-focus)' : 'none',
      transition: 'background var(--duration-base) var(--ease-out), box-shadow var(--duration-base) var(--ease-out)'
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      top: 2,
      left: 2,
      width: k,
      height: k,
      borderRadius: '50%',
      background: '#fff',
      boxShadow: 'var(--shadow-xs)',
      transform: on ? `translateX(${w - k - 6}px)` : 'translateX(0)',
      transition: 'transform var(--duration-base) var(--ease-spring)'
    }
  }));
  if (!label && !hint) return track;
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      flexDirection: labelPosition === 'left' ? 'row-reverse' : 'row',
      justifyContent: labelPosition === 'left' ? 'space-between' : 'flex-start',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 'var(--opacity-disabled)' : 1,
      ...style
    }
  }, track, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-ui-sm)',
      fontWeight: 'var(--weight-medium)',
      color: 'var(--text-strong)',
      lineHeight: 1.4
    }
  }, label), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-overline)',
      color: 'var(--text-muted)'
    }
  }, hint)));
}
Object.assign(__ds_scope, { Toggle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Toggle.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * Generic surface primitive. FeatureCard/StatCard are opinionated; Card is the blank tile
 * used for bento grids, case-study covers, and metadata panels.
 */
function Card({
  children,
  variant = 'default',
  padding = 'md',
  interactive = false,
  selected = false,
  href,
  as,
  style,
  ...rest
}) {
  const [hover, setHover] = useState(false);
  const pads = {
    none: 0,
    sm: 'var(--space-4)',
    md: 'var(--space-6)',
    lg: 'var(--space-8)'
  };
  const variants = {
    default: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      color: 'var(--text-body)',
      boxShadow: 'var(--shadow-sm)'
    },
    sunken: {
      background: 'var(--surface-sunken)',
      border: '1px solid transparent',
      color: 'var(--text-body)',
      boxShadow: 'none'
    },
    outline: {
      background: 'transparent',
      border: '1px solid var(--border-default)',
      color: 'var(--text-body)',
      boxShadow: 'none'
    },
    ink: {
      background: 'var(--gradient-ink)',
      border: '1px solid var(--on-ink-border)',
      color: 'var(--on-ink-body)',
      boxShadow: 'var(--shadow-md)'
    },
    brand: {
      background: 'var(--gradient-brand-135)',
      border: '1px solid transparent',
      color: 'var(--text-on-brand)',
      boxShadow: 'var(--shadow-brand)'
    }
  };
  const v = variants[variant] || variants.default;
  const lift = interactive && hover;
  const Tag = as || (href ? 'a' : 'div');
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'block',
      position: 'relative',
      overflow: 'hidden',
      isolation: 'isolate',
      padding: pads[padding] ?? padding,
      borderRadius: 'var(--radius-xl)',
      textDecoration: 'none',
      cursor: interactive || href ? 'pointer' : undefined,
      transition: 'transform var(--duration-base) var(--ease-out), box-shadow var(--duration-base) var(--ease-out), border-color var(--duration-base) var(--ease-out)',
      transform: lift ? 'translateY(var(--lift-hover))' : 'none',
      ...v,
      ...(lift ? {
        boxShadow: variant === 'ink' ? 'var(--shadow-glow), var(--shadow-lg)' : 'var(--shadow-lg)'
      } : null),
      ...(selected ? {
        borderColor: 'var(--border-focus)',
        boxShadow: 'var(--shadow-focus)'
      } : null),
      ...style
    }
  }, rest), variant === 'ink' && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      width: '60%',
      aspectRatio: '1',
      right: '-20%',
      top: '-30%',
      background: 'var(--glow-cyan)',
      filter: 'blur(var(--blur-glow))',
      zIndex: -1,
      pointerEvents: 'none'
    }
  }), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/MediaFrame.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState,
  useRef
} = React;
/**
 * Media frame: poster/image/video in a rounded tile with a fixed aspect ratio.
 * Video: play affordance, mute toggle, optional autoplay loop (muted).
 */
function MediaFrame({
  src,
  poster,
  alt = '',
  ratio = '16 / 9',
  video = false,
  autoplay = false,
  loop = true,
  caption,
  radius = 'var(--radius-xl)',
  fit = 'cover',
  overlay,
  style,
  ...rest
}) {
  const [playing, setPlaying] = useState(autoplay);
  const [muted, setMuted] = useState(true);
  const [hover, setHover] = useState(false);
  const ref = useRef(null);
  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };
  const ctl = {
    display: 'inline-grid',
    placeItems: 'center',
    width: 44,
    height: 44,
    borderRadius: 'var(--radius-pill)',
    background: 'rgba(11,31,54,0.62)',
    color: '#fff',
    border: '1px solid rgba(255,255,255,0.28)',
    backdropFilter: 'blur(8px)',
    cursor: 'pointer',
    fontSize: 16,
    lineHeight: 1
  };
  return /*#__PURE__*/React.createElement("figure", _extends({
    style: {
      margin: 0,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'relative',
      aspectRatio: ratio,
      borderRadius: radius,
      overflow: 'hidden',
      background: 'var(--surface-sunken)',
      border: '1px solid var(--border-subtle)',
      boxShadow: 'var(--shadow-sm)',
      isolation: 'isolate'
    }
  }, video ? /*#__PURE__*/React.createElement("video", {
    ref: ref,
    src: src,
    poster: poster,
    muted: muted,
    loop: loop,
    autoPlay: autoplay,
    playsInline: true,
    onClick: toggle,
    style: {
      width: '100%',
      height: '100%',
      objectFit: fit,
      display: 'block',
      cursor: 'pointer',
      transition: 'transform var(--duration-slow) var(--ease-out)',
      transform: hover ? 'scale(1.02)' : 'scale(1)'
    }
  }) : src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: '100%',
      height: '100%',
      objectFit: fit,
      display: 'block',
      transition: 'transform var(--duration-slow) var(--ease-out)',
      transform: hover ? 'scale(1.03)' : 'scale(1)'
    }
  }) : /*#__PURE__*/React.createElement("div", {
    "aria-label": alt || 'media placeholder',
    style: {
      position: 'absolute',
      inset: 0,
      display: 'grid',
      placeItems: 'center',
      background: 'repeating-linear-gradient(135deg, var(--surface-sunken) 0 10px, var(--surface-card) 10px 20px)',
      color: 'var(--text-subtle)',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-mono)'
    }
  }, alt || 'drop media'), overlay && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg, rgba(11,31,54,0) 40%, rgba(11,31,54,0.72) 100%)',
      pointerEvents: 'none'
    }
  }), overlay && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 20,
      right: 20,
      bottom: 18,
      color: '#fff'
    }
  }, overlay), video && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      padding: 14,
      pointerEvents: 'none',
      opacity: hover || !playing ? 1 : 0,
      transition: 'opacity var(--duration-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": playing ? 'Pause' : 'Play',
    onClick: toggle,
    style: {
      ...ctl,
      pointerEvents: 'auto',
      width: playing ? 44 : 64,
      height: playing ? 44 : 64,
      fontSize: playing ? 16 : 22,
      background: playing ? ctl.background : 'var(--gradient-brand-deep)',
      border: playing ? ctl.border : '1px solid transparent',
      boxShadow: playing ? 'none' : 'var(--shadow-brand)',
      position: playing ? 'static' : 'absolute',
      left: '50%',
      top: '50%',
      transform: playing ? 'none' : 'translate(-50%,-50%)'
    }
  }, playing ? '❚❚' : '▶'), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": muted ? 'Unmute' : 'Mute',
    "aria-pressed": !muted,
    onClick: () => {
      setMuted(!muted);
      if (ref.current) ref.current.muted = !muted;
    },
    style: {
      ...ctl,
      pointerEvents: 'auto',
      marginLeft: 'auto',
      width: 'auto',
      padding: '0 14px',
      fontSize: 12,
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      letterSpacing: '0.02em'
    }
  }, muted ? 'Unmute' : 'Mute'))), caption && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      marginTop: 10,
      fontSize: 'var(--text-caption)',
      color: 'var(--text-muted)'
    }
  }, caption));
}
Object.assign(__ds_scope, { MediaFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/MediaFrame.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState,
  useRef,
  useLayoutEffect
} = React;
/**
 * Tabs / segmented control / filter bar. One component, three looks.
 * `underline` animates an indicator under the active tab; `segmented` slides a pill.
 */
function Tabs({
  items = [],
  value,
  defaultValue,
  onChange,
  variant = 'underline',
  size = 'md',
  fullWidth = false,
  style,
  ...rest
}) {
  const [inner, setInner] = useState(defaultValue ?? (items[0] && items[0].value));
  const active = value !== undefined ? value : inner;
  const refs = useRef({});
  const [ind, setInd] = useState({
    left: 0,
    width: 0
  });
  useLayoutEffect(() => {
    const el = refs.current[active];
    if (el) setInd({
      left: el.offsetLeft,
      width: el.offsetWidth
    });
  }, [active, items.length, size]);
  const select = v => {
    if (value === undefined) setInner(v);
    onChange && onChange(v);
  };
  const fs = size === 'sm' ? 'var(--text-ui-sm)' : 'var(--text-ui)';
  const seg = variant === 'segmented';
  const pills = variant === 'pills';
  const h = size === 'sm' ? 36 : 44;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      position: 'relative',
      display: fullWidth ? 'grid' : 'inline-flex',
      gridTemplateColumns: fullWidth ? `repeat(${items.length}, 1fr)` : undefined,
      gap: seg ? 4 : pills ? 8 : 0,
      padding: seg ? 4 : 0,
      background: seg ? 'var(--surface-sunken)' : 'transparent',
      borderRadius: seg ? 'var(--radius-pill)' : 0,
      borderBottom: variant === 'underline' ? '1px solid var(--border-default)' : 'none',
      ...style
    }
  }, rest), seg && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      top: 4,
      bottom: 4,
      left: ind.left,
      width: ind.width,
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-pill)',
      boxShadow: 'var(--shadow-sm)',
      transition: 'left var(--duration-slow) var(--ease-out), width var(--duration-slow) var(--ease-out)'
    }
  }), variant === 'underline' && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      bottom: -1,
      height: 2,
      left: ind.left,
      width: ind.width,
      background: 'var(--gradient-brand)',
      borderRadius: 2,
      transition: 'left var(--duration-slow) var(--ease-out), width var(--duration-slow) var(--ease-out)'
    }
  }), items.map(it => {
    const on = it.value === active;
    return /*#__PURE__*/React.createElement("button", {
      key: it.value,
      type: "button",
      role: "tab",
      "aria-selected": on,
      ref: el => {
        refs.current[it.value] = el;
      },
      onClick: () => select(it.value),
      style: {
        position: 'relative',
        zIndex: 1,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        height: seg ? h - 8 : h,
        padding: pills ? '0 16px' : '0 14px',
        fontSize: fs,
        fontFamily: 'var(--font-sans)',
        fontWeight: 'var(--weight-semibold)',
        letterSpacing: 'var(--tracking-ui)',
        whiteSpace: 'nowrap',
        cursor: 'pointer',
        border: pills ? `1px solid ${on ? 'var(--action-ink)' : 'var(--border-interactive)'}` : 'none',
        borderRadius: seg || pills ? 'var(--radius-pill)' : 0,
        background: pills && on ? 'var(--action-ink)' : 'transparent',
        color: pills && on ? 'var(--surface-card)' : on ? 'var(--text-strong)' : 'var(--text-muted)',
        transition: 'color var(--duration-base) var(--ease-out), background var(--duration-base) var(--ease-out)'
      }
    }, it.icon, it.label, it.count !== undefined && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--text-micro)',
        padding: '2px 7px',
        borderRadius: 'var(--radius-pill)',
        background: on && pills ? 'var(--on-ink-fill-hover)' : 'var(--surface-sunken)',
        color: 'inherit'
      }
    }, it.count));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/ThemeToggle.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useEffect,
  useState
} = React;
/**
 * Light / dark switch. Writes data-theme on <html>, persists to localStorage ('cory-theme'),
 * and defaults to the OS preference. Pair with the color tokens' dark block.
 */
function ThemeToggle({
  size = 'md',
  variant = 'secondary',
  storageKey = 'cory-theme',
  style,
  ...rest
}) {
  const read = () => {
    if (typeof document === 'undefined') return 'light';
    const attr = document.documentElement.getAttribute('data-theme');
    if (attr) return attr;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };
  const [theme, setTheme] = useState(read);
  const [hover, setHover] = useState(false);
  useEffect(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved && saved !== theme) {
        setTheme(saved);
        return;
      }
    } catch (e) {}
    document.documentElement.setAttribute('data-theme', theme);
  }, []);
  const apply = next => {
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    try {
      localStorage.setItem(storageKey, next);
    } catch (e) {}
  };
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);
  const dark = theme === 'dark';
  const px = {
    sm: 36,
    md: 44,
    lg: 52
  }[size] || 44;
  const looks = {
    secondary: {
      background: 'var(--surface-card)',
      color: 'var(--text-strong)',
      border: '1px solid var(--border-interactive)'
    },
    ghost: {
      background: hover ? 'var(--action-ghost-hover)' : 'transparent',
      color: 'var(--text-body)',
      border: '1px solid transparent'
    },
    onInk: {
      background: hover ? 'var(--on-ink-fill-hover)' : 'var(--on-ink-fill)',
      color: 'var(--on-ink-strong)',
      border: '1px solid var(--on-ink-border)'
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    role: "switch",
    "aria-checked": dark,
    "aria-label": dark ? 'Switch to light theme' : 'Switch to dark theme',
    title: dark ? 'Light theme' : 'Dark theme',
    onClick: () => apply(dark ? 'light' : 'dark'),
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'relative',
      display: 'inline-grid',
      placeItems: 'center',
      width: px,
      height: px,
      borderRadius: 'var(--radius-pill)',
      cursor: 'pointer',
      padding: 0,
      overflow: 'hidden',
      transition: 'background var(--duration-base) var(--ease-out), transform var(--duration-fast) var(--ease-out)',
      transform: hover ? 'translateY(-1px)' : 'none',
      ...(looks[variant] || looks.secondary),
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      width: px * 0.4,
      height: px * 0.4,
      borderRadius: '50%',
      background: dark ? 'transparent' : 'var(--gradient-brand-135)',
      boxShadow: dark ? `inset ${px * 0.13}px -${px * 0.08}px 0 0 currentColor` : 'none',
      transform: dark ? 'rotate(-25deg) scale(0.95)' : 'rotate(0) scale(1)',
      transition: 'transform var(--duration-slow) var(--ease-spring), background var(--duration-base) var(--ease-out), box-shadow var(--duration-base) var(--ease-out)'
    }
  }));
}
Object.assign(__ds_scope, { ThemeToggle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/ThemeToggle.jsx", error: String((e && e.message) || e) }); }

// doc-page.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).
/* BEGIN USAGE */
/**
 * <doc-page> — paged-document shell for printable HTML.
 *
 * FIRST, decide how the document paginates — up front, before building:
 *
 * - FLOWING document (the default): write the whole document as one
 *   normal HTML flow inside <doc-page>; the browser's print engine
 *   splits it onto pages at export. Use for long-form documents with a
 *   single text flow: reports, memos, letters, essays.
 * - EXPLICIT pagination: a fixed set of pre-paginated pages, one
 *   <section class="page"> child per page. Use when the user asks for a
 *   specific page count, or the design implies one: a one-page resume, a
 *   two-sided flier, a poster, a certificate, a brochure — any richly
 *   laid-out document without a single text flow.
 * - If in doubt, ask the user as part of the build.
 *
 * PAGE SIZING — paper differs by country (letter vs A4), so the printed
 * sheet is not one fixed truth:
 * - FLOWING documents pin NO paper size: the print engine paginates
 *   onto the user's real paper, and the content reflows to it.
 * - EXPLICITLY PAGINATED documents print each page at a FIXED page box
 *   with overflow hidden — letter by default, size="a4" for a clearly
 *   metric user, the user's chosen paper when they export. Design each
 *   page to FILL that box, fitting letter and A4 alike without overlap.
 * - width/height pin an explicit fixed size, ONLY when the user gives
 *   one.
 * Never write your own @page rule or hard-code paper dimensions in the
 * content.
 *
 * Sizing modes (attributes):
 *   (none)                      — portrait: flowing docs use the user's
 *           paper; explicitly paginated pages use the named size box
 *           (letter unless size="a4")
 *   orientation="landscape"     — the same, landscape
 *   width / height              — explicit fixed size, ONLY when the user
 *           gives one (e.g. width="22in" height="30in" for a 22×30
 *           poster): the page IS the design's size, printed at true
 *           dimensions (or scaled onto the user's paper at print time).
 *           Any absolute CSS length: px/in/mm/cm/pt/pc.
 * The component announces the chosen mode to the host app at runtime (a
 * meta tag it injects), so the print path can inject the user's true
 * paper size.
 *
 * On screen the document renders on a desk background: a flowing
 * document as one tall scrolling sheet (Google Docs' pageless view);
 * explicitly paginated documents as one card per page.
 *
 * EXPLICIT pagination usage:
 *   <style>doc-page:not(:defined){visibility:hidden}</style>
 *   <doc-page>
 *     <section class="page" id="p1">…one page's design…</section>
 *     <section class="page" id="p2">…</section>
 *   </doc-page>
 *   <script src="doc-page.js"></script>
 * How the page box works, concretely: each .page prints as ONE full-bleed
 * sheet at a FIXED physical size — letter by default (set size="a4" for
 * a clearly metric user), the user's chosen paper when they export —
 * with overflow hidden. Nothing scrolls and nothing reflows onto a next
 * sheet: content that misses the box is CLIPPED. Design each page to
 * FILL that page box, and to fit it — letter and A4 alike — without
 * overlap. Each page is a size container; don't size anything in
 * viewport units (they track the window, not the page), and never set
 * width or height on the .page section itself (the component sizes the
 * page box; an authored height like 100% is meaningless at print and is
 * overridden). The component owns the page box, the screen card chrome,
 * and the page breaks (never add your own break-before/after). Don't mix
 * .page sections with flowing content or header/footer slots in the same
 * document.
 *
 * FLOWING usage:
 *   <style>doc-page:not(:defined){visibility:hidden}</style>
 *   <doc-page margin="0.75in">
 *     <h1>Title</h1>
 *     <p>…body…</p>
 *   </doc-page>
 *   <script src="doc-page.js"></script>
 * There is no manual page-splitting — the browser's print engine
 * paginates at export. Standard break-hygiene rules (`break-inside:
 * avoid` on figures, code blocks, images and table rows; `orphans/
 * widows: 3`) are applied so paragraphs and groups split cleanly. On
 * screen and at print, headings default to `text-wrap: balance` and
 * body text to `text-wrap: pretty`; the defaults have zero specificity,
 * so any text-wrap you declare wins.
 *
 * Other attributes:
 *   size    — letter | a4 | legal (default letter). Flowing documents:
 *           preview proportion only — it does NOT pin their printed
 *           paper (the print dialog's paper governs); leave it alone
 *           there. Explicitly paginated documents: it sets the page box
 *           the cards and the pinned @page share (the export dialog's
 *           choice overrides both at print) — set size="a4" for a
 *           clearly metric user. Scaled-fit: names the sheet the fit is
 *           computed against, same a4-for-metric-users advice.
 *   content-width / content-height — the design's own fixed dimensions
 *           (CSS lengths), for scaling a fixed-size design ONTO the
 *           named sheet: content lays out at exactly this size, and the
 *           component scales it to fit that sheet's printable area
 *           (centered horizontally, top-aligned; the export dialog
 *           re-fits to the user's actual paper choice where available).
 *           Both must be set; they do not change the page box. For pages
 *           WITHOUT running header/footer slots.
 *   margin  — printable inset on every page of a FLOWING document
 *           (default 0.75in); margin="0" makes pages full-bleed.
 *           Explicitly paginated pages are always full-bleed.
 *
 * Running header/footer (flowing documents only): give an element
 * `slot="header"` or `slot="footer"` and it repeats on every printed
 * page via `position: fixed`. To keep body text from sliding under it,
 * the component prints inside a single-cell table whose <thead>/<tfoot>
 * are spacers sized to the header/footer height — browsers repeat
 * thead/tfoot on every page, so each sheet's content starts below the
 * header and ends above the footer. On screen the header/footer render
 * once at the top/bottom of the sheet.
 *
 * At print the component injects `@page { margin: 0 }` (which leaves
 * Chrome no margin box to draw its date/URL/page-count header in) and
 * moves the visual margin onto the sheet's own padding. It also marks
 * the document as owning its print CSS (a
 * `meta[name="omelette-owns-print"]` it injects at runtime), so the
 * PDF export never injects page-geometry CSS of its own on top.
 *
 * Print best practices for the content you author:
 * - Multi-column text: use CSS columns (`column-count` +
 *   `column-gap`), never side-by-side flex/grid columns — only real
 *   CSS columns flow and break across pages. `column-span: all` lets
 *   a heading span the columns; `hyphens: auto` (needs `lang` on
 *   the html element) keeps narrow columns readable.
 * - Page breaks in flowing documents: `break-before: page` on an
 *   element that must start a new page (a chapter, an appendix). Add
 *   your own kept-together blocks (callouts, stat tiles, cards) to a
 *   `break-inside: avoid` rule, and keep each one shorter than a page.
 * - Extend `orphans: 3; widows: 3` to any custom text blocks you add
 *   (p and li are covered by default).
 * - Give long tables a <thead> — browsers repeat it on every printed
 *   page.
 * - No `position: fixed`/`sticky` and no viewport units in content:
 *   fixed elements stamp every printed page (running headers/footers go
 *   in the component's slots) and `100vh` mis-sizes at print.
 *
 * Author content as static HTML so the user can click-to-edit any text
 * directly. Do not set width/padding/background on the document body —
 * the component owns the sheet box.
 */
/* END USAGE */

(() => {
  const PAPER = {
    letter: ['8.5in', '11in'],
    a4: ['210mm', '297mm'],
    legal: ['8.5in', '14in']
  };
  const CSS_LENGTH = /^\d+(\.\d+)?(px|in|mm|cm|pt|pc)$/;
  // Unitless "0" is a valid CSS length and the natural way to write
  // margin="0"; normalise it to 0px so max()/calc() (which reject a bare
  // number) keep working.
  const safeLen = (v, fb) => {
    v = (v || '').trim();
    return v === '0' ? '0px' : CSS_LENGTH.test(v) ? v : fb;
  };
  // WebKit (Safari and every iOS browser shell) never repeats a table's
  // thead/tfoot on printed pages (WebKit bug 17205), so the spacer-borne
  // vertical margins of a FLOWING document reach only the first page
  // there. Engine check, not browser check: vendor is 'Apple Computer,
  // Inc.' exactly for WebKit and 'Google Inc.' for Blink.
  const WK_PRINT = /apple/i.test(navigator.vendor || '');
  // CSS length → px number (CSS absolute units are exact: 1in = 96px).
  // Returns NaN for anything safeLen would reject — callers gate on it.
  const PX_PER = {
    px: 1,
    in: 96,
    mm: 96 / 25.4,
    cm: 96 / 2.54,
    pt: 96 / 72,
    pc: 16
  };
  const toPx = v => {
    const m = /^(\d+(?:\.\d+)?)(px|in|mm|cm|pt|pc)$/.exec((v || '').trim());
    return m ? parseFloat(m[1]) * PX_PER[m[2]] : NaN;
  };
  const stylesheet = `
    :host {
      position: relative;
      display: block;
      /* When the viewport is narrower than the page, grow to wrap the
       * sheet (plus this padding) instead of staying viewport-width, so
       * the desk background and right margin reach the sheet's far edge
       * in the horizontal scroll. */
      min-width: max-content;
      min-height: 100vh;
      background: #f5f5f4;
      padding: 48px 24px;
      box-sizing: border-box;
      font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif;
      --doc-page-w: 8.5in;
      --doc-page-h: 11in;
      --doc-page-margin: 0.75in;
      --doc-hdr-h: 0px;
      --doc-ftr-h: 0px;
      --doc-hdr-pad: 0px;
      --doc-ftr-pad: 0px;
    }
    .sheet {
      width: var(--doc-page-w);
      margin: 0 auto;
      background: #fff;
      box-shadow: 0 2px 10px rgba(20, 20, 19, 0.12);
      border-radius: 7px;
      box-sizing: border-box;
      padding: var(--doc-page-margin);
    }
    .frame { width: 100%; border-collapse: collapse; }
    /* Scaled-fit mode (content-width/content-height): the inner .fit box
     * lays the content out at its authored fixed size and scales it onto
     * the printable area; .fit-box reserves the scaled footprint in flow
     * (transforms don't affect layout) and centers it. Without the mode,
     * both divs are unstyled block pass-throughs. */
    /* Explicit pagination: direct .page children are the pages. The sheet
     * becomes a transparent stack and each page carries the card look on
     * screen; at print each page is exactly one full-bleed sheet. The
     * ::slotted defaults are deliberately weak (document CSS wins), so
     * authored page styling can override any of this. */
    .sheet.paginated {
      background: transparent;
      box-shadow: none;
      border-radius: 0;
      padding: 0;
    }
    .paginated ::slotted(.page) {
      position: relative;
      display: block;
      width: 100%;
      aspect-ratio: var(--doc-page-ar);
      container-type: size;
      overflow: hidden;
      box-sizing: border-box;
      background: #fff;
      border-radius: 7px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
      print-color-adjust: exact;
      -webkit-print-color-adjust: exact;
      break-inside: avoid;
    }
    .paginated ::slotted(.page:not(:first-child)) { margin-top: 1rem; }
    @media print {
      .sheet.paginated { padding: 0; }
      /* The flowing-document vertical inset lives on the repeating
       * thead/tfoot spacers, not the sheet padding — they must go too,
       * or each full-sheet .page is pushed ~margin down and spills onto
       * a second sheet. Paginated pages are full-bleed by definition
       * (content owns its insets). */
      .sheet.paginated .hdr-space,
      .sheet.paginated .ftr-space { height: 0; }
      .paginated ::slotted(.page) {
        border-radius: 0 !important;
        box-shadow: none !important;
        margin: 0 !important;
        /* Physical page-box sizing, no viewport units: Safari resolves
         * 100vh against the window, not the page box, so a vh-sized card
         * paginates wrong there. --doc-page-w/h are the named size by
         * default and are overridden to the user's chosen paper by the
         * export path, so every card is exactly one sheet either way.
         * Width + height (same source values as @page size) rather than
         * width + aspect-ratio: the ratio is a 6-decimal rounding of the
         * same division, and a few millionths of overflow would spill a
         * blank sheet after every page. The screen-only aspect-ratio
         * (preview proportions) must not leak into print. cqh typography
         * tracks the same box.
         *
         * Every declaration is !important: per CSS Scoping, unimportant
         * shadow ::slotted rules LOSE to the document context, so a page
         * section's authored inline style would silently beat this print
         * geometry. A model-authored height:100% did exactly that — the
         * percentage resolves as auto in the all-auto print ancestry, the
         * base rule's size containment turns auto into ZERO, and
         * overflow:hidden then paints nothing: a blank PDF with perfect
         * page boxes. At print the component's geometry is the design's
         * whole contract, so it must win over any authored sizing. */
        aspect-ratio: auto !important;
        width: var(--doc-page-w) !important;
        height: var(--doc-page-h) !important;
        overflow: hidden !important;
      }
      .paginated ::slotted(.page:not(:first-child)) {
        break-before: page !important;
        margin-top: 0 !important;
      }
    }
    .fit-mode .fit-box {
      width: calc(var(--doc-fit-w) * var(--doc-fit-scale));
      height: calc(var(--doc-fit-h) * var(--doc-fit-scale));
      margin: 0 auto;
      break-inside: avoid;
    }
    /* Monolithic at print: Blink slices a transform-scaled child at
     * fragmentainer boundaries mapped in UNSCALED layout coordinates
     * (transforms are paint-time), so the .fit box (authored size, e.g.
     * 1400x990) gets cut at the page's free block space and spills onto
     * a second sheet even though its SCALED footprint fits the page by
     * construction. overflow:hidden makes .fit-box a scroll container —
     * monolithic under fragmentation (css-break-3) — so the scaled
     * content prints atomically on one sheet. No clipping for content
     * within the authored box: .fit-box is calc-sized to exactly the
     * scaled footprint. (Content that bleeds past content-width/height
     * is clipped at the footprint — fit mode's contract; it previously
     * painted beyond it at print.) Print-only, so the screen rendering
     * keeps visible overflow for editor affordances.
     * The export path injects the same rule into frozen copies
     * (print-eval.ts om-print-fit-contain). The .fit-mode scope is
     * load-bearing: .fit-box wraps slotted content in EVERY mode, and an
     * unscoped overflow:hidden would make whole flowing documents
     * monolithic (one truncated sheet). overflow:hidden, never clip —
     * clip is not a scroll container, so not monolithic. */
    @media print {
      .fit-mode .fit-box { overflow: hidden; }
    }
    .fit-mode .fit {
      width: var(--doc-fit-w);
      height: var(--doc-fit-h);
      transform: scale(var(--doc-fit-scale));
      transform-origin: top left;
    }
    .frame td, .frame th { padding: 0; text-align: left; font-weight: inherit; }
    .hdr-space { height: var(--doc-hdr-h); }
    .ftr-space { height: var(--doc-ftr-h); }
    ::slotted([slot="header"]),
    ::slotted([slot="footer"]) { display: block; box-sizing: border-box; }
    @media print {
      :host { background: none; padding: 0; min-width: 0; min-height: 0; }
      .sheet {
        width: auto; margin: 0; box-shadow: none; border-radius: 0;
        padding: 0 var(--doc-page-margin);
      }
      /* The thead/tfoot spacers repeat on every page, so they carry the
       * vertical page margin (which the sheet's own padding cannot, since
       * that padding is consumed once on the first/last page). The running
       * header/footer are fixed inside that band. */
      /* The 0.35in is breathing room between a running header/footer and
       * the body; without one the spacer is exactly the page margin, so a
       * margin="0" full-bleed document gets truly full-bleed pages. */
      .hdr-space { height: max(var(--doc-page-margin), calc(var(--doc-hdr-h) + var(--doc-hdr-pad))); }
      .ftr-space { height: max(var(--doc-page-margin), calc(var(--doc-ftr-h) + var(--doc-ftr-pad))); }
      /* WebKit flowing documents: @page carries the vertical margin (see
       * _syncPrintPageRule), so the spacers keep only whatever a running
       * header/footer needs BEYOND it — page 1 would otherwise double its
       * top inset. Paginated sheets already zero their spacers above. */
      .sheet.wk-print:not(.paginated) .hdr-space { height: max(0px, calc(max(var(--doc-page-margin), calc(var(--doc-hdr-h) + var(--doc-hdr-pad))) - var(--doc-page-margin))); }
      .sheet.wk-print:not(.paginated) .ftr-space { height: max(0px, calc(max(var(--doc-page-margin), calc(var(--doc-ftr-h) + var(--doc-ftr-pad))) - var(--doc-page-margin))); }
      ::slotted([slot="header"]) {
        position: fixed; top: 0; left: 0; right: 0; margin: 0;
        padding: calc(var(--doc-page-margin) * 0.45) var(--doc-page-margin) 0;
      }
      ::slotted([slot="footer"]) {
        position: fixed; bottom: 0; left: 0; right: 0; margin: 0;
        padding: 0 var(--doc-page-margin) calc(var(--doc-page-margin) * 0.45);
      }
    }
  `;
  class DocPage extends HTMLElement {
    static get observedAttributes() {
      return ['size', 'width', 'height', 'margin', 'orientation', 'content-width', 'content-height'];
    }
    constructor() {
      super();
      this._root = this.attachShadow({
        mode: 'open'
      });
      this._mo = typeof MutationObserver === 'function' ? new MutationObserver(() => this._scheduleMeasure()) : null;
    }

    /** The named paper's [w, h], swapped when orientation="landscape".
     *  Only the named size swaps — explicit width/height are exact values
     *  the author already oriented. */
    _paperSize() {
      const named = PAPER[(this.getAttribute('size') || '').toLowerCase()] || PAPER.letter;
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      return landscape ? [named[1], named[0]] : named;
    }
    get pageWidth() {
      return safeLen(this.getAttribute('width'), this._paperSize()[0]);
    }
    get pageHeight() {
      return safeLen(this.getAttribute('height'), this._paperSize()[1]);
    }
    get pageMargin() {
      return safeLen(this.getAttribute('margin'), '0.75in');
    }

    /** Scaled-fit mode's content box [w, h] as CSS lengths, or null when
     *  the mode is off (either attribute missing/invalid/zero — a partial
     *  declaration falls back to normal flow rather than guessing). */
    _contentFit() {
      const w = safeLen(this.getAttribute('content-width'), null);
      const h = safeLen(this.getAttribute('content-height'), null);
      if (!w || !h) return null;
      const wPx = toPx(w),
        hPx = toPx(h);
      return wPx > 0 && hPx > 0 ? [w, h, wPx, hPx] : null;
    }
    connectedCallback() {
      if (!this._sheet) this._render();
      this._syncSize();
      this._syncPrintPageRule();
      this._ensureTextWrapDefaults();
      this._ensureOwnsPrintMeta();
      this._syncFixedSizeMeta();
      this._syncPrintSizingMeta();
      if (this._mo) this._mo.observe(this, {
        subtree: true,
        childList: true,
        characterData: true,
        attributes: true
      });
      this._onResize = () => this._scheduleMeasure();
      window.addEventListener('resize', this._onResize);
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => this._scheduleMeasure());
      }
      this._scheduleMeasure();
    }
    disconnectedCallback() {
      window.removeEventListener('resize', this._onResize);
      if (this._mo) this._mo.disconnect();
      if (this._raf) {
        cancelAnimationFrame(this._raf);
        this._raf = null;
      }
      // Drop the head rules when the last doc-page leaves, so a deleted
      // document's @page geometry and text-wrap defaults can't apply to
      // whatever replaces it.
      const survivor = document.querySelector('doc-page');
      if (!survivor) {
        ['doc-page-print', 'doc-page-text-wrap', 'doc-page-owns-print', 'doc-page-fixed-size', 'doc-page-print-sizing'].forEach(id => {
          const tag = document.getElementById(id);
          if (tag) tag.remove();
        });
        // A live deck-stage deferred its own print-sizing meta to ours —
        // hand the page-global meta over so the deck isn't left unmarked.
        const deck = document.querySelector('deck-stage');
        if (deck && typeof deck._ensurePrintSizingMeta === 'function') {
          deck._ensurePrintSizingMeta();
        }
      } else {
        // A departed owner hands each page-global meta to whatever
        // doc-page remains (or it's removed).
        if (typeof survivor._syncFixedSizeMeta === 'function') {
          survivor._syncFixedSizeMeta();
        }
        if (typeof survivor._syncPrintSizingMeta === 'function') {
          survivor._syncPrintSizingMeta();
        }
      }
    }
    attributeChangedCallback() {
      if (!this._sheet) return;
      this._syncSize();
      this._syncPrintPageRule();
      this._syncFixedSizeMeta();
      this._syncPrintSizingMeta();
      this._scheduleMeasure();
    }
    _render() {
      this._root.innerHTML = `
        <style>${stylesheet}</style>
        <style id="vars"></style>
        <div class="sheet" data-screen-label="Document">
          <table class="frame" role="presentation">
            <thead><tr><th><div class="hdr-space"><slot name="header"></slot></div></th></tr></thead>
            <tbody><tr><td class="body"><div class="fit-box"><div class="fit"><slot></slot></div></div></td></tr></tbody>
            <tfoot><tr><td><div class="ftr-space"><slot name="footer"></slot></div></td></tr></tfoot>
          </table>
        </div>`;
      this._sheet = this._root.querySelector('.sheet');
      this._vars = this._root.getElementById('vars');
    }

    /** Runtime sizing lives in a shadow <style> :host rule, never on the
     *  light-DOM host element, so serialize-persist can't write it back. */
    _syncSize(hdrH, ftrH) {
      // Scaled-fit mode: content at its authored size, scaled onto the
      // printable area (page minus margins on both axes). The factor is a
      // plain number var so calc(length * number) stays valid; 4 decimals
      // keeps the shadow style stable across re-measures. Upscaling is
      // allowed — print transforms are vector, so text and CSS stay crisp
      // (raster images soften, which the catalog bullet warns about).
      const fit = this._contentFit();
      let fitVars = '';
      if (fit) {
        const marginPx = toPx(this.pageMargin) || 0;
        const availW = toPx(this.pageWidth) - 2 * marginPx;
        const availH = toPx(this.pageHeight) - 2 * marginPx;
        const scale = Math.min(availW / fit[2], availH / fit[3]);
        if (scale > 0 && Number.isFinite(scale)) {
          fitVars = '--doc-fit-w:' + fit[0] + ';' + '--doc-fit-h:' + fit[1] + ';' + '--doc-fit-scale:' + scale.toFixed(4) + ';';
        }
      }
      this._sheet.classList.toggle('fit-mode', !!fitVars);
      // Numeric w/h ratio for the paginated page cards' aspect-ratio —
      // aspect-ratio takes a number, not a length ratio, so compute it
      // here (CSS length division isn't portable). 6 decimals keeps the
      // shadow style stable across re-syncs.
      const arW = toPx(this.pageWidth);
      const arH = toPx(this.pageHeight);
      const ar = arW > 0 && arH > 0 ? (arW / arH).toFixed(6) : '0.772727';
      this._vars.textContent = ':host{' + fitVars + '--doc-page-ar:' + ar + ';' + '--doc-page-w:' + this.pageWidth + ';' + '--doc-page-h:' + this.pageHeight + ';' + '--doc-page-margin:' + this.pageMargin + ';' + '--doc-hdr-h:' + (hdrH || 0) + 'px;' + '--doc-ftr-h:' + (ftrH || 0) + 'px;' + '--doc-hdr-pad:' + (hdrH ? '0.35in' : '0px') + ';' + '--doc-ftr-pad:' + (ftrH ? '0.35in' : '0px') + '}';
    }

    /** @page is a no-op inside shadow DOM, so the rule lives in <head>.
     *  Re-appended on every sync so it stays last in source order — the
     *  @page cascade is source-order per descriptor, so this rule wins
     *  over any other @page rule in the document.
     *
     *  The @page SIZE is pinned where the page box IS part of the design:
     *  explicit-fixed-size mode (width + height authored), scaled-fit
     *  mode (the named sheet the fit targets), and explicit pagination
     *  (the named size the cards share — so card and sheet agree on
     *  every print path, and the export path's chosen paper overrides
     *  BOTH with one later rule). For FLOWING documents no paper size is
     *  emitted at all — the true size comes from the user's preference,
     *  injected by the export path or chosen in the print dialog — so a
     *  flowing document never fights the paper it lands on.
     *  margin: 0 is emitted in every mode: it leaves Chrome no margin box
     *  to draw its date/URL/page-count header in, and the visual margin
     *  lives on the sheet's own padding. */
    _syncPrintPageRule() {
      const id = 'doc-page-print';
      let tag = document.getElementById(id);
      if (!tag) {
        tag = document.createElement('style');
        tag.id = id;
      }
      document.head.appendChild(tag);
      // Three print-geometry regimes:
      // - true-size: the page IS the design — pin its exact size.
      // - scaled-fit (content-width/height): the fit factor is computed
      //   against the NAMED paper's printable area, so that paper must
      //   stay pinned or the scaled content overflows a smaller sheet
      //   (the export path re-fits and re-pins at print time on top).
      // - default modes: no paper size — but landscape still needs the
      //   paper-agnostic 'size: landscape' keyword, because the size
      //   descriptor is what carries orientation; without it a landscape
      //   document prints portrait whenever nothing injects a size.
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      // Explicit pagination pins the page box to the SAME values that
      // size the cards (the named size by default, the export path's
      // chosen paper when its later rule overrides both) — card and
      // sheet agree on every print path, and a mismatched real paper
      // shrinks-to-fit in the dialog instead of clipping a Letter card
      // on A4. Declared before the paginated read below so both derive
      // from one check.
      const paginatedNow = this.querySelector(':scope > .page') !== null;
      const sizeDescriptor = this._trueSizePx() ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : this._contentFit() ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : paginatedNow ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : landscape ? 'size: landscape; ' : '';
      // WebKit never repeats the thead/tfoot spacers that carry a flowing
      // document's vertical page margins (see WK_PRINT above), so pages
      // after the first print edge-to-edge there. Carry the VERTICAL
      // margins on @page for WebKit instead, and the shadow print CSS
      // trims the first-page spacers by the same amount (.sheet.wk-print
      // rules). Horizontal inset stays on the sheet's own padding in
      // every engine. Blink keeps margin: 0 (a nonzero margin there
      // re-opens the box Chrome draws its header furniture in). One cost,
      // learned in testing: Safari's own date/URL headers are a USER
      // dialog setting ("Print headers and footers") that renders in the
      // margin area when room exists — margin: 0 only suppressed it by
      // leaving no room, and no CSS controls it. The export dialog's
      // Safari guide teaches turning the setting off for flowing
      // documents. Explicitly paginated and fixed-size documents keep
      // margin: 0 everywhere: their pages ARE the sheet.
      const wkFlowing = WK_PRINT && !paginatedNow && !this._trueSizePx() && !this._contentFit();
      const marginDescriptor = wkFlowing ? 'margin: ' + this.pageMargin + ' 0; ' : 'margin: 0; ';
      // Shadow-internal marker (never serialized), kept in lockstep with
      // the @page decision above: the print CSS trims the first-page
      // spacers ONLY while @page actually carries the margins — a
      // true-size or scaled-fit sheet keeps margin: 0 and must keep its
      // spacers too. Re-synced here so attribute changes and pagination
      // flips move both together.
      if (this._sheet) this._sheet.classList.toggle('wk-print', wkFlowing);
      tag.textContent = '@page { ' + sizeDescriptor + marginDescriptor + '} ' + '@media print { html, body { margin: 0 !important; padding: 0 !important; background: none !important; height: auto !important; overflow: visible !important; } ' + 'h1,h2,h3,h4,h5,h6 { break-after: avoid; } ' + 'figure,pre,blockquote,img,svg,tr { break-inside: avoid; } ' + 'p,li { orphans: 3; widows: 3; } ' + '* { -webkit-print-color-adjust: exact; print-color-adjust: exact; ' + 'backdrop-filter: none !important; -webkit-backdrop-filter: none !important; } ' + '*, *::before, *::after { animation-delay: -99s !important; animation-duration: .001s !important; ' + 'animation-iteration-count: 1 !important; animation-fill-mode: both !important; ' + 'animation-play-state: running !important; transition-duration: 0s !important; } }';
    }

    /** Typographic defaults for document text: balance headings, avoid
     *  widowed/orphaned words in body copy (browsers without text-wrap
     *  support drop the declarations). Zero-specificity via :where() so
     *  any text-wrap authored on those elements wins; document-level so the
     *  rules reach the slotted (light DOM) content — shadow styles can't.
     *  data-omelette-injected marks the tag for the host editor to strip
     *  at serialize, so it is never written back as authored source. */
    _ensureTextWrapDefaults() {
      if (document.getElementById('doc-page-text-wrap')) return;
      const tag = document.createElement('style');
      tag.id = 'doc-page-text-wrap';
      tag.setAttribute('data-omelette-injected', '');
      tag.textContent = ':where(h1,h2,h3,h4,h5,h6){text-wrap:balance}' + ':where(p,li,blockquote,figcaption){text-wrap:pretty}';
      document.head.appendChild(tag);
    }

    /** Declares that this document owns its print CSS. The instant-PDF
     *  export checks for the meta by NAME PRESENCE alone (content is
     *  ignored) and skips its automatic print-CSS injections, so the
     *  component's @page geometry is never overridden by a heuristic.
     *  data-omelette-injected keeps it out of serialized source. */
    _ensureOwnsPrintMeta() {
      if (document.getElementById('doc-page-owns-print')) return;
      const tag = document.createElement('meta');
      tag.id = 'doc-page-owns-print';
      tag.name = 'omelette-owns-print';
      tag.content = 'true';
      tag.setAttribute('data-omelette-injected', '');
      document.head.appendChild(tag);
    }

    /** This page's valid true-size page box (explicit width AND height)
     *  as [w, h] px ints, or null when the mode is off. */
    _trueSizePx() {
      if (!safeLen(this.getAttribute('width'), null) || !safeLen(this.getAttribute('height'), null)) return null;
      const w = Math.round(toPx(this.pageWidth));
      const h = Math.round(toPx(this.pageHeight));
      return w > 0 && h > 0 ? [w, h] : null;
    }

    /** True-size pages (explicit width AND height) also declare the page
     *  box as the preview size: the in-app preview reads
     *  meta[name="omelette-fixed-size"] (content "W,H" in px ints) and
     *  scales the sheet into view — without it an 18in poster previews at
     *  true size with scrollbars. Never overrides an author-set meta
     *  (only the component's own id is managed). The meta is page-global
     *  while doc-page instances are not, so every sync recomputes the
     *  page-wide owner — the first connected true-size doc-page — and a
     *  non-true-size sibling's sync can never delete the owner's meta.
     *  Removed when no true-size page remains (the owner's disconnect
     *  re-syncs via any survivor) or when an author-set meta exists. */
    _syncFixedSizeMeta() {
      const id = 'doc-page-fixed-size';
      const own = document.getElementById(id);
      const authored = document.querySelector('meta[name="omelette-fixed-size"]:not([data-omelette-injected])');
      // The page-wide owner, not this instance: an upgraded true-size page
      // anywhere in the document keeps the meta alive and sized.
      let box = null;
      for (const el of document.querySelectorAll('doc-page')) {
        box = typeof el._trueSizePx === 'function' ? el._trueSizePx() : null;
        if (box) break;
      }
      if (!box || authored) {
        if (own) own.remove();
        return;
      }
      const tag = own || document.createElement('meta');
      tag.id = id;
      tag.name = 'omelette-fixed-size';
      tag.content = box[0] + ',' + box[1];
      tag.setAttribute('data-omelette-injected', '');
      if (!own) document.head.appendChild(tag);
    }

    /** This page's print-sizing mode: 'fixed' when an explicit width AND
     *  height are authored (the page is the design's own size), else the
     *  default paper in the authored orientation. */
    _printSizingMode() {
      if (this._trueSizePx()) return 'fixed';
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      return landscape ? 'default-landscape' : 'default-portrait';
    }

    /** Announces the print-sizing mode to the host app:
     *  meta[name="omelette-print-sizing"] with content 'default-portrait',
     *  'default-landscape', or 'fixed' (fixed pages also carry the
     *  omelette-fixed-size meta with the page box in px). The export path
     *  probes it to decide what true paper size to inject at print time —
     *  in the default modes the component emits no paper size of its own.
     *  Same page-global ownership rules as the fixed-size meta above:
     *  first connected doc-page owns it, an authored meta is never
     *  overridden, removed when no doc-page remains. */
    _syncPrintSizingMeta() {
      const id = 'doc-page-print-sizing';
      const own = document.getElementById(id);
      const authored = document.querySelector('meta[name="omelette-print-sizing"]:not([data-omelette-injected])');
      // A fixed page wins outright (mirroring the fixed-size loop above,
      // so the two metas can never contradict each other in a mixed
      // multi-page document); otherwise the first page's mode holds.
      let mode = null;
      for (const el of document.querySelectorAll('doc-page')) {
        if (typeof el._printSizingMode !== 'function') continue;
        const m = el._printSizingMode();
        if (m === 'fixed') {
          mode = m;
          break;
        }
        if (mode === null) mode = m;
      }
      if (!mode || authored) {
        if (own) own.remove();
        return;
      }
      // A deck-stage that connected first injected its own meta and
      // defers to any existing one — take it over, or the document ends
      // up with two conflicting injected metas (a doc-page page is the
      // document; the deck re-ensures its meta if every doc-page leaves).
      const deckMeta = document.getElementById('deck-stage-print-sizing');
      if (deckMeta) deckMeta.remove();
      const tag = own || document.createElement('meta');
      tag.id = id;
      tag.name = 'omelette-print-sizing';
      tag.content = mode;
      tag.setAttribute('data-omelette-injected', '');
      if (!own) document.head.appendChild(tag);
    }
    _scheduleMeasure() {
      if (this._raf) return;
      this._raf = requestAnimationFrame(() => {
        this._raf = null;
        this._measure();
      });
    }

    /** Slot heights feed the print spacers (--doc-hdr-h / --doc-ftr-h), so
     *  they re-measure on content mutation, resize, and font load. The
     *  same pass detects explicit pagination (direct .page children) and
     *  toggles the sheet between the flowing-document card and the
     *  page-per-card stack — content edits can add or remove pages at any
     *  time, so this tracks the same mutations the measurement does. */
    _measure() {
      const hdr = this.querySelector(':scope > [slot="header"]');
      const ftr = this.querySelector(':scope > [slot="footer"]');
      const wasPaginated = this._sheet.classList.contains('paginated');
      this._sheet.classList.toggle('paginated', this.querySelector(':scope > .page') !== null);
      // The WebKit @page margin is flowing-only, so a pagination flip
      // must re-emit the rule (content edits can add or remove .page
      // sections at any time).
      if (this._sheet.classList.contains('paginated') !== wasPaginated) {
        this._syncPrintPageRule();
      }
      this._syncSize(hdr ? hdr.offsetHeight : 0, ftr ? ftr.offsetHeight : 0);
    }
  }
  if (!customElements.get('doc-page')) {
    customElements.define('doc-page', DocPage);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "doc-page.js", error: String((e && e.message) || e) }); }

// showcase.js
try { (() => {
/* AgentCory DS Showcase — GSAP + Lenis orchestration */
(() => {
  if (!document.getElementById('site-header') || !document.getElementById('hero-canvas')) return; // showcase page only
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  gsap.registerPlugin(ScrollTrigger);

  // Smooth scroll
  let lenis = null;
  if (!reduce && window.Lenis) {
    lenis = new Lenis({
      lerp: 0.11,
      wheelMultiplier: 1
    });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(t => lenis.raf(t * 1000));
    gsap.ticker.lagSmoothing(0);
  }
  // Anchor links via lenis
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const el = document.querySelector(a.getAttribute('href'));
      if (!el) return;
      e.preventDefault();
      if (lenis) lenis.scrollTo(el, {
        offset: -70
      });else window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY - 70,
        behavior: 'smooth'
      });
    });
  });

  // Split headline into chars
  document.querySelectorAll('[data-split]').forEach(el => {
    const walk = node => {
      [...node.childNodes].forEach(child => {
        if (child.nodeType === 3) {
          const frag = document.createDocumentFragment();
          child.textContent.split('').forEach(ch => {
            const s = document.createElement('span');
            s.className = 'ch';
            s.innerHTML = ch === ' ' ? '&nbsp;' : ch;
            frag.appendChild(s);
          });
          node.replaceChild(frag, child);
        } else if (child.nodeType === 1) walk(child);
      });
    };
    walk(el);
  });
  if (reduce) {
    // Reduced motion: keep opacity-only reveals and the gradient sweep, drop all movement, parallax, loops and the preloader
    document.documentElement.classList.add('no-motion');
    const pre = document.getElementById('preloader');
    if (pre) pre.remove();
    gsap.set(['.hero-title .ch', '.hero-fade', '.hero-chip', '.reveal', '.sec-title .ch', '.voice-bubble'], {
      y: 0,
      x: 0,
      scale: 1,
      rotateX: 0,
      clearProps: 'transform'
    });
    gsap.set('.color-band', {
      scaleY: 1
    });
    gsap.timeline().to('.hero-title .ch', {
      opacity: 1,
      duration: 0.5,
      stagger: 0.012,
      ease: 'power2.out'
    }).to('.grad-sweep', {
      backgroundPosition: '0% 0',
      duration: 1.1,
      ease: 'power2.inOut'
    }, '-=0.3').to(['.hero-fade', '.hero-chip'], {
      opacity: 1,
      duration: 0.6,
      stagger: 0.06,
      ease: 'power2.out'
    }, '-=0.9');
    document.querySelectorAll('.reveal, .sec-title .ch, .voice-bubble').forEach(el => {
      gsap.to(el, {
        opacity: 1,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 90%'
        }
      });
    });
    return;
  }

  // ---- Preloader → hero intro ----
  const intro = gsap.timeline();
  intro.to('#pre-logo', {
    scale: 1,
    opacity: 1,
    duration: 0.5,
    ease: 'power3.out'
  }).to('#pre-bar i', {
    scaleX: 1,
    duration: 0.55,
    ease: 'power2.inOut'
  }, '-=0.2').to('#preloader', {
    yPercent: -100,
    duration: 0.7,
    ease: 'power4.inOut'
  }, '+=0.1').set('#preloader', {
    display: 'none'
  }).from('#site-header', {
    y: -60,
    opacity: 0,
    duration: 0.6,
    ease: 'power3.out'
  }, '-=0.55').to('.hero-title .ch', {
    y: 0,
    opacity: 1,
    rotateX: 0,
    duration: 0.8,
    stagger: 0.018,
    ease: 'power4.out'
  }, '-=0.45').to('.grad-sweep', {
    backgroundPosition: '0% 0',
    duration: 1.1,
    ease: 'power2.inOut'
  }, '-=0.35').to('.hero-fade', {
    y: 0,
    opacity: 1,
    duration: 0.7,
    stagger: 0.09,
    ease: 'power3.out'
  }, '-=1.0').to('.hero-chip', {
    y: 0,
    opacity: 1,
    scale: 1,
    duration: 0.7,
    stagger: 0.08,
    ease: 'back.out(1.6)'
  }, '-=0.5');

  // Hero scroll-out: content lifts and fades, chips part, so the fold feels dimensional
  gsap.to('.hero-in', {
    y: -80,
    opacity: 0,
    ease: 'none',
    scrollTrigger: {
      trigger: '#hero',
      start: 'top top',
      end: 'bottom 35%',
      scrub: true
    }
  });
  document.querySelectorAll('.hero-chip').forEach((c, i) => {
    gsap.to(c, {
      y: -(60 + i * 30),
      x: (i % 2 ? 1 : -1) * (20 + i * 10),
      opacity: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: '#hero',
        start: 'top top',
        end: 'bottom 45%',
        scrub: true
      }
    });
  });

  // Hero chips: float + mouse parallax
  document.querySelectorAll('.hero-chip').forEach((c, i) => {
    gsap.to(c, {
      y: '+=' + (8 + i * 4),
      duration: 2.4 + i * 0.35,
      yoyo: true,
      repeat: -1,
      ease: 'sine.inOut',
      delay: i * 0.2
    });
  });
  const heroArt = document.querySelector('.hero-art');
  if (heroArt && matchMedia('(pointer:fine)').matches) {
    window.addEventListener('mousemove', e => {
      const x = e.clientX / innerWidth - 0.5,
        y = e.clientY / innerHeight - 0.5;
      document.querySelectorAll('.hero-chip').forEach((c, i) => {
        const d = (i % 3 + 1) * 10;
        gsap.to(c, {
          x: x * d,
          duration: 0.9,
          ease: 'power2.out',
          overwrite: 'auto'
        });
      });
      gsap.to('.hero-glow', {
        x: x * 40,
        y: y * 30,
        duration: 1.2,
        ease: 'power2.out',
        overwrite: 'auto'
      });
    }, {
      passive: true
    });
  }

  // Generic reveals
  document.querySelectorAll('.reveal').forEach(el => {
    gsap.to(el, {
      y: 0,
      opacity: 1,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 86%'
      },
      delay: parseFloat(el.dataset.delay || 0)
    });
  });

  // Section headline char sweeps
  document.querySelectorAll('.sec-title[data-split]').forEach(el => {
    gsap.to(el.querySelectorAll('.ch'), {
      y: 0,
      opacity: 1,
      rotateX: 0,
      duration: 0.7,
      stagger: 0.014,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%'
      },
      onComplete: function () {
        gsap.set(this.targets(), {
          clearProps: 'transform'
        });
      }
    });
  });

  // Color bars grow
  gsap.to('.color-band', {
    scaleY: 1,
    duration: 1,
    stagger: 0.06,
    ease: 'power4.out',
    transformOrigin: 'bottom',
    scrollTrigger: {
      trigger: '#colors .bands',
      start: 'top 80%'
    }
  });

  // Giant type scrub
  gsap.fromTo('.type-giant', {
    xPercent: 6,
    opacity: 0.25
  }, {
    xPercent: -6,
    opacity: 1,
    ease: 'none',
    scrollTrigger: {
      trigger: '#type',
      start: 'top bottom',
      end: 'bottom top',
      scrub: 0.6
    }
  });

  // Marquees
  document.querySelectorAll('.marquee-track').forEach(track => {
    const dir = track.dataset.dir === 'rtl' ? 1 : -1;
    gsap.to(track, {
      xPercent: dir * -50,
      duration: 26,
      repeat: -1,
      ease: 'none'
    });
  });

  // Templates: horizontal pin on desktop
  ScrollTrigger.matchMedia({
    '(min-width: 960px)': () => {
      const rail = document.querySelector('.tpl-rail');
      const wrap = document.querySelector('.tpl-pin');
      if (!rail || !wrap) return;
      const dist = () => rail.scrollWidth - wrap.clientWidth;
      gsap.to(rail, {
        x: () => -dist(),
        ease: 'none',
        scrollTrigger: {
          trigger: '#templates',
          start: 'top top',
          end: () => '+=' + dist(),
          pin: true,
          scrub: 0.7,
          invalidateOnRefresh: true
        }
      });
    }
  });

  // Chat bubbles pop in
  gsap.to('.voice-bubble', {
    y: 0,
    opacity: 1,
    scale: 1,
    duration: 0.6,
    stagger: 0.45,
    ease: 'back.out(1.5)',
    scrollTrigger: {
      trigger: '#voice .voice-thread',
      start: 'top 78%'
    }
  });

  // Stat counters
  document.querySelectorAll('[data-count]').forEach(el => {
    const end = parseFloat(el.dataset.count);
    const fmt = v => (el.dataset.prefix || '') + (el.dataset.decimals ? v.toFixed(1) : Math.round(v).toLocaleString()) + (el.dataset.suffix || '');
    const obj = {
      v: 0
    };
    gsap.to(obj, {
      v: end,
      duration: 1.6,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 88%'
      },
      onUpdate: () => {
        el.textContent = fmt(obj.v);
      }
    });
  });

  // Scroll progress bar
  gsap.to('.progress', {
    scaleX: 1,
    ease: 'none',
    scrollTrigger: {
      start: 0,
      end: 'max',
      scrub: 0.3
    }
  });

  // Section heads: overline slides in, subtitle fades, in sequence with the headline
  document.querySelectorAll('.sec-head').forEach(head => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: head,
        start: 'top 85%'
      }
    });
    tl.to(head.querySelector('.overline'), {
      opacity: 1,
      x: 0,
      duration: 0.6,
      ease: 'power3.out'
    }).to(head.querySelector('.sec-sub'), {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: 'power3.out'
    }, '-=0.2');
  });

  // Component cards: 3D tilt toward pointer + spotlight follows the cursor
  if (matchMedia('(pointer:fine)').matches) {
    document.querySelectorAll('.comp-card').forEach(card => {
      card.addEventListener('pointermove', e => {
        const r = card.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width,
          py = (e.clientY - r.top) / r.height;
        card.style.setProperty('--mx', px * 100 + '%');
        card.style.setProperty('--my', py * 100 + '%');
        gsap.to(card, {
          rotateY: (px - .5) * 8,
          rotateX: (.5 - py) * 8,
          transformPerspective: 900,
          y: -6,
          duration: 0.5,
          ease: 'power2.out',
          overwrite: 'auto'
        });
      });
      card.addEventListener('pointerleave', () => gsap.to(card, {
        rotateX: 0,
        rotateY: 0,
        y: 0,
        duration: 0.7,
        ease: 'power3.out',
        overwrite: 'auto'
      }));
    });
    // Magnetic CTAs: the button leans toward the cursor, snaps back on leave
    document.querySelectorAll('.magnetic').forEach(btn => {
      btn.addEventListener('pointermove', e => {
        const r = btn.getBoundingClientRect();
        gsap.to(btn, {
          x: (e.clientX - r.left - r.width / 2) * 0.28,
          y: (e.clientY - r.top - r.height / 2) * 0.28,
          duration: 0.4,
          ease: 'power2.out',
          overwrite: 'auto'
        });
      });
      btn.addEventListener('pointerleave', () => gsap.to(btn, {
        x: 0,
        y: 0,
        duration: 0.7,
        ease: 'elastic.out(1, 0.45)',
        overwrite: 'auto'
      }));
    });
  }

  // Active nav link follows the section in view
  document.querySelectorAll('section[id]').forEach(sec => {
    const link = document.querySelector('.nav-links a[href="#' + sec.id + '"]');
    if (!link) return;
    ScrollTrigger.create({
      trigger: sec,
      start: 'top 50%',
      end: 'bottom 50%',
      onToggle: self => link.classList.toggle('active', self.isActive)
    });
  });

  // Section parallax: dark CTA glow and type specimen drift against scroll
  gsap.to('#cta .glow', {
    yPercent: 30,
    ease: 'none',
    scrollTrigger: {
      trigger: '#cta',
      start: 'top bottom',
      end: 'bottom top',
      scrub: true
    }
  });
  gsap.fromTo('.voice-thread', {
    y: 60
  }, {
    y: -40,
    ease: 'none',
    scrollTrigger: {
      trigger: '#voice',
      start: 'top bottom',
      end: 'bottom top',
      scrub: 0.5
    }
  });

  // Header shadow on scroll
  ScrollTrigger.create({
    start: 60,
    onToggle: self => document.getElementById('site-header').classList.toggle('scrolled', self.isActive)
  });

  // Hero canvas: drifting gradient orbs
  const cv = document.getElementById('hero-canvas');
  if (cv) {
    const ctx = cv.getContext('2d');
    let w, h;
    const orbs = [];
    const resize = () => {
      w = cv.width = cv.offsetWidth * devicePixelRatio;
      h = cv.height = cv.offsetHeight * devicePixelRatio;
    };
    resize();
    addEventListener('resize', resize, {
      passive: true
    });
    const cols = ['37,138,253', '41,190,221', '31,184,119'];
    for (let i = 0; i < 7; i++) orbs.push({
      x: Math.random(),
      y: Math.random(),
      r: 0.12 + Math.random() * 0.16,
      c: cols[i % 3],
      sp: 0.00008 + Math.random() * 0.00014,
      ph: Math.random() * Math.PI * 2,
      a: 0.05 + Math.random() * 0.06
    });
    // node field: sparse brand nodes, linked when near, drawn toward the pointer
    const nodes = [];
    let pointer = null;
    const seed = () => {
      nodes.length = 0;
      const n = Math.max(18, Math.min(70, Math.round(cv.offsetWidth * cv.offsetHeight / 16000)));
      for (let i = 0; i < n; i++) nodes.push({
        x: Math.random(),
        y: Math.random(),
        vx: (Math.random() - .5) * .00004,
        vy: (Math.random() - .5) * .00004,
        r: 1 + Math.random() * 1.6,
        c: i % 3 === 0 ? cols[1] : cols[0],
        ph: Math.random() * 6.28
      });
    };
    seed();
    addEventListener('resize', seed, {
      passive: true
    });
    if (matchMedia('(pointer:fine)').matches) {
      cv.parentElement.addEventListener('pointermove', e => {
        const r = cv.getBoundingClientRect();
        pointer = {
          x: (e.clientX - r.left) / r.width,
          y: (e.clientY - r.top) / r.height
        };
      }, {
        passive: true
      });
      cv.parentElement.addEventListener('pointerleave', () => pointer = null);
    }
    const inkRgb = () => document.documentElement.getAttribute('data-theme') === 'dark' ? '255,255,255' : '11,31,54';
    let last = 0,
      vis = true;
    new IntersectionObserver(e => vis = e[0].isIntersecting).observe(cv);
    const tick = t => {
      requestAnimationFrame(tick);
      if (!vis || t - last < 33) return;
      last = t;
      ctx.clearRect(0, 0, w, h);
      const link = Math.min(150, Math.max(90, cv.offsetWidth * 0.1)) * devicePixelRatio,
        ink = inkRgb();
      nodes.forEach(n => {
        n.x += n.vx * 33 + Math.sin(t * .0006 + n.ph) * .00008;
        n.y += n.vy * 33 + Math.cos(t * .0005 + n.ph) * .00008;
        if (pointer) {
          const dx = pointer.x - n.x,
            dy = pointer.y - n.y,
            d = Math.hypot(dx, dy);
          if (d < .22 && d > .002) {
            n.x += dx / d * .0009 * (1 - d / .22);
            n.y += dy / d * .0009 * (1 - d / .22);
          }
        }
        if (n.x < -.02) n.x = 1.02;
        if (n.x > 1.02) n.x = -.02;
        if (n.y < -.02) n.y = 1.02;
        if (n.y > 1.02) n.y = -.02;
      });
      ctx.lineWidth = devicePixelRatio;
      for (let i = 0; i < nodes.length; i++) for (let k = i + 1; k < nodes.length; k++) {
        const a = nodes[i],
          b = nodes[k];
        const d = Math.hypot((a.x - b.x) * w, (a.y - b.y) * h);
        if (d < link) {
          const near = pointer && Math.hypot(((a.x + b.x) / 2 - pointer.x) * w, ((a.y + b.y) / 2 - pointer.y) * h) < link * 1.4;
          ctx.strokeStyle = 'rgba(' + (near ? cols[1] : ink) + ',' + (near ? .5 : .09) * (1 - d / link) + ')';
          ctx.beginPath();
          ctx.moveTo(a.x * w, a.y * h);
          ctx.lineTo(b.x * w, b.y * h);
          ctx.stroke();
        }
      }
      nodes.forEach(n => {
        const near = pointer && Math.hypot((n.x - pointer.x) * w, (n.y - pointer.y) * h) < link * 1.4;
        ctx.fillStyle = 'rgba(' + n.c + ',' + (near ? .95 : .55) * (.75 + .25 * Math.sin(t * .0014 + n.ph)) + ')';
        ctx.beginPath();
        ctx.arc(n.x * w, n.y * h, n.r * devicePixelRatio * (near ? 1.6 : 1), 0, 7);
        ctx.fill();
      });
      orbs.forEach(o => {
        const x = (o.x + Math.sin(t * o.sp + o.ph) * 0.12) * w;
        const y = (o.y + Math.cos(t * o.sp * 0.8 + o.ph) * 0.1) * h;
        const r = o.r * Math.max(w, h);
        const g = ctx.createRadialGradient(x, y, 0, x, y, r);
        g.addColorStop(0, `rgba(${o.c},${o.a})`);
        g.addColorStop(1, `rgba(${o.c},0)`);
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, 7);
        ctx.fill();
      });
    };
    requestAnimationFrame(tick);
  }

  // Refresh after iframes load (heights settle)
  window.addEventListener('load', () => setTimeout(() => ScrollTrigger.refresh(), 400));
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "showcase.js", error: String((e && e.message) || e) }); }

// ui_kits/roi-calculator/RoiCalculator.jsx
try { (() => {
// AgentCory ROI Calculator — faithful recreation of the live site's interactive tool.
function Field({
  label,
  value,
  onChange,
  prefix,
  suffix,
  step = 1
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13.5,
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-md)',
      background: 'var(--surface-card)',
      overflow: 'hidden'
    }
  }, prefix && /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '0 0 0 14px',
      color: 'var(--text-muted)',
      fontSize: 15
    }
  }, prefix), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: value,
    step: step,
    onChange: e => onChange(parseFloat(e.target.value) || 0),
    style: {
      flex: 1,
      border: 0,
      outline: 'none',
      padding: '11px 14px',
      fontSize: 15,
      fontFamily: 'var(--font-sans)',
      color: 'var(--text-strong)',
      background: 'transparent',
      width: '100%'
    }
  }), suffix && /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '0 14px 0 0',
      color: 'var(--text-muted)',
      fontSize: 15
    }
  }, suffix)));
}
function Slider({
  label,
  value,
  onChange,
  min,
  max,
  suffix
}) {
  const pct = (value - min) / (max - min) * 100;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13.5,
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--text-link)'
    }
  }, value, suffix)), /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: min,
    max: max,
    value: value,
    onChange: e => onChange(parseFloat(e.target.value)),
    style: {
      WebkitAppearance: 'none',
      appearance: 'none',
      height: 6,
      borderRadius: 999,
      background: `linear-gradient(90deg, var(--blue-500) 0%, var(--cyan-500) ${pct}%, var(--slate-200) ${pct}%)`,
      outline: 'none',
      cursor: 'pointer'
    }
  }));
}
function RoiCalculator() {
  const {
    Badge,
    Button
  } = window.DesignSystem_ebeb85;
  const Icon = ({
    name
  }) => /*#__PURE__*/React.createElement("i", {
    "data-lucide": name,
    style: {
      width: 20,
      height: 20
    }
  });
  const [inquiries, setInquiries] = React.useState(2000);
  const [contactRate, setContactRate] = React.useState(45);
  const [appRate, setAppRate] = React.useState(22);
  const [tuition, setTuition] = React.useState(25000);
  const [staffCost, setStaffCost] = React.useState(30);
  const [touches, setTouches] = React.useState(6);
  const [coryContact, setCoryContact] = React.useState(92);
  const [responseImpact, setResponseImpact] = React.useState(25);
  const [automation, setAutomation] = React.useState(85);
  const YIELD = 0.30; // application → enrollment yield
  const annualInq = inquiries * 12;
  const baseApps = annualInq * (contactRate / 100) * (appRate / 100);
  const coryApps = annualInq * (coryContact / 100) * (appRate / 100) * (1 + responseImpact / 100);
  const addApps = Math.max(0, Math.round(coryApps - baseApps));
  const addEnroll = Math.round(addApps * YIELD);
  const revenue = addEnroll * tuition;
  const hours = Math.round(annualInq * touches * (automation / 100) * 1 / 60); // ~1 min/touch
  const investment = 48000; // illustrative annual platform cost
  const roi = Math.round((revenue + hours * staffCost) / investment * 100);
  const fmtMoney = n => n >= 1e6 ? `$${(n / 1e6).toFixed(1)}M` : `$${Math.round(n).toLocaleString()}`;
  const fmtNum = n => n.toLocaleString();
  const results = [{
    icon: 'file-plus',
    value: `+${fmtNum(addApps)}`,
    label: 'Additional Applications'
  }, {
    icon: 'graduation-cap',
    value: `+${fmtNum(addEnroll)}`,
    label: 'Additional Enrollments'
  }, {
    icon: 'trending-up',
    value: fmtMoney(revenue),
    label: 'Tuition Revenue Lift'
  }, {
    icon: 'clock',
    value: fmtNum(hours),
    label: 'Staff Hours Saved'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100vh',
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      background: 'var(--surface-card)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1120,
      margin: '0 auto',
      padding: '16px var(--gutter)',
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-agentcory.svg",
    alt: "AgentCory",
    style: {
      height: 24
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 1,
      height: 22,
      background: 'var(--border-default)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      fontSize: 15,
      color: 'var(--text-strong)'
    }
  }, "ROI Calculator"), /*#__PURE__*/React.createElement(Badge, {
    tone: "success",
    dot: true,
    style: {
      marginLeft: 'auto'
    }
  }, "Live estimate"))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1120,
      margin: '0 auto',
      padding: '40px var(--gutter) 64px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--text-fluid-h2)',
      letterSpacing: '-0.03em',
      margin: '0 0 6px'
    }
  }, "Calculate your ROI"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      color: 'var(--text-muted)',
      margin: 0
    }
  }, "See how much Cory can save your team and add to enrollment revenue.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
      gap: 'var(--grid-gap)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-xl)',
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 16,
      margin: '0 0 18px'
    }
  }, "Your Current Metrics"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Monthly Inquiries",
    value: inquiries,
    onChange: setInquiries,
    step: 50
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Current Contact Rate",
    value: contactRate,
    onChange: setContactRate,
    suffix: "%"
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Inquiry \u2192 Application",
    value: appRate,
    onChange: setAppRate,
    suffix: "%"
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Average Tuition (Net)",
    value: tuition,
    onChange: setTuition,
    prefix: "$",
    step: 500
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Staff Hourly Cost",
    value: staffCost,
    onChange: setStaffCost,
    prefix: "$"
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Avg Outreach Touches / Lead",
    value: touches,
    onChange: setTouches
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-xl)',
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 16,
      margin: '0 0 6px'
    }
  }, "Cory's Impact ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500,
      color: 'var(--text-subtle)',
      fontSize: 13
    }
  }, "(Adjustable)")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement(Slider, {
    label: "Cory Contact Rate",
    value: coryContact,
    onChange: setCoryContact,
    min: 60,
    max: 100,
    suffix: "%"
  }), /*#__PURE__*/React.createElement(Slider, {
    label: "Response Time Impact",
    value: responseImpact,
    onChange: setResponseImpact,
    min: 0,
    max: 50,
    suffix: "%"
  }), /*#__PURE__*/React.createElement(Slider, {
    label: "Automation Coverage",
    value: automation,
    onChange: setAutomation,
    min: 50,
    max: 100,
    suffix: "%"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 26,
      padding: 16,
      borderRadius: 'var(--radius-md)',
      background: 'var(--blue-100)',
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--blue-600)',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "info"
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      color: 'var(--blue-700)',
      margin: 0,
      lineHeight: 1.5
    }
  }, "Estimates use a ", Math.round(YIELD * 100), "% application-to-enrollment yield and an illustrative annual platform cost. Adjust the sliders to model your scenario."))), /*#__PURE__*/React.createElement("aside", {
    style: {
      position: 'sticky',
      top: 20,
      background: 'var(--gradient-ink)',
      borderRadius: 'var(--radius-2xl)',
      padding: 28,
      color: '#fff',
      boxShadow: 'var(--shadow-lg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: '#9FE6F4',
      marginBottom: 6
    }
  }, "Projected Annual Impact"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 10,
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 60,
      lineHeight: 1,
      letterSpacing: '-0.03em',
      background: 'var(--gradient-brand)',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      color: 'transparent'
    }
  }, roi, "%"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'rgba(255,255,255,0.7)'
    }
  }, "Estimated", /*#__PURE__*/React.createElement("br", null), "Annual ROI")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, results.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '14px 0',
      borderTop: '1px solid rgba(255,255,255,0.1)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 38,
      height: 38,
      borderRadius: 'var(--radius-sm)',
      background: 'rgba(255,255,255,0.08)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#9FE6F4',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: r.icon
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 24,
      letterSpacing: '-0.02em'
    }
  }, r.value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-caption)',
      color: 'var(--on-ink-body)'
    }
  }, r.label))))), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    fullWidth: true,
    style: {
      marginTop: 22
    }
  }, "Book a Demo")))));
}
Object.assign(window, {
  RoiCalculator
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/roi-calculator/RoiCalculator.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/App.jsx
try { (() => {
// Compose the full AgentCory marketing homepage
function App() {
  const [chatOpen, setChatOpen] = React.useState(false);
  const [demoOpen, setDemoOpen] = React.useState(false);
  const {
    SiteHeader,
    Hero,
    Workflows,
    Features,
    Proof,
    ClosingCta,
    SiteFooter,
    ChatWidget,
    DemoModal
  } = window;
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  });
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SiteHeader, {
    onTry: () => setChatOpen(true),
    onDemo: () => setDemoOpen(true)
  }), /*#__PURE__*/React.createElement(Hero, {
    onTry: () => setChatOpen(true),
    onDemo: () => setDemoOpen(true),
    onOpenChat: () => setChatOpen(true)
  }), /*#__PURE__*/React.createElement(Workflows, null), /*#__PURE__*/React.createElement(Features, null), /*#__PURE__*/React.createElement(Proof, null), /*#__PURE__*/React.createElement(ClosingCta, {
    onDemo: () => setDemoOpen(true)
  }), /*#__PURE__*/React.createElement(SiteFooter, null), /*#__PURE__*/React.createElement(ChatWidget, {
    open: chatOpen,
    onToggle: () => setChatOpen(o => !o)
  }), /*#__PURE__*/React.createElement(DemoModal, {
    open: demoOpen,
    onClose: () => setDemoOpen(false)
  }));
}
Object.assign(window, {
  App
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ChatWidget.jsx
try { (() => {
// Floating Cory chat widget + a demo-request modal
function ChatWidget({
  open,
  onToggle
}) {
  const {
    ChatBubble,
    Button
  } = window.DesignSystem_ebeb85;
  const [msgs, setMsgs] = React.useState([{
    from: 'cory',
    text: "Hi, I'm Cory 👋 Ask me anything about admissions — programs, deadlines, tuition."
  }]);
  const [val, setVal] = React.useState('');
  const bodyRef = React.useRef(null);
  const canned = "Great question! I can answer that instantly and even book you a call with an advisor. Want me to set one up?";
  function send() {
    if (!val.trim()) return;
    const text = val.trim();
    setMsgs(m => [...m, {
      from: 'user',
      text
    }]);
    setVal('');
    setTimeout(() => setMsgs(m => [...m, {
      from: 'cory',
      text: canned
    }]), 600);
  }
  React.useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [msgs]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, open && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      bottom: 96,
      right: 24,
      width: 380,
      maxWidth: 'calc(100vw - 32px)',
      height: 520,
      background: 'var(--surface-page)',
      borderRadius: 'var(--radius-xl)',
      border: '1px solid var(--border-subtle)',
      boxShadow: 'var(--shadow-xl)',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      zIndex: 90
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--gradient-ink)',
      padding: '16px 18px',
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/cory-tile.svg",
    alt: "",
    style: {
      width: 38,
      height: 38,
      borderRadius: 'var(--radius-tile)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      lineHeight: 1.25,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: '#fff',
      fontWeight: 700,
      fontSize: 15
    }
  }, "Cory"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: '#9FE6F4',
      fontSize: 12,
      fontWeight: 600
    }
  }, "\u25CF Typically replies in <5s")), /*#__PURE__*/React.createElement("button", {
    onClick: onToggle,
    style: {
      background: 'rgba(255,255,255,0.12)',
      border: 0,
      color: '#fff',
      width: 28,
      height: 28,
      borderRadius: '50%',
      cursor: 'pointer',
      fontSize: 16
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    ref: bodyRef,
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: 16,
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, msgs.map((m, i) => /*#__PURE__*/React.createElement(ChatBubble, {
    key: i,
    from: m.from
  }, m.text))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 12,
      borderTop: '1px solid var(--border-subtle)',
      background: 'var(--surface-card)',
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: val,
    onChange: e => setVal(e.target.value),
    onKeyDown: e => e.key === 'Enter' && send(),
    placeholder: "Type your question\u2026",
    style: {
      flex: 1,
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-pill)',
      padding: '10px 16px',
      fontSize: 14,
      fontFamily: 'var(--font-sans)',
      outline: 'none',
      color: 'var(--text-strong)'
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: send,
    style: {
      width: 40,
      height: 40,
      borderRadius: '50%',
      border: 0,
      background: 'var(--gradient-brand)',
      color: '#fff',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "send",
    style: {
      width: 18,
      height: 18
    }
  })))), /*#__PURE__*/React.createElement("button", {
    onClick: onToggle,
    "aria-label": "Chat with Cory",
    style: {
      position: 'fixed',
      bottom: 24,
      right: 24,
      width: 60,
      height: 60,
      borderRadius: '50%',
      border: 0,
      background: 'var(--gradient-brand)',
      boxShadow: 'var(--shadow-brand)',
      cursor: 'pointer',
      zIndex: 91,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": open ? 'x' : 'message-circle',
    style: {
      width: 26,
      height: 26,
      color: '#fff'
    }
  })));
}
function DemoModal({
  open,
  onClose
}) {
  const {
    Button,
    Input
  } = window.DesignSystem_ebeb85;
  const [sent, setSent] = React.useState(false);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(6,18,31,0.55)',
      backdropFilter: 'blur(3px)',
      zIndex: 100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-2xl)',
      boxShadow: 'var(--shadow-xl)',
      width: 460,
      maxWidth: '100%',
      padding: 32,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      position: 'absolute',
      top: 18,
      right: 18,
      border: 0,
      background: 'var(--surface-sunken)',
      width: 32,
      height: 32,
      borderRadius: '50%',
      cursor: 'pointer',
      fontSize: 18,
      color: 'var(--text-muted)'
    }
  }, "\xD7"), !sent ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/cory-tile-dark.svg",
    alt: "",
    style: {
      width: 48,
      height: 48,
      borderRadius: 'var(--radius-tile)',
      marginBottom: 16
    }
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 24,
      letterSpacing: '-0.02em',
      margin: '0 0 6px'
    }
  }, "Let me call you"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      color: 'var(--text-muted)',
      margin: '0 0 22px'
    }
  }, "Experience Cory's voice capabilities \u2014 I'd love to chat."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Full Name",
    required: true,
    placeholder: "Jane Doe"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Phone Number",
    required: true,
    type: "tel",
    placeholder: "(555) 000-0000"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "When should Cory call?",
    placeholder: "Right now",
    defaultValue: "Right now"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    fullWidth: true,
    onClick: () => setSent(true)
  }, "Request Demo Call"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-overline)',
      color: 'var(--text-muted)',
      textAlign: 'center',
      margin: 0
    }
  }, "\u26A1 < 60s response time"))) : /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '20px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 60,
      height: 60,
      borderRadius: '50%',
      background: 'var(--green-100)',
      color: 'var(--green-500)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 18px'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "check",
    style: {
      width: 30,
      height: 30
    }
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 22,
      margin: '0 0 8px'
    }
  }, "You're all set!"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      color: 'var(--text-muted)',
      margin: '0 0 22px'
    }
  }, "Cory will call you shortly. Watch for a call from 1-888-465-1991."), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: onClose
  }, "Close"))));
}
Object.assign(window, {
  ChatWidget,
  DemoModal
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ChatWidget.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Features.jsx
try { (() => {
// "Why Admissions Teams Choose Cory" — feature grid
function Features() {
  const {
    FeatureCard
  } = window.DesignSystem_ebeb85;
  const Icon = ({
    name
  }) => /*#__PURE__*/React.createElement("i", {
    "data-lucide": name,
    style: {
      width: 24,
      height: 24
    }
  });
  const items = [{
    icon: 'zap',
    title: 'Lightning-Fast Outreach',
    body: 'Strike while the iron is hot. Cory engages every new inquiry within 60 seconds, ensuring no lead goes cold.',
    tags: ['30s avg response', 'Natural AI conversation', 'Voicemail detection']
  }, {
    icon: 'messages-square',
    title: 'Multi-Channel Mastery',
    body: 'Meet prospects where they are across voice, SMS, email, and chat. Each touchpoint is perfectly timed.',
    tags: ['Voice + SMS + Email', 'Perfect timing', 'WhatsApp support']
  }, {
    icon: 'clock',
    title: 'Always Available',
    body: 'Never miss an inquiry, regardless of time or day. Cory captures weekend and evening leads competitors lose.',
    tags: ['24/7 coverage', 'Time zone smart', 'Holiday support']
  }, {
    icon: 'brain',
    title: 'Intelligent FAQ Brain',
    body: 'Cory knows your programs inside and out — trained on your curriculum, requirements, costs, and policies.',
    tags: ['Custom training', 'Auto updates', 'Human escalation']
  }, {
    icon: 'target',
    title: 'Smart Qualification',
    body: 'Books meetings and hands off to counselors with full context. Reduces manual outreach by 80–90%.',
    tags: ['Lead scoring', 'Auto booking', 'Context handoff']
  }, {
    icon: 'plug',
    title: 'Seamless Integration',
    body: 'Plugs into your CRM/SIS — every touch logged, dashboards included. Native Slate, Salesforce, and Banner.',
    tags: ['CRM sync', 'Auto logging', 'Real-time data']
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '76px var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "cory-overline"
  }, "Why teams choose Cory"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 38,
      letterSpacing: '-0.03em',
      margin: '10px 0 0'
    }
  }, "Built for enrollment teams")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
      gap: 'var(--grid-gap)'
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement(FeatureCard, {
    key: i,
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: it.icon
    }),
    title: it.title,
    tags: it.tags
  }, it.body)))));
}
Object.assign(window, {
  Features
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Features.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
// Marketing hero — headline, stats, and a product visual (the Cory chat preview)
function Hero({
  onTry,
  onDemo,
  onOpenChat
}) {
  const {
    Button,
    StatCard,
    Badge,
    ChatBubble
  } = window.DesignSystem_ebeb85;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: -160,
      right: -120,
      width: 520,
      height: 520,
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(41,190,221,0.18), rgba(37,138,253,0.05) 60%, transparent 70%)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--section-y) var(--gutter)',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
      gap: 'clamp(32px, 5vw, 56px)',
      alignItems: 'center',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "cory-eyebrow-pill",
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: 'var(--green-500)'
    }
  }), "AI Admissions Assistant"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 56,
      lineHeight: 1.04,
      letterSpacing: '-0.03em',
      margin: '0 0 18px'
    }
  }, "Boost admissions with ", /*#__PURE__*/React.createElement("span", {
    className: "cory-gradient-text"
  }, "AI precision")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 19,
      lineHeight: 1.55,
      color: 'var(--text-body)',
      margin: '0 0 28px',
      maxWidth: 480
    }
  }, "Engage every inquiry in under 60 seconds. Turn prospects into enrolled students."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginBottom: 40,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: onTry
  }, "Try Cory Now"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    onClick: onDemo
  }, "Book a Demo")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '24px 44px',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(StatCard, {
    value: "<60s",
    label: "Response Time",
    gradient: true
  }), /*#__PURE__*/React.createElement(StatCard, {
    value: "94%",
    label: "Contact Rate"
  }), /*#__PURE__*/React.createElement(StatCard, {
    value: "10x",
    label: "ROI Potential"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-2xl)',
      border: '1px solid var(--border-subtle)',
      boxShadow: 'var(--shadow-xl)',
      padding: 18,
      maxWidth: 400,
      marginLeft: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '6px 6px 14px',
      borderBottom: '1px solid var(--border-subtle)',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/cory-tile-dark.svg",
    alt: "",
    style: {
      width: 36,
      height: 36,
      borderRadius: 'var(--radius-tile)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      lineHeight: 1.25
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 14.5,
      color: 'var(--text-strong)'
    }
  }, "Cory"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-success)',
      fontWeight: 600
    }
  }, "\u25CF Online now")), /*#__PURE__*/React.createElement(Badge, {
    tone: "brand",
    size: "sm",
    style: {
      marginLeft: 'auto'
    }
  }, "< 5s")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(ChatBubble, {
    from: "cory",
    time: "9:41 AM"
  }, "Hi, I'm Cory \uD83D\uDC4B Ready to find your program?"), /*#__PURE__*/React.createElement(ChatBubble, {
    from: "user"
  }, "Do you offer evening MBA classes?"), /*#__PURE__*/React.createElement(ChatBubble, {
    from: "cory",
    showAvatar: true
  }, "Yes \u2014 Tue/Thu evenings. Want me to book a call with an advisor?")), /*#__PURE__*/React.createElement("button", {
    onClick: onOpenChat,
    style: {
      marginTop: 16,
      width: '100%',
      padding: '11px',
      borderRadius: 'var(--radius-pill)',
      border: '1px solid var(--border-default)',
      background: 'var(--surface-sunken)',
      color: 'var(--text-muted)',
      fontSize: 14,
      fontFamily: 'var(--font-sans)',
      cursor: 'pointer',
      textAlign: 'left'
    }
  }, "Ask Cory a question\u2026")))));
}
Object.assign(window, {
  Hero
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Proof.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Testimonials + Colaberry banner + closing CTA + footer
function Proof() {
  const {
    Testimonial,
    Button
  } = window.DesignSystem_ebeb85;
  const data = [{
    metric: '847%',
    metricLabel: 'ROI in Year 1',
    quote: 'Cory transformed our admissions process. We went from 40% contact rates to 94% overnight, and conversion improved 30%.',
    name: 'Dr. Sarah Johnson',
    role: 'Director of Admissions, Metro State University'
  }, {
    metric: '2,100',
    metricLabel: 'Hours Saved / Year',
    quote: 'Our team focuses on relationships instead of manual outreach. Cory handles qualification perfectly and hands off with full context.',
    name: 'Michael Chen',
    role: 'VP Enrollment Management, Tech Institute'
  }, {
    metric: '$2.4M',
    metricLabel: 'Added Revenue',
    quote: 'The 24/7 availability alone increased our inquiries by 20%. Weekend leads now convert at the same rate as business hours.',
    name: 'Lisa Rodriguez',
    role: 'Enrollment Director, Community College Network'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-card)',
      borderTop: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '76px var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "cory-overline"
  }, "Trusted by leading institutions"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 38,
      letterSpacing: '-0.03em',
      margin: '10px 0 0'
    }
  }, "Results admissions teams feel")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
      gap: 'var(--grid-gap)'
    }
  }, data.map((d, i) => /*#__PURE__*/React.createElement(Testimonial, _extends({
    key: i
  }, d))))));
}
function ClosingCta({
  onDemo
}) {
  const {
    Button
  } = window.DesignSystem_ebeb85;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '20px var(--gutter) 80px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--gradient-ink)',
      borderRadius: 'var(--radius-2xl)',
      padding: 'clamp(32px, 5vw, 56px) clamp(24px, 4vw, 48px)',
      color: '#fff',
      display: 'flex',
      flexWrap: 'wrap',
      gap: 32,
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: -120,
      right: 40,
      width: 360,
      height: 360,
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(41,190,221,0.35), transparent 65%)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/cory-tile.svg",
    alt: "",
    style: {
      width: 56,
      height: 56,
      borderRadius: 'var(--radius-tile)',
      marginBottom: 18
    }
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      color: '#fff',
      fontSize: 34,
      letterSpacing: '-0.03em',
      margin: '0 0 10px'
    }
  }, "Let's work together"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      color: 'rgba(255,255,255,0.78)',
      margin: 0,
      maxWidth: 480
    }
  }, "I'm ready to help your team engage more prospects, save time, and boost enrollments \u2014 let me show you how in 30 minutes.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: onDemo
  }, "Book My Demo")))));
}
function SiteFooter() {
  const cols = [{
    h: 'Product',
    items: ['Features', 'How It Works', 'Demo', 'Case Studies']
  }, {
    h: 'Resources',
    items: ['Blog', 'Guides', 'Webinars', 'Help Center']
  }, {
    h: 'Company',
    items: ['About', 'Careers', 'Privacy Policy', 'Terms of Service']
  }];
  const Icon = ({
    name
  }) => /*#__PURE__*/React.createElement("i", {
    "data-lucide": name,
    style: {
      width: 18,
      height: 18
    }
  });
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--navy-800)',
      color: 'var(--on-ink-body)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '56px var(--gutter) 32px',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-agentcory-darkmode.svg",
    alt: "AgentCory",
    style: {
      height: 26,
      marginBottom: 16
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      lineHeight: 1.6,
      margin: '0 0 16px',
      maxWidth: 260
    }
  }, "AI-powered admissions assistant that boosts conversions with lightning-fast, multi-channel outreach."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, ['linkedin', 'twitter', 'youtube', 'instagram', 'facebook'].map(n => /*#__PURE__*/React.createElement("span", {
    key: n,
    style: {
      width: 32,
      height: 32,
      borderRadius: '50%',
      background: 'rgba(255,255,255,0.08)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: n
  }))))), cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.h
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      color: '#fff',
      fontSize: 14,
      fontWeight: 700,
      margin: '0 0 14px'
    }
  }, c.h), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, c.items.map(it => /*#__PURE__*/React.createElement("a", {
    key: it,
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      color: 'var(--on-ink-body)',
      fontSize: 14,
      textDecoration: 'none',
      padding: '5px 0',
      display: 'inline-block'
    }
  }, it)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--on-ink-border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '18px var(--gutter)',
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 13,
      flexWrap: 'wrap',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2025 Agent Cory \xB7 Powered by Colaberry"), /*#__PURE__*/React.createElement("span", null, "cory@agentcory.ai \xB7 1-888-465-1991 \xB7 Plano, TX"))));
}
Object.assign(window, {
  Proof,
  ClosingCta,
  SiteFooter
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Proof.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteHeader.jsx
try { (() => {
// AgentCory marketing site — top navigation
function SiteHeader({
  onTry,
  onDemo
}) {
  const {
    Button
  } = window.DesignSystem_ebeb85;
  const links = ['Home', 'How It Works', 'ROI', 'Demo', 'Features'];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: 'var(--surface-header)',
      backdropFilter: 'blur(var(--blur-header))',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      height: 'var(--header-height)',
      padding: '0 var(--gutter)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-4)',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-agentcory.svg",
    alt: "AgentCory",
    style: {
      height: 26
    }
  }), /*#__PURE__*/React.createElement("nav", {
    className: "cory-hide-mobile",
    style: {
      display: 'flex',
      gap: 'var(--space-7)',
      alignItems: 'center'
    }
  }, links.map((l, i) => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      fontSize: 'var(--text-ui-sm)',
      fontWeight: 500,
      color: i === 0 ? 'var(--text-strong)' : 'var(--text-body)',
      textDecoration: 'none',
      padding: '10px 0',
      whiteSpace: 'nowrap'
    }
  }, l))), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    onClick: onTry
  }, "Try Cory Now")));
}
Object.assign(window, {
  SiteHeader
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Workflows.jsx
try { (() => {
// "How Cory Works" — five automated workflows with metric chips
function Workflows() {
  const {
    Badge
  } = window.DesignSystem_ebeb85;
  const Icon = ({
    name
  }) => /*#__PURE__*/React.createElement("i", {
    "data-lucide": name,
    style: {
      width: 22,
      height: 22
    }
  });
  const steps = [{
    icon: 'phone-incoming',
    title: 'Instant Inbound Response',
    body: 'Answer every call, text, email in under 5 seconds.',
    a: '100% Response',
    b: '<5s Answer'
  }, {
    icon: 'timer',
    title: '60-Second Lead Contact',
    body: 'Call, voicemail, SMS, email — automatically sequenced.',
    a: '94% Contact',
    b: '<60s First Touch'
  }, {
    icon: 'calendar-check',
    title: 'Appointment Show & Recovery',
    body: 'Reminders, confirmations, instant no-show rebooking.',
    a: '85% Show Rate',
    b: '67% Recovered'
  }, {
    icon: 'sparkles',
    title: 'Smart Nurture Campaigns',
    body: '15 personalized emails with resources and stories.',
    a: '23% Engagement',
    b: '15 Touch Points'
  }, {
    icon: 'refresh-cw',
    title: 'Long-Term Re-engagement',
    body: '60-day cycles with updates and scholarship alerts.',
    a: '18% Reactivated',
    b: '60 Day Cycle'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-card)',
      borderTop: '1px solid var(--border-subtle)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '76px var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "cory-overline"
  }, "How Cory Works"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 38,
      letterSpacing: '-0.03em',
      margin: '10px 0 8px'
    }
  }, "Five workflows, zero manual effort"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      color: 'var(--text-muted)',
      margin: 0
    }
  }, "Cory runs the entire top of your enrollment funnel, automatically.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, steps.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'grid',
      gridTemplateColumns: '52px minmax(0, 1fr)',
      gap: 20,
      alignItems: 'start',
      background: 'var(--surface-page)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      padding: '20px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 52,
      height: 52,
      borderRadius: 'var(--radius-md)',
      background: 'var(--gradient-ink)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s.icon
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: -8,
      left: -8,
      width: 22,
      height: 22,
      borderRadius: '50%',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      fontSize: 11,
      fontWeight: 700,
      color: 'var(--text-link)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, i + 1)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 18,
      margin: '0 0 3px'
    }
  }, s.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14.5,
      color: 'var(--text-muted)',
      margin: 0
    }
  }, s.body)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap',
      gridColumn: '2'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "success",
    dot: true
  }, s.a), /*#__PURE__*/React.createElement(Badge, {
    tone: "brand"
  }, s.b)))))));
}
Object.assign(window, {
  Workflows
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Workflows.jsx", error: String((e && e.message) || e) }); }

__ds_ns.ChatBubble = __ds_scope.ChatBubble;

__ds_ns.FeatureCard = __ds_scope.FeatureCard;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.Testimonial = __ds_scope.Testimonial;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Toggle = __ds_scope.Toggle;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.MediaFrame = __ds_scope.MediaFrame;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.ThemeToggle = __ds_scope.ThemeToggle;

})();
