(this.webpackJsonpprototype=this.webpackJsonpprototype||[]).push([[0],{185:function(e,t,a){"use strict";a.r(t);var o=a(0),i=a(1),l=a(55),s=a.n(l),n=(a(83),a(2)),r=(a(84),a.p+"static/media/overall-statistics.29c65aa3.csv"),c=a.p+"static/media/hospital-data.cfebbe68.csv",b=a(37),d=a(3);function h(e){var t=e.overall,a=e.hospital,l=e.labelMonth,s=e.label_daily,r=Object(i.useState)(),c=Object(n.a)(r,2),b=c[0],h=c[1],f=Object(i.useState)(),u=Object(n.a)(f,2),j=u[0],g=u[1],p=Object(i.useState)(),x=Object(n.a)(p,2),v=x[0],O=x[1],C=Object(i.useState)(),k=Object(n.a)(C,2),y=k[0],m=k[1];Object(i.useEffect)((function(){var e=[0,0,0,0,0,0,0];t.forEach((function(t){var a=parseInt(t.Tarikh.split("/")[1]-6);e[a]+=parseInt(t.kesPositifBaru)}));var o=[0,0,0,0,0,0,0];a.forEach((function(e){var t=parseInt(e.Tarikh.split("/")[1]-6);o[t]+=parseInt(e.discajJumlah)})),O({labels:l,datasets:[{type:"line",fill:!1,yAxisID:"l",tension:0,label:"New Postive Cases",data:e,backgroundColor:"rgba(255, 211, 105, 1)",borderColor:"rgba(255, 211, 105, 1)"},{type:"bar",fill:!0,yAxisID:"r",label:"New Recovery",data:o,backgroundColor:"rgba(22, 199, 154, 1)",borderColor:"rgba(22, 199, 154, 1)"}]}),h(!1),m("New Positive Cases vs")}),[]);var I={onClick:function(e,a){if(a.length>0){var o=a[0]._chart,i=o.getElementAtEvent(e)[0],n=o.data.labels[i._index],r=o.data.datasets[i._datasetIndex],c=l.indexOf(n);console.log(r.label+c),0==i._datasetIndex&&(!function(e,a){O();var o=s(a),i=[];t.forEach((function(e){parseInt(e.Tarikh.split("/")[1])-6==a&&i.push(e.kesPositifBaru)})),h(!0),g({labels:o,datasets:[{type:"bar",fill:!1,label:e,data:i,backgroundColor:"rgba(255, 211, 105, 1)"}]})}(r.label,c),m("".concat(r.label," for ").concat(n)))}},title:{display:!0,text:"New Postive Cases vs New Recovery",fontColor:"white",fontSize:17},legend:{labels:{fontColor:"white"},position:"bottom"},scales:{yAxes:[{id:"l",position:"left",ticks:{beginAtZero:!0,fontColor:"white"},gridLines:{color:"#393e46"}},{id:"r",position:"right",ticks:{beginAtZero:!0,fontColor:"white"},gridLines:{color:"#393e46"}}],xAxes:[{ticks:{beginAtZero:!0,fontColor:"white"},gridLines:{color:"#393e46"}}]}},w={title:{display:!0,text:y,fontColor:"white",fontSize:17},legend:{labels:{fontColor:"white"},position:"bottom"},scales:{yAxes:[{ticks:{beginAtZero:!0,fontColor:"white"},gridLines:{color:"#393e46"}}],xAxes:[{ticks:{beginAtZero:!0,fontColor:"white"},gridLines:{color:"#393e46"}}]}};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"default-chart-container",style:{display:b?"none":"block",width:"550px"},children:v&&Object(o.jsx)(d.Bar,{height:250,data:v,options:I})}),Object(o.jsxs)("div",{className:"default-chart-container",style:{display:b?"block":"none",width:"550px"},children:[j&&Object(o.jsx)(d.Bar,{height:250,data:j,options:w}),Object(o.jsx)("div",{className:"monthly",onClick:function(){return function(){g();var e=[0,0,0,0,0,0,0],o=[0,0,0,0,0,0,0];t.forEach((function(t){var a=parseInt(t.Tarikh.split("/")[1]-6);e[a]+=parseInt(t.kesPositifBaru)})),o=[0,0,0,0,0,0,0],a.forEach((function(e){var t=parseInt(e.Tarikh.split("/")[1]-6);o[t]+=parseInt(e.discajJumlah)})),O({labels:l,datasets:[{type:"line",fill:!1,yAxisID:"l",tension:0,label:"New Postive Cases",data:e,backgroundColor:"rgba(255, 211, 105, 1)",borderColor:"rgba(255, 211, 105, 1)"},{type:"bar",fill:!0,yAxisID:"r",label:"New Recovery",data:o,backgroundColor:"rgba(22, 199, 154, 1)",borderColor:"rgba(22, 199, 154, 1)"}]}),m("New Positive Cases"),h(!1)}()},style:{color:"white"},children:"Monthly"})]})]})}function f(e){var t=e.overall,a=e.labelMonth,l=e.label_daily,s=Object(i.useState)(),r=Object(n.a)(s,2),c=r[0],b=r[1],h=Object(i.useState)(),f=Object(n.a)(h,2),u=f[0],j=f[1],g=Object(i.useState)(),p=Object(n.a)(g,2),x=p[0],v=p[1],O=Object(i.useState)(),C=Object(n.a)(O,2),k=C[0],y=C[1];Object(i.useEffect)((function(){var e=[],o=[],i=[0,0,0,0,0,0,0];t.forEach((function(t){var a=parseInt(t.Tarikh.split("/")[1]-6);e[a]=t.jumlahKesPUI,o[a]=t.kesPUINegatif,i[a]+=parseInt(t.kesPUIBaru)})),i.forEach((function(e,t){i[t]=parseInt(e/l(t).length)})),v({labels:a,datasets:[{type:"line",fill:!0,yAxisID:"l",label:"New Cases",data:i,backgroundColor:"rgba(187, 34, 5, 1)",borderColor:"rgba(187, 34, 5, 1)"},{type:"line",fill:!0,yAxisID:"r",label:"Negatives",data:o,backgroundColor:"rgba(22, 199, 154, 1)",borderColor:"rgba(22, 199, 154, 1)"},{type:"line",fill:!0,label:"Total",data:e,yAxisID:"r",backgroundColor:"rgba(255, 123, 84, 1)",borderColor:"rgba(255, 123, 84, 1)"}]}),b(!1)}),[]);var m={onClick:function(e,o){if(o.length>0){var i=o[0]._chart,s=i.getElementAtEvent(e)[0],n=i.data.labels[s._index],r=i.data.datasets[s._datasetIndex],c=a.indexOf(n);!function(e,a){v(),console.log(e);var o=[];switch(e){case"New Cases":t.forEach((function(e){parseInt(e.Tarikh.split("/")[1])-6==a&&o.push(e.kesPUIBaru)}));break;case"Negatives":t.forEach((function(e){parseInt(e.Tarikh.split("/")[1])-6==a&&o.push(e.kesPUINegatif)}));break;case"Total":t.forEach((function(e){parseInt(e.Tarikh.split("/")[1])-6==a&&o.push(e.jumlahKesPUI)}))}var i=l(a);b(!0),j({labels:i,datasets:[{type:"bar",fill:!1,label:e,data:o,backgroundColor:"rgba(255, 123, 84, 1)",borderColor:"rgba(255, 123, 84, 1)"}]})}(r.label,c),y("".concat(r.label," for ").concat(n))}},title:{display:!0,text:"Person Under Investigations (PUI)",fontColor:"white",fontSize:17},legend:{labels:{fontColor:"white"},position:"bottom"},scales:{yAxes:[{type:"linear",id:"r",position:"right",ticks:{beginAtZero:!0,fontColor:"white"},gridLines:{color:"#393e46"}},{type:"linear",id:"l",position:"left",ticks:{beginAtZero:!0,fontColor:"white"},gridLines:{color:"#393e46"}}],xAxes:[{ticks:{beginAtZero:!0,fontColor:"white"},gridLines:{color:"#393e46"}}]}},I={title:{display:!0,text:k,fontColor:"white",fontSize:17},legend:{labels:{fontColor:"white"},position:"bottom"},scales:{yAxes:[{type:"linear",id:"l",position:"left",ticks:{beginAtZero:!0,fontColor:"white"},gridLines:{color:"#393e46"}}],xAxes:[{ticks:{beginAtZero:!0,fontColor:"white"},gridLines:{color:"#393e46"}}]}};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"default-chart-container",style:{display:c?"none":"block",width:"550px"},children:x&&Object(o.jsx)(d.Line,{height:250,data:x,options:m})}),Object(o.jsxs)("div",{className:"default-chart-container",style:{display:c?"block":"none",width:"550px"},children:[u&&Object(o.jsx)(d.Line,{height:250,data:u,options:I}),Object(o.jsx)("div",{className:"monthly",onClick:function(){return function(){var e=[],o=[],i=[0,0,0,0,0,0,0];t.forEach((function(t){var a=parseInt(t.Tarikh.split("/")[1]-6);e[a]=t.jumlahKesPUI,o[a]=t.kesPUINegatif,i[a]+=parseInt(t.kesPUIBaru)})),i.forEach((function(e,t){i[t]=parseInt(e/l(t).length)})),v({labels:a,datasets:[{type:"line",fill:!0,yAxisID:"l",label:"New Cases",data:i,backgroundColor:"rgba(187, 34, 5, 1)",borderColor:"rgba(187, 34, 5, 1)"},{type:"line",fill:!0,yAxisID:"r",label:"Negatives",data:o,backgroundColor:"rgba(50, 224, 196, 1)",borderColor:"rgba(50, 224, 196, 1)"},{type:"line",fill:!0,label:"Total",data:e,yAxisID:"r",backgroundColor:"rgba(255, 123, 84, 1)",borderColor:"rgba(255, 123, 84, 1)"}]}),b(!1)}()},style:{color:"white"},children:"Monthly"})]})]})}var u=a(36);function j(e){var t=e.hospital,a=Object(i.useState)(),l=Object(n.a)(a,2),s=l[0],r=l[1];Object(i.useEffect)((function(){var e=[0,0,0,0,0];t.forEach((function(t){e[0]=t.matiKCH,e[1]=t.matiBNTL,e[2]=t.matiMIRI,e[3]=t.matiSGB,e[4]=t.matiSIBU})),r({maintainAspectRatio:!0,responsive:!0,labels:["Kuching","Bintulu","Miri","Sg. Buloh","Sibu"],datasets:[{data:e,backgroundColor:["#f0a500","#006a71","#e97171","#5d54a4","#433520"],hoverBackgroundColor:["#f0a500","#006a71","#e97171","#5d54a4","#433520"]}]})}));return Object(o.jsx)("div",{style:{width:"500px",height:"500px",display:"flex",alignItems:"center"},children:Object(o.jsx)(d.Doughnut,{height:200,data:Object(u.a)({},s),options:Object(u.a)({},{title:{display:!0,text:"Death Cases",fontColor:"white",fontSize:17},legend:{display:!0,position:"right",labels:{fontSize:17,fontColor:"white"}},elements:{arc:{borderWidth:0}}})})})}function g(e){var t=e.overall,a=e.labelMonth,l=e.label_daily,s=Object(i.useState)(),r=Object(n.a)(s,2),c=r[0],b=r[1],h=Object(i.useState)(),f=Object(n.a)(h,2),u=f[0],j=f[1],g=Object(i.useState)(),p=Object(n.a)(g,2),x=p[0],v=p[1],O=Object(i.useState)(),C=Object(n.a)(O,2),k=C[0],y=C[1];Object(i.useEffect)((function(){var e=[0,0,0,0,0,0,0];t.forEach((function(t){var a=parseInt(t.Tarikh.split("/")[1]-6);console.log(t),e[a]+=parseInt(t.kesPUIPending)})),v({labels:a,datasets:[{fill:!1,label:"Pending PUI",data:e,backgroundColor:"rgba(22, 199, 154, 1)"}]}),b(!1),y("Total Pending PUI")}),[]);var m={onClick:function(e,o){var i=o[0]._chart,s=i.getElementAtEvent(e)[0],n=i.data.labels[s._index],r=i.data.datasets[s._datasetIndex],c=a.indexOf(n);console.log(r.label+c),0==s._datasetIndex&&(!function(e,a){v();var o=l(a),i=[];t.forEach((function(e){parseInt(e.Tarikh.split("/")[1])-6==a&&i.push(e.kesPUIPending)})),b(!0),j({labels:o,datasets:[{fill:!1,label:e,data:i,backgroundColor:"rgba(22, 199, 154, 1)"}]})}(r.label,c),y("".concat(r.label," for ").concat(n)))},title:{display:!0,text:"Total Pending PUI",fontColor:"white",fontSize:17},legend:{labels:{fontColor:"white"},position:"bottom"},scales:{yAxes:[{ticks:{beginAtZero:!0,fontColor:"white"},gridLines:{color:"#393e46"}}],xAxes:[{ticks:{beginAtZero:!0,fontColor:"white"},gridLines:{color:"#393e46"}}]}},I={title:{display:!0,text:k,fontColor:"white",fontSize:17},legend:{labels:{fontColor:"white"},position:"bottom"},scales:{yAxes:[{ticks:{beginAtZero:!0,fontColor:"white"},gridLines:{color:"#393e46"}}],xAxes:[{ticks:{beginAtZero:!0,fontColor:"white"},gridLines:{color:"#393e46"}}]}};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"default-chart-container",style:{display:c?"none":"block",width:"50%",alignItems:"center"},children:x&&Object(o.jsx)(d.HorizontalBar,{height:175,data:x,options:m})}),Object(o.jsxs)("div",{className:"default-chart-container",style:{display:c?"block":"none",width:"50%",alignItems:"center"},children:[u&&Object(o.jsx)(d.HorizontalBar,{height:175,data:u,options:I}),Object(o.jsx)("div",{className:"monthly",onClick:function(){return function(){j();var e=[];t.forEach((function(t){var a=parseInt(t.Tarikh.split("/")[1]-6);e[a]=t.kesPUIPending})),v({labels:a,datasets:[{fill:!1,label:"Pending PUI",data:e,backgroundColor:"rgba(22, 199, 154, 1)"}]}),y("Total Pending PUI"),b(!1)}()},style:{color:"white"},children:"Monthly"})]})]})}function p(e){var t=e.hospital,a=Object(i.useState)(),l=Object(n.a)(a,2),s=l[0],r=l[1];Object(i.useEffect)((function(){var e=[];t.forEach((function(t){e[0]=t.dirawatKCH,e[1]=t.dirawatBNTL,e[2]=t.dirawatMIRI,e[3]=t.dirawatSGB,e[4]=t.dirawatSIBU})),r({maintainAspectRatio:!0,responsive:!0,labels:["Kuching","Bintulu","Miri","Sg. Buloh","Sibu"],datasets:[{data:e,backgroundColor:["#f0a500","#006a71","#e97171","#5d54a4","#433520"],hoverBackgroundColor:["#f0a500","#006a71","#e97171","#5d54a4","#433520"]}]})}),[]);return Object(o.jsx)("div",{style:{width:"500px",height:"500px",display:"flex",justifyContent:"start",alignItems:"center"},children:Object(o.jsx)(d.Pie,{height:200,data:s,options:{title:{display:!0,text:"Active Cases in Hospitals",fontColor:"white",fontSize:17},legend:{display:!0,position:"right",labels:{fontSize:17,fontColor:"white"}},elements:{arc:{borderWidth:0}}}})})}function x(e){var t=e.overall,a=e.labelMonth,l=e.label_daily,s=Object(i.useState)(),r=Object(n.a)(s,2),c=r[0],b=r[1],h=Object(i.useState)(),f=Object(n.a)(h,2),u=f[0],j=f[1],g=Object(i.useState)(),p=Object(n.a)(g,2),x=p[0],v=p[1],O=Object(i.useState)(),C=Object(n.a)(O,2),k=C[0],y=C[1];Object(i.useEffect)((function(){var e=[0,0,0,0,0,0,0];t.forEach((function(t){var a=parseInt(t.Tarikh.split("/")[1]-6);console.log(t),e[a]=parseInt(t.jumlahKesPositif)})),v({labels:a,datasets:[{fill:!0,label:"Positive Cases",data:e,backgroundColor:"rgba(22, 199, 154, 1)",borderColor:"rgba(22, 199, 154, 1)"}]}),b(!1),y("Total Positive Cases")}),[]);var m={onClick:function(e,o){if(o.length>0){var i=o[0]._chart,s=i.getElementAtEvent(e)[0],n=i.data.labels[s._index],r=i.data.datasets[s._datasetIndex],c=a.indexOf(n);console.log(r.label+c),0==s._datasetIndex&&(!function(e,a){v();var o=l(a),i=[];t.forEach((function(e){parseInt(e.Tarikh.split("/")[1])-6==a&&i.push(e.jumlahKesPositif)})),b(!0),j({labels:o,datasets:[{fill:!0,label:e,data:i,backgroundColor:"rgba(22, 199, 154, 1)",borderColor:"rgba(22, 199, 154, 1)"}]})}(r.label,c),y("".concat(r.label," for ").concat(n)))}},title:{display:!0,text:"Total Positive Cases",fontColor:"white",fontSize:17},legend:{labels:{fontColor:"white"},position:"bottom"},scales:{yAxes:[{ticks:{beginAtZero:!0,fontColor:"white"},gridLines:{color:"#393e46"}}],xAxes:[{ticks:{beginAtZero:!0,fontColor:"white"},gridLines:{color:"#393e46"}}]}},I={title:{display:!0,text:k,fontColor:"white",fontSize:17},legend:{labels:{fontColor:"white"},position:"bottom"},scales:{yAxes:[{ticks:{beginAtZero:!0,fontColor:"white"},gridLines:{color:"#393e46"}}],xAxes:[{ticks:{beginAtZero:!0,fontColor:"white"},gridLines:{color:"#393e46"}}]}};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"default-chart-container",style:{display:c?"none":"block",width:"50%",alignItems:"center"},children:x&&Object(o.jsx)(d.Line,{height:175,data:x,options:m})}),Object(o.jsxs)("div",{className:"default-chart-container",style:{display:c?"block":"none",width:"50%",alignItems:"center"},children:[u&&Object(o.jsx)(d.Line,{height:175,data:u,options:I}),Object(o.jsx)("div",{className:"monthly",onClick:function(){return function(){j();var e=[];t.forEach((function(t){var a=parseInt(t.Tarikh.split("/")[1]-6);e[a]=t.jumlahKesPositif})),v({labels:a,datasets:[{fill:!0,label:"Positive Cases",data:e,backgroundColor:"rgba(22, 199, 154, 1)",borderColor:"rgba(22, 199, 154, 1)"}]}),y("Total Positive Cases"),b(!1)}()},style:{color:"white"},children:"Monthly"})]})]})}var v=function(){var e=Object(i.useState)(!0),t=Object(n.a)(e,2),a=t[0],l=t[1],s=Object(i.useState)(),d=Object(n.a)(s,2),u=d[0],v=d[1],O=Object(i.useState)(),C=Object(n.a)(O,2),k=C[0],y=C[1],m=Object(i.useState)(),I=Object(n.a)(m,2),w=I[0],A=I[1],N=Object(i.useState)(),P=Object(n.a)(N,2),S=P[0],E=P[1],T=Object(i.useState)(),L=Object(n.a)(T,2),U=L[0],B=L[1],_=Object(i.useState)(),D=Object(n.a)(_,2),Z=D[0],M=D[1],z=Object(i.useState)(),K=Object(n.a)(z,2),J=K[0],R=K[1],H=Object(i.useState)(),F=Object(n.a)(H,2),G=F[0],V=F[1],W=["June","July","August","September","October","November","December"];function q(e){var t=0,a=[];switch(e){case 0:t=30;break;case 1:case 2:t=31;break;case 3:t=30;break;case 4:t=31;break;case 5:t=30;break;case 6:t=31}for(var o=1;o<t+1;o++)a.push(o);return a}function Q(e){switch(A(!1),e){case"tc":B(!0),M(!1),R(!1),V(!1);break;case"ac":B(!1),M(!0),R(!1),V(!1);break;case"jkm":B(!1),V(!0),M(!1),R(!1);break;case"ppui":B(!1),R(!0),M(!1),V(!1)}}return Object(i.useEffect)((function(){a&&Promise.all([Object(b.a)(r),Object(b.a)(c)]).then((function(e){var t={tc:0,it:0,npui:0,ppui:0,jkm:0},a=e[0][e[0].length-1],o=e[1][e[1].length-1];t.tc=a.jumlahKesPositif,t.it=o.dirawatJumlah,t.npui=a.kesPUINegatif,e[0].forEach((function(e){t.ppui+=parseInt(e.kesPUIPending)})),t.jkm=a.jumlahKesMati,E(t),v(e[0]),y(e[1]),A(!0),l(!1)}))}),[]),Object(o.jsxs)("div",{className:"container lilita",children:[Object(o.jsxs)("div",{className:"brand-name",onClick:function(){return A(!0),B(!1),R(!1),M(!1),void V(!1)},children:["Sarawak COVID-19 Data Visualization Dashboard",Object(o.jsx)("div",{className:"brand-date",children:"(June 2020 - December 2020)"})]}),Object(o.jsxs)("div",{className:"top-nav",children:[Object(o.jsxs)("div",{className:"button",onClick:function(){return Q("tc")},children:[Object(o.jsx)("div",{className:"value",style:{backgroundColor:"rgb(255, 242, 0)"},children:S&&S.tc}),"Total Cases"]}),Object(o.jsxs)("div",{className:"button",onClick:function(){return Q("ac")},children:[Object(o.jsx)("div",{className:"value",style:{backgroundColor:"rgb(255, 127, 39"},children:S&&S.it}),"Active Cases"]}),Object(o.jsxs)("div",{className:"button",onClick:function(){return Q("jkm")},children:[Object(o.jsx)("div",{className:"value",style:{backgroundColor:"rgb(237, 28, 36)"},children:S&&S.jkm}),"Total Death"]}),Object(o.jsxs)("div",{className:"button",onClick:function(){return Q("ppui")},children:[Object(o.jsx)("div",{className:"value",style:{backgroundColor:"#a6a9b6"},children:S&&S.ppui}),"Pending PUI"]})]}),Object(o.jsxs)("div",{className:"vars",style:{display:w?"none":"flex",width:"100%",alignItems:"center",justifyContent:"center"},children:[G&&Object(o.jsx)(j,{hospital:k}),J&&Object(o.jsx)(g,{overall:u,labelMonth:W,label_daily:q}),Z&&Object(o.jsx)(p,{hospital:k}),U&&Object(o.jsx)(x,{overall:u,labelMonth:W,label_daily:q})]}),Object(o.jsxs)("div",{className:"default",style:{display:w?"flex":"none",flexDirection:"column"},children:[Object(o.jsxs)("div",{className:"row-1",style:{display:"flex",flexDirection:"row"},children:[Object(o.jsx)("div",{className:"default-chart new-cases",children:w&&Object(o.jsx)(h,{overall:u,hospital:k,labelMonth:W,label_daily:q})}),Object(o.jsx)("div",{className:"default-chart pui",children:w&&Object(o.jsx)(f,{overall:u,labelMonth:W,label_daily:q})})]}),Object(o.jsx)("div",{className:"row-2",style:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}})]})]})};s.a.render(Object(o.jsx)(v,{}),document.getElementById("root"))},83:function(e,t,a){},84:function(e,t,a){}},[[185,1,2]]]);
//# sourceMappingURL=main.0559f6a4.chunk.js.map