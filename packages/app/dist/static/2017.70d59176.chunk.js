(()=>{(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2017],{82017:function(F,G,q){(function(k){k(q(23326))})(function(k){"use strict";var y={},b=/[^\s\u00a0]/,m=k.Pos,z=k.cmpPos;function W(t){var l=t.search(b);return l==-1?0:l}k.commands.toggleComment=function(t){t.toggleComment()},k.defineExtension("toggleComment",function(t){t||(t=y);for(var l=this,n=1/0,e=this.listSelections(),f=null,c=e.length-1;c>=0;c--){var a=e[c].from(),i=e[c].to();a.line>=n||(i.line>=n&&(i=m(n,0)),n=a.line,f==null?l.uncomment(a,i,t)?f="un":(l.lineComment(a,i,t),f="line"):f=="un"?l.uncomment(a,i,t):l.lineComment(a,i,t))}});function D(t,l,n){return/\bstring\b/.test(t.getTokenTypeAt(m(l.line,0)))&&!/^[\'\"\`]/.test(n)}function w(t,l){var n=t.getMode();return n.useInnerComments===!1||!n.innerMode?n:t.getModeAt(l)}k.defineExtension("lineComment",function(t,l,n){n||(n=y);var e=this,f=w(e,t),c=e.getLine(t.line);if(!(c==null||D(e,t,c))){var a=n.lineComment||f.lineComment;if(!a){(n.blockCommentStart||f.blockCommentStart)&&(n.fullLines=!0,e.blockComment(t,l,n));return}var i=Math.min(l.ch!=0||l.line==t.line?l.line+1:l.line,e.lastLine()+1),C=n.padding==null?" ":n.padding,g=n.commentBlankLines||t.line==l.line;e.operation(function(){if(n.indent){for(var u=null,r=t.line;r<i;++r){var s=e.getLine(r),v=s.slice(0,W(s));(u==null||u.length>v.length)&&(u=v)}for(var r=t.line;r<i;++r){var s=e.getLine(r),h=u.length;!g&&!b.test(s)||(s.slice(0,h)!=u&&(h=W(s)),e.replaceRange(u+a+C,m(r,0),m(r,h)))}}else for(var r=t.line;r<i;++r)(g||b.test(e.getLine(r)))&&e.replaceRange(a+C,m(r,0))})}}),k.defineExtension("blockComment",function(t,l,n){n||(n=y);var e=this,f=w(e,t),c=n.blockCommentStart||f.blockCommentStart,a=n.blockCommentEnd||f.blockCommentEnd;if(!c||!a){(n.lineComment||f.lineComment)&&n.fullLines!=!1&&e.lineComment(t,l,n);return}if(!/\bcomment\b/.test(e.getTokenTypeAt(m(t.line,0)))){var i=Math.min(l.line,e.lastLine());i!=t.line&&l.ch==0&&b.test(e.getLine(i))&&--i;var C=n.padding==null?" ":n.padding;t.line>i||e.operation(function(){if(n.fullLines!=!1){var g=b.test(e.getLine(i));e.replaceRange(C+a,m(i)),e.replaceRange(c+C,m(t.line,0));var u=n.blockCommentLead||f.blockCommentLead;if(u!=null)for(var r=t.line+1;r<=i;++r)(r!=i||g)&&e.replaceRange(u+C,m(r,0))}else{var s=z(e.getCursor("to"),l)==0,v=!e.somethingSelected();e.replaceRange(a,l),s&&e.setSelection(v?l:e.getCursor("from"),l),e.replaceRange(c,t)}})}}),k.defineExtension("uncomment",function(t,l,n){n||(n=y);var e=this,f=w(e,t),c=Math.min(l.ch!=0||l.line==t.line?l.line:l.line-1,e.lastLine()),a=Math.min(t.line,c),i=n.lineComment||f.lineComment,C=[],g=n.padding==null?" ":n.padding,u;e:{if(!i)break e;for(var r=a;r<=c;++r){var s=e.getLine(r),v=s.indexOf(i);if(v>-1&&!/comment/.test(e.getTokenTypeAt(m(r,v+1)))&&(v=-1),v==-1&&b.test(s)||v>-1&&b.test(s.slice(0,v)))break e;C.push(s)}if(e.operation(function(){for(var d=a;d<=c;++d){var S=C[d-a],p=S.indexOf(i),L=p+i.length;p<0||(S.slice(L,L+g.length)==g&&(L+=g.length),u=!0,e.replaceRange("",m(d,p),m(d,L)))}}),u)return!0}var h=n.blockCommentStart||f.blockCommentStart,x=n.blockCommentEnd||f.blockCommentEnd;if(!h||!x)return!1;var M=n.blockCommentLead||f.blockCommentLead,E=e.getLine(a),_=E.indexOf(h);if(_==-1)return!1;var A=c==a?E:e.getLine(c),R=A.indexOf(x,c==a?_+h.length:0),B=m(a,_+1),N=m(c,R+1);if(R==-1||!/comment/.test(e.getTokenTypeAt(B))||!/comment/.test(e.getTokenTypeAt(N))||e.getRange(B,N,`
`).indexOf(x)>-1)return!1;var O=E.lastIndexOf(h,t.ch),T=O==-1?-1:E.slice(0,t.ch).indexOf(x,O+h.length);if(O!=-1&&T!=-1&&T+x.length!=t.ch)return!1;T=A.indexOf(x,l.ch);var j=A.slice(l.ch).lastIndexOf(h,T-l.ch);return O=T==-1||j==-1?-1:l.ch+j,T!=-1&&O!=-1&&O!=l.ch?!1:(e.operation(function(){e.replaceRange("",m(c,R-(g&&A.slice(R-g.length,R)==g?g.length:0)),m(c,R+x.length));var d=_+h.length;if(g&&E.slice(d,d+g.length)==g&&(d+=g.length),e.replaceRange("",m(a,_),m(a,d)),M)for(var S=a+1;S<=c;++S){var p=e.getLine(S),L=p.indexOf(M);if(!(L==-1||b.test(p.slice(0,L)))){var I=L+M.length;g&&p.slice(I,I+g.length)==g&&(I+=g.length),e.replaceRange("",m(S,L),m(S,I))}}}),!0)})})}}]);})();

//# sourceMappingURL=2017.70d59176.chunk.js.map