(()=>{(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8560],{4822:function(s){function o(e){return e?typeof e=="string"?e:e.source:null}function l(e){return u("(?=",e,")")}function u(...e){return e.map(a=>o(a)).join("")}function t(e,n={}){return n.variants=e,n}function E(e){const n="[A-Za-z0-9_$]+",a=t([e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.COMMENT("/\\*\\*","\\*/",{relevance:0,contains:[{begin:/\w+@/,relevance:0},{className:"doctag",begin:"@[A-Za-z]+"}]})]),i={className:"regexp",begin:/~?\/[^\/\n]+\//,contains:[e.BACKSLASH_ESCAPE]},r=t([e.BINARY_NUMBER_MODE,e.C_NUMBER_MODE]),c=t([{begin:/"""/,end:/"""/},{begin:/'''/,end:/'''/},{begin:"\\$/",end:"/\\$",relevance:10},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE],{className:"string"});return{name:"Groovy",keywords:{built_in:"this super",literal:"true false null",keyword:"byte short char int long boolean float double void def as in assert trait abstract static volatile transient public private protected synchronized final class interface enum if else for while switch case break default continue throw throws try catch finally implements extends new import package return instanceof"},contains:[e.SHEBANG({binary:"groovy",relevance:10}),a,c,i,r,{className:"class",beginKeywords:"class interface trait enum",end:/\{/,illegal:":",contains:[{beginKeywords:"extends implements"},e.UNDERSCORE_TITLE_MODE]},{className:"meta",begin:"@[A-Za-z]+",relevance:0},{className:"attr",begin:n+"[ 	]*:",relevance:0},{begin:/\?/,end:/:/,relevance:0,contains:[a,c,i,r,"self"]},{className:"symbol",begin:"^[ 	]*"+l(n+":"),excludeBegin:!0,end:n+":",relevance:0}],illegal:/#|<\//}}s.exports=E}}]);})();

//# sourceMappingURL=react-syntax-highlighter_languages_highlight_groovy.ffd8d73b.chunk.js.map