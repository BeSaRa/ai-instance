import{A as C,k as R,u as w,va as I,y as A}from"./chunk-SWO22U5H.js";var S=(()=>{class t{static{this.interceptors=[]}static send(r){return t.interceptors.forEach(n=>{n.send(r)}),r}static receive(r){return t.interceptors.forEach(n=>{n.receive(r)}),r}}return t})();var P=t=>Object.prototype.toString.call(t)==="[object Object]",b=Symbol("$$_CAST_RESPONSE"),j=Symbol("$$_CAST_RESPONSE_CONTAINER"),$=Symbol("$$_MODEL_INTERCEPTOR"),H=Symbol("$$_PARAMS_INTERCEPTORS"),U=Symbol("$$_INTERCEPT_CONTAINER");function M(t){return t.split(".").filter(e=>e!==".")}function g(t,e,r){let n=r.shift();if(n&&n==="*"&&!r.length&&Array.isArray(t)){let c=e(),i=N(c);t=t.map(a=>i(Object.assign(new c,a)))}if(n&&t[n]&&r.length&&(t[n]=g(t[n],e,r.slice())),n&&(t[n]||n==="{}")&&!r.length){let c=e(),i=N(c);n==="{}"?Object.keys(t).forEach(s=>{P(t[s])&&(t[s]=i(Object.assign(new c,t[s])))}):t[n]=i(Object.assign(new c,t[n]))}return n&&n==="*"&&r.length&&Array.isArray(t)&&(t=t.map(c=>g(c,e,r.slice()))),t}function N(t){return t&&t.prototype&&t.prototype[$]&&t.prototype[$].receive||R}function T(t,e){let r=e?Object.entries(e):[];return r.length&&r.forEach(([n,c])=>{let i=M(n);c&&g(t,c,i.slice())}),t}function v(t,e,r,n,c){let i;switch(typeof t){case"function":i=t();break;case"string":i=n.hasOwnProperty(t)?n[t]():void 0;break;default:let s=n[j];if(s){let u=s.has(c)?s.get(c):s.has(r.fallback)?s.get(r.fallback):void 0;u&&(i=u.model(),r.shape=u.shape)}break}return e=r.shape?T(e,r.shape):e,N(i)(S.receive(i?Object.assign(new i,e):e))}function _(t,e,r,n,c){return e.map(i=>v(t,i,r,n,c))}function q(t,e={fallback:"$default",unwrap:"rs"}){return(r,n,c)=>{r[b]||(r[b]={}),r[b][n]=n;let i=c.value;return c.value=function(...a){let s=this,u=s[j],f=!1,o="",h=[];u&&u.has(n)&&u.get(n).unwrap&&(f=!0,o=u.get(n).unwrap),e.unwrap&&(f=!0,o=e.unwrap),f&&(h=o.split("."));let p=i.apply(s,a);function O(E){return l(E,f,h,o,s,t,n,e)}return A(p)?p.pipe(C(E=>O(E))):w(p)?p.then(E=>O(E)):O(p)},c}}function l(t,e,r,n,c,i,a,s){return t=P(t)&&e?(u=>u>1?r.reduce((f,o,h)=>h==0?t[o]:f[o],{}):t.hasOwnProperty(n)?t[n]:t)(r.length):t,t&&(Array.isArray(t)?_(i,t,s,c,a):v(i,t,s,c,a))}function B(t){return t&&(S.interceptors=S.interceptors.concat(t.map(e=>new e))),I([])}export{q as a,B as b};
