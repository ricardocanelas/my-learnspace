(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{47:function(e,n,t){"use strict";t.r(n);var r=t(1),a=t(2),i=t(4),c=t(3),u=t(5),o=t(0),s=t.n(o),d=t(25),m=t(26),l=t(19),h=new(function(){function e(){Object(r.a)(this,e),this.mixins={width:function(e){if("number"===typeof e)return e>=0&&e<=1?(100*e).toFixed(2)+"%":e+"px";var n=parseInt(e);return n>=1&&n<=12?100/(12/e)+"%":e}},this.breakpointValues={xs:{min:"0em",width:"100%"},sm:{min:"48em",width:"49rem"},md:{min:"64em",width:"65rem"},lg:{min:"75em",width:"76rem"}}}return Object(a.a)(e,[{key:"configureBreakpoints",value:function(e){Object.keys(e).forEach(function(n){return e[n]=Object(l.a)({},e[n],{id:n})}),this.breakpointValues=e}},{key:"getBreakpointValues",value:function(){return this.breakpointValues}},{key:"getBreakpointKeys",value:function(){return Object.keys(this.breakpointValues)}},{key:"mediaMap",value:function(e){var n=this,t="";return Object.keys(this.breakpointValues).forEach(function(r){var a=n.breakpointValues[r];t+="@media only screen and (min-width: ".concat(a.min,") {\n                ").concat(e(a),"\n            }\n            ")}),t}},{key:"helperMediaMap",value:function(e,n){var t="";return Object.keys(e).forEach(function(r){var a=e[r];t+="@media only screen and (min-width: ".concat(a.min,") {\n                ").concat(n(a),"\n            }\n            ")}),t}},{key:"destructionProp",value:function(e){var n={};return this.getBreakpointKeys().forEach(function(t){void 0!==e[t]&&(n[t]=e[t])}),n}}]),e}());function f(){var e=Object(d.a)(["\n    padding: 5px;\n    text-align: center;\n    ","\n"]);return f=function(){return e},e}function p(){var e=Object(d.a)(["\n    width: ",";\n\n    ","\n"]);return p=function(){return e},e}function b(){var e=Object(d.a)(["\n    display: flex;\n    flex-wrap: wrap;\n"]);return b=function(){return e},e}function k(){var e=Object(d.a)(["\n    position: relative;\n    margin-right: auto;\n    margin-left: auto;\n    max-width: 100%;\n    border: 1px solid #f5f5f5;\n\n    ","\n"]);return k=function(){return e},e}var v=m.a.div(k(),function(e){return h.helperMediaMap(e.brekpoints,function(e){return"width: "+e.width+";"})}),g=function(e){var n=h.getBreakpointValues();return s.a.createElement(v,Object.assign({},e,{brekpoints:n}),e.children)},w=m.a.div(b()),E=function(e){return s.a.createElement(w,e,e.children)},x=m.a.div(p(),function(e){return e.xs?h.mixins.width(e.xs):"100%"},function(e){return h.mediaMap(function(n){return void 0!==e[n.id]?"\n                width: ".concat(h.mixins.width(e[n.id]),";\n            "):""})}),y=function(e){return s.a.createElement(x,Object.assign({},e.responsive,h.destructionProp(e)),e.children)},j=m.a.div(f(),function(e){return e.background?"background: ".concat(e.background):""}),O=function(e){return s.a.createElement(j,e,e.children)};h.configureBreakpoints({xs:{min:"0em",width:"100%"},sm:{min:"48em",width:"49rem"},md:{min:"64em",width:"65rem"},lg:{min:"75em",width:"76rem"},hd:{min:"99em",width:"100rem"}});var V=function(e){function n(){return Object(r.a)(this,n),Object(i.a)(this,Object(c.a)(n).apply(this,arguments))}return Object(u.a)(n,e),Object(a.a)(n,[{key:"render",value:function(){return s.a.createElement(g,null,s.a.createElement("h1",{style:{padding:"10px 0"}},"Example"),s.a.createElement(E,null,s.a.createElement(y,{xs:"12",sm:"6",md:"3"},s.a.createElement(O,{background:"#757575"},"A")),s.a.createElement(y,{xs:1,sm:.5,md:.25},s.a.createElement(O,{background:"#9e9e9e"},"B")),s.a.createElement(y,{xs:"100%",sm:"50%",md:"25%",lg:"50%"},s.a.createElement(O,{background:"#bdbdbd"},"C")),s.a.createElement(y,{responsive:{xs:"12",sm:"6",md:"3",lg:"12"}},s.a.createElement(O,{background:"#e0e0e0"},"D")),s.a.createElement(y,{xs:"12",sm:"6",md:"3",lg:"8",hd:"12"},s.a.createElement(O,{background:"#eee"},"E"))),s.a.createElement("div",{style:{padding:"20px 0"}},"Please check the lastest version in ",s.a.createElement("br",null),s.a.createElement("a",{href:"https://github.com/ricardocanelas/styled-responsive"},"https://github.com/ricardocanelas/styled-responsive")))}}]),n}(o.Component);n.default=V}}]);
//# sourceMappingURL=6.9d70ae62.chunk.js.map