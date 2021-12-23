(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[626],{6522:function(n,e,t){"use strict";t.d(e,{ZW:function(){return i},f:function(){return s},gz:function(){return c},D3:function(){return a},j$:function(){return o},Ye:function(){return l},EW:function(){return u}});var r=t(8740),i=function(){return r.Z.get("newstories.json")},s=function(){return r.Z.get("topstories.json")},c=function(){return r.Z.get("beststories.json")},a=function(){return r.Z.get("askstories.json")},o=function(){return r.Z.get("showstories.json")},l=function(){return r.Z.get("jobstories.json")},u=function(n){return r.Z.get("/item/".concat(n,".json"))}},8740:function(n,e,t){"use strict";var r=t(9669),i=t.n(r)().create({baseURL:"https://hacker-news.firebaseio.com/v0"});e.Z=i},992:function(n,e,t){"use strict";t.d(e,{Z:function(){return k}});var r=t(7294),i=t(1664),s=t(1163),c=t(9704),a=function(){return(0,c.I0)()},o=c.v9,l=t(1456),u=t.n(l),d=[{href:"/new",name:"New"},{href:"/top",name:"Top Stories"},{href:"/best",name:"Best Stories"},{href:"/ask",name:"Ask"},{href:"/jobs",name:"Jobs"},{href:"/show",name:"Show"}],_=t(5893),f=function(){var n=(0,s.useRouter)();return(0,_.jsx)("nav",{className:u().container,children:d.map((function(e){return(0,_.jsx)(i.default,{href:e.href,children:(0,_.jsx)("a",{className:"".concat(u().link," ").concat(n.pathname===e.href&&u().active),children:e.name})},e.name)}))})},h=t(2486),m=t(7984),v=t.n(m),x=function(){var n=a(),e=(0,s.useRouter)();return(0,_.jsxs)("header",{className:v().container,children:[(0,_.jsxs)("div",{className:v().logo,onClick:function(){e.push("/new")},children:[(0,_.jsx)("img",{src:"imgs/logo.svg",width:24,height:24,className:v().img}),(0,_.jsx)("span",{children:"Hacker News"})]}),(0,_.jsxs)("div",{children:[(0,_.jsx)("div",{className:v().burger,children:(0,_.jsx)("img",{src:"imgs/menu.svg",width:24,height:24,className:v().img,onClick:function(){n((0,h.FJ)())}})}),(0,_.jsx)("div",{className:v().nav,children:(0,_.jsx)(f,{})})]})]})},j=t(4584),y=t.n(j),p=function(n){var e=n.children,t=a(),r=o((function(n){return n.drawerReducer.isVisible}));return(0,_.jsxs)("div",{className:"".concat(y().container," ").concat(r&&y().open),children:[(0,_.jsx)("div",{className:"".concat(y().mask," ").concat(r&&y().open),onClick:function(){t((0,h.dL)())}}),(0,_.jsx)("div",{className:"".concat(y().drawer," ").concat(r&&y().open),children:e})]})},g=t(4081),N=t.n(g),k=function(n){var e=n.children,t=(0,s.useRouter)(),c=a();(0,r.useEffect)((function(){var n=function(){c((0,h.dL)())};return t.events.on("routeChangeStart",n),function(){t.events.off("routeChangeStart",n)}}),[t]);return(0,_.jsxs)("div",{className:N().container,children:[(0,_.jsx)(x,{}),(0,_.jsx)(p,{children:function(){var n=t.pathname;return(0,_.jsx)("div",{className:N()["link-container"],children:d.map((function(e){return(0,_.jsx)(i.default,{href:e.href,children:(0,_.jsx)("a",{className:"".concat(N().item," ").concat(n===e.href&&N().active),children:e.name})},e.name)}))})}()}),(0,_.jsx)("main",{className:N().main,children:e})]})}},2844:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return L}});var r=t(7294),i=t(1163),s=t(9008),c=t(6522),a=t(992),o=t(821),l=t(8740),u=t(6465),d=t.n(u),_=t(5893),f=["#38bdf8","#60a5fa","#818cf8","#a78bfa","#c084fc","#f472b6","#fb7185","#2dd4bf","#a3e635","#facc15","#fb923c"],h=function(n){var e=n.author,t=void 0===e?"A":e;return(0,_.jsx)("div",{className:d().container,style:function(){var n=Math.floor(Math.random()*f.length);return{backgroundColor:f[n]}}(),children:t.charAt(0)||""})},m=r.memo(h),v=t(6764),x=t.n(v),j=function(){return(0,_.jsxs)("div",{className:x()["lds-ring"],children:[(0,_.jsx)("div",{}),(0,_.jsx)("div",{}),(0,_.jsx)("div",{}),(0,_.jsx)("div",{})]})},y=t(8791),p=t.n(y),g=function(n){return l.Z.get(n).then((function(n){return n.data}))},N=function(n){var e=n.id,t=(0,o.ZP)("/item/".concat(e,".json"),g),r=t.data,i=t.error;return!r&&!i?(0,_.jsx)(j,{}):i?(0,_.jsx)("div",{children:"something went wrong"}):(0,_.jsxs)("div",{className:p().container,children:[(0,_.jsx)(m,{author:null===r||void 0===r?void 0:r.by}),(0,_.jsxs)("div",{className:p().content,children:[(0,_.jsx)("span",{className:p().name,children:null===r||void 0===r?void 0:r.by}),(0,_.jsx)("div",{className:p().htmlContent,dangerouslySetInnerHTML:{__html:null===r||void 0===r?void 0:r.text}}),(0,_.jsx)("div",{className:"".concat(p().name," ").concat(p().reply),children:"reply to"}),(null===r||void 0===r?void 0:r.kids)&&(0,_.jsx)(k,{idList:null===r||void 0===r?void 0:r.kids})]})]},e)},k=function(n){var e=n.idList,t=(0,r.useState)(!1),i=t[0],s=t[1],c=function(){s(!0)};return(0,_.jsx)("div",{className:p().wrapper,children:e.length>2&&!i?(0,_.jsxs)(_.Fragment,{children:[e.slice(0,2).map((function(n){return(0,_.jsx)(N,{id:n},n)})),(0,_.jsx)("div",{className:p()["load-more"],onClick:c,children:"load more"})]}):e.map((function(n){return(0,_.jsx)(N,{id:n},n)}))})},b=k,w=t(4549),C=t.n(w),S=function(n){var e=n.score,t=n.url,r=n.title,i=n.by;return(0,_.jsxs)("div",{className:C().container,children:[(0,_.jsxs)("div",{children:[(0,_.jsx)("a",{className:C().title,href:t,target:"_blank",rel:"noopener noreferral",children:r}),(0,_.jsx)("div",{className:C().url,children:t})]}),(0,_.jsxs)("div",{className:C().detail,children:[(0,_.jsx)("div",{children:"".concat(e," points")}),(0,_.jsx)("div",{children:"|"}),(0,_.jsx)("div",{children:"by ".concat(i)})]})]})},Z=t(9458),E=t.n(Z),L=function(){var n=(0,r.useState)(!1),e=n[0],t=n[1],o=(0,r.useState)([]),l=(o[0],o[1]),u=(0,r.useState)({by:"",descendants:0,id:0,kids:[],score:0,time:0,title:"",type:"=",url:""}),d=u[0],f=u[1],h=(0,i.useRouter)().query.id;return(0,r.useEffect)((function(){h&&(t(!0),(0,c.EW)(h).then((function(n){l(n.data.kids),f(n.data)})).catch((function(n){console.error(n)})).finally((function(){t(!1)})))}),[h]),(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(s.default,{children:(0,_.jsx)("title",{children:"Hacker News | Comment"})}),(0,_.jsx)(a.Z,{children:e?(0,_.jsx)(j,{}):(0,_.jsxs)("div",{className:E().container,children:[(0,_.jsx)(S,{score:d.score,url:d.url,title:d.title,by:d.by}),(0,_.jsx)(b,{idList:d.kids})]})})]})}},7640:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/comment",function(){return t(2844)}])},8791:function(n){n.exports={wrapper:"style_wrapper__2TshT",container:"style_container__2Ng9L",content:"style_content__2cdJj",text:"style_text__1C8ro",name:"style_name__1mWn7",reply:"style_reply__1OKS3",htmlContent:"style_htmlContent__231C9","load-more":"style_load-more__2Sdnv"}},4584:function(n){n.exports={container:"style_container__3xBTS",open:"style_open__36jS2",mask:"style_mask__1DYun",drawer:"style_drawer__FdBQP"}},7984:function(n){n.exports={container:"style_container__10Mjn",logo:"style_logo__pTh4C",burger:"style_burger__1x36v",nav:"style_nav__3IV8x",img:"style_img__1ck3a"}},4081:function(n){n.exports={container:"layout_container__2ie7V",title:"layout_title__2c_FI","link-container":"layout_link-container__1Ro_M",item:"layout_item__AYhfD",active:"layout_active__2xeGP",main:"layout_main__2ICRe"}},1456:function(n){n.exports={container:"style_container__1CiGq",link:"style_link__1rZOX",active:"style_active__1_NcG"}},4549:function(n){n.exports={container:"style_container__3FVQl",title:"style_title__1qvdh",url:"style_url__10oje",detail:"style_detail__1n16t"}},6465:function(n){n.exports={container:"style_container__2Vvw0"}},6764:function(n){n.exports={"lds-ring":"style_lds-ring__2E8N9"}},9458:function(n){n.exports={container:"style_container__1UqSd"}}},function(n){n.O(0,[138,774,888,179],(function(){return e=7640,n(n.s=e);var e}));var e=n.O();_N_E=e}]);