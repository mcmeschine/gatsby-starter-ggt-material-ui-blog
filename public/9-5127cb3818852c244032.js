(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{287:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(304),i=a.n(l),o=a(290),s=a.n(o),c=a(89),u=a(356),d=a.n(u),f=a(294),m=a.n(f),p=a(295),g=a.n(p),v=a(289),b=Object(n.memo)(Object(c.withStyles)(function(e){var t;return{avatar:{alignItems:"normal",height:60,margin:10,marginRight:3*e.spacing.unit,width:60},paper:(t={backgroundColor:e.palette.grey[300],padding:"8px",margin:"0 auto",wordWrap:"break-word"},t[e.breakpoints.up("lg")]={width:"25%"},t[e.breakpoints.down("lg")]={width:"30%"},t[e.breakpoints.down("md")]={width:"45%"},t[e.breakpoints.down("sm")]={width:"65%"},t[e.breakpoints.down("xs")]={width:"95%"},t),wrapper:{alignItems:"center",display:"flex",justifyContent:"center"}}},{withTheme:!0})(function(e){var t=e.classes,a=Object(v.a)(),n=a.avatarImgSrc,l=a.bioLineOne,i=a.bioLineTwo;return r.a.createElement(m.a,{className:t.paper,elevation:12},r.a.createElement("section",{className:t.wrapper},r.a.createElement(d.a,{alt:"Remy Sharp",src:n,className:t.avatar}),r.a.createElement("div",null,r.a.createElement(g.a,{color:"secondary",variant:"body2"},l),r.a.createElement(g.a,{color:"secondary",variant:"body2"},i))))})),y=(a(358),a(300)),h=a.n(y),E=a(292),N=a.n(E),w=a(361),x=a.n(w),P=a(293),j=a.n(P),O=a(365),_=a.n(O),k=a(363),S=a.n(k),C=a(90),M=a(360),T=Object(n.memo)(Object(c.withStyles)(function(e){return{button:{margin:e.spacing.unit/2},gradient:{background:"linear-gradient(180deg, "+e.palette.secondary.light+" 0%, "+e.palette.primary.dark+" 50%, "+e.palette.secondary.light+" 100%)",height:"100vh",padding:2*e.spacing.unit},link:{color:e.palette.secondary.contrastText,textDecoration:"none"}}})(function(e){var t=e.classes,a=Object(v.a)().postCardReadBtnText;return M.data.allMdx.edges.map(function(e){return r.a.createElement(s.a,{key:e.node.frontmatter.title,item:!0,xs:12,sm:6,md:6,lg:4},r.a.createElement(N.a,null,r.a.createElement(x.a,{title:e.node.frontmatter.title,subheader:e.node.timeToRead+" min read"}),r.a.createElement(j.a,null,r.a.createElement(g.a,{component:"p"},e.node.excerpt)),r.a.createElement(S.a,null),r.a.createElement(_.a,{disableActionSpacing:!0},r.a.createElement(C.Link,{className:t.link,to:e.node.fields.slug},r.a.createElement(h.a,{className:t.button,variant:"contained",color:"secondary"},a)))))})})),R=Object(n.memo)(Object(c.withStyles)(function(e){return{button:{margin:e.spacing.unit/2},link:{color:e.palette.secondary.contrastText,textDecoration:"none"},pageWrapper:{width:"100%",margin:"0px",marginTop:e.spacing.unit,padding:2*e.spacing.unit}}})(function(e){var t=e.classes,a=e.postEdges;return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,{className:t.pageWrapper,container:!0,direction:"row",spacing:24},r.a.createElement(s.a,{item:!0,xs:12},r.a.createElement(b,null)),r.a.createElement(T,{postEdges:a})))})),A=a(302),W=a(307),D=a(297);t.default=function(e){e.classes;var t=Object(v.a)().seoKeywords;return r.a.createElement(W.a,null,r.a.createElement(A.a,{title:"Home",keywords:t}),r.a.createElement(i.a,{in:!0,timeout:{enter:D.a}},r.a.createElement("div",null,r.a.createElement(R,null))))}},292:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}});var r=n(a(305))},293:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}});var r=n(a(306))},305:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var r=n(a(6)),l=n(a(18)),i=n(a(0)),o=(n(a(1)),n(a(288))),s=n(a(294)),c=n(a(143)),u={root:{overflow:"hidden"}};function d(e){var t=e.classes,a=e.className,n=e.raised,c=(0,l.default)(e,["classes","className","raised"]);return i.default.createElement(s.default,(0,r.default)({className:(0,o.default)(t.root,a),elevation:n?8:1},c))}t.styles=u,d.defaultProps={raised:!1};var f=(0,c.default)(u,{name:"MuiCard"})(d);t.default=f},306:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var r=n(a(6)),l=n(a(18)),i=n(a(0)),o=(n(a(1)),n(a(288))),s=(a(22),n(a(143))),c={root:{padding:16,"&:last-child":{paddingBottom:24}}};function u(e){var t=e.classes,a=e.className,n=e.component,s=(0,l.default)(e,["classes","className","component"]);return i.default.createElement(n,(0,r.default)({className:(0,o.default)(t.root,a)},s))}t.styles=c,u.defaultProps={component:"div"};var d=(0,s.default)(c,{name:"MuiCardContent"})(u);t.default=d},356:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}});var r=n(a(357))},357:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var r=n(a(13)),l=n(a(6)),i=n(a(18)),o=n(a(0)),s=(n(a(1)),n(a(288))),c=(a(22),n(a(143))),u=function(e){return{root:{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),borderRadius:"50%",overflow:"hidden",userSelect:"none"},colorDefault:{color:e.palette.background.default,backgroundColor:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[600]},img:{width:"100%",height:"100%",textAlign:"center",objectFit:"cover"}}};function d(e){var t=e.alt,a=e.children,n=e.childrenClassName,c=e.classes,u=e.className,d=e.component,f=e.imgProps,m=e.sizes,p=e.src,g=e.srcSet,v=(0,i.default)(e,["alt","children","childrenClassName","classes","className","component","imgProps","sizes","src","srcSet"]),b=null,y=p||g;return b=y?o.default.createElement("img",(0,l.default)({alt:t,src:p,srcSet:g,sizes:m,className:c.img},f)):n&&o.default.isValidElement(a)?o.default.cloneElement(a,{className:(0,s.default)(n,a.props.className)}):a,o.default.createElement(d,(0,l.default)({className:(0,s.default)(c.root,c.system,(0,r.default)({},c.colorDefault,!y),u)},v),b)}t.styles=u,d.defaultProps={component:"div"};var f=(0,c.default)(u,{name:"MuiAvatar"})(d);t.default=f},358:function(e,t,a){"use strict";a(359)("link",function(e){return function(t){return e(this,"a","href",t)}})},359:function(e,t,a){var n=a(15),r=a(31),l=a(33),i=/"/g,o=function(e,t,a,n){var r=String(l(e)),o="<"+t;return""!==a&&(o+=" "+a+'="'+String(n).replace(i,"&quot;")+'"'),o+">"+r+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(o),n(n.P+n.F*r(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},361:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}});var r=n(a(362))},362:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var r=n(a(6)),l=n(a(18)),i=n(a(0)),o=(n(a(1)),n(a(288))),s=(a(22),n(a(143))),c=n(a(295)),u={root:{display:"flex",alignItems:"center",padding:16},avatar:{flex:"0 0 auto",marginRight:16},action:{flex:"0 0 auto",alignSelf:"flex-start",marginTop:-8,marginRight:-8},content:{flex:"1 1 auto"},title:{},subheader:{}};function d(e){var t=e.action,a=e.avatar,n=e.classes,s=e.className,u=e.component,d=e.disableTypography,f=e.subheader,m=e.subheaderTypographyProps,p=e.title,g=e.titleTypographyProps,v=(0,l.default)(e,["action","avatar","classes","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"]),b=p;null==b||b.type===c.default||d||(b=i.default.createElement(c.default,(0,r.default)({variant:a?"body2":"headline",internalDeprecatedVariant:!0,className:n.title,component:"span"},g),b));var y=f;return null==y||y.type===c.default||d||(y=i.default.createElement(c.default,(0,r.default)({variant:a?"body2":"body1",className:n.subheader,color:"textSecondary",component:"span"},m),y)),i.default.createElement(u,(0,r.default)({className:(0,o.default)(n.root,s)},v),a&&i.default.createElement("div",{className:n.avatar},a),i.default.createElement("div",{className:n.content},b,y),t&&i.default.createElement("div",{className:n.action},t))}t.styles=u,d.defaultProps={component:"div",disableTypography:!1};var f=(0,s.default)(u,{name:"MuiCardHeader"})(d);t.default=f},363:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}});var r=n(a(364))},364:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var r=n(a(6)),l=n(a(13)),i=n(a(18)),o=n(a(0)),s=(n(a(1)),n(a(288))),c=(a(22),n(a(143))),u=a(144),d=function(e){return{root:{height:1,margin:0,border:"none",flexShrink:0,backgroundColor:e.palette.divider},absolute:{position:"absolute",bottom:0,left:0,width:"100%"},inset:{marginLeft:72},light:{backgroundColor:(0,u.fade)(e.palette.divider,.08)},middle:{marginLeft:2*e.spacing.unit,marginRight:2*e.spacing.unit}}};function f(e){var t,a=e.absolute,n=e.classes,c=e.className,u=e.component,d=e.inset,f=e.light,m=e.variant,p=(0,i.default)(e,["absolute","classes","className","component","inset","light","variant"]);return o.default.createElement(u,(0,r.default)({className:(0,s.default)(n.root,(t={},(0,l.default)(t,n.inset,d||"inset"===m),(0,l.default)(t,n.middle,"middle"===m),(0,l.default)(t,n.absolute,a),(0,l.default)(t,n.light,f),t),c)},p))}t.styles=d,f.defaultProps={absolute:!1,component:"hr",light:!1,variant:"fullWidth"};var m=(0,c.default)(d,{name:"MuiDivider"})(f);t.default=m},365:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}});var r=n(a(366))},366:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var r=n(a(6)),l=n(a(13)),i=n(a(18)),o=n(a(0)),s=(n(a(1)),n(a(288))),c=n(a(143)),u=a(367);a(300);var d={root:{display:"flex",alignItems:"center",boxSizing:"border-box",padding:"8px 4px"},disableActionSpacing:{padding:8},action:{margin:"0 4px"}};function f(e){var t=e.disableActionSpacing,a=e.children,n=e.classes,c=e.className,d=(0,i.default)(e,["disableActionSpacing","children","classes","className"]);return o.default.createElement("div",(0,r.default)({className:(0,s.default)(n.root,(0,l.default)({},n.disableActionSpacing,t),c)},d),t?a:(0,u.cloneChildrenWithClassName)(a,n.action))}t.styles=d,f.defaultProps={disableActionSpacing:!1};var m=(0,c.default)(d,{name:"MuiCardActions"})(f);t.default=m},367:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.cloneElementWithClassName=i,t.cloneChildrenWithClassName=function(e,t){return r.default.Children.map(e,function(e){return r.default.isValidElement(e)&&i(e,t)})},t.isMuiElement=function(e,t){return r.default.isValidElement(e)&&-1!==t.indexOf(e.type.muiName)},t.setRef=function(e,t){"function"==typeof e?e(t):e&&(e.current=t)};var r=n(a(0)),l=n(a(288));function i(e,t){return r.default.cloneElement(e,{className:(0,l.default)(e.props.className,t)})}}}]);
//# sourceMappingURL=9-5127cb3818852c244032.js.map