(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{CgSh:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return r}));var n=a("dI71"),l=a("q1tI"),c=a.n(l),i=a("+ZDr"),m=a("7oih");var r=function(e){function t(t){var a;return(a=e.call(this,t)||this).handleChange=function(e){var t;a.setState(((t={})[e.target.name]=e.target.value,t))},a.handleSubmit=function(e){e.preventDefault();var t,n=e.target;fetch("/",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:(t=Object.assign({"form-name":n.getAttribute("name")},a.state),Object.keys(t).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])})).join("&"))}).then((function(){return Object(i.navigate)(n.getAttribute("action"))})).catch((function(e){return alert(e)}))},a.state={isValidated:!1},a}return Object(n.a)(t,e),t.prototype.render=function(){return c.a.createElement(m.a,null,c.a.createElement("section",{className:"section"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"content"},c.a.createElement("h1",null,"Contact"),c.a.createElement("form",{name:"contact",method:"post",action:"/contact/thanks/","data-netlify":"true","data-netlify-honeypot":"bot-field",onSubmit:this.handleSubmit},c.a.createElement("input",{type:"hidden",name:"form-name",value:"contact"}),c.a.createElement("div",{hidden:!0},c.a.createElement("label",null,"Don’t fill this out:"," ",c.a.createElement("input",{name:"bot-field",onChange:this.handleChange}))),c.a.createElement("div",{className:"field"},c.a.createElement("label",{className:"label",htmlFor:"name"},"Your name"),c.a.createElement("div",{className:"control"},c.a.createElement("input",{className:"input",type:"text",name:"name",onChange:this.handleChange,id:"name",required:!0}))),c.a.createElement("div",{className:"field"},c.a.createElement("label",{className:"label",htmlFor:"email"},"Email"),c.a.createElement("div",{className:"control"},c.a.createElement("input",{className:"input",type:"email",name:"email",onChange:this.handleChange,id:"email",required:!0}))),c.a.createElement("div",{className:"field"},c.a.createElement("label",{className:"label",htmlFor:"message"},"Message"),c.a.createElement("div",{className:"control"},c.a.createElement("textarea",{className:"textarea",name:"message",onChange:this.handleChange,id:"message",required:!0}))),c.a.createElement("div",{className:"field"},c.a.createElement("button",{className:"button is-link",type:"submit"},"Send")))))))},t}(c.a.Component)}}]);