(this["webpackJsonpexam-english"]=this["webpackJsonpexam-english"]||[]).push([[0],{14:function(e,t,c){},16:function(e,t,c){},18:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),i=c(8),s=c.n(i),a=(c(14),c(5)),l=c(2),j=c(7),d=c.n(j),h=c(9),o=(c(16),c(0)),b="https://spreadsheets.google.com/feeds/cells/".concat("1pMkhEnCmNodO3dGAG6bJ9GdVNnmtSCcZEvhFEqQIY1M","/1/public/full?alt=json"),u=function(){var e=Object(h.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(b).then((function(e){return e.json()}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();var O=function(){var e=this,t=Object(n.useState)(!1),c=Object(l.a)(t,2),i=c[0],s=c[1],j=Object(n.useState)([]),d=Object(l.a)(j,2),h=d[0],b=d[1],O=Object(n.useState)(""),x=Object(l.a)(O,2),p=x[0],f=x[1],m=Object(n.useState)(!1),g=Object(l.a)(m,2),v=g[0],y=g[1],w=Object(n.useState)(0),C=Object(l.a)(w,2),N=C[0],S=C[1],k=Object(n.useState)(!1),A=Object(l.a)(k,2),E=A[0],L=A[1],B=Object(n.useState)(!0),F=Object(l.a)(B,2),I=F[0],q=F[1],M=Object(n.useState)([]),H=Object(l.a)(M,2),T=H[0],G=H[1],P=Object(n.useState)(!1),$=Object(l.a)(P,2),J=$[0],Q=$[1];Object(n.useEffect)((function(){u().then((function(e){var t=[];e.feed.entry.map((function(e){return e.gs$cell})).forEach((function(e){if(e.row>1){var c=e.row-2;switch(t[c]||(t[c]={value:"",copy:"",correct:!0,ok:!1}),e.col){case"1":t[c].q=e.$t.trim();break;case"2":t[c].a=e.$t.trim()}}else"5"===e.col&&s("on"===e.$t.trim().toLowerCase())})),b(t),q(!1)}))}),[]);var Y=function(e,t){var c=Object(a.a)(h);c[e].value=t.target.value,b(c)},D=function(e,t){var c=Object(a.a)(T);c[e].copy=t.target.value,G(c)},R=function(e){e.preventDefault()};return I?Object(o.jsx)("div",{className:"App",children:Object(o.jsx)("h1",{children:"Loading..."})}):i?Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("h2",{children:"ENGLISH EXAM"}),Object(o.jsxs)("div",{id:"printable",children:[Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("b",{children:"H\u1ecd t\xean:"}),v?Object(o.jsx)("span",{style:{marginLeft:"5px"},children:Object(o.jsx)("b",{children:p})}):Object(o.jsx)("input",{className:"input-name",type:"text",value:p,onChange:function(e){f(e.target.value)}})]}),Object(o.jsx)("div",{children:v&&Object(o.jsx)("span",{children:Object(o.jsxs)("b",{children:["K\u1ebft qu\u1ea3: ",h.length-N,"/",h.length]})})})]}),v&&N>0&&Object(o.jsx)("div",{children:J?Object(o.jsx)("span",{style:{color:"green"},children:Object(o.jsx)("b",{children:"\u0110\xe3 ch\xe9p ph\u1ea1t"})}):Object(o.jsx)("span",{style:{color:"red"},children:Object(o.jsx)("b",{children:"Ch\u01b0a ch\xe9p ph\u1ea1t"})})}),Object(o.jsx)("br",{}),Object(o.jsx)("div",{className:"container-table",children:E?Object(o.jsxs)("table",{border:"1",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"#"}),Object(o.jsx)("th",{children:"Question"}),Object(o.jsx)("th",{children:"Copy penalty 10 times"}),Object(o.jsx)("th",{children:"Correct Answer"})]})}),Object(o.jsx)("tbody",{children:T.map((function(t,c){return Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:c+1}),Object(o.jsx)("td",{children:t.q}),Object(o.jsx)("td",{children:Object(o.jsx)("textarea",{type:"text",rows:5,onPaste:R,value:t.copy,onChange:D.bind(e,c)})}),Object(o.jsx)("td",{children:v&&t.a})]},c)}))})]}):Object(o.jsxs)("table",{width:"100%",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{style:{padding:"10px"},children:"#"}),Object(o.jsx)("th",{style:{padding:"10px"},children:"Question"}),Object(o.jsx)("th",{style:{padding:"10px"},children:"Your Answer"}),v&&Object(o.jsx)("th",{style:{padding:"10px"},children:"Correct Answer"})]})}),Object(o.jsx)("tbody",{children:h.map((function(t,c){return Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{style:{textAlign:"center"},children:c+1}),Object(o.jsx)("td",{style:{textAlign:"center"},children:t.q}),Object(o.jsx)("td",{children:Object(o.jsx)("input",{type:"text",style:{width:"100%",textAlign:"center",color:v&&!t.correct?"red":"black"},value:t.value,disabled:v,onChange:Y.bind(e,c)})}),v&&Object(o.jsx)("td",{style:{textAlign:"center"},children:t.a})]},c)}))})]})})]}),E?Object(o.jsxs)(r.a.Fragment,{children:[Object(o.jsx)("button",{className:"green",onClick:function(){T.some((function(e){return function(e,t,c){if(e+="",(t+="").length<=0)return e.length+1;var n=0,r=0,i=c?1:t.length;for(;(r=e.indexOf(t,r))>=0;)++n,r+=i;return n}(e.copy,e.a)<10}))?window.alert("Y\xeau c\u1ea7u m\u1ed7i t\u1eeb sai ph\u1ea3i ch\xe9p l\u1ea1i 10 l\u1ea7n!"):(Q(!0),L(!1))},children:"Ho\xe0n t\u1ea5t ch\xe9p ph\u1ea1t"}),Object(o.jsx)("button",{className:"red",onClick:function(){L(!1)},children:"H\u1ee7y"})]}):Object(o.jsxs)(r.a.Fragment,{children:[!v&&Object(o.jsx)("button",{onClick:function(){if(p){var e="B\u1ea1n ch\u1eafc ch\u1eafn mu\u1ed1n n\u1ed9p b\xe0i?",t=0;if(h.forEach((function(e){""===e.value&&t++})),t>0&&(e="".concat(e," B\u1ea1n c\xf2n ").concat(t," c\xe2u ch\u01b0a tr\u1ea3 l\u1eddi!")),window.confirm(e)){var c,n=Object(a.a)(h);c=h.filter((function(e,t){return e.value.trim().toLowerCase()!==e.a.toLowerCase()&&(n[t].correct=!1,!0)})),b(n),G(c),S(c.length),y(!0)}}else window.alert("B\u1ea1n ch\u01b0a nh\u1eadp h\u1ecd t\xean!")},className:"green",children:"N\u1ed9p b\xe0i"}),N>0&&!J&&Object(o.jsxs)("button",{className:"red",onClick:function(){L(!E)},children:["B\u1ea1n c\xf3 ",N," t\u1eeb ph\u1ea3i ch\xe9p ph\u1ea1t"]}),v&&Object(o.jsx)("button",{className:"blue",onClick:function(){var e=window.open("","PRINT");return e.document.write("<html><head><title>EXAM RESULT</title>"),e.document.write("</head><body >"),e.document.write(document.getElementById("printable").innerHTML),e.document.write("</body></html>"),e.document.close(),e.focus(),e.print(),e.close(),!0},children:"In k\u1ebft qu\u1ea3"})]})]}):Object(o.jsx)("div",{className:"App",children:Object(o.jsx)("h1",{children:"B\xe0i thi ch\u01b0a \u0111\u01b0\u1ee3c m\u1edf!"})})},x=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,19)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,i=t.getLCP,s=t.getTTFB;c(e),n(e),r(e),i(e),s(e)}))};s.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(O,{})}),document.getElementById("root")),x()}},[[18,1,2]]]);
//# sourceMappingURL=main.25da96d9.chunk.js.map