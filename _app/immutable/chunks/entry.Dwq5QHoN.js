var wt=Object.defineProperty;var _t=(e,n,t)=>n in e?wt(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var x=(e,n,t)=>_t(e,typeof n!="symbol"?n+"":n,t);import{o as _e,t as vt}from"./scheduler.kWGlogLo.js";import{w as ke}from"./index.zJRfcQkm.js";new URL("sveltekit-internal://");function bt(e,n){return e==="/"||n==="ignore"?e:n==="never"?e.endsWith("/")?e.slice(0,-1):e:n==="always"&&!e.endsWith("/")?e+"/":e}function At(e){return e.split("%25").map(decodeURI).join("%25")}function kt(e){for(const n in e)e[n]=decodeURIComponent(e[n]);return e}function pe({href:e}){return e.split("#")[0]}function St(e,n,t,a=!1){const r=new URL(e);Object.defineProperty(r,"searchParams",{value:new Proxy(r.searchParams,{get(i,s){if(s==="get"||s==="getAll"||s==="has")return f=>(t(f),i[s](f));n();const c=Reflect.get(i,s);return typeof c=="function"?c.bind(i):c}}),enumerable:!0,configurable:!0});const o=["href","pathname","search","toString","toJSON"];a&&o.push("hash");for(const i of o)Object.defineProperty(r,i,{get(){return n(),e[i]},enumerable:!0,configurable:!0});return r}const Et="/__data.json",Rt=".html__data.json";function It(e){return e.endsWith(".html")?e.replace(/\.html$/,Rt):e.replace(/\/$/,"")+Et}function Ut(...e){let n=5381;for(const t of e)if(typeof t=="string"){let a=t.length;for(;a;)n=n*33^t.charCodeAt(--a)}else if(ArrayBuffer.isView(t)){const a=new Uint8Array(t.buffer,t.byteOffset,t.byteLength);let r=a.length;for(;r;)n=n*33^a[--r]}else throw new TypeError("value must be a string or TypedArray");return(n>>>0).toString(36)}function Lt(e){const n=atob(e),t=new Uint8Array(n.length);for(let a=0;a<n.length;a++)t[a]=n.charCodeAt(a);return t.buffer}const We=window.fetch;window.fetch=(e,n)=>((e instanceof Request?e.method:(n==null?void 0:n.method)||"GET")!=="GET"&&q.delete(Se(e)),We(e,n));const q=new Map;function Tt(e,n){const t=Se(e,n),a=document.querySelector(t);if(a!=null&&a.textContent){let{body:r,...o}=JSON.parse(a.textContent);const i=a.getAttribute("data-ttl");return i&&q.set(t,{body:r,init:o,ttl:1e3*Number(i)}),a.getAttribute("data-b64")!==null&&(r=Lt(r)),Promise.resolve(new Response(r,o))}return window.fetch(e,n)}function xt(e,n,t){if(q.size>0){const a=Se(e,t),r=q.get(a);if(r){if(performance.now()<r.ttl&&["default","force-cache","only-if-cached",void 0].includes(t==null?void 0:t.cache))return new Response(r.body,r.init);q.delete(a)}}return window.fetch(n,t)}function Se(e,n){let a=`script[data-sveltekit-fetched][data-url=${JSON.stringify(e instanceof Request?e.url:e)}]`;if(n!=null&&n.headers||n!=null&&n.body){const r=[];n.headers&&r.push([...new Headers(n.headers)].join(",")),n.body&&(typeof n.body=="string"||ArrayBuffer.isView(n.body))&&r.push(n.body),a+=`[data-hash="${Ut(...r)}"]`}return a}const Pt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Ot(e){const n=[];return{pattern:e==="/"?/^\/$/:new RegExp(`^${Nt(e).map(a=>{const r=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(a);if(r)return n.push({name:r[1],matcher:r[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const o=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(a);if(o)return n.push({name:o[1],matcher:o[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!a)return;const i=a.split(/\[(.+?)\](?!\])/);return"/"+i.map((c,f)=>{if(f%2){if(c.startsWith("x+"))return ge(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return ge(String.fromCharCode(...c.slice(2).split("-").map(l=>parseInt(l,16))));const d=Pt.exec(c),[,h,y,u,g]=d;return n.push({name:u,matcher:g,optional:!!h,rest:!!y,chained:y?f===1&&i[0]==="":!1}),y?"(.*?)":h?"([^/]*)?":"([^/]+?)"}return ge(c)}).join("")}).join("")}/?$`),params:n}}function Ct(e){return!/^\([^)]+\)$/.test(e)}function Nt(e){return e.slice(1).split("/").filter(Ct)}function $t(e,n,t){const a={},r=e.slice(1),o=r.filter(s=>s!==void 0);let i=0;for(let s=0;s<n.length;s+=1){const c=n[s];let f=r[s-i];if(c.chained&&c.rest&&i&&(f=r.slice(s-i,s+1).filter(d=>d).join("/"),i=0),f===void 0){c.rest&&(a[c.name]="");continue}if(!c.matcher||t[c.matcher](f)){a[c.name]=f;const d=n[s+1],h=r[s+1];d&&!d.rest&&d.optional&&h&&c.chained&&(i=0),!d&&!h&&Object.keys(a).length===o.length&&(i=0);continue}if(c.optional&&c.chained){i++;continue}return}if(!i)return a}function ge(e){return e.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function jt({nodes:e,server_loads:n,dictionary:t,matchers:a}){const r=new Set(n);return Object.entries(t).map(([s,[c,f,d]])=>{const{pattern:h,params:y}=Ot(s),u={id:s,exec:g=>{const l=h.exec(g);if(l)return $t(l,y,a)},errors:[1,...d||[]].map(g=>e[g]),layouts:[0,...f||[]].map(i),leaf:o(c)};return u.errors.length=u.layouts.length=Math.max(u.errors.length,u.layouts.length),u});function o(s){const c=s<0;return c&&(s=~s),[c,e[s]]}function i(s){return s===void 0?s:[r.has(s),e[s]]}}function Ye(e,n=JSON.parse){try{return n(sessionStorage[e])}catch{}}function $e(e,n,t=JSON.stringify){const a=t(n);try{sessionStorage[e]=a}catch{}}var He;const T=((He=globalThis.__sveltekit_1a348ai)==null?void 0:He.base)??"";var Ke;const Dt=((Ke=globalThis.__sveltekit_1a348ai)==null?void 0:Ke.assets)??T,Ft="1735419316337",Je="sveltekit:snapshot",ze="sveltekit:scroll",Xe="sveltekit:states",Vt="sveltekit:pageurl",D="sveltekit:history",K="sveltekit:navigation",X={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},z=location.origin;function Ze(e){if(e instanceof URL)return e;let n=document.baseURI;if(!n){const t=document.getElementsByTagName("base");n=t.length?t[0].href:document.URL}return new URL(e,n)}function Ee(){return{x:pageXOffset,y:pageYOffset}}function $(e,n){return e.getAttribute(`data-sveltekit-${n}`)}const je={...X,"":X.hover};function Qe(e){let n=e.assignedSlot??e.parentNode;return(n==null?void 0:n.nodeType)===11&&(n=n.host),n}function et(e,n){for(;e&&e!==n;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=Qe(e)}}function ve(e,n,t){let a;try{a=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const r=e instanceof SVGAElement?e.target.baseVal:e.target,o=!a||!!r||oe(a,n,t)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),i=(a==null?void 0:a.origin)===z&&e.hasAttribute("download");return{url:a,external:o,target:r,download:i}}function Z(e){let n=null,t=null,a=null,r=null,o=null,i=null,s=e;for(;s&&s!==document.documentElement;)a===null&&(a=$(s,"preload-code")),r===null&&(r=$(s,"preload-data")),n===null&&(n=$(s,"keepfocus")),t===null&&(t=$(s,"noscroll")),o===null&&(o=$(s,"reload")),i===null&&(i=$(s,"replacestate")),s=Qe(s);function c(f){switch(f){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:je[a??"off"],preload_data:je[r??"off"],keepfocus:c(n),noscroll:c(t),reload:c(o),replace_state:c(i)}}function De(e){const n=ke(e);let t=!0;function a(){t=!0,n.update(i=>i)}function r(i){t=!1,n.set(i)}function o(i){let s;return n.subscribe(c=>{(s===void 0||t&&c!==s)&&i(s=c)})}return{notify:a,set:r,subscribe:o}}const tt={v:()=>{}};function Bt(){const{set:e,subscribe:n}=ke(!1);let t;async function a(){clearTimeout(t);try{const r=await fetch(`${Dt}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!r.ok)return!1;const i=(await r.json()).version!==Ft;return i&&(e(!0),tt.v(),clearTimeout(t)),i}catch{return!1}}return{subscribe:n,check:a}}function oe(e,n,t){return e.origin!==z||!e.pathname.startsWith(n)?!0:t?!(e.pathname===n+"/"||e.protocol==="file:"&&e.pathname.replace(/\/[^/]+\.html?$/,"")===n):!1}function Fe(e){const n=Mt(e),t=new ArrayBuffer(n.length),a=new DataView(t);for(let r=0;r<t.byteLength;r++)a.setUint8(r,n.charCodeAt(r));return t}const Gt="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function Mt(e){e.length%4===0&&(e=e.replace(/==?$/,""));let n="",t=0,a=0;for(let r=0;r<e.length;r++)t<<=6,t|=Gt.indexOf(e[r]),a+=6,a===24&&(n+=String.fromCharCode((t&16711680)>>16),n+=String.fromCharCode((t&65280)>>8),n+=String.fromCharCode(t&255),t=a=0);return a===12?(t>>=4,n+=String.fromCharCode(t)):a===18&&(t>>=2,n+=String.fromCharCode((t&65280)>>8),n+=String.fromCharCode(t&255)),n}const qt=-1,Ht=-2,Kt=-3,Wt=-4,Yt=-5,Jt=-6;function zt(e,n){if(typeof e=="number")return r(e,!0);if(!Array.isArray(e)||e.length===0)throw new Error("Invalid input");const t=e,a=Array(t.length);function r(o,i=!1){if(o===qt)return;if(o===Kt)return NaN;if(o===Wt)return 1/0;if(o===Yt)return-1/0;if(o===Jt)return-0;if(i)throw new Error("Invalid input");if(o in a)return a[o];const s=t[o];if(!s||typeof s!="object")a[o]=s;else if(Array.isArray(s))if(typeof s[0]=="string"){const c=s[0],f=n==null?void 0:n[c];if(f)return a[o]=f(r(s[1]));switch(c){case"Date":a[o]=new Date(s[1]);break;case"Set":const d=new Set;a[o]=d;for(let u=1;u<s.length;u+=1)d.add(r(s[u]));break;case"Map":const h=new Map;a[o]=h;for(let u=1;u<s.length;u+=2)h.set(r(s[u]),r(s[u+1]));break;case"RegExp":a[o]=new RegExp(s[1],s[2]);break;case"Object":a[o]=Object(s[1]);break;case"BigInt":a[o]=BigInt(s[1]);break;case"null":const y=Object.create(null);a[o]=y;for(let u=1;u<s.length;u+=2)y[s[u]]=r(s[u+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const u=globalThis[c],g=s[1],l=Fe(g),p=new u(l);a[o]=p;break}case"ArrayBuffer":{const u=s[1],g=Fe(u);a[o]=g;break}default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(s.length);a[o]=c;for(let f=0;f<s.length;f+=1){const d=s[f];d!==Ht&&(c[f]=r(d))}}else{const c={};a[o]=c;for(const f in s){const d=s[f];c[f]=r(d)}}return a[o]}return r(0)}const nt=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...nt];const Xt=new Set([...nt]);[...Xt];function Zt(e){return e.filter(n=>n!=null)}class se{constructor(n,t){this.status=n,typeof t=="string"?this.body={message:t}:t?this.body=t:this.body={message:`Error: ${n}`}}toString(){return JSON.stringify(this.body)}}class at{constructor(n,t){this.status=n,this.location=t}}class Re extends Error{constructor(n,t,a){super(a),this.status=n,this.text=t}}const Qt="x-sveltekit-invalidated",en="x-sveltekit-trailing-slash";function Q(e){return e instanceof se||e instanceof Re?e.status:500}function tn(e){return e instanceof Re?e.text:"Internal Error"}let b,W,me;const nn=_e.toString().includes("$$")||/function \w+\(\) \{\}/.test(_e.toString());nn?(b={data:{},form:null,error:null,params:{},route:{id:null},state:{},status:-1,url:new URL("https://example.com")},W={current:null},me={current:!1}):(b=new class{constructor(){x(this,"data",$state.raw({}));x(this,"form",$state.raw(null));x(this,"error",$state.raw(null));x(this,"params",$state.raw({}));x(this,"route",$state.raw({id:null}));x(this,"state",$state.raw({}));x(this,"status",$state.raw(-1));x(this,"url",$state.raw(new URL("https://example.com")))}},W=new class{constructor(){x(this,"current",$state.raw(null))}},me=new class{constructor(){x(this,"current",$state.raw(!1))}},tt.v=()=>me.current=!0);function rt(e){Object.assign(b,e)}const an=new Set(["icon","shortcut icon","apple-touch-icon"]),N=Ye(ze)??{},Y=Ye(Je)??{},O={url:De({}),page:De({}),navigating:ke(null),updated:Bt()};function Ie(e){N[e]=Ee()}function rn(e,n){let t=e+1;for(;N[t];)delete N[t],t+=1;for(t=n+1;Y[t];)delete Y[t],t+=1}function V(e){return location.href=e.href,new Promise(()=>{})}async function ot(){if("serviceWorker"in navigator){const e=await navigator.serviceWorker.getRegistration(T||"/");e&&await e.update()}}function Ve(){}let ie,be,ee,P,Ae,k;const st=[],te=[];let U=null;const Ue=[],on=[];let j=[],w={branch:[],error:null,url:null},Le=!1,ne=!1,Be=!0,J=!1,G=!1,it=!1,ce=!1,le,I,L,B;const H=new Set;let ye;async function kn(e,n,t){var r,o,i,s;document.URL!==location.href&&(location.href=location.href),k=e,await((o=(r=e.hooks).init)==null?void 0:o.call(r)),ie=jt(e),P=document.documentElement,Ae=n,be=e.nodes[0],ee=e.nodes[1],be(),ee(),I=(i=history.state)==null?void 0:i[D],L=(s=history.state)==null?void 0:s[K],I||(I=L=Date.now(),history.replaceState({...history.state,[D]:I,[K]:L},""));const a=N[I];a&&(history.scrollRestoration="manual",scrollTo(a.x,a.y)),t?await gn(Ae,t):hn(location.href,{replaceState:!0}),pn()}async function sn(){if(await(ye||(ye=Promise.resolve())),!ye)return;ye=null;const e=ue(w.url,!0);U=null;const n=B={},t=e&&await Oe(e);if(!(!t||n!==B)){if(t.type==="redirect")return Te(new URL(t.location,w.url).href,{},1,n);t.props.page&&Object.assign(b,t.props.page),w=t.state,ct(),le.$set(t.props),rt(t.props.page)}}function ct(){st.length=0,ce=!1}function lt(e){te.some(n=>n==null?void 0:n.snapshot)&&(Y[e]=te.map(n=>{var t;return(t=n==null?void 0:n.snapshot)==null?void 0:t.capture()}))}function ft(e){var n;(n=Y[e])==null||n.forEach((t,a)=>{var r,o;(o=(r=te[a])==null?void 0:r.snapshot)==null||o.restore(t)})}function Ge(){Ie(I),$e(ze,N),lt(L),$e(Je,Y)}async function Te(e,n,t,a){return M({type:"goto",url:Ze(e),keepfocus:n.keepFocus,noscroll:n.noScroll,replace_state:n.replaceState,state:n.state,redirect_count:t,nav_token:a,accept:()=>{n.invalidateAll&&(ce=!0)}})}async function cn(e){if(e.id!==(U==null?void 0:U.id)){const n={};H.add(n),U={id:e.id,token:n,promise:Oe({...e,preload:n}).then(t=>(H.delete(n),t.type==="loaded"&&t.state.error&&(U=null),t))}}return U.promise}async function we(e){const n=ie.find(t=>t.exec(dt(e)));n&&await Promise.all([...n.layouts,n.leaf].map(t=>t==null?void 0:t[1]()))}function ut(e,n,t){var o;w=e.state;const a=document.querySelector("style[data-sveltekit]");a&&a.remove(),Object.assign(b,e.props.page),le=new k.root({target:n,props:{...e.props,stores:O,components:te},hydrate:t,sync:!1}),ft(L);const r={from:null,to:{params:w.params,route:{id:((o=w.route)==null?void 0:o.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};j.forEach(i=>i(r)),ne=!0}function ae({url:e,params:n,branch:t,status:a,error:r,route:o,form:i}){let s="never";if(T&&(e.pathname===T||e.pathname===T+"/"))s="always";else for(const u of t)(u==null?void 0:u.slash)!==void 0&&(s=u.slash);e.pathname=bt(e.pathname,s),e.search=e.search;const c={type:"loaded",state:{url:e,params:n,branch:t,error:r,route:o},props:{constructors:Zt(t).map(u=>u.node.component),page:b}};i!==void 0&&(c.props.form=i);let f={},d=!b,h=0;for(let u=0;u<Math.max(t.length,w.branch.length);u+=1){const g=t[u],l=w.branch[u];(g==null?void 0:g.data)!==(l==null?void 0:l.data)&&(d=!0),g&&(f={...f,...g.data},d&&(c.props[`data_${h}`]=f),h+=1)}return(!w.url||e.href!==w.url.href||w.error!==r||i!==void 0&&i!==b.form||d)&&(c.props.page={error:r,params:n,route:{id:(o==null?void 0:o.id)??null},state:{},status:a,url:new URL(e),form:i??null,data:d?f:b.data}),c}async function xe({loader:e,parent:n,url:t,params:a,route:r,server_data_node:o}){var d,h,y;let i=null,s=!0;const c={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},f=await e();if((d=f.universal)!=null&&d.load){let u=function(...l){for(const p of l){const{href:A}=new URL(p,t);c.dependencies.add(A)}};const g={route:new Proxy(r,{get:(l,p)=>(s&&(c.route=!0),l[p])}),params:new Proxy(a,{get:(l,p)=>(s&&c.params.add(p),l[p])}),data:(o==null?void 0:o.data)??null,url:St(t,()=>{s&&(c.url=!0)},l=>{s&&c.search_params.add(l)},k.hash),async fetch(l,p){let A;l instanceof Request?(A=l.url,p={body:l.method==="GET"||l.method==="HEAD"?void 0:await l.blob(),cache:l.cache,credentials:l.credentials,headers:[...l.headers].length?l.headers:void 0,integrity:l.integrity,keepalive:l.keepalive,method:l.method,mode:l.mode,redirect:l.redirect,referrer:l.referrer,referrerPolicy:l.referrerPolicy,signal:l.signal,...p}):A=l;const E=new URL(A,t);return s&&u(E.href),E.origin===t.origin&&(A=E.href.slice(t.origin.length)),ne?xt(A,E.href,p):Tt(A,p)},setHeaders:()=>{},depends:u,parent(){return s&&(c.parent=!0),n()},untrack(l){s=!1;try{return l()}finally{s=!0}}};i=await f.universal.load.call(null,g)??null}return{node:f,loader:e,server:o,universal:(h=f.universal)!=null&&h.load?{type:"data",data:i,uses:c}:null,data:i??(o==null?void 0:o.data)??null,slash:((y=f.universal)==null?void 0:y.trailingSlash)??(o==null?void 0:o.slash)}}function Me(e,n,t,a,r,o){if(ce)return!0;if(!r)return!1;if(r.parent&&e||r.route&&n||r.url&&t)return!0;for(const i of r.search_params)if(a.has(i))return!0;for(const i of r.params)if(o[i]!==w.params[i])return!0;for(const i of r.dependencies)if(st.some(s=>s(new URL(i))))return!0;return!1}function Pe(e,n){return(e==null?void 0:e.type)==="data"?e:(e==null?void 0:e.type)==="skip"?n??null:null}function ln(e,n){if(!e)return new Set(n.searchParams.keys());const t=new Set([...e.searchParams.keys(),...n.searchParams.keys()]);for(const a of t){const r=e.searchParams.getAll(a),o=n.searchParams.getAll(a);r.every(i=>o.includes(i))&&o.every(i=>r.includes(i))&&t.delete(a)}return t}function qe({error:e,url:n,route:t,params:a}){return{type:"loaded",state:{error:e,url:n,route:t,params:a,branch:[]},props:{page:b,constructors:[]}}}async function Oe({id:e,invalidating:n,url:t,params:a,route:r,preload:o}){if((U==null?void 0:U.id)===e)return H.delete(U.token),U.promise;const{errors:i,layouts:s,leaf:c}=r,f=[...s,c];i.forEach(m=>m==null?void 0:m().catch(()=>{})),f.forEach(m=>m==null?void 0:m[1]().catch(()=>{}));let d=null;const h=w.url?e!==re(w.url):!1,y=w.route?r.id!==w.route.id:!1,u=ln(w.url,t);let g=!1;const l=f.map((m,v)=>{var C;const S=w.branch[v],R=!!(m!=null&&m[0])&&((S==null?void 0:S.loader)!==m[1]||Me(g,y,h,u,(C=S.server)==null?void 0:C.uses,a));return R&&(g=!0),R});if(l.some(Boolean)){try{d=await gt(t,l)}catch(m){const v=await F(m,{url:t,params:a,route:{id:e}});return H.has(o)?qe({error:v,url:t,params:a,route:r}):fe({status:Q(m),error:v,url:t,route:r})}if(d.type==="redirect")return d}const p=d==null?void 0:d.nodes;let A=!1;const E=f.map(async(m,v)=>{var de;if(!m)return;const S=w.branch[v],R=p==null?void 0:p[v];if((!R||R.type==="skip")&&m[1]===(S==null?void 0:S.loader)&&!Me(A,y,h,u,(de=S.universal)==null?void 0:de.uses,a))return S;if(A=!0,(R==null?void 0:R.type)==="error")throw R;return xe({loader:m[1],url:t,params:a,route:r,parent:async()=>{var Ne;const Ce={};for(let he=0;he<v;he+=1)Object.assign(Ce,(Ne=await E[he])==null?void 0:Ne.data);return Ce},server_data_node:Pe(R===void 0&&m[0]?{type:"skip"}:R??null,m[0]?S==null?void 0:S.server:void 0)})});for(const m of E)m.catch(()=>{});const _=[];for(let m=0;m<f.length;m+=1)if(f[m])try{_.push(await E[m])}catch(v){if(v instanceof at)return{type:"redirect",location:v.location};if(H.has(o))return qe({error:await F(v,{params:a,url:t,route:{id:r.id}}),url:t,params:a,route:r});let S=Q(v),R;if(p!=null&&p.includes(v))S=v.status??S,R=v.error;else if(v instanceof se)R=v.body;else{if(await O.updated.check())return await ot(),await V(t);R=await F(v,{params:a,url:t,route:{id:r.id}})}const C=await fn(m,_,i);return C?ae({url:t,params:a,branch:_.slice(0,C.idx).concat(C.node),status:S,error:R,route:r}):await pt(t,{id:r.id},R,S)}else _.push(void 0);return ae({url:t,params:a,branch:_,status:200,error:null,route:r,form:n?void 0:null})}async function fn(e,n,t){for(;e--;)if(t[e]){let a=e;for(;!n[a];)a-=1;try{return{idx:a+1,node:{node:await t[e](),loader:t[e],data:{},server:null,universal:null}}}catch{continue}}}async function fe({status:e,error:n,url:t,route:a}){const r={};let o=null;if(k.server_loads[0]===0)try{const f=await gt(t,[!0]);if(f.type!=="data"||f.nodes[0]&&f.nodes[0].type!=="data")throw 0;o=f.nodes[0]??null}catch{(t.origin!==z||t.pathname!==location.pathname||Le)&&await V(t)}const s=await xe({loader:be,url:t,params:r,route:a,parent:()=>Promise.resolve({}),server_data_node:Pe(o)}),c={node:await ee(),loader:ee,universal:null,server:null,data:null};return ae({url:t,params:r,branch:[s,c],status:e,error:n,route:null})}function ue(e,n){if(!e||oe(e,T,k.hash))return;let t;try{if(t=k.hooks.reroute({url:new URL(e)})??e,typeof t=="string"){const r=new URL(e);k.hash?r.hash=t:r.pathname=t,t=r}}catch{return}const a=dt(t);for(const r of ie){const o=r.exec(a);if(o)return{id:re(e),invalidating:n,route:r,params:kt(o),url:e}}}function dt(e){return At(k.hash?e.hash.replace(/^#/,"").replace(/[?#].+/,""):e.pathname.slice(T.length))||"/"}function re(e){return(k.hash?e.hash.replace(/^#/,""):e.pathname)+e.search}function ht({url:e,type:n,intent:t,delta:a}){let r=!1;const o=yt(w,t,e,n);a!==void 0&&(o.navigation.delta=a);const i={...o.navigation,cancel:()=>{r=!0,o.reject(new Error("navigation cancelled"))}};return J||Ue.forEach(s=>s(i)),r?null:o}async function M({type:e,url:n,popped:t,keepfocus:a,noscroll:r,replace_state:o,state:i={},redirect_count:s=0,nav_token:c={},accept:f=Ve,block:d=Ve}){const h=ue(n,!1),y=ht({url:n,type:e,delta:t==null?void 0:t.delta,intent:h});if(!y){d();return}const u=I,g=L;f(),J=!0,ne&&O.navigating.set(W.current=y.navigation),B=c;let l=h&&await Oe(h);if(!l){if(oe(n,T,k.hash))return await V(n);l=await pt(n,{id:null},await F(new Re(404,"Not Found",`Not found: ${n.pathname}`),{url:n,params:{},route:{id:null}}),404)}if(n=(h==null?void 0:h.url)||n,B!==c)return y.reject(new Error("navigation aborted")),!1;if(l.type==="redirect")if(s>=20)l=await fe({status:500,error:await F(new Error("Redirect loop"),{url:n,params:{},route:{id:null}}),url:n,route:{id:null}});else return Te(new URL(l.location,n).href,{},s+1,c),!1;else l.props.page.status>=400&&await O.updated.check()&&(await ot(),await V(n));if(ct(),Ie(u),lt(g),l.props.page.url.pathname!==n.pathname&&(n.pathname=l.props.page.url.pathname),i=t?t.state:i,!t){const _=o?0:1,m={[D]:I+=_,[K]:L+=_,[Xe]:i};(o?history.replaceState:history.pushState).call(history,m,"",n),o||rn(I,L)}if(U=null,l.props.page.state=i,ne){w=l.state,l.props.page&&(l.props.page.url=n);const _=(await Promise.all(on.map(m=>m(y.navigation)))).filter(m=>typeof m=="function");if(_.length>0){let m=function(){j=j.filter(v=>!_.includes(v))};_.push(m),j.push(..._)}le.$set(l.props),rt(l.props.page),it=!0}else ut(l,Ae,!1);const{activeElement:p}=document;await vt();const A=t?t.scroll:r?Ee():null;if(Be){const _=n.hash&&document.getElementById(decodeURIComponent(k.hash?n.hash.split("#")[2]??"":n.hash.slice(1)));A?scrollTo(A.x,A.y):_?_.scrollIntoView():scrollTo(0,0)}const E=document.activeElement!==p&&document.activeElement!==document.body;!a&&!E&&mn(),Be=!0,l.props.page&&Object.assign(b,l.props.page),J=!1,e==="popstate"&&ft(L),y.fulfil(void 0),j.forEach(_=>_(y.navigation)),O.navigating.set(W.current=null)}async function pt(e,n,t,a){return e.origin===z&&e.pathname===location.pathname&&!Le?await fe({status:a,error:t,url:e,route:n}):await V(e)}function un(){let e;P.addEventListener("mousemove",o=>{const i=o.target;clearTimeout(e),e=setTimeout(()=>{a(i,2)},20)});function n(o){o.defaultPrevented||a(o.composedPath()[0],1)}P.addEventListener("mousedown",n),P.addEventListener("touchstart",n,{passive:!0});const t=new IntersectionObserver(o=>{for(const i of o)i.isIntersecting&&(we(new URL(i.target.href)),t.unobserve(i.target))},{threshold:0});function a(o,i){const s=et(o,P);if(!s)return;const{url:c,external:f,download:d}=ve(s,T,k.hash);if(f||d)return;const h=Z(s),y=c&&re(w.url)===re(c);if(!h.reload&&!y)if(i<=h.preload_data){const u=ue(c,!1);u&&cn(u)}else i<=h.preload_code&&we(c)}function r(){t.disconnect();for(const o of P.querySelectorAll("a")){const{url:i,external:s,download:c}=ve(o,T,k.hash);if(s||c)continue;const f=Z(o);f.reload||(f.preload_code===X.viewport&&t.observe(o),f.preload_code===X.eager&&we(i))}}j.push(r),r()}function F(e,n){if(e instanceof se)return e.body;const t=Q(e),a=tn(e);return k.hooks.handleError({error:e,event:n,status:t,message:a})??{message:a}}function dn(e,n){_e(()=>(e.push(n),()=>{const t=e.indexOf(n);e.splice(t,1)}))}function Sn(e){dn(Ue,e)}function hn(e,n={}){return e=new URL(Ze(e)),e.origin!==z?Promise.reject(new Error("goto: invalid URL")):Te(e,n,0)}function En(){return ce=!0,sn()}function pn(){var n;history.scrollRestoration="manual",addEventListener("beforeunload",t=>{let a=!1;if(Ge(),!J){const r=yt(w,void 0,null,"leave"),o={...r.navigation,cancel:()=>{a=!0,r.reject(new Error("navigation cancelled"))}};Ue.forEach(i=>i(o))}a?(t.preventDefault(),t.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Ge()}),(n=navigator.connection)!=null&&n.saveData||un(),P.addEventListener("click",async t=>{if(t.button||t.which!==1||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.defaultPrevented)return;const a=et(t.composedPath()[0],P);if(!a)return;const{url:r,external:o,target:i,download:s}=ve(a,T,k.hash);if(!r)return;if(i==="_parent"||i==="_top"){if(window.parent!==window)return}else if(i&&i!=="_self")return;const c=Z(a);if(!(a instanceof SVGAElement)&&r.protocol!==location.protocol&&!(r.protocol==="https:"||r.protocol==="http:")||s)return;const[d,h]=(k.hash?r.hash.replace(/^#/,""):r.href).split("#"),y=d===pe(location);if(o||c.reload&&(!y||!h)){ht({url:r,type:"link"})?J=!0:t.preventDefault();return}if(h!==void 0&&y){const[,u]=w.url.href.split("#");if(u===h){if(t.preventDefault(),h===""||h==="top"&&a.ownerDocument.getElementById("top")===null)window.scrollTo({top:0});else{const g=a.ownerDocument.getElementById(decodeURIComponent(h));g&&(g.scrollIntoView(),g.focus())}return}if(G=!0,Ie(I),e(r),!c.replace_state)return;G=!1}t.preventDefault(),await new Promise(u=>{requestAnimationFrame(()=>{setTimeout(u,0)}),setTimeout(u,100)}),M({type:"link",url:r,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??r.href===location.href})}),P.addEventListener("submit",t=>{if(t.defaultPrevented)return;const a=HTMLFormElement.prototype.cloneNode.call(t.target),r=t.submitter;if(((r==null?void 0:r.formTarget)||a.target)==="_blank"||((r==null?void 0:r.formMethod)||a.method)!=="get")return;const s=new URL((r==null?void 0:r.hasAttribute("formaction"))&&(r==null?void 0:r.formAction)||a.action);if(oe(s,T,!1))return;const c=t.target,f=Z(c);if(f.reload)return;t.preventDefault(),t.stopPropagation();const d=new FormData(c),h=r==null?void 0:r.getAttribute("name");h&&d.append(h,(r==null?void 0:r.getAttribute("value"))??""),s.search=new URLSearchParams(d).toString(),M({type:"form",url:s,keepfocus:f.keepfocus,noscroll:f.noscroll,replace_state:f.replace_state??s.href===location.href})}),addEventListener("popstate",async t=>{var a;if((a=t.state)!=null&&a[D]){const r=t.state[D];if(B={},r===I)return;const o=N[r],i=t.state[Xe]??{},s=new URL(t.state[Vt]??location.href),c=t.state[K],f=pe(location)===pe(w.url);if(c===L&&(it||f)){e(s),N[I]=Ee(),o&&scrollTo(o.x,o.y),i!==b.state&&(b.state=i,le.$set({page:b})),I=r;return}const h=r-I;await M({type:"popstate",url:s,popped:{state:i,scroll:o,delta:h},accept:()=>{I=r,L=c},block:()=>{history.go(-h)},nav_token:B})}else if(!G){const r=new URL(location.href);e(r)}}),addEventListener("hashchange",()=>{G?(G=!1,history.replaceState({...history.state,[D]:++I,[K]:L},"",location.href)):k.hash&&w.url.hash===location.hash&&M({type:"goto",url:w.url})});for(const t of document.querySelectorAll("link"))an.has(t.rel)&&(t.href=t.href);addEventListener("pageshow",t=>{t.persisted&&O.navigating.set(W.current=null)});function e(t){w.url=b.url=t,O.page.set({data:b.data,error:b.error,form:b.form,params:b.params,route:b.route,state:b.state,status:b.status,url:t}),O.page.notify()}}async function gn(e,{status:n=200,error:t,node_ids:a,params:r,route:o,data:i,form:s}){Le=!0;const c=new URL(location.href);({params:r={},route:o={id:null}}=ue(c,!1)||{});let f,d=!0;try{const h=a.map(async(g,l)=>{const p=i[l];return p!=null&&p.uses&&(p.uses=mt(p.uses)),xe({loader:k.nodes[g],url:c,params:r,route:o,parent:async()=>{const A={};for(let E=0;E<l;E+=1)Object.assign(A,(await h[E]).data);return A},server_data_node:Pe(p)})}),y=await Promise.all(h),u=ie.find(({id:g})=>g===o.id);if(u){const g=u.layouts;for(let l=0;l<g.length;l++)g[l]||y.splice(l,0,void 0)}f=ae({url:c,params:r,branch:y,status:n,error:t,form:s,route:u??null})}catch(h){if(h instanceof at){await V(new URL(h.location,location.href));return}f=await fe({status:Q(h),error:await F(h,{url:c,params:r,route:o}),url:c,route:o}),e.textContent="",d=!1}f.props.page&&(f.props.page.state={}),ut(f,e,d)}async function gt(e,n){var r;const t=new URL(e);t.pathname=It(e.pathname),e.pathname.endsWith("/")&&t.searchParams.append(en,"1"),t.searchParams.append(Qt,n.map(o=>o?"1":"0").join(""));const a=await We(t.href);if(!a.ok){let o;throw(r=a.headers.get("content-type"))!=null&&r.includes("application/json")?o=await a.json():a.status===404?o="Not Found":a.status===500&&(o="Internal Error"),new se(a.status,o)}return new Promise(async o=>{var h;const i=new Map,s=a.body.getReader(),c=new TextDecoder;function f(y){return zt(y,{...k.decoders,Promise:u=>new Promise((g,l)=>{i.set(u,{fulfil:g,reject:l})})})}let d="";for(;;){const{done:y,value:u}=await s.read();if(y&&!d)break;for(d+=!u&&d?`
`:c.decode(u,{stream:!0});;){const g=d.indexOf(`
`);if(g===-1)break;const l=JSON.parse(d.slice(0,g));if(d=d.slice(g+1),l.type==="redirect")return o(l);if(l.type==="data")(h=l.nodes)==null||h.forEach(p=>{(p==null?void 0:p.type)==="data"&&(p.uses=mt(p.uses),p.data=f(p.data))}),o(l);else if(l.type==="chunk"){const{id:p,data:A,error:E}=l,_=i.get(p);i.delete(p),E?_.reject(f(E)):_.fulfil(f(A))}}}})}function mt(e){return{dependencies:new Set((e==null?void 0:e.dependencies)??[]),params:new Set((e==null?void 0:e.params)??[]),parent:!!(e!=null&&e.parent),route:!!(e!=null&&e.route),url:!!(e!=null&&e.url),search_params:new Set((e==null?void 0:e.search_params)??[])}}function mn(){const e=document.querySelector("[autofocus]");if(e)e.focus();else{const n=document.body,t=n.getAttribute("tabindex");n.tabIndex=-1,n.focus({preventScroll:!0,focusVisible:!1}),t!==null?n.setAttribute("tabindex",t):n.removeAttribute("tabindex");const a=getSelection();if(a&&a.type!=="None"){const r=[];for(let o=0;o<a.rangeCount;o+=1)r.push(a.getRangeAt(o));setTimeout(()=>{if(a.rangeCount===r.length){for(let o=0;o<a.rangeCount;o+=1){const i=r[o],s=a.getRangeAt(o);if(i.commonAncestorContainer!==s.commonAncestorContainer||i.startContainer!==s.startContainer||i.endContainer!==s.endContainer||i.startOffset!==s.startOffset||i.endOffset!==s.endOffset)return}a.removeAllRanges()}})}}}function yt(e,n,t,a){var c,f;let r,o;const i=new Promise((d,h)=>{r=d,o=h});return i.catch(()=>{}),{navigation:{from:{params:e.params,route:{id:((c=e.route)==null?void 0:c.id)??null},url:e.url},to:t&&{params:(n==null?void 0:n.params)??null,route:{id:((f=n==null?void 0:n.route)==null?void 0:f.id)??null},url:t},willUnload:!n,type:a,complete:i},fulfil:r,reject:o}}export{kn as a,Sn as b,hn as g,En as i,O as s};
