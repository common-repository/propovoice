"use strict";(self.webpackChunkpropovoice=self.webpackChunkpropovoice||[]).push([[4750],{44750:(e,s,r)=>{r.r(s),r.d(s,{default:()=>p});var n=r(4942),a=r(93324),o=r(67294),c=r(72132),t=r(12816),i=r(85893);function d(e,s){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);s&&(n=n.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var s=1;s<arguments.length;s++){var r=null!=arguments[s]?arguments[s]:{};s%2?d(Object(r),!0).forEach((function(s){(0,n.Z)(e,s,r[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(r,s))}))}return e}const p=function(e){var s=(0,o.useState)({current_password:"",new_password:"",confirm_password:""}),r=(0,a.Z)(s,2),d=r[0],p=r[1];(0,o.useEffect)((function(){}),[]);var u=function(e){var s=e.target,r=s.name,a=s.value;p(l(l({},d),{},(0,n.Z)({},r,a)))};ndpv.i18n;return(0,i.jsxs)("form",{onSubmit:function(e){e.preventDefault(),d.tab="password_change",t.Z.add("settings",d).then((function(e){e.data.success?c.Am.success(ndpv.i18n.aUpd):e.data.data.forEach((function(e){c.Am.error(e)}))}))},className:"pv-form-style-one",children:[(0,i.jsxs)("div",{className:"row",children:[(0,i.jsxs)("div",{className:"col",children:[(0,i.jsx)("label",{htmlFor:"field-current-password",children:"Current Password"}),(0,i.jsx)("input",{id:"field-current-password",type:"password",required:!0,name:"current_password",value:d.current_password,onChange:u})]}),(0,i.jsx)("div",{className:"col"})]}),(0,i.jsxs)("div",{className:"row",children:[(0,i.jsxs)("div",{className:"col",children:[(0,i.jsx)("label",{htmlFor:"field-new-password",children:"New Password"}),(0,i.jsx)("input",{id:"field-new-password",type:"password",required:!0,name:"new_password",value:d.new_password,onChange:u})]}),(0,i.jsx)("div",{className:"col"})]}),(0,i.jsxs)("div",{className:"row",children:[(0,i.jsxs)("div",{className:"col",children:[(0,i.jsx)("label",{htmlFor:"field-confirm-password",children:"Confirm Password"}),(0,i.jsx)("input",{id:"field-confirm-password",type:"password",required:!0,name:"confirm_password",value:d.confirm_password,onChange:u})]}),(0,i.jsx)("div",{className:"col"})]}),(0,i.jsx)("div",{className:"row",children:(0,i.jsx)("div",{className:"col",children:(0,i.jsx)("button",{className:"pv-btn pv-bg-blue pv-bg-hover-blue",children:"Change Password"})})})]})}}}]);