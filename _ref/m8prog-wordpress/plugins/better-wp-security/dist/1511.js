"use strict";(globalThis.itsecWebpackJsonP=globalThis.itsecWebpackJsonP||[]).push([[1511],{31511:(t,e,r)=>{r.d(e,{sE:()=>k,x4:()=>Z,PN:()=>p,pL:()=>S,NC:()=>E,N4:()=>w,g4:()=>L,bK:()=>U,Rg:()=>A,CO:()=>N,AW:()=>P,SU:()=>j,k0:()=>y,ZE:()=>_,UC:()=>I,xJ:()=>C,YS:()=>M,z8:()=>O,VG:()=>x,Y3:()=>R,bv:()=>v});var s=r(92819),n=r(65096),i=r.n(n),o=r(6293),a=r(73470),c=r(95122),u=r(4942),h=r(13092),d=r(86033);function f(t,e,r){!function(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}(t,e),e.set(t,r)}var l=new WeakMap,g=new WeakMap;class p{constructor(t=void 0,e=void 0,r=void 0){f(this,l,{writable:!0,value:{}}),f(this,g,{writable:!0,value:{}}),(0,u.Z)(this,"add",((t,e,r)=>((0,d.Z)(this,l)[t]||((0,d.Z)(this,l)[t]=[]),(0,d.Z)(this,l)[t].push(e),r&&((0,d.Z)(this,g)[t]||((0,d.Z)(this,g)[t]=[]),(0,d.Z)(this,g)[t].push(r)),this))),(0,u.Z)(this,"hasErrors",(()=>this.getErrorCodes().length>0)),(0,u.Z)(this,"getErrorCodes",(()=>Object.keys((0,d.Z)(this,l)))),(0,u.Z)(this,"getErrorCode",(()=>this.getErrorCodes()[0])),(0,u.Z)(this,"getErrorMessages",((t=void 0)=>{if(t)return(0,d.Z)(this,l)[t];const e=[];for(const t in(0,d.Z)(this,l))(0,d.Z)(this,l).hasOwnProperty(t)&&e.concat((0,d.Z)(this,l)[t]);return e})),(0,u.Z)(this,"getErrorMessage",((t=void 0)=>(t=t||this.getErrorCode(),this.getErrorMessages(t)[0]))),(0,u.Z)(this,"getErrorData",((t=void 0)=>(t=t||this.getErrorCode(),(0,d.Z)(this,g)[t]))),(0,u.Z)(this,"getAllErrorMessages",(()=>{const t=[];for(const e in(0,d.Z)(this,l))(0,d.Z)(this,l).hasOwnProperty(e)&&t.push(...(0,d.Z)(this,l)[e]);return t})),t&&(e&&((0,d.Z)(this,l)[t]=[e]),r&&((0,d.Z)(this,g)[t]=r))}static fromPHPObject(t){const e=new p;return(0,h.Z)(e,l,t.errors),(0,h.Z)(e,g,t.error_data),e}static fromApiError(t){const e=new p;if((0,d.Z)(e,l)[t.code]=[t.message],(0,d.Z)(e,g)[t.code]=[t.data],t.additional_errors)for(const r of t.additional_errors)(0,d.Z)(e,l)[r.code]=[r.message],r.data&&((0,d.Z)(e,g)||(0,h.Z)(e,g,[]),(0,d.Z)(e,g)[r.code].push(r.data));return e}}class b extends Error{constructor(t,...e){super(t.message||(0,c.__)("An unknown error occurred.","better-wp-security"),...e),Error.captureStackTrace&&Error.captureStackTrace(this,b),this.__response=t;for(const e in t)t.hasOwnProperty(e)&&Object.defineProperty(this,e,{value:t[e],configurable:!0,enumerable:!0,writable:!0})}toString(){return this.__response.toString()}getResponse(){return this.__response}}class Z{constructor(t,e,r,s=[],n=[],i=[]){(0,u.Z)(this,"type",void 0),(0,u.Z)(this,"error",void 0),(0,u.Z)(this,"data",void 0),(0,u.Z)(this,"success",void 0),(0,u.Z)(this,"info",void 0),(0,u.Z)(this,"warning",void 0),this.type=t,this.error=e,this.data=r,this.success=s,this.info=n,this.warning=i,Object.seal(this)}isSuccess(){return this.type===Z.SUCCESS}static async fromResponse(t){const e=e=>{const r=t.headers?.get(`X-Messages-${e}`);return r?JSON.parse(r):[]},r=204!==t.status&&t.json?await t.json():null,s=E(r),n=s.hasErrors()?Z.ERROR:Z.SUCCESS,i=e("Success"),o=e("Info"),a=e("Warning");return new Z(n,s,r,i,o,a)}}Object.defineProperty(Z,"SUCCESS",{value:"success",writable:!1,enumerable:!1,configurable:!1}),Object.defineProperty(Z,"ERROR",{value:"error",writable:!1,enumerable:!1,configurable:!1});const m=(0,o.createContext)({getUrl(t,e){t="settings"===t?"itsec":"itsec-"+t;const r=(0,a.removeQueryArgs)(document.location.href,...Object.keys((0,a.getQueryArgs)(document.location.href)));return(0,a.addQueryArgs)(r,e?{page:t,path:e}:{page:t})}});function v(t,e){const{getUrl:r}=(0,o.useContext)(m);return r(t,e)}function O(t){if(t<=999)return t.toString();if(t<=9999){const e=(t/1e3).toFixed(1);return"0"===e.charAt(e.length-1)?e.replace(".0","k"):`${e}k`}if(t<=99999)return t.toString().substring(0,2)+"k";if(t<=999999)return t.toString().substring(0,3)+"k";if(t<=9999999){const e=(t/1e6).toFixed(1);return"0"===e.charAt(e.length-1)?e.replace(".0","m"):`${e}m`}if(t<=99999999)return t.toString().substring(0,2)+"m";if(t<=999999999)return t.toString().substring(0,3)+"m";if(t<=9999999999){const e=(t/1e9).toFixed(1);return"0"===e.charAt(e.length-1)?e.replace(".0","b"):`${e}b`}return t}function _(t){if(!(0,s.isPlainObject)(t))return!1;const e=Object.keys(t);return 2===e.length&&e.includes("errors")&&e.includes("error_data")}function y(t){if(!(0,s.isPlainObject)(t))return!1;const e=Object.keys(t);return(3===e.length||4===e.length)&&!(4===e.length&&!e.includes("additional_errors"))&&e.includes("code")&&e.includes("message")&&e.includes("data")}function E(t){return t instanceof p?t:_(t)?p.fromPHPObject(t):y(t)?p.fromApiError(t):new p}function w(t){const e={};for(const[r,s]of t)e[r]=s;return e}function S(t,e){const r=[[],[]];for(const s of t)r[e(s)?0:1].push(s);return r}function C(t){if(t instanceof Error)throw t;throw new b(t)}const k="https://secure.gravatar.com/avatar/d7a973c7dab26985da5f961be7b74480?s=96&d=mm&f=y&r=g";function j(t,e,r=!0){return(0,s.get)(t,["_links","self",0,"targetHints",e],r?void 0:[])}function P(t){return A(t,"self")}function M(t){const e=t.indexOf("/ithemes-security/");if(-1!==e)return t.substring(e)}function A(t,e){return(0,s.get)(t,["_links",e,0,"href"])}function N(t,e){if(t&&t.links)for(const r of t.links)if(r.rel===e)return r}function I(t,e){if("object"!==t.type)return t;let r;for(const n in e)e.hasOwnProperty(n)&&"hidden"===e[n]["ui:widget"]&&(r||(r=(0,s.cloneDeep)(t)),delete r.properties[n]);return r||t}function R(t){let e=[];if(!t)return e;const r=t instanceof p?t:E((0,s.pick)(t,["code","message","data"]));return"rest_invalid_param"===r.getErrorCode()&&(e=Object.values(r.getErrorData().params)),[...r.getAllErrorMessages(),...e]}function x(t){const e=new Date;if(t>e)return(0,c.__)("Online Recently","better-wp-security");const r=Math.floor((e-t)/1e3);let s=r/31536e3;return s>1?(0,c.sprintf)((0,c.__)("%s years","better-wp-security"),Math.floor(s)):(s=r/2592e3,s>1?(0,c.sprintf)((0,c.__)("%s months","better-wp-security"),Math.floor(s)):(s=r/86400,s>1?(0,c.sprintf)((0,c.__)("%s days","better-wp-security"),Math.floor(s)):(s=r/3600,s>1?(0,c.sprintf)((0,c.__)("%s hours","better-wp-security"),Math.floor(s)):(s=r/60,s>1?(0,c.sprintf)((0,c.__)("%s minutes","better-wp-security"),Math.floor(s)):(0,c.sprintf)((0,c.__)("%s seconds","better-wp-security"),Math.floor(s))))))}function L(){return L.instance||(L.instance=new(i())({schemaId:"id"}),L.instance.addMetaSchema(r(27171)),L.instance.addFormat("html",{type:"string",validate:()=>!0}),L.instance.addFormat("relative-file-path",{type:"string",validate:t=>!t.includes("../")}),L.instance.addFormat("file-path",{type:"string",validate:t=>!!t.startsWith("/")&&!t.includes("../")}),L.instance.addFormat("directory",{type:"string",validate:t=>!!t.startsWith("/")&&!t.includes("../")})),L.instance}function U(t){if(!t)return"";const e=t.toUpperCase().split("").map((t=>127397+t.charCodeAt()));return String.fromCodePoint(...e)}}}]);