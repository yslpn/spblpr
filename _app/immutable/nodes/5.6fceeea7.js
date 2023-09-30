import{H as xt}from"../chunks/control.f5b05b5f.js";import{p as At}from"../chunks/constants.9cd54588.js";import{T as wt}from"../chunks/text.56460d9b.js";import{s as Rt,n as _t}from"../chunks/scheduler.feaddeb4.js";import{S as Lt,i as vt,g as U,H as Dt,s as Z,h as F,j as k,x as Ut,c as W,f as T,k as O,a as R,y as D,A as Xt,m as ct,n as ft,r as te,e as Tt,u as ee,v as ne,o as bt,d as re,t as oe,w as ie}from"../chunks/index.320256d5.js";function se(e,t){return new xt(e,t)}new TextEncoder;var j={},ae=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then},Ft={},b={};let yt;const ue=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];b.getSymbolSize=function(t){if(!t)throw new Error('"version" cannot be null or undefined');if(t<1||t>40)throw new Error('"version" should be in range from 1 to 40');return t*4+17};b.getSymbolTotalCodewords=function(t){return ue[t]};b.getBCHDigit=function(e){let t=0;for(;e!==0;)t++,e>>>=1;return t};b.setToSJISFunction=function(t){if(typeof t!="function")throw new Error('"toSJISFunc" is not a valid function.');yt=t};b.isKanjiModeEnabled=function(){return typeof yt<"u"};b.toSJIS=function(t){return yt(t)};var tt={};(function(e){e.L={bit:1},e.M={bit:0},e.Q={bit:3},e.H={bit:2};function t(i){if(typeof i!="string")throw new Error("Param is not a string");switch(i.toLowerCase()){case"l":case"low":return e.L;case"m":case"medium":return e.M;case"q":case"quartile":return e.Q;case"h":case"high":return e.H;default:throw new Error("Unknown EC Level: "+i)}}e.isValid=function(o){return o&&typeof o.bit<"u"&&o.bit>=0&&o.bit<4},e.from=function(o,r){if(e.isValid(o))return o;try{return t(o)}catch{return r}}})(tt);function kt(){this.buffer=[],this.length=0}kt.prototype={get:function(e){const t=Math.floor(e/8);return(this.buffer[t]>>>7-e%8&1)===1},put:function(e,t){for(let i=0;i<t;i++)this.putBit((e>>>t-i-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(e){const t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}};var le=kt;function q(e){if(!e||e<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}q.prototype.set=function(e,t,i,o){const r=e*this.size+t;this.data[r]=i,o&&(this.reservedBit[r]=!0)};q.prototype.get=function(e,t){return this.data[e*this.size+t]};q.prototype.xor=function(e,t,i){this.data[e*this.size+t]^=i};q.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]};var ce=q,zt={};(function(e){const t=b.getSymbolSize;e.getRowColCoords=function(o){if(o===1)return[];const r=Math.floor(o/7)+2,n=t(o),s=n===145?26:Math.ceil((n-13)/(2*r-2))*2,u=[n-7];for(let a=1;a<r-1;a++)u[a]=u[a-1]-s;return u.push(6),u.reverse()},e.getPositions=function(o){const r=[],n=e.getRowColCoords(o),s=n.length;for(let u=0;u<s;u++)for(let a=0;a<s;a++)u===0&&a===0||u===0&&a===s-1||u===s-1&&a===0||r.push([n[u],n[a]]);return r}})(zt);var Ht={};const fe=b.getSymbolSize,Nt=7;Ht.getPositions=function(t){const i=fe(t);return[[0,0],[i-Nt,0],[0,i-Nt]]};var Vt={};(function(e){e.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const t={N1:3,N2:3,N3:40,N4:10};e.isValid=function(r){return r!=null&&r!==""&&!isNaN(r)&&r>=0&&r<=7},e.from=function(r){return e.isValid(r)?parseInt(r,10):void 0},e.getPenaltyN1=function(r){const n=r.size;let s=0,u=0,a=0,f=null,l=null;for(let C=0;C<n;C++){u=a=0,f=l=null;for(let m=0;m<n;m++){let d=r.get(C,m);d===f?u++:(u>=5&&(s+=t.N1+(u-5)),f=d,u=1),d=r.get(m,C),d===l?a++:(a>=5&&(s+=t.N1+(a-5)),l=d,a=1)}u>=5&&(s+=t.N1+(u-5)),a>=5&&(s+=t.N1+(a-5))}return s},e.getPenaltyN2=function(r){const n=r.size;let s=0;for(let u=0;u<n-1;u++)for(let a=0;a<n-1;a++){const f=r.get(u,a)+r.get(u,a+1)+r.get(u+1,a)+r.get(u+1,a+1);(f===4||f===0)&&s++}return s*t.N2},e.getPenaltyN3=function(r){const n=r.size;let s=0,u=0,a=0;for(let f=0;f<n;f++){u=a=0;for(let l=0;l<n;l++)u=u<<1&2047|r.get(f,l),l>=10&&(u===1488||u===93)&&s++,a=a<<1&2047|r.get(l,f),l>=10&&(a===1488||a===93)&&s++}return s*t.N3},e.getPenaltyN4=function(r){let n=0;const s=r.data.length;for(let a=0;a<s;a++)n+=r.data[a];return Math.abs(Math.ceil(n*100/s/5)-10)*t.N4};function i(o,r,n){switch(o){case e.Patterns.PATTERN000:return(r+n)%2===0;case e.Patterns.PATTERN001:return r%2===0;case e.Patterns.PATTERN010:return n%3===0;case e.Patterns.PATTERN011:return(r+n)%3===0;case e.Patterns.PATTERN100:return(Math.floor(r/2)+Math.floor(n/3))%2===0;case e.Patterns.PATTERN101:return r*n%2+r*n%3===0;case e.Patterns.PATTERN110:return(r*n%2+r*n%3)%2===0;case e.Patterns.PATTERN111:return(r*n%3+(r+n)%2)%2===0;default:throw new Error("bad maskPattern:"+o)}}e.applyMask=function(r,n){const s=n.size;for(let u=0;u<s;u++)for(let a=0;a<s;a++)n.isReserved(a,u)||n.xor(a,u,i(r,a,u))},e.getBestMask=function(r,n){const s=Object.keys(e.Patterns).length;let u=0,a=1/0;for(let f=0;f<s;f++){n(f),e.applyMask(f,r);const l=e.getPenaltyN1(r)+e.getPenaltyN2(r)+e.getPenaltyN3(r)+e.getPenaltyN4(r);e.applyMask(f,r),l<a&&(a=l,u=f)}return u}})(Vt);var et={};const L=tt,G=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],Q=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];et.getBlocksCount=function(t,i){switch(i){case L.L:return G[(t-1)*4+0];case L.M:return G[(t-1)*4+1];case L.Q:return G[(t-1)*4+2];case L.H:return G[(t-1)*4+3];default:return}};et.getTotalCodewordsCount=function(t,i){switch(i){case L.L:return Q[(t-1)*4+0];case L.M:return Q[(t-1)*4+1];case L.Q:return Q[(t-1)*4+2];case L.H:return Q[(t-1)*4+3];default:return}};var Kt={},nt={};const J=new Uint8Array(512),x=new Uint8Array(256);(function(){let t=1;for(let i=0;i<255;i++)J[i]=t,x[t]=i,t<<=1,t&256&&(t^=285);for(let i=255;i<512;i++)J[i]=J[i-255]})();nt.log=function(t){if(t<1)throw new Error("log("+t+")");return x[t]};nt.exp=function(t){return J[t]};nt.mul=function(t,i){return t===0||i===0?0:J[x[t]+x[i]]};(function(e){const t=nt;e.mul=function(o,r){const n=new Uint8Array(o.length+r.length-1);for(let s=0;s<o.length;s++)for(let u=0;u<r.length;u++)n[s+u]^=t.mul(o[s],r[u]);return n},e.mod=function(o,r){let n=new Uint8Array(o);for(;n.length-r.length>=0;){const s=n[0];for(let a=0;a<r.length;a++)n[a]^=t.mul(r[a],s);let u=0;for(;u<n.length&&n[u]===0;)u++;n=n.slice(u)}return n},e.generateECPolynomial=function(o){let r=new Uint8Array([1]);for(let n=0;n<o;n++)r=e.mul(r,new Uint8Array([1,t.exp(n)]));return r}})(Kt);const $t=Kt;function pt(e){this.genPoly=void 0,this.degree=e,this.degree&&this.initialize(this.degree)}pt.prototype.initialize=function(t){this.degree=t,this.genPoly=$t.generateECPolynomial(this.degree)};pt.prototype.encode=function(t){if(!this.genPoly)throw new Error("Encoder not initialized");const i=new Uint8Array(t.length+this.degree);i.set(t);const o=$t.mod(i,this.genPoly),r=this.degree-o.length;if(r>0){const n=new Uint8Array(this.degree);return n.set(o,r),n}return o};var de=pt,Jt={},v={},Et={};Et.isValid=function(t){return!isNaN(t)&&t>=1&&t<=40};var S={};const Ot="[0-9]+",ge="[A-Z $%*+\\-./:]+";let Y="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";Y=Y.replace(/u/g,"\\u");const he="(?:(?![A-Z0-9 $%*+\\-./:]|"+Y+`)(?:.|[\r
]))+`;S.KANJI=new RegExp(Y,"g");S.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g");S.BYTE=new RegExp(he,"g");S.NUMERIC=new RegExp(Ot,"g");S.ALPHANUMERIC=new RegExp(ge,"g");const me=new RegExp("^"+Y+"$"),we=new RegExp("^"+Ot+"$"),ye=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");S.testKanji=function(t){return me.test(t)};S.testNumeric=function(t){return we.test(t)};S.testAlphanumeric=function(t){return ye.test(t)};(function(e){const t=Et,i=S;e.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},e.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},e.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},e.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},e.MIXED={bit:-1},e.getCharCountIndicator=function(n,s){if(!n.ccBits)throw new Error("Invalid mode: "+n);if(!t.isValid(s))throw new Error("Invalid version: "+s);return s>=1&&s<10?n.ccBits[0]:s<27?n.ccBits[1]:n.ccBits[2]},e.getBestModeForData=function(n){return i.testNumeric(n)?e.NUMERIC:i.testAlphanumeric(n)?e.ALPHANUMERIC:i.testKanji(n)?e.KANJI:e.BYTE},e.toString=function(n){if(n&&n.id)return n.id;throw new Error("Invalid mode")},e.isValid=function(n){return n&&n.bit&&n.ccBits};function o(r){if(typeof r!="string")throw new Error("Param is not a string");switch(r.toLowerCase()){case"numeric":return e.NUMERIC;case"alphanumeric":return e.ALPHANUMERIC;case"kanji":return e.KANJI;case"byte":return e.BYTE;default:throw new Error("Unknown mode: "+r)}}e.from=function(n,s){if(e.isValid(n))return n;try{return o(n)}catch{return s}}})(v);(function(e){const t=b,i=et,o=tt,r=v,n=Et,s=7973,u=t.getBCHDigit(s);function a(m,d,g){for(let c=1;c<=40;c++)if(d<=e.getCapacity(c,g,m))return c}function f(m,d){return r.getCharCountIndicator(m,d)+4}function l(m,d){let g=0;return m.forEach(function(c){const E=f(c.mode,d);g+=E+c.getBitsLength()}),g}function C(m,d){for(let g=1;g<=40;g++)if(l(m,g)<=e.getCapacity(g,d,r.MIXED))return g}e.from=function(d,g){return n.isValid(d)?parseInt(d,10):g},e.getCapacity=function(d,g,c){if(!n.isValid(d))throw new Error("Invalid QR Code version");typeof c>"u"&&(c=r.BYTE);const E=t.getSymbolTotalCodewords(d),h=i.getTotalCodewordsCount(d,g),p=(E-h)*8;if(c===r.MIXED)return p;const y=p-f(c,d);switch(c){case r.NUMERIC:return Math.floor(y/10*3);case r.ALPHANUMERIC:return Math.floor(y/11*2);case r.KANJI:return Math.floor(y/13);case r.BYTE:default:return Math.floor(y/8)}},e.getBestVersionForData=function(d,g){let c;const E=o.from(g,o.M);if(Array.isArray(d)){if(d.length>1)return C(d,E);if(d.length===0)return 1;c=d[0]}else c=d;return a(c.mode,c.getLength(),E)},e.getEncodedBits=function(d){if(!n.isValid(d)||d<7)throw new Error("Invalid QR Code version");let g=d<<12;for(;t.getBCHDigit(g)-u>=0;)g^=s<<t.getBCHDigit(g)-u;return d<<12|g}})(Jt);var Yt={};const dt=b,jt=1335,pe=21522,It=dt.getBCHDigit(jt);Yt.getEncodedBits=function(t,i){const o=t.bit<<3|i;let r=o<<10;for(;dt.getBCHDigit(r)-It>=0;)r^=jt<<dt.getBCHDigit(r)-It;return(o<<10|r)^pe};var qt={};const Ee=v;function z(e){this.mode=Ee.NUMERIC,this.data=e.toString()}z.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)};z.prototype.getLength=function(){return this.data.length};z.prototype.getBitsLength=function(){return z.getBitsLength(this.data.length)};z.prototype.write=function(t){let i,o,r;for(i=0;i+3<=this.data.length;i+=3)o=this.data.substr(i,3),r=parseInt(o,10),t.put(r,10);const n=this.data.length-i;n>0&&(o=this.data.substr(i),r=parseInt(o,10),t.put(r,n*3+1))};var Ce=z;const Be=v,it=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function H(e){this.mode=Be.ALPHANUMERIC,this.data=e}H.getBitsLength=function(t){return 11*Math.floor(t/2)+6*(t%2)};H.prototype.getLength=function(){return this.data.length};H.prototype.getBitsLength=function(){return H.getBitsLength(this.data.length)};H.prototype.write=function(t){let i;for(i=0;i+2<=this.data.length;i+=2){let o=it.indexOf(this.data[i])*45;o+=it.indexOf(this.data[i+1]),t.put(o,11)}this.data.length%2&&t.put(it.indexOf(this.data[i]),6)};var Ae=H,_e=function(t){for(var i=[],o=t.length,r=0;r<o;r++){var n=t.charCodeAt(r);if(n>=55296&&n<=56319&&o>r+1){var s=t.charCodeAt(r+1);s>=56320&&s<=57343&&(n=(n-55296)*1024+s-56320+65536,r+=1)}if(n<128){i.push(n);continue}if(n<2048){i.push(n>>6|192),i.push(n&63|128);continue}if(n<55296||n>=57344&&n<65536){i.push(n>>12|224),i.push(n>>6&63|128),i.push(n&63|128);continue}if(n>=65536&&n<=1114111){i.push(n>>18|240),i.push(n>>12&63|128),i.push(n>>6&63|128),i.push(n&63|128);continue}i.push(239,191,189)}return new Uint8Array(i).buffer};const Te=_e,be=v;function V(e){this.mode=be.BYTE,typeof e=="string"&&(e=Te(e)),this.data=new Uint8Array(e)}V.getBitsLength=function(t){return t*8};V.prototype.getLength=function(){return this.data.length};V.prototype.getBitsLength=function(){return V.getBitsLength(this.data.length)};V.prototype.write=function(e){for(let t=0,i=this.data.length;t<i;t++)e.put(this.data[t],8)};var Ne=V;const Ie=v,Se=b;function K(e){this.mode=Ie.KANJI,this.data=e}K.getBitsLength=function(t){return t*13};K.prototype.getLength=function(){return this.data.length};K.prototype.getBitsLength=function(){return K.getBitsLength(this.data.length)};K.prototype.write=function(e){let t;for(t=0;t<this.data.length;t++){let i=Se.toSJIS(this.data[t]);if(i>=33088&&i<=40956)i-=33088;else if(i>=57408&&i<=60351)i-=49472;else throw new Error("Invalid SJIS character: "+this.data[t]+`
Make sure your charset is UTF-8`);i=(i>>>8&255)*192+(i&255),e.put(i,13)}};var Me=K,Gt={exports:{}};(function(e){var t={single_source_shortest_paths:function(i,o,r){var n={},s={};s[o]=0;var u=t.PriorityQueue.make();u.push(o,0);for(var a,f,l,C,m,d,g,c,E;!u.empty();){a=u.pop(),f=a.value,C=a.cost,m=i[f]||{};for(l in m)m.hasOwnProperty(l)&&(d=m[l],g=C+d,c=s[l],E=typeof s[l]>"u",(E||c>g)&&(s[l]=g,u.push(l,g),n[l]=f))}if(typeof r<"u"&&typeof s[r]>"u"){var h=["Could not find a path from ",o," to ",r,"."].join("");throw new Error(h)}return n},extract_shortest_path_from_predecessor_list:function(i,o){for(var r=[],n=o;n;)r.push(n),i[n],n=i[n];return r.reverse(),r},find_path:function(i,o,r){var n=t.single_source_shortest_paths(i,o,r);return t.extract_shortest_path_from_predecessor_list(n,r)},PriorityQueue:{make:function(i){var o=t.PriorityQueue,r={},n;i=i||{};for(n in o)o.hasOwnProperty(n)&&(r[n]=o[n]);return r.queue=[],r.sorter=i.sorter||o.default_sorter,r},default_sorter:function(i,o){return i.cost-o.cost},push:function(i,o){var r={value:i,cost:o};this.queue.push(r),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};e.exports=t})(Gt);var Pe=Gt.exports;(function(e){const t=v,i=Ce,o=Ae,r=Ne,n=Me,s=S,u=b,a=Pe;function f(h){return unescape(encodeURIComponent(h)).length}function l(h,p,y){const w=[];let B;for(;(B=h.exec(y))!==null;)w.push({data:B[0],index:B.index,mode:p,length:B[0].length});return w}function C(h){const p=l(s.NUMERIC,t.NUMERIC,h),y=l(s.ALPHANUMERIC,t.ALPHANUMERIC,h);let w,B;return u.isKanjiModeEnabled()?(w=l(s.BYTE,t.BYTE,h),B=l(s.KANJI,t.KANJI,h)):(w=l(s.BYTE_KANJI,t.BYTE,h),B=[]),p.concat(y,w,B).sort(function(_,N){return _.index-N.index}).map(function(_){return{data:_.data,mode:_.mode,length:_.length}})}function m(h,p){switch(p){case t.NUMERIC:return i.getBitsLength(h);case t.ALPHANUMERIC:return o.getBitsLength(h);case t.KANJI:return n.getBitsLength(h);case t.BYTE:return r.getBitsLength(h)}}function d(h){return h.reduce(function(p,y){const w=p.length-1>=0?p[p.length-1]:null;return w&&w.mode===y.mode?(p[p.length-1].data+=y.data,p):(p.push(y),p)},[])}function g(h){const p=[];for(let y=0;y<h.length;y++){const w=h[y];switch(w.mode){case t.NUMERIC:p.push([w,{data:w.data,mode:t.ALPHANUMERIC,length:w.length},{data:w.data,mode:t.BYTE,length:w.length}]);break;case t.ALPHANUMERIC:p.push([w,{data:w.data,mode:t.BYTE,length:w.length}]);break;case t.KANJI:p.push([w,{data:w.data,mode:t.BYTE,length:f(w.data)}]);break;case t.BYTE:p.push([{data:w.data,mode:t.BYTE,length:f(w.data)}])}}return p}function c(h,p){const y={},w={start:{}};let B=["start"];for(let A=0;A<h.length;A++){const _=h[A],N=[];for(let P=0;P<_.length;P++){const I=_[P],$=""+A+P;N.push($),y[$]={node:I,lastCount:0},w[$]={};for(let ot=0;ot<B.length;ot++){const M=B[ot];y[M]&&y[M].node.mode===I.mode?(w[M][$]=m(y[M].lastCount+I.length,I.mode)-m(y[M].lastCount,I.mode),y[M].lastCount+=I.length):(y[M]&&(y[M].lastCount=I.length),w[M][$]=m(I.length,I.mode)+4+t.getCharCountIndicator(I.mode,p))}}B=N}for(let A=0;A<B.length;A++)w[B[A]].end=0;return{map:w,table:y}}function E(h,p){let y;const w=t.getBestModeForData(h);if(y=t.from(p,w),y!==t.BYTE&&y.bit<w.bit)throw new Error('"'+h+'" cannot be encoded with mode '+t.toString(y)+`.
 Suggested mode is: `+t.toString(w));switch(y===t.KANJI&&!u.isKanjiModeEnabled()&&(y=t.BYTE),y){case t.NUMERIC:return new i(h);case t.ALPHANUMERIC:return new o(h);case t.KANJI:return new n(h);case t.BYTE:return new r(h)}}e.fromArray=function(p){return p.reduce(function(y,w){return typeof w=="string"?y.push(E(w,null)):w.data&&y.push(E(w.data,w.mode)),y},[])},e.fromString=function(p,y){const w=C(p,u.isKanjiModeEnabled()),B=g(w),A=c(B,y),_=a.find_path(A.map,"start","end"),N=[];for(let P=1;P<_.length-1;P++)N.push(A.table[_[P]].node);return e.fromArray(d(N))},e.rawSplit=function(p){return e.fromArray(C(p,u.isKanjiModeEnabled()))}})(qt);const rt=b,st=tt,Re=le,Le=ce,ve=zt,De=Ht,gt=Vt,ht=et,Ue=de,X=Jt,Fe=Yt,ke=v,at=qt;function ze(e,t){const i=e.size,o=De.getPositions(t);for(let r=0;r<o.length;r++){const n=o[r][0],s=o[r][1];for(let u=-1;u<=7;u++)if(!(n+u<=-1||i<=n+u))for(let a=-1;a<=7;a++)s+a<=-1||i<=s+a||(u>=0&&u<=6&&(a===0||a===6)||a>=0&&a<=6&&(u===0||u===6)||u>=2&&u<=4&&a>=2&&a<=4?e.set(n+u,s+a,!0,!0):e.set(n+u,s+a,!1,!0))}}function He(e){const t=e.size;for(let i=8;i<t-8;i++){const o=i%2===0;e.set(i,6,o,!0),e.set(6,i,o,!0)}}function Ve(e,t){const i=ve.getPositions(t);for(let o=0;o<i.length;o++){const r=i[o][0],n=i[o][1];for(let s=-2;s<=2;s++)for(let u=-2;u<=2;u++)s===-2||s===2||u===-2||u===2||s===0&&u===0?e.set(r+s,n+u,!0,!0):e.set(r+s,n+u,!1,!0)}}function Ke(e,t){const i=e.size,o=X.getEncodedBits(t);let r,n,s;for(let u=0;u<18;u++)r=Math.floor(u/3),n=u%3+i-8-3,s=(o>>u&1)===1,e.set(r,n,s,!0),e.set(n,r,s,!0)}function ut(e,t,i){const o=e.size,r=Fe.getEncodedBits(t,i);let n,s;for(n=0;n<15;n++)s=(r>>n&1)===1,n<6?e.set(n,8,s,!0):n<8?e.set(n+1,8,s,!0):e.set(o-15+n,8,s,!0),n<8?e.set(8,o-n-1,s,!0):n<9?e.set(8,15-n-1+1,s,!0):e.set(8,15-n-1,s,!0);e.set(o-8,8,1,!0)}function $e(e,t){const i=e.size;let o=-1,r=i-1,n=7,s=0;for(let u=i-1;u>0;u-=2)for(u===6&&u--;;){for(let a=0;a<2;a++)if(!e.isReserved(r,u-a)){let f=!1;s<t.length&&(f=(t[s]>>>n&1)===1),e.set(r,u-a,f),n--,n===-1&&(s++,n=7)}if(r+=o,r<0||i<=r){r-=o,o=-o;break}}}function Je(e,t,i){const o=new Re;i.forEach(function(a){o.put(a.mode.bit,4),o.put(a.getLength(),ke.getCharCountIndicator(a.mode,e)),a.write(o)});const r=rt.getSymbolTotalCodewords(e),n=ht.getTotalCodewordsCount(e,t),s=(r-n)*8;for(o.getLengthInBits()+4<=s&&o.put(0,4);o.getLengthInBits()%8!==0;)o.putBit(0);const u=(s-o.getLengthInBits())/8;for(let a=0;a<u;a++)o.put(a%2?17:236,8);return Oe(o,e,t)}function Oe(e,t,i){const o=rt.getSymbolTotalCodewords(t),r=ht.getTotalCodewordsCount(t,i),n=o-r,s=ht.getBlocksCount(t,i),u=o%s,a=s-u,f=Math.floor(o/s),l=Math.floor(n/s),C=l+1,m=f-l,d=new Ue(m);let g=0;const c=new Array(s),E=new Array(s);let h=0;const p=new Uint8Array(e.buffer);for(let _=0;_<s;_++){const N=_<a?l:C;c[_]=p.slice(g,g+N),E[_]=d.encode(c[_]),g+=N,h=Math.max(h,N)}const y=new Uint8Array(o);let w=0,B,A;for(B=0;B<h;B++)for(A=0;A<s;A++)B<c[A].length&&(y[w++]=c[A][B]);for(B=0;B<m;B++)for(A=0;A<s;A++)y[w++]=E[A][B];return y}function Ye(e,t,i,o){let r;if(Array.isArray(e))r=at.fromArray(e);else if(typeof e=="string"){let f=t;if(!f){const l=at.rawSplit(e);f=X.getBestVersionForData(l,i)}r=at.fromString(e,f||40)}else throw new Error("Invalid data");const n=X.getBestVersionForData(r,i);if(!n)throw new Error("The amount of data is too big to be stored in a QR Code");if(!t)t=n;else if(t<n)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+n+`.
`);const s=Je(t,i,r),u=rt.getSymbolSize(t),a=new Le(u);return ze(a,t),He(a),Ve(a,t),ut(a,i,0),t>=7&&Ke(a,t),$e(a,s),isNaN(o)&&(o=gt.getBestMask(a,ut.bind(null,a,i))),gt.applyMask(o,a),ut(a,i,o),{modules:a,version:t,errorCorrectionLevel:i,maskPattern:o,segments:r}}Ft.create=function(t,i){if(typeof t>"u"||t==="")throw new Error("No input text");let o=st.M,r,n;return typeof i<"u"&&(o=st.from(i.errorCorrectionLevel,st.M),r=X.from(i.version),n=gt.from(i.maskPattern),i.toSJISFunc&&rt.setToSJISFunction(i.toSJISFunc)),Ye(t,r,o,n)};var Qt={},Ct={};(function(e){function t(i){if(typeof i=="number"&&(i=i.toString()),typeof i!="string")throw new Error("Color should be defined as hex string");let o=i.slice().replace("#","").split("");if(o.length<3||o.length===5||o.length>8)throw new Error("Invalid hex color: "+i);(o.length===3||o.length===4)&&(o=Array.prototype.concat.apply([],o.map(function(n){return[n,n]}))),o.length===6&&o.push("F","F");const r=parseInt(o.join(""),16);return{r:r>>24&255,g:r>>16&255,b:r>>8&255,a:r&255,hex:"#"+o.slice(0,6).join("")}}e.getOptions=function(o){o||(o={}),o.color||(o.color={});const r=typeof o.margin>"u"||o.margin===null||o.margin<0?4:o.margin,n=o.width&&o.width>=21?o.width:void 0,s=o.scale||4;return{width:n,scale:n?4:s,margin:r,color:{dark:t(o.color.dark||"#000000ff"),light:t(o.color.light||"#ffffffff")},type:o.type,rendererOpts:o.rendererOpts||{}}},e.getScale=function(o,r){return r.width&&r.width>=o+r.margin*2?r.width/(o+r.margin*2):r.scale},e.getImageWidth=function(o,r){const n=e.getScale(o,r);return Math.floor((o+r.margin*2)*n)},e.qrToImageData=function(o,r,n){const s=r.modules.size,u=r.modules.data,a=e.getScale(s,n),f=Math.floor((s+n.margin*2)*a),l=n.margin*a,C=[n.color.light,n.color.dark];for(let m=0;m<f;m++)for(let d=0;d<f;d++){let g=(m*f+d)*4,c=n.color.light;if(m>=l&&d>=l&&m<f-l&&d<f-l){const E=Math.floor((m-l)/a),h=Math.floor((d-l)/a);c=C[u[E*s+h]?1:0]}o[g++]=c.r,o[g++]=c.g,o[g++]=c.b,o[g]=c.a}}})(Ct);(function(e){const t=Ct;function i(r,n,s){r.clearRect(0,0,n.width,n.height),n.style||(n.style={}),n.height=s,n.width=s,n.style.height=s+"px",n.style.width=s+"px"}function o(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}e.render=function(n,s,u){let a=u,f=s;typeof a>"u"&&(!s||!s.getContext)&&(a=s,s=void 0),s||(f=o()),a=t.getOptions(a);const l=t.getImageWidth(n.modules.size,a),C=f.getContext("2d"),m=C.createImageData(l,l);return t.qrToImageData(m.data,n,a),i(C,f,l),C.putImageData(m,0,0),f},e.renderToDataURL=function(n,s,u){let a=u;typeof a>"u"&&(!s||!s.getContext)&&(a=s,s=void 0),a||(a={});const f=e.render(n,s,a),l=a.type||"image/png",C=a.rendererOpts||{};return f.toDataURL(l,C.quality)}})(Qt);var Zt={};const je=Ct;function St(e,t){const i=e.a/255,o=t+'="'+e.hex+'"';return i<1?o+" "+t+'-opacity="'+i.toFixed(2).slice(1)+'"':o}function lt(e,t,i){let o=e+t;return typeof i<"u"&&(o+=" "+i),o}function qe(e,t,i){let o="",r=0,n=!1,s=0;for(let u=0;u<e.length;u++){const a=Math.floor(u%t),f=Math.floor(u/t);!a&&!n&&(n=!0),e[u]?(s++,u>0&&a>0&&e[u-1]||(o+=n?lt("M",a+i,.5+f+i):lt("m",r,0),r=0,n=!1),a+1<t&&e[u+1]||(o+=lt("h",s),s=0)):r++}return o}Zt.render=function(t,i,o){const r=je.getOptions(i),n=t.modules.size,s=t.modules.data,u=n+r.margin*2,a=r.color.light.a?"<path "+St(r.color.light,"fill")+' d="M0 0h'+u+"v"+u+'H0z"/>':"",f="<path "+St(r.color.dark,"stroke")+' d="'+qe(s,n,r.margin)+'"/>',l='viewBox="0 0 '+u+" "+u+'"',m='<svg xmlns="http://www.w3.org/2000/svg" '+(r.width?'width="'+r.width+'" height="'+r.width+'" ':"")+l+' shape-rendering="crispEdges">'+a+f+`</svg>
`;return typeof o=="function"&&o(null,m),m};const Ge=ae,mt=Ft,Wt=Qt,Qe=Zt;function Bt(e,t,i,o,r){const n=[].slice.call(arguments,1),s=n.length,u=typeof n[s-1]=="function";if(!u&&!Ge())throw new Error("Callback required as last argument");if(u){if(s<2)throw new Error("Too few arguments provided");s===2?(r=i,i=t,t=o=void 0):s===3&&(t.getContext&&typeof r>"u"?(r=o,o=void 0):(r=o,o=i,i=t,t=void 0))}else{if(s<1)throw new Error("Too few arguments provided");return s===1?(i=t,t=o=void 0):s===2&&!t.getContext&&(o=i,i=t,t=void 0),new Promise(function(a,f){try{const l=mt.create(i,o);a(e(l,t,o))}catch(l){f(l)}})}try{const a=mt.create(i,o);r(null,e(a,t,o))}catch(a){r(a)}}j.create=mt.create;j.toCanvas=Bt.bind(null,Wt.render);j.toDataURL=Bt.bind(null,Wt.renderToDataURL);j.toString=Bt.bind(null,function(e,t,i){return Qe.render(e,i)});async function Ze({params:e}){if(Object.keys(At).includes(e.slug)){const i=At[e.slug],o=await j.toString(i.details,{type:"svg"});return{...i,qr:o}}throw se(404,wt["Error.NotFound"])}const ln=Object.freeze(Object.defineProperty({__proto__:null,load:Ze},Symbol.toStringTag,{value:"Module"})),We='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" aria-hidden="true" class="bx--snippet__icon" viewBox="0 0 32 32"><path d="M28 10v18H10V10h18m0-2H10a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2Z"/><path d="M4 18H2V4a2 2 0 0 1 2-2h14v2H4Z"/></svg>';function Mt(e){let t,i=wt["Copy.Success"]+"",o;return{c(){t=U("span"),o=ct(i)},l(r){t=F(r,"SPAN",{});var n=k(t);o=ft(n,i),n.forEach(T)},m(r,n){R(r,t,n),D(t,o)},d(r){r&&T(t)}}}function xe(e){let t,i,o,r,n,s=e[0]&&Mt();return{c(){t=U("button"),i=new Dt(!1),o=Z(),s&&s.c(),this.h()},l(u){t=F(u,"BUTTON",{"aria-label":!0,class:!0});var a=k(t);i=Ut(a,!1),o=W(a),s&&s.l(a),a.forEach(T),this.h()},h(){i.a=o,O(t,"aria-label",wt.Copy),O(t,"class","svelte-kzqxxw")},m(u,a){R(u,t,a),i.m(We,t),D(t,o),s&&s.m(t,null),r||(n=Xt(t,"click",e[1]),r=!0)},p(u,[a]){u[0]?s||(s=Mt(),s.c(),s.m(t,null)):s&&(s.d(1),s=null)},i:_t,o:_t,d(u){u&&T(t),s&&s.d(),r=!1,n()}}}function Xe(e,t,i){let{text:o}=t,r=!1;function n(){navigator.clipboard.writeText(o).then(()=>{i(0,r=!0),setTimeout(()=>{i(0,r=!1)},1500)}).catch(s=>{i(0,r=!1),console.error(s)})}return e.$$set=s=>{"text"in s&&i(2,o=s.text)},[r,n,o]}class tn extends Lt{constructor(t){super(),vt(this,t,Xe,xe,Rt,{text:2})}}function Pt(e){let t,i,o=e[0].qr+"";return{c(){t=U("div"),i=new Dt(!1),this.h()},l(r){t=F(r,"DIV",{class:!0});var n=k(t);i=Ut(n,!1),n.forEach(T),this.h()},h(){i.a=null,O(t,"class","svelte-bzs1vh")},m(r,n){R(r,t,n),i.m(o,t)},p(r,n){n&1&&o!==(o=r[0].qr+"")&&i.p(o)},d(r){r&&T(t)}}}function en(e){let t,i=e[0].title+"",o,r,n,s,u=e[0].details+"",a,f,l,C,m,d;l=new tn({props:{text:e[0].details}});let g=e[0].isCrypto&&Pt(e);return{c(){t=U("h1"),o=ct(i),r=Z(),n=U("p"),s=U("span"),a=ct(u),f=Z(),te(l.$$.fragment),C=Z(),g&&g.c(),m=Tt(),this.h()},l(c){t=F(c,"H1",{});var E=k(t);o=ft(E,i),E.forEach(T),r=W(c),n=F(c,"P",{class:!0});var h=k(n);s=F(h,"SPAN",{class:!0});var p=k(s);a=ft(p,u),p.forEach(T),f=W(h),ee(l.$$.fragment,h),h.forEach(T),C=W(c),g&&g.l(c),m=Tt(),this.h()},h(){O(s,"class","svelte-bzs1vh"),O(n,"class","svelte-bzs1vh")},m(c,E){R(c,t,E),D(t,o),R(c,r,E),R(c,n,E),D(n,s),D(s,a),D(n,f),ne(l,n,null),R(c,C,E),g&&g.m(c,E),R(c,m,E),d=!0},p(c,[E]){(!d||E&1)&&i!==(i=c[0].title+"")&&bt(o,i),(!d||E&1)&&u!==(u=c[0].details+"")&&bt(a,u);const h={};E&1&&(h.text=c[0].details),l.$set(h),c[0].isCrypto?g?g.p(c,E):(g=Pt(c),g.c(),g.m(m.parentNode,m)):g&&(g.d(1),g=null)},i(c){d||(re(l.$$.fragment,c),d=!0)},o(c){oe(l.$$.fragment,c),d=!1},d(c){c&&(T(t),T(r),T(n),T(C),T(m)),ie(l),g&&g.d(c)}}}function nn(e,t,i){let{data:o}=t;return e.$$set=r=>{"data"in r&&i(0,o=r.data)},[o]}class cn extends Lt{constructor(t){super(),vt(this,t,nn,en,Rt,{data:0})}}export{cn as component,ln as universal};
