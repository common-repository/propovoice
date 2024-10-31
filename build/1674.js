"use strict";(globalThis.webpackChunkpropovoice=globalThis.webpackChunkpropovoice||[]).push([[1674],{74263:(e,t,a)=>{a.d(t,{A:()=>s});var n=a(57536),r=a(60235);const o=r.y0+"media",l={...r.Sh,"Content-Type":"multipart/form-data","Cache-Control":"no-cache"},s={getAll:(e="")=>n.A.get(`${o}/?${e}`,r.Sh),getAttachment:e=>n.A.get(`${o}/attachment/${e}`,r.Sh),getDefaultAttachment:e=>n.A.get(`${o}/attachment/${e}/default/get`,r.Sh),setDefaultAttachment:(e,t)=>n.A.get(`${o}/attachment/${e}/default/set/${t}`,r.Sh),get:e=>n.A.get(`${o}/${e}`,r.Sh),create:e=>n.A.post(o,e,{headers:l}),update:(e,t)=>n.A.put(`${o}/${e}`,t,{headers:l}),remove:e=>n.A.delete(`${o}/${e}`,r.Sh),findByArg:e=>n.A.get(`${o}?title=${e}`,r.Sh)}},46412:(e,t,a)=>{a.d(t,{A:()=>l});var n=a(51609),r=a(7612),o=a(7834);const l=({color:e,onChange:t})=>{const a=(0,n.useRef)(),[l,s]=(0,n.useState)(!1),c=(0,n.useCallback)((()=>s(!1)),[]);return(0,o.A)(a,c),(0,n.createElement)(n.Fragment,null,(0,n.createElement)("div",{className:"pv-field-color-picker"},(0,n.createElement)("span",{style:{background:"#edf2f7"},onClick:()=>t("")},(0,n.createElement)("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none"},(0,n.createElement)("path",{d:"M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z",stroke:"#718096",strokeWidth:"1.5",strokeMiterlimit:10}),(0,n.createElement)("path",{d:"M17.5452 5.88672L6.29517 17.8867",stroke:"#718096",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}))),(0,n.createElement)("span",{style:{backgroundColor:"#f16063"},onClick:()=>t("#f16063")}),(0,n.createElement)("span",{style:{backgroundColor:"#f7936f"},onClick:()=>t("#f7936f")}),(0,n.createElement)("span",{style:{backgroundColor:"#4c6fff"},onClick:()=>t("#4c6fff")}),(0,n.createElement)("span",{style:{backgroundColor:"#18954d"},onClick:()=>t("#18954d")}),(0,n.createElement)("span",{style:{backgroundColor:e||"#edf2f7"},onClick:()=>s(!0)},(0,n.createElement)("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none"},(0,n.createElement)("path",{d:"M16.8562 10.8556L17.3155 11.315C17.5938 11.5974 17.7498 11.9779 17.7498 12.3744C17.7498 12.7708 17.5938 13.1513 17.3155 13.4337L16.6593 14.09C16.5895 14.1609 16.5063 14.2171 16.4146 14.2555C16.3228 14.294 16.2244 14.3137 16.1249 14.3137C16.0255 14.3137 15.927 14.294 15.8353 14.2555C15.7435 14.2171 15.6603 14.1609 15.5905 14.09L9.90929 8.40874C9.83843 8.33895 9.78215 8.25577 9.74374 8.16403C9.70533 8.07229 9.68555 7.97382 9.68555 7.87437C9.68555 7.77491 9.70533 7.67644 9.74374 7.5847C9.78215 7.49296 9.83843 7.40978 9.90929 7.33999L10.5655 6.68374C10.8479 6.40549 11.2285 6.24951 11.6249 6.24951C12.0214 6.24951 12.4019 6.40549 12.6843 6.68374L13.1437 7.14312L15.7312 4.55562C16.7437 3.54312 18.3937 3.48687 19.4249 4.47124C19.6795 4.71202 19.8833 5.00134 20.0243 5.32213C20.1653 5.64292 20.2406 5.9887 20.2458 6.33907C20.2511 6.68943 20.1861 7.03731 20.0548 7.36217C19.9235 7.68704 19.7284 7.98232 19.4812 8.23062L16.8562 10.8556Z",stroke:"#718096",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,n.createElement)("path",{d:"M14.8684 13.3684L9.61835 18.6184C9.24788 18.9933 8.78434 19.263 8.27529 19.3997C7.76623 19.5365 7.22996 19.5353 6.72148 19.3965L4.52773 20.3527C4.39091 20.4127 4.23929 20.4305 4.0923 20.4038C3.94532 20.3771 3.80966 20.3071 3.70273 20.2027V20.2027C3.62495 20.1262 3.57248 20.0276 3.55237 19.9204C3.53225 19.8131 3.54547 19.7023 3.59023 19.6027L4.60273 17.2777C4.46387 16.7692 4.46276 16.233 4.5995 15.7239C4.73623 15.2149 5.0059 14.7513 5.38085 14.3809L10.6309 9.13086",stroke:"#718096",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})))),l&&(0,n.createElement)("div",{className:"pv-popover",ref:a},(0,n.createElement)(r.jI,{color:e,onChange:t}),(0,n.createElement)("span",{style:{marginRight:"2px",width:"auto"}},"#"),(0,n.createElement)(r.HC,{color:e,onChange:t})))}},19642:(e,t,a)=>{a.d(t,{A:()=>u});var n=a(51609),r=a(46412),o=a(21241),l=a(92536),s=a(56303),c=a(43065),i=a(53417),m=a(36478);class u extends n.Component{constructor(e){super(e),this.initialState={id:null,label:"",color:"",bg_color:"",url:"",icon:null,val_type:"fixed",tax_cal:"",fee_cal:"",show:!0},this.state={submitPreloader:!1,form:this.initialState}}handleChange=e=>{const t=e.target,{name:a}=t,n="checkbox"==t.type?t.checked:t.value;this.setState({form:{...this.state.form,[a]:n}})};handleColorChange=(e,t)=>{let a={...this.state.form};"bg_color"==t?(a.bg_color=e,a.color=this.lightenDarkenColor(e,-80)):a.color=e,this.setState({form:a})};lightenDarkenColor=(e,t)=>{let a=parseInt(e.substring(1,3),16),n=parseInt(e.substring(3,5),16),r=parseInt(e.substring(5,7),16);return a=parseInt(a*(100+t)/100),n=parseInt(n*(100+t)/100),r=parseInt(r*(100+t)/100),a=a<255?a:255,n=n<255?n:255,r=r<255?r:255,"#"+(1==a.toString(16).length?"0"+a.toString(16):a.toString(16))+(1==n.toString(16).length?"0"+n.toString(16):n.toString(16))+(1==r.toString(16).length?"0"+r.toString(16):r.toString(16))};componentDidMount(){this.editData()}componentDidUpdate(){}editData=()=>{if("edit"==this.props.modalType)this.state.form.id!=this.props.data.id&&this.setState({form:this.props.data});else{let e={...this.initialState};if("extra_amount"==this.props.taxonomy){let t=this.props.extra_amount_type;"discount"==t&&(e.tax_cal="1",e.fee_cal="1"),"fee"==t&&(e.tax_cal="1")}null==this.state.form.id&&this.setState({form:e})}};handleSubmit=e=>{if(e.preventDefault(),ndpv.isDemo)return void o.oR.error(ndpv.demoMsg);let t={...this.state.form};t.taxonomy=this.props.taxonomy,this.setState({submitPreloader:!0}),"new"==this.props.modalType?(this.props.extra_amount_type&&(t.extra_amount_type=this.props.extra_amount_type),s.A.add("taxonomies",t).then((e=>{this.setState({submitPreloader:!1}),e.data.success?(o.oR.success(ndpv.i18n.aAdd),t.id=e.data.data,this.props.close(),this.props.reload(t)):e.data.data.forEach((function(e){o.oR.error(e)}))}))):s.A.edit("taxonomies",t.id,t).then((e=>{this.setState({submitPreloader:!1}),e.data.success?(o.oR.success(ndpv.i18n.aUpd),this.props.close(),this.props.reload()):e.data.data.forEach((function(e){o.oR.error(e)}))}))};handleLogoChange=e=>{let t={...this.state.form};t.icon=e,this.setState({form:t})};render(){const e=ndpv.i18n,t=this.props.extra_amount_type,{submitPreloader:a,form:o}=this.state;return(0,n.createElement)("div",{className:"pv-overlay pv-show"},(0,n.createElement)("div",{className:"pv-modal-content pv-modal-style-two pv-modal-small"},(0,n.createElement)("div",{className:"pv-modal-header"},(0,n.createElement)("span",{className:"pv-close",onClick:()=>this.props.close()},(0,n.createElement)(c.OM,null)),(0,n.createElement)("h2",{className:"pv-modal-title"},"new"==this.props.modalType?e.new:e.edit," ",this.props.title)),(0,n.createElement)(m._H,{submitPreloader:a,submitHandler:this.handleSubmit,close:this.props.close,formTag:this.props.formTag},(0,n.createElement)(m.sf,{formStyleClass:"pv-form-style-one"},(0,n.createElement)("div",{className:"row"},(0,n.createElement)(i.EY,{label:e.name,id:"field-label",type:"text",name:"label",wrapperClassName:"col-md",value:o.label,onChange:e=>this.handleChange(e),validation:{required:{value:!0}}})),this.props.color&&(0,n.createElement)(n.Fragment,null,(0,n.createElement)("div",{className:"row"},(0,n.createElement)("div",{className:"col-md"},(0,n.createElement)("label",{htmlFor:"field-bg_color"},e.bg," ",e.color),(0,n.createElement)(r.A,{color:o.bg_color,onChange:e=>this.handleColorChange(e,"bg_color")}))),(0,n.createElement)("div",{className:"row"},(0,n.createElement)("div",{className:"col-md"},(0,n.createElement)("label",{htmlFor:"field-color"},e.text," ",e.color),(0,n.createElement)(r.A,{color:o.color,onChange:e=>this.handleColorChange(e,"color")}))),!1),this.props.url&&(0,n.createElement)("div",{className:"row"},(0,n.createElement)(i.EY,{label:e.url,id:"field-url",type:"url",name:"url",wrapperClassName:"col-md",value:o.url,onChange:e=>this.handleChange(e),validation:{required:{value:!0}}})),this.props.icon&&(0,n.createElement)("div",{className:"row"},(0,n.createElement)("div",{className:"col-md"},(0,n.createElement)("label",{htmlFor:"field-icon"},e.icon),(0,n.createElement)(l.A,{data:o.icon,small:!0,changeHandler:this.handleLogoChange}))),this.props.fee_cal&&(0,n.createElement)("div",{className:"row"},(0,n.createElement)("div",{className:"col-md"},(0,n.createElement)("label",{htmlFor:"field-label"},e.fee," ",e.cal),(0,n.createElement)("select",{name:"fee_cal",value:o.fee_cal,onChange:this.handleChange},(0,n.createElement)("option",{value:""},e.with," ",e.fee),(0,n.createElement)("option",{value:"1"},e.witho," ",e.fee)))),this.props.tax_cal&&(0,n.createElement)("div",{className:"row"},(0,n.createElement)("div",{className:"col-md"},(0,n.createElement)("label",{htmlFor:"field-label"},e.tax," ",e.cal),(0,n.createElement)("select",{name:"tax_cal",value:o.tax_cal,onChange:this.handleChange},(0,n.createElement)("option",{value:""},e.with," ","tax"==t?e.item:""," ",e.tax),(0,n.createElement)("option",{value:"1"},e.witho," ","tax"==t?e.item:""," ",e.tax)))),this.props.show&&(0,n.createElement)("div",{className:"row"},(0,n.createElement)("div",{className:"col"},(0,n.createElement)("label",{id:"form-show"},e.def),(0,n.createElement)("div",{className:"pv-field-switch pv-mt-3 pv-ml-10"},(0,n.createElement)("label",{className:"pv-switch"},(0,n.createElement)("input",{type:"checkbox",id:"form-show",name:"show",checked:o.show?"checked":"",onChange:this.handleChange}),(0,n.createElement)("span",{className:"pv-switch-slider pv-round"}))))),t&&(0,n.createElement)(n.Fragment,null,(0,n.createElement)("div",{className:"row"},(0,n.createElement)("div",{className:"col-md"},(0,n.createElement)("label",{htmlFor:"field-label"},e.rate," ",e.type),(0,n.createElement)("select",{name:"val_type",value:o.val_type,onChange:this.handleChange},(0,n.createElement)("option",{value:"percent"},e.pct),(0,n.createElement)("option",{value:"fixed"},e.fix)))),(0,n.createElement)("div",{className:"row"},(0,n.createElement)("div",{className:"col"},(0,n.createElement)("label",{id:"form-show"},e.alw," ",e.show),(0,n.createElement)("div",{className:"pv-field-switch pv-mt-3 pv-ml-10"},(0,n.createElement)("label",{className:"pv-switch"},(0,n.createElement)("input",{type:"checkbox",id:"form-show",name:"show",checked:o.show?"checked":"",onChange:this.handleChange}),(0,n.createElement)("span",{className:"pv-switch-slider pv-round"}))))))))))}}},67948:(e,t,a)=>{a.d(t,{A:()=>u});var n=a(51609),r=a(68951),o=a(21241),l=a(56303);var s=a(19642),c=a(55800),i=a(25928),m=a(394);const u=e=>{const[t,a]=(0,n.useState)(!1),[u,d]=(0,n.useState)([]),[p,h]=(0,n.useState)(!1),[f,v]=(0,n.useState)("new"),g={label:"",color:"",bg_color:""},[E,C]=(0,n.useState)(g);(0,n.useEffect)((()=>{a(!0),b()}),[]);const b=()=>{let t="";e.extra_amount_type&&(t="&extra_amount_type="+e.extra_amount_type),l.A.get("taxonomies","taxonomy="+e.taxonomy+t).then((t=>{t.data.success&&(d(t.data.data[e.taxonomy]),a(!1))}))},y=(t,a,n="")=>{t.preventDefault(),"new"==a&&wage.length>0&&"tag"!=e.taxonomy&&"lead_level"!=e.taxonomy&&"lead_source"!=e.taxonomy&&"lead_source"!=e.taxonomy&&"task_status"!=e.taxonomy&&"task_type"!=e.taxonomy&&"task_priority"!=e.taxonomy&&"estinv_qty_type"!=e.taxonomy&&"contact_status"!=e.taxonomy?(0,i.A)():(h(!0),"new"==a?(v(a),C(g)):(v(a),C(n)))},x=ndpv.i18n;return(0,n.createElement)(n.Fragment,null,(0,n.createElement)("div",{className:"pv-field-repeater"},t?(0,n.createElement)(c.A,null):(0,n.createElement)(r.JY,{onDragEnd:t=>{if(!t.destination)return;const a=((e,t,a)=>{const n=Array.from(e),[r]=n.splice(t,1);return n.splice(a,0,r),n})(u,t.source.index,t.destination.index);d(a);let n={reorder:a.map((function(e){return parseInt(e.id)})),taxonomy:e.taxonomy};l.A.add("taxonomies",n)}},(0,n.createElement)(r.gL,{droppableId:"droppable"},((t,a)=>(0,n.createElement)("ul",{ref:t.innerRef,style:{margin:0},className:a.isDraggingOver?"BsN2KTJ2n8JHDpAEfQe2":""},u.map(((t,a)=>(0,n.createElement)(r.sx,{key:t.id,draggableId:t.id,index:a},((a,r)=>(0,n.createElement)("li",{ref:a.innerRef,...a.draggableProps,...a.dragHandleProps,style:a.draggableProps.style,className:r.isDragging?"jyGpKCv2gCBsHwHxAoJT":"VlCGAWLyKhwWzHQ1jVkE"},(0,n.createElement)("div",{className:""},(0,n.createElement)("span",{className:"pv-mt-3 pv-dot-list"},(0,n.createElement)("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none"},(0,n.createElement)("path",{d:"M5.625 9.75C6.24632 9.75 6.75 9.24632 6.75 8.625C6.75 8.00368 6.24632 7.5 5.625 7.5C5.00368 7.5 4.5 8.00368 4.5 8.625C4.5 9.24632 5.00368 9.75 5.625 9.75Z",fill:"#CBD5E0"}),(0,n.createElement)("path",{d:"M12 9.75C12.6213 9.75 13.125 9.24632 13.125 8.625C13.125 8.00368 12.6213 7.5 12 7.5C11.3787 7.5 10.875 8.00368 10.875 8.625C10.875 9.24632 11.3787 9.75 12 9.75Z",fill:"#CBD5E0"}),(0,n.createElement)("path",{d:"M18.375 9.75C18.9963 9.75 19.5 9.24632 19.5 8.625C19.5 8.00368 18.9963 7.5 18.375 7.5C17.7537 7.5 17.25 8.00368 17.25 8.625C17.25 9.24632 17.7537 9.75 18.375 9.75Z",fill:"#CBD5E0"}),(0,n.createElement)("path",{d:"M5.625 16.5C6.24632 16.5 6.75 15.9963 6.75 15.375C6.75 14.7537 6.24632 14.25 5.625 14.25C5.00368 14.25 4.5 14.7537 4.5 15.375C4.5 15.9963 5.00368 16.5 5.625 16.5Z",fill:"#CBD5E0"}),(0,n.createElement)("path",{d:"M12 16.5C12.6213 16.5 13.125 15.9963 13.125 15.375C13.125 14.7537 12.6213 14.25 12 14.25C11.3787 14.25 10.875 14.7537 10.875 15.375C10.875 15.9963 11.3787 16.5 12 16.5Z",fill:"#CBD5E0"}),(0,n.createElement)("path",{d:"M18.375 16.5C18.9963 16.5 19.5 15.9963 19.5 15.375C19.5 14.7537 18.9963 14.25 18.375 14.25C17.7537 14.25 17.25 14.7537 17.25 15.375C17.25 15.9963 17.7537 16.5 18.375 16.5Z",fill:"#CBD5E0"}))),e.color&&(0,n.createElement)(n.Fragment,null,t.color&&t.bg_color&&(0,n.createElement)("span",{className:"pv-badge",style:{backgroundColor:t.bg_color,color:t.color}},(0,n.createElement)("svg",{width:6,height:6,viewBox:"0 0 6 6",fill:"none"},(0,n.createElement)("circle",{cx:3,cy:3,r:3,fill:t.color})),t.label),(!t.color||!t.bg_color)&&(0,n.createElement)("span",{className:"pv-badge"},t.label)),!e.color&&(0,n.createElement)("span",{className:"pv-badge"},t.label)),(0,n.createElement)("div",{className:"pv-mt-3"},(0,n.createElement)("span",{style:{padding:"5px",cursor:"pointer"},onClick:e=>{y(e,"edit",t)}},(0,n.createElement)("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none"},(0,n.createElement)("path",{d:"M5.79375 13.4999H3C2.86739 13.4999 2.74022 13.4473 2.64645 13.3535C2.55268 13.2597 2.5 13.1326 2.5 12.9999V10.2062C2.49978 10.1413 2.51236 10.0769 2.53702 10.0169C2.56169 9.95682 2.59796 9.90222 2.64375 9.85619L10.1438 2.3562C10.1903 2.30895 10.2457 2.27144 10.3069 2.24583C10.3681 2.22022 10.4337 2.20703 10.5 2.20703C10.5663 2.20703 10.632 2.22022 10.6931 2.24583C10.7543 2.27144 10.8097 2.30895 10.8563 2.3562L13.6438 5.1437C13.691 5.19022 13.7285 5.24568 13.7541 5.30684C13.7797 5.368 13.7929 5.43364 13.7929 5.49995C13.7929 5.56625 13.7797 5.63189 13.7541 5.69305C13.7285 5.75421 13.691 5.80967 13.6438 5.85619L6.14375 13.3562C6.09773 13.402 6.04313 13.4383 5.98307 13.4629C5.92301 13.4876 5.85868 13.5002 5.79375 13.4999V13.4999Z",stroke:"#CBD5E0",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,n.createElement)("path",{d:"M8.5 4L12 7.5",stroke:"#CBD5E0",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}))),(!t.hasOwnProperty("type")||!t.type)&&(0,n.createElement)("span",{style:{padding:"5px",cursor:"pointer"},onClick:()=>{var a,n;a=t.id,n=e.taxonomy,ndpv.isDemo?o.oR.error(ndpv.demoMsg):confirm(ndpv.i18n.aConf)&&l.A.del("taxonomies",a+"/"+n).then((e=>{e.data.success?(o.oR.success(ndpv.i18n.aDel),b()):e.data.data.forEach((function(e){o.oR.error(e)}))}))}},(0,n.createElement)("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none"},(0,n.createElement)("path",{d:"M13.5 3.5H2.5",stroke:"#CBD5E0",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,n.createElement)("path",{d:"M5.5 1.5H10.5",stroke:"#CBD5E0",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,n.createElement)("path",{d:"M12.5 3.5V13C12.5 13.1326 12.4473 13.2598 12.3536 13.3536C12.2598 13.4473 12.1326 13.5 12 13.5H4C3.86739 13.5 3.74021 13.4473 3.64645 13.3536C3.55268 13.2598 3.5 13.1326 3.5 13V3.5",stroke:"#CBD5E0",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}))))))))),t.placeholder)))),(0,n.createElement)("button",{className:"pv-btn",onClick:e=>{y(e,"new")}},(0,n.createElement)("svg",{width:12,height:13,viewBox:"0 0 12 13",fill:"none"},(0,n.createElement)("path",{d:"M1.875 6.5H10.125",stroke:"#718096",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,n.createElement)("path",{d:"M6 2.375V10.625",stroke:"#718096",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})),x.add_new," ",e.title,wage.length>0&&"tag"!=e.taxonomy&&"lead_level"!=e.taxonomy&&"lead_source"!=e.taxonomy&&"lead_source"!=e.taxonomy&&"task_status"!=e.taxonomy&&"task_type"!=e.taxonomy&&"task_priority"!=e.taxonomy&&"estinv_qty_type"!=e.taxonomy&&"contact_status"!=e.taxonomy&&(0,n.createElement)(m.A,null))),p&&(0,n.createElement)(s.A,{...e,taxonomy:e.taxonomy,title:e.title,modalType:f,reload:b,data:E,color:e.color,close:()=>h(!1)}))}},92536:(e,t,a)=>{a.d(t,{A:()=>c});var n=a(51609),r=a.n(n),o=a(21241),l=a(74263),s=a(51945);function c({label:e=ndpv.i18n.upload,btnClass:t="",imgClass:a="",data:c,multiple:i,clipOnly:m,readOnly:u,...d}){const[p,h]=(0,n.useState)(!1),f=r().createRef(),v=e=>{confirm(ndpv.i18n.aConf)&&(d.multiple?d.changeHandler(e,!0):d.changeHandler(null),l.A.remove(e).then((e=>{e.data.success||e.data.data.forEach((function(e){o.oR.error(e)}))})))},g=e=>{e.preventDefault(),d.library?h(!0):f.current.click()};let E=void 0===d.remove;return(0,n.createElement)("div",{className:"pv-field-logo-wrap "+a},!1,c&&!i&&(0,n.createElement)(n.Fragment,null,(0,n.createElement)("div",{className:"pv-field-logo"},"application/pdf"==c.type?(0,n.createElement)("a",{href:c.src,target:"_blank"},c.name):(0,n.createElement)("div",{style:{width:d.small?40:100,display:"inline-block"}},(0,n.createElement)(s.A,{small:c.src,large:c.src})),E&&(0,n.createElement)("span",{className:"pv-field-logo-close",onClick:()=>v(c.id)},"×"))),i&&c.length>0&&(0,n.createElement)(n.Fragment,null,c&&c.map(((e,t)=>(0,n.createElement)("div",{className:"pv-field-logo",key:t,style:{marginRight:10}},"application/pdf"==e.type?e.name:(0,n.createElement)("img",{src:e.src,width:d.small?"40":"100"}),E&&(0,n.createElement)("span",{className:"pv-field-logo-close",onClick:()=>v(e.id)},"×"))))),!d.viewOnly&&(!c||i)&&(0,n.createElement)(n.Fragment,null,(0,n.createElement)("input",{type:"file",ref:f,onChange:e=>{(e=>{d.isSelectedFile&&d.selectedFile(e.target.files[0])})(e),(e=>{const t=new FormData;t.append("file",e);const a=d.attach_type||"ndpv";t.append("attach_type",a);let n=void 0!==d.permission;t.append("permission",n),l.A.create(t).then((e=>{e.data.success?d.changeHandler(e.data.data):e.data.data.forEach((function(e){o.oR.error(e)}))}))})(e.target.files[0])},style:{display:"none"}}),!m&&(0,n.createElement)("button",{className:"pv-btn pv-bg-stroke pv-bg-hover-stroke "+t,onClick:e=>g(e),style:{padding:d.padding?d.padding:"10px 20px",border:"1px solid #E2E8F0"},disabled:u},(0,n.createElement)("svg",{width:25,height:25,viewBox:"0 0 14 14",fill:"none"},(0,n.createElement)("path",{d:"M3.66824 10.0907C3.01193 10.0915 2.37842 9.85536 1.88909 9.42768C1.39976 9 1.08901 8.41081 1.01638 7.773C0.943746 7.13518 1.11434 6.49358 1.49547 5.97112C1.87661 5.44866 2.44148 5.08208 3.08188 4.94161C2.89659 4.09662 3.06217 3.21426 3.5422 2.48865C4.02223 1.76304 4.77738 1.25361 5.64153 1.07243C6.50568 0.891248 7.40804 1.05316 8.1501 1.52254C8.89217 1.99193 9.41315 2.73034 9.59844 3.57533H9.66507C10.4913 3.57451 11.2883 3.87392 11.9014 4.41541C12.5146 4.9569 12.9001 5.70185 12.9831 6.50564C13.0662 7.30943 12.8408 8.11472 12.3508 8.76517C11.8608 9.41562 11.1411 9.86483 10.3314 10.0256M8.99875 8.13612L6.99981 6.1815M6.99981 6.1815L5.00087 8.13612M6.99981 6.1815V13",stroke:"#4C6FFF",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})),(0,n.createElement)("span",null,e)),m&&(0,n.createElement)("span",{className:"pv-paper-clip",onClick:e=>g(e)},(0,n.createElement)("svg",{width:15,height:16,viewBox:"0 0 15 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,n.createElement)("path",{d:"M10.5001 4.24894L3.99228 10.8661C3.77683 11.1039 3.66107 11.4154 3.66897 11.7362C3.67687 12.057 3.80782 12.3624 4.03471 12.5893C4.2616 12.8162 4.56705 12.9472 4.88783 12.9551C5.2086 12.963 5.52013 12.8472 5.75791 12.6318L13.5157 4.76457C13.9466 4.28901 14.1781 3.66595 14.1623 3.0244C14.1465 2.38286 13.8846 1.77195 13.4309 1.31817C12.9771 0.864391 12.3662 0.602491 11.7246 0.586696C11.0831 0.5709 10.46 0.802418 9.98447 1.23332L2.22666 9.10051C1.52425 9.80292 1.12964 10.7556 1.12964 11.7489C1.12964 12.7423 1.52425 13.695 2.22666 14.3974C2.92907 15.0998 3.88174 15.4944 4.8751 15.4944C5.86845 15.4944 6.82112 15.0998 7.52353 14.3974L13.9376 7.99894",stroke:"#2D3748",strokeLinecap:"round",strokeLinejoin:"round"})))))}},36478:(e,t,a)=>{a.d(t,{_H:()=>i,cK:()=>c,sf:()=>m});var n=a(51609),r=a(21241),o=a(55800),l=a(394),s=a(29425);const c=(0,n.createContext)({});function i({submitHandler:e,submitPreloader:t=!1,close:a,submitLabel:o,children:l,formTag:i=!0,isMultipart:m=!1,isPro:d=!1,showSubmitButton:p=!0}){const[h,f]=(0,n.useState)({}),[v,g]=(0,n.useState)({}),[E,C]=(0,n.useState)({}),[b,y]=(0,n.useState)(!1),[x,k]=(0,n.useState)();(0,n.useEffect)((()=>{b&&x&&(0===w(v)?e(x):r.oR.error("Invalid submission!!!"),y(!1))}),[b,v]);const w=e=>e&&"object"==typeof e?Object.values(e).reduce((function(e,t){return e+t.length}),0):0,_=e=>{e.preventDefault(),(0,s.hs)(h,f,g),y(!0),k(e)},N=(0,n.createElement)(n.Fragment,null,l,(0,n.createElement)(u,{close:a,submitPreloader:t,submitLabel:o,formTag:i,onSubmit:_,isPro:d,showSubmitButton:p}));return(0,n.createElement)(c.Provider,{value:{form:h,setForm:f,setErrorFields:g,groupFields:E,setGroupFields:C}},i?m?(0,n.createElement)("form",{onSubmit:_,encType:"multipart/form-data"},N):(0,n.createElement)("form",{onSubmit:_},N):(0,n.createElement)("div",null,N))}function m({formStyleClass:e,children:t}){return(0,n.createElement)("div",{className:"pv-content"},(0,n.createElement)("div",{className:e},t))}function u({close:e,submitPreloader:t,submitLabel:a,formTag:r,onSubmit:s,isPro:c,showSubmitButton:i}){const m=ndpv.i18n;return(0,n.createElement)("div",{className:"pv-modal-footer"},(0,n.createElement)("div",{className:"row"},(0,n.createElement)("div",{className:"col"},e&&(0,n.createElement)("button",{type:"reset",className:"pv-btn pv-text-hover-blue",onClick:()=>e()},m.cancel)),i&&(0,n.createElement)("div",{className:"col"},(0,n.createElement)("button",{type:"submit",disabled:t,...r?{}:{onClick:s},className:"pv-btn pv-bg-blue pv-bg-hover-blue  pv-float-right pv-color-white"},t&&(0,n.createElement)(o.A,{submit:!0})," ",a||m.save,c&&(0,n.createElement)(l.A,{blueBtn:!0})))))}},8935:(e,t,a)=>{a.d(t,{A:()=>o});var n=a(51609),r=a(81083);const o=e=>{const t=ndpv.i18n,{data:a,handleChange:o,selectCountry:l}=e;return(0,n.createElement)(n.Fragment,null,(0,n.createElement)("div",{className:"row"},(0,n.createElement)("div",{className:"col-md-6"},(0,n.createElement)("label",{htmlFor:"form-country"},t.country),(0,n.createElement)(r.wP,{value:a.country,valueType:"short",onChange:e=>l(e)})),(0,n.createElement)("div",{className:"col-md-6"},(0,n.createElement)("label",{htmlFor:"form-region"},t.state_region),(0,n.createElement)("input",{id:"form-region",type:"text",name:"region",value:a.region,onChange:o}))),(0,n.createElement)("div",{className:"row"},(0,n.createElement)("div",{className:"col"},(0,n.createElement)("label",{htmlFor:"form-address"},t.addr),(0,n.createElement)("input",{id:"form-address",type:"text",name:"address",value:a.address,onChange:o}))),(0,n.createElement)("div",{className:"row"},(0,n.createElement)("div",{className:"col-md"},(0,n.createElement)("label",{htmlFor:"field-city"},t.city),(0,n.createElement)("input",{id:"field-city",type:"text",name:"city",value:a.city,onChange:o})),(0,n.createElement)("div",{className:"col-md"},(0,n.createElement)("label",{htmlFor:"field-zip"},t.zip),(0,n.createElement)("input",{id:"field-zip",type:"text",name:"zip",value:a.zip,onChange:o}))))}},95231:(e,t,a)=>{a.d(t,{A:()=>o});var n=a(51609),r=a(43065);const o=({label:e,type:t="button",iconName:a,size:o,cssStyle:l,handleClick:s,buttonStyle:c="default"})=>{const i={white:{button:{css:{},class:"pv-bg-stroke pv-bg-hover-stroke"},icon:"blue"},default:{button:{css:{},class:"pv-bg-blue pv-color-white pv-bg-air-white pv-bg-hover-blue"},icon:"default"}};return(0,n.createElement)("button",{type:t,style:{margin:"5px",...l,...i[c].button.css},className:"pv-btn "+{big:"pv-btn-big",medium:" pv-btn-medium"}[o]+" "+i[c].button.class,onClick:e=>{e.preventDefault(),s()}},(0,n.createElement)(r.BS,{name:a,style:i[c].icon}),e)}},97300:(e,t,a)=>{a.d(t,{A:()=>r});var n=a(51609);const r=({style:e,id:t,name:a,label:r={},changeHandler:o,isChecked:l})=>{const s=(0,n.createElement)("input",{type:"checkbox",id:t,name:a,checked:l,onChange:o}),c=(0,n.createElement)("div",{className:"pv-field-switch"},(0,n.createElement)("label",{className:"pv-switch"},s,(0,n.createElement)("span",{className:"pv-switch-slider pv-round"}))),i="left"===r?.position?"marginRight":"marginLeft",m=r?.text&&(0,n.createElement)("label",{id:t,style:{[i]:"10px"}},r.text);return(0,n.createElement)(n.Fragment,null,"left"===r?.position&&m,"switch"===e?c:s,"right"===r?.position&&m)}},62926:(e,t,a)=>{a.d(t,{A:()=>l});var n=a(51609),r=a(36478),o=a(29425);const l=({label:e,wrapperClassName:t="col",validation:a={},onChange:l=(()=>{}),...s})=>{var c;const{form:i,setForm:m,setErrorFields:u,setGroupFields:d}=(0,n.useContext)(r.cK),{name:p,value:h=""}=s,f=i[p]?.validation||{};(0,n.useEffect)((()=>{p in i||m((e=>({...e,[p]:{...e[p],value:h,validation:a}})))}),[]),(0,n.useEffect)((()=>{m((e=>({...e,[p]:{...e[p],value:h}})))}),[h]);const v=null!==(c=i[p]?.validation?.required?.value)&&void 0!==c&&c;return(0,n.createElement)("div",{className:t},(0,n.createElement)("label",{htmlFor:s.id},e," ",v&&(0,n.createElement)("span",{style:{color:"red"},title:"This field is required"},"*")),(0,n.createElement)("input",{onChange:e=>{m((t=>({...t,[p]:{...t[p],value:e.target.value}}))),(0,o.UF)(p,e.target.value,i,m,u),l(e)},...s}),Object.entries(f).map((([e,{error:t=""}])=>(0,n.createElement)("div",{key:e,style:{color:"#fd5870",marginTop:"4px"}},t.charAt(0).toUpperCase()+t.slice(1)))))}},53417:(e,t,a)=>{a.d(t,{$n:()=>n.A,EY:()=>o.A,Sc:()=>r.A,pV:()=>l.A});var n=a(95231),r=a(97300),o=a(62926),l=a(8935)},29425:(e,t,a)=>{a.d(t,{UF:()=>r,hs:()=>o});const n={required:"field is required",email:"is invalid"},r=(e,t,a,n,r)=>{for(const[o,s]of Object.entries(a[e].validation))l(o,s,e,t,n,r)},o=(e,t,a)=>{for(const[n,{value:r,validation:o}]of Object.entries(e))for(const[e,s]of Object.entries(o))l(e,s,n,r,t,a)},l=(e,t,a,n,r,o)=>{switch(e){case"required":s(e,t,a,n,r,o);break;case"email":c(e,t,a,n,r,o)}},s=(e,t,a,n,r,o)=>{t?.value&&0===n?.length?m(e,t,a,r,o):u(e,a,r,o,!0)},c=(e,t,a,n,r,o)=>{!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,63}$/.test(n)&&n.length>0?m(e,t,a,r,o):u(e,a,r,o,!0)},i=(e,t,a,n,r="default")=>{e((e=>(r="default"!==r?r:e[t].validation[a].value,{...e,[t]:{...e[t],validation:{...e[t].validation,[a]:{...e[t].validation[a],value:r,error:n}}}})))},m=(e,t,a,r,o)=>{var l;const s=null!==(l=t.message)&&void 0!==l?l:a+" "+n[e];i(r,a,e,s),o((t=>{const n=Array.isArray(t[a])?[...t[a],e]:[e];return{...t,[a]:[...new Set(n)]}}))},u=(e,t,a,n,r=!1)=>{i(a,t,e,"",r),n((a=>{if(a[t]&&Array.isArray(a[t])){const n=a[t].indexOf(e);-1!==n&&a[t].splice(n,1)}return a}))}},25928:(e,t,a)=>{function n(){document.getElementById("pv-pro-alert").style.display="block"}a.d(t,{A:()=>n})},394:(e,t,a)=>{a.d(t,{A:()=>r});var n=a(51609);const r=e=>(0,n.createElement)(n.Fragment,null,wage.length>0&&(0,n.createElement)("span",{className:"pv-pro-label",onClick:()=>{document.getElementById("pv-pro-alert").style.display="block"},style:{background:e.blueBtn?"#FFEED9":"auto"}},(0,n.createElement)("svg",{width:13,height:10,viewBox:"0 0 13 10",fill:"none"},(0,n.createElement)("path",{d:"M1.71013 8.87452C1.72412 8.93204 1.7495 8.98616 1.78477 9.0337C1.82003 9.08124 1.86447 9.12123 1.91545 9.15131C1.96643 9.18139 2.02292 9.20094 2.08158 9.20882C2.14025 9.2167 2.19989 9.21274 2.257 9.19718C4.86395 8.47534 7.61803 8.47534 10.225 9.19718C10.2821 9.21274 10.3417 9.2167 10.4004 9.20882C10.4591 9.20094 10.5156 9.18139 10.5665 9.15131C10.6175 9.12123 10.6619 9.08124 10.6972 9.0337C10.7325 8.98616 10.7579 8.93204 10.7718 8.87452L12.1664 2.95187C12.1855 2.87259 12.1821 2.78954 12.1566 2.71209C12.131 2.63464 12.0843 2.56588 12.0218 2.51356C11.9592 2.46123 11.8833 2.42744 11.8025 2.41599C11.7218 2.40454 11.6395 2.41588 11.5648 2.44874L8.79763 3.67921C8.69737 3.72336 8.5843 3.72879 8.48027 3.69445C8.37624 3.6601 8.28863 3.58843 8.23435 3.49327L6.62653 0.594837C6.5887 0.526455 6.53324 0.469456 6.46592 0.429765C6.3986 0.390074 6.32187 0.369141 6.24372 0.369141C6.16557 0.369141 6.08885 0.390074 6.02153 0.429765C5.95421 0.469456 5.89874 0.526455 5.86091 0.594837L4.2531 3.49327C4.19882 3.58843 4.1112 3.6601 4.00717 3.69445C3.90314 3.72879 3.79008 3.72336 3.68982 3.67921L0.922629 2.44874C0.847988 2.41588 0.765648 2.40454 0.684901 2.41599C0.604154 2.42744 0.528216 2.46123 0.465658 2.51356C0.403099 2.56588 0.35641 2.63464 0.330861 2.71209C0.305312 2.78954 0.301919 2.87259 0.321067 2.95187L1.71013 8.87452Z",fill:"#FF6B00"})),"Pro"))},11674:(e,t,a)=>{a.r(t),a.d(t,{default:()=>l});var n=a(51609),r=a(67948);const o=e=>{const t=ndpv.i18n;return(0,n.createElement)("div",{className:"pv-form-style-one"},(0,n.createElement)("div",{className:"row"},(0,n.createElement)("div",{className:"col"},(0,n.createElement)("label",null,t.project," ",t.status),(0,n.createElement)(r.A,{taxonomy:"project_status",title:t.status,color:!0})),(0,n.createElement)("div",{className:"col"})))},l=e=>(0,n.createElement)(o,{...e})},7612:(e,t,a)=>{a.d(t,{HC:()=>j,jI:()=>F});var n=a(51609);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t.indexOf(a=o[n])>=0||(r[a]=e[a]);return r}function l(e){var t=(0,n.useRef)(e),a=(0,n.useRef)((function(e){t.current&&t.current(e)}));return t.current=e,a.current}var s=function(e,t,a){return void 0===t&&(t=0),void 0===a&&(a=1),e>a?a:e<t?t:e},c=function(e){return"touches"in e},i=function(e){return e&&e.ownerDocument.defaultView||self},m=function(e,t,a){var n=e.getBoundingClientRect(),r=c(t)?function(e,t){for(var a=0;a<e.length;a++)if(e[a].identifier===t)return e[a];return e[0]}(t.touches,a):t;return{left:s((r.pageX-(n.left+i(e).pageXOffset))/n.width),top:s((r.pageY-(n.top+i(e).pageYOffset))/n.height)}},u=function(e){!c(e)&&e.preventDefault()},d=n.memo((function(e){var t=e.onMove,a=e.onKey,s=o(e,["onMove","onKey"]),d=(0,n.useRef)(null),p=l(t),h=l(a),f=(0,n.useRef)(null),v=(0,n.useRef)(!1),g=(0,n.useMemo)((function(){var e=function(e){u(e),(c(e)?e.touches.length>0:e.buttons>0)&&d.current?p(m(d.current,e,f.current)):a(!1)},t=function(){return a(!1)};function a(a){var n=v.current,r=i(d.current),o=a?r.addEventListener:r.removeEventListener;o(n?"touchmove":"mousemove",e),o(n?"touchend":"mouseup",t)}return[function(e){var t=e.nativeEvent,n=d.current;if(n&&(u(t),!function(e,t){return t&&!c(e)}(t,v.current)&&n)){if(c(t)){v.current=!0;var r=t.changedTouches||[];r.length&&(f.current=r[0].identifier)}n.focus(),p(m(n,t,f.current)),a(!0)}},function(e){var t=e.which||e.keyCode;t<37||t>40||(e.preventDefault(),h({left:39===t?.05:37===t?-.05:0,top:40===t?.05:38===t?-.05:0}))},a]}),[h,p]),E=g[0],C=g[1],b=g[2];return(0,n.useEffect)((function(){return b}),[b]),n.createElement("div",r({},s,{onTouchStart:E,onMouseDown:E,className:"react-colorful__interactive",ref:d,onKeyDown:C,tabIndex:0,role:"slider"}))})),p=function(e){return e.filter(Boolean).join(" ")},h=function(e){var t=e.color,a=e.left,r=e.top,o=void 0===r?.5:r,l=p(["react-colorful__pointer",e.className]);return n.createElement("div",{className:l,style:{top:100*o+"%",left:100*a+"%"}},n.createElement("div",{className:"react-colorful__pointer-fill",style:{backgroundColor:t}}))},f=function(e,t,a){return void 0===t&&(t=0),void 0===a&&(a=Math.pow(10,t)),Math.round(a*e)/a},v=(Math.PI,function(e){return x(g(e))}),g=function(e){return"#"===e[0]&&(e=e.substring(1)),e.length<6?{r:parseInt(e[0]+e[0],16),g:parseInt(e[1]+e[1],16),b:parseInt(e[2]+e[2],16),a:4===e.length?f(parseInt(e[3]+e[3],16)/255,2):1}:{r:parseInt(e.substring(0,2),16),g:parseInt(e.substring(2,4),16),b:parseInt(e.substring(4,6),16),a:8===e.length?f(parseInt(e.substring(6,8),16)/255,2):1}},E=function(e){var t=function(e){var t=e.s,a=e.v,n=e.a,r=(200-t)*a/100;return{h:f(e.h),s:f(r>0&&r<200?t*a/100/(r<=100?r:200-r)*100:0),l:f(r/2),a:f(n,2)}}(e);return"hsl("+t.h+", "+t.s+"%, "+t.l+"%)"},C=function(e){var t=e.h,a=e.s,n=e.v,r=e.a;t=t/360*6,a/=100,n/=100;var o=Math.floor(t),l=n*(1-a),s=n*(1-(t-o)*a),c=n*(1-(1-t+o)*a),i=o%6;return{r:f(255*[n,s,l,l,c,n][i]),g:f(255*[c,n,n,s,l,l][i]),b:f(255*[l,l,c,n,n,s][i]),a:f(r,2)}},b=function(e){var t=e.toString(16);return t.length<2?"0"+t:t},y=function(e){var t=e.r,a=e.g,n=e.b,r=e.a,o=r<1?b(f(255*r)):"";return"#"+b(t)+b(a)+b(n)+o},x=function(e){var t=e.r,a=e.g,n=e.b,r=e.a,o=Math.max(t,a,n),l=o-Math.min(t,a,n),s=l?o===t?(a-n)/l:o===a?2+(n-t)/l:4+(t-a)/l:0;return{h:f(60*(s<0?s+6:s)),s:f(o?l/o*100:0),v:f(o/255*100),a:r}},k=n.memo((function(e){var t=e.hue,a=e.onChange,r=p(["react-colorful__hue",e.className]);return n.createElement("div",{className:r},n.createElement(d,{onMove:function(e){a({h:360*e.left})},onKey:function(e){a({h:s(t+360*e.left,0,360)})},"aria-label":"Hue","aria-valuenow":f(t),"aria-valuemax":"360","aria-valuemin":"0"},n.createElement(h,{className:"react-colorful__hue-pointer",left:t/360,color:E({h:t,s:100,v:100,a:1})})))})),w=n.memo((function(e){var t=e.hsva,a=e.onChange,r={backgroundColor:E({h:t.h,s:100,v:100,a:1})};return n.createElement("div",{className:"react-colorful__saturation",style:r},n.createElement(d,{onMove:function(e){a({s:100*e.left,v:100-100*e.top})},onKey:function(e){a({s:s(t.s+100*e.left,0,100),v:s(t.v-100*e.top,0,100)})},"aria-label":"Color","aria-valuetext":"Saturation "+f(t.s)+"%, Brightness "+f(t.v)+"%"},n.createElement(h,{className:"react-colorful__saturation-pointer",top:1-t.v/100,left:t.s/100,color:E(t)})))})),_=function(e,t){if(e===t)return!0;for(var a in e)if(e[a]!==t[a])return!1;return!0};function N(e,t,a){var r=l(a),o=(0,n.useState)((function(){return e.toHsva(t)})),s=o[0],c=o[1],i=(0,n.useRef)({color:t,hsva:s});(0,n.useEffect)((function(){if(!e.equal(t,i.current.color)){var a=e.toHsva(t);i.current={hsva:a,color:t},c(a)}}),[t,e]),(0,n.useEffect)((function(){var t;_(s,i.current.hsva)||e.equal(t=e.fromHsva(s),i.current.color)||(i.current={hsva:s,color:t},r(t))}),[s,e,r]);var m=(0,n.useCallback)((function(e){c((function(t){return Object.assign({},t,e)}))}),[]);return[s,m]}var L="undefined"!=typeof window?n.useLayoutEffect:n.useEffect,A=new Map,S=function(e){var t,l=e.className,s=e.colorModel,c=e.color,i=void 0===c?s.defaultColor:c,m=e.onChange,u=o(e,["className","colorModel","color","onChange"]),d=(0,n.useRef)(null);t=d,L((function(){var e=t.current?t.current.ownerDocument:document;if(void 0!==e&&!A.has(e)){var n=e.createElement("style");n.innerHTML='.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>\')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}',A.set(e,n);var r=a.nc;r&&n.setAttribute("nonce",r),e.head.appendChild(n)}}),[]);var h=N(s,i,m),f=h[0],v=h[1],g=p(["react-colorful",l]);return n.createElement("div",r({},u,{ref:d,className:g}),n.createElement(w,{hsva:f,onChange:v}),n.createElement(k,{hue:f.h,onChange:v,className:"react-colorful__last-control"}))},M={defaultColor:"000",toHsva:v,fromHsva:function(e){return function(e){return y(C(e))}({h:e.h,s:e.s,v:e.v,a:1})},equal:function(e,t){return e.toLowerCase()===t.toLowerCase()||_(g(e),g(t))}},F=function(e){return n.createElement(S,r({},e,{colorModel:M}))},D=/^#?([0-9A-F]{3,8})$/i,B=function(e){var t=e.color,a=void 0===t?"":t,s=e.onChange,c=e.onBlur,i=e.escape,m=e.validate,u=e.format,d=e.process,p=o(e,["color","onChange","onBlur","escape","validate","format","process"]),h=(0,n.useState)((function(){return i(a)})),f=h[0],v=h[1],g=l(s),E=l(c),C=(0,n.useCallback)((function(e){var t=i(e.target.value);v(t),m(t)&&g(d?d(t):t)}),[i,d,m,g]),b=(0,n.useCallback)((function(e){m(e.target.value)||v(i(a)),E(e)}),[a,i,m,E]);return(0,n.useEffect)((function(){v(i(a))}),[a,i]),n.createElement("input",r({},p,{value:u?u(f):f,spellCheck:"false",onChange:C,onBlur:b}))},H=function(e){return"#"+e},j=function(e){var t=e.prefixed,a=e.alpha,l=o(e,["prefixed","alpha"]),s=(0,n.useCallback)((function(e){return e.replace(/([^0-9A-F]+)/gi,"").substring(0,a?8:6)}),[a]),c=(0,n.useCallback)((function(e){return function(e,t){var a=D.exec(e),n=a?a[1].length:0;return 3===n||6===n||!!t&&4===n||!!t&&8===n}(e,a)}),[a]);return n.createElement(B,r({},l,{escape:s,format:t?H:void 0,process:H,validate:c}))}}}]);