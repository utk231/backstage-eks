(()=>{(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2647],{61277:function(m){function N(s){function d(p){return p.map(function(A){return A.split("").map(function(f){return"\\"+f}).join("")}).join("|")}const n="~?[a-z$_][0-9a-zA-Z$_]*",e="`?[A-Z$_][0-9a-zA-Z$_]*",c="'?[a-z$_][0-9a-z$_]*",O="\\s*:\\s*[a-z$_][0-9a-z$_]*(\\(\\s*("+c+"\\s*(,"+c+"\\s*)*)?\\))?",R=n+"("+O+"){0,2}",l="("+d(["||","++","**","+.","*","/","*.","/.","..."])+"|\\|>|&&|==|===)",v="\\s+"+l+"\\s+",a={keyword:"and as asr assert begin class constraint do done downto else end exception external for fun function functor if in include inherit initializer land lazy let lor lsl lsr lxor match method mod module mutable new nonrec object of open or private rec sig struct then to try type val virtual when while with",built_in:"array bool bytes char exn|5 float int int32 int64 list lazy_t|5 nativeint|5 ref string unit ",literal:"true false"},o="\\b(0[xX][a-fA-F0-9_]+[Lln]?|0[oO][0-7_]+[Lln]?|0[bB][01_]+[Lln]?|[0-9][0-9_]*([Lln]|(\\.[0-9_]*)?([eE][-+]?[0-9_]+)?)?)",u={className:"number",relevance:0,variants:[{begin:o},{begin:"\\(-"+o+"\\)"}]},t={className:"operator",relevance:0,begin:l},_=[{className:"identifier",relevance:0,begin:n},t,u],r=[s.QUOTE_STRING_MODE,t,{className:"module",begin:"\\b"+e,returnBegin:!0,end:".",contains:[{className:"identifier",begin:e,relevance:0}]}],b=[{className:"module",begin:"\\b"+e,returnBegin:!0,end:".",relevance:0,contains:[{className:"identifier",begin:e,relevance:0}]}],M={begin:n,end:"(,|\\n|\\))",relevance:0,contains:[t,{className:"typing",begin:":",end:"(,|\\n)",returnBegin:!0,relevance:0,contains:b}]},i={className:"function",relevance:0,keywords:a,variants:[{begin:"\\s(\\(\\.?.*?\\)|"+n+")\\s*=>",end:"\\s*=>",returnBegin:!0,relevance:0,contains:[{className:"params",variants:[{begin:n},{begin:R},{begin:/\(\s*\)/}]}]},{begin:"\\s\\(\\.?[^;\\|]*\\)\\s*=>",end:"\\s=>",returnBegin:!0,relevance:0,contains:[{className:"params",relevance:0,variants:[M]}]},{begin:"\\(\\.\\s"+n+"\\)\\s*=>"}]};r.push(i);const g={className:"constructor",begin:e+"\\(",end:"\\)",illegal:"\\n",keywords:a,contains:[s.QUOTE_STRING_MODE,t,{className:"params",begin:"\\b"+n}]},T={className:"pattern-match",begin:"\\|",returnBegin:!0,keywords:a,end:"=>",relevance:0,contains:[g,t,{relevance:0,className:"constructor",begin:e}]},E={className:"module-access",keywords:a,returnBegin:!0,variants:[{begin:"\\b("+e+"\\.)+"+n},{begin:"\\b("+e+"\\.)+\\(",end:"\\)",returnBegin:!0,contains:[i,{begin:"\\(",end:"\\)",skip:!0}].concat(r)},{begin:"\\b("+e+"\\.)+\\{",end:/\}/}],contains:r};return b.push(E),{name:"ReasonML",aliases:["re"],keywords:a,illegal:"(:-|:=|\\$\\{|\\+=)",contains:[s.COMMENT("/\\*","\\*/",{illegal:"^(#,\\/\\/)"}),{className:"character",begin:"'(\\\\[^']+|[^'])'",illegal:"\\n",relevance:0},s.QUOTE_STRING_MODE,{className:"literal",begin:"\\(\\)",relevance:0},{className:"literal",begin:"\\[\\|",end:"\\|\\]",relevance:0,contains:_},{className:"literal",begin:"\\[",end:"\\]",relevance:0,contains:_},g,{className:"operator",begin:v,illegal:"-->",relevance:0},u,s.C_LINE_COMMENT_MODE,T,i,{className:"module-def",begin:"\\bmodule\\s+"+n+"\\s+"+e+"\\s+=\\s+\\{",end:/\}/,returnBegin:!0,keywords:a,relevance:0,contains:[{className:"module",relevance:0,begin:e},{begin:/\{/,end:/\}/,skip:!0}].concat(r)},E]}}m.exports=N}}]);})();

//# sourceMappingURL=react-syntax-highlighter_languages_highlight_reasonml.4f537995.chunk.js.map