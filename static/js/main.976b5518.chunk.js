(this["webpackJsonpexam-english"]=this["webpackJsonpexam-english"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),i=n(8),o=n.n(i),a=(n(14),n(7)),s=n(2),l=n(6),j=n.n(l),u=n(9),h=(n(16),n(0)),d="https://spreadsheets.google.com/feeds/cells/".concat("1pMkhEnCmNodO3dGAG6bJ9GdVNnmtSCcZEvhFEqQIY1M","/1/public/full?alt=json"),b=function(){var e=Object(u.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(d).then((function(e){return e.json()}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();var O=function(){var e=this,t=Object(c.useState)(!1),n=Object(s.a)(t,2),r=n[0],i=n[1],o=Object(c.useState)([]),l=Object(s.a)(o,2),j=l[0],u=l[1],d=Object(c.useState)("k"),O=Object(s.a)(d,2),f=O[0],p=O[1],x=Object(c.useState)(!1),m=Object(s.a)(x,2),v=m[0],g=m[1],w=Object(c.useState)(0),C=Object(s.a)(w,2),E=C[0],S=C[1],k=Object(c.useState)(!1),y=Object(s.a)(k,2),L=y[0],N=y[1],A=Object(c.useState)(!0),B=Object(s.a)(A,2),I=B[0],F=B[1];Object(c.useEffect)((function(){b().then((function(e){console.log("rs",e);var t=[],n=e.feed.entry.map((function(e){return e.gs$cell}));console.log("entry",n),n.forEach((function(e){if(e.row>1){var n=e.row-2;switch(t[n]||(t[n]={value:"",correct:!0}),e.col){case"1":t[n].q=e.$t.trim();break;case"2":t[n].a=e.$t.trim()}}else console.log("on"===e.$t.toLowerCase()),"5"===e.col&&i("on"===e.$t.trim().toLowerCase())})),u(t),F(!1),console.log("mapping:",t)}))}),[]);var M=function(e,t){console.log("index",e,t.target.value);var n=Object(a.a)(j);n[e].value=t.target.value,u(n)};return I?Object(h.jsx)("div",{className:"App",children:Object(h.jsx)("h1",{children:"Loading..."})}):r?Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("h1",{children:"ENGLISH EXAM"}),Object(h.jsx)("div",{children:Object(h.jsxs)("div",{children:["Full name:",Object(h.jsx)("input",{type:"text",value:f,onChange:function(e){p(e.target.value)}})]})}),Object(h.jsx)("div",{id:"printable",children:Object(h.jsx)("div",{className:"container-table",children:Object(h.jsxs)("table",{border:"1",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"#"}),Object(h.jsx)("th",{children:"Question"}),Object(h.jsx)("th",{children:"Your Answer"}),Object(h.jsx)("th",{children:"Correct Answer"})]})}),Object(h.jsx)("tbody",{children:j.map((function(t,n){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:n+1}),Object(h.jsx)("td",{children:t.q}),Object(h.jsx)("td",{children:Object(h.jsx)("input",{type:"text",value:t.value,onChange:M.bind(e,n)})}),Object(h.jsx)("td",{children:v&&t.a})]},n)}))})]})})}),Object(h.jsx)("button",{onClick:function(){if(f){var e="B\u1ea1n ch\u1eafc ch\u1eafn mu\u1ed1n n\u1ed9p b\xe0i?",t=0;if(j.forEach((function(e){""===e.value&&t++})),t>0&&(e="".concat(e," B\u1ea1n c\xf2n ").concat(t," c\xe2u ch\u01b0a tr\u1ea3 l\u1eddi!")),window.confirm(e)){var n=0,c=Object(a.a)(j);j.forEach((function(e,t){e.value.trim().toLowerCase()!==e.a.toLowerCase()&&(n++,c[t].correct=!1)})),u(c),S(n),g(!0)}}else window.alert("B\u1ea1n ch\u01b0a nh\u1eadp h\u1ecd t\xean!")},children:"N\u1ed9p b\xe0i"}),E>0&&Object(h.jsxs)("button",{onClick:function(){N(!L)},children:["B\u1ea1n c\xf3 ",E," t\u1eeb ph\u1ea3i ch\xe9p ph\u1ea1t"]}),v&&Object(h.jsx)("button",{onClick:function(){var e=window.open("","PRINT");return e.document.write("<html><head><title>EXAM RESULT</title>"),e.document.write("</head><body >"),e.document.write(document.getElementById("printable").innerHTML),e.document.write("</body></html>"),e.document.close(),e.focus(),e.print(),e.close(),!0},children:"In k\u1ebft qu\u1ea3"})]}):Object(h.jsx)("div",{className:"App",children:Object(h.jsx)("h1",{children:"B\xe0i thi ch\u01b0a \u0111\u01b0\u1ee3c m\u1edf!"})})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),i(e),o(e)}))};o.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(O,{})}),document.getElementById("root")),f()}},[[18,1,2]]]);
//# sourceMappingURL=main.976b5518.chunk.js.map