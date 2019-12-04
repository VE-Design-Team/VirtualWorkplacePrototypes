var MaterialRipple=function(r){function e(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return r[n].call(a.exports,a,a.exports,e),a.l=!0,a.exports}var t={};return e.m=r,e.c=t,e.d=function(r,t,n){e.o(r,t)||Object.defineProperty(r,t,{configurable:!1,enumerable:!0,get:n})},e.n=function(r){var t=r&&r.__esModule?function(){return r.default}:function(){return r};return e.d(t,"a",t),t},e.o=function(r,e){return Object.prototype.hasOwnProperty.call(r,e)},e.p="",e(e.s=2)}([function(r,e,t){"use strict";r.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},function(r,e,t){function n(r,e){return Math.pow(r[0]-e[0],2)+Math.pow(r[1]-e[1],2)+Math.pow(r[2]-e[2],2)}var a=t(0),o={};for(var i in a)a.hasOwnProperty(i)&&(o[a[i]]=i);var l=r.exports={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};for(var s in l)if(l.hasOwnProperty(s)){if(!("channels"in l[s]))throw new Error("missing channels property: "+s);if(!("labels"in l[s]))throw new Error("missing channel labels property: "+s);if(l[s].labels.length!==l[s].channels)throw new Error("channel and label counts mismatch: "+s);var u=l[s].channels,h=l[s].labels;delete l[s].channels,delete l[s].labels,Object.defineProperty(l[s],"channels",{value:u}),Object.defineProperty(l[s],"labels",{value:h})}l.rgb.hsl=function(r){var e,t,n,a=r[0]/255,o=r[1]/255,i=r[2]/255,l=Math.min(a,o,i),s=Math.max(a,o,i),u=s-l;return s===l?e=0:a===s?e=(o-i)/u:o===s?e=2+(i-a)/u:i===s&&(e=4+(a-o)/u),e=Math.min(60*e,360),e<0&&(e+=360),n=(l+s)/2,t=s===l?0:n<=.5?u/(s+l):u/(2-s-l),[e,100*t,100*n]},l.rgb.hsv=function(r){var e,t,n,a=r[0],o=r[1],i=r[2],l=Math.min(a,o,i),s=Math.max(a,o,i),u=s-l;return t=0===s?0:u/s*1e3/10,s===l?e=0:a===s?e=(o-i)/u:o===s?e=2+(i-a)/u:i===s&&(e=4+(a-o)/u),e=Math.min(60*e,360),e<0&&(e+=360),n=s/255*1e3/10,[e,t,n]},l.rgb.hwb=function(r){var e=r[0],t=r[1],n=r[2],a=l.rgb.hsl(r)[0],o=1/255*Math.min(e,Math.min(t,n));return n=1-1/255*Math.max(e,Math.max(t,n)),[a,100*o,100*n]},l.rgb.cmyk=function(r){var e,t,n,a,o=r[0]/255,i=r[1]/255,l=r[2]/255;return a=Math.min(1-o,1-i,1-l),e=(1-o-a)/(1-a)||0,t=(1-i-a)/(1-a)||0,n=(1-l-a)/(1-a)||0,[100*e,100*t,100*n,100*a]},l.rgb.keyword=function(r){var e=o[r];if(e)return e;var t,i=1/0;for(var l in a)if(a.hasOwnProperty(l)){var s=a[l],u=n(r,s);u<i&&(i=u,t=l)}return t},l.keyword.rgb=function(r){return a[r]},l.rgb.xyz=function(r){var e=r[0]/255,t=r[1]/255,n=r[2]/255;return e=e>.04045?Math.pow((e+.055)/1.055,2.4):e/12.92,t=t>.04045?Math.pow((t+.055)/1.055,2.4):t/12.92,n=n>.04045?Math.pow((n+.055)/1.055,2.4):n/12.92,[100*(.4124*e+.3576*t+.1805*n),100*(.2126*e+.7152*t+.0722*n),100*(.0193*e+.1192*t+.9505*n)]},l.rgb.lab=function(r){var e,t,n,a=l.rgb.xyz(r),o=a[0],i=a[1],s=a[2];return o/=95.047,i/=100,s/=108.883,o=o>.008856?Math.pow(o,1/3):7.787*o+16/116,i=i>.008856?Math.pow(i,1/3):7.787*i+16/116,s=s>.008856?Math.pow(s,1/3):7.787*s+16/116,e=116*i-16,t=500*(o-i),n=200*(i-s),[e,t,n]},l.hsl.rgb=function(r){var e,t,n,a,o,i=r[0]/360,l=r[1]/100,s=r[2]/100;if(0===l)return o=255*s,[o,o,o];t=s<.5?s*(1+l):s+l-s*l,e=2*s-t,a=[0,0,0];for(var u=0;u<3;u++)n=i+1/3*-(u-1),n<0&&n++,n>1&&n--,o=6*n<1?e+6*(t-e)*n:2*n<1?t:3*n<2?e+(t-e)*(2/3-n)*6:e,a[u]=255*o;return a},l.hsl.hsv=function(r){var e,t,n=r[0],a=r[1]/100,o=r[2]/100,i=a,l=Math.max(o,.01);return o*=2,a*=o<=1?o:2-o,i*=l<=1?l:2-l,t=(o+a)/2,e=0===o?2*i/(l+i):2*a/(o+a),[n,100*e,100*t]},l.hsv.rgb=function(r){var e=r[0]/60,t=r[1]/100,n=r[2]/100,a=Math.floor(e)%6,o=e-Math.floor(e),i=255*n*(1-t),l=255*n*(1-t*o),s=255*n*(1-t*(1-o));switch(n*=255,a){case 0:return[n,s,i];case 1:return[l,n,i];case 2:return[i,n,s];case 3:return[i,l,n];case 4:return[s,i,n];case 5:return[n,i,l]}},l.hsv.hsl=function(r){var e,t,n,a=r[0],o=r[1]/100,i=r[2]/100,l=Math.max(i,.01);return n=(2-o)*i,e=(2-o)*l,t=o*l,t/=e<=1?e:2-e,t=t||0,n/=2,[a,100*t,100*n]},l.hwb.rgb=function(r){var e,t,n,a,o=r[0]/360,i=r[1]/100,l=r[2]/100,s=i+l;s>1&&(i/=s,l/=s),e=Math.floor(6*o),t=1-l,n=6*o-e,0!=(1&e)&&(n=1-n),a=i+n*(t-i);var u,h,c;switch(e){default:case 6:case 0:u=t,h=a,c=i;break;case 1:u=a,h=t,c=i;break;case 2:u=i,h=t,c=a;break;case 3:u=i,h=a,c=t;break;case 4:u=a,h=i,c=t;break;case 5:u=t,h=i,c=a}return[255*u,255*h,255*c]},l.cmyk.rgb=function(r){var e,t,n,a=r[0]/100,o=r[1]/100,i=r[2]/100,l=r[3]/100;return e=1-Math.min(1,a*(1-l)+l),t=1-Math.min(1,o*(1-l)+l),n=1-Math.min(1,i*(1-l)+l),[255*e,255*t,255*n]},l.xyz.rgb=function(r){var e,t,n,a=r[0]/100,o=r[1]/100,i=r[2]/100;return e=3.2406*a+-1.5372*o+-.4986*i,t=-.9689*a+1.8758*o+.0415*i,n=.0557*a+-.204*o+1.057*i,e=e>.0031308?1.055*Math.pow(e,1/2.4)-.055:12.92*e,t=t>.0031308?1.055*Math.pow(t,1/2.4)-.055:12.92*t,n=n>.0031308?1.055*Math.pow(n,1/2.4)-.055:12.92*n,e=Math.min(Math.max(0,e),1),t=Math.min(Math.max(0,t),1),n=Math.min(Math.max(0,n),1),[255*e,255*t,255*n]},l.xyz.lab=function(r){var e,t,n,a=r[0],o=r[1],i=r[2];return a/=95.047,o/=100,i/=108.883,a=a>.008856?Math.pow(a,1/3):7.787*a+16/116,o=o>.008856?Math.pow(o,1/3):7.787*o+16/116,i=i>.008856?Math.pow(i,1/3):7.787*i+16/116,e=116*o-16,t=500*(a-o),n=200*(o-i),[e,t,n]},l.lab.xyz=function(r){var e,t,n,a=r[0],o=r[1],i=r[2];t=(a+16)/116,e=o/500+t,n=t-i/200;var l=Math.pow(t,3),s=Math.pow(e,3),u=Math.pow(n,3);return t=l>.008856?l:(t-16/116)/7.787,e=s>.008856?s:(e-16/116)/7.787,n=u>.008856?u:(n-16/116)/7.787,e*=95.047,t*=100,n*=108.883,[e,t,n]},l.lab.lch=function(r){var e,t,n,a=r[0],o=r[1],i=r[2];return e=Math.atan2(i,o),t=360*e/2/Math.PI,t<0&&(t+=360),n=Math.sqrt(o*o+i*i),[a,n,t]},l.lch.lab=function(r){var e,t,n,a=r[0],o=r[1],i=r[2];return n=i/360*2*Math.PI,e=o*Math.cos(n),t=o*Math.sin(n),[a,e,t]},l.rgb.ansi16=function(r){var e=r[0],t=r[1],n=r[2],a=1 in arguments?arguments[1]:l.rgb.hsv(r)[2];if(0===(a=Math.round(a/50)))return 30;var o=30+(Math.round(n/255)<<2|Math.round(t/255)<<1|Math.round(e/255));return 2===a&&(o+=60),o},l.hsv.ansi16=function(r){return l.rgb.ansi16(l.hsv.rgb(r),r[2])},l.rgb.ansi256=function(r){var e=r[0],t=r[1],n=r[2];return e===t&&t===n?e<8?16:e>248?231:Math.round((e-8)/247*24)+232:16+36*Math.round(e/255*5)+6*Math.round(t/255*5)+Math.round(n/255*5)},l.ansi16.rgb=function(r){var e=r%10;if(0===e||7===e)return r>50&&(e+=3.5),e=e/10.5*255,[e,e,e];var t=.5*(1+~~(r>50));return[(1&e)*t*255,(e>>1&1)*t*255,(e>>2&1)*t*255]},l.ansi256.rgb=function(r){if(r>=232){var e=10*(r-232)+8;return[e,e,e]}r-=16;var t;return[Math.floor(r/36)/5*255,Math.floor((t=r%36)/6)/5*255,t%6/5*255]},l.rgb.hex=function(r){var e=((255&Math.round(r[0]))<<16)+((255&Math.round(r[1]))<<8)+(255&Math.round(r[2])),t=e.toString(16).toUpperCase();return"000000".substring(t.length)+t},l.hex.rgb=function(r){var e=r.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!e)return[0,0,0];var t=e[0];3===e[0].length&&(t=t.split("").map(function(r){return r+r}).join(""));var n=parseInt(t,16);return[n>>16&255,n>>8&255,255&n]},l.rgb.hcg=function(r){var e,t,n=r[0]/255,a=r[1]/255,o=r[2]/255,i=Math.max(Math.max(n,a),o),l=Math.min(Math.min(n,a),o),s=i-l;return e=s<1?l/(1-s):0,t=s<=0?0:i===n?(a-o)/s%6:i===a?2+(o-n)/s:4+(n-a)/s+4,t/=6,t%=1,[360*t,100*s,100*e]},l.hsl.hcg=function(r){var e=r[1]/100,t=r[2]/100,n=1,a=0;return n=t<.5?2*e*t:2*e*(1-t),n<1&&(a=(t-.5*n)/(1-n)),[r[0],100*n,100*a]},l.hsv.hcg=function(r){var e=r[1]/100,t=r[2]/100,n=e*t,a=0;return n<1&&(a=(t-n)/(1-n)),[r[0],100*n,100*a]},l.hcg.rgb=function(r){var e=r[0]/360,t=r[1]/100,n=r[2]/100;if(0===t)return[255*n,255*n,255*n];var a=[0,0,0],o=e%1*6,i=o%1,l=1-i,s=0;switch(Math.floor(o)){case 0:a[0]=1,a[1]=i,a[2]=0;break;case 1:a[0]=l,a[1]=1,a[2]=0;break;case 2:a[0]=0,a[1]=1,a[2]=i;break;case 3:a[0]=0,a[1]=l,a[2]=1;break;case 4:a[0]=i,a[1]=0,a[2]=1;break;default:a[0]=1,a[1]=0,a[2]=l}return s=(1-t)*n,[255*(t*a[0]+s),255*(t*a[1]+s),255*(t*a[2]+s)]},l.hcg.hsv=function(r){var e=r[1]/100,t=r[2]/100,n=e+t*(1-e),a=0;return n>0&&(a=e/n),[r[0],100*a,100*n]},l.hcg.hsl=function(r){var e=r[1]/100,t=r[2]/100,n=t*(1-e)+.5*e,a=0;return n>0&&n<.5?a=e/(2*n):n>=.5&&n<1&&(a=e/(2*(1-n))),[r[0],100*a,100*n]},l.hcg.hwb=function(r){var e=r[1]/100,t=r[2]/100,n=e+t*(1-e);return[r[0],100*(n-e),100*(1-n)]},l.hwb.hcg=function(r){var e=r[1]/100,t=r[2]/100,n=1-t,a=n-e,o=0;return a<1&&(o=(n-a)/(1-a)),[r[0],100*a,100*o]},l.apple.rgb=function(r){return[r[0]/65535*255,r[1]/65535*255,r[2]/65535*255]},l.rgb.apple=function(r){return[r[0]/255*65535,r[1]/255*65535,r[2]/255*65535]},l.gray.rgb=function(r){return[r[0]/100*255,r[0]/100*255,r[0]/100*255]},l.gray.hsl=l.gray.hsv=function(r){return[0,0,r[0]]},l.gray.hwb=function(r){return[0,100,r[0]]},l.gray.cmyk=function(r){return[0,0,0,r[0]]},l.gray.lab=function(r){return[r[0],0,0]},l.gray.hex=function(r){var e=255&Math.round(r[0]/100*255),t=(e<<16)+(e<<8)+e,n=t.toString(16).toUpperCase();return"000000".substring(n.length)+n},l.rgb.gray=function(r){return[(r[0]+r[1]+r[2])/3/255*100]}},function(r,e,t){r.exports=t(3)},function(r,e,t){"use strict";function n(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0}),e.set=void 0;var a=function(){function r(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}(),o=t(4),i=function(r){return r&&r.__esModule?r:{default:r}}(o),l={x:0,y:0,opacity:0,scaleDuration:.3,opacityDuration:1.2,scale:0},s=function(){function r(e){n(this,r),this.element=e,this.makeRippleElement(),this.initEventListeners()}return a(r,[{key:"initEventListeners",value:function(){var r=this;this.element.addEventListener("mousedown",function(e){e.stopPropagation(),r.resetAnimation(),r.animate(e)})}},{key:"makeRippleElement",value:function(){this.rippleElement=document.createElement("span"),this.setRippleCss(),this.element.appendChild(this.rippleElement)}},{key:"setRippleCss",value:function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l;this.rippleElement.style.cssText="\n      background: "+this.getRippleColor()+";\n      border-radius: 50%;\n      position: absolute;\n      height: "+this.getRippleSize()+"px;\n      left: "+r.x+"px;\n      opacity: "+r.opacity+";\n      pointer-events: none;\n      transition: transform "+r.scaleDuration+"s cubic-bezier(0, 0, .2, 1),\n                  opacity "+r.opacityDuration+"s cubic-bezier(0, 0, .2, 1);\n      transform-origin: center;\n      transform: translate(-50%, -50%) scale("+r.scale+");\n      top: "+r.y+"px;\n      width: "+this.getRippleSize()+"px;"}},{key:"animate",value:function(r){var e=this.element.getBoundingClientRect();"static"===window.getComputedStyle(this.element,null).getPropertyValue("position")&&(this.element.style.position="relative"),this.setRippleCss(Object.assign({},l,{x:r.pageX-e.x,y:r.pageY-e.y,scale:1,opacity:0}))}},{key:"resetAnimation",value:function(){this.setRippleCss(Object.assign({},l,{scale:0,opacity:.3,scaleDuration:0,opacityDuration:0}))}},{key:"getRippleSize",value:function(){var r=this.element.getBoundingClientRect();return 2*Math.sqrt(Math.pow(r.width,2)+Math.pow(r.height,2))}},{key:"getRippleColor",value:function(){var r=(0,i.default)(window.getComputedStyle(this.element,null).getPropertyValue("background-color")),e=r.light(),t=r.valpha<.5;return e||t?"#000":"#fff"}}]),r}();e.set=function(r){r.reduce(function(r,e){return r.concat(Array.from(document.querySelectorAll(e)))},[]).filter(function(r,e,t){return t.indexOf(r)===e}).forEach(function(r){new s(r)})}},function(r,e,t){"use strict";function n(r,e){if(!(this instanceof n))return new n(r,e);if(e&&e in p&&(e=null),e&&!(e in c))throw new Error("Unknown model: "+e);var t,a;if(r)if(r instanceof n)this.model=r.model,this.color=r.color.slice(),this.valpha=r.valpha;else if("string"==typeof r){var o=h.get(r);if(null===o)throw new Error("Unable to parse color from string: "+r);this.model=o.model,a=c[this.model].channels,this.color=o.value.slice(0,a),this.valpha="number"==typeof o.value[a]?o.value[a]:1}else if(r.length){this.model=e||"rgb",a=c[this.model].channels;var i=f.call(r,0,a);this.color=u(i,a),this.valpha="number"==typeof r[a]?r[a]:1}else if("number"==typeof r)r&=16777215,this.model="rgb",this.color=[r>>16&255,r>>8&255,255&r],this.valpha=1;else{this.valpha=1;var l=Object.keys(r);"alpha"in r&&(l.splice(l.indexOf("alpha"),1),this.valpha="number"==typeof r.alpha?r.alpha:0);var s=l.sort().join("");if(!(s in g))throw new Error("Unable to parse color from object: "+JSON.stringify(r));this.model=g[s];var v=c[this.model].labels,d=[];for(t=0;t<v.length;t++)d.push(r[v[t]]);this.color=u(d)}else this.model="rgb",this.color=[0,0,0],this.valpha=1;if(b[this.model])for(a=c[this.model].channels,t=0;t<a;t++){var m=b[this.model][t];m&&(this.color[t]=m(this.color[t]))}this.valpha=Math.max(0,Math.min(1,this.valpha)),Object.freeze&&Object.freeze(this)}function a(r,e){return Number(r.toFixed(e))}function o(r){return function(e){return a(e,r)}}function i(r,e,t){return r=Array.isArray(r)?r:[r],r.forEach(function(r){(b[r]||(b[r]=[]))[e]=t}),r=r[0],function(n){var a;return arguments.length?(t&&(n=t(n)),a=this[r](),a.color[e]=n,a):(a=this[r]().color[e],t&&(a=t(a)),a)}}function l(r){return function(e){return Math.max(0,Math.min(r,e))}}function s(r){return Array.isArray(r)?r:[r]}function u(r,e){for(var t=0;t<e;t++)"number"!=typeof r[t]&&(r[t]=0);return r}var h=t(5),c=t(8),f=[].slice,p=["keyword","gray","hex"],g={};Object.keys(c).forEach(function(r){g[f.call(c[r].labels).sort().join("")]=r});var b={};n.prototype={toString:function(){return this.string()},toJSON:function(){return this[this.model]()},string:function(r){var e=this.model in h.to?this:this.rgb();e=e.round("number"==typeof r?r:1);var t=1===e.valpha?e.color:e.color.concat(this.valpha);return h.to[e.model](t)},percentString:function(r){var e=this.rgb().round("number"==typeof r?r:1),t=1===e.valpha?e.color:e.color.concat(this.valpha);return h.to.rgb.percent(t)},array:function(){return 1===this.valpha?this.color.slice():this.color.concat(this.valpha)},object:function(){for(var r={},e=c[this.model].channels,t=c[this.model].labels,n=0;n<e;n++)r[t[n]]=this.color[n];return 1!==this.valpha&&(r.alpha=this.valpha),r},unitArray:function(){var r=this.rgb().color;return r[0]/=255,r[1]/=255,r[2]/=255,1!==this.valpha&&r.push(this.valpha),r},unitObject:function(){var r=this.rgb().object();return r.r/=255,r.g/=255,r.b/=255,1!==this.valpha&&(r.alpha=this.valpha),r},round:function(r){return r=Math.max(r||0,0),new n(this.color.map(o(r)).concat(this.valpha),this.model)},alpha:function(r){return arguments.length?new n(this.color.concat(Math.max(0,Math.min(1,r))),this.model):this.valpha},red:i("rgb",0,l(255)),green:i("rgb",1,l(255)),blue:i("rgb",2,l(255)),hue:i(["hsl","hsv","hsl","hwb","hcg"],0,function(r){return(r%360+360)%360}),saturationl:i("hsl",1,l(100)),lightness:i("hsl",2,l(100)),saturationv:i("hsv",1,l(100)),value:i("hsv",2,l(100)),chroma:i("hcg",1,l(100)),gray:i("hcg",2,l(100)),white:i("hwb",1,l(100)),wblack:i("hwb",2,l(100)),cyan:i("cmyk",0,l(100)),magenta:i("cmyk",1,l(100)),yellow:i("cmyk",2,l(100)),black:i("cmyk",3,l(100)),x:i("xyz",0,l(100)),y:i("xyz",1,l(100)),z:i("xyz",2,l(100)),l:i("lab",0,l(100)),a:i("lab",1),b:i("lab",2),keyword:function(r){return arguments.length?new n(r):c[this.model].keyword(this.color)},hex:function(r){return arguments.length?new n(r):h.to.hex(this.rgb().round().color)},rgbNumber:function(){var r=this.rgb().color;return(255&r[0])<<16|(255&r[1])<<8|255&r[2]},luminosity:function(){for(var r=this.rgb().color,e=[],t=0;t<r.length;t++){var n=r[t]/255;e[t]=n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4)}return.2126*e[0]+.7152*e[1]+.0722*e[2]},contrast:function(r){var e=this.luminosity(),t=r.luminosity();return e>t?(e+.05)/(t+.05):(t+.05)/(e+.05)},level:function(r){var e=this.contrast(r);return e>=7.1?"AAA":e>=4.5?"AA":""},dark:function(){var r=this.rgb().color;return(299*r[0]+587*r[1]+114*r[2])/1e3<128},light:function(){return!this.dark()},negate:function(){for(var r=this.rgb(),e=0;e<3;e++)r.color[e]=255-r.color[e];return r},lighten:function(r){var e=this.hsl();return e.color[2]+=e.color[2]*r,e},darken:function(r){var e=this.hsl();return e.color[2]-=e.color[2]*r,e},saturate:function(r){var e=this.hsl();return e.color[1]+=e.color[1]*r,e},desaturate:function(r){var e=this.hsl();return e.color[1]-=e.color[1]*r,e},whiten:function(r){var e=this.hwb();return e.color[1]+=e.color[1]*r,e},blacken:function(r){var e=this.hwb();return e.color[2]+=e.color[2]*r,e},grayscale:function(){var r=this.rgb().color,e=.3*r[0]+.59*r[1]+.11*r[2];return n.rgb(e,e,e)},fade:function(r){return this.alpha(this.valpha-this.valpha*r)},opaquer:function(r){return this.alpha(this.valpha+this.valpha*r)},rotate:function(r){var e=this.hsl(),t=e.color[0];return t=(t+r)%360,t=t<0?360+t:t,e.color[0]=t,e},mix:function(r,e){var t=r.rgb(),a=this.rgb(),o=void 0===e?.5:e,i=2*o-1,l=t.alpha()-a.alpha(),s=((i*l==-1?i:(i+l)/(1+i*l))+1)/2,u=1-s;return n.rgb(s*t.red()+u*a.red(),s*t.green()+u*a.green(),s*t.blue()+u*a.blue(),t.alpha()*o+a.alpha()*(1-o))}},Object.keys(c).forEach(function(r){if(-1===p.indexOf(r)){var e=c[r].channels;n.prototype[r]=function(){if(this.model===r)return new n(this);if(arguments.length)return new n(arguments,r);var t="number"==typeof arguments[e]?e:this.valpha;return new n(s(c[this.model][r].raw(this.color)).concat(t),r)},n[r]=function(t){return"number"==typeof t&&(t=u(f.call(arguments),e)),new n(t,r)}}}),r.exports=n},function(r,e,t){function n(r,e,t){return Math.min(Math.max(e,r),t)}function a(r){var e=r.toString(16).toUpperCase();return e.length<2?"0"+e:e}var o=t(0),i=t(6),l={};for(var s in o)o.hasOwnProperty(s)&&(l[o[s]]=s);var u=r.exports={to:{}};u.get=function(r){var e,t,n=r.substring(0,3).toLowerCase();switch(n){case"hsl":e=u.get.hsl(r),t="hsl";break;case"hwb":e=u.get.hwb(r),t="hwb";break;default:e=u.get.rgb(r),t="rgb"}return e?{model:t,value:e}:null},u.get.rgb=function(r){if(!r)return null;var e,t,a,i=/^#([a-f0-9]{3,4})$/i,l=/^#([a-f0-9]{6})([a-f0-9]{2})?$/i,s=/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,u=/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,h=/(\D+)/,c=[0,0,0,1];if(e=r.match(l)){for(a=e[2],e=e[1],t=0;t<3;t++){var f=2*t;c[t]=parseInt(e.slice(f,f+2),16)}a&&(c[3]=Math.round(parseInt(a,16)/255*100)/100)}else if(e=r.match(i)){for(e=e[1],a=e[3],t=0;t<3;t++)c[t]=parseInt(e[t]+e[t],16);a&&(c[3]=Math.round(parseInt(a+a,16)/255*100)/100)}else if(e=r.match(s)){for(t=0;t<3;t++)c[t]=parseInt(e[t+1],0);e[4]&&(c[3]=parseFloat(e[4]))}else{if(!(e=r.match(u)))return(e=r.match(h))?"transparent"===e[1]?[0,0,0,0]:(c=o[e[1]])?(c[3]=1,c):null:null;for(t=0;t<3;t++)c[t]=Math.round(2.55*parseFloat(e[t+1]));e[4]&&(c[3]=parseFloat(e[4]))}for(t=0;t<3;t++)c[t]=n(c[t],0,255);return c[3]=n(c[3],0,1),c},u.get.hsl=function(r){if(!r)return null;var e=/^hsla?\(\s*([+-]?\d*[\.]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,t=r.match(e);if(t){var a=parseFloat(t[4]);return[(parseFloat(t[1])%360+360)%360,n(parseFloat(t[2]),0,100),n(parseFloat(t[3]),0,100),n(isNaN(a)?1:a,0,1)]}return null},u.get.hwb=function(r){if(!r)return null;var e=/^hwb\(\s*([+-]?\d*[\.]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,t=r.match(e);if(t){var a=parseFloat(t[4]);return[(parseFloat(t[1])%360+360)%360,n(parseFloat(t[2]),0,100),n(parseFloat(t[3]),0,100),n(isNaN(a)?1:a,0,1)]}return null},u.to.hex=function(){var r=i(arguments);return"#"+a(r[0])+a(r[1])+a(r[2])+(r[3]<1?a(Math.round(255*r[3])):"")},u.to.rgb=function(){var r=i(arguments);return r.length<4||1===r[3]?"rgb("+Math.round(r[0])+", "+Math.round(r[1])+", "+Math.round(r[2])+")":"rgba("+Math.round(r[0])+", "+Math.round(r[1])+", "+Math.round(r[2])+", "+r[3]+")"},u.to.rgb.percent=function(){var r=i(arguments),e=Math.round(r[0]/255*100),t=Math.round(r[1]/255*100),n=Math.round(r[2]/255*100);return r.length<4||1===r[3]?"rgb("+e+"%, "+t+"%, "+n+"%)":"rgba("+e+"%, "+t+"%, "+n+"%, "+r[3]+")"},u.to.hsl=function(){var r=i(arguments);return r.length<4||1===r[3]?"hsl("+r[0]+", "+r[1]+"%, "+r[2]+"%)":"hsla("+r[0]+", "+r[1]+"%, "+r[2]+"%, "+r[3]+")"},u.to.hwb=function(){var r=i(arguments),e="";return r.length>=4&&1!==r[3]&&(e=", "+r[3]),"hwb("+r[0]+", "+r[1]+"%, "+r[2]+"%"+e+")"},u.to.keyword=function(r){return l[r.slice(0,3)]}},function(r,e,t){"use strict";var n=t(7),a=Array.prototype.concat,o=Array.prototype.slice,i=r.exports=function(r){for(var e=[],t=0,i=r.length;t<i;t++){var l=r[t];n(l)?e=a.call(e,o.call(l)):e.push(l)}return e};i.wrap=function(r){return function(){return r(i(arguments))}}},function(r,e,t){"use strict";r.exports=function(r){return!(!r||"string"==typeof r)&&(r instanceof Array||Array.isArray(r)||r.length>=0&&(r.splice instanceof Function||Object.getOwnPropertyDescriptor(r,r.length-1)&&"String"!==r.constructor.name))}},function(r,e,t){function n(r){var e=function(e){return void 0===e||null===e?e:(arguments.length>1&&(e=Array.prototype.slice.call(arguments)),r(e))};return"conversion"in r&&(e.conversion=r.conversion),e}function a(r){var e=function(e){if(void 0===e||null===e)return e;arguments.length>1&&(e=Array.prototype.slice.call(arguments));var t=r(e);if("object"==typeof t)for(var n=t.length,a=0;a<n;a++)t[a]=Math.round(t[a]);return t};return"conversion"in r&&(e.conversion=r.conversion),e}var o=t(1),i=t(9),l={};Object.keys(o).forEach(function(r){l[r]={},Object.defineProperty(l[r],"channels",{value:o[r].channels}),Object.defineProperty(l[r],"labels",{value:o[r].labels});var e=i(r);Object.keys(e).forEach(function(t){var o=e[t];l[r][t]=a(o),l[r][t].raw=n(o)})}),r.exports=l},function(r,e,t){function n(){for(var r={},e=Object.keys(l),t=e.length,n=0;n<t;n++)r[e[n]]={distance:-1,parent:null};return r}function a(r){var e=n(),t=[r];for(e[r].distance=0;t.length;)for(var a=t.pop(),o=Object.keys(l[a]),i=o.length,s=0;s<i;s++){var u=o[s],h=e[u];-1===h.distance&&(h.distance=e[a].distance+1,h.parent=a,t.unshift(u))}return e}function o(r,e){return function(t){return e(r(t))}}function i(r,e){for(var t=[e[r].parent,r],n=l[e[r].parent][r],a=e[r].parent;e[a].parent;)t.unshift(e[a].parent),n=o(l[e[a].parent][a],n),a=e[a].parent;return n.conversion=t,n}var l=t(1);r.exports=function(r){for(var e=a(r),t={},n=Object.keys(e),o=n.length,l=0;l<o;l++){var s=n[l];null!==e[s].parent&&(t[s]=i(s,e))}return t}}]);
