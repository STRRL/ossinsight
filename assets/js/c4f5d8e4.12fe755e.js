/*! For license information please see c4f5d8e4.12fe755e.js.LICENSE.txt */
"use strict";(self.webpackChunkdocus=self.webpackChunkdocus||[]).push([[4195,9894],{20551:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return f}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={},c=void 0,s={type:"mdx",permalink:"/bottom",source:"@site/src/pages/bottom.md"},u=[],d={toc:u};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"text--center"},(0,o.kt)("h3",null,"Follow us ",(0,o.kt)("a",{href:"https://twitter.com/PingCAP"},"@PingCAP")," and join the conversation using the hashtags #PingCAP")))}f.isMDXComponent=!0},25640:function(e,t,n){n.r(t),n.d(t,{default:function(){return Ne}});var r=n(67294),a=n(86010),o=n(77019),i=n(52263),l=(n(12859),"heroWc_+Gf6"),c="heroWcTitle_KLg-",s="wcContainer_U70N",u="heroBanner_etFc",d="autoBr_BISs";function f(e,t){var n,r={};if(window.isSupported){var a=Math.floor(Math.random()*Date.now());Array.isArray(e)||(e=[e]),e.forEach((function(t,n){if("string"==typeof t){if(e[n]=document.getElementById(t),!e[n])throw new Error("The element id specified is not found.")}else if(!t.tagName&&!t.appendChild)throw new Error("You must pass valid HTML elements, or ID of the element.")}));var o={list:[],fontFamily:'"Trebuchet MS", "Heiti TC", "\u5fae\u8edf\u6b63\u9ed1\u9ad4", "Arial Unicode MS", "Droid Fallback Sans", sans-serif',fontWeight:"normal",color:"random-dark",minSize:0,weightFactor:1,clearCanvas:!0,backgroundColor:"#fff",gridSize:8,drawOutOfBound:!1,shrinkToFit:!1,origin:null,drawMask:!1,maskColor:"rgba(255,0,0,0.3)",maskGapWidth:.3,wait:0,abortThreshold:0,abort:function(){},shape:"circle",ellipticity:.65,createElement:null!=(n=t.createElement)?n:function(e){return document.createElement("a")}};if(t)for(var i in t)i in o&&(o[i]=t[i]);if("function"!=typeof o.weightFactor){var l=o.weightFactor;o.weightFactor=function(e){return e*l}}if("function"!=typeof o.shape)switch(o.shape){case"circle":default:o.shape="circle";break;case"square":o.shape=function(e){return Math.min(1/Math.abs(Math.cos(e)),1/Math.abs(Math.sin(e)))}}o.gridSize=Math.max(Math.floor(o.gridSize),4);var c,s,u,d,f,m,h,v,p=o.gridSize,g=p-o.maskGapWidth;"function"==typeof o.color&&(h=o.color),"function"==typeof o.fontWeight&&(v=o.fontWeight);var w=[],b=function(e){if(w[e])return w[e];var t=8*e,n=t,r=[];for(0===e&&r.push([d[0],d[1],0]);n--;){var a=1;"circle"!==o.shape&&(a=o.shape(n/t*2*Math.PI)),r.push([d[0]+e*a*Math.cos(-n/t*2*Math.PI),d[1]+e*a*Math.sin(-n/t*2*Math.PI)*o.ellipticity,n/t*2*Math.PI])}return w[e]=r,r},y=function(){return o.abortThreshold>0&&(new Date).getTime()-m>o.abortThreshold},E=document.createElement("canvas"),x=E.getContext("2d",{willReadFrequently:!0}),T=function(e,t){var n,r=o.weightFactor(t);if(r<=o.minSize)return!1;n=v?v(e,t,r):o.fontWeight;var a=(x.setTransform(1,0,0,1,0,0),x.clearRect(0,0,E.width,E.height),{fcanvas:E,fctx:x}),i=a.fcanvas,l=a.fctx;l.font=n+" "+r.toString(10)+"px "+o.fontFamily;var c=l.measureText(e).width,s=Math.max(r,l.measureText("m").width,l.measureText("\uff37").width),u=c+2*s,d=3*s,f=-c/2,m=-s/2,h=Math.ceil(u/p),g=Math.ceil(d/p),w=h*p,b=g*p;i.width=w,i.height=b,l.scale(1,1),l.translate(w/2,b/2),l.font=n+" "+r.toString(10)+"px "+o.fontFamily,l.fillStyle="#000",l.textBaseline="middle",l.fillText(e,f,m+.4*r);var T=l.getImageData(0,0,w,b).data;if(y())return!1;for(var k,I,C,Z=[[],[]],S=h,M=[g/2,h/2,g/2,h/2];S--;)for(k=g;k--;){C=p;e:for(;C--;)for(var j=4*((k*p+C)*w+(S*p+(I=p)))+3;I--;){if(T[j]){Z[0].push(S),Z[1].push(k),M[3]=Math.min(M[3],S),M[1]=Math.max(M[1],S),M[0]=Math.min(M[0],k),M[2]=Math.max(M[2],k);break e}j-=4}}return{occupied:Z,bounds:M,gw:h,gh:g,fillTextOffsetX:f,fillTextOffsetY:m,fillTextWidth:c,fillTextHeight:s,fontSize:r}},k=function(t,n,r,a){t>=s||n>=u||t<0||n<0||(c[t][n]=!1,!r)||e[0].getContext("2d").fillRect(t*p,n*p,g,g)},I=function t(n){var r,a;Array.isArray(n)?(r=n[0],a=n[1]):(r=n.word,a=n.weight,n.attributes);var i=T(r,a);if(!i)return!1;if(y())return!1;if(!o.drawOutOfBound&&!o.shrinkToFit){var l=i.bounds;if(l[1]-l[3]+1>s||l[2]-l[0]+1>u)return!1}for(var d=f+1,m=function(t){var l=Math.floor(t[0]-i.gw/2),m=Math.floor(t[1]-i.gh/2);return i.gw,i.gh,!!function(e,t,n,r,a){for(var i=a[0].length;i--;){var l=e+a[0][i],d=t+a[1][i];if(l>=s||d>=u||l<0||d<0){if(!o.drawOutOfBound)return!1}else if(!c[l][d])return!1}return!0}(l,m,0,0,i.occupied)&&(function(t,n,r,a,i,l,c,s,u){var d,f,m=r.fontSize;d=h?h(a,i,m,l,c):o.color,f=v?v(a,i,m):o.fontWeight;var g=e[1],w=o.createElement(u),b={},y=m;y<12&&(b.scale=y/12);var E=b.scale?" scale("+b.scale+")":"",x={font:f+" "+Math.max(12,y)+"px "+o.fontFamily,left:(t+r.gw/2)*p+r.fillTextOffsetX+"px",top:(n+r.gh/2)*p+r.fillTextOffsetY+"px",width:r.fillTextWidth+"px",height:r.fillTextHeight+"px","line-height":Math.max(m,12)+"px",transform:E,"-webkit-transform":E,"-ms-transform":E};d&&(x.color=d),w.textContent=a;var T=Object.entries(x).map((function(e){return e[0]+": "+e[1]+";"})).join(" ");w.style.cssText+=" "+T,g.appendChild(w)}(l,m,i,r,a,f-d,t[2],0,n),function(t,n,r,a,i,l){var c,d=i.occupied,f=o.drawMask;f&&((c=e[0].getContext("2d")).save(),c.fillStyle=o.maskColor);for(var m=d[0].length;m--;){var h=t+d[0][m],v=n+d[1][m];h>=s||v>=u||h<0||v<0||k(h,v,f)}f&&c.restore()}(l,m,0,0,i),!0)};d--;)if(b(f-d).some(m))return!0;return!!o.shrinkToFit&&(Array.isArray(n)?n[1]=3*n[1]/4:n.weight=3*n.weight/4,t(n))},C=function(t,n,r){if(n)return!e.some((function(e){var n=new CustomEvent(t,{detail:r||{}});return!e.dispatchEvent(n)}),this);e.forEach((function(e){var n=new CustomEvent(t,{detail:r||{}});e.dispatchEvent(n)}),this)};this.start=function(){var t,n,i,l,h,v=e[0];if(v.getContext)s=Math.ceil(v.width/p),u=Math.ceil(v.height/p);else{var g=v.getBoundingClientRect();s=Math.ceil(g.width/p),u=Math.ceil(g.height/p)}if(C("wordcloudstart",!0)){if(d=o.origin?[o.origin[0]/p,o.origin[1]/p]:[s/2,u/2],f=Math.floor(Math.sqrt(s*s+u*u)),c=[],!v.getContext||o.clearCanvas)for(e.forEach((function(e){if(e.getContext){var t=e.getContext("2d");t.fillStyle=o.backgroundColor,t.clearRect(0,0,s*(p+1),u*(p+1)),t.fillRect(0,0,s*(p+1),u*(p+1))}else e.textContent="",e.style.position="relative"})),t=s;t--;)for(c[t]=[],n=u;n--;)c[t][n]=!0;else{var w=document.createElement("canvas").getContext("2d");w.fillStyle=o.backgroundColor,w.fillRect(0,0,1,1);var b,E,x=w.getImageData(0,0,1,1).data,T=v.getContext("2d").getImageData(0,0,s*p,u*p).data;for(t=s;t--;)for(c[t]=[],n=u;n--;){E=p;e:for(;E--;)for(b=p;b--;)for(i=4;i--;)if(T[4*((n*p+E)*s*p+(t*p+b))+i]!==x[i]){c[t][n]=!1;break e}!1!==c[t][n]&&(c[t][n]=!0)}T=w=x=void 0}i=0,0!==o.wait?(l=window.setTimeout,h=window.clearTimeout):(l=window.setImmediate,h=window.clearImmediate);var k=function(t,n){e.forEach((function(e){e.removeEventListener(t,n)}),this)},Z=function e(){k("wordcloudstart",e),h(r[a])};!function(t,n){e.forEach((function(e){e.addEventListener("wordcloudstart",n)}),this)}(0,Z),r[a]=l((function e(){if(i>=o.list.length)return h(r[a]),C("wordcloudstop",!1),k("wordcloudstart",Z),void delete r[a];m=(new Date).getTime();var t=I(o.list[i]),n=!C("wordclouddrawn",!0,{item:o.list[i],drawn:t});if(y()||n)return h(r[a]),o.abort(),C("wordcloudabort",!1),C("wordcloudstop",!1),k("wordcloudstart",Z),void delete r[a];i++,r[a]=l(e,o.wait)}),o.wait)}},this.stop=function(){if(r)for(var e in r)window.clearImmediate(r[e])}}}"undefined"!=typeof window&&(window.setImmediate||(window.setImmediate=window.msSetImmediate||window.webkitSetImmediate||window.mozSetImmediate||window.oSetImmediate||function(){if(!window.postMessage||!window.addEventListener)return null;var e=[void 0],t="zero-timeout-message";return window.addEventListener("message",(function(n){if("string"==typeof n.data&&n.data.substr(0,t.length)===t){n.stopImmediatePropagation();var r=parseInt(n.data.substr(t.length),36);e[r]&&(e[r](),e[r]=void 0)}}),!0),window.clearImmediate=function(t){e[t]&&(e[t]=void 0)},function(n){var r=e.length;return e.push(n),window.postMessage(t+r.toString(36),"*"),r}}()||function(e){window.setTimeout(e,0)}),window.clearImmediate||(window.clearImmediate=window.msClearImmediate||window.webkitClearImmediate||window.mozClearImmediate||window.oClearImmediate||function(e){window.clearTimeout(e)}),Object.defineProperty(window,"isSupported",{get:function(){return function(){var e=document.createElement("canvas");if(!e||!e.getContext)return!1;var t=e.getContext("2d");return!!(t&&t.getImageData&&t.fillText&&Array.prototype.some&&Array.prototype.push)}()}}));var m,h,v="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n.g?n.g:"undefined"!=typeof self?self:{},p={exports:{}};m=p,h=p.exports,function(e,t){var n=function(){var e=null,t={};u("monochrome",null,[[0,0],[100,0]]),u("red",[-26,18],[[20,100],[30,92],[40,89],[50,85],[60,78],[70,70],[80,60],[90,55],[100,50]]),u("orange",[18,46],[[20,100],[30,93],[40,88],[50,86],[60,85],[70,70],[100,70]]),u("yellow",[46,62],[[25,100],[40,94],[50,89],[60,86],[70,84],[80,82],[90,80],[100,75]]),u("green",[62,178],[[30,100],[40,90],[50,85],[60,81],[70,74],[80,64],[90,50],[100,40]]),u("blue",[178,257],[[20,100],[30,86],[40,80],[50,74],[60,60],[70,52],[80,44],[90,39],[100,35]]),u("purple",[257,282],[[20,100],[30,87],[40,79],[50,70],[60,65],[70,59],[80,52],[90,45],[100,42]]),u("pink",[282,334],[[20,100],[30,90],[40,86],[60,84],[80,80],[90,75],[100,73]]);var n=[];function r(e){if(n.length>0){var t=s(o=h(e.hue)),r=(o[1]-o[0])/n.length,a=parseInt((t-o[0])/r);return!0===n[a]?a=(a+2)%n.length:n[a]=!0,(t=s(o=[(o[0]+a*r)%359,(o[0]+(a+1)*r)%359]))<0&&(t=360+t),t}var o;return(t=s(o=l(e.hue)))<0&&(t=360+t),t}function a(e,t){if("monochrome"===t.hue)return 0;if("random"===t.luminosity)return s([0,100]);var n=function(e){return c(e).saturationRange}(e),r=n[0],a=n[1];switch(t.luminosity){case"bright":r=55;break;case"dark":r=a-10;break;case"light":a=55}return s([r,a])}function o(e,t,n){var r=function(e,t){for(var n=c(e).lowerBounds,r=0;r<n.length-1;r++){var a=n[r][0],o=n[r][1],i=n[r+1][0],l=n[r+1][1];if(t>=a&&t<=i){var s=(l-o)/(i-a);return s*t+(o-s*a)}}return 0}(e,t),a=100;switch(n.luminosity){case"dark":a=r+20;break;case"light":r=(a+r)/2;break;case"random":r=0,a=100}return s([r,a])}function i(e,t){switch(t.format){case"hsvArray":return e;case"hslArray":return m(e);case"hsl":var n=m(e);return"hsl("+n[0]+", "+n[1]+"%, "+n[2]+"%)";case"hsla":var r=m(e),a=t.alpha||Math.random();return"hsla("+r[0]+", "+r[1]+"%, "+r[2]+"%, "+a+")";case"rgbArray":return d(e);case"rgb":return"rgb("+d(e).join(", ")+")";case"rgba":var o=d(e);return a=t.alpha||Math.random(),"rgba("+o.join(", ")+", "+a+")";default:return function(e){var t=d(e);function n(e){var t=e.toString(16);return 1==t.length?"0"+t:t}return"#"+n(t[0])+n(t[1])+n(t[2])}(e)}}function l(e){if("number"==typeof parseInt(e)){var n=parseInt(e);if(n<360&&n>0)return[n,n]}if("string"==typeof e)if(t[e]){var r=t[e];if(r.hueRange)return r.hueRange}else if(e.match(/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i)){var a=f(e)[0];return[a,a]}return[0,360]}function c(e){for(var n in e>=334&&e<=360&&(e-=360),t){var r=t[n];if(r.hueRange&&e>=r.hueRange[0]&&e<=r.hueRange[1])return t[n]}return"Color not found"}function s(t){if(null===e){var n=Math.random();return n+=.618033988749895,n%=1,Math.floor(t[0]+n*(t[1]+1-t[0]))}var r=t[1]||1,a=t[0]||0,o=(e=(9301*e+49297)%233280)/233280;return Math.floor(a+o*(r-a))}function u(e,n,r){var a=r[0][0],o=r[r.length-1][0],i=r[r.length-1][1],l=r[0][1];t[e]={hueRange:n,lowerBounds:r,saturationRange:[a,o],brightnessRange:[i,l]}}function d(e){var t=e[0];0===t&&(t=1),360===t&&(t=359),t/=360;var n=e[1]/100,r=e[2]/100,a=Math.floor(6*t),o=6*t-a,i=r*(1-n),l=r*(1-o*n),c=r*(1-(1-o)*n),s=256,u=256,d=256;switch(a){case 0:s=r,u=c,d=i;break;case 1:s=l,u=r,d=i;break;case 2:s=i,u=r,d=c;break;case 3:s=i,u=l,d=r;break;case 4:s=c,u=i,d=r;break;case 5:s=r,u=i,d=l}return[Math.floor(255*s),Math.floor(255*u),Math.floor(255*d)]}function f(e){e=3===(e=e.replace(/^#/,"")).length?e.replace(/(.)/g,"$1$1"):e;var t=parseInt(e.substr(0,2),16)/255,n=parseInt(e.substr(2,2),16)/255,r=parseInt(e.substr(4,2),16)/255,a=Math.max(t,n,r),o=a-Math.min(t,n,r),i=a?o/a:0;switch(a){case t:return[(n-r)/o%6*60||0,i,a];case n:return[60*((r-t)/o+2)||0,i,a];case r:return[60*((t-n)/o+4)||0,i,a]}}function m(e){var t=e[0],n=e[1]/100,r=e[2]/100,a=(2-n)*r;return[t,Math.round(n*r/(a<1?a:2-a)*1e4)/100,a/2*100]}function h(e){if(isNaN(e)){if("string"==typeof e)if(t[e]){var n=t[e];if(n.hueRange)return n.hueRange}else if(e.match(/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i))return c(f(e)[0]).hueRange}else{var r=parseInt(e);if(r<360&&r>0)return c(e).hueRange}return[0,360]}return function t(l){if(void 0!==(l=l||{}).seed&&null!==l.seed&&l.seed===parseInt(l.seed,10))e=l.seed;else if("string"==typeof l.seed)e=function(e){for(var t=0,n=0;n!==e.length&&!(t>=Number.MAX_SAFE_INTEGER);n++)t+=e.charCodeAt(n);return t}(l.seed);else{if(void 0!==l.seed&&null!==l.seed)throw new TypeError("The seed value must be an integer or string");e=null}var c,s;if(null!==l.count&&void 0!==l.count){for(var u=l.count,d=[],f=0;f<l.count;f++)n.push(!1);for(l.count=null;u>d.length;){var m=t(l);null!==e&&(l.seed=e),d.push(m)}return l.count=u,d}return i([c=r(l),s=a(c,l),o(c,s,l)],l)}}();m&&m.exports&&(h=m.exports=n),h.randomColor=n}();var g=p.exports,w=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},b="object"==typeof v&&v&&v.Object===Object&&v,y="object"==typeof self&&self&&self.Object===Object&&self,E=b||y||Function("return this")(),x=E,T=/\s/,k=/^\s+/,I=E.Symbol,C=I,Z=Object.prototype,S=Z.hasOwnProperty,M=Z.toString,j=C?C.toStringTag:void 0,F=Object.prototype.toString,_=function(e){var t=S.call(e,j),n=e[j];try{e[j]=void 0;var r=!0}catch(e){}var a=M.call(e);return r&&(t?e[j]=n:delete e[j]),a},R=I?I.toStringTag:void 0,A=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":R&&R in Object(e)?_(e):function(e){return F.call(e)}(e)},q=function(e){return e?e.slice(0,function(e){for(var t=e.length;t--&&T.test(e.charAt(t)););return t}(e)+1).replace(k,""):e},O=w,z=/^[-+]0x[0-9a-f]+$/i,N=/^0b[01]+$/i,P=/^0o[0-7]+$/i,W=parseInt,L=w,D=function(){return x.Date.now()},B=function(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return null!=e&&"object"==typeof e}(e)&&"[object Symbol]"==A(e)}(e))return NaN;if(O(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=O(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=q(e);var n=N.test(e);return n||P.test(e)?W(e.slice(2),n?2:8):z.test(e)?NaN:+e},H=Math.max,G=Math.min,$=w,U=function(e,t,n){var r=!0,a=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return $(n)&&(r="leading"in n?!!n.leading:r,a="trailing"in n?!!n.trailing:a),function(e,t,n){var r,a,o,i,l,c,s=0,u=!1,d=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function m(t){var n=r,o=a;return r=a=void 0,s=t,i=e.apply(o,n)}function h(e){return s=e,l=setTimeout(p,t),u?m(e):i}function v(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-s>=o}function p(){var e=D();if(v(e))return g(e);l=setTimeout(p,function(e){var n=t-(e-c);return d?G(n,o-(e-s)):n}(e))}function g(e){return l=void 0,f&&r?m(e):(r=a=void 0,i)}function w(){var e=D(),n=v(e);if(r=arguments,a=this,c=e,n){if(void 0===l)return h(c);if(d)return clearTimeout(l),l=setTimeout(p,t),m(c)}return void 0===l&&(l=setTimeout(p,t)),i}return t=B(t)||0,L(n)&&(u=!!n.leading,o=(d="maxWait"in n)?H(B(n.maxWait)||0,t):o,f="trailing"in n?!!n.trailing:f),w.cancel=function(){void 0!==l&&clearTimeout(l),s=0,r=c=a=l=void 0},w.flush=function(){return void 0===l?i:g(D())},w}(e,t,{leading:r,maxWait:t,trailing:a})};function X(e,t){var n=t.container,r=document.createElement("div");r.style.cssText="position: absolute; left: 0;top: 0; width: 100%; height: 100%; font-size-adjust: none; user-select: none;",n.insertBefore(r,n.childNodes.item(0));var a=function(){var t=document.createElement("canvas");r.innerHTML="",r.classList.remove("animated","zoomOut");var a=getComputedStyle(n),o=a.fontFamily,i=a.fontSize,l=a.fontWeight,c=a.width,s=a.height,u=a.lineHeight;t.width=parseInt(c),t.height=parseInt(s);var d=0,m=function(e,t){var n=t.fontWeight,r=t.fontSize,a=t.fontFamily,o=t.width,i=t.height,l=t.lineHeight,c=document.createElement("canvas");c.width=o,c.height=i;var s=c.getContext("2d");return s.fillStyle="#ffffffff",s.textBaseline="middle",s.textAlign="center",s.font=n+" "+r+"px "+a,function(e,t,n,r,a,o){for(var i=[],l=t.split(" "),c="",s=0;s<l.length;s++){var u=c+l[s]+" ";e.measureText(u).width>a&&s>0?(i.push(c),c=l[s]+" "):c=u}c&&i.push(c),r-=(i.length-1)*o/2;for(var d=0;d<i.length;d++)e.fillText(i[d].trim(),n,r),r+=o}(s,e,o/2,i/2,o,l),s.globalCompositeOperation="source-out",s.fillStyle="#ffffffff",s.fillRect(0,0,o,i),s.restore(),window.m=c,c}(n.textContent.trim(),{fontSize:parseInt(i),fontWeight:parseInt(l)||l,fontFamily:o,width:parseInt(c),height:parseInt(s),lineHeight:parseInt(u)});!function(e,t){var n=document.createElement("canvas").getContext("2d");n.fillStyle="#fff",n.fillRect(0,0,1,1);var r=n.getImageData(0,0,1,1).data,a=document.createElement("canvas");a.width=e.width,a.height=e.height;var o=a.getContext("2d");o.drawImage(t,0,0,t.width,t.height,0,0,a.width,a.height);for(var i=o.getImageData(0,0,e.width,e.height),l=o.createImageData(i),c=0;c<i.data.length;c+=4)i.data[c+3]>128?(l.data[c]=r[0],l.data[c+1]=r[1],l.data[c+2]=r[2],l.data[c+3]=r[3]):(l.data[c]=r[0],l.data[c+1]=r[1],l.data[c+2]=r[2],l.data[c+3]=r[3]?r[3]-1:0);o.putImageData(l,0,0),(o=e.getContext("2d")).drawImage(a,0,0),a=o=i=l=n=r=void 0}(t,m),r.innerHTML="";var h=new f([t,r],{fontSize:parseInt(i),fontWeight:parseInt(l)||l,fontFamily:o,gridSize:8,wait:0,list:e,drawMask:!1,maskGapWidth:16,rotateRatio:0,shuffle:!1,clearCanvas:!1,createElement:function(e){var t=document.createElement("a");return t.classList.add("wordcloud-element","zoomIn"),t.href="https://github.com/"+e.key,t.target="_blank",t},weightFactor:function(e){return 4+.618*(parseInt(i)-4)*e},color:function(e,t,n,r,a){return g({seed:d++,luminosity:"dark",format:"rgba",alpha:.1+.4*Math.sqrt(t)})}});return h.start(),function(){h.stop()}},o=a(),i=U((function(){o(),r.classList.add("animated","zoomOut")}),1e3,{trailing:!1,leading:!0}),l=U((function(){setTimeout((function(){o=a()}),0)}),1e3,{trailing:!0,leading:!1}),c=function(e,t){if("undefined"==typeof window)return function(){};var n={cb:function(){i(),l()}};if(window.ResizeObserver){var r=new ResizeObserver((function(){n.cb()}));return r.observe(e),function(){r.unobserve(e),delete n.cb}}var a=e.getClientRects().item(0),o=a.width,c=a.height,s=function(){var t=e.getClientRects().item(0),r=t.width,a=t.height;r===o&&a===c||(n.cb(),o=r,c=a)};return window.addEventListener("resize",s,{passive:!0}),function(){window.removeEventListener("resize",s),delete n.cb}}(n);return function(){c(),o(),r.classList.add("animated","zoomOut"),r.ontransitionend=function(){n.removeChild(r)}}}var Q=n(15861),Y=n(87757),J=n.n(Y),K=n(8100),V=n(21703),ee=function(e){void 0===e&&(e="last_hour");var t,n=V._+"/q/recent-events-rank";return(0,K.ZP)([e],{fetcher:(t=(0,Q.Z)(J().mark((function e(t){var r,a,o;return J().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(n+"?period="+t).then((function(e){return e.json()}));case 2:return r=e.sent,a=r.data,o=r.sql,a.sql=o,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)}))),function(e){return t.apply(this,arguments)}),revalidateOnFocus:!1,revalidateOnReconnect:!1})};function te(e){var t=e.children,n=e.period,a=(0,r.useRef)(),o=ee(n).data,i=void 0===o?[]:o;return(0,r.useLayoutEffect)((function(){if(i&&a.current){if(0===i.length)return;return X(i.map((function(e,t){var n=e.repo_name;e.history_events;return{key:n,word:n.split("/")[1],weight:(i.length-t)/i.length}})),{container:a.current})}}),[i]),r.createElement("div",{ref:a,className:"wordcloud-container"},t)}var ne=n(20551),re=n(63366),ae=n(7906),oe=n(295),ie=n(53252),le=n(72882),ce=n(53184),se=n(53816),ue=n(87357),de=n(55113),fe=n(67720),me=n(50122),he=n(26447),ve=n(46483),pe=n(92902),ge=n(88078),we=n(69661),be=function(e){var t=e.owner,n=e.size,a=void 0===n?"1em":n;return r.createElement(he.Z,{direction:"row",spacing:1,sx:{alignItems:"center"},component:"a",href:"https://github.com/"+t,target:"_blank"},r.createElement(we.Z,{alt:t,src:"https://github.com/"+t+".png?size=20",sx:{width:a,height:a}}),r.createElement(ve.Z,null,t))};be.displayName="GithubOwner";var ye=be,Ee=n(4842),xe=n(85529),Te="superIcon_d3Jt",ke="clearTable_Ur9+",Ie=[{title:"Events",headline:{content:"Events",url:"https://docs.github.com/en/developers/webhooks-and-events/events/github-event-types"},tooltip:"All events in recent 1 hour",key:"history_events"},{title:r.createElement(xe.r7p,null),headline:{content:"WatchEvent",url:"https://docs.github.com/en/developers/webhooks-and-events/events/github-event-types#watchevent"},tooltip:r.createElement(r.Fragment,null,'When someone stars a repository. The type of activity is specified in the action property of the payload object. For more information, see the "starring" REST API.',r.createElement("br",null),r.createElement("br",null),"The event object includes properties that are common for all events. Each event object includes a payload property and the value is unique to each event type. The payload object for this event is described below."),key:"watch_events"},{title:r.createElement(xe.UWO,null),headline:{content:"PullRequestEvent",url:"https://docs.github.com/en/developers/webhooks-and-events/events/github-event-types#pullrequestevent"},tooltip:r.createElement(r.Fragment,null,'Activity related to pull requests. The type of activity is specified in the action property of the payload object. For more information, see the "pull requests" REST API.',r.createElement("br",null),r.createElement("br",null),"The event object includes properties that are common for all events. Each event object includes a payload property and the value is unique to each event type. The payload object for this event is described below."),key:"pull_request_events"},{title:r.createElement(xe.GFI,null),headline:{content:"IssuesEvent",url:"https://docs.github.com/en/developers/webhooks-and-events/events/github-event-types#issuesevent"},tooltip:r.createElement(r.Fragment,null,'Activity related to an issue. The type of activity is specified in the action property of the payload object. For more information, see the "issues" REST API.',r.createElement("br",null),r.createElement("br",null),"The event object includes properties that are common for all events. Each event object includes a payload property and the value is unique to each event type. The payload object for this event is described below."),key:"issues_events"},{title:r.createElement(xe.fg9,null),headline:{content:"PullRequestReviewEvent",url:"https://docs.github.com/en/developers/webhooks-and-events/events/github-event-types#pullrequestreviewevent"},tooltip:r.createElement(r.Fragment,null,'Activity related to pull request reviews. The type of activity is specified in the action property of the payload object. For more information, see the "pull request reviews" REST API.',r.createElement("br",null),r.createElement("br",null),"The event object includes properties that are common for all events. Each event object includes a payload property and the value is unique to each event type. The payload object for this event is described below."),key:"pull_request_review_events"},{title:r.createElement(r.Fragment,null,r.createElement(xe.GFI,null),r.createElement(xe.qtd,{className:Te,size:10})),headline:{content:"IssueCommentEvent",url:"https://docs.github.com/en/developers/webhooks-and-events/events/github-event-types#issuecommentevent"},tooltip:r.createElement(r.Fragment,null,'Activity related to an issue or pull request comment. The type of activity is specified in the action property of the payload object. For more information, see the "issue comments" REST API.',r.createElement("br",null),r.createElement("br",null),"The event object includes properties that are common for all events. Each event object includes a payload property and the value is unique to each event type. The payload object for this event is described below."),key:"issue_comment_events"},{title:r.createElement(r.Fragment,null,r.createElement(xe.fg9,null),r.createElement(xe.qtd,{className:Te,size:10})),headline:{content:"PullRequestReviewCommentEvent",url:"https://docs.github.com/en/developers/webhooks-and-events/events/github-event-types#pullrequestreviewcommentevent"},tooltip:r.createElement(r.Fragment,null,'Activity related to pull request review comments in the pull request\'s unified diff. The type of activity is specified in the action property of the payload object. For more information, see the "pull request review comments" REST API.',r.createElement("br",null),r.createElement("br",null),"The event object includes properties that are common for all events. Each event object includes a payload property and the value is unique to each event type. The payload object for this event is described below."),key:"pull_request_review_comment_events"},{title:r.createElement(r.Fragment,null,r.createElement(xe.Edb,null),r.createElement(xe.qtd,{className:Te,size:10})),headline:{content:"CommitCommentEvent",url:"https://docs.github.com/en/developers/webhooks-and-events/events/github-event-types#commitcommentevent"},tooltip:r.createElement(r.Fragment,null,'A commit comment is created. The type of activity is specified in the action property of the payload object. For more information, see the "commit comment" REST API.',r.createElement("br",null),r.createElement("br",null),"The event object includes properties that are common for all events. Each event object includes a payload property and the value is unique to each event type. The payload object for this event is described below."),key:"commit_comment_events"}],Ce=n(83321),Ze=n(93946),Se=n(74721),Me=n(18557),je=n(50657),Fe=n(18722),_e=n(45684),Re=n(23599),Ae=["repo_name"],qe=[{name:"last hour",value:"last_hour"},{name:"last day",value:"last_day"},{name:"last week",value:"last_week"},{name:"last month",value:"last_month"}];function Oe(e){var t=e.period,n=e.onPeriodChange,a=ee(t),o=a.data,i=a.isValidating,l=r.useState(!1),c=l[0],s=l[1],u=(0,r.useCallback)((function(){return s(!0)}),[s]),d=(0,r.useCallback)((function(){return s(!1)}),[s]),f=(0,r.useCallback)((function(e){return n(e.target.value)}),[n]);return r.createElement(Ee.Z,null,function(e,t,n,a){return r.createElement("h2",null,"Top 20 most active repositories in \xa0",r.createElement(_e.Z,{autoWidth:!0,value:e,variant:"standard",onChange:t,placeholder:"Select...",sx:{font:"inherit",color:"inherit",lineHeight:"inherit"}},qe.map((function(e){var t=e.name,n=e.value;return r.createElement(Re.Z,{key:n,value:n},t)}))),".",r.createElement(pe.Z,{title:r.createElement(ve.Z,{variant:"body2"},"Query was filtered due to massive bots' commits.",r.createElement("br",null),r.createElement(Ce.Z,{disabled:n,onClick:a},"SHOW SQL"))},r.createElement(Ze.Z,null,r.createElement(Se.Z,null))))}(t,f,i,u),function(e,t){var n=r.createElement(ce.Z,null,r.createElement(se.Z,null,r.createElement(ie.Z,{align:"center"},r.createElement("b",null,"#")),r.createElement(ie.Z,null,"Repo"),(Ie||[]).map((function(e){var t=e.title,n=e.headline,a=e.tooltip,o=e.key;return r.createElement(ie.Z,{key:o,align:"center"},r.createElement(pe.Z,{title:r.createElement(ue.Z,{sx:{padding:1}},r.createElement(me.Z,{variant:"subtitle1",href:n.url,target:"_blank"},n.content),r.createElement(fe.Z,{sx:{my:1}}),r.createElement(ve.Z,{variant:"body2",component:"p"},a))},r.createElement("span",null,t)))})))),a=r.createElement(oe.Z,null,null==e?void 0:e.map((function(e,t){var n=e.repo_name,a=(0,re.Z)(e,Ae),o=n.split("/"),i=o[0],l=o[1];return r.createElement(se.Z,{key:n},r.createElement(ie.Z,{component:"th",scope:"row",align:"center"},t+1),r.createElement(ie.Z,{component:"th",scope:"row"},r.createElement(he.Z,{direction:"row",spacing:1,sx:{alignItems:"center"}},r.createElement(ye,{owner:i}),r.createElement("span",null,"/"),r.createElement(ve.Z,{component:"a",href:"https://github.com/"+n,target:"_blank"},l))),Ie.map((function(e){var t=e.key;return r.createElement(ie.Z,{key:t,align:"center"},r.createElement(ve.Z,{variant:"body2",component:"span",color:0===a[t]?"text.disabled":void 0},a[t]||"--"))})))}))),o=r.createElement(oe.Z,null,r.createElement(se.Z,null,r.createElement(ie.Z,{colSpan:Ie.length+2},r.createElement(ge.Z,{animation:"wave"}))),r.createElement(se.Z,null,r.createElement(ie.Z,{colSpan:Ie.length+2},r.createElement(ge.Z,{animation:"wave"}))),r.createElement(se.Z,null,r.createElement(ie.Z,{colSpan:Ie.length+2},r.createElement(ge.Z,{animation:"wave"}))),r.createElement(se.Z,null,r.createElement(ie.Z,{colSpan:Ie.length+2},r.createElement(ge.Z,{animation:"wave"}))),r.createElement(se.Z,null,r.createElement(ie.Z,{colSpan:Ie.length+2},r.createElement(ge.Z,{animation:"wave"}))));return r.createElement(le.Z,{component:de.Z},r.createElement(ae.Z,{sx:{minWidth:650,marginBottom:0},"aria-label":"simple table",size:"small",className:ke},n,t?o:a))}(o,i),r.createElement(je.Z,{maxWidth:"lg",open:c,onClose:d,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description"},r.createElement(Me.Z,null,"[For Debug] SQL Execution info"),r.createElement(ue.Z,{sx:{p:4}},(0,Fe.H1)(null==o?void 0:o.sql))))}function ze(){var e=(0,i.Z)().siteConfig,t=(0,r.useState)("last_hour"),n=t[0],o=t[1];return r.createElement(r.Fragment,null,r.createElement("header",{className:(0,a.Z)("hero",l)},r.createElement("div",{className:s},r.createElement(te,{period:"last_hour"},r.createElement("h1",{className:(0,a.Z)("hero__title",c)},e.title)))),r.createElement("div",{className:(0,a.Z)("hero",u)},r.createElement("div",{className:"container"},r.createElement("p",{className:(0,a.Z)("hero__subtitle",d)},e.tagline))),r.createElement("div",{className:(0,a.Z)("hero",u)},r.createElement("div",{className:"container"},r.createElement(Oe,{period:n,onPeriodChange:o}))))}function Ne(){(0,i.Z)().siteConfig;return r.createElement(o.Z,{title:"\ud83d\udcc8 2021 OSS Analysis",description:"\ud83d\udc8e Comprehensive analysis of open source software trends on github, include database field, javascript framework field, web framework, lowcode development tool, etc."},r.createElement("div",{style:{"--ifm-container-width-xl":"960px"}},r.createElement(ze,null),r.createElement("div",{style:{margin:"4em 0"}},r.createElement("div",{className:"container container-fluid"},r.createElement(ne.default,null)))))}}}]);