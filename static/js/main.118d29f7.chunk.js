(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){e.exports=a(45)},23:function(e,t,a){},24:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},25:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(10),i=a.n(l),o=(a(23),a(11)),r=a(12),s=a(15),m=a(13),u=a(16),d=a(2),p=(a(24),a(25),a(14)),h=a.n(p),g=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).handleClick=a.handleClick.bind(Object(d.a)(Object(d.a)(a))),a.jump=a.jump.bind(Object(d.a)(Object(d.a)(a))),a.state={username:"",posts:[]},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){}},{key:"jump",value:function(e){console.log(e.target.getAttribute("data-url"));var t=e.target.getAttribute("data-url");window.location.href=t}},{key:"handleClick",value:function(){h.a.get("http://www.reddit.com/r/reactjs.json").then(function(e){console.log(e)})}},{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement("section",{className:"content",id:"speed_s"},c.a.createElement("div",{className:"item-s",id:"51dai","data-url":"https://web.u51.com/tregister/#/?id=7&channel=wdpt_ssj ",onClick:this.jump},c.a.createElement("div",{className:"loan-logo "},c.a.createElement("img",{src:"51dai1514276452174.png"})),c.a.createElement("div",{className:"loan-li"},c.a.createElement("p",{className:"loan-t"},c.a.createElement("em",null,"51\u4eba\u54c1\u8d37"),c.a.createElement("i",{className:"icon-img "}),c.a.createElement("i",{className:"icon-img "})),c.a.createElement("p",{className:"clear"},"\u6d88\u8d39\u8d37\uff08\u7eaf\u7ebf\u4e0a\u3001\u65e0\u62b5\u62bc\u65e0\u62c5\u4fdd\uff09")))),c.a.createElement("button",{className:"button",onClick:this.handleClick},"Click Me"),c.a.createElement("p",null,this.state.username),c.a.createElement("div",null,c.a.createElement("ul",null,this.state.posts.map(function(e){return c.a.createElement("li",{key:e.id},e.title)}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,1,2]]]);
//# sourceMappingURL=main.118d29f7.chunk.js.map