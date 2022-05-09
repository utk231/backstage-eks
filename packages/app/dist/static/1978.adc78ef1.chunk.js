(()=>{(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1978],{71978:function(ye){function W(e){return e instanceof Map?e.clear=e.delete=e.set=function(){throw new Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=function(){throw new Error("set is read-only")}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach(function(t){var i=e[t];typeof i=="object"&&!Object.isFrozen(i)&&W(i)}),e}var ae=W,me=W;ae.default=me;class le{constructor(t){t.data===void 0&&(t.data={}),this.data=t.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function I(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function S(e,...t){const i=Object.create(null);for(const c in e)i[c]=e[c];return t.forEach(function(c){for(const E in c)i[E]=c[E]}),i}const Ae="</span>",ce=e=>!!e.kind;class ve{constructor(t,i){this.buffer="",this.classPrefix=i.classPrefix,t.walk(this)}addText(t){this.buffer+=I(t)}openNode(t){if(!ce(t))return;let i=t.kind;t.sublanguage||(i=`${this.classPrefix}${i}`),this.span(i)}closeNode(t){!ce(t)||(this.buffer+=Ae)}value(){return this.buffer}span(t){this.buffer+=`<span class="${t}">`}}class V{constructor(){this.rootNode={children:[]},this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(t){this.top.children.push(t)}openNode(t){const i={kind:t,children:[]};this.add(i),this.stack.push(i)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(t){return this.constructor._walk(t,this.rootNode)}static _walk(t,i){return typeof i=="string"?t.addText(i):i.children&&(t.openNode(i),i.children.forEach(c=>this._walk(t,c)),t.closeNode(i)),t}static _collapse(t){typeof t!="string"&&(!t.children||(t.children.every(i=>typeof i=="string")?t.children=[t.children.join("")]:t.children.forEach(i=>{V._collapse(i)})))}}class ke extends V{constructor(t){super(),this.options=t}addKeyword(t,i){t!==""&&(this.openNode(i),this.addText(t),this.closeNode())}addText(t){t!==""&&this.add(t)}addSublanguage(t,i){const c=t.root;c.kind=i,c.sublanguage=!0,this.add(c)}toHTML(){return new ve(this,this.options).value()}finalize(){return!0}}function Se(e){return new RegExp(e.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),"m")}function P(e){return e?typeof e=="string"?e:e.source:null}function Le(...e){return e.map(i=>P(i)).join("")}function Te(...e){return"("+e.map(i=>P(i)).join("|")+")"}function Be(e){return new RegExp(e.toString()+"|").exec("").length-1}function Ie(e,t){const i=e&&e.exec(t);return i&&i.index===0}const De=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function Ce(e,t="|"){let i=0;return e.map(c=>{i+=1;const E=i;let p=P(c),M="";for(;p.length>0;){const r=De.exec(p);if(!r){M+=p;break}M+=p.substring(0,r.index),p=p.substring(r.index+r[0].length),r[0][0]==="\\"&&r[1]?M+="\\"+String(Number(r[1])+E):(M+=r[0],r[0]==="("&&i++)}return M}).map(c=>`(${c})`).join(t)}const Pe=/\b\B/,oe="[a-zA-Z]\\w*",X="[a-zA-Z_]\\w*",q="\\b\\d+(\\.\\d+)?",ue="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",ge="\\b(0b[01]+)",He="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",Ue=(e={})=>{const t=/^#![ ]*\//;return e.binary&&(e.begin=Le(t,/.*\b/,e.binary,/\b.*/)),S({className:"meta",begin:t,end:/$/,relevance:0,"on:begin":(i,c)=>{i.index!==0&&c.ignoreMatch()}},e)},H={begin:"\\\\[\\s\\S]",relevance:0},je={className:"string",begin:"'",end:"'",illegal:"\\n",contains:[H]},$e={className:"string",begin:'"',end:'"',illegal:"\\n",contains:[H]},fe={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},U=function(e,t,i={}){const c=S({className:"comment",begin:e,end:t,contains:[]},i);return c.contains.push(fe),c.contains.push({className:"doctag",begin:"(?:TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):",relevance:0}),c},Ge=U("//","$"),Ke=U("/\\*","\\*/"),Fe=U("#","$"),ze={className:"number",begin:q,relevance:0},We={className:"number",begin:ue,relevance:0},Ve={className:"number",begin:ge,relevance:0},Xe={className:"number",begin:q+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},qe={begin:/(?=\/[^/\n]*\/)/,contains:[{className:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[H,{begin:/\[/,end:/\]/,relevance:0,contains:[H]}]}]},Ye={className:"title",begin:oe,relevance:0},Je={className:"title",begin:X,relevance:0},Ze={begin:"\\.\\s*"+X,relevance:0};var j=Object.freeze({__proto__:null,MATCH_NOTHING_RE:Pe,IDENT_RE:oe,UNDERSCORE_IDENT_RE:X,NUMBER_RE:q,C_NUMBER_RE:ue,BINARY_NUMBER_RE:ge,RE_STARTERS_RE:He,SHEBANG:Ue,BACKSLASH_ESCAPE:H,APOS_STRING_MODE:je,QUOTE_STRING_MODE:$e,PHRASAL_WORDS_MODE:fe,COMMENT:U,C_LINE_COMMENT_MODE:Ge,C_BLOCK_COMMENT_MODE:Ke,HASH_COMMENT_MODE:Fe,NUMBER_MODE:ze,C_NUMBER_MODE:We,BINARY_NUMBER_MODE:Ve,CSS_NUMBER_MODE:Xe,REGEXP_MODE:qe,TITLE_MODE:Ye,UNDERSCORE_TITLE_MODE:Je,METHOD_GUARD:Ze,END_SAME_AS_BEGIN:function(e){return Object.assign(e,{"on:begin":(t,i)=>{i.data._beginMatch=t[1]},"on:end":(t,i)=>{i.data._beginMatch!==t[1]&&i.ignoreMatch()}})}});function Qe(e,t){e.input[e.index-1]==="."&&t.ignoreMatch()}function et(e,t){!t||!e.beginKeywords||(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",e.__beforeBegin=Qe,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,e.relevance===void 0&&(e.relevance=0))}function tt(e,t){!Array.isArray(e.illegal)||(e.illegal=Te(...e.illegal))}function nt(e,t){if(!!e.match){if(e.begin||e.end)throw new Error("begin & end are not supported with match");e.begin=e.match,delete e.match}}function it(e,t){e.relevance===void 0&&(e.relevance=1)}const rt=["of","and","for","in","not","or","if","then","parent","list","value"],st="keyword";function he(e,t,i=st){const c={};return typeof e=="string"?E(i,e.split(" ")):Array.isArray(e)?E(i,e):Object.keys(e).forEach(function(p){Object.assign(c,he(e[p],t,p))}),c;function E(p,M){t&&(M=M.map(r=>r.toLowerCase())),M.forEach(function(r){const a=r.split("|");c[a[0]]=[p,at(a[0],a[1])]})}}function at(e,t){return t?Number(t):lt(e)?0:1}function lt(e){return rt.includes(e.toLowerCase())}function ct(e,{plugins:t}){function i(r,a){return new RegExp(P(r),"m"+(e.case_insensitive?"i":"")+(a?"g":""))}class c{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(a,u){u.position=this.position++,this.matchIndexes[this.matchAt]=u,this.regexes.push([u,a]),this.matchAt+=Be(a)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const a=this.regexes.map(u=>u[1]);this.matcherRe=i(Ce(a),!0),this.lastIndex=0}exec(a){this.matcherRe.lastIndex=this.lastIndex;const u=this.matcherRe.exec(a);if(!u)return null;const g=u.findIndex((L,Q)=>Q>0&&L!==void 0),R=this.matchIndexes[g];return u.splice(0,g),Object.assign(u,R)}}class E{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(a){if(this.multiRegexes[a])return this.multiRegexes[a];const u=new c;return this.rules.slice(a).forEach(([g,R])=>u.addRule(g,R)),u.compile(),this.multiRegexes[a]=u,u}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(a,u){this.rules.push([a,u]),u.type==="begin"&&this.count++}exec(a){const u=this.getMatcher(this.regexIndex);u.lastIndex=this.lastIndex;let g=u.exec(a);if(this.resumingScanAtSamePosition()&&!(g&&g.index===this.lastIndex)){const R=this.getMatcher(0);R.lastIndex=this.lastIndex+1,g=R.exec(a)}return g&&(this.regexIndex+=g.position+1,this.regexIndex===this.count&&this.considerAll()),g}}function p(r){const a=new E;return r.contains.forEach(u=>a.addRule(u.begin,{rule:u,type:"begin"})),r.terminatorEnd&&a.addRule(r.terminatorEnd,{type:"end"}),r.illegal&&a.addRule(r.illegal,{type:"illegal"}),a}function M(r,a){const u=r;if(r.isCompiled)return u;[nt].forEach(R=>R(r,a)),e.compilerExtensions.forEach(R=>R(r,a)),r.__beforeBegin=null,[et,tt,it].forEach(R=>R(r,a)),r.isCompiled=!0;let g=null;if(typeof r.keywords=="object"&&(g=r.keywords.$pattern,delete r.keywords.$pattern),r.keywords&&(r.keywords=he(r.keywords,e.case_insensitive)),r.lexemes&&g)throw new Error("ERR: Prefer `keywords.$pattern` to `mode.lexemes`, BOTH are not allowed. (see mode reference) ");return g=g||r.lexemes||/\w+/,u.keywordPatternRe=i(g,!0),a&&(r.begin||(r.begin=/\B|\b/),u.beginRe=i(r.begin),r.endSameAsBegin&&(r.end=r.begin),!r.end&&!r.endsWithParent&&(r.end=/\B|\b/),r.end&&(u.endRe=i(r.end)),u.terminatorEnd=P(r.end)||"",r.endsWithParent&&a.terminatorEnd&&(u.terminatorEnd+=(r.end?"|":"")+a.terminatorEnd)),r.illegal&&(u.illegalRe=i(r.illegal)),r.contains||(r.contains=[]),r.contains=[].concat(...r.contains.map(function(R){return ot(R==="self"?r:R)})),r.contains.forEach(function(R){M(R,u)}),r.starts&&M(r.starts,a),u.matcher=p(u),u}if(e.compilerExtensions||(e.compilerExtensions=[]),e.contains&&e.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return e.classNameAliases=S(e.classNameAliases||{}),M(e)}function de(e){return e?e.endsWithParent||de(e.starts):!1}function ot(e){return e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map(function(t){return S(e,{variants:null},t)})),e.cachedVariants?e.cachedVariants:de(e)?S(e,{starts:e.starts?S(e.starts):null}):Object.isFrozen(e)?S(e):e}var ut="10.7.3";function gt(e){return Boolean(e||e==="")}function ft(e){const t={props:["language","code","autodetect"],data:function(){return{detectedLanguage:"",unknownLanguage:!1}},computed:{className(){return this.unknownLanguage?"":"hljs "+this.detectedLanguage},highlighted(){if(!this.autoDetect&&!e.getLanguage(this.language))return console.warn(`The language "${this.language}" you specified could not be found.`),this.unknownLanguage=!0,I(this.code);let c={};return this.autoDetect?(c=e.highlightAuto(this.code),this.detectedLanguage=c.language):(c=e.highlight(this.language,this.code,this.ignoreIllegals),this.detectedLanguage=this.language),c.value},autoDetect(){return!this.language||gt(this.autodetect)},ignoreIllegals(){return!0}},render(c){return c("pre",{},[c("code",{class:this.className,domProps:{innerHTML:this.highlighted}})])}};return{Component:t,VuePlugin:{install(c){c.component("highlightjs",t)}}}}const ht={"after:highlightElement":({el:e,result:t,text:i})=>{const c=pe(e);if(!c.length)return;const E=document.createElement("div");E.innerHTML=t.value,t.value=dt(c,pe(E),i)}};function Y(e){return e.nodeName.toLowerCase()}function pe(e){const t=[];return function i(c,E){for(let p=c.firstChild;p;p=p.nextSibling)p.nodeType===3?E+=p.nodeValue.length:p.nodeType===1&&(t.push({event:"start",offset:E,node:p}),E=i(p,E),Y(p).match(/br|hr|img|input/)||t.push({event:"stop",offset:E,node:p}));return E}(e,0),t}function dt(e,t,i){let c=0,E="";const p=[];function M(){return!e.length||!t.length?e.length?e:t:e[0].offset!==t[0].offset?e[0].offset<t[0].offset?e:t:t[0].event==="start"?e:t}function r(g){function R(L){return" "+L.nodeName+'="'+I(L.value)+'"'}E+="<"+Y(g)+[].map.call(g.attributes,R).join("")+">"}function a(g){E+="</"+Y(g)+">"}function u(g){(g.event==="start"?r:a)(g.node)}for(;e.length||t.length;){let g=M();if(E+=I(i.substring(c,g[0].offset)),c=g[0].offset,g===e){p.reverse().forEach(a);do u(g.splice(0,1)[0]),g=M();while(g===e&&g.length&&g[0].offset===c);p.reverse().forEach(r)}else g[0].event==="start"?p.push(g[0].node):p.pop(),u(g.splice(0,1)[0])}return E+I(i.substr(c))}const Ee={},J=e=>{console.error(e)},be=(e,...t)=>{console.log(`WARN: ${e}`,...t)},y=(e,t)=>{Ee[`${e}/${t}`]||(console.log(`Deprecated as of ${e}. ${t}`),Ee[`${e}/${t}`]=!0)},Z=I,_e=S,Re=Symbol("nomatch");var pt=function(e){const t=Object.create(null),i=Object.create(null),c=[];let E=!0;const p=/(^(<[^>]+>|\t|)+|\n)/gm,M="Could not find the language '{}', did you forget to load/include a language module?",r={disableAutodetect:!0,name:"Plain text",contains:[]};let a={noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:null,__emitter:ke};function u(n){return a.noHighlightRe.test(n)}function g(n){let s=n.className+" ";s+=n.parentNode?n.parentNode.className:"";const d=a.languageDetectRe.exec(s);if(d){const _=k(d[1]);return _||(be(M.replace("{}",d[1])),be("Falling back to no-highlight mode for this block.",n)),_?d[1]:"no-highlight"}return s.split(/\s+/).find(_=>u(_)||k(_))}function R(n,s,d,_){let N="",B="";typeof s=="object"?(N=n,d=s.ignoreIllegals,B=s.language,_=void 0):(y("10.7.0","highlight(lang, code, ...args) has been deprecated."),y("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),B=n,N=s);const m={code:N,language:B};G("before:highlight",m);const A=m.result?m.result:L(m.language,m.code,d,_);return A.code=m.code,G("after:highlight",A),A}function L(n,s,d,_){function N(l,o){const h=D.case_insensitive?o[0].toLowerCase():o[0];return Object.prototype.hasOwnProperty.call(l.keywords,h)&&l.keywords[h]}function B(){if(!f.keywords){w.addText(x);return}let l=0;f.keywordPatternRe.lastIndex=0;let o=f.keywordPatternRe.exec(x),h="";for(;o;){h+=x.substring(l,o.index);const b=N(f,o);if(b){const[O,z]=b;if(w.addText(h),h="",F+=z,O.startsWith("_"))h+=o[0];else{const Pt=D.classNameAliases[O]||O;w.addKeyword(o[0],Pt)}}else h+=o[0];l=f.keywordPatternRe.lastIndex,o=f.keywordPatternRe.exec(x)}h+=x.substr(l),w.addText(h)}function m(){if(x==="")return;let l=null;if(typeof f.subLanguage=="string"){if(!t[f.subLanguage]){w.addText(x);return}l=L(f.subLanguage,x,!0,Oe[f.subLanguage]),Oe[f.subLanguage]=l.top}else l=ee(x,f.subLanguage.length?f.subLanguage:null);f.relevance>0&&(F+=l.relevance),w.addSublanguage(l.emitter,l.language)}function A(){f.subLanguage!=null?m():B(),x=""}function v(l){return l.className&&w.openNode(D.classNameAliases[l.className]||l.className),f=Object.create(l,{parent:{value:f}}),f}function T(l,o,h){let b=Ie(l.endRe,h);if(b){if(l["on:end"]){const O=new le(l);l["on:end"](o,O),O.isMatchIgnored&&(b=!1)}if(b){for(;l.endsParent&&l.parent;)l=l.parent;return l}}if(l.endsWithParent)return T(l.parent,o,h)}function Tt(l){return f.matcher.regexIndex===0?(x+=l[0],1):(se=!0,0)}function Bt(l){const o=l[0],h=l.rule,b=new le(h),O=[h.__beforeBegin,h["on:begin"]];for(const z of O)if(!!z&&(z(l,b),b.isMatchIgnored))return Tt(o);return h&&h.endSameAsBegin&&(h.endRe=Se(o)),h.skip?x+=o:(h.excludeBegin&&(x+=o),A(),!h.returnBegin&&!h.excludeBegin&&(x=o)),v(h),h.returnBegin?0:o.length}function It(l){const o=l[0],h=s.substr(l.index),b=T(f,l,h);if(!b)return Re;const O=f;O.skip?x+=o:(O.returnEnd||O.excludeEnd||(x+=o),A(),O.excludeEnd&&(x=o));do f.className&&w.closeNode(),!f.skip&&!f.subLanguage&&(F+=f.relevance),f=f.parent;while(f!==b.parent);return b.starts&&(b.endSameAsBegin&&(b.starts.endRe=b.endRe),v(b.starts)),O.returnEnd?0:o.length}function Dt(){const l=[];for(let o=f;o!==D;o=o.parent)o.className&&l.unshift(o.className);l.forEach(o=>w.openNode(o))}let K={};function we(l,o){const h=o&&o[0];if(x+=l,h==null)return A(),0;if(K.type==="begin"&&o.type==="end"&&K.index===o.index&&h===""){if(x+=s.slice(o.index,o.index+1),!E){const b=new Error("0 width match regex");throw b.languageName=n,b.badRule=K.rule,b}return 1}if(K=o,o.type==="begin")return Bt(o);if(o.type==="illegal"&&!d){const b=new Error('Illegal lexeme "'+h+'" for mode "'+(f.className||"<unnamed>")+'"');throw b.mode=f,b}else if(o.type==="end"){const b=It(o);if(b!==Re)return b}if(o.type==="illegal"&&h==="")return 1;if(re>1e5&&re>o.index*3)throw new Error("potential infinite loop, way more iterations than matches");return x+=h,h.length}const D=k(n);if(!D)throw J(M.replace("{}",n)),new Error('Unknown language: "'+n+'"');const Ct=ct(D,{plugins:c});let ie="",f=_||Ct;const Oe={},w=new a.__emitter(a);Dt();let x="",F=0,C=0,re=0,se=!1;try{for(f.matcher.considerAll();;){re++,se?se=!1:f.matcher.considerAll(),f.matcher.lastIndex=C;const l=f.matcher.exec(s);if(!l)break;const o=s.substring(C,l.index),h=we(o,l);C=l.index+h}return we(s.substr(C)),w.closeAllNodes(),w.finalize(),ie=w.toHTML(),{relevance:Math.floor(F),value:ie,language:n,illegal:!1,emitter:w,top:f}}catch(l){if(l.message&&l.message.includes("Illegal"))return{illegal:!0,illegalBy:{msg:l.message,context:s.slice(C-100,C+100),mode:l.mode},sofar:ie,relevance:0,value:Z(s),emitter:w};if(E)return{illegal:!1,relevance:0,value:Z(s),emitter:w,language:n,top:f,errorRaised:l};throw l}}function Q(n){const s={relevance:0,emitter:new a.__emitter(a),value:Z(n),illegal:!1,top:r};return s.emitter.addText(n),s}function ee(n,s){s=s||a.languages||Object.keys(t);const d=Q(n),_=s.filter(k).filter(Ne).map(v=>L(v,n,!1));_.unshift(d);const N=_.sort((v,T)=>{if(v.relevance!==T.relevance)return T.relevance-v.relevance;if(v.language&&T.language){if(k(v.language).supersetOf===T.language)return 1;if(k(T.language).supersetOf===v.language)return-1}return 0}),[B,m]=N,A=B;return A.second_best=m,A}function Et(n){return a.tabReplace||a.useBR?n.replace(p,s=>s===`
`?a.useBR?"<br>":s:a.tabReplace?s.replace(/\t/g,a.tabReplace):s):n}function bt(n,s,d){const _=s?i[s]:d;n.classList.add("hljs"),_&&n.classList.add(_)}const _t={"before:highlightElement":({el:n})=>{a.useBR&&(n.innerHTML=n.innerHTML.replace(/\n/g,"").replace(/<br[ /]*>/g,`
`))},"after:highlightElement":({result:n})=>{a.useBR&&(n.value=n.value.replace(/\n/g,"<br>"))}},Rt=/^(<[^>]+>|\t)+/gm,xt={"after:highlightElement":({result:n})=>{a.tabReplace&&(n.value=n.value.replace(Rt,s=>s.replace(/\t/g,a.tabReplace)))}};function $(n){let s=null;const d=g(n);if(u(d))return;G("before:highlightElement",{el:n,language:d}),s=n;const _=s.textContent,N=d?R(_,{language:d,ignoreIllegals:!0}):ee(_);G("after:highlightElement",{el:n,result:N,text:_}),n.innerHTML=N.value,bt(n,d,N.language),n.result={language:N.language,re:N.relevance,relavance:N.relevance},N.second_best&&(n.second_best={language:N.second_best.language,re:N.second_best.relevance,relavance:N.second_best.relevance})}function Mt(n){n.useBR&&(y("10.3.0","'useBR' will be removed entirely in v11.0"),y("10.3.0","Please see https://github.com/highlightjs/highlight.js/issues/2559")),a=_e(a,n)}const te=()=>{if(te.called)return;te.called=!0,y("10.6.0","initHighlighting() is deprecated.  Use highlightAll() instead."),document.querySelectorAll("pre code").forEach($)};function Nt(){y("10.6.0","initHighlightingOnLoad() is deprecated.  Use highlightAll() instead."),ne=!0}let ne=!1;function xe(){if(document.readyState==="loading"){ne=!0;return}document.querySelectorAll("pre code").forEach($)}function wt(){ne&&xe()}typeof window!="undefined"&&window.addEventListener&&window.addEventListener("DOMContentLoaded",wt,!1);function Ot(n,s){let d=null;try{d=s(e)}catch(_){if(J("Language definition for '{}' could not be registered.".replace("{}",n)),E)J(_);else throw _;d=r}d.name||(d.name=n),t[n]=d,d.rawDefinition=s.bind(null,e),d.aliases&&Me(d.aliases,{languageName:n})}function yt(n){delete t[n];for(const s of Object.keys(i))i[s]===n&&delete i[s]}function mt(){return Object.keys(t)}function At(n){y("10.4.0","requireLanguage will be removed entirely in v11."),y("10.4.0","Please see https://github.com/highlightjs/highlight.js/pull/2844");const s=k(n);if(s)return s;throw new Error("The '{}' language is required, but not loaded.".replace("{}",n))}function k(n){return n=(n||"").toLowerCase(),t[n]||t[i[n]]}function Me(n,{languageName:s}){typeof n=="string"&&(n=[n]),n.forEach(d=>{i[d.toLowerCase()]=s})}function Ne(n){const s=k(n);return s&&!s.disableAutodetect}function vt(n){n["before:highlightBlock"]&&!n["before:highlightElement"]&&(n["before:highlightElement"]=s=>{n["before:highlightBlock"](Object.assign({block:s.el},s))}),n["after:highlightBlock"]&&!n["after:highlightElement"]&&(n["after:highlightElement"]=s=>{n["after:highlightBlock"](Object.assign({block:s.el},s))})}function kt(n){vt(n),c.push(n)}function G(n,s){const d=n;c.forEach(function(_){_[d]&&_[d](s)})}function St(n){return y("10.2.0","fixMarkup will be removed entirely in v11.0"),y("10.2.0","Please see https://github.com/highlightjs/highlight.js/issues/2534"),Et(n)}function Lt(n){return y("10.7.0","highlightBlock will be removed entirely in v12.0"),y("10.7.0","Please use highlightElement now."),$(n)}Object.assign(e,{highlight:R,highlightAuto:ee,highlightAll:xe,fixMarkup:St,highlightElement:$,highlightBlock:Lt,configure:Mt,initHighlighting:te,initHighlightingOnLoad:Nt,registerLanguage:Ot,unregisterLanguage:yt,listLanguages:mt,getLanguage:k,registerAliases:Me,requireLanguage:At,autoDetection:Ne,inherit:_e,addPlugin:kt,vuePlugin:ft(e).VuePlugin}),e.debugMode=function(){E=!1},e.safeMode=function(){E=!0},e.versionString=ut;for(const n in j)typeof j[n]=="object"&&ae(j[n]);return Object.assign(e,j),e.addPlugin(_t),e.addPlugin(ht),e.addPlugin(xt),e}({});ye.exports=pt}}]);})();

//# sourceMappingURL=1978.adc78ef1.chunk.js.map