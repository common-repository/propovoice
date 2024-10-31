"use strict";(self.webpackChunkpropovoice=self.webpackChunkpropovoice||[]).push([[1582],{61582:(e,t,n)=>{n.r(t),n.d(t,{default:()=>A});var a=n(3453),r=n(23029),o=n(92901),s=n(56822),i=n(53954),c=n(9417),l=n(85501),d=n(64467),p=n(96540),u=n(21241),h=n(9127),m=n(67885),f=n(11010),v=n(74848);function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){(0,d.A)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function g(e,t,n){return t=(0,i.A)(t),(0,s.A)(e,j()?Reflect.construct(t,n||[],(0,i.A)(e).constructor):t.apply(e,n))}function j(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(j=function(){return!!e})()}var x=function(e){function t(e){var n;return(0,r.A)(this,t),n=g(this,t,[e]),(0,d.A)((0,c.A)(n),"getLists",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t={page:n.state.currentPage,per_page:n.state.perPage,data_from:"single_invoice"};e&&(e=Object.entries(e).reduce((function(e,t){var n=(0,a.A)(t,2),r=n[0],o=n[1];return o?(e[r]=o,e):e}),{}),t=b(b({},t),e));var r=new URLSearchParams(t).toString();m.A.get("payments",r).then((function(e){var t=e.data.data.result;n.setState({payments:t,preloader:!1})}))})),(0,d.A)((0,c.A)(n),"setPayment",(function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;n.props.handleChange(e,t,a)})),(0,d.A)((0,c.A)(n),"getByPaymentMethod",(function(e){var t=n.state.payments.filter((function(t){return t.method_id===e}))[0].list;return 1==t.length?t[0]:null})),(0,d.A)((0,c.A)(n),"handleSubmit",(function(e){m.A.add("payments",e).then((function(e){e.data.success?(n.setState({bankModal:!1}),u.oR.success(ndpv.i18n.aAdd),n.props.handleChange(e.data.data,"bank"),n.getLists()):e.data.data.forEach((function(e){u.oR.error(e)}))}))})),n.state={preloader:!0,bankModal:!1,payment:{id:null},payments:[],checkedBoxes:[],offset:0,perPage:10,currentPage:1},n}return(0,l.A)(t,e),(0,o.A)(t,[{key:"componentDidMount",value:function(){this.getLists()}},{key:"render",value:function(){var e=this,t=this.props.data.payment_methods,n=ndpv.i18n;return this.props.wc&&!this.props.subs?(0,v.jsx)("div",{className:"pv-form-accordion pv-additional",children:(0,v.jsx)("p",{style:{margin:0},children:'WooCommerce Payment Activated. If you want to accept direct payment please add Paypal/Stripe on "Payment setting" of Propovoice.'})}):(0,v.jsxs)("div",{className:"pv-form-accordion pv-additional",children:[this.state.payments.map((function(n,a){if(!(wage.length>0&&"bank"!==n.method_id))return(0,v.jsxs)("div",{className:"pv-tab",children:[(0,v.jsx)("input",{type:"checkbox",defaultChecked:t.hasOwnProperty(n.method_id),id:"pv-payment-"+n.method_id,onChange:function(){return e.setPayment(n.method_id,"method",e.getByPaymentMethod(n.method_id))},name:"pv-payment-type"}),(0,v.jsx)("label",{className:(t.hasOwnProperty(n.method_id)?"pv-active":"")+" pv-tab-label",htmlFor:"pv-payment-"+n.method_id,children:n.method_name}),(0,v.jsx)("div",{className:"pv-tab-content",children:n.list.map((function(a,r){return(0,v.jsxs)("div",{className:"pv-payment-bank-content",onClick:function(){return e.setPayment(a,"id")},children:[(0,v.jsx)("div",{className:"pv-payment-image",children:(0,v.jsx)("span",{children:(0,v.jsx)("svg",{width:20,height:20,viewBox:"0 0 28 29",fill:"none",children:(0,v.jsx)("path",{d:"M12.3479 0.555556C13.3232 -0.185185 14.6789 -0.185185 15.6542 0.555556L27.2321 9.33565C28.7067 10.4537 27.9157 12.787 26.0631 12.7963H1.93665C0.0863324 12.787 -0.706994 10.4537 0.769993 9.33565L12.3479 0.555556ZM13.9999 8.74537C14.464 8.74537 14.9091 8.56246 15.2373 8.23688C15.5655 7.91129 15.7499 7.4697 15.7499 7.00926C15.7499 6.54881 15.5655 6.10723 15.2373 5.78164C14.9091 5.45606 14.464 5.27315 13.9999 5.27315C13.5357 5.27315 13.0906 5.45606 12.7624 5.78164C12.4343 6.10723 12.2499 6.54881 12.2499 7.00926C12.2499 7.4697 12.4343 7.91129 12.7624 8.23688C13.0906 8.56246 13.5357 8.74537 13.9999 8.74537ZM3.49997 15.1111V22.0556H6.99994V15.1111H3.49997ZM9.33325 15.1111V22.0556H12.8332V15.1111H9.33325ZM15.1665 15.1111V22.0556H18.6665V15.1111H15.1665ZM20.9998 15.1111V22.0556H24.4998V15.1111H20.9998ZM0 27.2639C0 25.6667 1.30665 24.3704 2.91664 24.3704H25.0831C26.6931 24.3704 27.9997 25.6667 27.9997 27.2639V27.8426C27.9997 28.1496 27.8768 28.4439 27.658 28.661C27.4392 28.8781 27.1425 29 26.8331 29H1.16666C0.85724 29 0.560496 28.8781 0.341706 28.661C0.122915 28.4439 0 28.1496 0 27.8426V27.2639Z",fill:"#4A5568"})})})}),(0,v.jsxs)("div",{className:"payment-text-content",children:[Object.values(t).indexOf(a.id)>-1&&(0,v.jsx)("span",{children:(0,v.jsx)("svg",{width:20,height:20,xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"3.4 5.6 17.6 13.4",enableBackground:"new 3.4 5.6 17.6 13.4",xmlSpace:"preserve",children:(0,v.jsx)("path",{d:"M9,16.2L4.8,12l-1.4,1.4L9,19L21,7l-1.4-1.4L9,16.2z"})})}),("paypal"==n.method_id||"stripe"==n.method_id)&&(0,v.jsx)("h4",{className:"pv-payment-title",children:a.account_name}),"bank"==n.method_id&&(0,v.jsx)("h4",{className:"pv-payment-title",children:a.name})]})]},r)}))})]},a)})),!this.state.payments.length&&(0,v.jsxs)(v.Fragment,{children:[this.state.bankModal&&(0,v.jsx)(f.A,{handleSubmit:this.handleSubmit,show:this.state.bankModal,modalType:"new",close:function(){return e.setState({bankModal:!1})}}),(0,v.jsx)("div",{className:"pv-payment-buttons",children:(0,v.jsxs)("button",{className:"pv-btn pv-bg-blue pv-bg-hover-blue pv-hover-color-white",onClick:function(){return e.setState({bankModal:!0})},children:[n.add_new," ",n.payment]})})]})]})}}]),t}(p.Component);(0,d.A)(x,"contextType",h.A);const A=x},11010:(e,t,n)=>{n.d(t,{A:()=>j});var a=n(23029),r=n(92901),o=n(56822),s=n(53954),i=n(9417),c=n(85501),l=n(64467),d=n(96540),p=n(65128),u=n(21241),h=n(61460),m=n(90977),f=n(74848);function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){(0,l.A)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t,n){return t=(0,s.A)(t),(0,o.A)(e,g()?Reflect.construct(t,n||[],(0,s.A)(e).constructor):t.apply(e,n))}function g(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(g=function(){return!!e})()}const j=function(e){function t(e){var n;return(0,a.A)(this,t),n=b(this,t,[e]),(0,l.A)((0,i.A)(n),"handleChange",(function(e){var t=e.target,a=t.name,r=t.value;n.setState({form:y(y({},n.state.form),{},(0,l.A)({},a,r))})})),(0,l.A)((0,i.A)(n),"handleDesc",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=n.state.form;t.details=e,n.setState({form:t})})),(0,l.A)((0,i.A)(n),"toggleChange",(function(){var e=!n.state.form.default;n.setState({form:y(y({},n.state.form),{},(0,l.A)({},"default",e))})})),(0,l.A)((0,i.A)(n),"editData",(function(){"edit"==n.props.modalType?n.state.form.id!=n.props.data.id&&n.setState({form:n.props.data}):null!=n.state.form.id&&n.setState({form:n.initialState})})),(0,l.A)((0,i.A)(n),"handleSubmit",(function(e){e.preventDefault(),ndpv.isDemo?u.oR.error(ndpv.demoMsg):n.props.handleSubmit(n.state.form)})),n.initialState={id:null,type:"bank",name:"",details:"",default:!1,date:!1},n.state={form:n.initialState},n}return(0,c.A)(t,e),(0,r.A)(t,[{key:"componentDidMount",value:function(){this.editData()}},{key:"componentDidUpdate",value:function(){this.editData()}},{key:"render",value:function(){var e=this,t=ndpv.i18n,n=this.state,a=n.submitPreloader,r=n.form;return(0,f.jsx)("div",{className:"pv-overlay",children:(0,f.jsxs)("div",{className:"pv-modal-content",children:[(0,f.jsxs)("div",{className:"pv-modal-header pv-gradient",children:[(0,f.jsx)("span",{className:"pv-close",onClick:function(){return e.props.close()},children:(0,f.jsx)(p.OM,{})}),(0,f.jsxs)("h2",{className:"pv-modal-title",children:["new"==this.props.modalType?t.new:t.edit," ",t.account]}),(0,f.jsx)("p",{children:t.necInfo})]}),(0,f.jsx)(m._H,{submitPreloader:a,submitHandler:this.handleSubmit,close:this.props.close,children:(0,f.jsxs)(m.sf,{formStyleClass:"pv-form-style-one",children:[(0,f.jsx)("div",{className:"row",children:(0,f.jsx)(h.EY,{label:t.name,id:"form-name",type:"text",name:"name",wrapperClassName:"col-lg",value:r.name,onChange:this.handleChange,validation:{required:{value:!0}}})}),(0,f.jsx)("div",{className:"row",children:(0,f.jsxs)("div",{className:"col",children:[(0,f.jsx)("label",{htmlFor:"form-details",children:t.dtl}),(0,f.jsx)("textarea",{id:"form-details",rows:4,name:"details",value:r.details,onChange:this.handleChange}),(0,f.jsx)("p",{className:"pv-field-desc",children:t.bankDesc})]})})]})})]})})}}]),t}(d.Component)}}]);