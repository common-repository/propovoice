"use strict";(globalThis.webpackChunkpropovoice=globalThis.webpackChunkpropovoice||[]).push([[8642],{18642:(e,t,a)=>{a.r(t),a.d(t,{default:()=>o});var s=a(51609),r=a(21241),n=a(93300),l=a.n(n),c=a(55800);class o extends s.Component{constructor(e){super(e),this.state={form:{key:"",type:"activate_license",status:""},loading:!1}}componentDidMount(){this.props.getAll("pro-settings","tab=license&nocache="+(new Date).getTime()).then((e=>{e.data.success&&this.setState({form:e.data.data})}))}handleChange=e=>{let t={...this.state.form};const a=e.target,s=a.name,r=a.value;t[s]=r,this.setState({form:t})};handleSubmit=e=>{if(e.preventDefault(),ndpv.isDemo)return void r.oR.error(ndpv.demoMsg);let t={...this.state.form};t.tab="license",this.setState({loading:!0}),this.props.create("pro-settings",t).then((e=>{let a=e.data.data;e.data.success?(r.oR.success(a.msg),a.data&&(t.type=a.data.type,t.status=a.data.status,t.for=a.data.for,t.expires=a.data.expires),this.setState({form:t}),setTimeout((function(){window.location.reload(1)}),1e3)):a.forEach((function(e){r.oR.error(e)})),this.setState({loading:!1})}))};licenseFor(e){switch(e){case"1":case"3":return"Freelancer";case"2":case"4":return"Agency";case"5":return"Freelancer LTD";case"6":return"Professional LTD";case"7":return"Agency LTD";case"8":return"Unlimited LTD";case"9":case"10":return"Business";case"12":case"13":return"Enterprise";case"14":return"Appsumo Tier1";case"15":return"Appsumo Tier2";case"16":return"Appsumo Tier3";case"17":return"Appsumo Tier4";case"18":return"Appsumo Tier5"}}render(){const e=this.state.form,t=ndpv.i18n;return(0,s.createElement)(s.Fragment,null,this.state.loading?(0,s.createElement)(c.A,null):(0,s.createElement)("form",{onSubmit:this.handleSubmit,className:"pv-form-style-one"},"valid"!=e.status&&(0,s.createElement)("div",{className:"row"},(0,s.createElement)("div",{className:"col"},(0,s.createElement)("label",{htmlFor:"form-key"},t.license," ",t.key),(0,s.createElement)("input",{id:"form-key",type:"password",required:!0,name:"key",value:e.key,onChange:this.handleChange}))),("valid"==e.status||"expired"==e.status)&&(0,s.createElement)(s.Fragment,null,(0,s.createElement)("div",{className:"row pv-mt-30"},(0,s.createElement)("div",{className:"col"},(0,s.createElement)("label",{htmlFor:"form-status"},t.license," ",t.status,":",(0,s.createElement)("span",{className:"pv-pro-label "+("valid"==e.status?"pv-bg-green pv-color-white":"pv-bg-red")},"valid"==e.status?t.valid:t.expired)))),(0,s.createElement)("div",{className:"row"},(0,s.createElement)("div",{className:"col"},(0,s.createElement)("label",{htmlFor:"form-status"},t.license," For: ",(0,s.createElement)("span",{style:{color:"#2D3748"}},this.licenseFor(e.for))))),(0,s.createElement)("div",{className:"row"},(0,s.createElement)("div",{className:"col"},(0,s.createElement)("label",{htmlFor:"form-status"},t.license," ",t.exps,": ",(0,s.createElement)("span",{style:{color:"#2D3748"}},"lifetime"==e.expires?"Lifetime":(0,s.createElement)(l(),{format:"YYYY-MM-DD"},e.expires)))))),(0,s.createElement)("div",{className:"row"},(0,s.createElement)("div",{className:"col"},(0,s.createElement)("button",{className:"pv-btn pv-bg-blue pv-bg-hover-blue"},"activate_license"==e.type?t.activate+" "+t.license:t.dactivate+" "+t.license)))))}}}}]);