(this["webpackJsonpexam-english"]=this["webpackJsonpexam-english"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(8),i=n.n(s),l=(n(14),n(5)),a=n(2),j=n(7),o=n.n(j),d=n(9),h=(n(16),n(0)),b="https://spreadsheets.google.com/feeds/cells/".concat("1pMkhEnCmNodO3dGAG6bJ9GdVNnmtSCcZEvhFEqQIY1M","/1/public/full?alt=json"),u=function(){var e=Object(d.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(b).then((function(e){return e.json()}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();var O=function(){var e=this,t=Object(c.useState)(!1),n=Object(a.a)(t,2),s=n[0],i=n[1],j=Object(c.useState)([]),o=Object(a.a)(j,2),d=o[0],b=o[1],O=Object(c.useState)("k"),x=Object(a.a)(O,2),p=x[0],f=x[1],g=Object(c.useState)(!1),m=Object(a.a)(g,2),v=m[0],y=m[1],w=Object(c.useState)(0),C=Object(a.a)(w,2),N=C[0],S=C[1],k=Object(c.useState)(!1),A=Object(a.a)(k,2),E=A[0],L=A[1],B=Object(c.useState)(!0),F=Object(a.a)(B,2),I=F[0],q=F[1],M=Object(c.useState)([]),H=Object(a.a)(M,2),T=H[0],$=H[1],G=Object(c.useState)(!1),J=Object(a.a)(G,2),P=J[0],Q=J[1];Object(c.useEffect)((function(){u().then((function(e){console.log("rs",e);var t=[],n=e.feed.entry.map((function(e){return e.gs$cell}));console.log("entry",n),n.forEach((function(e){if(e.row>1){var n=e.row-2;switch(t[n]||(t[n]={value:"",copy:"",correct:!0,ok:!1}),e.col){case"1":t[n].q=e.$t.trim();break;case"2":t[n].a=e.$t.trim()}}else console.log("on"===e.$t.toLowerCase()),"5"===e.col&&i("on"===e.$t.trim().toLowerCase())})),b(t),q(!1),console.log("mapping:",t)}))}),[]);var Y=function(e,t){console.log("index",e,t.target.value);var n=Object(l.a)(d);n[e].value=t.target.value,b(n)},R=function(e,t){console.log("index",e,t.target.value);var n=Object(l.a)(T);n[e].copy=t.target.value,$(n)};return I?Object(h.jsx)("div",{className:"App",children:Object(h.jsx)("h1",{children:"Loading..."})}):s?Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("h2",{children:"ENGLISH EXAM"}),Object(h.jsxs)("div",{id:"printable",children:[Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("b",{children:"H\u1ecd t\xean:"}),v?Object(h.jsx)("span",{style:{marginLeft:"5px"},children:Object(h.jsx)("b",{children:p})}):Object(h.jsx)("input",{class:"input-name",type:"text",value:p,onChange:function(e){f(e.target.value)}})]}),Object(h.jsx)("div",{children:v&&Object(h.jsx)("span",{children:Object(h.jsxs)("b",{children:["K\u1ebft qu\u1ea3: ",d.length-N,"/",d.length]})})})]}),v&&N>0&&Object(h.jsx)("div",{children:P?Object(h.jsx)("span",{style:{color:"green"},children:Object(h.jsx)("b",{children:"\u0110\xe3 ch\xe9p ph\u1ea1t"})}):Object(h.jsx)("span",{style:{color:"red"},children:Object(h.jsx)("b",{children:"Ch\u01b0a ch\xe9p ph\u1ea1t"})})}),Object(h.jsx)("br",{}),Object(h.jsx)("div",{className:"container-table",children:E?Object(h.jsxs)("table",{border:"1",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"#"}),Object(h.jsx)("th",{children:"Question"}),Object(h.jsx)("th",{children:"Copy penalty 10 times"}),Object(h.jsx)("th",{children:"Correct Answer"})]})}),Object(h.jsx)("tbody",{children:T.map((function(t,n){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:n+1}),Object(h.jsx)("td",{children:t.q}),Object(h.jsx)("td",{children:Object(h.jsx)("textarea",{rows:5,type:"text",value:t.copy,onChange:R.bind(e,n)})}),Object(h.jsx)("td",{children:v&&t.a})]},n)}))})]}):Object(h.jsxs)("table",{width:"100%",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{style:{padding:"10px"},children:"#"}),Object(h.jsx)("th",{style:{padding:"10px"},children:"Question"}),Object(h.jsx)("th",{style:{padding:"10px"},children:"Your Answer"}),v&&Object(h.jsx)("th",{style:{padding:"10px"},children:"Correct Answer"})]})}),Object(h.jsx)("tbody",{children:d.map((function(t,n){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{style:{textAlign:"center"},children:n+1}),Object(h.jsx)("td",{style:{textAlign:"center"},children:t.q}),Object(h.jsx)("td",{children:Object(h.jsx)("input",{type:"text",style:{width:"100%",textAlign:"center"},value:t.value,disabled:v,onChange:Y.bind(e,n)})}),v&&Object(h.jsx)("td",{style:{textAlign:"center"},children:t.a})]},n)}))})]})})]}),E?Object(h.jsxs)(r.a.Fragment,{children:[Object(h.jsx)("button",{className:"green",onClick:function(){T.some((function(e){return function(e,t,n){if(e+="",(t+="").length<=0)return e.length+1;var c=0,r=0,s=n?1:t.length;for(;(r=e.indexOf(t,r))>=0;)++c,r+=s;return c}(e.copy,e.a)<2}))?window.alert("Y\xeau c\u1ea7u m\u1ed7i t\u1eeb sai ph\u1ea3i ch\xe9p l\u1ea1i 10 l\u1ea7n!"):(Q(!0),L(!1))},children:"Ho\xe0n t\u1ea5t ch\xe9p ph\u1ea1t"}),Object(h.jsx)("button",{className:"red",onClick:function(){L(!1)},children:"H\u1ee7y"})]}):Object(h.jsxs)(r.a.Fragment,{children:[Object(h.jsx)("button",{onClick:function(){if(p){var e="B\u1ea1n ch\u1eafc ch\u1eafn mu\u1ed1n n\u1ed9p b\xe0i?",t=0;if(d.forEach((function(e){""===e.value&&t++})),t>0&&(e="".concat(e," B\u1ea1n c\xf2n ").concat(t," c\xe2u ch\u01b0a tr\u1ea3 l\u1eddi!")),window.confirm(e)){var n,c=Object(l.a)(d);n=d.filter((function(e,t){return e.value.trim().toLowerCase()!==e.a.toLowerCase()&&(c[t].correct=!1,!0)})),b(c),$(n),S(n.length),y(!0)}}else window.alert("B\u1ea1n ch\u01b0a nh\u1eadp h\u1ecd t\xean!")},className:"green",children:"N\u1ed9p b\xe0i"}),N>0&&!P&&Object(h.jsxs)("button",{className:"red",onClick:function(){L(!E)},children:["B\u1ea1n c\xf3 ",N," t\u1eeb ph\u1ea3i ch\xe9p ph\u1ea1t"]}),v&&Object(h.jsx)("button",{className:"blue",onClick:function(){var e=window.open("","PRINT");return e.document.write("<html><head><title>EXAM RESULT</title>"),e.document.write("</head><body >"),e.document.write(document.getElementById("printable").innerHTML),e.document.write("</body></html>"),e.document.close(),e.focus(),e.print(),e.close(),!0},children:"In k\u1ebft qu\u1ea3"})]})]}):Object(h.jsx)("div",{className:"App",children:Object(h.jsx)("h1",{children:"B\xe0i thi ch\u01b0a \u0111\u01b0\u1ee3c m\u1edf!"})})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),s(e),i(e)}))};i.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(O,{})}),document.getElementById("root")),x()}},[[18,1,2]]]);
//# sourceMappingURL=main.4ceedc0a.chunk.js.map