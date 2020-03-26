!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.FingerPose=e():t.FingerPose=e()}("undefined"!=typeof self?self:this,(function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}n.r(e);var o={Thumb:0,Index:1,Middle:2,Ring:3,Pinky:4,all:[0,1,2,3,4],nameMapping:{0:"Thumb",1:"Index",2:"Middle",3:"Ring",4:"Pinky"},pointsMapping:{0:[[0,1],[1,2],[2,3],[3,4]],1:[[0,5],[5,6],[6,7],[7,8]],2:[[0,9],[9,10],[10,11],[11,12]],3:[[0,13],[13,14],[14,15],[15,16]],4:[[0,17],[17,18],[18,19],[19,20]]},getName:function(t){return void 0!==r(this.nameMapping[t])&&this.nameMapping[t]},getPoints:function(t){return void 0!==r(this.pointsMapping[t])&&this.pointsMapping[t]}},i=0,a=1,u=2,l=0,c=1,s=2,f=3,p=4,y=5,h=6,b=7;function v(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=function(t,e){if(!t)return;if("string"==typeof t)return m(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return m(t,e)}(t))){var e=0,n=function(){};return{s:n,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,o,i=!0,a=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return i=t.done,t},e:function(t){a=!0,o=t},f:function(){try{i||null==r.return||r.return()}finally{if(a)throw o}}}}function m(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function d(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function g(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function O(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var M=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.options=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?d(Object(n),!0).forEach((function(e){g(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},{HALF_CURL_START_LIMIT:60,NO_CURL_START_LIMIT:130,DISTANCE_VOTE_POWER:1.1,SINGLE_ANGLE_VOTE_POWER:.9,TOTAL_ANGLE_VOTE_POWER:1.6},{},e)}var e,n,r;return e=t,(n=[{key:"estimate",value:function(t){var e,n=[],r=[],i=v(o.all);try{for(i.s();!(e=i.n()).done;){var a,u=e.value,l=o.getPoints(u),c=[],s=[],f=v(l);try{for(f.s();!(a=f.n()).done;){var p=a.value,y=t[p[0]],h=t[p[1]],b=this.getSlopes(y,h),m=b[0],d=b[1];c.push(m),s.push(d)}}catch(t){f.e(t)}finally{f.f()}n.push(c),r.push(s)}}catch(t){i.e(t)}finally{i.f()}var g,O=[],M=[],S=v(o.all);try{for(S.s();!(g=S.n()).done;){var _=g.value,T=_==o.Thumb?1:0,A=o.getPoints(_),E=t[A[T][0]],P=t[A[T+1][1]],j=t[A[3][1]],w=this.estimateFingerCurl(E,P,j),I=this.calculateFingerDirection(E,P,j,n[_].slice(T));O[_]=w,M[_]=I}}catch(t){S.e(t)}finally{S.f()}return{curls:O,directions:M}}},{key:"getSlopes",value:function(t,e){var n=this.calculateSlope(t[0],t[1],e[0],e[1]);return 2==t.length?n:[n,this.calculateSlope(t[1],t[2],e[1],e[2])]}},{key:"angleOrientationAt",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=0,r=0,o=0;return t>=75&&t<=105?n=1*e:t>=25&&t<=155?r=1*e:o=1*e,[n,r,o]}},{key:"estimateFingerCurl",value:function(t,e,n){var r=t[0]-e[0],o=t[0]-n[0],l=e[0]-n[0],c=t[1]-e[1],s=t[1]-n[1],f=e[1]-n[1],p=t[2]-e[2],y=t[2]-n[2],h=e[2]-n[2],b=Math.sqrt(r*r+c*c+p*p),v=Math.sqrt(o*o+s*s+y*y),m=Math.sqrt(l*l+f*f+h*h),d=(m*m+b*b-v*v)/(2*m*b);d>1?d=1:d<-1&&(d=-1);var g=Math.acos(d);return(g=57.2958*g%180)>this.options.NO_CURL_START_LIMIT?i:g>this.options.HALF_CURL_START_LIMIT?a:u}},{key:"estimateHorizontalDirection",value:function(t,e,n,r){return r==Math.abs(t)?t>0?s:f:r==Math.abs(e)?e>0?s:f:n>0?s:f}},{key:"estimateVerticalDirection",value:function(t,e,n,r){return r==Math.abs(t)?t<0?c:l:r==Math.abs(e)?e<0?c:l:n<0?c:l}},{key:"estimateDiagonalDirection",value:function(t,e,n,r,o,i,a,u){var c=this.estimateVerticalDirection(t,e,n,r),f=this.estimateHorizontalDirection(o,i,a,u);return c==l?f==s?y:p:f==s?b:h}},{key:"calculateFingerDirection",value:function(t,e,n,r){var o=t[0]-e[0],i=t[0]-n[0],a=e[0]-n[0],u=t[1]-e[1],l=t[1]-n[1],c=e[1]-n[1],s=Math.max(Math.abs(o),Math.abs(i),Math.abs(a)),f=Math.max(Math.abs(u),Math.abs(l),Math.abs(c)),p=0,y=0,h=0,b=f/(s+1e-5);b>1.5?p+=this.options.DISTANCE_VOTE_POWER:b>.66?y+=this.options.DISTANCE_VOTE_POWER:h+=this.options.DISTANCE_VOTE_POWER;var m=Math.sqrt(o*o+u*u),d=Math.sqrt(i*i+l*l),g=Math.sqrt(a*a+c*c),O=Math.max(m,d,g),M=t[0],S=t[1],_=n[0],T=n[1];O==m?(_=n[0],T=n[1]):O==g&&(M=e[0],S=e[1]);var A=[M,S],E=[_,T],P=this.getSlopes(A,E),j=this.angleOrientationAt(P,this.options.TOTAL_ANGLE_VOTE_POWER);p+=j[0],y+=j[1],h+=j[2];var w,I=v(r);try{for(I.s();!(w=I.n()).done;){var D=w.value,x=this.angleOrientationAt(D,this.options.SINGLE_ANGLE_VOTE_POWER);p+=x[0],y+=x[1],h+=x[2]}}catch(t){I.e(t)}finally{I.f()}return p==Math.max(p,y,h)?this.estimateVerticalDirection(l,u,c,f):h==Math.max(y,h)?this.estimateHorizontalDirection(i,o,a,s):this.estimateDiagonalDirection(l,u,c,f,i,o,a,s)}},{key:"calculateSlope",value:function(t,e,n,r){var o=(e-r)/(t-n),i=180*Math.atan(o)/Math.PI;return i<=0?i=-i:i>0&&(i=180-i),i}}])&&O(e.prototype,n),r&&O(e,r),t}();function S(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=function(t,e){if(!t)return;if("string"==typeof t)return _(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _(t,e)}(t))){var e=0,n=function(){};return{s:n,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,o,i=!0,a=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return i=t.done,t},e:function(t){a=!0,o=t},f:function(){try{i||null==r.return||r.return()}finally{if(a)throw o}}}}function _(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function T(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function A(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var E=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};T(this,t),this.estimator=new M(n),this.gestures=e}var e,n,r;return e=t,(n=[{key:"estimate",value:function(t,e){var n,r=[],o=this.estimator.estimate(t),i=S(this.gestures);try{for(i.s();!(n=i.n()).done;){var a=n.value,u=a.matchAgainst(o.curls,o.directions);u>=e&&r.push({name:a.name,confidence:u})}}catch(t){i.e(t)}finally{i.f()}return r}}])&&A(e.prototype,n),r&&A(e,r),t}();e.default=E}]).default}));