(this["webpackJsonpre-go"]=this["webpackJsonpre-go"]||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),s=n(8),i=n.n(s),o=(n(13),n(2)),a=n(3),j=n(5),l=n(4),b=n.p+"static/media/gopher.3d30abfb.jpg",d=n(0),u=function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("header",{className:"App-header",children:[Object(d.jsx)("h1",{children:this.props.title}),Object(d.jsx)("img",{src:b,alt:"golang-gopher"}),Object(d.jsxs)("p",{className:"credit",children:["work in progress:"," ",Object(d.jsx)("a",{href:"https://twitter.com/imcdt",target:"_blank",rel:"noreferrer",children:"me"})," ","|"," ",Object(d.jsx)("a",{href:"https://github.com/christiandavidturner/Go-News-Aggregator",target:"_blank",rel:"noreferrer",children:"repo"})]})]})}}]),n}(c.a.Component),h=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)("svg",{width:"100%",height:"200px",fill:"none",version:"1.1",xmlns:"http://www.w3.org/2000/svg",children:[Object(d.jsxs)("linearGradient",{id:"grad1",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[Object(d.jsx)("stop",{offset:"100%","stop-color":"#6eb6e5"}),Object(d.jsx)("stop",{offset:"100%","stop-color":"#6eb6e5"}),Object(d.jsx)("stop",{offset:"100%","stop-color":"#6eb6e5"})]}),Object(d.jsx)("path",{fill:"url(#grad1)",d:" M0 67 C 273,183 822,-40 1920.00,106  V 359  H 0  V 67 Z",children:Object(d.jsx)("animate",{repeatCount:"indefinite",fill:"url(#grad1)",attributeName:"d",dur:"50s",attributeType:"XML",values:" M0 77  C 473,283 822,-40 1920,116  V 359  H 0  V 67  Z;  M0 77  C 473,-40 1222,283 1920,136  V 359  H 0  V 67  Z;  M0 77  C 973,260 1722,-53 1920,120  V 359  H 0  V 67  Z;  M0 77  C 473,283 822,-40 1920,116  V 359  H 0  V 67  Z "})})]})})},p=n(6),O=function(e){return Object(d.jsxs)("div",{children:[Object(d.jsx)("li",{className:"post-title",children:e.title},e.key),Object(d.jsx)("li",{className:"post-body",children:e.body},e.key)]})},f=function(e){var t=Object(r.useState)(null),n=Object(p.a)(t,2),c=n[0],s=n[1],i=Object(r.useState)(!1),o=Object(p.a)(i,2),a=o[0],j=o[1],l=Object(r.useState)([]),b=Object(p.a)(l,2),u=b[0],h=b[1];return Object(r.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/posts").then((function(e){return e.json()})).then((function(e){j(!0),h(e)}),(function(e){j(!0),s(e)}))}),[]),c?Object(d.jsxs)("div",{children:["Error: ",c.message]}):a?Object(d.jsx)("div",{children:Object(d.jsx)("ul",{className:"posts",children:u.map((function(e){return Object(d.jsx)(O,{title:e.title,body:e.body},e.id)}))})}):Object(d.jsx)("div",{children:"Loading..."})},g=(n(15),function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(u,{title:"Golang News Aggregator"}),Object(d.jsx)(h,{}),Object(d.jsx)(f,{})]})}}]),n}(c.a.Component)),x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),s(e),i(e)}))};i.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(g,{})}),document.getElementById("root")),x()}},[[16,1,2]]]);
//# sourceMappingURL=main.5ab110c0.chunk.js.map