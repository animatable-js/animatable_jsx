!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("animatable-js"),require("react")):"function"==typeof define&&define.amd?define(["exports","animatable-js","react"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).TouchRipple={},e.AnimatableJS,e.React)}(this,(function(e,t,n){"use strict";e.useAnimation=function(e,i,o){const a=n.useRef(new t.Animation(e,i,o)).current,[s,u]=n.useState(a.value);return n.useEffect((()=>(a.addListener(u),()=>a.dispose())),[]),[s,a]}}));
//# sourceMappingURL=index.umd.js.map
