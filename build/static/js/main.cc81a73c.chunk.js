(this.webpackJsonpelectronikz=this.webpackJsonpelectronikz||[]).push([[0],{101:function(e,t,a){},108:function(e,t,a){},111:function(e,t,a){},112:function(e,t,a){},113:function(e,t,a){},114:function(e,t,a){},115:function(e,t,a){},117:function(e,t,a){},118:function(e,t,a){"use strict";a.r(t);var n,i,r=a(0),s=a.n(r),o=a(12),c=a.n(o),l=a(23),d=(a(99),a(28)),m=a.n(d),p=a(30),u=a(38),h=a(31),g=a(32),b=a(35),f=a(34),j=a(14),v=(a(101),a(78)),O=["title","titleId"];function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function x(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}function k(e,t){var a=e.title,s=e.titleId,o=x(e,O);return r.createElement("svg",y({width:"50px",height:"39px",viewBox:"0 0 50 39",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",ref:t,"aria-labelledby":s},o),void 0===a?r.createElement("title",{id:s},"Group"):a?r.createElement("title",{id:s},a):null,n||(n=r.createElement("desc",null,"Created with Sketch.")),i||(i=r.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},r.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},r.createElement("g",{id:"Group",transform:"translate(90.000000, 38.000000)"},r.createElement("polygon",{id:"Rectangle",fill:"#808282",points:"3 14 25 26.5 47 14 40.855176 39 9.08421785 39"}),r.createElement("polygon",{id:"Triangle",fillOpacity:.262838724,fill:"#101A1A",points:"25 8 40 39 10 39"}),r.createElement("circle",{id:"Oval",fill:"#5E6363",cx:2,cy:9,r:2}),r.createElement("circle",{id:"Oval",fill:"#5E6363",cx:25,cy:2,r:2}),r.createElement("circle",{id:"Oval",fill:"#5E6363",cx:48,cy:9,r:2}))))))}var w=r.forwardRef(k),S=(a.p,a(55)),C=(a(120),a(106),function(){var e=Object(u.a)(m.a.mark((function e(t,a){var n,i,r,s;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return n=N.doc("users/".concat(t.uid)),e.next=5,n.get();case 5:if(e.sent.exists){e.next=17;break}return i=t.displayName,r=t.email,s=new Date,e.prev=9,e.next=12,n.set(Object(p.a)({displayName:i,email:r,createdAt:s},a));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.log("error creating user",e.t0.message);case 17:return e.abrupt("return",n);case 18:case"end":return e.stop()}}),e,null,[[9,14]])})));return function(t,a){return e.apply(this,arguments)}}());S.a.initializeApp({apiKey:"AIzaSyA_0w05NPj9epbKZu7U9p-QWfLkdtxGwFU",authDomain:"electronikz-efab9.firebaseapp.com",projectId:"electronikz-efab9",storageBucket:"electronikz-efab9.appspot.com",messagingSenderId:"669003384043",appId:"1:669003384043:web:f4945f1f2d31417171aaae",measurementId:"G-BXSDNPLJ7E"});var U=S.a.auth(),N=S.a.firestore(),A=new S.a.auth.GoogleAuthProvider;A.setCustomParameters({prompt:"select_account"});var _=function(){return U.signInWithPopup(A)},L=(S.a,a(108),a(3)),P=Object(v.a)((function(e){return{currentUser:e.user.currentUser}}))((function(e){var t=e.currentUser;return Object(L.jsxs)("div",{className:"header",children:[Object(L.jsx)(l.b,{className:"logo-container",to:"/",children:Object(L.jsx)(w,{className:"logo"})}),Object(L.jsxs)("div",{className:"options",children:[Object(L.jsx)(l.b,{className:"option",to:"/shop",children:"SHOP"}),Object(L.jsx)(l.b,{className:"option",to:"/shop",children:"CONTACT"}),t?Object(L.jsx)("div",{className:"option",onClick:function(){return U.signOut()},children:"SIGN OUT"}):Object(L.jsx)(l.b,{className:"option",to:"/signin",children:"SIGN IN/UP"})]})]})})),D=(a(111),a(52)),E=(a(112),Object(j.f)((function(e){var t=e.title,a=e.imageUrl,n=e.size,i=e.history,r=e.linkUrl,s=e.match;return Object(L.jsxs)("div",{className:"".concat(n," menu-item"),onClick:function(){return i.push("".concat(s.url).concat(r))},children:[Object(L.jsx)("div",{className:"content",children:Object(L.jsx)("h1",{className:"title",children:t.toUpperCase()})}),Object(L.jsx)("div",{className:"background-image",style:{backgroundImage:"url(".concat(a,")")}}),Object(L.jsx)("div",{className:"content",children:Object(L.jsx)("h4",{className:"subtitle",children:"View more.. "})})]})}))),I=(a(113),["id"]),W=function(e){Object(b.a)(a,e);var t=Object(f.a)(a);function a(){var e;return Object(h.a)(this,a),(e=t.call(this)).state={sections:[{title:"Laptops",imageUrl:"https://i.ibb.co/JF36F5b/mac2.jpg",id:1,linkUrl:"laptops"},{title:"Phones",imageUrl:"https://i.ibb.co/P9vJcGQ/iphone.jpg",id:2,linkUrl:"phones"},{title:"TV",imageUrl:"https://i.ibb.co/r2c8h8K/TV2.jpg",id:3,linkUrl:"tv"},{title:"Smart Home",imageUrl:"https://i.ibb.co/dtJQf0X/smart2.jpg",id:4,linkUrl:"smartHome"},{title:"Whats the best",imageUrl:"https://i.ibb.co/GsLSGWw/wash.png",id:5,size:"large",linkUrl:"theBest"},{title:"Washing Machine",imageUrl:"https://i.ibb.co/P5QfYzn/Wash.jpg",id:6,linkUrl:"washingMachine"},{title:"Home & Kitchen",imageUrl:"https://i.ibb.co/sP4gz9M/vac.jpg",id:8,linkUrl:"Home&Kitchen"},{title:"Personal Fitness",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"xl",id:9,linkUrl:"fitness"}]},e}return Object(g.a)(a,[{key:"render",value:function(){return Object(L.jsx)("div",{className:"directory-menu",children:this.state.sections.map((function(e){var t=e.id,a=Object(D.a)(e,I);return Object(L.jsx)(E,Object(p.a)({},a),t)}))})}}]),a}(s.a.Component),H=function(){return Object(L.jsx)("div",{className:"homepage",children:Object(L.jsx)(W,{})})},T=[{id:1,title:"men's clothing",routeName:"mens",items:[{id:1,name:"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",price:109.95,description:"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",imageUrl:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"},{id:2,name:"Mens Casual Premium Slim Fit T-Shirts ",price:22.3,description:"Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",imageUrl:"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"},{id:3,name:"Mens Cotton Jacket",price:55.99,description:"great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",imageUrl:"https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"},{id:4,name:"Mens Casual Slim Fit",price:15.99,description:"The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",imageUrl:"https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"}]},{id:2,title:"jewelery",routeName:"jewelery",items:[{id:5,name:"John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",price:695,description:"From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",imageUrl:"https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg"},{id:6,name:"Solid Gold Petite Micropave ",price:168,description:"Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",imageUrl:"https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg"},{id:7,name:"White Gold Plated Princess",price:9.99,description:"Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",imageUrl:"https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg"},{id:8,name:"Pierced Owl Rose Gold Plated Stainless Steel Double",price:10.99,description:"Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",imageUrl:"https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg"}]},{id:3,title:"electronics",routeName:"electronics",items:[{id:9,name:"WD 2TB Elements Portable External Hard Drive - USB 3.0 ",price:64,description:"USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user\u2019s hardware configuration and operating system",imageUrl:"https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg"},{id:10,name:"SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",price:109,description:"Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5\u201d hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",imageUrl:"https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg"},{id:11,name:"Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",price:109,description:"3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",imageUrl:"https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg"},{id:12,name:"WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",price:114,description:"Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",imageUrl:"https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg"},{id:13,name:"Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",price:599,description:"21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",imageUrl:"https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg"},{id:14,name:"Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) \u2013 Super Ultrawide Screen QLED ",price:999.99,description:"49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",imageUrl:"https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg"}]},{id:4,title:"women's clothing",routeName:"womens",items:[{id:15,name:"BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",price:56.99,description:"Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",imageUrl:"https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg"},{id:16,name:"Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",price:29.95,description:"100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",imageUrl:"https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg"},{id:17,name:"Rain Jacket Women Windbreaker Striped Climbing Raincoats",price:39.99,description:"Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",imageUrl:"https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg"},{id:18,name:"MBJ Women's Solid Short Sleeve Boat Neck V ",price:9.85,description:"95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",imageUrl:"https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg"},{id:19,name:"Opna Women's Short Sleeve Moisture",price:7.95,description:"100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",imageUrl:"https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg"},{id:20,name:"DANVOUY Womens T Shirt Casual Cotton Short",price:12.99,description:"95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",imageUrl:"https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg"}]}],R=(a(114),function(e){e.id;var t=e.name,a=e.price,n=e.imageUrl;return Object(L.jsxs)("div",{className:"collection-item",children:[Object(L.jsx)("div",{className:"image",style:{backgroundImage:"url(".concat(n,")")}}),Object(L.jsxs)("div",{className:"collection-footer",children:[Object(L.jsx)("span",{className:"name",children:t}),Object(L.jsx)("span",{className:"price",children:a})]})]})}),F=(a(115),["id"]),M=function(e){var t=e.title,a=e.items;return Object(L.jsxs)("div",{className:"collection-preview",children:[Object(L.jsx)("h1",{className:"title",children:t.toUpperCase()}),Object(L.jsx)("div",{className:"preview",children:a.filter((function(e,t){return t<4})).map((function(e){var t=e.id,a=Object(D.a)(e,F);return Object(L.jsx)(R,Object(p.a)({},a),t)}))})]})},B=["id"],G=function(e){Object(b.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).state={collections:T},n}return Object(g.a)(a,[{key:"render",value:function(){var e=this.state.collections;return Object(L.jsx)("div",{className:"shop-page",children:e.map((function(e){var t=e.id,a=Object(D.a)(e,B);return Object(L.jsx)(M,Object(p.a)({},a),t)}))})}}]),a}(s.a.Component),z=a(50),Y=a(159),X=a(155),J=a(152),Q=a(157),V=a(154),q=a(158),Z=a(153),K=a(148),$=a(62),ee=a.n($),te=a(121),ae=a(6),ne=a(7),ie=a.n(ne),re=a(77),se=a.n(re),oe=function(e){Object(b.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).handleSubmit=function(){var e=Object(u.a)(m.a.mark((function e(t){var a,i,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=n.state,i=a.email,r=a.password,e.prev=2,e.next=5,U.signInWithEmailAndPassword(i,r);case 5:n.setState({email:"",password:""}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}(),n.handleChange=function(e){var t=e.target,a=t.value,i=t.name;n.setState(Object(z.a)({},i,a))},n.state={email:"",password:""},n}return Object(g.a)(a,[{key:"render",value:function(){var e=this.props.classes;return Object(L.jsxs)(K.a,{container:!0,component:"main",className:e.root,children:[Object(L.jsx)(J.a,{}),Object(L.jsx)(K.a,{item:!0,xs:!1,sm:4,md:7,className:e.image}),Object(L.jsx)(K.a,{item:!0,xs:12,sm:8,md:5,component:Z.a,elevation:6,square:!0,children:Object(L.jsxs)("div",{className:e.paper,children:[Object(L.jsx)(Y.a,{className:e.avatar,children:Object(L.jsx)(ee.a,{})}),Object(L.jsx)(te.a,{component:"h1",variant:"h5",children:"Sign in"}),Object(L.jsxs)("form",{className:e.form,noValidate:!0,onSubmit:this.handleSubmit,children:[Object(L.jsx)(Q.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,label:"Email Address",name:"email",type:"email",onChange:this.handleChange,value:this.state.email,autoComplete:"email",autoFocus:!0}),Object(L.jsx)(Q.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",value:this.state.password,onChange:this.handleChange,autoComplete:"current-password"}),Object(L.jsx)(V.a,{control:Object(L.jsx)(q.a,{value:"remember",color:"primary"}),label:"Remember me"}),Object(L.jsx)(X.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,children:"Sign In"}),Object(L.jsx)(X.a,{onClick:_,fullWidth:!0,variant:"contained",color:"secondary",className:e.submit,startIcon:Object(L.jsx)(se.a,{}),children:"Sign In with Google"}),Object(L.jsxs)(K.a,{container:!0,children:[Object(L.jsx)(K.a,{item:!0,xs:!0,children:Object(L.jsx)(l.b,{to:"/",variant:"body2",children:"Forgot password?"})}),Object(L.jsx)(K.a,{item:!0,children:Object(L.jsx)(l.b,{className:"option",to:"/signup",children:"Don't have an account? Sign Up"})})]})]})]})})]})}}]),a}(s.a.Component);oe.prototypes={classes:ie.a.object.isRequired};var ce=Object(ae.a)((function(e){return{root:{height:"85vh"},image:{backgroundImage:"url(https://source.unsplash.com/random)",backgroundRepeat:"no-repeat",backgroundColor:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[900],backgroundSize:"cover",backgroundPosition:"center"},paper:{margin:e.spacing(8,4),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}))(oe),le=(a(76),function(){return Object(L.jsx)("div",{className:"Sign-in-and-sign-up",children:Object(L.jsx)(ce,{})})}),de=a(156),me=(a(117),function(e){Object(b.a)(a,e);var t=Object(f.a)(a);function a(){var e;return Object(h.a)(this,a),(e=t.call(this)).handleSubmit=function(){var t=Object(u.a)(m.a.mark((function t(a){var n,i,r,s,o,c,l;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),n=e.state,i=n.displayName,r=n.email,s=n.password,o=n.confirmPassword,s===o){t.next=5;break}return alert("passwords don't match"),t.abrupt("return");case 5:return t.prev=5,t.next=8,U.createUserWithEmailAndPassword(r,s);case 8:return c=t.sent,l=c.user,t.next=12,C(l,{displayName:i});case 12:e.setState({displayName:"",email:"",password:"",confirmPassword:""}),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(5),console.error(t.t0);case 18:case"end":return t.stop()}}),t,null,[[5,15]])})));return function(e){return t.apply(this,arguments)}}(),e.handleChange=function(t){var a=t.target,n=a.name,i=a.value;e.setState(Object(z.a)({},n,i))},e.state={displayName:"",email:"",password:"",confirmPassword:""},e}return Object(g.a)(a,[{key:"render",value:function(){var e=this.props.classes,t=this.state,a=t.displayName,n=t.email,i=t.password,r=t.confirmPassword;return Object(L.jsxs)(de.a,{component:"main",maxWidth:"xs",children:[Object(L.jsx)(J.a,{}),Object(L.jsxs)("div",{className:e.paper,children:[Object(L.jsx)(Y.a,{className:e.avatar,children:Object(L.jsx)(ee.a,{})}),Object(L.jsx)(te.a,{component:"h1",variant:"h5",children:"Sign up"}),Object(L.jsxs)("form",{className:e.form,noValidate:!0,onSubmit:this.handleSubmit,children:[Object(L.jsxs)(K.a,{container:!0,spacing:2,children:[Object(L.jsx)(K.a,{item:!0,xs:12,children:Object(L.jsx)(Q.a,{autoComplete:"displayName",name:"displayName",variant:"outlined",required:!0,fullWidth:!0,value:a,onChange:this.handleChange,label:"Name",autoFocus:!0})}),Object(L.jsx)(K.a,{item:!0,xs:12,children:Object(L.jsx)(Q.a,{variant:"outlined",required:!0,fullWidth:!0,value:n,onChange:this.handleChange,label:"Email Address",name:"email",autoComplete:"email"})}),Object(L.jsx)(K.a,{item:!0,xs:12,sm:6,children:Object(L.jsx)(Q.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",value:i,onChange:this.handleChange,autoComplete:"current-password"})}),Object(L.jsx)(K.a,{item:!0,xs:12,sm:6,children:Object(L.jsx)(Q.a,{variant:"outlined",required:!0,fullWidth:!0,name:"confirmPassword",label:"Confirm Password",type:"password",value:r,onChange:this.handleChange,autoComplete:"current-password"})}),Object(L.jsx)(K.a,{item:!0,xs:12,children:Object(L.jsx)(V.a,{control:Object(L.jsx)(q.a,{value:"allowExtraEmails",color:"primary"}),label:"I want to receive inspiration, marketing promotions and updates via email."})})]}),Object(L.jsx)(X.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,children:"Sign Up"}),Object(L.jsx)(K.a,{container:!0,justifyContent:"flex-end",children:Object(L.jsx)(K.a,{item:!0,children:Object(L.jsx)(l.b,{className:"option",variant:"body2",to:"/signin ",children:"Already have an account? Sign in"})})})]})]})]})}}]),a}(s.a.Component));me.prototypes={classes:ie.a.object.isRequired};var pe=Object(ae.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}}))(me),ue=function(){return Object(L.jsx)("div",{className:"Sign-in-and-sign-up",children:Object(L.jsx)(pe,{})})},he=function(e){Object(b.a)(a,e);var t=Object(f.a)(a);function a(){var e;return Object(h.a)(this,a),(e=t.call(this)).unsubscribeFromAuth=null,e.state={currentUser:null},e}return Object(g.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.unsubscribeFromAuth=U.onAuthStateChanged(function(){var t=Object(u.a)(m.a.mark((function t(a){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!a){t.next=7;break}return t.next=3,C(a);case 3:t.sent.onSnapshot((function(t){e.setState({currentUser:Object(p.a)({id:t.id},t.data())}),console.log(e.state)})),t.next=8;break;case 7:e.setState({currentUser:a});case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},{key:"componentWillUnmount",value:function(){this.unsubscribeFromAuth()}},{key:"render",value:function(){return Object(L.jsxs)("div",{children:[Object(L.jsx)(P,{currentUser:this.state.currentUser}),Object(L.jsxs)(j.c,{children:[Object(L.jsx)(j.a,{exact:!0,path:"/",component:H}),Object(L.jsx)(j.a,{path:"/shop",component:G}),Object(L.jsx)(j.a,{path:"/SignIn",component:le}),Object(L.jsx)(j.a,{path:"/SignUp",component:ue})]})]})}}]),a}(s.a.Component);c.a.render(Object(L.jsx)(l.a,{children:Object(L.jsx)(he,{})}),document.getElementById("root"))},76:function(e,t,a){},99:function(e,t,a){}},[[118,1,2]]]);
//# sourceMappingURL=main.cc81a73c.chunk.js.map