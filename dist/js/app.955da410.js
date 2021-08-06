(function(e){function t(t){for(var r,s,o=t[0],c=t[1],l=t[2],d=0,f=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&f.push(a[s][0]),a[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);h&&h(t);while(f.length)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},i=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var h=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),a=n.n(r);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Calendar")],1)},i=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{attrs:{id:"cal-header"}},[n("span",{staticClass:"header-arrow",on:{touchstart:e.setLastMonth}},[e._v("＜")]),n("span",{staticClass:"selected-month"},[e._v(e._s(e.year)+"/"+e._s(String(e.month).padStart(2,"0")))]),n("span",{staticClass:"header-arrow",on:{touchstart:e.setNextMonth}},[e._v("＞")])]),n("div",{attrs:{id:"cal-wrap"}},[n("table",{attrs:{id:"cal-main"}},[n("thead",e._l(e.weekdays,(function(t,r){return n("th",{key:r},[e._v(" "+e._s(t)+" ")])})),0),n("tbody",e._l(e.calData,(function(t,r){return n("tr",{key:r},e._l(t,(function(t,r){return n("td",{key:r,staticClass:"cal-day",class:{"cal-today":e.isToday(t),active:e.day===t||e.month===e.searchConfig.date.month&&e.year===e.searchConfig.date.year&&t===e.searchConfig.date.day},on:{touchstart:function(n){return e.dateClick(t)}}},[n("span",[e._v(e._s(t))])])})),0)})),0)]),n("div",{on:{touchstart:function(t){return e.setToday()}}},[e._v("today")])]),n("div",{staticClass:"search-config",attrs:{id:"search-range-of-time"}},[n("p",[e._v("Range of Time")]),n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.searchConfig.timeRange.start,expression:"searchConfig.timeRange.start"}],attrs:{type:"time",id:"start-time",name:"start-time",step:"1"},domProps:{value:e.searchConfig.timeRange.start},on:{input:function(t){t.target.composing||e.$set(e.searchConfig.timeRange,"start",t.target.value)}}}),n("span",[e._v("～")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.searchConfig.timeRange.end,expression:"searchConfig.timeRange.end"}],attrs:{type:"time",id:"end-time",name:"end-time",step:"1"},domProps:{value:e.searchConfig.timeRange.end},on:{input:function(t){t.target.composing||e.$set(e.searchConfig.timeRange,"end",t.target.value)}}}),n("div",[n("input",{attrs:{type:"radio",id:"set-am",name:"set-ampm",value:"AM"},domProps:{checked:"00:00:00"===e.searchConfig.timeRange.start&&"11:59:59"===e.searchConfig.timeRange.end},on:{change:e.changeTimeRange}}),n("label",{attrs:{for:"AM"}},[e._v("AM")]),n("input",{attrs:{type:"radio",id:"set-pm",name:"set-ampm",value:"PM"},domProps:{checked:"12:00:00"===e.searchConfig.timeRange.start&&"23:59:59"===e.searchConfig.timeRange.end},on:{change:e.changeTimeRange}}),n("label",{attrs:{for:"PM"}},[e._v("PM")])])])]),n("div",{staticClass:"search-config",attrs:{id:"search-option"}},[n("p",[e._v("Search Filter")]),n("div",[n("table",[n("tbody",[n("tr",[n("td",[e._v("Include:")]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.searchConfig.filters.include,expression:"searchConfig.filters.include"}],attrs:{type:"checkbox",id:"follows",value:"follows"},domProps:{checked:!!e.searchConfig.filters.include.includes("follows"),checked:Array.isArray(e.searchConfig.filters.include)?e._i(e.searchConfig.filters.include,"follows")>-1:e.searchConfig.filters.include},on:{change:function(t){var n=e.searchConfig.filters.include,r=t.target,a=!!r.checked;if(Array.isArray(n)){var i="follows",s=e._i(n,i);r.checked?s<0&&e.$set(e.searchConfig.filters,"include",n.concat([i])):s>-1&&e.$set(e.searchConfig.filters,"include",n.slice(0,s).concat(n.slice(s+1)))}else e.$set(e.searchConfig.filters,"include",a)}}}),n("label",{attrs:{for:"follows"}},[e._v("follows")])])]),n("tr",[n("td",[e._v("Exclude:")]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.searchConfig.filters.exclude,expression:"searchConfig.filters.exclude"}],attrs:{type:"checkbox",id:"replies",value:"replies"},domProps:{checked:!!e.searchConfig.filters.exclude.includes("replies"),checked:Array.isArray(e.searchConfig.filters.exclude)?e._i(e.searchConfig.filters.exclude,"replies")>-1:e.searchConfig.filters.exclude},on:{change:function(t){var n=e.searchConfig.filters.exclude,r=t.target,a=!!r.checked;if(Array.isArray(n)){var i="replies",s=e._i(n,i);r.checked?s<0&&e.$set(e.searchConfig.filters,"exclude",n.concat([i])):s>-1&&e.$set(e.searchConfig.filters,"exclude",n.slice(0,s).concat(n.slice(s+1)))}else e.$set(e.searchConfig.filters,"exclude",a)}}}),n("label",{attrs:{for:"replies"}},[e._v("replies")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.searchConfig.filters.exclude,expression:"searchConfig.filters.exclude"}],attrs:{type:"checkbox",id:"retweets",value:"retweets"},domProps:{checked:!!e.searchConfig.filters.exclude.includes("retweets"),checked:Array.isArray(e.searchConfig.filters.exclude)?e._i(e.searchConfig.filters.exclude,"retweets")>-1:e.searchConfig.filters.exclude},on:{change:function(t){var n=e.searchConfig.filters.exclude,r=t.target,a=!!r.checked;if(Array.isArray(n)){var i="retweets",s=e._i(n,i);r.checked?s<0&&e.$set(e.searchConfig.filters,"exclude",n.concat([i])):s>-1&&e.$set(e.searchConfig.filters,"exclude",n.slice(0,s).concat(n.slice(s+1)))}else e.$set(e.searchConfig.filters,"exclude",a)}}}),n("label",{attrs:{for:"retweets"}},[e._v("retweets")])])]),n("tr",[n("td",[e._v("Other:")]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.searchConfig.filters.others,expression:"searchConfig.filters.others"}],attrs:{type:"checkbox",id:"optlist",value:"1350805148612771841"},domProps:{checked:!!e.searchConfig.filters.others.includes("optlist"),checked:Array.isArray(e.searchConfig.filters.others)?e._i(e.searchConfig.filters.others,"1350805148612771841")>-1:e.searchConfig.filters.others},on:{change:function(t){var n=e.searchConfig.filters.others,r=t.target,a=!!r.checked;if(Array.isArray(n)){var i="1350805148612771841",s=e._i(n,i);r.checked?s<0&&e.$set(e.searchConfig.filters,"others",n.concat([i])):s>-1&&e.$set(e.searchConfig.filters,"others",n.slice(0,s).concat(n.slice(s+1)))}else e.$set(e.searchConfig.filters,"others",a)}}}),n("label",{attrs:{for:"optlist"}},[e._v("list")])])])])])])]),n("div",{staticClass:"search-config",attrs:{id:"search-word"}},[n("p",[e._v("Search Text")]),n("div",[n("p",{staticStyle:{"white-space":"pre"},attrs:{type:"text",value:"Hello World",id:"myInput"}},[e._v(" "+e._s(e.searchConfig.text)+" ")])])]),n("button",{attrs:{id:"copyBtn"},on:{touchend:function(t){return e.copy()}}},[e._v("Copy")]),n("button",{attrs:{id:"twitter"},on:{touchend:function(t){return e.launchTW()}}},[e._v("Twitter")])])},o=[],c=(n("99af"),n("a15b"),n("d81d"),n("fb6a"),n("a9e3"),n("ac1f"),n("1276"),n("96cf"),n("1da1")),l={data:function(){return{weekdays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],year:2020,month:3,day:-1,today:"",searchConfig:{text:"",date:{year:null,month:null,day:null},timeRange:{start:"00:00:00",end:"00:00:00"},filters:{exclude:[],include:[],others:[]}},history:null}},watch:{day:function(e){-1!==e&&(this.searchConfig.date.year=this.year,this.searchConfig.date.month=this.month,this.searchConfig.date.day=this.day)},searchConfig:{handler:function(){var e="since:".concat(this.searchConfig.date.year,"-").concat(this.searchConfig.date.month,"-").concat(this.searchConfig.date.day,"_").concat(this.searchConfig.timeRange.start,"_JST"),t="until:".concat(this.searchConfig.date.year,"-").concat(this.searchConfig.date.month,"-").concat(this.searchConfig.date.day,"_").concat(this.searchConfig.timeRange.end,"_JST"),n="".concat(this.searchConfig.filters.include.map((function(e){return"filter:".concat(e)})).join(" ")),r="".concat(this.searchConfig.filters.exclude.map((function(e){return"-filter:".concat(e)})).join(" ")),a="".concat(this.searchConfig.filters.others.map((function(e){return"list:".concat(e)})).join(" "));this.searchConfig.text="".concat(e," \n").concat(t," ").concat(n||r?"\n".concat(n," ").concat(r):""," ").concat(a?"\n".concat(a):"")},deep:!0}},beforeMount:function(){this.history=localStorage.history},mounted:function(){var e=new Date,t=e.getFullYear(),n=("0"+(e.getMonth()+1)).slice(-2),r=("0"+e.getDate()).slice(-2);this.year=t,this.month=Number(n),this.today=t+"-"+n+"-"+r;try{var a=JSON.parse(this.history);a.date&&a.date.year&&a.date.month&&a.date.day&&(this.searchConfig.date=a.date),a.filters&&a.filters.include&&a.filters.exclude&&a.filters.others&&(this.searchConfig.filters=a.filters),a.timeRange&&a.timeRange.start&&a.timeRange.end&&(this.searchConfig.timeRange=a.timeRange),this.setHistorysDay()}catch(i){console.log(i)}},methods:{dateClick:function(e){""!==e&&(this.day=e)},setHistorysDay:function(){this.year=this.searchConfig.date.year,this.month=this.searchConfig.date.month,this.day=this.searchConfig.date.day},setToday:function(){this.year===Number(this.today.split("-")[0])&&this.month===Number(this.today.split("-")[1])||(this.day=-1),this.year=Number(this.today.split("-")[0]),this.month=Number(this.today.split("-")[1])},isToday:function(e){var t=this.year+"-"+("0"+this.month).slice(-2)+"-"+e;return this.today===t},setLastMonth:function(){1===this.month?(this.year--,this.month=12):this.month--,this.day=-1},setNextMonth:function(){12===this.month?(this.year++,this.month=1):this.month++,this.day=-1},changeTimeRange:function(e){"set-am"===e.target.id?(this.searchConfig.timeRange.start="00:00:00",this.searchConfig.timeRange.end="11:59:59"):(this.searchConfig.timeRange.start="12:00:00",this.searchConfig.timeRange.end="23:59:59")},copy:function(){var e=document.getElementById("myInput").innerHTML;function t(e){return n.apply(this,arguments)}function n(){return n=Object(c["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",navigator.clipboard.writeText(t).then((function(){return!0}),(function(){return!1})));case 1:case"end":return e.stop()}}),e)}))),n.apply(this,arguments)}localStorage.history=JSON.stringify(this.searchConfig),Object(c["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t(e);case 2:r=n.sent,r&&(document.getElementById("myInput").classList.add("active"),setTimeout((function(){document.getElementById("myInput").classList.remove("active")}),200));case 4:case"end":return n.stop()}}),n)})))(),window.navigator.vibrate([100,100,100])},launchTW:function(){location.href="twitter://search"}},computed:{calData:function(){console.log(this.year+"-"+this.month+"のデータ作成");var e=[],t=new Date(this.year,this.month-1,1).getDay(),n=new Date(this.year,this.month,0).getDate(),r=1;while(r<=n){for(var a=[],i=0;i<=6;i++)0===e.length&&i<t||n<r?a[i]="":(a[i]=r,r++);e.push(a)}return e}}},h=l,d=(n("87bb"),n("2877")),f=Object(d["a"])(h,s,o,!1,null,"625ec622",null),u=f.exports,g={name:"App",components:{Calendar:u}},p=g,m=(n("034f"),Object(d["a"])(p,a,i,!1,null,null,null)),y=m.exports,v=n("9483");Object(v["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(y)}}).$mount("#app")},"6b70":function(e,t,n){},"85ec":function(e,t,n){},"87bb":function(e,t,n){"use strict";var r=n("6b70"),a=n.n(r);a.a}});
//# sourceMappingURL=app.955da410.js.map