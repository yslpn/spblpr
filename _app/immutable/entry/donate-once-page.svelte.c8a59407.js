import{S as R,i as U,s as F,k,q as E,a as q,y as S,l as y,m as L,r as O,h as u,c as w,z as T,n as G,b as $,C,A as j,g as d,f as J,d as b,O as K,B as z,D as A,v as M}from"../chunks/index.1b7f35eb.js";import{p as x}from"../chunks/constants.1d6e596f.js";import{T as H}from"../chunks/text.cbe5cda7.js";import{L as I}from"../chunks/link.4c65f21c.js";function B(i,l,t){const s=i.slice();return s[1]=l[t],s}function N(i){let l=x[i[1]].title+"",t;return{c(){t=E(l)},l(s){t=O(s,l)},m(s,a){$(s,t,a)},p:A,d(s){s&&u(t)}}}function D(i){let l,t,s;return t=new I({props:{href:"./"+i[1],$$slots:{default:[N]},$$scope:{ctx:i}}}),{c(){l=k("li"),S(t.$$.fragment)},l(a){l=y(a,"LI",{});var c=L(l);T(t.$$.fragment,c),c.forEach(u)},m(a,c){$(a,l,c),j(t,l,null),s=!0},p(a,c){const p={};c&16&&(p.$$scope={dirty:c,ctx:a}),t.$set(p)},i(a){s||(d(t.$$.fragment,a),s=!0)},o(a){b(t.$$.fragment,a),s=!1},d(a){a&&u(l),z(t)}}}function Q(i){let l=H.Crypto+"",t;return{c(){t=E(l)},l(s){t=O(s,l)},m(s,a){$(s,t,a)},p:A,d(s){s&&u(t)}}}function V(i){let l,t=H.Once+"",s,a,c,p,g,_,v,m=i[0],n=[];for(let e=0;e<m.length;e+=1)n[e]=D(B(i,m,e));const P=e=>b(n[e],1,1,()=>{n[e]=null});return _=new I({props:{href:"./crypto",$$slots:{default:[Q]},$$scope:{ctx:i}}}),{c(){l=k("h1"),s=E(t),a=q(),c=k("ul");for(let e=0;e<n.length;e+=1)n[e].c();p=q(),g=k("li"),S(_.$$.fragment),this.h()},l(e){l=y(e,"H1",{class:!0});var o=L(l);s=O(o,t),o.forEach(u),a=w(e),c=y(e,"UL",{});var f=L(c);for(let h=0;h<n.length;h+=1)n[h].l(f);p=w(f),g=y(f,"LI",{});var r=L(g);T(_.$$.fragment,r),r.forEach(u),f.forEach(u),this.h()},h(){G(l,"class","svelte-1s5foe9")},m(e,o){$(e,l,o),C(l,s),$(e,a,o),$(e,c,o);for(let f=0;f<n.length;f+=1)n[f]&&n[f].m(c,null);C(c,p),C(c,g),j(_,g,null),v=!0},p(e,[o]){if(o&1){m=e[0];let r;for(r=0;r<m.length;r+=1){const h=B(e,m,r);n[r]?(n[r].p(h,o),d(n[r],1)):(n[r]=D(h),n[r].c(),d(n[r],1),n[r].m(c,p))}for(M(),r=m.length;r<n.length;r+=1)P(r);J()}const f={};o&16&&(f.$$scope={dirty:o,ctx:e}),_.$set(f)},i(e){if(!v){for(let o=0;o<m.length;o+=1)d(n[o]);d(_.$$.fragment,e),v=!0}},o(e){n=n.filter(Boolean);for(let o=0;o<n.length;o+=1)b(n[o]);b(_.$$.fragment,e),v=!1},d(e){e&&u(l),e&&u(a),e&&u(c),K(n,e),z(_)}}}function W(i){return[Object.keys(x).filter(t=>!x[t].isRecurrent&&!x[t].isCrypto)]}class te extends R{constructor(l){super(),U(this,l,W,V,F,{})}}export{te as default};