(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{185:function(t,e,r){"use strict";r.d(e,"d",(function(){return c})),r.d(e,"f",(function(){return o})),r.d(e,"a",(function(){return l})),r.d(e,"b",(function(){return f})),r.d(e,"c",(function(){return v})),r.d(e,"e",(function(){return d}));var n=r(61),c=function(t){return Object(n.b)({method:"GET",url:"/api/articles",params:t})},o=function(t){return Object(n.b)({method:"GET",url:"/api/articles/feed",params:t})},l=function(t){return Object(n.b)({method:"POST",url:"/api/articles/".concat(t,"/favorite")})},f=function(t){return Object(n.b)({method:"DELETE",url:"/api/articles/".concat(slug,"/favorite")})},v=function(t){return Object(n.b)({method:"GET",url:"/api/articles/".concat(t)})},d=function(t){return Object(n.b)({method:"GET",url:"/api/articles/".concat(t,"/comments")})}},198:function(t,e,r){"use strict";var n=r(4),c=r(21),o=r(27),l=r(122),f=r(62),v=r(12),d=r(50).f,m=r(63).f,_=r(10).f,h=r(199).trim,C=n.Number,O=C,y=C.prototype,k="Number"==o(r(78)(y)),j="trim"in String.prototype,x=function(t){var e=f(t,!1);if("string"==typeof e&&e.length>2){var r,n,c,o=(e=j?e.trim():h(e,3)).charCodeAt(0);if(43===o||45===o){if(88===(r=e.charCodeAt(2))||120===r)return NaN}else if(48===o){switch(e.charCodeAt(1)){case 66:case 98:n=2,c=49;break;case 79:case 111:n=8,c=55;break;default:return+e}for(var code,l=e.slice(2),i=0,v=l.length;i<v;i++)if((code=l.charCodeAt(i))<48||code>c)return NaN;return parseInt(l,n)}}return+e};if(!C(" 0o1")||!C("0b1")||C("+0x1")){C=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof C&&(k?v((function(){y.valueOf.call(r)})):"Number"!=o(r))?l(new O(x(e)),r,C):x(e)};for(var E,w=r(7)?d(O):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),N=0;w.length>N;N++)c(O,E=w[N])&&!c(C,E)&&_(C,E,m(O,E));C.prototype=y,y.constructor=C,r(13)(n,"Number",C)}},199:function(t,e,r){var n=r(6),c=r(28),o=r(12),l=r(200),f="["+l+"]",v=RegExp("^"+f+f+"*"),d=RegExp(f+f+"*$"),m=function(t,e,r){var c={},f=o((function(){return!!l[t]()||"​"!="​"[t]()})),v=c[t]=f?e(_):l[t];r&&(c[r]=v),n(n.P+n.F*f,"String",c)},_=m.trim=function(t,e){return t=String(c(t)),1&e&&(t=t.replace(v,"")),2&e&&(t=t.replace(d,"")),t};t.exports=m},200:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},260:function(t,e,r){"use strict";r.r(e);r(60),r(25),r(49);var n=r(34),c=(r(24),r(11),r(37),r(9)),o=(r(198),r(36),r(3)),l=r(185),f=r(61),v=r(46);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var _={name:"HomeIndex",asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,n,o,v,d,m,_,h,C,O,y,k,j,x,E;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.query,n=t.store,o=Number(r.page||1),v=20,d=r.tag,m=r.tab||"global_feed",_="your_feed"===m&&n.state.user?l.f:l.d,e.next=8,Promise.all([_({limit:v,tag:d,offset:(o-1)*v}),Object(f.b)({method:"GET",url:"/api/tags"})]);case 8:return h=e.sent,C=Object(c.a)(h,2),O=C[0],y=C[1],k=O.data,j=k.articles,x=k.articlesCount,E=y.data.tags,console.log("---$$tag",d),console.log("---$$tab",m),e.abrupt("return",{articles:j,articlesCount:x,limit:v,page:o,tags:E,tag:d,tab:m});case 17:case"end":return e.stop()}}),e)})))()},watchQuery:["page","tag","tab"],computed:m(m({},Object(v.b)(["user"])),{},{totalPage:function(){return Math.ceil(this.articlesCount/this.limit)}}),methods:{onFavorite:function(article){return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(article.favoriteDisabled=!0,!article.favorited){t.next=8;break}return t.next=4,Object(l.b)(article.slug);case 4:article.favorited=!1,article.favoritesCount+=-1,t.next=12;break;case 8:return t.next=10,Object(l.a)(article.slug);case 10:article.favorited=!0,article.favoritesCount+=1;case 12:article.favoriteDisabled=!1;case 13:case"end":return t.stop()}}),t)})))()}}},h=r(23),component=Object(h.a)(_,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home-page"},[t._m(0),t._v(" "),r("div",{staticClass:"container page"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-9"},[r("div",{staticClass:"feed-toggle"},[r("ul",{staticClass:"nav nav-pills outline-active"},[t.user?r("li",{staticClass:"nav-item"},[r("nuxt-link",{staticClass:"nav-link",class:{active:"your_feed"===t.tab},attrs:{exact:"",to:{name:"/",query:{tab:"your_feed"}}}},[t._v("\n\t\t\t\t\t\t\t\t\tYour Feed\n\t\t\t\t\t\t\t\t")])],1):t._e(),t._v(" "),r("li",{staticClass:"nav-item"},[r("nuxt-link",{staticClass:"nav-link",class:{active:"global_feed"===t.tab},attrs:{exact:"",to:{name:"/",query:{tab:"global_feed"}}}},[t._v("\n\t\t\t\t\t\t\t\t\tGlobal Feed\n\t\t\t\t\t\t\t\t ")])],1),t._v(" "),t.tag?r("li",{staticClass:"nav-item"},[r("nuxt-link",{staticClass:"nav-link",class:{active:"tag"===t.tab},attrs:{exact:"",to:{name:"/",query:{tab:"tag",tag:t.tag}}}},[t._v("\n\t\t\t\t\t\t\t\t# "+t._s(t.tag)+"\n\t\t\t\t\t\t\t\t")])],1):t._e()])]),t._v(" "),t._l(t.articles,(function(article){return r("div",{key:article.slug,staticClass:"article-preview"},[r("div",{staticClass:"article-meta"},[r("nuxt-link",{attrs:{to:{name:"profile",params:{username:article.author.username}}}},[r("img",{attrs:{src:article.author.image}})]),t._v(" "),r("div",{staticClass:"info"},[r("nuxt-link",{staticClass:"author",attrs:{to:{name:"profile",params:{username:article.author.username}}}},[t._v(t._s(article.author.username))]),t._v(" "),r("span",{staticClass:"date"},[t._v(t._s(t._f("date")(article.createdAt,"MM DD, YYYY")))])],1),t._v(" "),r("button",{staticClass:"btn btn-outline-primary btn-sm pull-xs-right",class:{active:article.favorited},attrs:{disabled:article.favoriteDisabled},on:{click:function(e){return t.onFavorite(article)}}},[r("i",{staticClass:"ion-heart"}),t._v("\n                                "+t._s(article.favoritesCount)+"\n                            ")])],1),t._v(" "),r("nuxt-link",{staticClass:"preview-link",attrs:{to:{name:"article",params:{slug:article.slug}}}},[r("h1",[t._v(t._s(article.title))]),t._v(" "),r("p",[t._v(t._s(article.description))]),t._v(" "),r("span",[t._v("Read more...")])])],1)}))],2),t._v(" "),r("div",{staticClass:"col-md-3"},[r("div",{staticClass:"sidebar"},[r("p",[t._v("Popular Tags")]),t._v(" "),r("div",{staticClass:"tag-list"},t._l(t.tags,(function(e){return r("nuxt-link",{key:e,staticClass:"tag-pill tag-default",attrs:{to:{name:"/",query:{tag:e,tab:"tag"}}}},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(e)+"\n\t\t\t\t\t\t\t")])})),1)])]),t._v(" "),r("nav",[r("ul",{staticClass:"pagination"},t._l(t.totalPage,(function(e){return r("li",{key:e,staticClass:"page-item",class:{active:e===t.page}},[r("nuxt-link",{staticClass:"page-link",attrs:{to:{name:"/",query:{page:e,tag:t.tag,tab:"tag"}}}},[t._v(t._s(e))])],1)})),0)])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"banner"},[e("div",{staticClass:"container"},[e("h1",{staticClass:"logo-font"},[this._v("conduit")]),this._v(" "),e("p",[this._v("A place to share your knowledge.")])])])}],!1,null,null,null);e.default=component.exports}}]);