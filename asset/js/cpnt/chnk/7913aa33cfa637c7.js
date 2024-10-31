"use strict";(self.webpackChunkpropovoice=self.webpackChunkpropovoice||[]).push([[9553],{80589:(e,t,n)=>{function a(){document.getElementById("pv-pro-alert").style.display="block"}n.d(t,{Z:()=>a})},72360:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(85893);const s=function(e){return(0,a.jsx)(a.Fragment,{children:wage.length>0&&(0,a.jsxs)("span",{className:"pv-pro-label",onClick:function(){document.getElementById("pv-pro-alert").style.display="block"},style:{background:e.blueBtn?"#FFEED9":"auto"},children:[(0,a.jsx)("svg",{width:13,height:10,viewBox:"0 0 13 10",fill:"none",children:(0,a.jsx)("path",{d:"M1.71013 8.87452C1.72412 8.93204 1.7495 8.98616 1.78477 9.0337C1.82003 9.08124 1.86447 9.12123 1.91545 9.15131C1.96643 9.18139 2.02292 9.20094 2.08158 9.20882C2.14025 9.2167 2.19989 9.21274 2.257 9.19718C4.86395 8.47534 7.61803 8.47534 10.225 9.19718C10.2821 9.21274 10.3417 9.2167 10.4004 9.20882C10.4591 9.20094 10.5156 9.18139 10.5665 9.15131C10.6175 9.12123 10.6619 9.08124 10.6972 9.0337C10.7325 8.98616 10.7579 8.93204 10.7718 8.87452L12.1664 2.95187C12.1855 2.87259 12.1821 2.78954 12.1566 2.71209C12.131 2.63464 12.0843 2.56588 12.0218 2.51356C11.9592 2.46123 11.8833 2.42744 11.8025 2.41599C11.7218 2.40454 11.6395 2.41588 11.5648 2.44874L8.79763 3.67921C8.69737 3.72336 8.5843 3.72879 8.48027 3.69445C8.37624 3.6601 8.28863 3.58843 8.23435 3.49327L6.62653 0.594837C6.5887 0.526455 6.53324 0.469456 6.46592 0.429765C6.3986 0.390074 6.32187 0.369141 6.24372 0.369141C6.16557 0.369141 6.08885 0.390074 6.02153 0.429765C5.95421 0.469456 5.89874 0.526455 5.86091 0.594837L4.2531 3.49327C4.19882 3.58843 4.1112 3.6601 4.00717 3.69445C3.90314 3.72879 3.79008 3.72336 3.68982 3.67921L0.922629 2.44874C0.847988 2.41588 0.765648 2.40454 0.684901 2.41599C0.604154 2.42744 0.528216 2.46123 0.465658 2.51356C0.403099 2.56588 0.35641 2.63464 0.330861 2.71209C0.305312 2.78954 0.301919 2.87259 0.321067 2.95187L1.71013 8.87452Z",fill:"#FF6B00"})}),"Pro"]})})}},48518:(e,t,n)=>{n.d(t,{Z:()=>f});var a=n(4942),s=n(93324),i=n(67294),r=n(72132),o=n(72360),c=n(80589),l=n(12816),m=n(85893);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const f=function(e){var t=e.module,n=void 0===t?"settings":t,d=e.tabPrefix,f=void 0===d?"email_":d,p=e.tab,b=e.title,g=void 0===b?"Template title here":b,j=e.subVars,v=e.msgVars,h=e.isPro,x=(0,i.useState)({subject:"",msg:"",tab:f+p}),_=(0,s.Z)(x,2),C=_[0],y=_[1];(0,i.useEffect)((function(){l.Z.get(n,"tab=".concat(f+p)).then((function(e){e.data.success&&y(u(u({},C),e.data.data))}))}),[]);var O=function(e){var t=e.target,n=t.name,s=t.value;y(u(u({},C),{},(0,a.Z)({},n,s)))},Z=ndpv.i18n;return(0,m.jsxs)("form",{onSubmit:function(e){e.preventDefault(),h&&wage.length>0?(0,c.Z)():ndpv.isDemo?r.Am.error(ndpv.demoMsg):l.Z.add(n,C).then((function(e){e.data.success?r.Am.success(ndpv.i18n.aUpd):e.data.data.forEach((function(e){r.Am.error(e)}))}))},className:"pv-form-style-one",children:[(0,m.jsx)("h4",{className:"pv-title-medium pv-mb-15",style:{textTransform:"capitalize"},children:g}),(0,m.jsx)("div",{className:"row",children:(0,m.jsxs)("div",{className:"col",children:[(0,m.jsx)("label",{htmlFor:"form-subject",children:Z.sub}),(0,m.jsx)("input",{id:"form-subject",type:"text",required:!0,name:"subject",value:C.subject,onChange:O}),(0,m.jsxs)("p",{className:"pv-field-desc",children:[(0,m.jsxs)("b",{children:[Z.var,": "]}),j]})]})}),(0,m.jsx)("div",{className:"row",children:(0,m.jsxs)("div",{className:"col",children:[(0,m.jsx)("label",{htmlFor:"form-msg",children:Z.msg}),(0,m.jsx)("textarea",{id:"form-msg",required:!0,rows:9,name:"msg",value:C.msg,onChange:O}),(0,m.jsxs)("p",{className:"pv-field-desc",children:[(0,m.jsxs)("b",{children:[Z.var,": "]}),v]})]})}),(0,m.jsx)("div",{className:"row",children:(0,m.jsx)("div",{className:"col",children:(0,m.jsxs)("button",{className:"pv-btn pv-bg-blue pv-bg-hover-blue",children:[Z.save," ",h&&(0,m.jsx)(o.Z,{blueBtn:!0})]})})})]})}},9553:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var a=n(48518),s=n(85893);const i=function(){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.Z,{tab:"estimate_default",title:"Default Template",subVars:"{id}, {org_name}, {client_name}",msgVars:"{id}, {client_name}, {date}, {due_date}, {amount}, {org_name}"}),(0,s.jsx)(a.Z,{tab:"estimate_reminder",title:"Reminder Template",subVars:"{id}, {org_name}, {client_name}",msgVars:"{id}, {client_name}, {date}, {due_date}, {amount}, {org_name}",isPro:!0}),(0,s.jsx)(a.Z,{tab:"est_add_notif",title:"Add Notification Template",subVars:"{org_name}, {notification}",msgVars:"{org_name}, {name}, {notification_link}",isPro:!0}),(0,s.jsx)(a.Z,{tab:"est_edit_notif",title:"Edit Notification Template",subVars:"{org_name}, {notification}",msgVars:"{org_name}, {name}, {notification_link}",isPro:!0}),(0,s.jsx)(a.Z,{tab:"est_accept_notif",title:"Accept Notification Template",subVars:"{org_name}, {notification}",msgVars:"{org_name}, {name}, {notification_link}",isPro:!0}),(0,s.jsx)(a.Z,{tab:"est_reject_notif",title:"Reject Notification Template",subVars:"{org_name}, {notification}",msgVars:"{org_name}, {name}, {notification_link}",isPro:!0})]})}}}]);