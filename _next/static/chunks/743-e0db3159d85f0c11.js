(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[743],{334:function(e,t,r){"use strict";function o(){for(var e,t,r=0,o="",n=arguments.length;r<n;r++)(e=arguments[r])&&(t=function e(t){var r,o,n="";if("string"==typeof t||"number"==typeof t)n+=t;else if("object"==typeof t){if(Array.isArray(t)){var l=t.length;for(r=0;r<l;r++)t[r]&&(o=e(t[r]))&&(n&&(n+=" "),n+=o)}else for(o in t)t[o]&&(n&&(n+=" "),n+=o)}return n}(e))&&(o&&(o+=" "),o+=t);return o}r.d(t,{W:function(){return o}})},9118:function(e,t,r){var o="Expected a function",n=0/0,l=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,s=/^0o[0-7]+$/i,c=parseInt,d="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g,u="object"==typeof self&&self&&self.Object===Object&&self,p=d||u||Function("return this")(),f=Object.prototype.toString,b=Math.max,g=Math.min,m=function(){return p.Date.now()};function h(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||t&&"object"==typeof t&&"[object Symbol]"==f.call(t))return n;if(h(e)){var t,r="function"==typeof e.valueOf?e.valueOf():e;e=h(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(l,"");var o=a.test(e);return o||s.test(e)?c(e.slice(2),o?2:8):i.test(e)?n:+e}e.exports=function(e,t,r){var n=!0,l=!0;if("function"!=typeof e)throw TypeError(o);return h(r)&&(n="leading"in r?!!r.leading:n,l="trailing"in r?!!r.trailing:l),function(e,t,r){var n,l,i,a,s,c,d=0,u=!1,p=!1,f=!0;if("function"!=typeof e)throw TypeError(o);function v(t){var r=n,o=l;return n=l=void 0,d=t,a=e.apply(o,r)}function x(e){var r=e-c,o=e-d;return void 0===c||r>=t||r<0||p&&o>=i}function w(){var e,r,o,n=m();if(x(n))return k(n);s=setTimeout(w,(e=n-c,r=n-d,o=t-e,p?g(o,i-r):o))}function k(e){return(s=void 0,f&&n)?v(e):(n=l=void 0,a)}function j(){var e,r=m(),o=x(r);if(n=arguments,l=this,c=r,o){if(void 0===s)return d=e=c,s=setTimeout(w,t),u?v(e):a;if(p)return s=setTimeout(w,t),v(c)}return void 0===s&&(s=setTimeout(w,t)),a}return t=y(t)||0,h(r)&&(u=!!r.leading,i=(p="maxWait"in r)?b(y(r.maxWait)||0,t):i,f="trailing"in r?!!r.trailing:f),j.cancel=function(){void 0!==s&&clearTimeout(s),d=0,n=c=l=s=void 0},j.flush=function(){return void 0===s?a:k(m())},j}(e,t,{leading:n,maxWait:t,trailing:l})}},8221:function(e,t){"use strict";let r;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{DOMAttributeNames:function(){return o},default:function(){return i},isEqualNode:function(){return l}});let o={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv",noModule:"noModule"};function n(e){let{type:t,props:r}=e,n=document.createElement(t);for(let e in r){if(!r.hasOwnProperty(e)||"children"===e||"dangerouslySetInnerHTML"===e||void 0===r[e])continue;let l=o[e]||e.toLowerCase();"script"===t&&("async"===l||"defer"===l||"noModule"===l)?n[l]=!!r[e]:n.setAttribute(l,r[e])}let{children:l,dangerouslySetInnerHTML:i}=r;return i?n.innerHTML=i.__html||"":l&&(n.textContent="string"==typeof l?l:Array.isArray(l)?l.join(""):""),n}function l(e,t){if(e instanceof HTMLElement&&t instanceof HTMLElement){let r=t.getAttribute("nonce");if(r&&!e.getAttribute("nonce")){let o=t.cloneNode(!0);return o.setAttribute("nonce",""),o.nonce=r,r===e.nonce&&e.isEqualNode(o)}}return e.isEqualNode(t)}function i(){return{mountedInstances:new Set,updateHead:e=>{let t={};e.forEach(e=>{if("link"===e.type&&e.props["data-optimized-fonts"]){if(document.querySelector('style[data-href="'+e.props["data-href"]+'"]'))return;e.props.href=e.props["data-href"],e.props["data-href"]=void 0}let r=t[e.type]||[];r.push(e),t[e.type]=r});let o=t.title?t.title[0]:null,n="";if(o){let{children:e}=o.props;n="string"==typeof e?e:Array.isArray(e)?e.join(""):""}n!==document.title&&(document.title=n),["meta","base","link","style","script"].forEach(e=>{r(e,t[e]||[])})}}}r=(e,t)=>{let r=document.getElementsByTagName("head")[0],o=r.querySelector("meta[name=next-head-count]"),i=Number(o.content),a=[];for(let t=0,r=o.previousElementSibling;t<i;t++,r=(null==r?void 0:r.previousElementSibling)||null){var s;(null==r?void 0:null==(s=r.tagName)?void 0:s.toLowerCase())===e&&a.push(r)}let c=t.map(n).filter(e=>{for(let t=0,r=a.length;t<r;t++)if(l(a[t],e))return a.splice(t,1),!1;return!0});a.forEach(e=>{var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)}),c.forEach(e=>r.insertBefore(e,o)),o.content=(i-a.length+c.length).toString()},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8003:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return v},handleClientScriptLoad:function(){return m},initScriptLoader:function(){return h}});let o=r(5287),n=r(2065),l=r(7437),i=o._(r(4887)),a=n._(r(2265)),s=r(8701),c=r(8221),d=r(3515),u=new Map,p=new Set,f=["onLoad","onReady","dangerouslySetInnerHTML","children","onError","strategy","stylesheets"],b=e=>{if(i.default.preinit){e.forEach(e=>{i.default.preinit(e,{as:"style"})});return}if("undefined"!=typeof window){let t=document.head;e.forEach(e=>{let r=document.createElement("link");r.type="text/css",r.rel="stylesheet",r.href=e,t.appendChild(r)})}},g=e=>{let{src:t,id:r,onLoad:o=()=>{},onReady:n=null,dangerouslySetInnerHTML:l,children:i="",strategy:a="afterInteractive",onError:s,stylesheets:d}=e,g=r||t;if(g&&p.has(g))return;if(u.has(t)){p.add(g),u.get(t).then(o,s);return}let m=()=>{n&&n(),p.add(g)},h=document.createElement("script"),y=new Promise((e,t)=>{h.addEventListener("load",function(t){e(),o&&o.call(this,t),m()}),h.addEventListener("error",function(e){t(e)})}).catch(function(e){s&&s(e)});for(let[r,o]of(l?(h.innerHTML=l.__html||"",m()):i?(h.textContent="string"==typeof i?i:Array.isArray(i)?i.join(""):"",m()):t&&(h.src=t,u.set(t,y)),Object.entries(e))){if(void 0===o||f.includes(r))continue;let e=c.DOMAttributeNames[r]||r.toLowerCase();h.setAttribute(e,o)}"worker"===a&&h.setAttribute("type","text/partytown"),h.setAttribute("data-nscript",a),d&&b(d),document.body.appendChild(h)};function m(e){let{strategy:t="afterInteractive"}=e;"lazyOnload"===t?window.addEventListener("load",()=>{(0,d.requestIdleCallback)(()=>g(e))}):g(e)}function h(e){e.forEach(m),[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e=>{let t=e.id||e.getAttribute("src");p.add(t)})}function y(e){let{id:t,src:r="",onLoad:o=()=>{},onReady:n=null,strategy:c="afterInteractive",onError:u,stylesheets:f,...b}=e,{updateScripts:m,scripts:h,getIsSsr:y,appDir:v,nonce:x}=(0,a.useContext)(s.HeadManagerContext),w=(0,a.useRef)(!1);(0,a.useEffect)(()=>{let e=t||r;w.current||(n&&e&&p.has(e)&&n(),w.current=!0)},[n,t,r]);let k=(0,a.useRef)(!1);if((0,a.useEffect)(()=>{!k.current&&("afterInteractive"===c?g(e):"lazyOnload"===c&&("complete"===document.readyState?(0,d.requestIdleCallback)(()=>g(e)):window.addEventListener("load",()=>{(0,d.requestIdleCallback)(()=>g(e))})),k.current=!0)},[e,c]),("beforeInteractive"===c||"worker"===c)&&(m?(h[c]=(h[c]||[]).concat([{id:t,src:r,onLoad:o,onReady:n,onError:u,...b}]),m(h)):y&&y()?p.add(t||r):y&&!y()&&g(e)),v){if(f&&f.forEach(e=>{i.default.preinit(e,{as:"style"})}),"beforeInteractive"===c)return r?(i.default.preload(r,b.integrity?{as:"script",integrity:b.integrity,nonce:x,crossOrigin:b.crossOrigin}:{as:"script",nonce:x,crossOrigin:b.crossOrigin}),(0,l.jsx)("script",{nonce:x,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([r,{...b,id:t}])+")"}})):(b.dangerouslySetInnerHTML&&(b.children=b.dangerouslySetInnerHTML.__html,delete b.dangerouslySetInnerHTML),(0,l.jsx)("script",{nonce:x,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([0,{...b,id:t}])+")"}}));"afterInteractive"===c&&r&&i.default.preload(r,b.integrity?{as:"script",integrity:b.integrity,nonce:x,crossOrigin:b.crossOrigin}:{as:"script",nonce:x,crossOrigin:b.crossOrigin})}return null}Object.defineProperty(y,"__nextScript",{value:!0});let v=y;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2997:function(e,t,r){"use strict";r.d(t,{m6:function(){return U}});let o=e=>{let t=a(e),{conflictingClassGroups:r,conflictingClassGroupModifiers:o}=e;return{getClassGroupId:e=>{let r=e.split("-");return""===r[0]&&1!==r.length&&r.shift(),n(r,t)||i(e)},getConflictingClassGroupIds:(e,t)=>{let n=r[e]||[];return t&&o[e]?[...n,...o[e]]:n}}},n=(e,t)=>{if(0===e.length)return t.classGroupId;let r=e[0],o=t.nextPart.get(r),l=o?n(e.slice(1),o):void 0;if(l)return l;if(0===t.validators.length)return;let i=e.join("-");return t.validators.find(({validator:e})=>e(i))?.classGroupId},l=/^\[(.+)\]$/,i=e=>{if(l.test(e)){let t=l.exec(e)[1],r=t?.substring(0,t.indexOf(":"));if(r)return"arbitrary.."+r}},a=e=>{let{theme:t,prefix:r}=e,o={nextPart:new Map,validators:[]};return u(Object.entries(e.classGroups),r).forEach(([e,r])=>{s(r,o,e,t)}),o},s=(e,t,r,o)=>{e.forEach(e=>{if("string"==typeof e){(""===e?t:c(t,e)).classGroupId=r;return}if("function"==typeof e){if(d(e)){s(e(o),t,r,o);return}t.validators.push({validator:e,classGroupId:r});return}Object.entries(e).forEach(([e,n])=>{s(n,c(t,e),r,o)})})},c=(e,t)=>{let r=e;return t.split("-").forEach(e=>{r.nextPart.has(e)||r.nextPart.set(e,{nextPart:new Map,validators:[]}),r=r.nextPart.get(e)}),r},d=e=>e.isThemeGetter,u=(e,t)=>t?e.map(([e,r])=>[e,r.map(e=>"string"==typeof e?t+e:"object"==typeof e?Object.fromEntries(Object.entries(e).map(([e,r])=>[t+e,r])):e)]):e,p=e=>{if(e<1)return{get:()=>void 0,set:()=>{}};let t=0,r=new Map,o=new Map,n=(n,l)=>{r.set(n,l),++t>e&&(t=0,o=r,r=new Map)};return{get(e){let t=r.get(e);return void 0!==t?t:void 0!==(t=o.get(e))?(n(e,t),t):void 0},set(e,t){r.has(e)?r.set(e,t):n(e,t)}}},f=e=>{let{separator:t,experimentalParseClassName:r}=e,o=1===t.length,n=t[0],l=t.length,i=e=>{let r;let i=[],a=0,s=0;for(let c=0;c<e.length;c++){let d=e[c];if(0===a){if(d===n&&(o||e.slice(c,c+l)===t)){i.push(e.slice(s,c)),s=c+l;continue}if("/"===d){r=c;continue}}"["===d?a++:"]"===d&&a--}let c=0===i.length?e:e.substring(s),d=c.startsWith("!"),u=d?c.substring(1):c;return{modifiers:i,hasImportantModifier:d,baseClassName:u,maybePostfixModifierPosition:r&&r>s?r-s:void 0}};return r?e=>r({className:e,parseClassName:i}):i},b=e=>{if(e.length<=1)return e;let t=[],r=[];return e.forEach(e=>{"["===e[0]?(t.push(...r.sort(),e),r=[]):r.push(e)}),t.push(...r.sort()),t},g=e=>({cache:p(e.cacheSize),parseClassName:f(e),...o(e)}),m=/\s+/,h=(e,t)=>{let{parseClassName:r,getClassGroupId:o,getConflictingClassGroupIds:n}=t,l=[],i=e.trim().split(m),a="";for(let e=i.length-1;e>=0;e-=1){let t=i[e],{modifiers:s,hasImportantModifier:c,baseClassName:d,maybePostfixModifierPosition:u}=r(t),p=!!u,f=o(p?d.substring(0,u):d);if(!f){if(!p||!(f=o(d))){a=t+(a.length>0?" "+a:a);continue}p=!1}let g=b(s).join(":"),m=c?g+"!":g,h=m+f;if(l.includes(h))continue;l.push(h);let y=n(f,p);for(let e=0;e<y.length;++e){let t=y[e];l.push(m+t)}a=t+(a.length>0?" "+a:a)}return a};function y(){let e,t,r=0,o="";for(;r<arguments.length;)(e=arguments[r++])&&(t=v(e))&&(o&&(o+=" "),o+=t);return o}let v=e=>{let t;if("string"==typeof e)return e;let r="";for(let o=0;o<e.length;o++)e[o]&&(t=v(e[o]))&&(r&&(r+=" "),r+=t);return r},x=e=>{let t=t=>t[e]||[];return t.isThemeGetter=!0,t},w=/^\[(?:([a-z-]+):)?(.+)\]$/i,k=/^\d+\/\d+$/,j=new Set(["px","full","screen"]),z=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,_=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,E=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,O=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,S=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,M=e=>I(e)||j.has(e)||k.test(e),C=e=>B(e,"length",F),I=e=>!!e&&!Number.isNaN(Number(e)),N=e=>B(e,"number",I),L=e=>!!e&&Number.isInteger(Number(e)),T=e=>e.endsWith("%")&&I(e.slice(0,-1)),A=e=>w.test(e),P=e=>z.test(e),q=new Set(["length","size","percentage"]),H=e=>B(e,q,J),G=e=>B(e,"position",J),$=new Set(["image","url"]),R=e=>B(e,$,Q),W=e=>B(e,"",K),D=()=>!0,B=(e,t,r)=>{let o=w.exec(e);return!!o&&(o[1]?"string"==typeof t?o[1]===t:t.has(o[1]):r(o[2]))},F=e=>_.test(e)&&!E.test(e),J=()=>!1,K=e=>O.test(e),Q=e=>S.test(e),U=function(e,...t){let r,o,n;let l=function(a){return o=(r=g(t.reduce((e,t)=>t(e),e()))).cache.get,n=r.cache.set,l=i,i(a)};function i(e){let t=o(e);if(t)return t;let l=h(e,r);return n(e,l),l}return function(){return l(y.apply(null,arguments))}}(()=>{let e=x("colors"),t=x("spacing"),r=x("blur"),o=x("brightness"),n=x("borderColor"),l=x("borderRadius"),i=x("borderSpacing"),a=x("borderWidth"),s=x("contrast"),c=x("grayscale"),d=x("hueRotate"),u=x("invert"),p=x("gap"),f=x("gradientColorStops"),b=x("gradientColorStopPositions"),g=x("inset"),m=x("margin"),h=x("opacity"),y=x("padding"),v=x("saturate"),w=x("scale"),k=x("sepia"),j=x("skew"),z=x("space"),_=x("translate"),E=()=>["auto","contain","none"],O=()=>["auto","hidden","clip","visible","scroll"],S=()=>["auto",A,t],q=()=>[A,t],$=()=>["",M,C],B=()=>["auto",I,A],F=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],J=()=>["solid","dashed","dotted","double","none"],K=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],Q=()=>["start","end","center","between","around","evenly","stretch"],U=()=>["","0",A],V=()=>["auto","avoid","all","avoid-page","page","left","right","column"],X=()=>[I,A];return{cacheSize:500,separator:":",theme:{colors:[D],spacing:[M,C],blur:["none","",P,A],brightness:X(),borderColor:[e],borderRadius:["none","","full",P,A],borderSpacing:q(),borderWidth:$(),contrast:X(),grayscale:U(),hueRotate:X(),invert:U(),gap:q(),gradientColorStops:[e],gradientColorStopPositions:[T,C],inset:S(),margin:S(),opacity:X(),padding:q(),saturate:X(),scale:X(),sepia:U(),skew:X(),space:q(),translate:q()},classGroups:{aspect:[{aspect:["auto","square","video",A]}],container:["container"],columns:[{columns:[P]}],"break-after":[{"break-after":V()}],"break-before":[{"break-before":V()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...F(),A]}],overflow:[{overflow:O()}],"overflow-x":[{"overflow-x":O()}],"overflow-y":[{"overflow-y":O()}],overscroll:[{overscroll:E()}],"overscroll-x":[{"overscroll-x":E()}],"overscroll-y":[{"overscroll-y":E()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[g]}],"inset-x":[{"inset-x":[g]}],"inset-y":[{"inset-y":[g]}],start:[{start:[g]}],end:[{end:[g]}],top:[{top:[g]}],right:[{right:[g]}],bottom:[{bottom:[g]}],left:[{left:[g]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",L,A]}],basis:[{basis:S()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",A]}],grow:[{grow:U()}],shrink:[{shrink:U()}],order:[{order:["first","last","none",L,A]}],"grid-cols":[{"grid-cols":[D]}],"col-start-end":[{col:["auto",{span:["full",L,A]},A]}],"col-start":[{"col-start":B()}],"col-end":[{"col-end":B()}],"grid-rows":[{"grid-rows":[D]}],"row-start-end":[{row:["auto",{span:[L,A]},A]}],"row-start":[{"row-start":B()}],"row-end":[{"row-end":B()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",A]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",A]}],gap:[{gap:[p]}],"gap-x":[{"gap-x":[p]}],"gap-y":[{"gap-y":[p]}],"justify-content":[{justify:["normal",...Q()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...Q(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...Q(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[y]}],px:[{px:[y]}],py:[{py:[y]}],ps:[{ps:[y]}],pe:[{pe:[y]}],pt:[{pt:[y]}],pr:[{pr:[y]}],pb:[{pb:[y]}],pl:[{pl:[y]}],m:[{m:[m]}],mx:[{mx:[m]}],my:[{my:[m]}],ms:[{ms:[m]}],me:[{me:[m]}],mt:[{mt:[m]}],mr:[{mr:[m]}],mb:[{mb:[m]}],ml:[{ml:[m]}],"space-x":[{"space-x":[z]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[z]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",A,t]}],"min-w":[{"min-w":[A,t,"min","max","fit"]}],"max-w":[{"max-w":[A,t,"none","full","min","max","fit","prose",{screen:[P]},P]}],h:[{h:[A,t,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[A,t,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[A,t,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[A,t,"auto","min","max","fit"]}],"font-size":[{text:["base",P,C]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",N]}],"font-family":[{font:[D]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",A]}],"line-clamp":[{"line-clamp":["none",I,N]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",M,A]}],"list-image":[{"list-image":["none",A]}],"list-style-type":[{list:["none","disc","decimal",A]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[h]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[h]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...J(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",M,C]}],"underline-offset":[{"underline-offset":["auto",M,A]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:q()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",A]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",A]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[h]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...F(),G]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",H]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},R]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[b]}],"gradient-via-pos":[{via:[b]}],"gradient-to-pos":[{to:[b]}],"gradient-from":[{from:[f]}],"gradient-via":[{via:[f]}],"gradient-to":[{to:[f]}],rounded:[{rounded:[l]}],"rounded-s":[{"rounded-s":[l]}],"rounded-e":[{"rounded-e":[l]}],"rounded-t":[{"rounded-t":[l]}],"rounded-r":[{"rounded-r":[l]}],"rounded-b":[{"rounded-b":[l]}],"rounded-l":[{"rounded-l":[l]}],"rounded-ss":[{"rounded-ss":[l]}],"rounded-se":[{"rounded-se":[l]}],"rounded-ee":[{"rounded-ee":[l]}],"rounded-es":[{"rounded-es":[l]}],"rounded-tl":[{"rounded-tl":[l]}],"rounded-tr":[{"rounded-tr":[l]}],"rounded-br":[{"rounded-br":[l]}],"rounded-bl":[{"rounded-bl":[l]}],"border-w":[{border:[a]}],"border-w-x":[{"border-x":[a]}],"border-w-y":[{"border-y":[a]}],"border-w-s":[{"border-s":[a]}],"border-w-e":[{"border-e":[a]}],"border-w-t":[{"border-t":[a]}],"border-w-r":[{"border-r":[a]}],"border-w-b":[{"border-b":[a]}],"border-w-l":[{"border-l":[a]}],"border-opacity":[{"border-opacity":[h]}],"border-style":[{border:[...J(),"hidden"]}],"divide-x":[{"divide-x":[a]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[a]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[h]}],"divide-style":[{divide:J()}],"border-color":[{border:[n]}],"border-color-x":[{"border-x":[n]}],"border-color-y":[{"border-y":[n]}],"border-color-s":[{"border-s":[n]}],"border-color-e":[{"border-e":[n]}],"border-color-t":[{"border-t":[n]}],"border-color-r":[{"border-r":[n]}],"border-color-b":[{"border-b":[n]}],"border-color-l":[{"border-l":[n]}],"divide-color":[{divide:[n]}],"outline-style":[{outline:["",...J()]}],"outline-offset":[{"outline-offset":[M,A]}],"outline-w":[{outline:[M,C]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:$()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[h]}],"ring-offset-w":[{"ring-offset":[M,C]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",P,W]}],"shadow-color":[{shadow:[D]}],opacity:[{opacity:[h]}],"mix-blend":[{"mix-blend":[...K(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":K()}],filter:[{filter:["","none"]}],blur:[{blur:[r]}],brightness:[{brightness:[o]}],contrast:[{contrast:[s]}],"drop-shadow":[{"drop-shadow":["","none",P,A]}],grayscale:[{grayscale:[c]}],"hue-rotate":[{"hue-rotate":[d]}],invert:[{invert:[u]}],saturate:[{saturate:[v]}],sepia:[{sepia:[k]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[r]}],"backdrop-brightness":[{"backdrop-brightness":[o]}],"backdrop-contrast":[{"backdrop-contrast":[s]}],"backdrop-grayscale":[{"backdrop-grayscale":[c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[d]}],"backdrop-invert":[{"backdrop-invert":[u]}],"backdrop-opacity":[{"backdrop-opacity":[h]}],"backdrop-saturate":[{"backdrop-saturate":[v]}],"backdrop-sepia":[{"backdrop-sepia":[k]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[i]}],"border-spacing-x":[{"border-spacing-x":[i]}],"border-spacing-y":[{"border-spacing-y":[i]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",A]}],duration:[{duration:X()}],ease:[{ease:["linear","in","out","in-out",A]}],delay:[{delay:X()}],animate:[{animate:["none","spin","ping","pulse","bounce",A]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[w]}],"scale-x":[{"scale-x":[w]}],"scale-y":[{"scale-y":[w]}],rotate:[{rotate:[L,A]}],"translate-x":[{"translate-x":[_]}],"translate-y":[{"translate-y":[_]}],"skew-x":[{"skew-x":[j]}],"skew-y":[{"skew-y":[j]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",A]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",A]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":q()}],"scroll-mx":[{"scroll-mx":q()}],"scroll-my":[{"scroll-my":q()}],"scroll-ms":[{"scroll-ms":q()}],"scroll-me":[{"scroll-me":q()}],"scroll-mt":[{"scroll-mt":q()}],"scroll-mr":[{"scroll-mr":q()}],"scroll-mb":[{"scroll-mb":q()}],"scroll-ml":[{"scroll-ml":q()}],"scroll-p":[{"scroll-p":q()}],"scroll-px":[{"scroll-px":q()}],"scroll-py":[{"scroll-py":q()}],"scroll-ps":[{"scroll-ps":q()}],"scroll-pe":[{"scroll-pe":q()}],"scroll-pt":[{"scroll-pt":q()}],"scroll-pr":[{"scroll-pr":q()}],"scroll-pb":[{"scroll-pb":q()}],"scroll-pl":[{"scroll-pl":q()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",A]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[M,C,N]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}})}}]);