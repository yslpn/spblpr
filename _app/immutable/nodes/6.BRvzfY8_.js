import{s as j,n as q}from"../chunks/scheduler.DJEsDRqV.js";import{S as B,i as H,e as g,t as x,s as b,c as $,a as d,b as C,d as m,f as E,r as I,g as _,h as w,n as h,u as P,o as v,v as U,k as z,l as A,m as F,p as G,w as J}from"../chunks/index.UDOAXvno.js";import{e as k}from"../chunks/each.D6YF6ztN.js";import{L as K}from"../chunks/link.B9nYuwjB.js";import{p as D}from"../chunks/paymentData.DKj0TrwF.js";import{t as M}from"../chunks/textData.Bx_FZ2i2.js";import{g as N}from"../chunks/main.BLoaUCUo.js";function y(c,o,n){const s=c.slice();return s[1]=o[n],s}function O(c){let o=D[c[1]].title+"",n;return{c(){n=x(o)},l(s){n=C(s,o)},m(s,f){_(s,n,f)},p:q,d(s){s&&m(n)}}}function L(c){let o,n,s,f;return n=new K({props:{href:"./"+c[1],$$slots:{default:[O]},$$scope:{ctx:c}}}),{c(){o=g("li"),z(n.$$.fragment),s=b()},l(a){o=$(a,"LI",{});var i=d(o);A(n.$$.fragment,i),s=E(i),i.forEach(m)},m(a,i){_(a,o,i),F(n,o,null),w(o,s),f=!0},p(a,i){const u={};i&16&&(u.$$scope={dirty:i,ctx:a}),n.$set(u)},i(a){f||(h(n.$$.fragment,a),f=!0)},o(a){v(n.$$.fragment,a),f=!1},d(a){a&&m(o),G(n)}}}function Q(c){let o,n=M.Crypto+"",s,f,a,i,u=k(c[0]),e=[];for(let t=0;t<u.length;t+=1)e[t]=L(y(c,u,t));const S=t=>v(e[t],1,1,()=>{e[t]=null});return{c(){o=g("h1"),s=x(n),f=b(),a=g("ul");for(let t=0;t<e.length;t+=1)e[t].c();this.h()},l(t){o=$(t,"H1",{});var r=d(o);s=C(r,n),r.forEach(m),f=E(t),a=$(t,"UL",{class:!0});var l=d(a);for(let p=0;p<e.length;p+=1)e[p].l(l);l.forEach(m),this.h()},h(){I(a,"class","svelte-j3l5gv")},m(t,r){_(t,o,r),w(o,s),_(t,f,r),_(t,a,r);for(let l=0;l<e.length;l+=1)e[l]&&e[l].m(a,null);i=!0},p(t,[r]){if(r&1){u=k(t[0]);let l;for(l=0;l<u.length;l+=1){const p=y(t,u,l);e[l]?(e[l].p(p,r),h(e[l],1)):(e[l]=L(p),e[l].c(),h(e[l],1),e[l].m(a,null))}for(J(),l=u.length;l<e.length;l+=1)S(l);P()}},i(t){if(!i){for(let r=0;r<u.length;r+=1)h(e[r]);i=!0}},o(t){e=e.filter(Boolean);for(let r=0;r<e.length;r+=1)v(e[r]);i=!1},d(t){t&&(m(o),m(f),m(a)),U(e,t)}}}function R(c){return[N(D)]}class et extends B{constructor(o){super(),H(this,o,R,Q,j,{})}}export{et as component};
