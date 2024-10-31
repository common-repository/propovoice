"use strict";(self.webpackChunkpropovoice=self.webpackChunkpropovoice||[]).push([[9442],{20915:(e,t,n)=>{n.d(t,{JW:()=>r,XE:()=>i,r:()=>l});var r="".concat(ndpv.apiUrl,"ndpv/v1/"),i="".concat(ndpv.apiUrl,"ndpvp/v1/"),l={headers:{"content-type":"application/json","X-WP-NONCE":ndpv.nonce,"Cache-Control":"no-cache"}}},59442:(e,t,n)=>{n.r(t),n.d(t,{default:()=>W});var r=n(4942),i=n(93324),l=n(67294),c=n(89250),a=n(82299),o=n(62513),s=n(85893);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p=(0,l.lazy)((function(){return n.e(9290).then(n.bind(n,49290))})),b=(0,l.lazy)((function(){return n.e(4750).then(n.bind(n,44750))})),f=(0,l.lazy)((function(){return n.e(9670).then(n.bind(n,29670))})),v=(0,l.lazy)((function(){return n.e(8548).then(n.bind(n,58548))})),h=(0,l.lazy)((function(){return n.e(7733).then(n.bind(n,17733))})),y=(0,l.lazy)((function(){return n.e(9564).then(n.bind(n,39564))})),j=(0,l.lazy)((function(){return n.e(8621).then(n.bind(n,98621))})),m=(0,l.lazy)((function(){return n.e(1519).then(n.bind(n,71519))})),g=(0,l.lazy)((function(){return n.e(8622).then(n.bind(n,68622))})),O=(0,l.lazy)((function(){return n.e(8829).then(n.bind(n,88829))})),x=(0,l.lazy)((function(){return n.e(2793).then(n.bind(n,92793))})),Z=(0,l.lazy)((function(){return n.e(5355).then(n.bind(n,65355))})),w=(0,l.lazy)((function(){return n.e(8025).then(n.bind(n,18025))})),P=(0,l.lazy)((function(){return n.e(8285).then(n.bind(n,78285))})),_=(0,l.lazy)((function(){return n.e(2576).then(n.bind(n,32576))})),z=(0,l.lazy)((function(){return n.e(4228).then(n.bind(n,4228))})),k=(0,l.lazy)((function(){return n.e(8724).then(n.bind(n,68724))})),N=(0,l.lazy)((function(){return n.e(8335).then(n.bind(n,88335))})),E=(0,l.lazy)((function(){return n.e(6489).then(n.bind(n,86489))})),D=(0,l.lazy)((function(){return n.e(7126).then(n.bind(n,67126))})),C=(0,l.lazy)((function(){return n.e(5370).then(n.bind(n,15370))})),S=(0,l.lazy)((function(){return n.e(9554).then(n.bind(n,29554))}));const W=(0,o.Z)((function(e){var t=(0,c.UO)(),n=t.tab,r=t.subtab,o=(0,c.s0)(),u=ndpv,W=u.i18n,J=u.caps,A=J.includes("ndpv_client_role")||J.includes("ndpv_staff"),B=!J.includes("ndpv_client_role")||!J.includes("ndpv_staff"),R=!J.includes("ndpv_client_role")&&!J.includes("ndpv_staff")&&!J.includes("ndpv_manager"),T=n,L=r;void 0===n&&(T="general");var U={};U.general={label:W.gen},J.includes("ndpv_lead")&&(U.lead={label:W.lead}),J.includes("ndpv_deal")&&(U.deal={label:W.deal}),(J.includes("ndpv_estimate")||J.includes("ndpv_invoice"))&&(U.estinv={label:W.est+" "+W.nd+" "+W.inv,subtabs:{common:{label:W.cmn},est:{label:W.est},inv:{label:W.inv}}}),J.includes("ndpv_project")&&(U.project={label:W.project}),J.includes("ndpv_project")&&(U.service={label:W.service}),R&&(U.payment={label:W.payment}),R&&(U.email={label:W.email,subtabs:{delivery:{label:"Email Delivery"},"system-template":{label:"System Email Template"},"custom-template":{label:"Custom Email Template"}}}),J.includes("ndpv_task")&&(U.task={label:W.task}),J.includes("ndpv_contact")&&(U.contact={label:W.ct}),B&&(U.tag={label:W.tag}),R&&(U["custom-field"]={label:W.cus+" "+W.field}),R&&(U.integration={label:W.intg}),R&&(U.team={label:W.team}),R&&(U["public-api"]={label:"Public API"}),U.notification={label:"Notification"};var X=(0,l.useState)(T),F=(0,i.Z)(X,2),I=F[0],M=F[1],q=(0,l.useState)(L),G=(0,i.Z)(q,2),H=G[0],K=G[1],Q=(0,l.useState)(U),V=(0,i.Z)(Q,2),Y=V[0],$=V[1];(0,l.useEffect)((function(){if(A)$({general:{label:W.gen},password:{label:W.password}});else if(has_wage.ins){var e=d({},Y);R&&(e.license={label:W.licman}),$(e)}}),[]);var ee=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;e.preventDefault(),n||(n=Y[t].hasOwnProperty("subtabs")&&Object.keys(Y[t].subtabs)[0]),M(t),K(n),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;o(t?"/setting/".concat(e,"/").concat(t):"/setting/".concat(e))}(t,n)};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("nav",{className:"pv-breadcrumb",children:(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"#",children:W.home})}),(0,s.jsx)("li",{children:(0,s.jsx)("svg",{width:5,height:10,viewBox:"0 0 5 10",fill:"none",children:(0,s.jsx)("path",{d:"M.5 1.25L4.25 5 .5 8.75",stroke:"#718096",strokeLinecap:"round",strokeLinejoin:"round"})})}),(0,s.jsx)("li",{className:"pv-active",children:W.settings})]})}),(0,s.jsx)("h2",{className:"pv-page-title",children:W.settings}),(0,s.jsx)("div",{className:"pv-settings-tab",children:(0,s.jsxs)("div",{className:"row",children:[(0,s.jsx)("div",{className:"col-md-3",children:(0,s.jsx)("ul",{className:"pv-settings-tabs",children:Object.keys(Y).map((function(e){return(0,s.jsxs)("li",{className:"pv-tab "+(e==I?"pv-active":""),children:[(0,s.jsx)("a",{onClick:function(t){return ee(t,e)},children:Y[e].label}),Y[e].hasOwnProperty("subtabs")&&Y[e].subtabs&&(0,s.jsx)("ul",{className:"pv-settings-subtabs",children:Object.keys(Y[e].subtabs).map((function(t){return(0,s.jsx)("li",{className:"pv-subtab "+(t==H||!H&&Object.keys(Y[e].subtabs)[0]==t?"pv-active":""),children:(0,s.jsx)("a",{onClick:function(n){return ee(n,e,t)},children:Y[e].subtabs[t].label})},t)}))})]},e)}))})}),(0,s.jsx)("div",{className:"col-md-9",children:(0,s.jsxs)("div",{className:"pv-setting-tab-content",children:[(0,s.jsxs)("h4",{className:"pv-title-medium pv-mb-15",style:{textTransform:"capitalize"},children:[Y[I]&&Y[I].label,"custom-field"!=I&&"integration"!=I&&H&&Y[I].subtabs[H]&&": "+Y[I].subtabs[H].label," ",W.settings]}),(0,s.jsxs)(l.Suspense,{fallback:(0,s.jsx)(a.Z,{}),children:["general"==I&&(0,s.jsx)(p,{}),"password"==I&&(0,s.jsx)(b,{}),"task"==I&&(0,s.jsx)(f,{}),"lead"==I&&(0,s.jsx)(v,{}),"deal"==I&&(0,s.jsx)(h,{}),"estinv"==I&&("common"==H||!H)&&(0,s.jsx)(y,d({},e)),"estinv"==I&&"est"==H&&(0,s.jsx)(j,d({},e)),"estinv"==I&&"inv"==H&&(0,s.jsx)(m,d({},e)),"service"==I&&(0,s.jsx)(g,{}),"project"==I&&(0,s.jsx)(O,d({},e)),"payment"==I&&(0,s.jsx)(S,d({},e)),"email"==I&&("delivery"==H||!H)&&(0,s.jsx)(E,d({},e)),"email"==I&&("system-template"==H||!H)&&(0,s.jsx)(D,d({},e)),"email"==I&&("custom-template"==H||!H)&&(0,s.jsx)(C,d({},e)),"contact"==I&&(0,s.jsx)(x,{}),"tag"==I&&(0,s.jsx)(Z,{}),"custom-field"==I&&(0,s.jsx)(w,d({},e)),"integration"==I&&(0,s.jsx)(P,d({},e)),"team"==I&&(0,s.jsx)(_,d({},e)),"public-api"==I&&(0,s.jsx)(z,d({},e)),"notification"==I&&(0,s.jsx)(k,d({},e)),"license"==I&&(0,s.jsx)(N,d({},e))]})]})})]})})]})}))},62513:(e,t,n)=>{n.d(t,{Z:()=>y});var r=n(15671),i=n(43144),l=n(97326),c=n(60136),a=n(82963),o=n(61120),s=n(4942),u=n(67294),d=n(5274),p=n(20915),b=n(85893);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){(0,s.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,o.Z)(e);if(t){var i=(0,o.Z)(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return(0,a.Z)(this,n)}}const y=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=p.JW+t,a=function(t){(0,c.Z)(o,t);var a=h(o);function o(e){var t;return(0,r.Z)(this,o),t=a.call(this,e),(0,s.Z)((0,l.Z)(t),"getAll",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return e&&(n=p.JW+e),d.Z.get("".concat(n,"/?").concat(t),p.r)})),(0,s.Z)((0,l.Z)(t),"get",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;return e&&(n=p.JW+e),d.Z.get("".concat(n,"/").concat(t),p.r)})),(0,s.Z)((0,l.Z)(t),"create",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;return e&&(n=p.JW+e),d.Z.post(n,t,p.r)})),(0,s.Z)((0,l.Z)(t),"update",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0;return e&&(n=p.JW+e),d.Z.put("".concat(n,"/").concat(t),r,p.r)})),(0,s.Z)((0,l.Z)(t),"remove",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;return e&&(n=p.JW+e),d.Z.delete("".concat(n,"/").concat(t),p.r)})),(0,s.Z)((0,l.Z)(t),"findByArg",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return e&&(n=p.JW+e),d.Z.get("".concat(n,"?title=").concat(t),p.r)})),t}return(0,i.Z)(o,[{key:"render",value:function(){return(0,b.jsx)(e,v(v({},this.props),{},{getAll:this.getAll,get:this.get,create:this.create,update:this.update,remove:this.remove,findByArg:this.findByArg}))}}]),o}(u.Component);return a}},97326:(e,t,n)=>{function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,{Z:()=>r})},15671:(e,t,n)=>{function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,{Z:()=>r})},43144:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(67343);function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,(0,r.Z)(i.key),i)}}function l(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}},61120:(e,t,n)=>{function r(e){return r=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},r(e)}n.d(t,{Z:()=>r})},60136:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(89611);function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&(0,r.Z)(e,t)}},82963:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(71002),i=n(97326);function l(e,t){if(t&&("object"===(0,r.Z)(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return(0,i.Z)(e)}},89611:(e,t,n)=>{function r(e,t){return r=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},r(e,t)}n.d(t,{Z:()=>r})}}]);