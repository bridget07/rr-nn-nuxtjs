/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{186:function(e,t,r){"use strict";r.d(t,"d",(function(){return o})),r.d(t,"e",(function(){return c})),r.d(t,"a",(function(){return l})),r.d(t,"f",(function(){return d})),r.d(t,"b",(function(){return f})),r.d(t,"g",(function(){return m})),r.d(t,"c",(function(){return v}));var n=r(60),o=function(data){return Object(n.b)({method:"POST",url:"/api/users/login",data:data})},c=function(data){return Object(n.b)({method:"POST",url:"/api/users",data:data})},l=function(e){return Object(n.b)({method:"POST",url:"/api/profiles/".concat(e,"/follow")})},d=function(e){return Object(n.b)({method:"DELETE",url:"/api/profiles/".concat(e,"/follow"),data:data})},f=function(){return Object(n.b)({method:"GET",url:"/api/user"})},m=function(data){return Object(n.b)({method:"PUT",url:"/api/user",data:data})},v=function(e){return Object(n.b)({method:"GET",url:"/api/profiles/".concat(e)})}},191:function(e,t,r){var n,o;!function(c){if(void 0===(o="function"==typeof(n=c)?n.call(t,r,t,e):n)||(e.exports=o),!0,e.exports=c(),!!0){var l=window.Cookies,d=window.Cookies=c();d.noConflict=function(){return window.Cookies=l,d}}}((function(){function e(){for(var i=0,e={};i<arguments.length;i++){var t=arguments[i];for(var r in t)e[r]=t[r]}return e}function t(s){return s.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function r(n){function o(){}function c(t,r,c){if("undefined"!=typeof document){"number"==typeof(c=e({path:"/"},o.defaults,c)).expires&&(c.expires=new Date(1*new Date+864e5*c.expires)),c.expires=c.expires?c.expires.toUTCString():"";try{var l=JSON.stringify(r);/^[\{\[]/.test(l)&&(r=l)}catch(e){}r=n.write?n.write(r,t):encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var d="";for(var f in c)c[f]&&(d+="; "+f,!0!==c[f]&&(d+="="+c[f].split(";")[0]));return document.cookie=t+"="+r+d}}function l(e,r){if("undefined"!=typeof document){for(var o={},c=document.cookie?document.cookie.split("; "):[],i=0;i<c.length;i++){var l=c[i].split("="),d=l.slice(1).join("=");r||'"'!==d.charAt(0)||(d=d.slice(1,-1));try{var f=t(l[0]);if(d=(n.read||n)(d,f)||t(d),r)try{d=JSON.parse(d)}catch(e){}if(o[f]=d,e===f)break}catch(e){}}return e?o[e]:o}}return o.set=c,o.get=function(e){return l(e,!1)},o.getJSON=function(e){return l(e,!0)},o.remove=function(t,r){c(t,"",e(r,{expires:-1}))},o.defaults={},o.withConverter=r,o}((function(){}))}))},265:function(e,t,r){"use strict";r.r(t);r(36);var n=r(3),o=r(186),c=r(191),l={middleware:"authenticated",name:"Settings",data:function(){return{user:{image:"",username:"",bio:"",email:"",password:""},disabled:!1}},mounted:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,data,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(o.b)();case 2:r=t.sent,data=r.data,n=data.user,e.user=n;case 6:case"end":return t.stop()}}),t)})))()},methods:{logOut:function(){this.$store.commit("setUser",null),c.set("user",null),this.$router.push("/")},updateSettings:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,data,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.disabled=!0,t.next=3,Object(o.g)({user:e.user});case 3:return t.next=5,Object(o.b)();case 5:r=t.sent,data=r.data,n=data.user,e.user=n,e.disabled=!1;case 10:case"end":return t.stop()}}),t)})))()}}},d=r(23),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"settings-page"},[r("div",{staticClass:"container page"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6 offset-md-3 col-xs-12"},[r("h1",{staticClass:"text-xs-center"},[e._v("Your Settings")]),e._v(" "),r("form",[r("fieldset",[r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.image,expression:"user.image"}],staticClass:"form-control",attrs:{type:"text",placeholder:"URL of profile picture"},domProps:{value:e.user.image},on:{input:function(t){t.target.composing||e.$set(e.user,"image",t.target.value)}}})]),e._v(" "),r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.username,expression:"user.username"}],staticClass:"form-control form-control-lg",attrs:{type:"text",placeholder:"Your Name"},domProps:{value:e.user.username},on:{input:function(t){t.target.composing||e.$set(e.user,"username",t.target.value)}}})]),e._v(" "),r("fieldset",{staticClass:"form-group"},[r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.user.bio,expression:"user.bio"}],staticClass:"form-control form-control-lg",attrs:{rows:"8",placeholder:"Short bio about you"},domProps:{value:e.user.bio},on:{input:function(t){t.target.composing||e.$set(e.user,"bio",t.target.value)}}})]),e._v(" "),r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.email,expression:"user.email"}],staticClass:"form-control form-control-lg",attrs:{type:"text",placeholder:"Email"},domProps:{value:e.user.email},on:{input:function(t){t.target.composing||e.$set(e.user,"email",t.target.value)}}})]),e._v(" "),r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"}],staticClass:"form-control form-control-lg",attrs:{type:"password",placeholder:"Password"},domProps:{value:e.user.password},on:{input:function(t){t.target.composing||e.$set(e.user,"password",t.target.value)}}})]),e._v(" "),r("button",{staticClass:"btn btn-lg btn-primary pull-xs-right",attrs:{disabled:e.disabled},on:{click:e.updateSettings}},[e._v("\n                Update Settings\n              ")])])]),e._v(" "),r("hr"),e._v(" "),r("button",{staticClass:"btn btn-outline-danger",on:{click:e.logOut}},[e._v("\n            Or click here to logout.\n        ")])])])])])}),[],!1,null,null,null);t.default=component.exports}}]);