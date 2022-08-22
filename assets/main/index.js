System.register("chunks:///_virtual/main",["./NewComponent.ts","./sign.ts"],(function(){"use strict";return{setters:[null,null],execute:function(){}}}));

System.register("chunks:///_virtual/NewComponent.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(n){"use strict";var t,e,r,o,c,s;return{setters:[function(n){t=n.inheritsLoose,e=n.asyncToGenerator,r=n.regeneratorRuntime},function(n){o=n.cclegacy,c=n._decorator,s=n.Component}],execute:function(){var a;o._RF.push({},"4b9bbZHXWtKRI/0mWWdZfR2","NewComponent",void 0);var u=c.ccclass;c.property,n("NewComponent",u("NewComponent")(a=function(n){function o(){return n.apply(this,arguments)||this}t(o,n);var c=o.prototype;return c.start=function(){var n=e(r().mark((function n(){var t,e,o;return r().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,window.martian.connect();case 2:return t=n.sent,e=t.address,n.next=6,window.martian.getAccount(e);case 6:o=n.sent,console.log(o);case 8:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),c.update=function(n){},o}(s))||a);o._RF.pop()}}}));

System.register("chunks:///_virtual/sign.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(n){"use strict";var e,t,r,s,o,c;return{setters:[function(n){e=n.inheritsLoose,t=n.asyncToGenerator,r=n.regeneratorRuntime},function(n){s=n.cclegacy,o=n._decorator,c=n.Component}],execute:function(){var i;s._RF.push({},"5e6f17c4Z1AhowolMdkHVRo","sign",void 0);var a=o.ccclass;o.property,n("sign",a("sign")(i=function(n){function s(){return n.apply(this,arguments)||this}e(s,n);var o=s.prototype;return o.start=function(){},o.update=function(n){},o.on_click=function(){var n=t(r().mark((function n(e,t){var s;return r().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,window.martian.signMessage("This is a sample message");case 2:s=n.sent,console.log(s);case 4:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),s}(c))||i);s._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});