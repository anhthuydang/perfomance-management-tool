(this["webpackJsonptest-graphs"]=this["webpackJsonptest-graphs"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,a){e.exports=a(34)},,,,,function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(13),r=a.n(c),s=(a(19),a(5)),o=a(6),i=a(8),u=a(7),m=a(4),p=(a(20),a(2)),d=a(3),E=function(){return l.a.createElement("nav",{className:"topBar"},l.a.createElement("p",null,"Diagnostic Tool"),l.a.createElement("div",null,l.a.createElement("p",null,"Logged in as General User |"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("button",null,l.a.createElement(p.a,{icon:d.j}))),l.a.createElement("li",null,l.a.createElement("button",null,l.a.createElement(p.a,{icon:d.c}))),l.a.createElement("li",null,l.a.createElement("button",null,l.a.createElement(p.a,{icon:d.h}))),l.a.createElement("li",null,l.a.createElement("button",null,l.a.createElement(p.a,{icon:d.i}))),l.a.createElement("li",null,l.a.createElement("button",null,l.a.createElement(p.a,{icon:d.a}))))))},h=(a(26),function(){return l.a.createElement("nav",{className:"sideBar"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("button",null,l.a.createElement(p.a,{icon:d.l}))),l.a.createElement("li",null,l.a.createElement("button",null,l.a.createElement(p.a,{icon:d.b}))),l.a.createElement("li",null,l.a.createElement("button",null,l.a.createElement(p.a,{icon:d.g}))),l.a.createElement("li",null,l.a.createElement("button",null,l.a.createElement(p.a,{icon:d.k}))),l.a.createElement("li",null,l.a.createElement("button",null,l.a.createElement(p.a,{icon:d.d})))))}),v=(a(27),function(){return l.a.createElement("section",{className:"headingWrapper"},l.a.createElement("h1",null,"Performance Management"),l.a.createElement("div",{className:"subHeadingWrapper"},l.a.createElement("div",{className:"subHeading"},l.a.createElement(p.a,{icon:d.e,size:"2x"}),l.a.createElement("h2",null,"Diagnostic Tool")),l.a.createElement("button",null,l.a.createElement(p.a,{icon:d.l}))))}),b=a(9),f=a.n(b),y=(a(29),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={optionsRadial:{series:[n.props.score],labels:["N/A"],title:{text:n.props.name,align:"center",style:{color:"#2d71bf",fontSize:"18px"}},plotOptions:{radialBar:{dataLabels:{showOn:"always",name:{offsetY:20,show:!0,color:"#716765",fontSize:"13px"},value:{formatter:function(e){return"".concat(e,"%")},offsetY:-10,color:"#4e9ff3",fontSize:"20px",show:!0}}}},chart:{offsetX:-60}}},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=e.name,a=e.sample,n=e.updateChart;return l.a.createElement("div",{className:"circle",id:t,onClick:this.handleClick},l.a.createElement(f.a,{options:this.state.optionsRadial,series:this.state.optionsRadial.series,type:"radialBar",width:"200%",onClick:function(){n(t)}}),l.a.createElement("p",null,"Sample: ",a))}}]),a}(n.Component)),g=(a(30),function(){return l.a.createElement("div",{className:"filterWrapper"},l.a.createElement("h4",null,"Filters"),l.a.createElement("div",{className:"filterTextContainer"},l.a.createElement("div",{className:"infoFlex"},l.a.createElement("div",{className:"square"}),l.a.createElement("p",null,"All CQA Results"),l.a.createElement(p.a,{icon:d.f})),l.a.createElement("div",{className:"infoFlex"},l.a.createElement("div",{className:"square"}),l.a.createElement("p",null,"CQAs with Closed Loop"),l.a.createElement(p.a,{icon:d.f}))))}),O=(a(31),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={gaugeData:[{name:"Quality Score",score:72,vsly:null,sample:133},{name:"Basics",score:71,vsly:null,sample:133},{name:"Interaction",score:68,vsly:null,sample:133},{name:"Expertise",score:70,vsly:null,sample:133},{name:"Process",score:75,vsly:null,sample:133},{name:"Knowledge",score:76,vsly:null,sample:133}]},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"circleChartSection"},l.a.createElement(g,null),l.a.createElement("div",{className:"circleChartContainer"},this.state.gaugeData.map((function(t,a){return l.a.createElement(y,{key:e.state.gaugeData[a].name,score:e.state.gaugeData[a].score,name:e.state.gaugeData[a].name,sample:e.state.gaugeData[a].sample,updateChart:e.props.updateChart})}))))}}]),a}(n.Component)),j=(a(32),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).changeColor=function(e){var t=document.querySelector(".clickedButton");null!==t&&t.classList.remove("clickedButton"),document.getElementById(e.target.id).classList.add("clickedButton")},e}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"areaText"},l.a.createElement("h3",null,this.props.chosenObject," Trend"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("button",{className:"time",id:"day",onClick:this.changeColor},"Day")),l.a.createElement("li",null,l.a.createElement("button",{className:"time",id:"week",onClick:this.changeColor},"Week")),l.a.createElement("li",null,l.a.createElement("button",{className:"time",id:"month",onClick:this.changeColor},"Month")),l.a.createElement("li",null,l.a.createElement("button",{className:"time",id:"quarter",onClick:this.changeColor},"Quarter")),l.a.createElement("li",null,l.a.createElement("button",{className:"time",id:"half",onClick:this.changeColor},"Half")),l.a.createElement("li",null,l.a.createElement("button",{className:"time",id:"year",onClick:this.changeColor},"Year"))))}}]),a}(n.Component)),C=(a(33),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).updateChart=function(e){var t=document.querySelector(".clickedChart");null!==t&&t.classList.remove("clickedChart");var a=document.getElementById(e);null!==a&&a.classList.add("clickedChart");var l=Object(m.a)({},n.state.areaData);for(var c in l)c===e&&function(){var e=[],t=[];l[c].map((function(a){return e.push(a.score)&&t.push(a.date)})),n.setState({chosenObject:c,options:Object(m.a)(Object(m.a)({},n.state.options),{},{xaxis:Object(m.a)(Object(m.a)({},n.state.options.xaxis),{},{categories:t})}),series:[Object(m.a)(Object(m.a)({},n.state.series),{},{data:e})]})}()},n.state={areaData:{"Quality Score":[{date:"Apr",sample:21,score:75,vsly:0},{date:"May",sample:110,score:71,vsly:0},{date:"Jun",sample:2,score:62,vsly:0},{date:"Jul",sample:0,score:0,vsly:0}],Basics:[{date:"Apr",sample:29,score:78,vsly:0},{date:"May",sample:66,score:62,vsly:0},{date:"Jun",sample:2,score:42,vsly:0},{date:"Jul",sample:51,score:63,vsly:0}],Interaction:[{date:"Apr",sample:54,score:92,vsly:0},{date:"May",sample:110,score:43,vsly:0},{date:"Jun",sample:2,score:34,vsly:0},{date:"Jul",sample:0,score:0,vsly:0}],Expertise:[{date:"Apr",sample:29,score:88,vsly:0},{date:"May",sample:55,score:61,vsly:0},{date:"Jun",sample:26,score:35,vsly:0},{date:"Jul",sample:121,score:46,vsly:0}],Process:[{date:"Apr",sample:31,score:85,vsly:0},{date:"May",sample:66,score:77,vsly:0},{date:"Jun",sample:23,score:57,vsly:0},{date:"Jul",sample:0,score:0,vsly:0}],Knowledge:[{date:"Apr",sample:31,score:74,vsly:0},{date:"May",sample:100,score:76,vsly:0},{date:"Jun",sample:45,score:33,vsly:0},{date:"Jul",sample:110,score:89,vsly:0}]},chosenObject:"",options:{fill:{type:"gradient",gradient:{shadeIntensity:1,opacityFrom:1,opacityTo:1,stops:[0,100]}},xaxis:{categories:[]},yaxis:{show:!1},dataLabels:{formatter:function(e){return"".concat(e,"%")}}},series:[{data:[]}]},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=Object(m.a)({},this.state.areaData),t=[],a=[],n=Object.keys(e)[0];Object.values(e)[0].map((function(e){return t.push(e.score)&&a.push(e.date)})),this.setState({chosenObject:n,options:Object(m.a)(Object(m.a)({},this.state.options),{},{xaxis:Object(m.a)(Object(m.a)({},this.state.options.xaxis),{},{categories:a})}),series:[Object(m.a)(Object(m.a)({},this.state.series),{},{data:t})]})}},{key:"render",value:function(){return l.a.createElement("main",null,l.a.createElement(E,null),l.a.createElement(h,null),l.a.createElement(v,null),l.a.createElement("div",{className:"wrapper"},l.a.createElement("div",{className:"chartsContainer"},l.a.createElement(O,{updateChart:this.updateChart}),l.a.createElement("div",{className:"areaChart"},l.a.createElement(j,{chosenObject:this.state.chosenObject}),l.a.createElement(f.a,{options:this.state.options,series:this.state.series,type:"area",height:"250",width:"500"})))))}}]),a}(n.Component)),k=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(C,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[14,1,2]]]);
//# sourceMappingURL=main.940712e9.chunk.js.map