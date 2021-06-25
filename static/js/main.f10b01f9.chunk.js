(this["webpackJsonpportoflio-website-react"]=this["webpackJsonpportoflio-website-react"]||[]).push([[0],{65:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a(10),r=a.n(n),o=(a(65),a(53)),s=a(95),c=a(97),l=a(102),m=a(109),g=a(33),d=a(103),j=a(104),h=a(52),p=a.n(h),b=a(108),u=a(98),f=a(99),x=a(100),O=a(101),v=a(79),w=a(96),y=a(2),k=function(){var e=Object(s.a)({imageContainer:{flex:1,display:"flex",flexDirection:"row"},imageLink:{height:32,width:32}})();return Object(y.jsx)("div",{className:e.imageContainer,children:[{name:"Github",link:"https://github.com/justvinny",image:"/images/GitHub-Mark-32px.png",imageAlt:"Github Logo"},{name:"Instagram",link:"https://www.instagram.com/vinson.beduya/",image:"/images/Instagram_AppIcon_Aug2017.png",imageAlt:"Instagram Logo"},{name:"LinkedIn",link:"https://www.linkedin.com/in/vinson-beduya/",image:"/images/LI-In-Bug.png",imageAlt:"LinkedIn Logo"}].map((function(t){return Object(y.jsx)(w.a,{href:t.link,target:"_blank",rel:"noopener",children:Object(y.jsx)(c.a,{children:Object(y.jsx)("img",{className:e.imageLink,src:t.image,alt:t.imageAlt})})},t.name)}))})},I=function(){var e=Object(v.a)({socials:{display:"flex",flexDirection:"column",alignItems:"center"},boldText:{fontWeight:"900"}})();return Object(y.jsxs)("div",{className:e.socials,children:[Object(y.jsx)(g.a,{className:e.boldText,children:"SOCIALS"}),Object(y.jsx)(k,{})]})},C=function(e){var t=e.showDrawer,a=e.toggleDrawer,i=Object(s.a)({list:{width:250},listItem:{marginLeft:10},listItemSocials:{textAlign:"center"},topMargin:{marginTop:10}})();return Object(y.jsx)(b.a,{anchor:"right",open:t,onClose:a,children:Object(y.jsxs)(u.a,{className:i.list,children:[Object(y.jsx)(f.a,{className:i.marginTop}),Object(y.jsx)(x.a,{button:!0,children:Object(y.jsx)(O.a,{className:i.listItem,primary:"HOME"})}),Object(y.jsx)(x.a,{button:!0,children:Object(y.jsx)(O.a,{className:i.listItem,primary:"PROJECTS"})}),Object(y.jsx)(x.a,{button:!0,children:Object(y.jsx)(O.a,{className:i.listItem,primary:"CONTACT ME"})}),Object(y.jsx)(f.a,{}),Object(y.jsx)(I,{})]})})},L=function(e){var t=e.responsiveMenuQuery,a=e.responsiveHeaderQuery,n=Object(s.a)({root:{display:"flex",justifyContent:"space-between",flexDirection:"row-reverse"},headerName:{fontFamily:"Impact",letterSpacing:2},appBarColor:{backgroundColor:"#1e1f22"}})(),r=Object(i.useState)(!1),h=Object(o.a)(r,2),b=h[0],u=h[1],f=function(){return u(!b)};return Object(y.jsxs)("div",{children:[Object(y.jsx)(d.a,{position:"sticky",className:n.appBarColor,children:Object(y.jsxs)(j.a,{className:n.root,children:[function(){var e=function(){return Object(y.jsx)(c.a,{color:"inherit",onClick:f,children:Object(y.jsx)(p.a,{})})};return t?Object(y.jsxs)("div",{children:[Object(y.jsx)(l.a,{color:"inherit",children:Object(y.jsx)(m.a,{fontWeight:"fontWeightBold",children:"Contact Me"})}),Object(y.jsx)(l.a,{color:"inherit",children:Object(y.jsx)(m.a,{fontWeight:"fontWeightBold",children:"Projects"})}),Object(y.jsx)(l.a,{color:"inherit",children:Object(y.jsx)(m.a,{fontWeight:"fontWeightBold",children:"Home"})}),e()]}):e()}(),a?Object(y.jsx)(g.a,{variant:"h4",className:n.headerName,children:"PORTFOLIO"}):Object(y.jsx)(g.a,{variant:"h5",className:n.headerName,children:"PORTFOLIO"})]})}),Object(y.jsx)(C,{showDrawer:b,toggleDrawer:f})]})},D=a(107),N=a(13),R=a(105),A=a(110),S=a(106),B=function(e){var t=e.projects,a=Object(s.a)((function(e){var t,a;return{featured:(t={display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",marginBottom:10,marginLeft:10,marginRight:10},Object(N.a)(t,e.breakpoints.up("md"),{marginLeft:"10vw",marginRight:"10vw"}),Object(N.a)(t,e.breakpoints.up("lg"),{flexDirection:"row"}),t),featuredAlt:(a={display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",marginBottom:10,marginLeft:10,marginRight:10},Object(N.a)(a,e.breakpoints.up("md"),{marginLeft:"10vw",marginRight:"10vw"}),Object(N.a)(a,e.breakpoints.up("lg"),{flexDirection:"row-reverse"}),a),featuredBody:Object(N.a)({display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:10},e.breakpoints.up("md"),{marginLeft:"10vw",marginRight:"10vw"}),cardImg:Object(N.a)({margin:0,padding:0},e.breakpoints.up("md"),{marginLeft:10,marginRight:10})}}))(),i=!1;return t.map((function(e){return i=!i,Object(y.jsxs)(R.a,{className:"".concat(i?a.featured:a.featuredAlt," landscapeView"),elevation:5,children:[Object(y.jsx)(S.a,{component:"img",image:e.image,alt:e.imageAlt,className:a.cardImg}),Object(y.jsxs)("div",{className:a.featuredBody,children:[Object(y.jsx)(g.a,{variant:"h6",children:e.title}),Object(y.jsx)(g.a,{variant:"body2",children:Object(y.jsx)(w.a,{href:e.link,target:"_blank",rel:"noopener",children:"Github Source Code"})}),Object(y.jsx)(g.a,{variant:"body2",paragraph:!0,children:e.shortDescription}),Object(y.jsx)("ul",{children:e.detailedDescription.map((function(e){return Object(y.jsx)("li",{children:Object(y.jsx)(g.a,{variant:"body2",children:e})},e)}))})]})]},e.title)}))},T=function(){var e=Object(s.a)((function(e){return{home:{display:"flex",flexDirection:"column"},aboutMe:Object(N.a)({display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",margin:10,padding:10},e.breakpoints.up("md"),{flexDirection:"row",marginLeft:"10vw",marginRight:"10vw"}),avatarSize:{width:250,height:250,marginRight:10,marginBottom:10},photoSize:{width:500,height:350,marginRight:10,marginBottom:10},featured:Object(N.a)({display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",margin:10},e.breakpoints.up("md"),{marginLeft:"10vw",marginRight:"10vw"}),featuredHeader:Object(N.a)({marginLeft:10,marginRight:10,paddingTop:15,paddingBottom:15,borderRadius:0,backgroundColor:"#1e1f22"},e.breakpoints.up("md"),{marginLeft:"10vw",marginRight:"10vw"}),featuredText:Object(N.a)({textAlign:"center",marginLeft:10,marginRight:10,backgroundColor:"#1e1f22",color:"#fff",fontFamily:"Impact",letterSpacing:2},e.breakpoints.up("md"),{marginLeft:"10vw",marginRight:"10vw"})}}))(),t="images/profile-pic.jpg",a="A photo of myself.",i="Kia ora! I'm Vinson, a university student studying Computer Science and Software Development at\n        the Auckland University of Technology. I am particulary interested in either creating software\n        that is helpful to my daily life or making games that I find interesting. On my off days, if you\n        don't find me having a barbie with my mates or lifting iron in the gym, I'm most likely either";return Object(y.jsxs)("div",{className:e.home,children:[Object(y.jsxs)(R.a,{className:e.aboutMe,elevation:5,children:[Object(y.jsxs)("div",{children:[Object(y.jsx)(A.a,{src:t,alt:a,className:e.avatarSize}),Object(y.jsx)(I,{})]}),Object(y.jsx)(g.a,{variant:"body2",children:i})]}),Object(y.jsx)(R.a,{className:e.featuredHeader,elevation:5,children:Object(y.jsx)(g.a,{variant:"h5",className:e.featuredText,children:"FEATURED PROJECTS"})}),Object(y.jsx)(B,{projects:[{title:"Basic 2D RPG Game",image:"images/rpg-project-image.JPG",iamgeAlt:"RPG Game Screenshot with character and golem sprite.",link:"https://github.com/justvinny/rpg-game-pdc",shortDescription:"Animated 2D RPG Game made in Java and Swing by a team of 3 people for our Program Design and Construction Paper.",detailedDescription:["Simple map exploration with a 2D animated character","Classic turn based combat reminescent of old school J-RPGs.","Random monster encounters.","Treasure hunting.","Challenging(?) boss battle.","Inventory system where you can equip your character with items to make it stronger or heal up with","Event log for player interactions with different game objects such as treasures, battles, and bosses.","Map generated from ASCII text.","Camera view that centers on player."]},{title:"Password Manager (Android)",image:"images/password-manager-screens-p1.png",iamgeAlt:"Password Manager Android Application Screenshot",link:"https://github.com/justvinny/pass-vault-java-android",shortDescription:"Native android password manager application to manage all my passwords. No more getting locked out by Study Link!",detailedDescription:["Store accounts to persistent storage.","View accounts stored and copy password to clipboard.","Delete accounts from persistent storage.","Random password generator.","Username search feature.","Account sorting feature.","Import/Export CSV feature.","Create passcode and login feature using SharedPreferences."]}]})]})},P=function(){var e=Object(s.a)({profile:{width:"100vw",height:"30vh",backgroundColor:"white"},footer:{display:"flex",flexDirection:"column",alignItems:"center",width:"100vw",height:"10vh"},footerText:{marginLeft:10},poweredByImages:{"& img":{marginLeft:10,width:32}}})(),t=Object(D.a)("(min-width:800px)"),a=Object(D.a)("(min-width:600px)");return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(L,{responsiveMenuQuery:t,responsiveHeaderQuery:a}),Object(y.jsx)("main",{children:Object(y.jsx)(T,{})}),Object(y.jsxs)("footer",{className:e.footer,children:[Object(y.jsx)(g.a,{variant:"overline",children:"Powered by"}),Object(y.jsxs)("div",{className:e.poweredByImages,children:[Object(y.jsx)("img",{src:"/images/GitHub-Mark-32px.png",alt:"Github Logo"}),Object(y.jsx)("img",{src:"/images/js-logo.png",alt:"Javascript Logo"}),Object(y.jsx)("img",{src:"/logo192.png",alt:"React Logo"}),Object(y.jsx)("img",{src:"/images/material-ui-logo.png",alt:"Material UI Logo"})]}),Object(y.jsx)(g.a,{variant:"overline",children:"\xa9 Copyright 2021 Vinson Beduya"})]})]})};r.a.render(Object(y.jsx)(P,{}),document.getElementById("root"))}},[[75,1,2]]]);
//# sourceMappingURL=main.f10b01f9.chunk.js.map