(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{9212:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return n(8132)}])},227:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,r){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1551:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(2648).Z,o=n(7273).Z,l=r(n(7294)),a=n(1003),i=n(7795),u=n(4465),c=n(2692),s=n(8245),f=n(9246),d=n(227),p=n(3468);let h=new Set;function m(e,t,n,r){if(a.isLocalURL(t)){if(!r.bypassPrefetchedCheck){let o=void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0,l=t+"%"+n+"%"+o;if(h.has(l))return;h.add(l)}Promise.resolve(e.prefetch(t,n,r)).catch(e=>{})}}function y(e){return"string"==typeof e?e:i.formatUrl(e)}let v=l.default.forwardRef(function(e,t){let n,r;let{href:i,as:h,children:v,prefetch:b,passHref:g,replace:Z,shallow:x,scroll:_,locale:C,onClick:M,onMouseEnter:k,onTouchStart:w,legacyBehavior:j=!0!==Boolean(!0)}=e,P=o(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=v,j&&("string"==typeof n||"number"==typeof n)&&(n=l.default.createElement("a",null,n));let E=!1!==b,O=l.default.useContext(c.RouterContext),S=l.default.useContext(s.AppRouterContext),N=null!=O?O:S,L=!O,{href:R,as:D}=l.default.useMemo(()=>{if(!O){let e=y(i);return{href:e,as:h?y(h):e}}let[t,n]=a.resolveHref(O,i,!0);return{href:t,as:h?a.resolveHref(O,h):n||t}},[O,i,h]),T=l.default.useRef(R),A=l.default.useRef(D);j&&(r=l.default.Children.only(n));let B=j?r&&"object"==typeof r&&r.ref:t,[I,H,W]=f.useIntersection({rootMargin:"200px"}),z=l.default.useCallback(e=>{(A.current!==D||T.current!==R)&&(W(),A.current=D,T.current=R),I(e),B&&("function"==typeof B?B(e):"object"==typeof B&&(B.current=e))},[D,B,R,W,I]);l.default.useEffect(()=>{N&&H&&E&&m(N,R,D,{locale:C})},[D,R,H,C,E,null==O?void 0:O.locale,N]);let U={ref:z,onClick(e){j||"function"!=typeof M||M(e),j&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),N&&!e.defaultPrevented&&function(e,t,n,r,o,i,u,c,s,f){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!a.isLocalURL(n)))return;e.preventDefault();let h=()=>{"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:i,locale:c,scroll:u}):t[o?"replace":"push"](r||n,{forceOptimisticNavigation:!f})};s?l.default.startTransition(h):h()}(e,N,R,D,Z,x,_,C,L,E)},onMouseEnter(e){j||"function"!=typeof k||k(e),j&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),N&&(E||!L)&&m(N,R,D,{locale:C,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart(e){j||"function"!=typeof w||w(e),j&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),N&&(E||!L)&&m(N,R,D,{locale:C,priority:!0,bypassPrefetchedCheck:!0})}};if(!j||g||"a"===r.type&&!("href"in r.props)){let $=void 0!==C?C:null==O?void 0:O.locale,F=(null==O?void 0:O.isLocaleDomain)&&d.getDomainLocale(D,$,null==O?void 0:O.locales,null==O?void 0:O.domainLocales);U.href=F||p.addBasePath(u.addLocale(D,$,null==O?void 0:O.defaultLocale))}return j?l.default.cloneElement(r,U):l.default.createElement("a",Object.assign({},P,U),n)});t.default=v,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:n,disabled:u}=e,c=u||!l,[s,f]=r.useState(!1),[d,p]=r.useState(null);r.useEffect(()=>{if(l){if(!c&&!s&&d&&d.tagName){let e=function(e,t,n){let{id:r,observer:o,elements:l}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=i.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=a.get(r)))return t;let o=new Map,l=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:l,elements:o},i.push(n),a.set(n,t),t}(n);return l.set(e,t),o.observe(e),function(){if(l.delete(e),o.unobserve(e),0===l.size){o.disconnect(),a.delete(r);let t=i.findIndex(e=>e.root===r.root&&e.margin===r.margin);t>-1&&i.splice(t,1)}}}(d,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:n});return e}}else if(!s){let r=o.requestIdleCallback(()=>f(!0));return()=>o.cancelIdleCallback(r)}},[d,c,n,t,s]);let h=r.useCallback(()=>{f(!1)},[]);return[p,s,h]};var r=n(7294),o=n(4686);let l="function"==typeof IntersectionObserver,a=new Map,i=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8132:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return z}});var r=n(5944),o=n(7294),l=n(4288),a=n(9630),i=n(1953),u=n(5084),c=n(6010),s=n(1163),f=n(1664),d=n.n(f),p=n(3366),h=n(7462),m=n(4780),y=n(6622),v=n(1719),b=n(8884),g=n(1625),Z=n(4771),x=n(1588),_=n(4867);function C(e){return(0,_.Z)("MuiLink",e)}let M=(0,x.Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]);var k=n(4844),w=n(1796);let j={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},P=e=>j[e]||e,E=({theme:e,ownerState:t})=>{let n=P(t.color),r=(0,k.DW)(e,`palette.${n}`,!1)||t.color,o=(0,k.DW)(e,`palette.${n}Channel`);return"vars"in e&&o?`rgba(${o} / 0.4)`:(0,w.Fq)(r,.4)};var O=n(5893);let S=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],N=e=>{let{classes:t,component:n,focusVisible:r,underline:o}=e,l={root:["root",`underline${(0,y.Z)(o)}`,"button"===n&&"button",r&&"focusVisible"]};return(0,m.Z)(l,C,t)},L=(0,v.ZP)(a.Z,{name:"MuiLink",slot:"Root",overridesResolver(e,t){let{ownerState:n}=e;return[t.root,t[`underline${(0,y.Z)(n.underline)}`],"button"===n.component&&t.button]}})(({theme:e,ownerState:t})=>(0,h.Z)({},"none"===t.underline&&{textDecoration:"none"},"hover"===t.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===t.underline&&(0,h.Z)({textDecoration:"underline"},"inherit"!==t.color&&{textDecorationColor:E({theme:e,ownerState:t})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===t.component&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${M.focusVisible}`]:{outline:"auto"}})),R=o.forwardRef(function(e,t){let n=(0,b.Z)({props:e,name:"MuiLink"}),{className:r,color:l="primary",component:a="a",onBlur:i,onFocus:u,TypographyClasses:s,underline:f="always",variant:d="inherit",sx:m}=n,y=(0,p.Z)(n,S),{isFocusVisibleRef:v,onBlur:x,onFocus:_,ref:C}=(0,g.Z)(),[M,k]=o.useState(!1),w=(0,Z.Z)(t,C),P=e=>{x(e),!1===v.current&&k(!1),i&&i(e)},E=e=>{_(e),!0===v.current&&k(!0),u&&u(e)},R=(0,h.Z)({},n,{color:l,component:a,focusVisible:M,underline:f,variant:d}),D=N(R);return(0,O.jsx)(L,(0,h.Z)({color:l,className:(0,c.Z)(D.root,r),classes:s,component:a,onBlur:P,onFocus:E,ref:w,ownerState:R,variant:d,sx:[...Object.keys(j).includes(l)?[]:[{color:l}],...Array.isArray(m)?m:[m]]},y))}),D=(0,v.ZP)("a")({}),T=o.forwardRef(function(e,t){let{to:n,linkAs:o,replace:l,scroll:a,shallow:i,prefetch:u,legacyBehavior:c=!0,locale:s,...f}=e;return(0,r.tZ)(d(),{href:n,prefetch:u,as:o,replace:l,scroll:a,shallow:i,passHref:!0,locale:s,legacyBehavior:c,children:(0,r.tZ)(D,{ref:t,...f})})}),A=o.forwardRef(function(e,t){let{activeClassName:n="active",as:o,className:l,href:a,legacyBehavior:i,linkAs:u,locale:f,noLinkStyle:d,prefetch:p,replace:h,role:m,scroll:y,shallow:v,...b}=e,g=(0,s.useRouter)(),Z="string"==typeof a?a:a.pathname,x=(0,c.Z)(l,{[n]:g.pathname===Z&&n}),_="string"==typeof a&&(0===a.indexOf("http")||0===a.indexOf("mailto:"));if(_)return d?(0,r.tZ)(D,{className:x,href:a,ref:t,...b}):(0,r.tZ)(R,{className:x,href:a,ref:t,...b});let C={to:a,linkAs:u||o,replace:h,scroll:y,shallow:v,prefetch:p,legacyBehavior:i,locale:f};return d?(0,r.tZ)(T,{className:x,ref:t,...C,...b}):(0,r.tZ)(R,{component:T,className:x,ref:t,...C,...b})});var B=n(1645);function I(e){return(0,r.tZ)(B.Z,{...e,children:(0,r.tZ)("path",{d:"M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"})})}function H(){return(0,r.BX)(a.Z,{sx:{mt:6,mb:3},color:"text.secondary",children:[(0,r.tZ)(I,{sx:{mr:1,verticalAlign:"middle"}}),"Pro tip: See more ",(0,r.tZ)(R,{href:"https://mui.com/getting-started/templates/",children:"templates"})," on the MUI documentation."]})}function W(){return(0,r.BX)(a.Z,{variant:"body2",color:"text.secondary",align:"center",children:["Copyright \xa9 ",(0,r.tZ)(R,{color:"inherit",href:"https://mui.com/",children:"Your Website"})," ",new Date().getFullYear(),"."]})}function z(){return(0,r.tZ)(l.Z,{maxWidth:"lg",children:(0,r.BX)(i.Z,{sx:{my:4,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[(0,r.tZ)(a.Z,{variant:"h4",component:"h1",gutterBottom:!0,children:"MUI v5 + Next.js with TypeScript example"}),(0,r.tZ)(i.Z,{maxWidth:"sm",children:(0,r.tZ)(u.Z,{variant:"contained",component:A,noLinkStyle:!0,href:"/",children:"Go to the home page"})}),(0,r.tZ)(H,{}),(0,r.tZ)(W,{})]})})}},1664:function(e,t,n){e.exports=n(1551)},1163:function(e,t,n){e.exports=n(880)}},function(e){e.O(0,[599,774,888,179],function(){return e(e.s=9212)}),_N_E=e.O()}]);