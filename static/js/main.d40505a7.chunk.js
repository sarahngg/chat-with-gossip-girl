(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,a){e.exports=a(30)},25:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),i=a(10),r=a.n(i),o=(a(25),a(1)),l=a(2),c=a(4),p=a(3),d=a(5),u=a(6),h=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return!0===this.props.showDetails?""===this.props.sentBy?n.a.createElement("span",{className:"message-details received"},"Message sent by you | #",this.props.id):n.a.createElement("span",{className:"message-details sent"},"Message sent by ",n.a.createElement("strong",null,this.props.sentBy)," | #",this.props.id):n.a.createElement("div",null)}}]),t}(s.Component),m=function(e){function t(){var e,a;Object(o.a)(this,t);for(var s=arguments.length,n=new Array(s),i=0;i<s;i++)n[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(n)))).handleMouseClick=function(){a.props.toggleDetails(a.props.id)},a.handleDoubleClick=function(){a.props.deleteMessage(a.props.id)},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return!0===this.props.received&&""===this.props.media?n.a.createElement("div",{onClick:this.handleMouseClick},n.a.createElement(h,{sentBy:this.props.name,id:this.props.id,showDetails:this.props.showDetails}),n.a.createElement("div",{className:"message from",key:this.props.id,onDoubleClick:this.handleDoubleClick},n.a.createElement("li",null," ",this.props.tea," "))):!1===this.props.received&&""===this.props.media?n.a.createElement("div",{onClick:this.handleMouseClick},n.a.createElement(h,{sentBy:this.props.name,id:this.props.id,showDetails:this.props.showDetails}),n.a.createElement("div",{className:"message to",key:this.props.id,onDoubleClick:this.handleDoubleClick},n.a.createElement("li",null," ",this.props.tea," "))):""!==this.props.media?n.a.createElement("div",{onClick:this.handleMouseClick},n.a.createElement(h,{sentBy:this.props.name,id:this.props.id,showDetails:this.props.showDetails}),n.a.createElement("div",{className:"media",key:this.props.id,onDoubleClick:this.handleDoubleClick},n.a.createElement("li",null," ",n.a.createElement("img",{src:this.props.media,alt:"Sent in by our viewers"})," "))):n.a.createElement("div",null)}}]),t}(s.Component),b=Object(u.b)(null,function(e){return{deleteMessage:function(t){e({type:"DELETE_MESSAGE",id:t})},toggleDetails:function(t){e({type:"TOGGLE_MESSAGE_DETAILS",id:t})}}})(m),v=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.tips.map(function(e){return n.a.createElement(b,{key:e.key,id:e.id,showDetails:e.showDetails,received:e.received,name:e.name,tea:e.tea,media:e.media})});return n.a.createElement("div",{className:"messages-wrapper"},n.a.createElement("ul",null,e))}}]),t}(s.Component),E=Object(u.b)(function(e){return{tips:e.storeTips}})(v),y=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(c.a)(this,Object(p.a)(t).call(this))).handleFormChange=function(t){e.setState({message:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.addTipCount(1),e.props.addMessage(e.state.message),console.log(e.state.message),e.setState({message:""}),console.log(e.state.message)},e.state={message:""},e}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"centered reply"},n.a.createElement("form",{onSubmit:this.handleSubmit},n.a.createElement("input",{type:"text",id:"msg",onChange:this.handleFormChange,value:this.state.message,placeholder:"Double click message to delete"}),n.a.createElement("button",null,"Send")))}}]),t}(s.Component),g=Object(u.b)(null,function(e){return{addMessage:function(t){e({type:"ADD_MESSAGE",payload:t})},addTipCount:function(t){e({type:"ADD_TIP_COUNT",payload:t})}}})(y),f=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.tips;return n.a.createElement("div",{className:"App"},n.a.createElement("h1",{className:"centered"},"Gossip Girl Tip Line"),n.a.createElement("p",{className:"centered tagline"},"Latest news of the upper east side"),n.a.createElement(E,{tips:e}),n.a.createElement(g,null))}}]),t}(s.Component),D=a(12),k=a(19),O=a(9),j={storeCount:5,storeTips:[{key:1,id:"1",showDetails:!1,received:!0,name:"GossipGirl",tea:"Hey Upper East Siders. Gossip Girl here \ud83e\udd2b And I have the biggest news ever.",media:""},{key:2,id:"2",showDetails:!1,received:!1,name:"",tea:"Do you have the tea? \ud83c\udf75\ud83c\udf75",media:""},{key:3,id:"3",showDetails:!1,received:!0,name:"Melanie91",tea:"Spotted at Grand Central, bags in hand: Serena van der Woodsen.",media:""},{key:4,id:"4",showDetails:!1,received:!0,name:"Melanie91",tea:"",media:"https://vignette.wikia.nocookie.net/gossipgirl/images/2/25/101GossipGirl0049.jpg"},{key:5,id:"5",showDetails:!1,received:!0,name:"GossipGirl",tea:"Was it only a year ago our It Girl mysteriously disappeared for \u201cboarding school\u201d? And just as suddenly, she\u2019s back. Don\u2019t believe me? See for yourselves. Lucky for us, Melanie91 sent proof. Thanks for the photo, Mel \ud83d\ude18",media:""}]},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;if("ADD_TIP_COUNT"===t.type){var a=e.storeCount+t.payload;return Object(O.a)({},e,{storeCount:a})}if("ADD_MESSAGE"===t.type){var s=e.storeCount.toString();return Object(O.a)({},e,{storeTips:[].concat(Object(k.a)(e.storeTips),[{key:e.storeCount,id:s,showDetails:!1,received:!1,name:"",tea:t.payload,media:""}])})}if("DELETE_MESSAGE"===t.type){var n=e.storeTips.filter(function(e){return t.id!==e.id});return Object(O.a)({},e,{storeTips:n})}if("TOGGLE_MESSAGE_DETAILS"===t.type){var i=[];for(var r in e.storeTips){var o=e.storeTips[r];o.id===t.id&&(o.showDetails=!o.showDetails),i.push(o)}return Object(O.a)({},e,{storeTips:i})}return e};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var C=Object(D.b)(w);r.a.render(n.a.createElement(u.a,{store:C},n.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[20,1,2]]]);
//# sourceMappingURL=main.d40505a7.chunk.js.map