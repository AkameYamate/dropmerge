(this.webpackJsonpvotting=this.webpackJsonpvotting||[]).push([[0],{21:function(t,e,n){},22:function(t,e,n){},42:function(t,e,n){"use strict";n.r(e);var c=n(1),o=n.n(c),a=n(16),s=n.n(a),d=(n(21),n(22),n(4)),i=n(2),r=n.n(i),u=n(0),l=n.p+"static/media/metamask.7d8c66c4.png",h=function(){var t=Object(c.useState)(""),e=Object(d.a)(t,2),n=e[0],o=e[1],a=Object(c.useState)([]),s=Object(d.a)(a,2),i=s[0],h=s[1],g=Object(c.useState)([]),j=Object(d.a)(g,2),m=j[0],p=j[1],f=new Date,b="".concat(f.getDate(),"/").concat(f.getMonth()+1,"/").concat(f.getFullYear()),O="".concat(f.getHours(),"H:").concat(f.getMinutes(),"M"),x=function(){r.a.post("/api/SaveScore",{score:document.getElementById("game_mark").value,address:n,date:b}).then((function(t){})).catch((function(t){console.log(t)})),r.a.post("/api/getCount",{date:b}).then((function(t){h(t.data.addresses),p(t.data.counts)})).catch((function(t){console.log(t)})),setTimeout(v,1e3)},v=function(){window.ethereum&&window.ethereum.request({method:"eth_requestAccounts"}).then((function(t){t.length&&(o(t[0]),window.sessionStorage.setItem("connect","1"),r.a.post("/api/saveAddress",{address:t[0],dater:b}).then((function(t){})).catch((function(t){console.log(t)})),r.a.post("/api/getCount",{date:b}).then((function(t){h(t.data.addresses),p(t.data.counts)})).catch((function(t){console.log(t)})))})),setTimeout(x,1e3)};return setInterval((function(){"true"==document.getElementById("game_state").value&&(x(),r.a.post("/api/SaveStar",{star:document.getElementById("starcount").value,address:n,date:b,date1:O}).then((function(t){console.log(t)})).catch((function(t){console.log(t)})),r.a.post("/api/ESaveStar",{star:document.getElementById("starcount").value,address:n}).then((function(t){console.log(t)})).catch((function(t){console.log(t)})),document.getElementById("starcount").value=0,r.a.post("/api/EverySaveScore",{score:document.getElementById("game_mark").value,address:n,date:b}).then((function(t){console.log(t)})).catch((function(t){console.log(t)})),r.a.post("/api/getCount",{date:b}).then((function(t){h(t.data.addresses),p(t.data.counts)})).catch((function(t){console.log(t)})),document.getElementById("game_state").value="false")}),1),Object(c.useEffect)((function(){r.a.post("/api/getCount",{date:b}).then((function(t){h(t.data.addresses),p(t.data.counts)})).catch((function(t){console.log(t)})),r.a.post("/api/deleteCount",{date:b}).then((function(t){console.log(t)})).catch((function(t){console.log(t)}))}),[]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("button",{style:{backgroundColor:"transparent",padding:"10px 30px",borderColor:"blue",borderRadius:"20px",fontSize:"20px",color:"white",marginTop:"15%"},className:"connectbtn",onClick:v,children:[Object(u.jsx)("img",{alt:l,src:l,width:20,height:20,style:{marginRight:10}})," ",n?Object(u.jsx)("span",{children:n.slice(0,5)+"..."+n.slice(-2)}):Object(u.jsx)("span",{children:"CONNECT"})," "]}),Object(u.jsxs)("table",{style:{width:"50%",marginTop:"80px",marginLeft:"25%"},children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"Address"}),Object(u.jsx)("th",{children:"Counts"})]})}),Object(u.jsxs)("tbody",{children:[Object(u.jsx)("td",{children:i.map((function(t){return Object(u.jsx)("tr",{children:t.slice(0,5)+"..."+t.slice(-3)})}))}),Object(u.jsx)("td",{children:m.map((function(t){return Object(u.jsx)("tr",{children:t})}))})]})]})]})};function g(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(h,{})})}s.a.render(Object(u.jsx)(o.a.StrictMode,{children:Object(u.jsx)(g,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.1265cc20.chunk.js.map