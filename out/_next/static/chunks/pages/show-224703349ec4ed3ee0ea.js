(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[948],{6522:function(n,e,t){"use strict";t.d(e,{ZW:function(){return i},f:function(){return s},gz:function(){return c},D3:function(){return o},j$:function(){return a},Ye:function(){return u}});var r=t(8740),i=function(){return r.Z.get("newstories.json")},s=function(){return r.Z.get("topstories.json")},c=function(){return r.Z.get("beststories.json")},o=function(){return r.Z.get("askstories.json")},a=function(){return r.Z.get("showstories.json")},u=function(){return r.Z.get("jobstories.json")}},8740:function(n,e,t){"use strict";var r=t(9669),i=t.n(r)().create({baseURL:"https://hacker-news.firebaseio.com/v0"});e.Z=i},992:function(n,e,t){"use strict";t.d(e,{Z:function(){return k}});t(7294);var r=t(1664),i=t(1163),s=t(1456),c=t.n(s),o=[{href:"/new",name:"New"},{href:"/top",name:"Top Stories"},{href:"/best",name:"Best Stories"},{href:"/ask",name:"Ask"},{href:"/jobs",name:"Jobs"},{href:"/show",name:"Show"}],a=t(5893);function u(){var n=(0,i.useRouter)();return(0,a.jsx)("nav",{className:c().container,children:o.map((function(e){return(0,a.jsx)(r.default,{href:e.href,children:(0,a.jsx)("a",{className:"".concat(c().link," ").concat(n.pathname===e.href&&c().active),children:e.name})},e.name)}))})}var l=t(9704),d=function(){return(0,l.I0)()},f=l.v9,_=t(2486),h=t(7984),v=t.n(h),m=function(){var n=d();return(0,a.jsxs)("header",{className:v().container,children:[(0,a.jsxs)("div",{className:v().logo,children:[(0,a.jsx)("img",{src:"imgs/logo.svg",width:24,height:24,className:v().img}),(0,a.jsx)("span",{children:"Hacker News"})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:v().burger,children:(0,a.jsx)("img",{src:"imgs/menu.png",width:24,height:24,className:v().img,onClick:function(){n((0,_.FJ)())}})}),(0,a.jsx)("div",{className:v().nav,children:(0,a.jsx)(u,{})})]})]})},j=t(4584),x=t.n(j),g=function(n){var e=n.children,t=d(),r=f((function(n){return n.drawerReducer.isVisible}));return(0,a.jsxs)("div",{className:"".concat(x().container," ").concat(r&&x().open),children:[(0,a.jsx)("div",{className:"".concat(x().mask," ").concat(r&&x().open),onClick:function(){t((0,_.dL)())}}),(0,a.jsx)("div",{className:"".concat(x().drawer," ").concat(r&&x().open),children:e})]})},w=t(4081),y=t.n(w);var k=function(n){var e=n.children;return(0,a.jsxs)("div",{className:y().container,children:[(0,a.jsx)(m,{}),(0,a.jsx)(g,{children:"123"}),e]})}},1231:function(n,e,t){"use strict";t.d(e,{Z:function(){return v}});t(7294);var r=t(8874),i=t(8966),s=t(5855),c=t(5570),o=t(821),a=t(8740),u=t(3660),l=t(4549),d=t.n(l),f=t(5893),_=function(n){return a.Z.get(n).then((function(n){return n.data}))},h=function(n){var e=n.storyId,t=n.cssStyle,r=(0,o.ZP)("/item/".concat(e,".json"),_),a=r.data,l=r.error,h=!a&&!l;return l?(0,f.jsx)("div",{children:"something went wrong ..."}):(0,f.jsx)("div",{className:d().container,style:t,children:(0,f.jsxs)(u.Z,{loading:h,active:!0,children:[(0,f.jsx)("div",{className:d()["time-container"],children:"".concat(function(){if(null===a||void 0===a||!a.time)return"-";var n=1e3*a.time,e=new Date(n);return"".concat((0,i.Z)(n),", ").concat((0,s.Z)(n)," - ").concat(e.toLocaleString("en",{weekday:"short"}),", ").concat((0,c.Z)(n))}()," \u2022 ").concat(null===a||void 0===a?void 0:a.by)}),(0,f.jsx)("a",{className:d().link,href:null===a||void 0===a?void 0:a.url,target:"_blank",rel:"noreferrer noopener",children:null===a||void 0===a?void 0:a.title}),(0,f.jsx)("hr",{className:d().divider})]})})},v=function(n){var e=n.storyIds,t=void 0===e?[]:e;return(0,f.jsx)(r.aV,{style:{maxWidth:"100%",maxHeight:"calc(100% - 40px)"},width:720,height:1024,rowCount:t.length,rowHeight:80,rowRenderer:function(n){var e=n.index,r=n.style,i=t[e];return(0,f.jsx)(h,{storyId:i,cssStyle:r},i)}})}},5872:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return u}});var r=t(9008),i=t(7294),s=t(992),c=t(6522),o=t(1231),a=t(5893);function u(){var n=(0,i.useState)([]),e=n[0],t=n[1],u=(0,i.useState)(!0),l=(u[0],u[1]);return(0,i.useEffect)((function(){l(!0),(0,c.j$)().then((function(n){t(n.data)})).catch((function(n){console.error(n)})).finally((function(){l(!1)}))}),[]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.default,{children:(0,a.jsx)("title",{children:"Hacker News | Ask"})}),(0,a.jsx)(s.Z,{children:(0,a.jsx)(o.Z,{storyIds:e})})]})}},7989:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/show",function(){return t(5872)}])},4584:function(n){n.exports={container:"style_container__3xBTS",open:"style_open__36jS2",mask:"style_mask__1DYun",drawer:"style_drawer__FdBQP"}},7984:function(n){n.exports={container:"style_container__10Mjn",logo:"style_logo__pTh4C",burger:"style_burger__1x36v",nav:"style_nav__3IV8x",img:"style_img__1ck3a"}},4081:function(n){n.exports={container:"layout_container__2ie7V",title:"layout_title__2c_FI"}},1456:function(n){n.exports={container:"style_container__1CiGq",link:"style_link__1rZOX",active:"style_active__1_NcG"}},4549:function(n){n.exports={"time-container":"style_time-container__3sBoP",link:"style_link__2V_r4",divider:"style_divider__Bsif4"}}},function(n){n.O(0,[284,774,888,179],(function(){return e=7989,n(n.s=e);var e}));var e=n.O();_N_E=e}]);