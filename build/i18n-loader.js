(()=>{var e={78664:function(e){e.exports=function(e){function t(n){if(r[n])return r[n].exports;var a=r[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var r={};return t.m=e,t.c=r,t.i=function(e){return e},t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=1)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return n(e,null,[{key:"hash",value:function(t){return e.hex(e.md51(t))}},{key:"md5cycle",value:function(t,r){var n=t[0],a=t[1],o=t[2],i=t[3];n=e.ff(n,a,o,i,r[0],7,-680876936),i=e.ff(i,n,a,o,r[1],12,-389564586),o=e.ff(o,i,n,a,r[2],17,606105819),a=e.ff(a,o,i,n,r[3],22,-1044525330),n=e.ff(n,a,o,i,r[4],7,-176418897),i=e.ff(i,n,a,o,r[5],12,1200080426),o=e.ff(o,i,n,a,r[6],17,-1473231341),a=e.ff(a,o,i,n,r[7],22,-45705983),n=e.ff(n,a,o,i,r[8],7,1770035416),i=e.ff(i,n,a,o,r[9],12,-1958414417),o=e.ff(o,i,n,a,r[10],17,-42063),a=e.ff(a,o,i,n,r[11],22,-1990404162),n=e.ff(n,a,o,i,r[12],7,1804603682),i=e.ff(i,n,a,o,r[13],12,-40341101),o=e.ff(o,i,n,a,r[14],17,-1502002290),a=e.ff(a,o,i,n,r[15],22,1236535329),n=e.gg(n,a,o,i,r[1],5,-165796510),i=e.gg(i,n,a,o,r[6],9,-1069501632),o=e.gg(o,i,n,a,r[11],14,643717713),a=e.gg(a,o,i,n,r[0],20,-373897302),n=e.gg(n,a,o,i,r[5],5,-701558691),i=e.gg(i,n,a,o,r[10],9,38016083),o=e.gg(o,i,n,a,r[15],14,-660478335),a=e.gg(a,o,i,n,r[4],20,-405537848),n=e.gg(n,a,o,i,r[9],5,568446438),i=e.gg(i,n,a,o,r[14],9,-1019803690),o=e.gg(o,i,n,a,r[3],14,-187363961),a=e.gg(a,o,i,n,r[8],20,1163531501),n=e.gg(n,a,o,i,r[13],5,-1444681467),i=e.gg(i,n,a,o,r[2],9,-51403784),o=e.gg(o,i,n,a,r[7],14,1735328473),a=e.gg(a,o,i,n,r[12],20,-1926607734),n=e.hh(n,a,o,i,r[5],4,-378558),i=e.hh(i,n,a,o,r[8],11,-2022574463),o=e.hh(o,i,n,a,r[11],16,1839030562),a=e.hh(a,o,i,n,r[14],23,-35309556),n=e.hh(n,a,o,i,r[1],4,-1530992060),i=e.hh(i,n,a,o,r[4],11,1272893353),o=e.hh(o,i,n,a,r[7],16,-155497632),a=e.hh(a,o,i,n,r[10],23,-1094730640),n=e.hh(n,a,o,i,r[13],4,681279174),i=e.hh(i,n,a,o,r[0],11,-358537222),o=e.hh(o,i,n,a,r[3],16,-722521979),a=e.hh(a,o,i,n,r[6],23,76029189),n=e.hh(n,a,o,i,r[9],4,-640364487),i=e.hh(i,n,a,o,r[12],11,-421815835),o=e.hh(o,i,n,a,r[15],16,530742520),a=e.hh(a,o,i,n,r[2],23,-995338651),n=e.ii(n,a,o,i,r[0],6,-198630844),i=e.ii(i,n,a,o,r[7],10,1126891415),o=e.ii(o,i,n,a,r[14],15,-1416354905),a=e.ii(a,o,i,n,r[5],21,-57434055),n=e.ii(n,a,o,i,r[12],6,1700485571),i=e.ii(i,n,a,o,r[3],10,-1894986606),o=e.ii(o,i,n,a,r[10],15,-1051523),a=e.ii(a,o,i,n,r[1],21,-2054922799),n=e.ii(n,a,o,i,r[8],6,1873313359),i=e.ii(i,n,a,o,r[15],10,-30611744),o=e.ii(o,i,n,a,r[6],15,-1560198380),a=e.ii(a,o,i,n,r[13],21,1309151649),n=e.ii(n,a,o,i,r[4],6,-145523070),i=e.ii(i,n,a,o,r[11],10,-1120210379),o=e.ii(o,i,n,a,r[2],15,718787259),a=e.ii(a,o,i,n,r[9],21,-343485551),t[0]=n+t[0]&4294967295,t[1]=a+t[1]&4294967295,t[2]=o+t[2]&4294967295,t[3]=i+t[3]&4294967295}},{key:"cmn",value:function(e,t,r,n,a,o){return((t=(t+e&4294967295)+(n+o&4294967295)&4294967295)<<a|t>>>32-a)+r&4294967295}},{key:"ff",value:function(t,r,n,a,o,i,u){return e.cmn(r&n|~r&a,t,r,o,i,u)}},{key:"gg",value:function(t,r,n,a,o,i,u){return e.cmn(r&a|n&~a,t,r,o,i,u)}},{key:"hh",value:function(t,r,n,a,o,i,u){return e.cmn(r^n^a,t,r,o,i,u)}},{key:"ii",value:function(t,r,n,a,o,i,u){return e.cmn(n^(r|~a),t,r,o,i,u)}},{key:"md51",value:function(t){for(var r,n=t.length,a=[1732584193,-271733879,-1732584194,271733878],o=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],i=64;i<=n;i+=64)e.md5cycle(a,e.md5blk(t.substring(i-64,i)));for(t=t.substring(i-64),i=0,r=t.length;i<r;i++)o[i>>2]|=t.charCodeAt(i)<<(i%4<<3);if(o[i>>2]|=128<<(i%4<<3),i>55)for(e.md5cycle(a,o),i=0;i<16;i++)o[i]=0;return o[14]=8*n,e.md5cycle(a,o),a}},{key:"md5blk",value:function(e){for(var t=[],r=0;r<64;r+=4)t[r>>2]=e.charCodeAt(r)+(e.charCodeAt(r+1)<<8)+(e.charCodeAt(r+2)<<16)+(e.charCodeAt(r+3)<<24);return t}},{key:"rhex",value:function(t){var r="";return r+=e.hexArray[t>>4&15]+e.hexArray[t>>0&15],r+=e.hexArray[t>>12&15]+e.hexArray[t>>8&15],(r+=e.hexArray[t>>20&15]+e.hexArray[t>>16&15])+(e.hexArray[t>>28&15]+e.hexArray[t>>24&15])}},{key:"hex",value:function(t){for(var r=t.length,n=0;n<r;n++)t[n]=e.rhex(t[n]);return t.join("")}}]),e}();a.hexArray=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"],t.default=a},function(e,t,r){e.exports=r(0)}])}},t={};function r(n){var a=t[n];if(void 0!==a)return a.exports;var o=t[n]={exports:{}};return e[n].call(o.exports,o,o.exports,r),o.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";const e=window.wp.i18n;var t=r(78664),n=r.n(t);const a=new class{constructor(){this.state=window.propovoiceI18nState}locationMap={plugin:"plugins/",theme:"themes/",core:""};state={baseUrl:null,locale:null,domainMap:{},domainPaths:{}};getPathPrefix(e){return e in this.state.domainPaths?this.state.domainPaths[e]:""}hasOwn(e,t){return Object.prototype.hasOwnProperty.call(e,t)}async downloadI18n(t,r,a){const o=this.state;if("en_US"===o.locale)return;if("undefined"==typeof fetch)throw new Error("Fetch API is not available.");const i=this.getPathPrefix(r);let u,c;const f=t.indexOf("?");f>=0?(u=n().hash((i+t.substring(0,f)).replace(/\\/g,"/")),c=t.substring(f)):(u=n().hash((i+t).replace(/\\/g,"/")),c="");const h=this.hasOwn(o.domainMap,r)?o.domainMap[r]:this.locationMap[a]+r,s=await fetch(`${o.baseUrl}${h}-${o.locale}-${u}.json${c}`);if(!s.ok)throw new Error(`HTTP request failed: ${s.status} ${s.statusText}`);const l=await s.json(),g=this.hasOwn(l.locale_data,r)?l.locale_data[r]:l.locale_data.messages;g[""].domain=r,(0,e.setLocaleData)(g,r)}};window.propovoiceI18nLoader=a})()})();