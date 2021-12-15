(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[142],{6522:function(n,e,t){"use strict";t.d(e,{ZW:function(){return i},f:function(){return c},gz:function(){return s},D3:function(){return o},j$:function(){return a},Ye:function(){return u}});var r=t(8740),i=function(){return r.Z.get("newstories.json")},c=function(){return r.Z.get("topstories.json")},s=function(){return r.Z.get("beststories.json")},o=function(){return r.Z.get("askstories.json")},a=function(){return r.Z.get("showstories.json")},u=function(){return r.Z.get("jobstories.json")}},8740:function(n,e,t){"use strict";var r=t(9669),i=t.n(r)().create({baseURL:"https://hacker-news.firebaseio.com/v0"});e.Z=i},992:function(n,e,t){"use strict";t.d(e,{Z:function(){return p}});var r=t(1664),i=t(1163),c=t(9704),s=function(){return(0,c.I0)()},o=c.v9,a=t(7294),u=t(1456),l=t.n(u),d=[{href:"/new",name:"New"},{href:"/top",name:"Top Stories"},{href:"/best",name:"Best Stories"},{href:"/ask",name:"Ask"},{href:"/jobs",name:"Jobs"},{href:"/show",name:"Show"}],f=t(5893);function _(){var n=(0,i.useRouter)();return(0,f.jsx)("nav",{className:l().container,children:d.map((function(e){return(0,f.jsx)(r.default,{href:e.href,children:(0,f.jsx)("a",{className:"".concat(l().link," ").concat(n.pathname===e.href&&l().active),children:e.name})},e.name)}))})}var h=t(2486),v=t(7984),m=t.n(v),j=function(){var n=s();return(0,f.jsxs)("header",{className:m().container,children:[(0,f.jsxs)("div",{className:m().logo,children:[(0,f.jsx)("img",{src:"imgs/logo.svg",width:24,height:24,className:m().img}),(0,f.jsx)("span",{children:"Hacker News"})]}),(0,f.jsxs)("div",{children:[(0,f.jsx)("div",{className:m().burger,children:(0,f.jsx)("img",{src:"imgs/menu.png",width:24,height:24,className:m().img,onClick:function(){n((0,h.FJ)())}})}),(0,f.jsx)("div",{className:m().nav,children:(0,f.jsx)(_,{})})]})]})},x=t(4584),g=t.n(x),y=function(n){var e=n.children,t=s(),r=o((function(n){return n.drawerReducer.isVisible}));return(0,f.jsxs)("div",{className:"".concat(g().container," ").concat(r&&g().open),children:[(0,f.jsx)("div",{className:"".concat(g().mask," ").concat(r&&g().open),onClick:function(){t((0,h.dL)())}}),(0,f.jsx)("div",{className:"".concat(g().drawer," ").concat(r&&g().open),children:e})]})},w=t(4081),k=t.n(w);var p=function(n){var e=n.children,t=(0,i.useRouter)(),c=s();return(0,a.useEffect)((function(){var n=function(){c((0,h.dL)())};return t.events.on("routeChangeStart",n),function(){t.events.off("routeChangeStart",n)}}),[t]),(0,f.jsxs)("div",{className:k().container,children:[(0,f.jsx)(j,{}),(0,f.jsx)(y,{children:function(){var n=t.pathname;return(0,f.jsx)("div",{className:k()["link-container"],children:d.map((function(e){return(0,f.jsx)(r.default,{href:e.href,children:(0,f.jsx)("a",{className:"".concat(k().item," ").concat(n===e.href&&k().active),children:e.name})},e.name)}))})}()}),e]})}},1231:function(n,e,t){"use strict";t.d(e,{Z:function(){return v}});t(7294);var r=t(8874),i=t(8966),c=t(5855),s=t(5570),o=t(821),a=t(8740),u=t(3660),l=t(4549),d=t.n(l),f=t(5893),_=function(n){return a.Z.get(n).then((function(n){return n.data}))},h=function(n){var e=n.storyId,t=n.cssStyle,r=(0,o.ZP)("/item/".concat(e,".json"),_),a=r.data,l=r.error,h=!a&&!l;return l?(0,f.jsx)("div",{children:"something went wrong ..."}):(0,f.jsx)("div",{className:d().container,style:t,children:(0,f.jsxs)(u.Z,{loading:h,active:!0,children:[(0,f.jsx)("div",{className:d()["time-container"],children:"".concat(function(){if(null===a||void 0===a||!a.time)return"-";var n=1e3*a.time,e=new Date(n);return"".concat((0,i.Z)(n),", ").concat((0,c.Z)(n)," - ").concat(e.toLocaleString("en",{weekday:"short"}),", ").concat((0,s.Z)(n))}()," \u2022 ").concat(null===a||void 0===a?void 0:a.by)}),(0,f.jsx)("a",{className:d().link,href:null===a||void 0===a?void 0:a.url,target:"_blank",rel:"noreferrer noopener",children:null===a||void 0===a?void 0:a.title}),(0,f.jsx)("hr",{className:d().divider})]})})},v=function(n){var e=n.storyIds,t=void 0===e?[]:e;return(0,f.jsx)(r.aV,{style:{maxWidth:"100%",maxHeight:"calc(100% - 40px)"},width:720,height:1024,rowCount:t.length,rowHeight:80,rowRenderer:function(n){var e=n.index,r=n.style,i=t[e];return(0,f.jsx)(h,{storyId:i,cssStyle:r},i)}})}},6442:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return u}});var r=t(9008),i=t(7294),c=t(992),s=t(6522),o=t(1231),a=t(5893);function u(){var n=(0,i.useState)([]),e=n[0],t=n[1],u=(0,i.useState)(!0),l=(u[0],u[1]);return(0,i.useEffect)((function(){l(!0),(0,s.Ye)().then((function(n){t(n.data)})).catch((function(n){console.error(n)})).finally((function(){l(!1)}))}),[]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.default,{children:(0,a.jsx)("title",{children:"Hacker News | Ask"})}),(0,a.jsx)(c.Z,{children:(0,a.jsx)(o.Z,{storyIds:e})})]})}},3801:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/jobs",function(){return t(6442)}])},4584:function(n){n.exports={container:"style_container__3xBTS",open:"style_open__36jS2",mask:"style_mask__1DYun",drawer:"style_drawer__FdBQP"}},7984:function(n){n.exports={container:"style_container__10Mjn",logo:"style_logo__pTh4C",burger:"style_burger__1x36v",nav:"style_nav__3IV8x",img:"style_img__1ck3a"}},4081:function(n){n.exports={container:"layout_container__2ie7V",title:"layout_title__2c_FI","link-container":"layout_link-container__1Ro_M",item:"layout_item__AYhfD",active:"layout_active__2xeGP"}},1456:function(n){n.exports={container:"style_container__1CiGq",link:"style_link__1rZOX",active:"style_active__1_NcG"}},4549:function(n){n.exports={"time-container":"style_time-container__3sBoP",link:"style_link__2V_r4",divider:"style_divider__Bsif4"}}},function(n){n.O(0,[284,774,888,179],(function(){return e=3801,n(n.s=e);var e}));var e=n.O();_N_E=e}]);