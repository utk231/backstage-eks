(()=>{(self.webpackChunkapp=self.webpackChunkapp||[]).push([[339],{81958:function(n){function s(a){const e=["add","and","cmp","cmpg","cmpl","const","div","double","float","goto","if","int","long","move","mul","neg","new","nop","not","or","rem","return","shl","shr","sput","sub","throw","ushr","xor"],i=["aget","aput","array","check","execute","fill","filled","goto/16","goto/32","iget","instance","invoke","iput","monitor","packed","sget","sparse"],t=["transient","constructor","abstract","final","synthetic","public","private","protected","static","bridge","system"];return{name:"Smali",contains:[{className:"string",begin:'"',end:'"',relevance:0},a.COMMENT("#","$",{relevance:0}),{className:"keyword",variants:[{begin:"\\s*\\.end\\s[a-zA-Z0-9]*"},{begin:"^[ ]*\\.[a-zA-Z]*",relevance:0},{begin:"\\s:[a-zA-Z_0-9]*",relevance:0},{begin:"\\s("+t.join("|")+")"}]},{className:"built_in",variants:[{begin:"\\s("+e.join("|")+")\\s"},{begin:"\\s("+e.join("|")+")((-|/)[a-zA-Z0-9]+)+\\s",relevance:10},{begin:"\\s("+i.join("|")+")((-|/)[a-zA-Z0-9]+)*\\s",relevance:10}]},{className:"class",begin:`L[^(;:
]*;`,relevance:0},{begin:"[vp][0-9]+"}]}}n.exports=s}}]);})();

//# sourceMappingURL=react-syntax-highlighter_languages_highlight_smali.91627985.chunk.js.map