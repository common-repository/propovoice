(globalThis.webpackChunkpropovoice=globalThis.webpackChunkpropovoice||[]).push([[4882,1281,7408,5027,2646,265],{29328:e=>{e.exports={AED:"د.إ",AFN:"؋",ALL:"L",AMD:"֏",ANG:"ƒ",AOA:"Kz",ARS:"$",AUD:"$",AWG:"ƒ",AZN:"₼",BAM:"KM",BBD:"$",BDT:"৳",BGN:"лв",BHD:".د.ب",BIF:"FBu",BMD:"$",BND:"$",BOB:"$b",BOV:"BOV",BRL:"R$",BSD:"$",BTC:"₿",BTN:"Nu.",BWP:"P",BYN:"Br",BYR:"Br",BZD:"BZ$",CAD:"$",CDF:"FC",CHE:"CHE",CHF:"CHF",CHW:"CHW",CLF:"CLF",CLP:"$",CNH:"¥",CNY:"¥",COP:"$",COU:"COU",CRC:"₡",CUC:"$",CUP:"₱",CVE:"$",CZK:"Kč",DJF:"Fdj",DKK:"kr",DOP:"RD$",DZD:"دج",EEK:"kr",EGP:"£",ERN:"Nfk",ETB:"Br",ETH:"Ξ",EUR:"€",FJD:"$",FKP:"£",GBP:"£",GEL:"₾",GGP:"£",GHC:"₵",GHS:"GH₵",GIP:"£",GMD:"D",GNF:"FG",GTQ:"Q",GYD:"$",HKD:"$",HNL:"L",HRK:"kn",HTG:"G",HUF:"Ft",IDR:"Rp",ILS:"₪",IMP:"£",INR:"₹",IQD:"ع.د",IRR:"﷼",ISK:"kr",JEP:"£",JMD:"J$",JOD:"JD",JPY:"¥",KES:"KSh",KGS:"лв",KHR:"៛",KMF:"CF",KPW:"₩",KRW:"₩",KWD:"KD",KYD:"$",KZT:"₸",LAK:"₭",LBP:"£",LKR:"₨",LRD:"$",LSL:"M",LTC:"Ł",LTL:"Lt",LVL:"Ls",LYD:"LD",MAD:"MAD",MDL:"lei",MGA:"Ar",MKD:"ден",MMK:"K",MNT:"₮",MOP:"MOP$",MRO:"UM",MRU:"UM",MUR:"₨",MVR:"Rf",MWK:"MK",MXN:"$",MXV:"MXV",MYR:"RM",MZN:"MT",NAD:"$",NGN:"₦",NIO:"C$",NOK:"kr",NPR:"₨",NZD:"$",OMR:"﷼",PAB:"B/.",PEN:"S/.",PGK:"K",PHP:"₱",PKR:"₨",PLN:"zł",PYG:"Gs",QAR:"﷼",RMB:"￥",RON:"lei",RSD:"Дин.",RUB:"₽",RWF:"R₣",SAR:"﷼",SBD:"$",SCR:"₨",SDG:"ج.س.",SEK:"kr",SGD:"S$",SHP:"£",SLL:"Le",SOS:"S",SRD:"$",SSP:"£",STD:"Db",STN:"Db",SVC:"$",SYP:"£",SZL:"E",THB:"฿",TJS:"SM",TMT:"T",TND:"د.ت",TOP:"T$",TRL:"₤",TRY:"₺",TTD:"TT$",TVD:"$",TWD:"NT$",TZS:"TSh",UAH:"₴",UGX:"USh",USD:"$",UYI:"UYI",UYU:"$U",UYW:"UYW",UZS:"лв",VEF:"Bs",VES:"Bs.S",VND:"₫",VUV:"VT",WST:"WS$",XAF:"FCFA",XBT:"Ƀ",XCD:"$",XOF:"CFA",XPF:"₣",XSU:"Sucre",XUA:"XUA",YER:"﷼",ZAR:"R",ZMW:"ZK",ZWD:"Z$",ZWL:"$"}},84941:(e,r,t)=>{e.exports=t(30133)},64656:(e,r,t)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n,o=function(){function e(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(r,t,n){return t&&e(r.prototype,t),n&&e(r,n),r}}(),a=(n=t(51609))&&n.__esModule?n:{default:n},i=t(16154),u=t(3132),c=function(e){function r(e){!function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,r);var t=function(e,r){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!r||"object"!=typeof r&&"function"!=typeof r?e:r}(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,e));return t.state={},t}return function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function, not "+typeof r);e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),r&&(Object.setPrototypeOf?Object.setPrototypeOf(e,r):e.__proto__=r)}(r,e),o(r,[{key:"buildURI",value:function(){return i.buildURI.apply(void 0,arguments)}},{key:"componentDidMount",value:function(){var e=this.props,r=e.data,t=e.headers,n=e.separator,o=e.enclosingCharacter,a=e.uFEFF,i=e.target,u=e.specs,c=e.replace;this.state.page=window.open(this.buildURI(r,a,t,n,o),i,u,c)}},{key:"getWindow",value:function(){return this.state.page}},{key:"render",value:function(){return null}}]),r}(a.default.Component);c.defaultProps=Object.assign(u.defaultProps,{target:"_blank"}),c.propTypes=u.propTypes,r.default=c},35968:(e,r,t)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n,o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},a=function(){function e(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(r,t,n){return t&&e(r.prototype,t),n&&e(r,n),r}}(),i=(n=t(51609))&&n.__esModule?n:{default:n},u=t(16154),c=t(3132),s=function(e){function r(e){!function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,r);var t=function(e,r){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!r||"object"!=typeof r&&"function"!=typeof r?e:r}(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,e));return t.buildURI=t.buildURI.bind(t),t}return function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function, not "+typeof r);e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),r&&(Object.setPrototypeOf?Object.setPrototypeOf(e,r):e.__proto__=r)}(r,e),a(r,[{key:"buildURI",value:function(){return u.buildURI.apply(void 0,arguments)}},{key:"handleLegacy",value:function(e){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(window.navigator.msSaveOrOpenBlob){e.preventDefault();var t=this.props,n=t.data,o=t.headers,a=t.separator,i=t.filename,c=t.enclosingCharacter,s=t.uFEFF,l=r&&"function"==typeof n?n():n,f=new Blob([s?"\ufeff":"",(0,u.toCSV)(l,o,a,c)]);return window.navigator.msSaveBlob(f,i),!1}}},{key:"handleAsyncClick",value:function(e){var r=this;this.props.onClick(e,(function(t){!1!==t?r.handleLegacy(e,!0):e.preventDefault()}))}},{key:"handleSyncClick",value:function(e){!1===this.props.onClick(e)?e.preventDefault():this.handleLegacy(e)}},{key:"handleClick",value:function(){var e=this;return function(r){if("function"==typeof e.props.onClick)return e.props.asyncOnClick?e.handleAsyncClick(r):e.handleSyncClick(r);e.handleLegacy(r)}}},{key:"render",value:function(){var e=this,r=this.props,t=r.data,n=r.headers,a=r.separator,u=r.filename,c=r.uFEFF,s=r.children,l=(r.onClick,r.asyncOnClick,r.enclosingCharacter),f=function(e,r){var t={};for(var n in e)r.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}(r,["data","headers","separator","filename","uFEFF","children","onClick","asyncOnClick","enclosingCharacter"]),p="undefined"==typeof window?"":this.buildURI(t,c,n,a,l);return i.default.createElement("a",o({download:u},f,{ref:function(r){return e.link=r},target:"_self",href:p,onClick:this.handleClick()}),s)}}]),r}(i.default.Component);s.defaultProps=c.defaultProps,s.propTypes=c.propTypes,r.default=s},16154:(e,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function n(e){if(Array.isArray(e)){for(var r=0,t=Array(e.length);r<e.length;r++)t[r]=e[r];return t}return Array.from(e)}var o=r.isSafari=function(){return/^((?!chrome|android).)*safari/i.test(navigator.userAgent)},a=r.isJsons=function(e){return Array.isArray(e)&&e.every((function(e){return"object"===(void 0===e?"undefined":t(e))&&!(e instanceof Array)}))},i=r.isArrays=function(e){return Array.isArray(e)&&e.every((function(e){return Array.isArray(e)}))},u=r.jsonsHeaders=function(e){return Array.from(e.map((function(e){return Object.keys(e)})).reduce((function(e,r){return new Set([].concat(n(e),n(r)))}),[]))},c=r.jsons2arrays=function(e,r){var t=r=r||u(e),o=r;a(r)&&(t=r.map((function(e){return e.label})),o=r.map((function(e){return e.key})));var i=e.map((function(e){return o.map((function(r){return s(r,e)}))}));return[t].concat(n(i))},s=r.getHeaderValue=function(e,r){var t=e.replace(/\[([^\]]+)]/g,".$1").split(".").reduce((function(e,r,t,n){var o=e[r];if(null!=o)return o;n.splice(1)}),r);return void 0===t?e in r?r[e]:"":t},l=r.elementOrEmpty=function(e){return null==e?"":e},f=r.joiner=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:",",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:'"';return e.filter((function(e){return e})).map((function(e){return e.map((function(e){return l(e)})).map((function(e){return""+t+e+t})).join(r)})).join("\n")},p=r.arrays2csv=function(e,r,t,o){return f(r?[r].concat(n(e)):e,t,o)},d=r.jsons2csv=function(e,r,t,n){return f(c(e,r),t,n)},h=r.string2csv=function(e,r,t,n){return r?r.join(t)+"\n"+e:e.replace(/"/g,'""')},v=r.toCSV=function(e,r,t,n){if(a(e))return d(e,r,t,n);if(i(e))return p(e,r,t,n);if("string"==typeof e)return h(e,r,t);throw new TypeError('Data should be a "String", "Array of arrays" OR "Array of objects" ')};r.buildURI=function(e,r,t,n,a){var i=v(e,t,n,a),u=o()?"application/csv":"text/csv",c=new Blob([r?"\ufeff":"",i],{type:u}),s="data:"+u+";charset=utf-8,"+(r?"\ufeff":"")+i,l=window.URL||window.webkitURL;return void 0===l.createObjectURL?s:l.createObjectURL(c)}},30133:(e,r,t)=>{"use strict";r.CSVLink=void 0;var n=a(t(64656)),o=a(t(35968));function a(e){return e&&e.__esModule?e:{default:e}}n.default,r.CSVLink=o.default},3132:(e,r,t)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.PropsNotForwarded=r.defaultProps=r.propTypes=void 0;var n,o=((n=t(51609))&&n.__esModule,t(5556));r.propTypes={data:(0,o.oneOfType)([o.string,o.array,o.func]).isRequired,headers:o.array,target:o.string,separator:o.string,filename:o.string,uFEFF:o.bool,onClick:o.func,asyncOnClick:o.bool,enclosingCharacter:o.string},r.defaultProps={separator:",",filename:"generatedBy_react-csv.csv",uFEFF:!0,asyncOnClick:!1,enclosingCharacter:'"'},r.PropsNotForwarded=["data","headers"]},17604:(e,r,t)=>{var n;!function(){"use strict";var o={not_string:/[^s]/,not_bool:/[^t]/,not_type:/[^T]/,not_primitive:/[^v]/,number:/[diefg]/,numeric_arg:/[bcdiefguxX]/,json:/[j]/,not_json:/[^j]/,text:/^[^\x25]+/,modulo:/^\x25{2}/,placeholder:/^\x25(?:([1-9]\d*)\$|\(([^)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijostTuvxX])/,key:/^([a-z_][a-z_\d]*)/i,key_access:/^\.([a-z_][a-z_\d]*)/i,index_access:/^\[(\d+)\]/,sign:/^[+-]/};function a(e){return function(e,r){var t,n,i,u,c,s,l,f,p,d=1,h=e.length,v="";for(n=0;n<h;n++)if("string"==typeof e[n])v+=e[n];else if("object"==typeof e[n]){if((u=e[n]).keys)for(t=r[d],i=0;i<u.keys.length;i++){if(null==t)throw new Error(a('[sprintf] Cannot access property "%s" of undefined value "%s"',u.keys[i],u.keys[i-1]));t=t[u.keys[i]]}else t=u.param_no?r[u.param_no]:r[d++];if(o.not_type.test(u.type)&&o.not_primitive.test(u.type)&&t instanceof Function&&(t=t()),o.numeric_arg.test(u.type)&&"number"!=typeof t&&isNaN(t))throw new TypeError(a("[sprintf] expecting number but found %T",t));switch(o.number.test(u.type)&&(f=t>=0),u.type){case"b":t=parseInt(t,10).toString(2);break;case"c":t=String.fromCharCode(parseInt(t,10));break;case"d":case"i":t=parseInt(t,10);break;case"j":t=JSON.stringify(t,null,u.width?parseInt(u.width):0);break;case"e":t=u.precision?parseFloat(t).toExponential(u.precision):parseFloat(t).toExponential();break;case"f":t=u.precision?parseFloat(t).toFixed(u.precision):parseFloat(t);break;case"g":t=u.precision?String(Number(t.toPrecision(u.precision))):parseFloat(t);break;case"o":t=(parseInt(t,10)>>>0).toString(8);break;case"s":t=String(t),t=u.precision?t.substring(0,u.precision):t;break;case"t":t=String(!!t),t=u.precision?t.substring(0,u.precision):t;break;case"T":t=Object.prototype.toString.call(t).slice(8,-1).toLowerCase(),t=u.precision?t.substring(0,u.precision):t;break;case"u":t=parseInt(t,10)>>>0;break;case"v":t=t.valueOf(),t=u.precision?t.substring(0,u.precision):t;break;case"x":t=(parseInt(t,10)>>>0).toString(16);break;case"X":t=(parseInt(t,10)>>>0).toString(16).toUpperCase()}o.json.test(u.type)?v+=t:(!o.number.test(u.type)||f&&!u.sign?p="":(p=f?"+":"-",t=t.toString().replace(o.sign,"")),s=u.pad_char?"0"===u.pad_char?"0":u.pad_char.charAt(1):" ",l=u.width-(p+t).length,c=u.width&&l>0?s.repeat(l):"",v+=u.align?p+t+c:"0"===s?p+c+t:c+p+t)}return v}(function(e){if(u[e])return u[e];for(var r,t=e,n=[],a=0;t;){if(null!==(r=o.text.exec(t)))n.push(r[0]);else if(null!==(r=o.modulo.exec(t)))n.push("%");else{if(null===(r=o.placeholder.exec(t)))throw new SyntaxError("[sprintf] unexpected placeholder");if(r[2]){a|=1;var i=[],c=r[2],s=[];if(null===(s=o.key.exec(c)))throw new SyntaxError("[sprintf] failed to parse named argument key");for(i.push(s[1]);""!==(c=c.substring(s[0].length));)if(null!==(s=o.key_access.exec(c)))i.push(s[1]);else{if(null===(s=o.index_access.exec(c)))throw new SyntaxError("[sprintf] failed to parse named argument key");i.push(s[1])}r[2]=i}else a|=2;if(3===a)throw new Error("[sprintf] mixing positional and named placeholders is not (yet) supported");n.push({placeholder:r[0],param_no:r[1],keys:r[2],sign:r[3],pad_char:r[4],align:r[5],width:r[6],precision:r[7],type:r[8]})}t=t.substring(r[0].length)}return u[e]=n}(e),arguments)}function i(e,r){return a.apply(null,[e].concat(r||[]))}var u=Object.create(null);r.sprintf=a,r.vsprintf=i,"undefined"!=typeof window&&(window.sprintf=a,window.vsprintf=i,void 0===(n=function(){return{sprintf:a,vsprintf:i}}.call(r,t,r,e))||(e.exports=n))}()},7612:(e,r,t)=>{"use strict";t.d(r,{HC:()=>L,jI:()=>T});var n=t(51609);function o(){return(o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function a(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r.indexOf(t=a[n])>=0||(o[t]=e[t]);return o}function i(e){var r=(0,n.useRef)(e),t=(0,n.useRef)((function(e){r.current&&r.current(e)}));return r.current=e,t.current}var u=function(e,r,t){return void 0===r&&(r=0),void 0===t&&(t=1),e>t?t:e<r?r:e},c=function(e){return"touches"in e},s=function(e){return e&&e.ownerDocument.defaultView||self},l=function(e,r,t){var n=e.getBoundingClientRect(),o=c(r)?function(e,r){for(var t=0;t<e.length;t++)if(e[t].identifier===r)return e[t];return e[0]}(r.touches,t):r;return{left:u((o.pageX-(n.left+s(e).pageXOffset))/n.width),top:u((o.pageY-(n.top+s(e).pageYOffset))/n.height)}},f=function(e){!c(e)&&e.preventDefault()},p=n.memo((function(e){var r=e.onMove,t=e.onKey,u=a(e,["onMove","onKey"]),p=(0,n.useRef)(null),d=i(r),h=i(t),v=(0,n.useRef)(null),g=(0,n.useRef)(!1),b=(0,n.useMemo)((function(){var e=function(e){f(e),(c(e)?e.touches.length>0:e.buttons>0)&&p.current?d(l(p.current,e,v.current)):t(!1)},r=function(){return t(!1)};function t(t){var n=g.current,o=s(p.current),a=t?o.addEventListener:o.removeEventListener;a(n?"touchmove":"mousemove",e),a(n?"touchend":"mouseup",r)}return[function(e){var r=e.nativeEvent,n=p.current;if(n&&(f(r),!function(e,r){return r&&!c(e)}(r,g.current)&&n)){if(c(r)){g.current=!0;var o=r.changedTouches||[];o.length&&(v.current=o[0].identifier)}n.focus(),d(l(n,r,v.current)),t(!0)}},function(e){var r=e.which||e.keyCode;r<37||r>40||(e.preventDefault(),h({left:39===r?.05:37===r?-.05:0,top:40===r?.05:38===r?-.05:0}))},t]}),[h,d]),y=b[0],m=b[1],_=b[2];return(0,n.useEffect)((function(){return _}),[_]),n.createElement("div",o({},u,{onTouchStart:y,onMouseDown:y,className:"react-colorful__interactive",ref:p,onKeyDown:m,tabIndex:0,role:"slider"}))})),d=function(e){return e.filter(Boolean).join(" ")},h=function(e){var r=e.color,t=e.left,o=e.top,a=void 0===o?.5:o,i=d(["react-colorful__pointer",e.className]);return n.createElement("div",{className:i,style:{top:100*a+"%",left:100*t+"%"}},n.createElement("div",{className:"react-colorful__pointer-fill",style:{backgroundColor:r}}))},v=function(e,r,t){return void 0===r&&(r=0),void 0===t&&(t=Math.pow(10,r)),Math.round(t*e)/t},g=(Math.PI,function(e){return w(b(e))}),b=function(e){return"#"===e[0]&&(e=e.substring(1)),e.length<6?{r:parseInt(e[0]+e[0],16),g:parseInt(e[1]+e[1],16),b:parseInt(e[2]+e[2],16),a:4===e.length?v(parseInt(e[3]+e[3],16)/255,2):1}:{r:parseInt(e.substring(0,2),16),g:parseInt(e.substring(2,4),16),b:parseInt(e.substring(4,6),16),a:8===e.length?v(parseInt(e.substring(6,8),16)/255,2):1}},y=function(e){var r=function(e){var r=e.s,t=e.v,n=e.a,o=(200-r)*t/100;return{h:v(e.h),s:v(o>0&&o<200?r*t/100/(o<=100?o:200-o)*100:0),l:v(o/2),a:v(n,2)}}(e);return"hsl("+r.h+", "+r.s+"%, "+r.l+"%)"},m=function(e){var r=e.h,t=e.s,n=e.v,o=e.a;r=r/360*6,t/=100,n/=100;var a=Math.floor(r),i=n*(1-t),u=n*(1-(r-a)*t),c=n*(1-(1-r+a)*t),s=a%6;return{r:v(255*[n,u,i,i,c,n][s]),g:v(255*[c,n,n,u,i,i][s]),b:v(255*[i,i,c,n,n,u][s]),a:v(o,2)}},_=function(e){var r=e.toString(16);return r.length<2?"0"+r:r},C=function(e){var r=e.r,t=e.g,n=e.b,o=e.a,a=o<1?_(v(255*o)):"";return"#"+_(r)+_(t)+_(n)+a},w=function(e){var r=e.r,t=e.g,n=e.b,o=e.a,a=Math.max(r,t,n),i=a-Math.min(r,t,n),u=i?a===r?(t-n)/i:a===t?2+(n-r)/i:4+(r-t)/i:0;return{h:v(60*(u<0?u+6:u)),s:v(a?i/a*100:0),v:v(a/255*100),a:o}},k=n.memo((function(e){var r=e.hue,t=e.onChange,o=d(["react-colorful__hue",e.className]);return n.createElement("div",{className:o},n.createElement(p,{onMove:function(e){t({h:360*e.left})},onKey:function(e){t({h:u(r+360*e.left,0,360)})},"aria-label":"Hue","aria-valuenow":v(r),"aria-valuemax":"360","aria-valuemin":"0"},n.createElement(h,{className:"react-colorful__hue-pointer",left:r/360,color:y({h:r,s:100,v:100,a:1})})))})),S=n.memo((function(e){var r=e.hsva,t=e.onChange,o={backgroundColor:y({h:r.h,s:100,v:100,a:1})};return n.createElement("div",{className:"react-colorful__saturation",style:o},n.createElement(p,{onMove:function(e){t({s:100*e.left,v:100-100*e.top})},onKey:function(e){t({s:u(r.s+100*e.left,0,100),v:u(r.v-100*e.top,0,100)})},"aria-label":"Color","aria-valuetext":"Saturation "+v(r.s)+"%, Brightness "+v(r.v)+"%"},n.createElement(h,{className:"react-colorful__saturation-pointer",top:1-r.v/100,left:r.s/100,color:y(r)})))})),O=function(e,r){if(e===r)return!0;for(var t in e)if(e[t]!==r[t])return!1;return!0};function E(e,r,t){var o=i(t),a=(0,n.useState)((function(){return e.toHsva(r)})),u=a[0],c=a[1],s=(0,n.useRef)({color:r,hsva:u});(0,n.useEffect)((function(){if(!e.equal(r,s.current.color)){var t=e.toHsva(r);s.current={hsva:t,color:r},c(t)}}),[r,e]),(0,n.useEffect)((function(){var r;O(u,s.current.hsva)||e.equal(r=e.fromHsva(u),s.current.color)||(s.current={hsva:u,color:r},o(r))}),[u,e,o]);var l=(0,n.useCallback)((function(e){c((function(r){return Object.assign({},r,e)}))}),[]);return[u,l]}var R="undefined"!=typeof window?n.useLayoutEffect:n.useEffect,D=new Map,M=function(e){var r,i=e.className,u=e.colorModel,c=e.color,s=void 0===c?u.defaultColor:c,l=e.onChange,f=a(e,["className","colorModel","color","onChange"]),p=(0,n.useRef)(null);r=p,R((function(){var e=r.current?r.current.ownerDocument:document;if(void 0!==e&&!D.has(e)){var n=e.createElement("style");n.innerHTML='.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>\')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}',D.set(e,n);var o=t.nc;o&&n.setAttribute("nonce",o),e.head.appendChild(n)}}),[]);var h=E(u,s,l),v=h[0],g=h[1],b=d(["react-colorful",i]);return n.createElement("div",o({},f,{ref:p,className:b}),n.createElement(S,{hsva:v,onChange:g}),n.createElement(k,{hue:v.h,onChange:g,className:"react-colorful__last-control"}))},x={defaultColor:"000",toHsva:g,fromHsva:function(e){return function(e){return C(m(e))}({h:e.h,s:e.s,v:e.v,a:1})},equal:function(e,r){return e.toLowerCase()===r.toLowerCase()||O(b(e),b(r))}},T=function(e){return n.createElement(M,o({},e,{colorModel:x}))},P=/^#?([0-9A-F]{3,8})$/i,F=function(e){var r=e.color,t=void 0===r?"":r,u=e.onChange,c=e.onBlur,s=e.escape,l=e.validate,f=e.format,p=e.process,d=a(e,["color","onChange","onBlur","escape","validate","format","process"]),h=(0,n.useState)((function(){return s(t)})),v=h[0],g=h[1],b=i(u),y=i(c),m=(0,n.useCallback)((function(e){var r=s(e.target.value);g(r),l(r)&&b(p?p(r):r)}),[s,p,l,b]),_=(0,n.useCallback)((function(e){l(e.target.value)||g(s(t)),y(e)}),[t,s,l,y]);return(0,n.useEffect)((function(){g(s(t))}),[t,s]),n.createElement("input",o({},d,{value:f?f(v):v,spellCheck:"false",onChange:m,onBlur:_}))},A=function(e){return"#"+e},L=function(e){var r=e.prefixed,t=e.alpha,i=a(e,["prefixed","alpha"]),u=(0,n.useCallback)((function(e){return e.replace(/([^0-9A-F]+)/gi,"").substring(0,t?8:6)}),[t]),c=(0,n.useCallback)((function(e){return function(e,r){var t=P.exec(e),n=t?t[1].length:0;return 3===n||6===n||!!r&&4===n||!!r&&8===n}(e,t)}),[t]);return n.createElement(F,o({},i,{escape:u,format:r?A:void 0,process:A,validate:c}))}}}]);