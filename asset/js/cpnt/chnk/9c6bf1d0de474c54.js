"use strict";(self.webpackChunkpropovoice=self.webpackChunkpropovoice||[]).push([[4474],{64474:(e,a,t)=>{t.r(a),t.d(a,{default:()=>d});var n=t(3453),s=t(96540),i=t(68735),c=t(80407),l=t(74848);const d=function(e){var a=(0,s.useState)([]),t=(0,n.A)(a,2),d=t[0],r=t[1];(0,s.useEffect)((function(){e.getAll("settings","tab=estvoice_tax").then((function(e){e.data.success})),e.getAll("taxonomies","taxonomy=extra_amount").then((function(e){if(e.data.success){var a=e.data.data.extra_amount;r(a)}}))}),[]);var o=function(a,t,n){var s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;e.handleChange(a,t,n,s)},h=function(a){wage.length>0?(0,i.A)():e.itemTaxChange(a)},x=e.data,p=ndpv.i18n;return["discount","fee","tax"].map((function(a,t){return(!e.sidebar||e.sidebar==a)&&(0,l.jsxs)("li",{children:[(0,l.jsx)("input",{type:"checkbox",defaultChecked:"checked",onClick:function(){return e.setSidebar(a)}}),(0,l.jsx)("i",{}),(0,l.jsx)("h3",{className:"pv-title-small",children:p[a]}),(0,l.jsxs)("div",{className:"pv-form-accordion pv-additional",children:["tax"==a&&(0,l.jsx)("div",{className:"pv-form-style-one",children:(0,l.jsx)("div",{className:"row",children:(0,l.jsxs)("div",{className:"col",style:{marginBottom:"0"},children:[(0,l.jsxs)("label",{id:"form-item_tax",children:[p.eachitem_tax_field,wage.length>0&&(0,l.jsx)(c.A,{})]}),(0,l.jsx)("div",{className:"pv-field-switch pv-ml-10",children:(0,l.jsxs)("label",{className:"pv-switch",children:[(0,l.jsx)("input",{type:"checkbox",id:"form-item_tax",name:"item_tax",checked:e.item_tax?"checked":"",onChange:h}),(0,l.jsx)("span",{className:"pv-switch-slider pv-round"})]})})]})})}),d.map((function(t,n){if(t.extra_amount_type==a){var s=x.find((function(e){return e.id==t.id})),i=!1,c=!1,d="",r="";s?("percent"===s.val_type?i=!0:c=!0,d=t.hasOwnProperty("tax_cal")?s.tax_cal:"",r=t.hasOwnProperty("fee_cal")?s.fee_cal:""):("percent"===t.val_type?i=!0:c=!0,d=t.hasOwnProperty("tax_cal")?t.tax_cal:"",r=t.hasOwnProperty("fee_cal")?t.fee_cal:"");var h=!0;return"tax"!=t.extra_amount_type&&"tax"!=t.type||e.item_tax||(h=!1),(0,l.jsxs)("div",{className:"pv-tab",children:[(0,l.jsx)("input",{checked:!!s,onChange:function(){return o(n,t,"field")},type:"checkbox",id:"addi-field-"+n,name:"addi-field"}),(0,l.jsx)("label",{className:(s?"pv-active":"")+" pv-tab-label",htmlFor:"addi-field-"+n,children:t.label}),(0,l.jsx)("div",{className:"pv-tab-content",children:(0,l.jsx)("div",{className:"pv-form-style-one",children:(0,l.jsx)("div",{className:"pv-radio-content",children:(0,l.jsxs)("div",{className:"pv-radio-group",children:[(0,l.jsxs)("h4",{children:[t.label," ",p.type,":"]}),(0,l.jsxs)("div",{className:"row",children:[(0,l.jsx)("div",{className:"col",children:(0,l.jsxs)("div",{className:"pv-field-radio",children:[(0,l.jsx)("input",{onChange:function(){return o(n,t,"type","percent")},checked:i?"checked":"",type:"radio",name:"val-type-"+n,id:"val-type-percent-"+n,value:"percent"}),(0,l.jsx)("label",{htmlFor:"val-type-percent-"+n,children:p.pct})]})}),(0,l.jsx)("div",{className:"col pv-p-0",children:(0,l.jsxs)("div",{className:"pv-field-radio",children:[(0,l.jsx)("input",{onChange:function(){return o(n,t,"type","fixed")},checked:c?"checked":"",type:"radio",name:"val-type-"+n,id:"val-type-fixed-"+n,value:"fixed"}),(0,l.jsx)("label",{htmlFor:"val-type-fixed-"+n,children:p.fix})]})})]}),i&&h&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("h4",{children:[p.tax," ",p.cal,":"]}),(0,l.jsx)("div",{className:"row",children:(0,l.jsx)("div",{className:"col",children:(0,l.jsxs)("select",{style:{padding:10},name:"tax_cal",value:d,onChange:function(e){return o(n,t,"cal",e)},children:[(0,l.jsxs)("option",{value:"",children:[p.with," ","tax"==t.extra_amount_type?p.item:""," ",p.tax]}),(0,l.jsxs)("option",{value:"1",children:[p.witho," ","tax"==t.extra_amount_type?p.item:""," ",p.tax]})]})})})]}),i&&("discount"==t.extra_amount_type||"discount"==t.type)&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("h4",{className:"pv-mt-10",children:[p.fee," ",p.cal,":"]}),(0,l.jsx)("div",{className:"row",children:(0,l.jsx)("div",{className:"col",children:(0,l.jsxs)("select",{style:{padding:10},name:"fee_cal",value:r,onChange:function(e){return o(n,t,"cal",e)},children:[(0,l.jsxs)("option",{value:"",children:[p.with," ",p.fee]}),(0,l.jsxs)("option",{value:"1",children:[p.witho," ",p.fee]})]})})})]})]})})})})]},n)}}))]})]},t)}))}}}]);