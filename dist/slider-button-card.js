/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function t(t,e,i,s){var r,n=arguments.length,a=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,s);else for(var o=t.length-1;o>=0;o--)(r=t[o])&&(a=(n<3?r(a):n>3?r(e,i,a):r(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a}var e=/d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|Z|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,i="[^\\s]+",s=/\[([^]*?)\]/gm;function r(t,e){for(var i=[],s=0,r=t.length;s<r;s++)i.push(t[s].substr(0,e));return i}var n=function(t){return function(e,i){var s=i[t].map((function(t){return t.toLowerCase()})).indexOf(e.toLowerCase());return s>-1?s:null}};function a(t){for(var e=[],i=1;i<arguments.length;i++)e[i-1]=arguments[i];for(var s=0,r=e;s<r.length;s++){var n=r[s];for(var a in n)t[a]=n[a]}return t}var o=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],l=["January","February","March","April","May","June","July","August","September","October","November","December"],c=r(l,3),h={dayNamesShort:r(o,3),dayNames:o,monthNamesShort:c,monthNames:l,amPm:["am","pm"],DoFn:function(t){return t+["th","st","nd","rd"][t%10>3?0:(t-t%10!=10?1:0)*t%10]}},d=a({},h),u=function(t,e){for(void 0===e&&(e=2),t=String(t);t.length<e;)t="0"+t;return t},p={D:function(t){return String(t.getDate())},DD:function(t){return u(t.getDate())},Do:function(t,e){return e.DoFn(t.getDate())},d:function(t){return String(t.getDay())},dd:function(t){return u(t.getDay())},ddd:function(t,e){return e.dayNamesShort[t.getDay()]},dddd:function(t,e){return e.dayNames[t.getDay()]},M:function(t){return String(t.getMonth()+1)},MM:function(t){return u(t.getMonth()+1)},MMM:function(t,e){return e.monthNamesShort[t.getMonth()]},MMMM:function(t,e){return e.monthNames[t.getMonth()]},YY:function(t){return u(String(t.getFullYear()),4).substr(2)},YYYY:function(t){return u(t.getFullYear(),4)},h:function(t){return String(t.getHours()%12||12)},hh:function(t){return u(t.getHours()%12||12)},H:function(t){return String(t.getHours())},HH:function(t){return u(t.getHours())},m:function(t){return String(t.getMinutes())},mm:function(t){return u(t.getMinutes())},s:function(t){return String(t.getSeconds())},ss:function(t){return u(t.getSeconds())},S:function(t){return String(Math.round(t.getMilliseconds()/100))},SS:function(t){return u(Math.round(t.getMilliseconds()/10),2)},SSS:function(t){return u(t.getMilliseconds(),3)},a:function(t,e){return t.getHours()<12?e.amPm[0]:e.amPm[1]},A:function(t,e){return t.getHours()<12?e.amPm[0].toUpperCase():e.amPm[1].toUpperCase()},ZZ:function(t){var e=t.getTimezoneOffset();return(e>0?"-":"+")+u(100*Math.floor(Math.abs(e)/60)+Math.abs(e)%60,4)},Z:function(t){var e=t.getTimezoneOffset();return(e>0?"-":"+")+u(Math.floor(Math.abs(e)/60),2)+":"+u(Math.abs(e)%60,2)}},g=function(t){return+t-1},f=[null,"[1-9]\\d?"],b=[null,i],m=["isPm",i,function(t,e){var i=t.toLowerCase();return i===e.amPm[0]?0:i===e.amPm[1]?1:null}],v=["timezoneOffset","[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z?",function(t){var e=(t+"").match(/([+-]|\d\d)/gi);if(e){var i=60*+e[1]+parseInt(e[2],10);return"+"===e[0]?i:-i}return 0}],_=(n("monthNamesShort"),n("monthNames"),{default:"ddd MMM DD YYYY HH:mm:ss",shortDate:"M/D/YY",mediumDate:"MMM D, YYYY",longDate:"MMMM D, YYYY",fullDate:"dddd, MMMM D, YYYY",isoDate:"YYYY-MM-DD",isoDateTime:"YYYY-MM-DDTHH:mm:ssZ",shortTime:"HH:mm",mediumTime:"HH:mm:ss",longTime:"HH:mm:ss.SSS"});var y=function(t,i,r){if(void 0===i&&(i=_.default),void 0===r&&(r={}),"number"==typeof t&&(t=new Date(t)),"[object Date]"!==Object.prototype.toString.call(t)||isNaN(t.getTime()))throw new Error("Invalid Date pass to format");var n=[];i=(i=_[i]||i).replace(s,(function(t,e){return n.push(e),"@@@"}));var o=a(a({},d),r);return(i=i.replace(e,(function(e){return p[e](t,o)}))).replace(/@@@/g,(function(){return n.shift()}))};(function(){try{(new Date).toLocaleDateString("i")}catch(t){return"RangeError"===t.name}})(),function(){try{(new Date).toLocaleString("i")}catch(t){return"RangeError"===t.name}}(),function(){try{(new Date).toLocaleTimeString("i")}catch(t){return"RangeError"===t.name}}();function w(t){return t.substr(0,t.indexOf("."))}function S(t){return w(t.entity_id)}var x="hass:bookmark",k=["closed","locked","off"],O=function(t,e,i,s){s=s||{},i=null==i?{}:i;var r=new Event(e,{bubbles:void 0===s.bubbles||s.bubbles,cancelable:Boolean(s.cancelable),composed:void 0===s.composed||s.composed});return r.detail=i,t.dispatchEvent(r),r},T={alert:"hass:alert",automation:"hass:playlist-play",calendar:"hass:calendar",camera:"hass:video",climate:"hass:thermostat",configurator:"hass:settings",conversation:"hass:text-to-speech",device_tracker:"hass:account",fan:"hass:fan",group:"hass:google-circles-communities",history_graph:"hass:chart-line",homeassistant:"hass:home-assistant",homekit:"hass:home-automation",image_processing:"hass:image-filter-frames",input_boolean:"hass:drawing",input_datetime:"hass:calendar-clock",input_number:"hass:ray-vertex",input_select:"hass:format-list-bulleted",input_text:"hass:textbox",light:"hass:lightbulb",mailbox:"hass:mailbox",notify:"hass:comment-alert",person:"hass:account",plant:"hass:flower",proximity:"hass:apple-safari",remote:"hass:remote",scene:"hass:google-pages",script:"hass:file-document",sensor:"hass:eye",simple_alarm:"hass:bell",sun:"hass:white-balance-sunny",switch:"hass:flash",timer:"hass:timer",updater:"hass:cloud-upload",vacuum:"hass:robot-vacuum",water_heater:"hass:thermometer",weblink:"hass:open-in-new"};function M(t,e){if(t in T)return T[t];switch(t){case"alarm_control_panel":switch(e){case"armed_home":return"hass:bell-plus";case"armed_night":return"hass:bell-sleep";case"disarmed":return"hass:bell-outline";case"triggered":return"hass:bell-ring";default:return"hass:bell"}case"binary_sensor":return e&&"off"===e?"hass:radiobox-blank":"hass:checkbox-marked-circle";case"cover":return"closed"===e?"hass:window-closed":"hass:window-open";case"lock":return e&&"unlocked"===e?"hass:lock-open":"hass:lock";case"media_player":return e&&"off"!==e&&"idle"!==e?"hass:cast-connected":"hass:cast";case"zwave":switch(e){case"dead":return"hass:emoticon-dead";case"sleeping":return"hass:sleep";case"initializing":return"hass:timer-sand";default:return"hass:z-wave"}default:return console.warn("Unable to find icon for domain "+t+" ("+e+")"),x}}var C=function(t){O(window,"haptic",t)},$=function(t,e){return function(t,e,i){void 0===i&&(i=!0);var s,r=w(e),n="group"===r?"homeassistant":r;switch(r){case"lock":s=i?"unlock":"lock";break;case"cover":s=i?"open_cover":"close_cover";break;default:s=i?"turn_on":"turn_off"}return t.callService(n,s,{entity_id:e})}(t,e,k.includes(t.states[e].state))},A=function(t,e,i,s){if(s||(s={action:"more-info"}),!s.confirmation||s.confirmation.exemptions&&s.confirmation.exemptions.some((function(t){return t.user===e.user.id}))||(C("warning"),confirm(s.confirmation.text||"Are you sure you want to "+s.action+"?")))switch(s.action){case"more-info":(i.entity||i.camera_image)&&O(t,"hass-more-info",{entityId:i.entity?i.entity:i.camera_image});break;case"navigate":s.navigation_path&&function(t,e,i){void 0===i&&(i=!1),i?history.replaceState(null,"",e):history.pushState(null,"",e),O(window,"location-changed",{replace:i})}(0,s.navigation_path);break;case"url":s.url_path&&window.open(s.url_path);break;case"toggle":i.entity&&($(e,i.entity),C("success"));break;case"call-service":if(!s.service)return void C("failure");var r=s.service.split(".",2);e.callService(r[0],r[1],s.service_data),C("success");break;case"fire-dom-event":O(t,"ll-custom",s)}},P=function(t,e,i,s){var r;"double_tap"===s&&i.double_tap_action?r=i.double_tap_action:"hold"===s&&i.hold_action?r=i.hold_action:"tap"===s&&i.tap_action&&(r=i.tap_action),A(t,e,i,r)};var E={humidity:"hass:water-percent",illuminance:"hass:brightness-5",temperature:"hass:thermometer",pressure:"hass:gauge",power:"hass:flash",signal_strength:"hass:wifi"},j={binary_sensor:function(t){var e=t.state&&"off"===t.state;switch(t.attributes.device_class){case"battery":return e?"hass:battery":"hass:battery-outline";case"cold":return e?"hass:thermometer":"hass:snowflake";case"connectivity":return e?"hass:server-network-off":"hass:server-network";case"door":return e?"hass:door-closed":"hass:door-open";case"garage_door":return e?"hass:garage":"hass:garage-open";case"gas":case"power":case"problem":case"safety":case"smoke":return e?"hass:shield-check":"hass:alert";case"heat":return e?"hass:thermometer":"hass:fire";case"light":return e?"hass:brightness-5":"hass:brightness-7";case"lock":return e?"hass:lock":"hass:lock-open";case"moisture":return e?"hass:water-off":"hass:water";case"motion":return e?"hass:walk":"hass:run";case"occupancy":return e?"hass:home-outline":"hass:home";case"opening":return e?"hass:square":"hass:square-outline";case"plug":return e?"hass:power-plug-off":"hass:power-plug";case"presence":return e?"hass:home-outline":"hass:home";case"sound":return e?"hass:music-note-off":"hass:music-note";case"vibration":return e?"hass:crop-portrait":"hass:vibrate";case"window":return e?"hass:window-closed":"hass:window-open";default:return e?"hass:radiobox-blank":"hass:checkbox-marked-circle"}},cover:function(t){var e="closed"!==t.state;switch(t.attributes.device_class){case"garage":return e?"hass:garage-open":"hass:garage";case"door":return e?"hass:door-open":"hass:door-closed";case"shutter":return e?"hass:window-shutter-open":"hass:window-shutter";case"blind":return e?"hass:blinds-open":"hass:blinds";case"window":return e?"hass:window-open":"hass:window-closed";default:return M("cover",t.state)}},sensor:function(t){var e=t.attributes.device_class;if(e&&e in E)return E[e];if("battery"===e){var i=Number(t.state);if(isNaN(i))return"hass:battery-unknown";var s=10*Math.round(i/10);return s>=100?"hass:battery":s<=0?"hass:battery-alert":"hass:battery-"+s}var r=t.attributes.unit_of_measurement;return"°C"===r||"°F"===r?"hass:thermometer":M("sensor")},input_datetime:function(t){return t.attributes.has_date?t.attributes.has_time?M("input_datetime"):"hass:calendar":"hass:clock"}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const V="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,N=(t,e,i=null)=>{for(;e!==i;){const i=e.nextSibling;t.removeChild(e),e=i}},R=`{{lit-${String(Math.random()).slice(2)}}}`,H=`\x3c!--${R}--\x3e`,D=new RegExp(`${R}|${H}`);class U{constructor(t,e){this.parts=[],this.element=e;const i=[],s=[],r=document.createTreeWalker(e.content,133,null,!1);let n=0,a=-1,o=0;const{strings:l,values:{length:c}}=t;for(;o<c;){const t=r.nextNode();if(null!==t){if(a++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:i}=e;let s=0;for(let t=0;t<i;t++)I(e[t].name,"$lit$")&&s++;for(;s-- >0;){const e=l[o],i=F.exec(e)[2],s=i.toLowerCase()+"$lit$",r=t.getAttribute(s);t.removeAttribute(s);const n=r.split(D);this.parts.push({type:"attribute",index:a,name:i,strings:n}),o+=n.length-1}}"TEMPLATE"===t.tagName&&(s.push(t),r.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(R)>=0){const s=t.parentNode,r=e.split(D),n=r.length-1;for(let e=0;e<n;e++){let i,n=r[e];if(""===n)i=L();else{const t=F.exec(n);null!==t&&I(t[2],"$lit$")&&(n=n.slice(0,t.index)+t[1]+t[2].slice(0,-"$lit$".length)+t[3]),i=document.createTextNode(n)}s.insertBefore(i,t),this.parts.push({type:"node",index:++a})}""===r[n]?(s.insertBefore(L(),t),i.push(t)):t.data=r[n],o+=n}}else if(8===t.nodeType)if(t.data===R){const e=t.parentNode;null!==t.previousSibling&&a!==n||(a++,e.insertBefore(L(),t)),n=a,this.parts.push({type:"node",index:a}),null===t.nextSibling?t.data="":(i.push(t),a--),o++}else{let e=-1;for(;-1!==(e=t.data.indexOf(R,e+1));)this.parts.push({type:"node",index:-1}),o++}}else r.currentNode=s.pop()}for(const t of i)t.parentNode.removeChild(t)}}const I=(t,e)=>{const i=t.length-e.length;return i>=0&&t.slice(i)===e},z=t=>-1!==t.index,L=()=>document.createComment(""),F=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function q(t,e){const{element:{content:i},parts:s}=t,r=document.createTreeWalker(i,133,null,!1);let n=B(s),a=s[n],o=-1,l=0;const c=[];let h=null;for(;r.nextNode();){o++;const t=r.currentNode;for(t.previousSibling===h&&(h=null),e.has(t)&&(c.push(t),null===h&&(h=t)),null!==h&&l++;void 0!==a&&a.index===o;)a.index=null!==h?-1:a.index-l,n=B(s,n),a=s[n]}c.forEach(t=>t.parentNode.removeChild(t))}const Y=t=>{let e=11===t.nodeType?0:1;const i=document.createTreeWalker(t,133,null,!1);for(;i.nextNode();)e++;return e},B=(t,e=-1)=>{for(let i=e+1;i<t.length;i++){const e=t[i];if(z(e))return i}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const W=new WeakMap,G=t=>(...e)=>{const i=t(...e);return W.set(i,!0),i},J=t=>"function"==typeof t&&W.has(t),Z={},X={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class K{constructor(t,e,i){this.__parts=[],this.template=t,this.processor=e,this.options=i}update(t){let e=0;for(const i of this.__parts)void 0!==i&&i.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=V?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],i=this.template.parts,s=document.createTreeWalker(t,133,null,!1);let r,n=0,a=0,o=s.nextNode();for(;n<i.length;)if(r=i[n],z(r)){for(;a<r.index;)a++,"TEMPLATE"===o.nodeName&&(e.push(o),s.currentNode=o.content),null===(o=s.nextNode())&&(s.currentNode=e.pop(),o=s.nextNode());if("node"===r.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(o.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(o,r.name,r.strings,this.options));n++}else this.__parts.push(void 0),n++;return V&&(document.adoptNode(t),customElements.upgrade(t)),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const Q=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:t=>t}),tt=` ${R} `;class et{constructor(t,e,i,s){this.strings=t,this.values=e,this.type=i,this.processor=s}getHTML(){const t=this.strings.length-1;let e="",i=!1;for(let s=0;s<t;s++){const t=this.strings[s],r=t.lastIndexOf("\x3c!--");i=(r>-1||i)&&-1===t.indexOf("--\x3e",r+1);const n=F.exec(t);e+=null===n?t+(i?tt:H):t.substr(0,n.index)+n[1]+n[2]+"$lit$"+n[3]+R}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");let e=this.getHTML();return void 0!==Q&&(e=Q.createHTML(e)),t.innerHTML=e,t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const it=t=>null===t||!("object"==typeof t||"function"==typeof t),st=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class rt{constructor(t,e,i){this.dirty=!0,this.element=t,this.name=e,this.strings=i,this.parts=[];for(let t=0;t<i.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new nt(this)}_getValue(){const t=this.strings,e=t.length-1,i=this.parts;if(1===e&&""===t[0]&&""===t[1]){const t=i[0].value;if("symbol"==typeof t)return String(t);if("string"==typeof t||!st(t))return t}let s="";for(let r=0;r<e;r++){s+=t[r];const e=i[r];if(void 0!==e){const t=e.value;if(it(t)||!st(t))s+="string"==typeof t?t:String(t);else for(const e of t)s+="string"==typeof e?e:String(e)}}return s+=t[e],s}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class nt{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===Z||it(t)&&t===this.value||(this.value=t,J(t)||(this.committer.dirty=!0))}commit(){for(;J(this.value);){const t=this.value;this.value=Z,t(this)}this.value!==Z&&this.committer.commit()}}class at{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(L()),this.endNode=t.appendChild(L())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=L()),t.__insert(this.endNode=L())}insertAfterPart(t){t.__insert(this.startNode=L()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){if(null===this.startNode.parentNode)return;for(;J(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=Z,t(this)}const t=this.__pendingValue;t!==Z&&(it(t)?t!==this.value&&this.__commitText(t):t instanceof et?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):st(t)?this.__commitIterable(t):t===X?(this.value=X,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,i="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=i:this.__commitNode(document.createTextNode(i)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof K&&this.value.template===e)this.value.update(t.values);else{const i=new K(e,t.processor,this.options),s=i._clone();i.update(t.values),this.__commitNode(s),this.value=i}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let i,s=0;for(const r of t)i=e[s],void 0===i&&(i=new at(this.options),e.push(i),0===s?i.appendIntoPart(this):i.insertAfterPart(e[s-1])),i.setValue(r),i.commit(),s++;s<e.length&&(e.length=s,this.clear(i&&i.endNode))}clear(t=this.startNode){N(this.startNode.parentNode,t.nextSibling,this.endNode)}}class ot{constructor(t,e,i){if(this.value=void 0,this.__pendingValue=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=i}setValue(t){this.__pendingValue=t}commit(){for(;J(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=Z,t(this)}if(this.__pendingValue===Z)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=Z}}class lt extends rt{constructor(t,e,i){super(t,e,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new ct(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class ct extends nt{}let ht=!1;(()=>{try{const t={get capture(){return ht=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class dt{constructor(t,e,i){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=i,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;J(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=Z,t(this)}if(this.__pendingValue===Z)return;const t=this.__pendingValue,e=this.value,i=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),s=null!=t&&(null==e||i);i&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),s&&(this.__options=ut(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=Z}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const ut=t=>t&&(ht?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;function pt(t){let e=gt.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},gt.set(t.type,e));let i=e.stringsArray.get(t.strings);if(void 0!==i)return i;const s=t.strings.join(R);return i=e.keyString.get(s),void 0===i&&(i=new U(t,t.getTemplateElement()),e.keyString.set(s,i)),e.stringsArray.set(t.strings,i),i}const gt=new Map,ft=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const bt=new
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class{handleAttributeExpressions(t,e,i,s){const r=e[0];if("."===r){return new lt(t,e.slice(1),i).parts}if("@"===r)return[new dt(t,e.slice(1),s.eventContext)];if("?"===r)return[new ot(t,e.slice(1),i)];return new rt(t,e,i).parts}handleTextExpression(t){return new at(t)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.4.1");const mt=(t,...e)=>new et(t,e,"html",bt)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */,vt=(t,e)=>`${t}--${e}`;let _t=!0;void 0===window.ShadyCSS?_t=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),_t=!1);const yt=t=>e=>{const i=vt(e.type,t);let s=gt.get(i);void 0===s&&(s={stringsArray:new WeakMap,keyString:new Map},gt.set(i,s));let r=s.stringsArray.get(e.strings);if(void 0!==r)return r;const n=e.strings.join(R);if(r=s.keyString.get(n),void 0===r){const i=e.getTemplateElement();_t&&window.ShadyCSS.prepareTemplateDom(i,t),r=new U(e,i),s.keyString.set(n,r)}return s.stringsArray.set(e.strings,r),r},wt=["html","svg"],St=new Set,xt=(t,e,i)=>{St.add(t);const s=i?i.element:document.createElement("template"),r=e.querySelectorAll("style"),{length:n}=r;if(0===n)return void window.ShadyCSS.prepareTemplateStyles(s,t);const a=document.createElement("style");for(let t=0;t<n;t++){const e=r[t];e.parentNode.removeChild(e),a.textContent+=e.textContent}(t=>{wt.forEach(e=>{const i=gt.get(vt(e,t));void 0!==i&&i.keyString.forEach(t=>{const{element:{content:e}}=t,i=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{i.add(t)}),q(t,i)})})})(t);const o=s.content;i?function(t,e,i=null){const{element:{content:s},parts:r}=t;if(null==i)return void s.appendChild(e);const n=document.createTreeWalker(s,133,null,!1);let a=B(r),o=0,l=-1;for(;n.nextNode();){l++;for(n.currentNode===i&&(o=Y(e),i.parentNode.insertBefore(e,i));-1!==a&&r[a].index===l;){if(o>0){for(;-1!==a;)r[a].index+=o,a=B(r,a);return}a=B(r,a)}}}(i,a,o.firstChild):o.insertBefore(a,o.firstChild),window.ShadyCSS.prepareTemplateStyles(s,t);const l=o.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)e.insertBefore(l.cloneNode(!0),e.firstChild);else if(i){o.insertBefore(a,o.firstChild);const t=new Set;t.add(a),q(i,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const kt={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},Ot=(t,e)=>e!==t&&(e==e||t==t),Tt={attribute:!0,type:String,converter:kt,reflect:!1,hasChanged:Ot};class Mt extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,i)=>{const s=this._attributeNameForProperty(i,e);void 0!==s&&(this._attributeToPropertyMap.set(s,i),t.push(s))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=Tt){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const r=this[t];this[e]=s,this.requestUpdateInternal(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||Tt}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const i of e)this.createProperty(i,t[i])}}static _attributeNameForProperty(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,i=Ot){return i(t,e)}static _propertyValueFromAttribute(t,e){const i=e.type,s=e.converter||kt,r="function"==typeof s?s:s.fromAttribute;return r?r(t,i):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const i=e.type,s=e.converter;return(s&&s.toAttribute||kt.toAttribute)(t,i)}initialize(){this._updateState=0,this._updatePromise=new Promise(t=>this._enableUpdatingResolver=t),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,i){e!==i&&this._attributeToProperty(t,i)}_propertyToAttribute(t,e,i=Tt){const s=this.constructor,r=s._attributeNameForProperty(t,i);if(void 0!==r){const t=s._propertyValueToAttribute(e,i);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(r):this.setAttribute(r,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const i=this.constructor,s=i._attributeToPropertyMap.get(t);if(void 0!==s){const t=i.getPropertyOptions(s);this._updateState=16|this._updateState,this[s]=i._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}requestUpdateInternal(t,e,i){let s=!0;if(void 0!==t){const r=this.constructor;i=i||r.getPropertyOptions(t),r._valueHasChanged(this[t],e,i.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==i.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,i))):s=!1}!this._hasRequestedUpdate&&s&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,e){return this.requestUpdateInternal(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(t){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated()}catch(e){throw t=!1,this._markUpdated(),e}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}Mt.finalized=!0;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const Ct=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:s}=e;return{kind:i,elements:s,finisher(e){window.customElements.define(t,e)}}})(t,e),$t=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?Object.assign(Object.assign({},e),{finisher(i){i.createProperty(e.key,t)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function At(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):$t(t,e)}function Pt(t){return At({attribute:!1,hasChanged:null==t?void 0:t.hasChanged})}function Et(t,e){return(i,s)=>{const r={get(){return this.renderRoot.querySelector(t)},enumerable:!0,configurable:!0};if(e){const e=void 0!==s?s:i.key,n="symbol"==typeof e?Symbol():"__"+e;r.get=function(){return void 0===this[n]&&(this[n]=this.renderRoot.querySelector(t)),this[n]}}return void 0!==s?jt(r,i,s):Vt(r,i)}}const jt=(t,e,i)=>{Object.defineProperty(e,i,t)},Vt=(t,e)=>({kind:"method",placement:"prototype",key:e.key,descriptor:t})
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/,Nt=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Rt=Symbol();class Ht{constructor(t,e){if(e!==Rt)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(Nt?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const Dt=(t,...e)=>{const i=e.reduce((e,i,s)=>e+(t=>{if(t instanceof Ht)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+t[s+1],t[0]);return new Ht(i,Rt)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.5.1");const Ut={};class It extends Mt{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(Array.isArray(t)){const e=(t,i)=>t.reduceRight((t,i)=>Array.isArray(i)?e(i,t):(t.add(i),t),i),i=e(t,new Set),s=[];i.forEach(t=>s.unshift(t)),this._styles=s}else this._styles=void 0===t?[]:[t];this._styles=this._styles.map(t=>{if(t instanceof CSSStyleSheet&&!Nt){const e=Array.prototype.slice.call(t.cssRules).reduce((t,e)=>t+e.cssText,"");return new Ht(String(e),Rt)}return t})}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow(this.constructor.shadowRootOptions)}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?Nt?this.renderRoot.adoptedStyleSheets=t.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const e=this.render();super.update(t),e!==Ut&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){return Ut}}It.finalized=!0,It.render=(t,e,i)=>{if(!i||"object"!=typeof i||!i.scopeName)throw new Error("The `scopeName` option is required.");const s=i.scopeName,r=ft.has(e),n=_t&&11===e.nodeType&&!!e.host,a=n&&!St.has(s),o=a?document.createDocumentFragment():e;if(((t,e,i)=>{let s=ft.get(e);void 0===s&&(N(e,e.firstChild),ft.set(e,s=new at(Object.assign({templateFactory:pt},i))),s.appendInto(e)),s.setValue(t),s.commit()})(t,o,Object.assign({templateFactory:yt(s)},i)),a){const t=ft.get(o);ft.delete(o);const i=t.value instanceof K?t.value.template:void 0;xt(s,o,i),N(e,e.firstChild),e.appendChild(o),ft.set(e,t)}!r&&n&&window.ShadyCSS.styleElement(e.host)},It.shadowRootOptions={mode:"open"};
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class zt{constructor(t){this.classes=new Set,this.changed=!1,this.element=t;const e=(t.getAttribute("class")||"").split(/\s+/);for(const t of e)this.classes.add(t)}add(t){this.classes.add(t),this.changed=!0}remove(t){this.classes.delete(t),this.changed=!0}commit(){if(this.changed){let t="";this.classes.forEach(e=>t+=e+" "),this.element.setAttribute("class",t)}}}const Lt=new WeakMap,Ft=G(t=>e=>{if(!(e instanceof nt)||e instanceof ct||"class"!==e.committer.name||e.committer.parts.length>1)throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");const{committer:i}=e,{element:s}=i;let r=Lt.get(e);void 0===r&&(s.setAttribute("class",i.strings.join(" ")),Lt.set(e,r=new Set));const n=s.classList||new zt(s);r.forEach(e=>{e in t||(n.remove(e),r.delete(e))});for(const e in t){const i=t[e];i!=r.has(e)&&(i?(n.add(e),r.add(e)):(n.remove(e),r.delete(e)))}"function"==typeof n.commit&&n.commit()}),qt=new WeakMap,Yt=G(t=>e=>{const i=qt.get(e);if(void 0===t&&e instanceof nt){if(void 0!==i||!qt.has(e)){const t=e.committer.name;e.committer.element.removeAttribute(t)}}else t!==i&&e.setValue(t);qt.set(e,t)}),Bt=new WeakMap,Wt=G(t=>e=>{if(!(e instanceof nt)||e instanceof ct||"style"!==e.committer.name||e.committer.parts.length>1)throw new Error("The `styleMap` directive must be used in the style attribute and must be the only part in the attribute.");const{committer:i}=e,{style:s}=i.element;let r=Bt.get(e);void 0===r&&(s.cssText=i.strings.join(" "),Bt.set(e,r=new Set)),r.forEach(e=>{e in t||(r.delete(e),-1===e.indexOf("-")?s[e]=null:s.removeProperty(e))});for(const e in t)r.add(e),-1===e.indexOf("-")?s[e]=t[e]:s.setProperty(e,t[e])}),Gt="ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0;class Jt extends HTMLElement{constructor(){super(),this.holdTime=500,this.held=!1,this.ripple=document.createElement("mwc-ripple")}connectedCallback(){Object.assign(this.style,{position:"absolute",width:Gt?"100px":"50px",height:Gt?"100px":"50px",transform:"translate(-50%, -50%)",pointerEvents:"none",zIndex:"999"}),this.appendChild(this.ripple),this.ripple.primary=!0,["touchcancel","mouseout","mouseup","touchmove","mousewheel","wheel","scroll"].forEach(t=>{document.addEventListener(t,()=>{clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0},{passive:!0})})}bind(t,e){if(t.actionHandler)return;t.actionHandler=!0,t.addEventListener("contextmenu",t=>{const e=t||window.event;return e.preventDefault&&e.preventDefault(),e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0,e.returnValue=!1,!1});const i=t=>{let e,i;this.held=!1,t.touches?(e=t.touches[0].pageX,i=t.touches[0].pageY):(e=t.pageX,i=t.pageY),this.timer=window.setTimeout(()=>{this.startAnimation(e,i),this.held=!0},this.holdTime)},s=i=>{i.preventDefault(),["touchend","touchcancel"].includes(i.type)&&void 0===this.timer||(clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0,this.held?O(t,"action",{action:"hold"}):e.hasDoubleClick?"click"===i.type&&i.detail<2||!this.dblClickTimeout?this.dblClickTimeout=window.setTimeout(()=>{this.dblClickTimeout=void 0,O(t,"action",{action:"tap"})},250):(clearTimeout(this.dblClickTimeout),this.dblClickTimeout=void 0,O(t,"action",{action:"double_tap"})):O(t,"action",{action:"tap"}))};t.addEventListener("touchstart",i,{passive:!0}),t.addEventListener("touchend",s),t.addEventListener("touchcancel",s),t.addEventListener("mousedown",i,{passive:!0}),t.addEventListener("click",s),t.addEventListener("keyup",t=>{13===t.keyCode&&s(t)})}startAnimation(t,e){Object.assign(this.style,{left:t+"px",top:e+"px",display:null}),this.ripple.disabled=!1,this.ripple.active=!0,this.ripple.unbounded=!0}stopAnimation(){this.ripple.active=!1,this.ripple.disabled=!0,this.style.display="none"}}customElements.define("action-handler-slider-button",Jt);const Zt=(t,e)=>{const i=(()=>{const t=document.body;if(t.querySelector("action-handler-slider-button"))return t.querySelector("action-handler-slider-button");const e=document.createElement("action-handler-slider-button");return t.appendChild(e),e})();i&&i.bind(t,e)},Xt=G((t={})=>e=>{Zt(e.committer.element,t)});var Kt,Qt,te,ee;!function(t){t.TOGGLE="toggle",t.CUSTOM="custom"}(Kt||(Kt={})),function(t){t.LEFT_RIGHT="left-right",t.TOP_BOTTOM="top-bottom",t.BOTTOM_TOP="bottom-top"}(Qt||(Qt={})),function(t){t.SOLID="solid",t.GRADIENT="gradient",t.TRIANGLE="triangle",t.STRIPED="striped",t.CUSTOM="custom"}(te||(te={})),function(t){t.LIGHT="light",t.SWITCH="switch",t.FAN="fan",t.COVER="cover",t.INPUT_BOOLEAN="input_boolean"}(ee||(ee={}));const ie={mode:Kt.TOGGLE,icon:"mdi:power",show:!0,show_spinner:!0,tap_action:{action:"toggle"}},se={show:!0,use_state_color:!0,rotate:!1,tap_action:{action:"more-info"}},re={percentage:!0,direction:Qt.LEFT_RIGHT,background:te.SOLID,use_percentage_bg_opacity:!1,use_state_color:!1,show_track:!1,force_square:!1},ne=new Map([[ee.LIGHT,{percentage:!0,direction:Qt.LEFT_RIGHT,background:te.GRADIENT,use_state_color:!1,use_percentage_bg_opacity:!1,show_track:!1,force_square:!1}],[ee.FAN,{percentage:!0,direction:Qt.LEFT_RIGHT,background:te.SOLID,use_state_color:!1,use_percentage_bg_opacity:!1,show_track:!1,force_square:!1}],[ee.SWITCH,{percentage:!0,direction:Qt.LEFT_RIGHT,background:te.SOLID,use_state_color:!1,use_percentage_bg_opacity:!1,show_track:!1,force_square:!1}],[ee.COVER,{percentage:!0,direction:Qt.TOP_BOTTOM,background:te.STRIPED,use_state_color:!1,use_percentage_bg_opacity:!1,show_track:!1,force_square:!1}],[ee.INPUT_BOOLEAN,{percentage:!0,direction:Qt.LEFT_RIGHT,background:te.SOLID,use_state_color:!1,use_percentage_bg_opacity:!1,show_track:!1,force_square:!1}]]);function ae(t,e){(function(t){return"string"==typeof t&&-1!==t.indexOf(".")&&1===parseFloat(t)})(t)&&(t="100%");var i=function(t){return"string"==typeof t&&-1!==t.indexOf("%")}(t);return t=360===e?t:Math.min(e,Math.max(0,parseFloat(t))),i&&(t=parseInt(String(t*e),10)/100),Math.abs(t-e)<1e-6?1:t=360===e?(t<0?t%e+e:t%e)/parseFloat(String(e)):t%e/parseFloat(String(e))}function oe(t){return Math.min(1,Math.max(0,t))}function le(t){return t=parseFloat(t),(isNaN(t)||t<0||t>1)&&(t=1),t}function ce(t){return t<=1?100*Number(t)+"%":t}function he(t){return 1===t.length?"0"+t:String(t)}function de(t,e,i){t=ae(t,255),e=ae(e,255),i=ae(i,255);var s=Math.max(t,e,i),r=Math.min(t,e,i),n=0,a=0,o=(s+r)/2;if(s===r)a=0,n=0;else{var l=s-r;switch(a=o>.5?l/(2-s-r):l/(s+r),s){case t:n=(e-i)/l+(e<i?6:0);break;case e:n=(i-t)/l+2;break;case i:n=(t-e)/l+4}n/=6}return{h:n,s:a,l:o}}function ue(t,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?t+6*i*(e-t):i<.5?e:i<2/3?t+(e-t)*(2/3-i)*6:t}function pe(t,e,i){t=ae(t,255),e=ae(e,255),i=ae(i,255);var s=Math.max(t,e,i),r=Math.min(t,e,i),n=0,a=s,o=s-r,l=0===s?0:o/s;if(s===r)n=0;else{switch(s){case t:n=(e-i)/o+(e<i?6:0);break;case e:n=(i-t)/o+2;break;case i:n=(t-e)/o+4}n/=6}return{h:n,s:l,v:a}}function ge(t,e,i,s){var r=[he(Math.round(t).toString(16)),he(Math.round(e).toString(16)),he(Math.round(i).toString(16))];return s&&r[0].startsWith(r[0].charAt(1))&&r[1].startsWith(r[1].charAt(1))&&r[2].startsWith(r[2].charAt(1))?r[0].charAt(0)+r[1].charAt(0)+r[2].charAt(0):r.join("")}function fe(t){return be(t)/255}function be(t){return parseInt(t,16)}var me={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function ve(t){var e={r:0,g:0,b:0},i=1,s=null,r=null,n=null,a=!1,o=!1;return"string"==typeof t&&(t=function(t){if(0===(t=t.trim().toLowerCase()).length)return!1;var e=!1;if(me[t])t=me[t],e=!0;else if("transparent"===t)return{r:0,g:0,b:0,a:0,format:"name"};var i=Se.rgb.exec(t);if(i)return{r:i[1],g:i[2],b:i[3]};if(i=Se.rgba.exec(t))return{r:i[1],g:i[2],b:i[3],a:i[4]};if(i=Se.hsl.exec(t))return{h:i[1],s:i[2],l:i[3]};if(i=Se.hsla.exec(t))return{h:i[1],s:i[2],l:i[3],a:i[4]};if(i=Se.hsv.exec(t))return{h:i[1],s:i[2],v:i[3]};if(i=Se.hsva.exec(t))return{h:i[1],s:i[2],v:i[3],a:i[4]};if(i=Se.hex8.exec(t))return{r:be(i[1]),g:be(i[2]),b:be(i[3]),a:fe(i[4]),format:e?"name":"hex8"};if(i=Se.hex6.exec(t))return{r:be(i[1]),g:be(i[2]),b:be(i[3]),format:e?"name":"hex"};if(i=Se.hex4.exec(t))return{r:be(i[1]+i[1]),g:be(i[2]+i[2]),b:be(i[3]+i[3]),a:fe(i[4]+i[4]),format:e?"name":"hex8"};if(i=Se.hex3.exec(t))return{r:be(i[1]+i[1]),g:be(i[2]+i[2]),b:be(i[3]+i[3]),format:e?"name":"hex"};return!1}(t)),"object"==typeof t&&(xe(t.r)&&xe(t.g)&&xe(t.b)?(e=function(t,e,i){return{r:255*ae(t,255),g:255*ae(e,255),b:255*ae(i,255)}}(t.r,t.g,t.b),a=!0,o="%"===String(t.r).substr(-1)?"prgb":"rgb"):xe(t.h)&&xe(t.s)&&xe(t.v)?(s=ce(t.s),r=ce(t.v),e=function(t,e,i){t=6*ae(t,360),e=ae(e,100),i=ae(i,100);var s=Math.floor(t),r=t-s,n=i*(1-e),a=i*(1-r*e),o=i*(1-(1-r)*e),l=s%6;return{r:255*[i,a,n,n,o,i][l],g:255*[o,i,i,a,n,n][l],b:255*[n,n,o,i,i,a][l]}}(t.h,s,r),a=!0,o="hsv"):xe(t.h)&&xe(t.s)&&xe(t.l)&&(s=ce(t.s),n=ce(t.l),e=function(t,e,i){var s,r,n;if(t=ae(t,360),e=ae(e,100),i=ae(i,100),0===e)r=i,n=i,s=i;else{var a=i<.5?i*(1+e):i+e-i*e,o=2*i-a;s=ue(o,a,t+1/3),r=ue(o,a,t),n=ue(o,a,t-1/3)}return{r:255*s,g:255*r,b:255*n}}(t.h,s,n),a=!0,o="hsl"),Object.prototype.hasOwnProperty.call(t,"a")&&(i=t.a)),i=le(i),{ok:a,format:t.format||o,r:Math.min(255,Math.max(e.r,0)),g:Math.min(255,Math.max(e.g,0)),b:Math.min(255,Math.max(e.b,0)),a:i}}var _e="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)",ye="[\\s|\\(]+("+_e+")[,|\\s]+("+_e+")[,|\\s]+("+_e+")\\s*\\)?",we="[\\s|\\(]+("+_e+")[,|\\s]+("+_e+")[,|\\s]+("+_e+")[,|\\s]+("+_e+")\\s*\\)?",Se={CSS_UNIT:new RegExp(_e),rgb:new RegExp("rgb"+ye),rgba:new RegExp("rgba"+we),hsl:new RegExp("hsl"+ye),hsla:new RegExp("hsla"+we),hsv:new RegExp("hsv"+ye),hsva:new RegExp("hsva"+we),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function xe(t){return Boolean(Se.CSS_UNIT.exec(String(t)))}var ke=function(){function t(e,i){var s;if(void 0===e&&(e=""),void 0===i&&(i={}),e instanceof t)return e;"number"==typeof e&&(e=function(t){return{r:t>>16,g:(65280&t)>>8,b:255&t}}(e)),this.originalInput=e;var r=ve(e);this.originalInput=e,this.r=r.r,this.g=r.g,this.b=r.b,this.a=r.a,this.roundA=Math.round(100*this.a)/100,this.format=null!==(s=i.format)&&void 0!==s?s:r.format,this.gradientType=i.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=r.ok}return t.prototype.isDark=function(){return this.getBrightness()<128},t.prototype.isLight=function(){return!this.isDark()},t.prototype.getBrightness=function(){var t=this.toRgb();return(299*t.r+587*t.g+114*t.b)/1e3},t.prototype.getLuminance=function(){var t=this.toRgb(),e=t.r/255,i=t.g/255,s=t.b/255;return.2126*(e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4))+.7152*(i<=.03928?i/12.92:Math.pow((i+.055)/1.055,2.4))+.0722*(s<=.03928?s/12.92:Math.pow((s+.055)/1.055,2.4))},t.prototype.getAlpha=function(){return this.a},t.prototype.setAlpha=function(t){return this.a=le(t),this.roundA=Math.round(100*this.a)/100,this},t.prototype.toHsv=function(){var t=pe(this.r,this.g,this.b);return{h:360*t.h,s:t.s,v:t.v,a:this.a}},t.prototype.toHsvString=function(){var t=pe(this.r,this.g,this.b),e=Math.round(360*t.h),i=Math.round(100*t.s),s=Math.round(100*t.v);return 1===this.a?"hsv("+e+", "+i+"%, "+s+"%)":"hsva("+e+", "+i+"%, "+s+"%, "+this.roundA+")"},t.prototype.toHsl=function(){var t=de(this.r,this.g,this.b);return{h:360*t.h,s:t.s,l:t.l,a:this.a}},t.prototype.toHslString=function(){var t=de(this.r,this.g,this.b),e=Math.round(360*t.h),i=Math.round(100*t.s),s=Math.round(100*t.l);return 1===this.a?"hsl("+e+", "+i+"%, "+s+"%)":"hsla("+e+", "+i+"%, "+s+"%, "+this.roundA+")"},t.prototype.toHex=function(t){return void 0===t&&(t=!1),ge(this.r,this.g,this.b,t)},t.prototype.toHexString=function(t){return void 0===t&&(t=!1),"#"+this.toHex(t)},t.prototype.toHex8=function(t){return void 0===t&&(t=!1),function(t,e,i,s,r){var n,a=[he(Math.round(t).toString(16)),he(Math.round(e).toString(16)),he(Math.round(i).toString(16)),he((n=s,Math.round(255*parseFloat(n)).toString(16)))];return r&&a[0].startsWith(a[0].charAt(1))&&a[1].startsWith(a[1].charAt(1))&&a[2].startsWith(a[2].charAt(1))&&a[3].startsWith(a[3].charAt(1))?a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0)+a[3].charAt(0):a.join("")}(this.r,this.g,this.b,this.a,t)},t.prototype.toHex8String=function(t){return void 0===t&&(t=!1),"#"+this.toHex8(t)},t.prototype.toRgb=function(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}},t.prototype.toRgbString=function(){var t=Math.round(this.r),e=Math.round(this.g),i=Math.round(this.b);return 1===this.a?"rgb("+t+", "+e+", "+i+")":"rgba("+t+", "+e+", "+i+", "+this.roundA+")"},t.prototype.toPercentageRgb=function(){var t=function(t){return Math.round(100*ae(t,255))+"%"};return{r:t(this.r),g:t(this.g),b:t(this.b),a:this.a}},t.prototype.toPercentageRgbString=function(){var t=function(t){return Math.round(100*ae(t,255))};return 1===this.a?"rgb("+t(this.r)+"%, "+t(this.g)+"%, "+t(this.b)+"%)":"rgba("+t(this.r)+"%, "+t(this.g)+"%, "+t(this.b)+"%, "+this.roundA+")"},t.prototype.toName=function(){if(0===this.a)return"transparent";if(this.a<1)return!1;for(var t="#"+ge(this.r,this.g,this.b,!1),e=0,i=Object.entries(me);e<i.length;e++){var s=i[e],r=s[0];if(t===s[1])return r}return!1},t.prototype.toString=function(t){var e=Boolean(t);t=null!=t?t:this.format;var i=!1,s=this.a<1&&this.a>=0;return e||!s||!t.startsWith("hex")&&"name"!==t?("rgb"===t&&(i=this.toRgbString()),"prgb"===t&&(i=this.toPercentageRgbString()),"hex"!==t&&"hex6"!==t||(i=this.toHexString()),"hex3"===t&&(i=this.toHexString(!0)),"hex4"===t&&(i=this.toHex8String(!0)),"hex8"===t&&(i=this.toHex8String()),"name"===t&&(i=this.toName()),"hsl"===t&&(i=this.toHslString()),"hsv"===t&&(i=this.toHsvString()),i||this.toHexString()):"name"===t&&0===this.a?this.toName():this.toRgbString()},t.prototype.toNumber=function(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)},t.prototype.clone=function(){return new t(this.toString())},t.prototype.lighten=function(e){void 0===e&&(e=10);var i=this.toHsl();return i.l+=e/100,i.l=oe(i.l),new t(i)},t.prototype.brighten=function(e){void 0===e&&(e=10);var i=this.toRgb();return i.r=Math.max(0,Math.min(255,i.r-Math.round(-e/100*255))),i.g=Math.max(0,Math.min(255,i.g-Math.round(-e/100*255))),i.b=Math.max(0,Math.min(255,i.b-Math.round(-e/100*255))),new t(i)},t.prototype.darken=function(e){void 0===e&&(e=10);var i=this.toHsl();return i.l-=e/100,i.l=oe(i.l),new t(i)},t.prototype.tint=function(t){return void 0===t&&(t=10),this.mix("white",t)},t.prototype.shade=function(t){return void 0===t&&(t=10),this.mix("black",t)},t.prototype.desaturate=function(e){void 0===e&&(e=10);var i=this.toHsl();return i.s-=e/100,i.s=oe(i.s),new t(i)},t.prototype.saturate=function(e){void 0===e&&(e=10);var i=this.toHsl();return i.s+=e/100,i.s=oe(i.s),new t(i)},t.prototype.greyscale=function(){return this.desaturate(100)},t.prototype.spin=function(e){var i=this.toHsl(),s=(i.h+e)%360;return i.h=s<0?360+s:s,new t(i)},t.prototype.mix=function(e,i){void 0===i&&(i=50);var s=this.toRgb(),r=new t(e).toRgb(),n=i/100;return new t({r:(r.r-s.r)*n+s.r,g:(r.g-s.g)*n+s.g,b:(r.b-s.b)*n+s.b,a:(r.a-s.a)*n+s.a})},t.prototype.analogous=function(e,i){void 0===e&&(e=6),void 0===i&&(i=30);var s=this.toHsl(),r=360/i,n=[this];for(s.h=(s.h-(r*e>>1)+720)%360;--e;)s.h=(s.h+r)%360,n.push(new t(s));return n},t.prototype.complement=function(){var e=this.toHsl();return e.h=(e.h+180)%360,new t(e)},t.prototype.monochromatic=function(e){void 0===e&&(e=6);for(var i=this.toHsv(),s=i.h,r=i.s,n=i.v,a=[],o=1/e;e--;)a.push(new t({h:s,s:r,v:n})),n=(n+o)%1;return a},t.prototype.splitcomplement=function(){var e=this.toHsl(),i=e.h;return[this,new t({h:(i+72)%360,s:e.s,l:e.l}),new t({h:(i+216)%360,s:e.s,l:e.l})]},t.prototype.onBackground=function(e){var i=this.toRgb(),s=new t(e).toRgb();return new t({r:s.r+(i.r-s.r)*i.a,g:s.g+(i.g-s.g)*i.a,b:s.b+(i.b-s.b)*i.a})},t.prototype.triad=function(){return this.polyad(3)},t.prototype.tetrad=function(){return this.polyad(4)},t.prototype.polyad=function(e){for(var i=this.toHsl(),s=i.h,r=[this],n=360/e,a=1;a<e;a++)r.push(new t({h:(s+a*n)%360,s:i.s,l:i.l}));return r},t.prototype.equals=function(e){return this.toRgbString()===new t(e).toRgbString()},t}();function Oe(t,e){return void 0===t&&(t=""),void 0===e&&(e={}),new ke(t,e)}function Te(t){return Object.keys(t).map(e=>t[e]).filter(t=>"string"==typeof t)}function Me(t,e,i){return"string"==typeof e?Me(t,e.split("."),i):1==e.length&&void 0!==i?t[e[0]]=i:0==e.length?t:Me(t[e[0]],e.slice(1),i)}function Ce(t){const e=w(t)||ee.LIGHT;return ne.get(e)||re}function $e(t,e,i){return(t-e)/i*100}class Ae{constructor(t){this._sliderPrevColor="",this._config=t}set hass(t){this._hass=t}get stateObj(){return this._hass.states[this._config.entity]}get domain(){return S(this.stateObj)}get name(){var t,e;return this._config.name?this._config.name:(null===(e=null===(t=this.stateObj)||void 0===t?void 0:t.attributes)||void 0===e?void 0:e.friendly_name)?this.stateObj.attributes.friendly_name:""}get icon(){var t,e,i;return"string"==typeof(null===(t=this._config.icon)||void 0===t?void 0:t.icon)&&(null===(e=this._config.icon)||void 0===e?void 0:e.icon.length)?this._config.icon.icon:(null===(i=this.stateObj.attributes)||void 0===i?void 0:i.icon)?this.stateObj.attributes.icon:M(this.domain,this.stateObj.state)}get value(){return this._value?Math.round(this._value/this.step)*this.step:0}set value(t){t!==this.value&&(this._value=t)}get targetValue(){return 0===this._targetValue?0:this._targetValue?Math.round(this._targetValue/this.step)*this.step:this.value?this.value:0}set targetValue(t){t!==this.targetValue&&(this._targetValue=Math.round(t/this.step)*this.step)}get label(){return""+this.targetValue}get hidden(){return!1}get hasSlider(){return!0}get hasToggle(){var t,e;return null!==(e=null===(t=this._config.slider)||void 0===t?void 0:t.toggle_on_click)&&void 0!==e&&e}get toggleValue(){return this.value===this.min?this.max:this.min}get state(){return this.stateObj.state}get isOff(){return 0===this.percentage}get isUnavailable(){return!this.state||"unavailable"===this.state}get isSliderDisabled(){return this.isUnavailable?this.isUnavailable:this.hasToggle}get min(){var t,e,i;return null!==(i=null!==(e=null===(t=this._config.slider)||void 0===t?void 0:t.min)&&void 0!==e?e:this._min)&&void 0!==i?i:0}get max(){var t,e,i;return null!==(i=null!==(e=null===(t=this._config.slider)||void 0===t?void 0:t.max)&&void 0!==e?e:this._max)&&void 0!==i?i:100}get step(){var t,e,i;return null!==(i=null!==(e=null===(t=this._config.slider)||void 0===t?void 0:t.step)&&void 0!==e?e:this._step)&&void 0!==i?i:5}get percentage(){return Math.round(100*(this.targetValue-this.min)/(this.max-this.min))}get style(){return{icon:{filter:this.iconFilter,color:this.iconColor,rotateSpeed:this.iconRotateSpeed},slider:{filter:this.sliderFilter,color:this.sliderColor}}}get iconFilter(){var t;return(null===(t=this._config.icon)||void 0===t?void 0:t.use_state_color)&&0!==this.percentage?`brightness(${(this.percentage+100)/2}%)`:"brightness(100%)"}get iconColor(){var t;if(null===(t=this._config.icon)||void 0===t?void 0:t.use_state_color){if(!this.stateObj.attributes.hs_color)return this.percentage>0?"var(--paper-item-icon-active-color, #fdd835)":"var(--paper-item-icon-color, #44739e)";{const[t,e]=this.stateObj.attributes.hs_color;if(e>10)return`hsl(${t}, 100%, ${100-e/2}%)`}}return""}get iconRotateSpeed(){return"0s"}get sliderFilter(){var t;return(null===(t=this._config.slider)||void 0===t?void 0:t.use_percentage_bg_opacity)&&0!==this.percentage&&this._config.slider.background!==te.GRADIENT?`brightness(${(this.percentage+100)/2}%)`:"brightness(100%)"}get sliderColor(){var t;if(null===(t=this._config.slider)||void 0===t?void 0:t.use_state_color)if(this.stateObj.attributes.hs_color){const[t,e]=this.stateObj.attributes.hs_color;if(e>10){const i=`hsl(${t}, 100%, ${100-e/2}%)`;return this._sliderPrevColor=i,i}}else{if(this.stateObj.attributes.color_temp&&this.stateObj.attributes.min_mireds&&this.stateObj.attributes.max_mireds){const t=function(t,e,i){const s=new ke("rgb(255, 160, 0)"),r=new ke("rgb(166, 209, 255)"),n=new ke("white"),a=(t-e)/(i-e)*100;return a<50?Oe(r).mix(n,2*a).toRgbString():Oe(n).mix(s,2*(a-50)).toRgbString()}(this.stateObj.attributes.color_temp,this.stateObj.attributes.min_mireds,this.stateObj.attributes.max_mireds);return this._sliderPrevColor=t,t}if(this._sliderPrevColor.startsWith("hsl")||this._sliderPrevColor.startsWith("rgb"))return this._sliderPrevColor}return"inherit"}applyStep(t){return Math.round(t/this.step)*this.step}log(t="",e=""){this._config.debug&&console.log(`${this._config.entity}: ${t}`,e)}}class Pe extends Ae{constructor(){super(...arguments),this._min=0}get attribute(){return this._config.attribute||"position"}get _value(){switch(this.attribute){case"position":return"closed"===this.stateObj.state?0:this.stateObj.attributes.current_position;case"tilt":return this.stateObj.attributes.current_tilt_position;default:return 0}}set _value(t){if(this.hasSlider)switch(this.attribute){case"position":this._hass.callService("cover","set_cover_position",{entity_id:this.stateObj.entity_id,position:t});break;case"tilt":this._hass.callService("cover","set_cover_tilt_position",{entity_id:this.stateObj.entity_id,tilt_position:t})}else{const e=t>0?"open_cover":"close_cover";this._hass.callService("cover",e,{entity_id:this.stateObj.entity_id})}}get _step(){return 1}get label(){const t=this._hass.localize("component.cover.state._."+this.state);if(!this.hasSlider)return t;switch(this.attribute){case"position":return 0===this.percentage?this._hass.localize("component.cover.state._.closed"):100===this.percentage?this._hass.localize("component.cover.state._.open"):this.percentage+"%";case"tilt":return""+this.percentage}return t}get hasSlider(){switch(this.attribute){case"position":if("current_position"in this.stateObj.attributes)return!0;if("supported_features"in this.stateObj.attributes&&4&this.stateObj.attributes.supported_features)return!0;break;case"tilt":if("current_tilt_position"in this.stateObj.attributes)return!0;if("supported_features"in this.stateObj.attributes&&128&this.stateObj.attributes.supported_features)return!0;break;default:return!1}return!1}get _max(){return this.hasSlider?100:1}}class Ee extends Ae{constructor(){super(...arguments),this._min=0}get _value(){return k.includes(this.stateObj.state)?0:this.stateObj.attributes.percentage}set _value(t){t>0?this._hass.callService("fan","set_percentage",{entity_id:this.stateObj.entity_id,percentage:t}):this._hass.callService("fan","turn_off",{entity_id:this.stateObj.entity_id})}get _step(){return this.stateObj.attributes.percentage_step}get label(){return this.percentage>0?this.hasSlider?this.percentage+"%":this._hass.localize("component.fan.state._.on"):this._hass.localize("component.fan.state._.off")}get hasSlider(){return"speed"in this.stateObj.attributes}get _max(){return this.hasSlider?100:1}get iconRotateSpeed(){let t=0;return this.percentage>0&&(t=3-this.percentage/100*2),t+"s"}}class je extends Ae{constructor(){super(...arguments),this._min=0,this._max=1}get _value(){return k.includes(this.stateObj.state)?0:1}set _value(t){const e=t>0?"turn_on":"turn_off";this._hass.callService("input_boolean",e,{entity_id:this.stateObj.entity_id})}get _step(){return 1}get label(){return this.percentage>0?this._hass.localize("component.input_boolean.state._.on"):this._hass.localize("component.input_boolean.state._.off")}}const Ve={red:0,green:1,blue:2},Ne={hue:0,saturation:1};class Re extends Ae{get attribute(){var t;return(null===(t=this._config.slider)||void 0===t?void 0:t.attribute)||"brightness_pct"}get _value(){if(!this.stateObj||k.includes(this.stateObj.state))return 0;const t=this.stateObj.attributes;switch(this.attribute){case"color_temp":return Math.round(t.color_temp);case"white_value":return Math.round(t.white_value);case"brightness":return Math.round(t.brightness);case"brightness_pct":return Math.round(100*t.brightness/255);case"red":case"green":case"blue":return t.rgb_color?Math.round(t.rgb_color[Ve[this.attribute]]):0;case"hue":case"saturation":return t.hs_color?Math.round(t.hs_color[Ne[this.attribute]]):0;case"effect":return t.effect_list?t.effect_list.indexOf(t.effect):0;default:return 0}}set _value(t){if(!this.stateObj)return;let e,i=this.attribute,s=!0;switch(i){case"brightness":case"brightness_pct":(t="brightness"===i?Math.round(t):Math.round(t/100*255))||(s=!1),i="brightness";break;case"red":case"green":case"blue":e=this.stateObj.attributes.rgb_color||[0,0,0],e[Ve[i]]=t,t=e,i="rgb_color";break;case"hue":case"saturation":e=this.stateObj.attributes.hs_color||[0,0],e[Ne[i]]=t,t=e,i="hs_color";break;case"effect":t=this.stateObj.attributes.effect_list[t],i="effect"}s?this._hass.callService("light","turn_on",{entity_id:this.stateObj.entity_id,[i]:t}):this._hass.callService("light","turn_off",{entity_id:this.stateObj.entity_id})}get _step(){switch(this.attribute){case"effect":default:return 1}}get _min(){switch(this.attribute){case"color_temp":return this.stateObj?this.stateObj.attributes.min_mireds:0;default:return 0}}get _max(){switch(this.attribute){case"color_temp":return this.stateObj?this.stateObj.attributes.max_mireds:0;case"red":case"green":case"blue":case"white_value":case"brightness":return 255;case"hue":return 360;case"effect":return this.stateObj&&this.stateObj.attributes.effect_list?this.stateObj.attributes.effect_list.length-1:0;default:return 100}}get label(){if(0===this.percentage)return this._hass.localize("component.light.state._.off");switch(this.attribute){case"color_temp":case"brightness":return""+this.targetValue;case"brightness_pct":case"saturation":return this.targetValue+"%";case"hue":return this.targetValue+"°";case"effect":return this.stateObj?this.stateObj.attributes.effect:"";default:return""+this.targetValue}}get hasSlider(){var t,e;if(!this.stateObj)return!1;switch(this.attribute){case"brightness":case"brightness_pct":return"brightness"in this.stateObj.attributes||!!("supported_features"in this.stateObj.attributes&&1&(null===(e=null===(t=this.stateObj)||void 0===t?void 0:t.attributes)||void 0===e?void 0:e.supported_features));case"color_temp":return"color_temp"in this.stateObj.attributes||!!("supported_features"in this.stateObj.attributes&&2&this.stateObj.attributes.supported_features);case"white_value":return"white_value"in this.stateObj.attributes||!!("supported_features"in this.stateObj.attributes&&128&this.stateObj.attributes.supported_features);case"red":case"green":case"blue":return"rgb_color"in this.stateObj.attributes||!!("supported_features"in this.stateObj.attributes&&16&this.stateObj.attributes.supported_features);case"hue":case"saturation":return"hs_color"in this.stateObj.attributes||!!("supported_features"in this.stateObj.attributes&&16&this.stateObj.attributes.supported_features);case"effect":return"effect"in this.stateObj.attributes;default:return!1}}}class He extends Ae{constructor(){super(...arguments),this._min=0,this._max=1}get _value(){return k.includes(this.stateObj.state)?0:1}set _value(t){const e=t>0?"turn_on":"turn_off";this._hass.callService("switch",e,{entity_id:this.stateObj.entity_id})}get _step(){return 1}get label(){return this.percentage>0?this._hass.localize("component.switch.state._.on"):this._hass.localize("component.switch.state._.off")}}var De={version:"v",invalid_configuration:"Invalid configuration",show_warning:"Show Warning",show_error:"Show Error"},Ue={general:{title:"General",entity:"Entity (Required)",name:"Name (Optional)",show_name:"Show name?",show_state:"Show state?"},icon:{title:"Icon",icon:"Icon (Optional)",show_icon:"Show icon?",use_state_color:"Use state color?",tap_action:"Tap action"},slider:{title:"Slider",direction:"Direction",background:"Background",use_brightness:"Use brightness?",show_track:"Show track?",force_square:"Force square?"},action_button:{title:"Action button",mode:"Mode",icon:"Icon",show_button:"Show button?",show_spinner:"Show spinner?",tap_action:"Tap action"}},Ie={off:"Off",on:"On"},ze={"left-right":"Left to right","top-bottom":"Top to bottom","bottom-top":"Bottom to top"},Le={striped:"Striped",gradient:"Gradient",solid:"Solid",triangle:"Triangle",custom:"Custom"},Fe={toggle:"Toggle",custom:"Custom"},qe={common:De,tabs:Ue,state:Ie,direction:ze,background:Le,mode:Fe},Ye={version:"v",invalid_configuration:"Ongeldige configuratie",show_warning:"Toon waarschuwing",show_error:"Toon fout"},Be={general:{title:"Algemeen",entity:"Entiteit (Verplicht)",name:"Naam (Optioneel)",show_name:"Toon naam?",show_state:"Toon status?"},icon:{title:"Icoon",icon:"Icoon (Optioneel)",show_icon:"Toon icoon?",use_state_color:"Gebruik status kleur?",tap_action:"Tap actie"},slider:{title:"Schuifregelaar",direction:"Richting",background:"Actergrond",use_brightness:"Gebruik helderheid?",show_track:"Toon spoor?",force_square:"Forceer vierkant?"},action_button:{title:"Actie button",mode:"Modus",icon:"Icoon",show_button:"Toon button?",show_spinner:"Toon spinner?",tap_action:"Tap actie"}},We={off:"Uit",on:"Aan"},Ge={"left-right":"Links naar rechts","top-bottom":"Boven naar onder","bottom-top":"Onder naar boven"},Je={striped:"Gestreept",gradient:"Verloop",solid:"Vast",triangle:"Driehoek",custom:"Aangepast"},Ze={toggle:"Schakelaar",custom:"Aangepast"},Xe={common:Ye,tabs:Be,state:We,direction:Ge,background:Je,mode:Ze};const Ke={en:Object.freeze({__proto__:null,common:De,tabs:Ue,state:Ie,direction:ze,background:Le,mode:Fe,default:qe}),nl:Object.freeze({__proto__:null,common:Ye,tabs:Be,state:We,direction:Ge,background:Je,mode:Ze,default:Xe})};function Qe(t,e="",i=""){const s=(localStorage.getItem("selectedLanguage")||"en").replace(/['"]+/g,"").replace("-","_");let r;try{r=t.split(".").reduce((t,e)=>t[e],Ke[s])}catch(e){r=t.split(".").reduce((t,e)=>t[e],Ke.en)}return void 0===r&&(r=t.split(".").reduce((t,e)=>t[e],Ke.en)),""!==e&&""!==i&&(r=r.replace(e,i)),r}let ti=class extends It{constructor(){super(...arguments),this._initialized=!1,this.directions=Te(Qt),this.backgrounds=Te(te),this.actionModes=Te(Kt)}setConfig(t){this._config=t,this.loadCardHelpers()}shouldUpdate(){return this._initialized||this._initialize(),!0}get _name(){var t;return(null===(t=this._config)||void 0===t?void 0:t.name)||""}get _show_name(){var t,e;return void 0===(null===(t=this._config)||void 0===t?void 0:t.show_name)||(null===(e=this._config)||void 0===e?void 0:e.show_name)}get _show_state(){var t,e;return void 0===(null===(t=this._config)||void 0===t?void 0:t.show_state)||(null===(e=this._config)||void 0===e?void 0:e.show_state)}get _entity(){var t;return(null===(t=this._config)||void 0===t?void 0:t.entity)||""}get _icon(){var t;return(null===(t=this._config)||void 0===t?void 0:t.icon)||se}get _slider(){var t;return(null===(t=this._config)||void 0===t?void 0:t.slider)||re}get _action_button(){var t;return(null===(t=this._config)||void 0===t?void 0:t.action_button)||ie}render(){var t;if(!this.hass||!this._helpers)return mt``;const e=["more-info","toggle","navigate","url","call-service","none"];return this._helpers.importMoreInfoControl("climate"),mt`
      <div class="card-config">
        <div class="tabs">
          <div class="tab">
            <input type="checkbox" id="entity" class="tab-checkbox">
            <label class="tab-label" for="entity">${Qe("tabs.general.title")}</label>
            <div class="tab-content">
              <ha-entity-picker
                .hass=${this.hass}
                .includeDomains=${Te(ee)}
                .value=${this._entity}
                .configValue=${"entity"}
                label="${Qe("tabs.general.entity")}"
                allow-custom-entity
                @value-changed=${this._valueChangedEntity}
              ></ha-entity-picker>
              <paper-input
                label="${Qe("tabs.general.name")}"
                .value=${this._name}
                .placeholder=${this._name||(null===(t=this.hass.states[this._entity].attributes)||void 0===t?void 0:t.friendly_name)}
                .configValue=${"name"}
                @value-changed=${this._valueChanged}
              ></paper-input>
              <div class="side-by-side">
                <ha-formfield .label=${Qe("tabs.general.show_name")}>
                  <ha-switch
                    .checked=${this._show_name}
                    .configValue=${"show_name"}
                    @change=${this._valueChanged}
                  ></ha-switch>
                </ha-formfield>
                <ha-formfield .label=${Qe("tabs.general.show_state")}>
                  <ha-switch
                    .checked=${this._show_state}
                    .configValue=${"show_state"}
                    @change=${this._valueChanged}
                  ></ha-switch>
                </ha-formfield>
              </div>
            </div>
          </div>

          <div class="tab">
            <input type="checkbox" id="icon" class="tab-checkbox">
            <label class="tab-label" for="icon">${Qe("tabs.icon.title")}</label>
            <div class="tab-content">
              <ha-icon-input
              label="${Qe("tabs.icon.icon")}"
              .value=${this._icon.icon}
              .placeholder=${this._icon.icon||function(t){if(!t)return x;if(t.attributes.icon)return t.attributes.icon;var e=w(t.entity_id);return e in j?j[e](t):M(e,t.state)}(this.hass.states[this._entity])}
              .configValue=${"icon.icon"}
              @value-changed=${this._valueChanged}
              >
              </ha-icon-input>
              <div class="side-by-side">
                <ha-formfield label="${Qe("tabs.icon.show_icon")}">
                  <ha-switch
                    .checked=${this._icon.show}
                    .configValue=${"icon.show"}
                    @change=${this._valueChanged}
                  ></ha-switch>
                </ha-formfield>
                ${this.renderStateColor("icon")}
              </div>
              <hui-action-editor
                label="${Qe("tabs.icon.tap_action")}"
                .hass=${this.hass}
                .config=${this._icon.tap_action}
                .actions=${e}
                .configValue=${"icon.tap_action"}
                @value-changed=${this._valueChanged}
              ></hui-action-editor>
            </div>
          </div>
          
          <div class="tab">
            <input type="checkbox" id="slider" class="tab-checkbox">
            <label class="tab-label" for="slider">${Qe("tabs.slider.title")}</label>
            <div class="tab-content">
              <div class="side-by-side">
                <paper-dropdown-menu
                  label="${Qe("tabs.slider.direction")}"
                >
                  <paper-listbox 
                    slot="dropdown-content" 
                    attr-for-selected="item-value"
                    .configValue=${"slider.direction"}
                    @selected-item-changed=${this._valueChangedSelect}
                    .selected=${this._slider.direction}
                  >
                    ${this.directions.map(t=>mt`
                        <paper-item .itemValue=${t}>${Qe("direction."+t)}</paper-item>
                      `)}
                  </paper-listbox>
                </paper-dropdown-menu>
                <paper-dropdown-menu
                  label="${Qe("tabs.slider.background")}"
                >
                  <paper-listbox
                    slot="dropdown-content"
                    attr-for-selected="item-value"
                    .configValue=${"slider.background"}
                    @selected-item-changed=${this._valueChangedSelect}
                    .selected=${this._slider.background}
                  >
                    ${this.backgrounds.map(t=>mt`
                        <paper-item .itemValue=${t}>${Qe("background."+t)}</paper-item>
                      `)}
                  </paper-listbox>
                </paper-dropdown-menu>

              </div>
              <div class="side-by-side">
                ${this.renderBrightness("slider")}
                ${this.renderStateColor("slider")}
                <ha-formfield .label=${Qe("tabs.slider.show_track")}>
                  <ha-switch
                    .checked=${this._slider.show_track}
                    .configValue=${"slider.show_track"}
                    @change=${this._valueChanged}
                  ></ha-switch>
                </ha-formfield>
                <ha-formfield .label=${Qe("tabs.slider.force_square")}>
                  <ha-switch
                    .checked=${this._slider.force_square}
                    .configValue=${"slider.force_square"}
                    @change=${this._valueChanged}
                  ></ha-switch>
                </ha-formfield>
              </div>
            </div>
          </div>
          
          <div class="tab">
            <input type="checkbox" id="action" class="tab-checkbox">
            <label class="tab-label" for="action">${Qe("tabs.action_button.title")}</label>
            <div class="tab-content">
              <paper-dropdown-menu
                label="${Qe("tabs.action_button.mode")}"
              >
                <paper-listbox
                  slot="dropdown-content"
                  attr-for-selected="item-value"
                  .configValue=${"action_button.mode"}
                  @selected-item-changed=${this._valueChangedSelect}
                  .selected=${this._action_button.mode}
                >
                  ${this.actionModes.map(t=>mt`
                        <paper-item .itemValue=${t}>${Qe("mode."+t)}</paper-item>
                      `)}
                </paper-listbox>
              </paper-dropdown-menu>              
              ${this._action_button.mode===Kt.CUSTOM?mt`
                  <ha-icon-input
                    label="${Qe("tabs.action_button.icon")}"
                    .value=${this._action_button.icon}
                    .placeholder=${this._action_button.icon||"mdi:power"}
                    .configValue=${"action_button.icon"}
                    @value-changed=${this._valueChanged}
                  >
                  </ha-icon-input>
                `:""}
              <div class="side-by-side">
                <ha-formfield .label=${Qe("tabs.action_button.show_button")}>
                  <ha-switch
                    .checked=${this._action_button.show}
                    .configValue=${"action_button.show"}
                    @change=${this._valueChanged}
                  ></ha-switch>
                </ha-formfield>
                ${this._action_button.mode===Kt.CUSTOM?mt`
                    <ha-formfield .label=${Qe("tabs.action_button.show_spinner")}>
                      <ha-switch
                        .checked=${this._action_button.show_spinner}
                        .configValue=${"action_button.show_spinner"}
                        @change=${this._valueChanged}
                      ></ha-switch>
                    </ha-formfield>
                `:""}
              </div>
              ${this._action_button.mode===Kt.CUSTOM?mt`
                  <hui-action-editor
                    label="${Qe("tabs.action_button.tap_action")}"
                    .hass=${this.hass}
                    .config=${this._action_button.tap_action}
                    .actions=${e}
                    .configValue=${"action_button.tap_action"}
                    @value-changed=${this._valueChanged}
                  ></hui-action-editor>
                `:""}
            </div>
          </div>
        </div>
      </div>
    `}renderBrightness(t){const e=this["_"+t];return mt`
      <ha-formfield .label=${Qe("tabs.slider.use_brightness")}>
        <ha-switch
          .checked=${e.use_percentage_bg_opacity}
          .configValue="${t}.use_percentage_bg_opacity"
          @change=${this._valueChanged}
        ></ha-switch>
      </ha-formfield>
    `}renderStateColor(t){const e=this["_"+t];return mt`
      <ha-formfield .label=${Qe("tabs.icon.use_state_color")}>
        <ha-switch
          .checked=${e.use_state_color}
          .configValue="${t}.use_state_color"
          @change=${this._valueChanged}
        ></ha-switch>
      </ha-formfield>
    `}_initialize(){void 0!==this.hass&&void 0!==this._config&&void 0!==this._helpers&&(this._initialized=!0)}async loadCardHelpers(){this._helpers=await window.loadCardHelpers()}_valueChangedSelect(t){var e;const i=t.detail.value;i&&this._changeValue(null===(e=i.parentElement)||void 0===e?void 0:e.configValue,i.itemValue)}_valueChangedEntity(t){var e,i;const s=t.target,r=null===(e=t.detail)||void 0===e?void 0:e.value,n=w(r)!==w((null===(i=this._config)||void 0===i?void 0:i.entity)||"light.dummy");this._changeValue("name",""),this._changeValue("icon.icon",""),this._changeValue(s.configValue,r),n&&(Me(this._config,"slider",Ce(r)),O(this,"config-changed",{config:this._config}))}_valueChanged(t){var e;const i=t.target,s=null===(e=t.detail)||void 0===e?void 0:e.value;this._changeValue(i.configValue,void 0!==i.checked?i.checked:s)}_changeValue(t,e){if(this._config&&this.hass&&(void 0===this["_"+t]||this["_"+t]!==e)){if(t){const i=this._config;Me(i,t,e),this._config=i,""===e&&delete this._config[t]}O(this,"config-changed",{config:this._config})}}static get styles(){return Dt`
      ha-switch {
        padding: 16px 6px;
      }
      .side-by-side {
        display: flex;
        flex-flow: row wrap;
      }
      .side-by-side > * {
        padding-right: 8px;
        width: 50%;
        flex-flow: column wrap;
        box-sizing: border-box;
      }
      .side-by-side > *:last-child {
        flex: 1;
        padding-right: 0;
      }
      .suffix {
        margin: 0 8px;
      }
      .group {
        padding: 15px;
        border: 1px solid var(--primary-text-color)
      }
      .tabs {
        overflow: hidden;        
      }
      .tab {
        width: 100%;
        color: var(--primary-text-color);
        overflow: hidden;
      }
      .tab-label {
        display: flex;
        justify-content: space-between;
        padding: 1em 1em 1em 0em;
        border-bottom: 1px solid var(--secondary-text-color);
        font-weight: bold;
        cursor: pointer;
      }
      .tab-label:hover {
        /*background: #1a252f;*/
      }
      .tab-label::after {
        content: "❯";
        width: 1em;
        height: 1em;
        text-align: center;
        transition: all 0.35s;
      }
      .tab-content {
        max-height: 0;
        padding: 0 1em;
        background: var(--secondary-background-color);
        transition: all 0.35s;
      }
      input.tab-checkbox {
        position: absolute;
        opacity: 0;
        z-index: -1;
      }      
      input.tab-checkbox:checked + .tab-label {
        border-color: var(--accent-color);
      }
      input.tab-checkbox:checked + .tab-label::after {
        transform: rotate(90deg);
      }
      input.tab-checkbox:checked ~ .tab-content {
        max-height: 100vh;
        padding: 1em;
      }      
    `}};t([At({attribute:!1})],ti.prototype,"hass",void 0),t([Pt()],ti.prototype,"_config",void 0),t([Pt()],ti.prototype,"_helpers",void 0),ti=t([Ct("slider-button-card-editor")],ti),console.info(`%c  SLIDER-BUTTON-CARD %c ${Qe("common.version")}1.1.0 %c`,"background-color: #555;color: #fff;padding: 3px 2px 3px 3px;border: 1px solid #555;border-radius: 3px 0 0 3px;font-family: Roboto,Verdana,Geneva,sans-serif;text-shadow: 0 1px 0 rgba(1, 1, 1, 0.3)","background-color: transparent;color: #555;padding: 3px 3px 3px 2px;border: 1px solid #555; border-radius: 0 3px 3px 0;font-family: Roboto,Verdana,Geneva,sans-serif","background-color: transparent"),window.customCards=window.customCards||[],window.customCards.push({type:"slider-button-card",name:"Slider button Card",description:"A button card with slider",preview:!0});let ei=class extends It{constructor(){super(...arguments),this.changing=!1,this.changed=!1}static async getConfigElement(){return document.createElement("slider-button-card-editor")}static getStubConfig(t,e){const i=e.find(t=>t.startsWith("light"))||"";return{entity:i,slider:Ce(i),show_name:!0,show_state:!0,icon:se,action_button:ie}}getCardSize(){return 0}setConfig(t){if(!t)throw new Error(Qe("common.invalid_configuration"));if(!t.entity)throw new Error(Qe("common.invalid_configuration"));t.test_gui&&function(){var t=document.querySelector("home-assistant");if(t=(t=(t=(t=(t=(t=(t=(t=t&&t.shadowRoot)&&t.querySelector("home-assistant-main"))&&t.shadowRoot)&&t.querySelector("app-drawer-layout partial-panel-resolver"))&&t.shadowRoot||t)&&t.querySelector("ha-panel-lovelace"))&&t.shadowRoot)&&t.querySelector("hui-root")){var e=t.lovelace;return e.current_view=t.___curView,e}return null}().setEditMode(!0),this.config=Object.assign({slider:Ce(t.entity),icon:se,show_name:!0,show_state:!0,action_button:ie,debug:!1},t),this.ctrl=class{static getInstance(t){const e=w(t.entity),i={[ee.LIGHT]:Re,[ee.FAN]:Ee,[ee.SWITCH]:He,[ee.COVER]:Pe,[ee.INPUT_BOOLEAN]:je};if(void 0===i[e])throw new Error("Unsupported entity type: "+e);return new i[e](t)}}.getInstance(this.config)}shouldUpdate(t){if(!this.config)return!1;const e=t.get("hass");return!e||e.themes!==this.hass.themes||e.language!==this.hass.language||function(t,e,i){if(e.has("config")||i)return!0;if(t.config.entity){var s=e.get("hass");return!s||s.states[t.config.entity]!==t.hass.states[t.config.entity]}return!1}(this,t,!1)}updated(t){this.updateValue(this.ctrl.value,!1),this.animateActionEnd();const e=t.get("hass"),i=t.get("_config");e&&i&&e.themes===this.hass.themes&&i.theme===this.config.theme||function(t,e,i,s){void 0===s&&(s=!1),t._themes||(t._themes={});var r=e.default_theme;("default"===i||i&&e.themes[i])&&(r=i);var n=Object.assign({},t._themes);if("default"!==r){var a=e.themes[r];Object.keys(a).forEach((function(e){var i="--"+e;t._themes[i]="",n[i]=a[e]}))}if(t.updateStyles?t.updateStyles(n):window.ShadyCSS&&window.ShadyCSS.styleSubtree(t,n),s){var o=document.querySelector("meta[name=theme-color]");if(o){o.hasAttribute("default-content")||o.setAttribute("default-content",o.getAttribute("content"));var l=n["--primary-color"]||o.getAttribute("default-content");o.setAttribute("content",l)}}}(this,this.hass.themes,this.config.theme),this.ctrl.log("UPDATED",this.ctrl.value)}firstUpdated(t){super.firstUpdated(t)}render(){var t,e,i,s;return this.ctrl.hass=this.hass,this.ctrl.stateObj?(this.ctrl.log("RENDER",this.ctrl.value),mt`
      <ha-card
        tabindex="0"
        .label=${"SliderButton: "+(this.config.entity||"No Entity Defined")}
        class="${Ft({square:(null===(t=this.config.slider)||void 0===t?void 0:t.force_square)||!1})}"
      >
        <div class="button ${Ft({off:this.ctrl.isOff,unavailable:this.ctrl.isUnavailable})}"
             style=${Wt({"--slider-value":this.ctrl.percentage+"%","--slider-bg-filter":this.ctrl.style.slider.filter,"--slider-color":this.ctrl.style.slider.color,"--icon-filter":this.ctrl.style.icon.filter,"--icon-color":this.ctrl.style.icon.color})}
             >
          <div class="slider"
               data-show-track="${null===(e=this.config.slider)||void 0===e?void 0:e.show_track}"
               data-mode="${null===(i=this.config.slider)||void 0===i?void 0:i.direction}"
               data-background="${null===(s=this.config.slider)||void 0===s?void 0:s.background}"
               data-is-toggle="${this.ctrl.hasToggle}"
               @pointerdown=${this.onPointerDown}
               @pointermove=${this.onPointerMove}
               @pointerup=${this.onPointerUp}
          >
            ${this.ctrl.hasToggle?mt`
                <div class="toggle-overlay" @click=${this.handleClick}></div>
                `:""}
            <div class="slider-bg"></div>
            <div class="slider-thumb"></div>           
          </div>
          ${this.renderText()}
          ${this.renderAction()}
          ${this.renderIcon()}
        </div>
      </ha-card>
    `):this._showError(Qe("common.show_error"))}renderText(){return this.config.show_name||this.config.show_state?mt`
          <div class="text">
            ${this.config.show_name?mt`
                <div class="name">${this.ctrl.name}</div>
                `:""}
            ${this.config.show_state?mt`
                <div class="state">
                  ${this.ctrl.isUnavailable?mt`
                    ${this.hass.localize("state.default.unavailable")}
                    `:mt`
                    ${this.ctrl.label}
                  `}
                </div>
                `:""}
          </div>
    `:mt``}renderIcon(){var t,e;return!1===(null===(t=this.config.icon)||void 0===t?void 0:t.show)?mt``:mt`
      <div class="icon"
           @action=${t=>this._handleAction(t,this.config.icon)}
           .actionHandler=${Xt({hasHold:!1,hasDoubleClick:!1})}
           >
        <ha-icon
          tabindex="-1"
          data-domain=${Yt((null===(e=this.config.icon)||void 0===e?void 0:e.use_state_color)&&this.ctrl.stateObj?S(this.ctrl.stateObj):void 0)}
          data-state=${Yt(this.ctrl.stateObj?this.ctrl.state:void 0)}          
          .icon=${this.ctrl.icon}
        />
      </div>
    `}renderAction(){var t,e,i,s,r;return!1===(null===(t=this.config.action_button)||void 0===t?void 0:t.show)?mt``:(null===(e=this.config.action_button)||void 0===e?void 0:e.mode)===Kt.TOGGLE?mt`
        <div class="action">
          <ha-switch
            .disabled=${this.ctrl.isUnavailable}
            .checked=${!k.includes(this.ctrl.state)}
            @change=${this._toggle}
          ></ha-switch>
        </div>
      `:mt`
      <div class="action"
           @action=${t=>this._handleAction(t,this.config.action_button)}
           .actionHandler=${Xt({hasHold:!1,hasDoubleClick:!1})}           
           >
        <ha-icon
          tabindex="-1"
          .icon=${(null===(i=this.config.action_button)||void 0===i?void 0:i.icon)||"mdi:power"}
        ></ha-icon>
        ${void 0===(null===(s=this.config.action_button)||void 0===s?void 0:s.show_spinner)||(null===(r=this.config.action_button)||void 0===r?void 0:r.show_spinner)?mt`
            <svg class="circular-loader" viewBox="25 25 50 50">
              <circle class="loader-path" cx="50" cy="50" r="20"></circle>
            </svg>
                `:""}
      </div>
    `}setTargetValue(t){this.updateValue(t)}_handleAction(t,e){var i;this.hass&&this.config&&t.detail.action&&("toggle"===(null===(i=e.tap_action)||void 0===i?void 0:i.action)&&this.animateActionStart(),P(this,this.hass,Object.assign(Object.assign({},e),{entity:this.config.entity}),t.detail.action))}handleClick(t){this.ctrl.hasToggle&&!this.ctrl.isUnavailable&&(t.preventDefault(),this.setStateValue(this.ctrl.toggleValue))}_toggle(){this.hass&&this.config&&P(this,this.hass,{tap_action:{action:"toggle"},entity:this.config.entity},"tap")}setStateValue(t){this.updateValue(t,!1),this.ctrl.value=t,this.ctrl.log("setStateValue",t),this.animateActionStart()}animateActionStart(){this.animateActionEnd(),this.action&&this.action.classList.add("loading")}animateActionEnd(){this.action&&(clearTimeout(this.actionTimeout),this.actionTimeout=setTimeout(()=>{this.action.classList.remove("loading")},750))}updateValue(t,e=!0){var i;this.changing=e,this.changed=!e,this.ctrl.log("updateValue",t),this.ctrl.targetValue=t,this.button&&(this.button.classList.remove("off"),e?this.button.classList.add("changing"):(this.button.classList.remove("changing"),this.ctrl.isOff&&this.button.classList.add("off")),this.stateText&&(this.stateText.innerHTML=this.ctrl.isUnavailable?""+this.hass.localize("state.default.unavailable"):this.ctrl.label),this.button.style.setProperty("--slider-value",this.ctrl.percentage+"%"),this.button.style.setProperty("--slider-bg-filter",this.ctrl.style.slider.filter),this.button.style.setProperty("--icon-filter",this.ctrl.style.icon.filter),this.button.style.setProperty("--icon-color",this.ctrl.style.icon.color),(null===(i=this.config.icon)||void 0===i?void 0:i.rotate)&&this.button.style.setProperty("--icon-rotate-speed",this.ctrl.style.icon.rotateSpeed||"0s"))}_showError(t){const e=document.createElement("hui-error-card");return e.setConfig({type:"error",error:t,origConfig:this.config}),mt`
      ${e}
    `}getColorFromVariable(t){if(void 0!==t&&"var"===t.substring(0,3)){let e=window.getComputedStyle(this).getPropertyValue(t.substring(4).slice(0,-1)).trim();return e.length||(e=window.getComputedStyle(document.documentElement).getPropertyValue(t.substring(4).slice(0,-1)).trim()),e}return t}onPointerDown(t){t.preventDefault(),t.stopPropagation(),this.ctrl.isSliderDisabled||this.slider.setPointerCapture(t.pointerId)}onPointerUp(){this.ctrl.isSliderDisabled||(this.ctrl.log("onPointerUp",this.ctrl.targetValue),this.setStateValue(this.ctrl.targetValue))}onPointerMove(t){var e,i,s;if(this.ctrl.isSliderDisabled)return;if(!t.target.hasPointerCapture(t.pointerId))return;const{left:r,top:n,width:a,height:o}=this.slider.getBoundingClientRect();let l;(null===(e=this.config.slider)||void 0===e?void 0:e.direction)===Qt.LEFT_RIGHT?l=$e(t.clientX,r,a):(null===(i=this.config.slider)||void 0===i?void 0:i.direction)===Qt.TOP_BOTTOM?l=$e(t.clientY,n,o):(null===(s=this.config.slider)||void 0===s?void 0:s.direction)===Qt.BOTTOM_TOP&&(l=100-$e(t.clientY,n,o)),l=this.ctrl.applyStep(l),l<0&&(l=0),l>100&&(l=100),this.ctrl.log("onPointerMove",l),this.updateValue(l)}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}static get styles(){return Dt`
    ha-card {
      box-sizing: border-box;
      height: 100%;
      width: 100%;
      min-height: 7rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      touch-action: none;
      overflow: hidden;      
      --mdc-icon-size: 2.2em;
    }
    ha-card.square {
      aspect-ratio: 1 / 1;
    }
    :host {
      --slider-bg-default-color: var(--primary-color, rgb(95, 124, 171));
      --slider-bg: var(--slider-color);
      --slider-bg-filter: brightness(100%);
      --slider-bg-direction: to right;
      --slider-track-color: #2b374e; 
      --slider-tracker-color: transparent;
      --slider-value: 0%;
      --slider-transition-duration: 0.2s;      
      /*--label-text-shadow: rgb(255 255 255 / 10%) -1px -1px 1px, rgb(0 0 0 / 50%) 1px 1px 1px;*/
      --label-color-on: var(--primary-text-color, white);
      --label-color-off: var(--primary-text-color, white);
      --icon-filter: brightness(100%);
      --icon-color: var(--paper-item-icon-color);
      --icon-rotate-speed: 0s;
      /*--state-color-on: #BAC0C6; */
      /*--state-color-off: var(--disabled-text-color);*/
      /*--state-text-shadow: rgb(255 255 255 / 10%) -1px -1px 1px, rgb(0 0 0 / 50%) 1px 1px 1px;*/
      --btn-bg-color-off: rgba(43,55,78,1);
      --btn-bg-color-on: #20293c;
      --action-icon-color-on: var(--paper-item-icon-color, black);
      --action-icon-color-off: var(--paper-item-icon-color, black);      
      --action-spinner-color: var(--label-badge-text-color, white);
    }
    .button {
      position: relative;
      padding: 0.8rem;
      box-sizing: border-box;
      height: 100%;
      min-height: 7rem;
      width: 100%;
      display: block;
      overflow: hidden;           
      transition: all 0.2s ease-in-out;
      touch-action: none;
    }
    .button.off {
      background-color: var(--btn-bg-color-off);
    }
    .icon {
      position: relative;
      cursor: pointer;
      width: var(--mdc-icon-size, 24px);
      height: var(--mdc-icon-size, 24px);
      box-sizing: border-box;
      padding: 0;
      outline: none;
      animation: var(--icon-rotate-speed, 0s) linear 0s infinite normal both running rotate;
      -webkit-tap-highlight-color: transparent;
    }
    .icon ha-icon {
      filter: var(--icon-filter, brightness(100%));
      color: var(--icon-color);
      transition: color 0.4s ease-in-out 0s, filter 0.2s linear 0s;
    }
    .text {
      position: absolute;
      bottom: 0;
      left: 0;
      padding: 0.8rem;
      pointer-events: none;
      user-select: none;
      font-size: 1.1rem;
      line-height: 1.3rem;
      max-width: calc(100% - 2em);
      /*text-shadow: rgb(255 255 255 / 10%) -1px -1px 1px, rgb(0 0 0 / 50%) 1px 1px 1px;*/
    }
    .name {
      color: var(--label-color-on);      
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      text-shadow: var(--label-text-shadow, none);
    }
    .off .name {
      color: var(--label-color-off);
    }
    .state {      
      color: var(--state-color-on, var(--label-badge-text-color, white));      
      text-overflow: ellipsis;
      white-space: nowrap;
      text-shadow: var(--state-text-shadow);
      transition: font-size 0.1s ease-in-out;
    }
    .changing .state {
      font-size: 150%;
    }
    .off .state {
      color: var(--state-color-off, var(--disabled-text-color));
    }
    .slider {
      position: absolute;      
      top: 0px;
      left: 0px;
      height: 100%;
      width: 100%;
      background-color: var( --ha-card-background, var(--card-background-color, var(--btn-bg-color-on, black)) );
      cursor: ew-resize;
      z-index: 0;
    }
    .slider .toggle-overlay {
      position: absolute;      
      top: 0px;
      left: 0px;
      height: 100%;
      width: 100%;
      cursor: pointer;
      opacity: 0;
      z-index: 999;    
    }
    .slider-bg {       
      position: absolute;
      top: 0;
      left: 0px;
      height: 100%;
      width: 100%;
      background: var(--slider-bg);
      background-size: var(--slider-bg-size, 100% 100%);
      background-color: var(--slider-bg-color, transparent);
      background-position: var(--slider-bg-position, 0 0);
      filter: var(--slider-bg-filter, brightness(100%));
    }
    .slider-thumb {
      position: relative;
      width: 100%;
      height: 100%;      
      transform: translateX(var(--slider-value));
      background: transparent;
      transition: transform var(--slider-transition-duration) ease-in;
    }
    .slider[data-mode="top-bottom"] .slider-thumb {
      transform: translateY(var(--slider-value)) !important;
    }
    .slider[data-mode="bottom-top"] .slider-thumb {
      transform: translateY(calc(var(--slider-value) * -1))  !important;
    }
    .slider-thumb:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0px;
      height: 100%;
      width: 100%;          
      background: var( --ha-card-background, var(--card-background-color, var(--btn-bg-color-on, black)) );
      opacity: 1;            
    }
    .slider[data-show-track="true"] .slider-thumb:after {
      opacity: 0.9;
    }

    .off .slider[data-show-track="true"] .slider-thumb:after {
      opacity: 1;
    }

    .changing .slider .slider-thumb {
      transition: none;
    }
    
    .off .slider .slider-bg {
      background-color: var( --ha-card-background, var(--card-background-color, var(--btn-bg-color-off, black)) );
    }
   
    .slider[data-mode="bottom-top"] {
      cursor: ns-resize;
     
    }
    .slider[data-mode="top-bottom"] {
      cursor: ns-resize;
    }
       
    .unavailable .slider .toggle-overlay,
    .unavailable .action,
    .unavailable .action ha-switch,    
    .unavailable .slider {
      cursor: not-allowed !important;
    }
    
    @media (pointer: coarse)  {
      .range-holder .range::-webkit-slider-thumb {
        transform: scaleX(2.5);        
      } 
    }
    
    .slider:active {
      cursor: grabbing;
    }

    .slider[data-background="solid"] .slider-bg {            
      --slider-bg-color: var(--slider-color);
    }
    .slider[data-background="triangle"] .slider-bg {      
      --slider-bg: linear-gradient(to bottom right, transparent 0%, transparent 50%, var(--slider-color) 50%, var(--slider-color) 100%);
      border-right: 0px solid;
    }
    .slider[data-background="custom"] .slider-bg {    
      --slider-bg: repeating-linear-gradient(-45deg, var(--slider-color) 0, var(--slider-color) 1px, var(--slider-color) 0, transparent 10%);
      --slider-bg-size: 30px 30px;
      /*--slider-bg: radial-gradient(circle at 100% 150%, silver 24%, white 24%, white 28%, silver 28%, silver 36%, white 36%, white 40%, transparent 40%, transparent), radial-gradient(circle at 0    150%, silver 24%, white 24%, white 28%, silver 28%, silver 36%, white 36%, white 40%, transparent 40%, transparent), radial-gradient(circle at 50%  100%, white 10%, silver 10%, silver 23%, white 23%, white 30%, silver 30%, silver 43%, white 43%, white 50%, silver 50%, silver 63%, white 63%, white 71%, transparent 71%, transparent), radial-gradient(circle at 100% 50%, white 5%, silver 5%, silver 15%, white 15%, white 20%, silver 20%, silver 29%, white 29%, white 34%, silver 34%, silver 44%, white 44%, white 49%, transparent 49%, transparent), radial-gradient(circle at 0    50%, white 5%, silver 5%, silver 15%, white 15%, white 20%, silver 20%, silver 29%, white 29%, white 34%, silver 34%, silver 44%, white 44%, white 49%, transparent 49%, transparent);
      --slider-bg-size: 100px 50px;*/
    }
    .slider[data-background="gradient"] .slider-bg {
      --slider-bg: linear-gradient(var(--slider-bg-direction), rgba(255, 0, 0, 0) -10%, var(--slider-color) 100%);
    }
    .slider[data-background="striped"] .slider-bg {
      --slider-bg: linear-gradient(var(--slider-bg-direction), var(--slider-color), var(--slider-color) 50%, transparent 50%, transparent);
      --slider-bg-size: 4px 100%;
    }
    .slider[data-mode="bottom-top"] .slider-bg {
      --slider-bg-direction: to top;      
    }
    .slider[data-mode="top-bottom"] .slider-bg {
      --slider-bg-direction: to bottom;      
    }
    
    .slider[data-background="striped"][data-mode="bottom-top"] .slider-bg,
    .slider[data-background="striped"][data-mode="top-bottom"] .slider-bg {      
      --slider-bg-size: 100% 4px;
    }
        
    .action {
      position: relative;
      float: right;
      width: var(--mdc-icon-size, 24px);
      height: var(--mdc-icon-size, 24px);
      color: var(--action-icon-color-on);
      cursor: pointer;
      outline: none;
      -webkit-tap-highlight-color: transparent;
    }
    
    .action ha-switch {
      position: absolute;
      right: 0;
      top: 5px;
    }
    
    .off .action {
      color: var(--action-icon-color-off);
    }

    .action.loading .circular-loader {
      opacity: 1;      
    }
    
    .circular-loader {
      position: absolute;
      left: -8px;
      top: -8px;
      width: calc(var(--mdc-icon-size, 24px) + 16px);
      height: calc(var(--mdc-icon-size, 24px) + 16px);
      opacity: 0;
      transition: opacity 0.2s ease-in-out;
      animation: rotate 2s linear infinite; 
    }
   
    .loader-path {
      fill: none;
      stroke-width: 2px;
      stroke: var(--action-spinner-color);
      animation: animate-stroke 1.5s ease-in-out infinite both;        
      stroke-linecap: round;
    }
    
    @keyframes rotate {
      100% {
        transform: rotate(360deg);
      }
    }
    
    @keyframes animate-stroke {
      0% {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
      }
      50% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -35;
      }
      100% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -124;
      }
    }     
    `}};var ii;t([At({attribute:!1})],ei.prototype,"hass",void 0),t([Pt(ii)],ei.prototype,"config",void 0),t([Et(".state")],ei.prototype,"stateText",void 0),t([Et(".button")],ei.prototype,"button",void 0),t([Et(".action")],ei.prototype,"action",void 0),t([Et(".slider")],ei.prototype,"slider",void 0),ei=t([Ct("slider-button-card")],ei);export{ei as SliderButtonCard};
