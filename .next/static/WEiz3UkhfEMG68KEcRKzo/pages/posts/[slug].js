(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"/a9y":function(t,e,n){"use strict";var r=n("lwsE"),a=n("W8MJ"),i=n("7W2i"),o=n("a1gu"),u=n("Nsbk");function s(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=u(t);if(e){var a=u(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return o(this,n)}}var c=n("TqRt");e.__esModule=!0,e.default=void 0;var l=c(n("q1tI")),d=c(n("8Kt/")),m={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function h(t){var e=t.res,n=t.err;return{statusCode:e&&e.statusCode?e.statusCode:n?n.statusCode:404}}var f=function(t){i(n,t);var e=s(n);function n(){return r(this,n),e.apply(this,arguments)}return a(n,[{key:"render",value:function(){var t=this.props.statusCode,e=this.props.title||m[t]||"An unexpected error has occurred";return l.default.createElement("div",{style:g.error},l.default.createElement(d.default,null,l.default.createElement("title",null,t,": ",e)),l.default.createElement("div",null,l.default.createElement("style",{dangerouslySetInnerHTML:{__html:"body { margin: 0 }"}}),t?l.default.createElement("h1",{style:g.h1},t):null,l.default.createElement("div",{style:g.desc},l.default.createElement("h2",{style:g.h2},e,"."))))}}]),n}(l.default.Component);e.default=f,f.displayName="ErrorPage",f.getInitialProps=h,f.origGetInitialProps=h;var g={error:{color:"#000",background:"#fff",fontFamily:'-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{display:"inline-block",textAlign:"left",lineHeight:"49px",height:"49px",verticalAlign:"middle"},h1:{display:"inline-block",borderRight:"1px solid rgba(0, 0, 0,.3)",margin:0,marginRight:"20px",padding:"10px 23px 10px 0",fontSize:"24px",fontWeight:500,verticalAlign:"top"},h2:{fontSize:"14px",fontWeight:"normal",lineHeight:"inherit",margin:0,padding:0}}},"1VCc":function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/[slug]",function(){return n("3slx")}])},"3slx":function(t,e,n){"use strict";n.r(e),n.d(e,"__N_SSG",(function(){return Et})),n.d(e,"default",(function(){return Ut}));var r=n("q1tI"),a=n.n(r),i=n("nOHt"),o=n("8Kt/"),u=n.n(o),s=n("eomm"),c=n.n(s),l=n("vUxr"),d=n("qtBi"),m=n.n(d),h=n("wG+1"),f=a.a.createElement;function g(t){var e=t.content;return f("div",{className:"max-w-2xl mx-auto"},f("div",{className:m.a.markdown},f(h.RichText,{render:e})))}var w=n("YFqc"),v=n.n(w),b=a.a.createElement;function p(t){var e=t.name,n=t.picture;return b("div",{className:"flex items-center"},b("img",{src:n.url,className:"w-12 h-12 rounded-full mr-4",alt:e[0].text}),b("div",{className:"text-xl font-bold"},e))}function y(t,e){if(e.length<t)throw new TypeError(t+" argument"+t>1?"s":" required, but only "+e.length+" present")}function x(t){y(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"===typeof t&&"[object Date]"===e?new Date(t.getTime()):"number"===typeof t||"[object Number]"===e?new Date(t):("string"!==typeof t&&"[object String]"!==e||"undefined"===typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}var T={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function C(t){return function(e){var n=e||{},r=n.width?String(n.width):t.defaultWidth;return t.formats[r]||t.formats[t.defaultWidth]}}var M={date:C({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:C({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:C({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},k={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function P(t){return function(e,n){var r,a=n||{};if("formatting"===(a.context?String(a.context):"standalone")&&t.formattingValues){var i=t.defaultFormattingWidth||t.defaultWidth,o=a.width?String(a.width):i;r=t.formattingValues[o]||t.formattingValues[i]}else{var u=t.defaultWidth,s=a.width?String(a.width):t.defaultWidth;r=t.values[s]||t.values[u]}return r[t.argumentCallback?t.argumentCallback(e):e]}}function S(t){return function(e,n){var r=String(e),a=n||{},i=a.width,o=i&&t.matchPatterns[i]||t.matchPatterns[t.defaultMatchWidth],u=r.match(o);if(!u)return null;var s,c=u[0],l=i&&t.parsePatterns[i]||t.parsePatterns[t.defaultParseWidth];return s="[object Array]"===Object.prototype.toString.call(l)?function(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}(l,(function(t){return t.test(r)})):function(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}(l,(function(t){return t.test(r)})),s=t.valueCallback?t.valueCallback(s):s,{value:s=a.valueCallback?a.valueCallback(s):s,rest:r.slice(c.length)}}}var D,N={code:"en-US",formatDistance:function(t,e,n){var r;return n=n||{},r="string"===typeof T[t]?T[t]:1===e?T[t].one:T[t].other.replace("{{count}}",e),n.addSuffix?n.comparison>0?"in "+r:r+" ago":r},formatLong:M,formatRelative:function(t,e,n,r){return k[t]},localize:{ordinalNumber:function(t,e){var n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:P({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:P({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return Number(t)-1}}),month:P({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:P({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:P({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(D={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t,e){var n=String(t),r=e||{},a=n.match(D.matchPattern);if(!a)return null;var i=a[0],o=n.match(D.parsePattern);if(!o)return null;var u=D.valueCallback?D.valueCallback(o[0]):o[0];return{value:u=r.valueCallback?r.valueCallback(u):u,rest:n.slice(i.length)}}),era:S({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:S({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:S({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:S({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:S({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function E(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function U(t,e){return y(2,arguments),function(t,e){y(2,arguments);var n=x(t).getTime(),r=E(e);return new Date(n+r)}(t,-E(e))}function W(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}var Y={y:function(t,e){var n=t.getUTCFullYear(),r=n>0?n:1-n;return W("yy"===e?r%100:r,e.length)},M:function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):W(n+1,2)},d:function(t,e){return W(t.getUTCDate(),e.length)},a:function(t,e){var n=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":case"aaa":return n.toUpperCase();case"aaaaa":return n[0];case"aaaa":default:return"am"===n?"a.m.":"p.m."}},h:function(t,e){return W(t.getUTCHours()%12||12,e.length)},H:function(t,e){return W(t.getUTCHours(),e.length)},m:function(t,e){return W(t.getUTCMinutes(),e.length)},s:function(t,e){return W(t.getUTCSeconds(),e.length)},S:function(t,e){var n=e.length,r=t.getUTCMilliseconds();return W(Math.floor(r*Math.pow(10,n-3)),e.length)}},q=864e5;function O(t){y(1,arguments);var e=x(t),n=e.getUTCDay(),r=(n<1?7:0)+n-1;return e.setUTCDate(e.getUTCDate()-r),e.setUTCHours(0,0,0,0),e}function H(t){y(1,arguments);var e=x(t),n=e.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var a=O(r),i=new Date(0);i.setUTCFullYear(n,0,4),i.setUTCHours(0,0,0,0);var o=O(i);return e.getTime()>=a.getTime()?n+1:e.getTime()>=o.getTime()?n:n-1}var F=6048e5;function z(t){y(1,arguments);var e=x(t),n=O(e).getTime()-function(t){y(1,arguments);var e=H(t),n=new Date(0);return n.setUTCFullYear(e,0,4),n.setUTCHours(0,0,0,0),O(n)}(e).getTime();return Math.round(n/F)+1}function L(t,e){y(1,arguments);var n=e||{},r=n.locale,a=r&&r.options&&r.options.weekStartsOn,i=null==a?0:E(a),o=null==n.weekStartsOn?i:E(n.weekStartsOn);if(!(o>=0&&o<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var u=x(t),s=u.getUTCDay(),c=(s<o?7:0)+s-o;return u.setUTCDate(u.getUTCDate()-c),u.setUTCHours(0,0,0,0),u}function R(t,e){y(1,arguments);var n=x(t,e),r=n.getUTCFullYear(),a=e||{},i=a.locale,o=i&&i.options&&i.options.firstWeekContainsDate,u=null==o?1:E(o),s=null==a.firstWeekContainsDate?u:E(a.firstWeekContainsDate);if(!(s>=1&&s<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var c=new Date(0);c.setUTCFullYear(r+1,0,s),c.setUTCHours(0,0,0,0);var l=L(c,e),d=new Date(0);d.setUTCFullYear(r,0,s),d.setUTCHours(0,0,0,0);var m=L(d,e);return n.getTime()>=l.getTime()?r+1:n.getTime()>=m.getTime()?r:r-1}var j=6048e5;function _(t,e){y(1,arguments);var n=x(t),r=L(n,e).getTime()-function(t,e){y(1,arguments);var n=e||{},r=n.locale,a=r&&r.options&&r.options.firstWeekContainsDate,i=null==a?1:E(a),o=null==n.firstWeekContainsDate?i:E(n.firstWeekContainsDate),u=R(t,e),s=new Date(0);return s.setUTCFullYear(u,0,o),s.setUTCHours(0,0,0,0),L(s,e)}(n,e).getTime();return Math.round(r/j)+1}var B="midnight",X="noon",G="morning",A="afternoon",Q="evening",I="night";function J(t,e){var n=t>0?"-":"+",r=Math.abs(t),a=Math.floor(r/60),i=r%60;if(0===i)return n+String(a);var o=e||"";return n+String(a)+o+W(i,2)}function K(t,e){return t%60===0?(t>0?"-":"+")+W(Math.abs(t)/60,2):V(t,e)}function V(t,e){var n=e||"",r=t>0?"-":"+",a=Math.abs(t);return r+W(Math.floor(a/60),2)+n+W(a%60,2)}var $={G:function(t,e,n){var r=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var r=t.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return Y.y(t,e)},Y:function(t,e,n,r){var a=R(t,r),i=a>0?a:1-a;return"YY"===e?W(i%100,2):"Yo"===e?n.ordinalNumber(i,{unit:"year"}):W(i,e.length)},R:function(t,e){return W(H(t),e.length)},u:function(t,e){return W(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return W(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return W(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){var r=t.getUTCMonth();switch(e){case"M":case"MM":return Y.M(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){var r=t.getUTCMonth();switch(e){case"L":return String(r+1);case"LL":return W(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){var a=_(t,r);return"wo"===e?n.ordinalNumber(a,{unit:"week"}):W(a,e.length)},I:function(t,e,n){var r=z(t);return"Io"===e?n.ordinalNumber(r,{unit:"week"}):W(r,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):Y.d(t,e)},D:function(t,e,n){var r=function(t){y(1,arguments);var e=x(t),n=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var r=n-e.getTime();return Math.floor(r/q)+1}(t);return"Do"===e?n.ordinalNumber(r,{unit:"dayOfYear"}):W(r,e.length)},E:function(t,e,n){var r=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){var a=t.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(i);case"ee":return W(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});case"eeee":default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){var a=t.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(i);case"cc":return W(i,e.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});case"cccc":default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){var r=t.getUTCDay(),a=0===r?7:r;switch(e){case"i":return String(a);case"ii":return W(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){var r=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){var r,a=t.getUTCHours();switch(r=12===a?X:0===a?B:a/12>=1?"pm":"am",e){case"b":case"bb":case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){var r,a=t.getUTCHours();switch(r=a>=17?Q:a>=12?A:a>=4?G:I,e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var r=t.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return Y.h(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):Y.H(t,e)},K:function(t,e,n){var r=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):W(r,e.length)},k:function(t,e,n){var r=t.getUTCHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):W(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):Y.m(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):Y.s(t,e)},S:function(t,e){return Y.S(t,e)},X:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();if(0===a)return"Z";switch(e){case"X":return K(a);case"XXXX":case"XX":return V(a);case"XXXXX":case"XXX":default:return V(a,":")}},x:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"x":return K(a);case"xxxx":case"xx":return V(a);case"xxxxx":case"xxx":default:return V(a,":")}},O:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+J(a,":");case"OOOO":default:return"GMT"+V(a,":")}},z:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+J(a,":");case"zzzz":default:return"GMT"+V(a,":")}},t:function(t,e,n,r){var a=r._originalDate||t;return W(Math.floor(a.getTime()/1e3),e.length)},T:function(t,e,n,r){return W((r._originalDate||t).getTime(),e.length)}};function Z(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}}function tt(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}}var et={p:tt,P:function(t,e){var n,r=t.match(/(P+)(p+)?/),a=r[1],i=r[2];if(!i)return Z(t,e);switch(a){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;case"PPPP":default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",Z(a,e)).replace("{{time}}",tt(i,e))}},nt=6e4;var rt=["D","DD"],at=["YY","YYYY"];function it(t){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` for formatting years; see: https://git.io/fxCyr");if("YY"===t)throw new RangeError("Use `yy` instead of `YY` for formatting years; see: https://git.io/fxCyr");if("D"===t)throw new RangeError("Use `d` instead of `D` for formatting days of the month; see: https://git.io/fxCyr");if("DD"===t)throw new RangeError("Use `dd` instead of `DD` for formatting days of the month; see: https://git.io/fxCyr")}var ot=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,ut=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,st=/^'([^]*?)'?$/,ct=/''/g,lt=/[a-zA-Z]/;function dt(t,e,n){y(2,arguments);var r=String(e),a=n||{},i=a.locale||N,o=i.options&&i.options.firstWeekContainsDate,u=null==o?1:E(o),s=null==a.firstWeekContainsDate?u:E(a.firstWeekContainsDate);if(!(s>=1&&s<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var c=i.options&&i.options.weekStartsOn,l=null==c?0:E(c),d=null==a.weekStartsOn?l:E(a.weekStartsOn);if(!(d>=0&&d<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!i.localize)throw new RangeError("locale must contain localize property");if(!i.formatLong)throw new RangeError("locale must contain formatLong property");var m=x(t);if(!function(t){y(1,arguments);var e=x(t);return!isNaN(e)}(m))throw new RangeError("Invalid time value");var h=U(m,function(t){var e=new Date(t.getTime()),n=Math.ceil(e.getTimezoneOffset());e.setSeconds(0,0);var r=e.getTime()%nt;return n*nt+r}(m)),f={firstWeekContainsDate:s,weekStartsOn:d,locale:i,_originalDate:m};return r.match(ut).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,et[e])(t,i.formatLong,f):t})).join("").match(ot).map((function(t){if("''"===t)return"'";var e=t[0];if("'"===e)return t.match(st)[1].replace(ct,"'");var n,r=$[e];if(r)return a.useAdditionalWeekYearTokens||(n=t,-1===at.indexOf(n))||it(t),!a.useAdditionalDayOfYearTokens&&function(t){return-1!==rt.indexOf(t)}(t)&&it(t),r(h,t,i.localize,f);if(e.match(lt))throw new RangeError("Format string contains an unescaped latin alphabet character `"+e+"`");return t})).join("")}var mt=a.a.createElement;function ht(t){var e=t.dateString,n=Object(h.Date)(e);return mt("time",{dateTime:e},dt(n,"LLLL\td, yyyy"))}var ft=n("zK7a"),gt=a.a.createElement;function wt(t){var e=t.title,n=t.coverImage,r=t.date,a=t.excerpt,i=t.author,o=t.slug;return gt("div",null,gt("div",{className:"mb-5"},gt(ft.a,{title:h.RichText.asText(e),slug:o,url:n.url})),gt("h3",{className:"text-3xl mb-3 leading-snug"},gt(v.a,{as:"/posts/".concat(o),href:"/posts/[slug]"},gt("a",{className:"hover:underline"},gt(h.RichText,{render:e})))),gt("div",{className:"text-lg mb-4"},gt(ht,{dateString:r})),gt("p",{className:"text-lg leading-relaxed mb-4"},a),gt(p,{name:i.name,picture:i.picture}))}var vt=a.a.createElement;function bt(t){var e=t.posts;return vt("section",null,vt("h2",{className:"mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight"},"More Stories"),vt("div",{className:"grid grid-cols-1 md:grid-cols-2 md:col-gap-16 lg:col-gap-32 row-gap-20 md:row-gap-32 mb-32"},e.map((function(t){var e=t.node;return vt(wt,{key:e._meta.uid,title:e.title,coverImage:e.coverimage,date:e.date,author:e.author,slug:e._meta.uid,excerpt:e.excerpt})}))))}var pt=a.a.createElement;function yt(){return pt("h2",{className:"text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8"},pt(v.a,{href:"/"},pt("a",{className:"hover:underline"},"Blog")),".")}var xt=a.a.createElement;function Tt(t){var e=t.children;return xt("h1",{className:"text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left"},e)}var Ct=a.a.createElement;function Mt(t){var e=t.title,n=t.coverImage,r=t.date,i=t.author;return Ct(a.a.Fragment,null,Ct(Tt,null,e[0].text),Ct("div",{className:"hidden md:block md:mb-12"},i&&Ct(p,{name:i.name,picture:i.picture})),Ct("div",{className:"mb-8 md:mb-16 -mx-5 sm:mx-0"},Ct(ft.a,{title:h.RichText.asText(e),url:n.url})),Ct("div",{className:"max-w-2xl mx-auto"},Ct("div",{className:"block md:hidden mb-6"},i&&Ct(p,{name:i.name,picture:i.picture})),Ct("div",{className:"mb-6 text-lg"},Ct(ht,{dateString:r}))))}var kt=a.a.createElement;function Pt(){return kt("hr",{className:"border-accent-2 mt-28 mb-24"})}var St=n("CafY"),Dt=n("YSmr"),Nt=a.a.createElement,Et=!0;function Ut(t){var e,n=t.post,r=t.morePosts,o=t.preview,s=Object(i.useRouter)();return console.log(s,n),s.isFallback||(null===n||void 0===n?void 0:null===(e=n._meta)||void 0===e?void 0:e.uid)?Nt(St.a,{preview:o},Nt(l.a,null,Nt(yt,null),s.isFallback?Nt(Tt,null,"Loading\u2026"):Nt(a.a.Fragment,null,Nt("article",null,Nt(u.a,null,Nt("title",null,n.title[0].text," | Next.js Blog Example with ",Dt.a),Nt("meta",{property:"og:image",content:n.coverimage.url})),Nt(Mt,{title:n.title,coverImage:n.coverimage,date:n.date,author:n.author}),Nt(g,{content:n.content})),Nt(Pt,null),r&&r.length>0&&Nt(bt,{posts:r})))):Nt(c.a,{statusCode:404})}},eomm:function(t,e,n){t.exports=n("/a9y")},qtBi:function(t,e,n){t.exports={markdown:"markdown-styles_markdown__1x9gM"}}},[["1VCc",0,2,1,3,4]]]);