(()=>{(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9066],{9565:function(s){function a(e){const n="primitive rsc_template",t="group clone ms master location colocation order fencing_topology rsc_ticket acl_target acl_group user role tag xml",r="property rsc_defaults op_defaults",i="params meta operations op rule attributes utilization",o="read write deny defined not_defined in_range date spec in ref reference attribute type xpath version and or lt gt tag lte gte eq ne \\",c="number string",l="Master Started Slave Stopped start promote demote stop monitor true false";return{name:"crmsh",aliases:["crm","pcmk"],case_insensitive:!0,keywords:{keyword:i+" "+o+" "+c,literal:l},contains:[e.HASH_COMMENT_MODE,{beginKeywords:"node",starts:{end:"\\s*([\\w_-]+:)?",starts:{className:"title",end:"\\s*[\\$\\w_][\\w_-]*"}}},{beginKeywords:n,starts:{className:"title",end:"\\s*[\\$\\w_][\\w_-]*",starts:{end:"\\s*@?[\\w_][\\w_\\.:-]*"}}},{begin:"\\b("+t.split(" ").join("|")+")\\s+",keywords:t,starts:{className:"title",end:"[\\$\\w_][\\w_-]*"}},{beginKeywords:r,starts:{className:"title",end:"\\s*([\\w_-]+:)?"}},e.QUOTE_STRING_MODE,{className:"meta",begin:"(ocf|systemd|service|lsb):[\\w_:-]+",relevance:0},{className:"number",begin:"\\b\\d+(\\.\\d+)?(ms|s|h|m)?",relevance:0},{className:"literal",begin:"[-]?(infinity|inf)",relevance:0},{className:"attr",begin:/([A-Za-z$_#][\w_-]+)=/,relevance:0},{className:"tag",begin:"</?",end:"/?>",relevance:0}]}}s.exports=a}}]);})();

//# sourceMappingURL=react-syntax-highlighter_languages_highlight_crmsh.dcd4c043.chunk.js.map