"use strict";(globalThis.webpackChunkpropovoice=globalThis.webpackChunkpropovoice||[]).push([[7091],{30740:(e,t,a)=>{a.d(t,{A:()=>r});var n=a(51609),l=a(56564);const r=e=>{const t=e.data;return(0,n.createElement)(n.Fragment,null,t&&(0,n.createElement)(n.Fragment,null,(0,n.createElement)("h5",null,ndpv.i18n.from),t.name&&(0,n.createElement)("h6",null,t.name),(0,n.createElement)("p",null,t.address&&(0,n.createElement)(n.Fragment,null,t.address,",",(0,n.createElement)("br",null)),t.city&&(0,n.createElement)(n.Fragment,null,t.city,", "),t.region&&(0,n.createElement)(n.Fragment,null,t.region,", "),t.zip&&(0,n.createElement)(n.Fragment,null,t.zip,", "),t.country&&(0,n.createElement)(n.Fragment,null,(0,l.Fi)(t.country),", "),t.email&&(0,n.createElement)(n.Fragment,null,(0,n.createElement)("br",null),t.email),t.mobile&&(0,n.createElement)(n.Fragment,null,", ",t.mobile))))}},10860:(e,t,a)=>{a.d(t,{A:()=>c});var n=a(51609),l=a(85500);const r=e=>{const t=t=>{const{currency:a,lang:n}=e.data.invoice;return new Intl.NumberFormat(n,{style:"currency",currency:a,minimumFractionDigits:0,maximumFractionDigits:2}).format(t)},{title:a,desc:r,qty:c,qty_type:m,tax:i,tax_type:s,price:o}=e.item,p=l.Ay.link(r.replaceAll("\n","<br />"));return(0,n.createElement)("tr",null,(0,n.createElement)("td",null,e.id+1,"."),(0,n.createElement)("td",null,a,(0,n.createElement)("br",null),(0,n.createElement)("span",{dangerouslySetInnerHTML:{__html:p}})),(0,n.createElement)("td",null,c," ",(0,n.createElement)("span",null,m&&(0,n.createElement)(n.Fragment,null,"(",m.split("-").map((function(e){return e.charAt(0).toUpperCase()+e.substring(1).toLowerCase()})).join(" "),")"))),(0,n.createElement)("td",{style:{whiteSpace:"nowrap"}},t(o)),(0,n.createElement)("td",{style:{whiteSpace:"nowrap"}},t(((e,t)=>e*t)(c,o))),e.item_tax&&(0,n.createElement)("td",{style:{whiteSpace:"nowrap"}},t(((t,a,n,l)=>{let r=0;return e.item_tax&&n&&(r+="percent"==l?t*a*(n/100):parseFloat(n)),r})(c,o,i,s))))},c=e=>{const{id:t,desc:a,qty:l,price:c,tax:m,amount:i}=e.item_label;return(0,n.createElement)("div",{className:"pv-inv-items"},(0,n.createElement)("table",null,(0,n.createElement)("thead",null,(0,n.createElement)("tr",null,(0,n.createElement)("th",{style:{width:"35px"}},t),(0,n.createElement)("th",{style:{width:"auto"}},a),(0,n.createElement)("th",{style:{width:"125px"}},l),(0,n.createElement)("th",{style:{width:"135px"}},c),(0,n.createElement)("th",{style:{width:"90px"}},i),e.item_tax&&(0,n.createElement)("th",{style:{width:"90px"}},m))),(0,n.createElement)("tbody",null,e.items.map(((t,a)=>(0,n.createElement)(r,{...e,item:t,item_tax:e.item_tax,id:a,key:a}))))))}},8828:(e,t,a)=>{a.d(t,{A:()=>l});var n=a(51609);const l=e=>{const{paymentBankData:t}=e.data;return(0,n.createElement)("div",null,t?(0,n.createElement)(n.Fragment,null,(0,n.createElement)("div",{className:"pv-inv-bank"},(0,n.createElement)("h4",null,ndpv.i18n.paymentInfo),(0,n.createElement)("div",{className:"pv-bank-info",dangerouslySetInnerHTML:{__html:t.name+"<br />"+t.details.replaceAll("\n","<br />")}}))):"")}},22983:(e,t,a)=>{a.d(t,{A:()=>l});var n=a(51609);const l=e=>{let t,a,l=!1,r="";const c=ndpv.i18n;switch(e.status){case"accept":l=!0,t=c.acptd,a=c.acceptDes,r="pv-green-color";break;case"decline":l=!0,t=c.dec,a=c.decDes;break;case"overdue":l=!0,t=c.ovd,a=c.ovdDes;break;case"paid_req":l=!0,t=c.appp,a=c.paidreqDes;break;case"paid":l=!0,t=e.invoice.hasOwnProperty("recurring")&&e.invoice.recurring.status&&e.invoice.recurring.subscription?c.subsed:c.paid,r="pv-green-color",a=c.paidDes}return(0,n.createElement)(n.Fragment,null,l&&(0,n.createElement)("div",{className:"pv-inv-seal"},(0,n.createElement)("div",{className:"pv-badge-border "+r,style:{position:"absolute",top:120,zIndex:99,left:300,width:185,transform:"rotate(340deg)"}},(0,n.createElement)("div",{className:"pv-badge-style-one"},(0,n.createElement)("h4",null,t),(0,n.createElement)("p",null,a)))))}},74099:(e,t,a)=>{a.d(t,{A:()=>l});var n=a(51609);const l=e=>{const t=e.data;return(0,n.createElement)("div",{className:"pv-inv-sections",style:{marginTop:e.top?"15px":""}},t.map(((e,t)=>(0,n.createElement)("div",{className:"pv-inv-section",key:t},e.label&&(0,n.createElement)("h4",{className:"pv-inv-section-title"},e.label),(0,n.createElement)("div",{className:"pv-inv-section-content",dangerouslySetInnerHTML:{__html:e.content}})))))}},19187:(e,t,a)=>{a.d(t,{A:()=>l});var n=a(51609);const l=e=>{const t=e.data;return(0,n.createElement)("div",{className:"pv-inv-sign"},t&&(0,n.createElement)(n.Fragment,null,(0,n.createElement)("img",{src:t.src,alt:""})))}},16051:(e,t,a)=>{a.d(t,{A:()=>r});var n=a(51609),l=a(56564);const r=e=>{var t;const a=e.data;return(0,n.createElement)(n.Fragment,null,a?(0,n.createElement)(n.Fragment,null,(0,n.createElement)("h5",null,ndpv.i18n.billTo),(0,n.createElement)("h6",null,null!==(t=a?.first_name)&&void 0!==t?t:a?.org_name),(0,n.createElement)("p",null,a.address&&(0,n.createElement)(n.Fragment,null,a.address,",",(0,n.createElement)("br",null)),a.city&&(0,n.createElement)(n.Fragment,null,a.city,", "),a.region&&(0,n.createElement)(n.Fragment,null,a.region,", "),a.zip&&(0,n.createElement)(n.Fragment,null,a.zip,", "),a.country&&(0,n.createElement)(n.Fragment,null,(0,l.Fi)(a.country),", "),a.email&&(0,n.createElement)(n.Fragment,null,(0,n.createElement)("br",null),a.email),a.mobile&&(0,n.createElement)(n.Fragment,null,", ",a.mobile))):"")}},62232:(e,t,a)=>{a.d(t,{A:()=>r});var n=a(51609),l=a(56564);const r=e=>{const{inv:t}=e,a=t.extra_field,r=e=>(0,l.Gl)(e,t.currency,t.lang),c=()=>t.items.reduce(((e,t)=>e+t.qty*t.price),0),m=()=>t.items.reduce(((e,a)=>{let n=0;return t.item_tax&&a.tax&&("percent"==a.tax_type?n+=a.qty*a.price*(a.tax/100):n+=parseFloat(a.tax)),e+n}),0),i=()=>{let e=0,t=c(),n=m();return a.map(((a,l)=>{if("tax"==a.type){let l=a.val?a.val:0;if("percent"==a.val_type){let r=0;(a.hasOwnProperty("tax_cal")?a.tax_cal:"")||(r=n),e+=(t+r)*(l/100)}else e+=parseFloat(l)}})),e},s=()=>{let e=0,t=c(),n=m()+i();return a.map(((a,l)=>{if("fee"==a.type){let l=a.val?a.val:0;if("percent"==a.val_type){let r=0;(a.hasOwnProperty("tax_cal")?a.tax_cal:"")||(r=n),e+=(t+r)*(l/100)}else e+=parseFloat(l)}})),e},o=ndpv.i18n;let p=[],u=[],d=[],v=[];return a&&(a.map(((e,t)=>{"tax"==e.extra_amount_type||"tax"==e.type?p.push(e):"fee"==e.extra_amount_type||"fee"==e.type?u.push(e):d.push(e)})),v=[...d,...u,...p]),(0,n.createElement)("div",{className:"pv-inv-total"},(0,n.createElement)("table",null,(0,n.createElement)("tbody",null,(0,n.createElement)("tr",{className:"pv-inv-e-bold"},(0,n.createElement)("th",null,o.subT),(0,n.createElement)("td",null,r(c()))),t.item_tax&&(0,n.createElement)("tr",{className:"pv-inv-e-bold"},(0,n.createElement)("th",null,o.items," ",o.tax),(0,n.createElement)("td",null,r(m()))),v.map(((e,t)=>{let a=c();if("percent"==e.val_type){let t=e.hasOwnProperty("tax_cal")?e.tax_cal:"",n=e.hasOwnProperty("fee_cal")?e.fee_cal:"";"tax"!=e.type||t||(a+=m()),"fee"!=e.type||t||(a+=m(),a+=i()),"discount"==e.type&&(t||(a+=m(),a+=i()),n||(a+=s())),a*=e.val/100}else a=parseFloat(e.val);return(0,n.createElement)("tr",{key:t},(0,n.createElement)("th",null,e.name),(0,n.createElement)("td",null,r(a)))})),(0,n.createElement)("tr",{className:"pv-inv-table-bg"},(0,n.createElement)("th",null,o.total),(0,n.createElement)("td",null,r((()=>{let e=c();return t.item_tax&&(e+=m()),e+=i(),e+=s(),e-=(()=>{let e=0,t=c(),n=m()+i(),l=s();return a.map(((a,r)=>{if("discount"==a.type){let r=a.val?a.val:0;if("percent"==a.val_type){let c=0;a.hasOwnProperty("tax_cal")&&a.tax_cal||(c=n);let m=0;(a.hasOwnProperty("fee_cal")?a.fee_cal:"")||(m=l),e+=(t+c+m)*(r/100)}else e+=parseFloat(r)}})),e})(),e})()))))))}},57091:(e,t,a)=>{a.r(t),a.d(t,{default:()=>v});var n=a(51609),l=a(93300),r=a.n(l),c=a(30740),m=a(10860),i=a(8828),s=a(16051),o=a(62232),p=a(22983),u=a(74099),d=a(19187);const v=e=>{(0,n.useEffect)((()=>{e.isPrvwLoad()}),[]);const{id:t,num:a,path:l,top_sections:v,items:E,sections:y,item_tax:h,item_label:g,attach:_,sign:b,date:f,due_date:x}=e.data.invoice,{fromData:F,toData:N,status:w}=e.data,A=ndpv.i18n;let k="invoice"==l?A.inv:A.est,D="invoice"==l?A.invNo:A.estNo;const P=a||e.data.prefix+t;return(0,n.createElement)("div",{className:"pv-inv",style:{height:e.height}},(0,n.createElement)(p.A,{status:w,invoice:e.data.invoice}),(0,n.createElement)("div",{className:"pv-inv-eight"},(0,n.createElement)("div",{className:"pv-inv-body"},(0,n.createElement)("div",{className:"pv-inv-title"},(0,n.createElement)("h2",null,k)),(0,n.createElement)("div",{className:"pv-inv-header"},(0,n.createElement)("div",{className:"pv-inv-head"},(0,n.createElement)("div",{className:"pv-inv-from-logo"},F&&F.logo&&(0,n.createElement)("img",{src:F.logo.src,alt:""})),(0,n.createElement)("div",{className:"pv-inv-from"},(0,n.createElement)(c.A,{data:F}))),(0,n.createElement)("div",{className:"pv-inv-shapes"}),(0,n.createElement)("div",{className:"pv-inv-address"},(0,n.createElement)("div",{className:"pv-inv-to"},(0,n.createElement)(s.A,{data:N})),(0,n.createElement)("div",{className:"pv-inv-from-date"},(0,n.createElement)("p",null,D,": ",(0,n.createElement)("span",null,t?P:"")),(0,n.createElement)("p",null,A.date,": ",(0,n.createElement)("span",null,f&&(0,n.createElement)(r(),{format:ndpv.date_format},f))),(0,n.createElement)("p",null,A.due_date,": ",(0,n.createElement)("span",null,x&&(0,n.createElement)(r(),{format:ndpv.date_format},x)))))),(0,n.createElement)("div",{className:"pv-inv-item-wrap"},v&&(0,n.createElement)(u.A,{data:v,top:!0}),E&&(0,n.createElement)(m.A,{...e,items:E,item_tax:h,item_label:g}),(0,n.createElement)("div",{className:"pv-inv-account"},(0,n.createElement)(i.A,{...e}),(0,n.createElement)(o.A,{inv:e.data.invoice})),y&&(0,n.createElement)(u.A,{data:y}),b&&(0,n.createElement)(d.A,{data:b})))))}},56564:(e,t,a)=>{a.d(t,{Fi:()=>r,Gl:()=>l,QF:()=>c,rL:()=>m});var n=a(81083);const l=(e,t="USD",a="en")=>{try{return new Intl.NumberFormat(a,{style:"currency",currency:t,minimumFractionDigits:0,maximumFractionDigits:2}).format(e)}catch(t){return e}},r=(e="")=>{if(e){let t=n.T9.find(((t,a)=>{if(t[1]===e)return!0}));if(t)return t[0]}},c=()=>{let e=window.location.hash,t=document.querySelectorAll("#toplevel_page_ndpv ul > li");for(let a=0,n=t.length;a<n;a++){const n=t[a].querySelector("a");e=e.replace(/[0-9]|\/+$/g,""),e&&n&&n.getAttribute("href").includes(e)?t[a].classList.add("current"):(t[a].classList.remove("current"),!e&&n&&"admin.php?page=ndpv#"===n.getAttribute("href")&&t[a].classList.add("current"))}},m=(...e)=>{const t={};return e.forEach((e=>{for(const a in e)e.hasOwnProperty(a)&&("first_name"!==a&&void 0!==e[a]&&null!==e[a]&&""!==e[a]?t[a]=e[a]:t.hasOwnProperty(a)||(t[a]=e[a]))})),t}}}]);