(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{12:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(2),c=a.n(o),s=(a(12),a(3)),l=a(4),i=a(6),m=a(5),u=function(e){e.id;var t=e.name,a=e.email;return r.a.createElement("div",{className:"bg-navy washed-blue dib br3 pa3 ma2 grow bw2 shadow-5 tc"},r.a.createElement("img",{src:"https://robohash.org/".concat(t,"?200x200"),alt:"robots"}),r.a.createElement("div",null,r.a.createElement("h2",null,t),r.a.createElement("p",null,a)))},h=function(e){var t=e.robots;return r.a.createElement("div",null,t.map((function(e,a){return r.a.createElement(u,{key:t[a].id,id:t[a].id,name:t[a].name,email:t[a].email})})))},d=function(e){var t=e.searchChange;return r.a.createElement("div",{className:"pa2 mb4"},r.a.createElement("input",{className:"pa3 bg-washed-blue",type:"search",placeholder:"Search Friends",onChange:t}))},b=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).onSearch=function(t){e.setState({searchField:t.target.value})},e.state={robots:[],searchField:""},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,a=e.searchField,n=t.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())}));return t.length?r.a.createElement("div",{className:"tc"},r.a.createElement("div",{className:"header"},r.a.createElement("h1",{className:""},"RoboFriends"),r.a.createElement(d,{searchChange:this.onSearch})),r.a.createElement(h,{robots:n})):r.a.createElement("h1",{className:"tc"},"LOADING",r.a.createElement("br",null),"...")}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(13);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,a){e.exports=a(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.53965c44.chunk.js.map