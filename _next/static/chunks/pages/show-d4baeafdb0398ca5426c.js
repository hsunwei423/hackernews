(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[948],{6522:function(n,e,t){"use strict";t.d(e,{ZW:function(){return i},f:function(){return s},gz:function(){return o},D3:function(){return c},j$:function(){return a},Ye:function(){return u}});var r=t(8740),i=function(){return r.Z.get("newstories.json")},s=function(){return r.Z.get("topstories.json")},o=function(){return r.Z.get("beststories.json")},c=function(){return r.Z.get("askstories.json")},a=function(){return r.Z.get("showstories.json")},u=function(){return r.Z.get("jobstories.json")}},8740:function(n,e,t){"use strict";var r=t(9669),i=t.n(r)().create({baseURL:"https://hacker-news.firebaseio.com/v0"});e.Z=i},9232:function(n,e,t){"use strict";t.d(e,{Z:function(){return v}});t(7294);var r=t(1664),i=t(1163),s=t(1456),o=t.n(s),c=t(5893),a=[{href:"/new",name:"New"},{href:"/top",name:"Top Stories"},{href:"/best",name:"Best Stories"},{href:"/ask",name:"Ask"},{href:"/jobs",name:"Jobs"},{href:"/show",name:"Show"}];function u(){var n=(0,i.useRouter)();return(0,c.jsx)("nav",{className:o().container,children:a.map((function(e){return(0,c.jsx)(r.default,{href:e.href,children:(0,c.jsx)("a",{className:"".concat(o().link," ").concat(n.pathname===e.href&&o().active),children:e.name})},e.name)}))})}var l=t(7984),f=t.n(l),d=function(){return(0,c.jsxs)("header",{className:f().container,children:[(0,c.jsxs)("div",{className:f().logo,children:[(0,c.jsx)("img",{src:"imgs/logo.svg",width:24,height:24,className:f().img}),(0,c.jsx)("span",{children:"Hacker News"})]}),(0,c.jsxs)("div",{children:[(0,c.jsx)("div",{className:f().burger,children:(0,c.jsx)("img",{src:"imgs/menu.png",width:24,height:24,className:f().img})}),(0,c.jsx)("div",{className:f().nav,children:(0,c.jsx)(u,{})})]})]})},h=t(4081),_=t.n(h);var v=function(n){var e=n.children;return(0,c.jsxs)("div",{className:_().container,children:[(0,c.jsx)(d,{}),e]})}},1231:function(n,e,t){"use strict";t.d(e,{Z:function(){return v}});t(7294);var r=t(8874),i=t(8966),s=t(5855),o=t(5570),c=t(821),a=t(8740),u=t(8406),l=t(4549),f=t.n(l),d=t(5893),h=function(n){return a.Z.get(n).then((function(n){return n.data}))};var _=function(n){var e=n.storyId,t=n.cssStyle,r=(0,c.ZP)("/item/".concat(e,".json"),h),a=r.data,l=r.error,_=!a&&!l;return(0,d.jsx)("div",{className:f().container,style:t,children:(0,d.jsxs)(u.Z,{loading:_,active:!0,children:[(0,d.jsx)("div",{className:f()["time-container"],children:"".concat(function(){if(null===a||void 0===a||!a.time)return"-";var n=1e3*a.time,e=new Date(n);return"".concat((0,i.Z)(n),", ").concat((0,s.Z)(n)," - ").concat(e.toLocaleString("en",{weekday:"short"}),", ").concat((0,o.Z)(n))}()," \u2022 ").concat(null===a||void 0===a?void 0:a.by)}),(0,d.jsx)("a",{className:f().link,href:null===a||void 0===a?void 0:a.url,target:"_blank",rel:"noreferrer noopener",children:null===a||void 0===a?void 0:a.title}),(0,d.jsx)("hr",{className:f().divider})]})})},v=function(n){var e=n.storyIds,t=void 0===e?[]:e;return(0,d.jsx)(r.aV,{width:720,height:650,rowCount:t.length,rowHeight:80,rowRenderer:function(n){var e=n.index,r=n.style,i=t[e];return(0,d.jsx)(_,{storyId:i,cssStyle:r},i)}})}},5872:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return u}});var r=t(9008),i=t(7294),s=t(9232),o=t(6522),c=t(1231),a=t(5893);function u(){var n=(0,i.useState)([]),e=n[0],t=n[1],u=(0,i.useState)(!0),l=(u[0],u[1]);return(0,i.useEffect)((function(){l(!0),(0,o.j$)().then((function(n){t(n.data)})).catch((function(n){console.error(n)})).finally((function(){l(!1)}))}),[]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.default,{children:(0,a.jsx)("title",{children:"Hacker News | Ask"})}),(0,a.jsx)(s.Z,{children:(0,a.jsx)(c.Z,{storyIds:e})})]})}},7989:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/show",function(){return t(5872)}])},7984:function(n){n.exports={container:"style_container__10Mjn",logo:"style_logo__pTh4C",burger:"style_burger__1x36v",nav:"style_nav__3IV8x",img:"style_img__1ck3a"}},4081:function(n){n.exports={container:"layout_container__2ie7V",title:"layout_title__2c_FI"}},1456:function(n){n.exports={container:"style_container__1CiGq",link:"style_link__1rZOX",active:"style_active__1_NcG"}},4549:function(n){n.exports={"time-container":"style_time-container__3sBoP",link:"style_link__2V_r4",divider:"style_divider__Bsif4"}}},function(n){n.O(0,[774,39,888,179],(function(){return e=7989,n(n.s=e);var e}));var e=n.O();_N_E=e}]);