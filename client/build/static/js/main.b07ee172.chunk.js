(this.webpackJsonpmern=this.webpackJsonpmern||[]).push([[0],{20:function(e,t,n){e.exports=n(49)},25:function(e,t,n){},44:function(e,t,n){},47:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(18),c=n.n(r),o=n(52),u=n(53),i=n(54),m=n(6),s=n(5);n(25);var E=function(e){return l.a.createElement("span",Object.assign({className:"delete-btn"},e,{role:"button",tabIndex:"0"}),"\u2717")};var f=function(e){var t=e.children;return l.a.createElement("div",{style:{height:300,clear:"both",paddingTop:120,textAlign:"center"},className:"jumbotron"},t)},d=n(7),b=n.n(d),h=function(){return b.a.get("/api/books")},v=function(e){return b.a.delete("/api/books/"+e)},p=function(e){return b.a.post("/api/books",e)},g=function(e){return b.a.get("https://www.googleapis.com/books/v1/volumes?q="+e)},j=n(51);function k(e){var t=e.fluid,n=e.children;return l.a.createElement("div",{className:"container".concat(t?"-fluid":"")},n)}function N(e){var t=e.fluid,n=e.children;return l.a.createElement("div",{className:"row".concat(t?"-fluid":"")},n)}function O(e){var t=e.size,n=e.children;return l.a.createElement("div",{className:t.split(" ").map((function(e){return"col-"+e})).join(" ")},n)}n(44);function y(e){var t=e.children;return l.a.createElement("div",{className:"list-overflow-container"},l.a.createElement("ul",{className:"list-group"},t))}function I(e){var t=e.children;return l.a.createElement("li",{className:"list-group-item"},t)}function S(e){return l.a.createElement("div",{className:"form-group"},l.a.createElement("input",Object.assign({className:"form-control"},e)))}function w(e){return l.a.createElement("button",Object.assign({},e,{style:{float:"right",marginBottom:10},className:"btn btn-success"}),e.children)}var x=function(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)({}),o=Object(s.a)(c,2);function u(){h().then((function(e){return r(e.data)})).catch((function(e){return console.log(e)}))}return o[0],o[1],Object(a.useEffect)((function(){u()}),[]),l.a.createElement(k,{fluid:!0},l.a.createElement(N,null,l.a.createElement(O,{size:"sm-12"},l.a.createElement(f,null,l.a.createElement("h1",null,"Books On My List")),n.length?l.a.createElement(y,null,n.map((function(e){return l.a.createElement(I,{key:e._id},l.a.createElement(j.a,{to:"/books/"+e._id},l.a.createElement("strong",null,e.title," by ",e.author)),l.a.createElement(E,{onClick:function(){return t=e._id,void v(t).then((function(e){return u()})).catch((function(e){return console.log(e)}));var t}}))}))):l.a.createElement("h3",null,"No Results to Display"))))};n(47);var z=function(e){return l.a.createElement("span",Object.assign({className:"save-btn"},e,{role:"button",tabIndex:"0"}),"save")};var B=function(e){var t=Object(a.useState)([]),n=Object(s.a)(t,2),r=n[0],c=n[1],o=Object(a.useState)({}),u=Object(s.a)(o,2),i=u[0],E=u[1];return l.a.createElement(k,{fluid:!0},l.a.createElement(N,null,l.a.createElement(O,{size:"md-12"},l.a.createElement(f,null,l.a.createElement("h1",null,"What Books Should I Read?")),l.a.createElement("form",null,l.a.createElement(S,{onChange:function(e){var t=e.target,n=t.name,a=t.value;E(Object(m.a)(Object(m.a)({},i),{},{[n]:a}))},name:"title",placeholder:"Title (required)"}),l.a.createElement(w,{disabled:!i.title,onClick:function(e){e.preventDefault(),i.title&&g(i.title).then((function(e){c(e.data.items)})).catch((function(e){return console.log(e)}))}},"Submit Search")))),r.map((function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(N,null,l.a.createElement(O,{size:"md-12"},l.a.createElement("h1",null,e.volumeInfo.title," by ",e.volumeInfo.authors.toString()))),l.a.createElement(N,null,l.a.createElement(O,{size:"md-10 md-offset-1"},l.a.createElement("article",null,l.a.createElement("h1",null,"Synopsis"),l.a.createElement("p",null,e.volumeInfo.description)))),l.a.createElement(N,null,l.a.createElement(O,{size:"md-2"}),l.a.createElement(z,{onClick:function(){return function e(t,n,a){p({title:t,author:n,synopsis:a}).then((function(t){return e()})).catch((function(e){return console.log(e)}))}(e.volumeInfo.title,e.volumeInfo.authors.toString(),e.volumeInfo.description)}})))})))};var R=function(){return l.a.createElement(k,{fluid:!0},l.a.createElement(N,null,l.a.createElement(O,{size:"md-12"},l.a.createElement(f,null,l.a.createElement("h1",null,"404 Page Not Found"),l.a.createElement("h1",null,l.a.createElement("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji"},"\ud83d\ude44"))))))};var C=function(){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary"},l.a.createElement("a",{className:"navbar-brand",href:"/"},"React Reading List"),l.a.createElement(j.a,{to:"/books",style:{color:"white"}},l.a.createElement("strong",null,"savedBooks")))};var F=function(){return l.a.createElement(o.a,null,l.a.createElement("div",null,l.a.createElement(C,null),l.a.createElement(u.a,null,l.a.createElement(i.a,{exact:!0,path:["/","/search"]},l.a.createElement(B,null)),l.a.createElement(i.a,{exact:!0,path:"/books"},l.a.createElement(x,null)),l.a.createElement(i.a,null,l.a.createElement(R,null)))))};c.a.render(l.a.createElement(F,null),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.b07ee172.chunk.js.map