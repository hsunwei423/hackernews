(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[721],{5143:function(n,e,t){"use strict";t.d(e,{D3:function(){return o},gz:function(){return a},Ye:function(){return l},ZW:function(){return i},j$:function(){return u},EW:function(){return f},f:function(){return c}});var r=t(9669),s=t.n(r)().create({baseURL:"https://hacker-news.firebaseio.com/v0"}),i=function(){return s.get("newstories.json")},c=function(){return s.get("topstories.json")},a=function(){return s.get("beststories.json")},o=function(){return s.get("askstories.json")},u=function(){return s.get("showstories.json")},l=function(){return s.get("jobstories.json")},f=function(n){return s.get("/item/".concat(n,".json"))}},6008:function(n,e,t){"use strict";t.d(e,{Z:function(){return m}});t(7294);var r=t(1664),s=t(1163),i=t(5887),c=t.n(i),a=t(5893),o=[{href:"/new",name:"New"},{href:"/top",name:"Top Stories"},{href:"/best",name:"Best Stories"},{href:"/ask",name:"Ask"},{href:"/jobs",name:"Jobs"},{href:"/show",name:"Show"}];function u(){var n=(0,s.useRouter)();return(0,a.jsx)("nav",{className:c().container,children:o.map((function(e){return(0,a.jsx)(r.default,{href:e.href,children:(0,a.jsx)("a",{className:"".concat(c().link," ").concat(n.pathname===e.href&&c().active),children:e.name})},e.name)}))})}var l=t(7836),f=t.n(l),d=function(){return(0,a.jsxs)("header",{className:f().container,children:[(0,a.jsxs)("div",{className:f().logo,children:[(0,a.jsx)("img",{src:"/imgs/logo.svg",width:24,height:24,className:f().img}),(0,a.jsx)("span",{children:"Hacker News"})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:f().burger,children:(0,a.jsx)("img",{src:"/imgs/menu.png",width:24,height:24,className:f().img})}),(0,a.jsx)("div",{className:f().nav,children:(0,a.jsx)(u,{})})]})]})},h=t(4396),_=t.n(h);var m=function(n){var e=n.children;return(0,a.jsxs)("div",{className:_().container,children:[(0,a.jsx)(d,{}),e]})}},7151:function(n,e,t){"use strict";var r=t(7294),s=t(5143),i=t(1080),c=t(8966),a=t(5855),o=t(5570),u=t(817),l=t.n(u),f=t(5893);e.Z=function(n){var e=n.storyId,t=(0,r.useState)({by:"",descendants:"",time:0,id:0,score:0,title:"",url:"",type:"",kids:[]}),u=t[0],d=t[1],h=(0,r.useState)(""),_=h[0],m=h[1],j=(0,r.useState)(!1),v=j[0],g=j[1];return(0,r.useEffect)((function(){g(!0),(0,s.EW)(e).then((function(n){d(n.data);var e=1e3*n.data.time,t=new Date(e),r="".concat((0,c.Z)(e),", ").concat((0,a.Z)(e)," - ").concat(t.toLocaleString("en",{weekday:"short"}),", ").concat((0,o.Z)(e));m(r)})).catch((function(n){console.log(n)})).finally((function(){g(!1)}))}),[e]),(0,f.jsx)("div",{className:l().container,children:(0,f.jsxs)(i.Z,{loading:v,active:!0,children:[(0,f.jsxs)("div",{className:l()["time-container"],children:[(0,f.jsx)("div",{children:_}),(0,f.jsx)("div",{children:"\u2022"}),(0,f.jsx)("div",{children:u.by})]}),(0,f.jsx)("a",{className:l().link,href:u.url,target:"_blank",rel:"noreferrer noopener",children:u.title}),(0,f.jsx)("hr",{className:l().divider})]})})}},8477:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return l}});var r=t(9008),s=t(7294),i=t(6008),c=t(5143),a=t(7151),o=t(3671),u=t(5893);function l(){var n=(0,s.useState)([]),e=n[0],t=n[1],l=(0,s.useState)(0),f=l[0],d=l[1],h=(0,s.useState)(1),_=h[0],m=h[1],j=(0,s.useState)(!0),v=(j[0],j[1]);(0,s.useEffect)((function(){v(!0),(0,c.D3)().then((function(n){t(n.data)})).finally((function(){v(!1)}))}),[]);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(r.default,{children:(0,u.jsx)("title",{children:"Hacker News | Ask"})}),(0,u.jsxs)(i.Z,{children:[e.slice(f,f+10).map((function(n,e){return(0,u.jsx)(a.Z,{storyId:n},e)})),0!=e.length&&(0,u.jsx)(o.Z,{style:{alignContent:"center"},total:50,pageSize:9,current:_,onChange:function(n,e){d(10*n-10),m(n)}})]})]})}},8689:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ask",function(){return t(8477)}])},7836:function(n){n.exports={container:"style_container__UocCh",logo:"style_logo__B0bDO",burger:"style_burger__ELI8M",nav:"style_nav__BjHfl",img:"style_img__43vzh"}},4396:function(n){n.exports={container:"layout_container__rFl_X",title:"layout_title__vy_O_"}},5887:function(n){n.exports={container:"style_container__dsLGz",link:"style_link__3yWpu",active:"style_active__Ahpsd"}},817:function(n){n.exports={container:"style_container__dg9o_","time-container":"style_time-container__vFym1",link:"style_link__lEu6E",divider:"style_divider__ZRhLg"}}},function(n){n.O(0,[726,774,888,179],(function(){return e=8689,n(n.s=e);var e}));var e=n.O();_N_E=e}]);