(this["webpackJsonptest-graphs"]=this["webpackJsonptest-graphs"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,a,t){e.exports=t(34)},,,,,function(e,a,t){},function(e,a,t){},,,,,,function(e,a,t){},function(e,a,t){},,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(13),c=t.n(r),s=(t(19),t(4)),o=t(5),i=t(7),m=t(6),u=t(8),p=(t(20),t(2)),d=t(3),E=function(){return l.a.createElement("nav",{className:"topBar"},l.a.createElement("p",null,"Diagnostic Tool"),l.a.createElement("div",null,l.a.createElement("p",null,"Logged in as General User "),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("button",null,l.a.createElement(p.a,{icon:d.j}))),l.a.createElement("li",null,l.a.createElement("button",null,l.a.createElement(p.a,{icon:d.c}))),l.a.createElement("li",null,l.a.createElement("button",null,l.a.createElement(p.a,{icon:d.h}))),l.a.createElement("li",null,l.a.createElement("button",null,l.a.createElement(p.a,{icon:d.i}))),l.a.createElement("li",null,l.a.createElement("button",null,l.a.createElement(p.a,{icon:d.a}))))))},h=(t(26),function(){return l.a.createElement("nav",{className:"sideBar"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("button",null,l.a.createElement(p.a,{icon:d.l}))),l.a.createElement("li",null,l.a.createElement("button",null,l.a.createElement(p.a,{icon:d.b}))),l.a.createElement("li",null,l.a.createElement("button",null,l.a.createElement(p.a,{icon:d.g}))),l.a.createElement("li",null,l.a.createElement("button",null,l.a.createElement(p.a,{icon:d.k}))),l.a.createElement("li",null,l.a.createElement("button",null,l.a.createElement(p.a,{icon:d.d})))))}),v=(t(27),function(){return l.a.createElement("section",{className:"headingWrapper"},l.a.createElement("h1",null,"Performance Management"),l.a.createElement("div",{className:"subHeadingWrapper"},l.a.createElement("div",{className:"subHeading"},l.a.createElement(p.a,{icon:d.e,size:"2x"}),l.a.createElement("h2",null,"Diagnostic Tool")),l.a.createElement("button",null,l.a.createElement(p.a,{icon:d.l}))))}),f=t(9),y=t.n(f),b=(t(29),function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).handleClick=function(e){var a=document.querySelector(".clickedChart");null!==a&&a.classList.remove("clickedChart");var t=document.getElementById(e.target.id);null!==t&&t.classList.add("clickedChart")},n.state={optionsRadial:{series:[n.props.score],labels:["N/A"],title:{text:n.props.name,align:"center",style:{color:"#2d71bf",fontSize:"18px"}},plotOptions:{radialBar:{dataLabels:{showOn:"always",name:{offsetY:20,show:!0,color:"#888",fontSize:"13px"},value:{formatter:function(e){return"".concat(e,"%")},offsetY:-10,color:"#4e9ff3",fontSize:"20px",show:!0}}}},chart:{offsetX:-60}}},n}return Object(o.a)(t,[{key:"render",value:function(){var e=this.props,a=e.name,t=e.sample,n=e.updateChart;return l.a.createElement("div",{className:"circle",id:a,onClick:this.handleClick},l.a.createElement(y.a,{options:this.state.optionsRadial,series:this.state.optionsRadial.series,type:"radialBar",width:"240",onClick:function(){n(a)}}),l.a.createElement("p",null,"Sample: ",t))}}]),t}(n.Component)),g=(t(30),function(){return l.a.createElement("div",{className:"filterWrapper"},l.a.createElement("h4",null,"Filters"),l.a.createElement("div",{className:"filterTextContainer"},l.a.createElement("div",{className:"infoFlex"},l.a.createElement("div",{className:"square"}),l.a.createElement("p",null,"All CQA Results"),l.a.createElement(p.a,{icon:d.f})),l.a.createElement("div",{className:"infoFlex"},l.a.createElement("div",{className:"square"}),l.a.createElement("p",null,"CQAs with Closed Loop"),l.a.createElement(p.a,{icon:d.f}))))}),C=(t(31),function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).state={gaugeData:[{name:"Quality Score",score:72,vsly:null,sample:133},{name:"Basics",score:71,vsly:null,sample:133},{name:"Interaction",score:68,vsly:null,sample:133},{name:"Expertise",score:70,vsly:null,sample:133},{name:"Process",score:75,vsly:null,sample:133},{name:"Knowledge",score:76,vsly:null,sample:133}]},n}return Object(o.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"circleChartSection"},l.a.createElement(g,null),l.a.createElement("div",{className:"circleChartContainer"},this.state.gaugeData.map((function(a,t){return l.a.createElement(b,{key:e.state.gaugeData[t].name,score:e.state.gaugeData[t].score,name:e.state.gaugeData[t].name,sample:e.state.gaugeData[t].sample,updateChart:e.props.updateChart})}))))}}]),t}(n.Component)),O=(t(32),function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).changeColor=function(e){var a=document.querySelector(".clickedButton");null!==a&&a.classList.remove("clickedButton"),document.getElementById(e.target.id).classList.add("clickedButton")},e}return Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"areaText"},l.a.createElement("h3",null,this.props.chosenObject," Trend"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("button",{className:"time",id:"day",onClick:this.changeColor},"Day")),l.a.createElement("li",null,l.a.createElement("button",{className:"time",id:"week",onClick:this.changeColor},"Week")),l.a.createElement("li",null,l.a.createElement("button",{className:"time",id:"month",onClick:this.changeColor},"Month")),l.a.createElement("li",null,l.a.createElement("button",{className:"time",id:"quarter",onClick:this.changeColor},"Quarter")),l.a.createElement("li",null,l.a.createElement("button",{className:"time",id:"half",onClick:this.changeColor},"Half")),l.a.createElement("li",null,l.a.createElement("button",{className:"time",id:"year",onClick:this.changeColor},"Year"))))}}]),t}(n.Component)),j=(t(33),function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).updateChart=function(e){var a=Object(u.a)({},n.state.areaData);for(var t in a)t===e&&function(){var e=[],l=[];a[t].map((function(a){return e.push(a.score)&&l.push(a.date)})),n.setState({chosenObject:t,options:Object(u.a)(Object(u.a)({},n.state.options),{},{xaxis:Object(u.a)(Object(u.a)({},n.state.options.xaxis),{},{categories:l})}),series:[Object(u.a)(Object(u.a)({},n.state.series),{},{data:e})]})}()},n.state={areaData:{"Quality Score":[{date:"Apr",sample:21,score:75,vsly:0},{date:"May",sample:110,score:71,vsly:0},{date:"Jun",sample:2,score:62,vsly:0},{date:"Jul",sample:0,score:0,vsly:0}],Basics:[{date:"Apr",sample:29,score:78,vsly:0},{date:"May",sample:66,score:62,vsly:0},{date:"Jun",sample:2,score:42,vsly:0},{date:"Jul",sample:51,score:63,vsly:0}],Interaction:[{date:"Apr",sample:54,score:92,vsly:0},{date:"May",sample:110,score:43,vsly:0},{date:"Jun",sample:2,score:34,vsly:0},{date:"Jul",sample:0,score:0,vsly:0}],Expertise:[{date:"Apr",sample:29,score:88,vsly:0},{date:"May",sample:55,score:61,vsly:0},{date:"Jun",sample:26,score:35,vsly:0},{date:"Jul",sample:121,score:46,vsly:0}],Process:[{date:"Apr",sample:31,score:85,vsly:0},{date:"May",sample:66,score:77,vsly:0},{date:"Jun",sample:23,score:57,vsly:0},{date:"Jul",sample:0,score:0,vsly:0}],Knowledge:[{date:"Apr",sample:31,score:74,vsly:0},{date:"May",sample:100,score:76,vsly:0},{date:"Jun",sample:45,score:33,vsly:0},{date:"Jul",sample:110,score:89,vsly:0}]},chosenObject:"",options:{fill:{type:"gradient",gradient:{shadeIntensity:1,opacityFrom:1,opacityTo:1,stops:[0,100]}},xaxis:{categories:[]},yaxis:{show:!1}},series:[{data:[]}]},n}return Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("main",null,l.a.createElement(E,null),l.a.createElement(h,null),l.a.createElement(v,null),l.a.createElement("div",{className:"wrapper"},l.a.createElement("div",{className:"chartsContainer"},l.a.createElement(C,{updateChart:this.updateChart}),l.a.createElement("div",{className:"areaChart"},l.a.createElement(O,{chosenObject:this.state.chosenObject}),l.a.createElement(y.a,{options:this.state.options,series:this.state.series,type:"area",height:"250",width:"500"})))))}}]),t}(n.Component)),k=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(j,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[14,1,2]]]);
//# sourceMappingURL=main.9eeb85ec.chunk.js.map