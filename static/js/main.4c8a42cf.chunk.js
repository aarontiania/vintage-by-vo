(this["webpackJsonpvintage-by-vo"]=this["webpackJsonpvintage-by-vo"]||[]).push([[0],{25:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var c=n(2),r=(n(25),n(11)),a=n(12),s=n(14),i=n(13),o=n(42),d=n.n(o),l=n(46),u=n(0),j=n.n(u),b=n(71),p=(n(31),function(e){Object(s.a)(n,e);var t=Object(i.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){return Object(c.jsx)("div",{className:"bannerpadding",children:Object(c.jsx)(b.a,{src:"./images/banner.png",className:"productimg",rounded:!0})})}}]),n}(u.Component)),h=function(e){Object(s.a)(n,e);var t=Object(i.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)(p,{}),Object(c.jsx)("h1",{children:"THIS IS THE HOME PAGE"})]})}}]),n}(u.Component),O=n(72),x=n(18),v=n(73),m=n(78),f=function(e){Object(s.a)(n,e);var t=Object(i.a)(n);function n(e){var c;return Object(r.a)(this,n),(c=t.call(this,e)).state={depop:"Vintagebyvo",depopLink:"https://www.depop.com/products/",isLoaded:c.props.isLoaded,products:c.props.products},c}return Object(a.a)(n,[{key:"formatProductTitle",value:function(e){var t=this.state.depop;return e.replace(/-/g," ").replace(/(^\w{1})|(\s+\w{1})/g,(function(e){return e.toUpperCase()})).replace(t+" ","")}},{key:"render",value:function(){var e=this.state,t=e.isLoaded;e.products,e.depopLink;return t?Object(c.jsxs)("div",{id:"designers",children:[Object(c.jsx)("h1",{className:"sectionheader",children:"designers"}),Object(c.jsx)(v.a,{fluid:!0,children:Object(c.jsx)(x.b,{to:"/vintage-by-vo/collection?b=lv",children:Object(c.jsx)(b.a,{src:"./images/lv-icon.jpg",className:"productimg",rounded:!0})})}),Object(c.jsx)("br",{}),Object(c.jsx)(m.a.Link,{as:x.b,to:"/vintage-by-vo/collection?b=lv",className:"productname",children:"Louis Vuitton"})]}):Object(c.jsxs)("div",{id:"designers",children:[Object(c.jsx)("h1",{className:"sectionheader",children:"designers"}),Object(c.jsx)(O.a,{animation:"border",role:"status",children:Object(c.jsx)("span",{className:"sr-only",children:"Loading..."})})]})}}]),n}(u.Component),g=n(74),y=n(75),k=function(e){Object(s.a)(n,e);var t=Object(i.a)(n);function n(e){var c;return Object(r.a)(this,n),(c=t.call(this,e)).state={chunkSize:3,depop:"Vintagebyvo",depopLink:"https://www.depop.com/products/",isLoaded:c.props.isLoaded,products:c.props.products,brandSpecified:c.getQueryStringValue("b"),brands:{lv:"Louis Vuitton"}},c}return Object(a.a)(n,[{key:"chunker",value:function(e,t){for(var n=[],c=0;c<e.length;c+=t)n.push(e.slice(c,c+t));return n}},{key:"formatProductTitle",value:function(e,t){return e.replace(/-/g," ").replace(/(^\w{1})|(\s+\w{1})/g,(function(e){return e.toUpperCase()})).replace(t+" ","")}},{key:"formatProductTitle",value:function(e,t,n){return e.replace(/-/g," ").replace(/(^\w{1})|(\s+\w{1})/g,(function(e){return e.toUpperCase()})).replace(t+" ","").replace(n,"")}},{key:"getQueryStringValue",value:function(e){return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]"+encodeURIComponent(e).replace(/[\.\+\*]/g,"\\$&")+"(?:\\=([^&]*))?)?.*$","i"),"$1"))}},{key:"imageClick",value:function(e){window.open(e)}},{key:"searchBrandName",value:function(e,t){return!!e.includes(t)}},{key:"render",value:function(){var e=this.state,t=e.chunkSize,n=e.isLoaded,r=e.products,a=e.depopLink,s=e.depop,i=e.brands,o=e.brandSpecified,d=this.chunker,l=this.imageClick,u=this.formatProductTitle,j=this.searchBrandName;if(n){if(n&&""!==o){var p=[];r.forEach((function(e){if(null!=e){var t=u(e.slug,s);j(t,i[o])&&(p.push(e),console.log("pushed"))}}));var h=d(p,t);return Object(c.jsxs)("div",{id:"collection",children:[Object(c.jsx)("h2",{className:"sectionheader",children:i[o]}),Object(c.jsx)("h1",{className:"subheader",children:"collection"}),Object(c.jsx)(v.a,{fluid:!0,children:h.map((function(e){var t=e.map((function(e){return!1===e.sold?Object(c.jsxs)(g.a,{xs:!0,lg:"2",children:[Object(c.jsx)(b.a,{src:Object.values(e.preview)[5],className:"productimg",rounded:!0,onClick:function(){return l(a+e.slug)}}),Object(c.jsx)("br",{}),Object(c.jsx)("a",{href:a+e.slug,target:"_blank",rel:"noreferrer",className:"productname",children:u(e.slug,s,i[o])}),Object(c.jsx)("br",{}),Object(c.jsx)("text",{className:"productprice",children:"$ "+e.price.price_amount})]}):null}));return Object(c.jsx)(y.a,{className:"justify-content-md-center",children:t})}))})]})}return h=d(r,t),Object(c.jsxs)("div",{id:"collection",children:[Object(c.jsx)("h1",{className:"sectionheader",children:"collection"}),Object(c.jsx)(v.a,{fluid:!0,children:h.map((function(e){var t=e.map((function(e){return!1===e.sold?Object(c.jsxs)(g.a,{xs:!0,lg:"2",children:[Object(c.jsx)(b.a,{src:Object.values(e.preview)[5],className:"productimg",rounded:!0,onClick:function(){return l(a+e.slug)}}),Object(c.jsx)("br",{}),Object(c.jsx)("a",{href:a+e.slug,target:"_blank",rel:"noreferrer",className:"productname",children:u(e.slug,s)}),Object(c.jsx)("br",{}),Object(c.jsx)("text",{className:"productprice",children:"$ "+e.price.price_amount})]}):null}));return Object(c.jsx)(y.a,{className:"justify-content-md-center",children:t})}))})]})}return Object(c.jsxs)("div",{id:"collection",children:[Object(c.jsx)("h1",{className:"sectionheader",children:"collection"}),Object(c.jsx)(O.a,{animation:"border",role:"status",children:Object(c.jsx)("span",{className:"sr-only",children:"Loading..."})})]})}}]),n}(u.Component),w=n(7),L=n(79),N=n(80),C=function(e){Object(s.a)(n,e);var t=Object(i.a)(n);function n(e){var c;return Object(r.a)(this,n),(c=t.call(this,e)).state={isLoaded:!1,products:[]},c}return Object(a.a)(n,[{key:"componentDidMount",value:function(){var e=Object(l.a)(d.a.mark((function e(){var t=this;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"https://webapi.depop.com/api/v1/shop/27178787/products/?limit=1000","https://cors-anywhere.herokuapp.com/","https://webapi.depop.com/api/v1/shop/27178787/products/?limit=1000",fetch("https://cors-anywhere.herokuapp.com/https://webapi.depop.com/api/v1/shop/27178787/products/?limit=1000").then((function(e){return e.json()})).then((function(e){t.setState({isLoaded:!0,products:e.products})})).catch((function(e){return console.log(e),e}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.products,n=e.isLoaded;return n?Object(c.jsx)("main",{children:Object(c.jsx)(w.a,{render:function(e){var r=e.location;return Object(c.jsx)(L.a,{children:Object(c.jsx)(N.a,{timeout:300,classNames:"fade",exit:!1,children:Object(c.jsxs)(w.c,{children:[Object(c.jsx)(w.a,{exact:!0,path:"/vintage-by-vo",render:function(){return Object(c.jsx)(h,{products:t,isLoaded:n})}}),Object(c.jsx)(w.a,{exact:!0,path:"/vintage-by-vo/collection",render:function(){return Object(c.jsx)(k,{products:t,isLoaded:n})}}),Object(c.jsx)(w.a,{exact:!0,path:"/vintage-by-vo/designers",render:function(){return Object(c.jsx)(f,{products:t,isLoaded:n})}}),Object(c.jsx)(w.a,{render:function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("br",{}),Object(c.jsx)("h1",{className:"sectionheader",children:"page not found"})]})}})]})},r.key)})}})}):Object(c.jsxs)("div",{id:"collection",children:[Object(c.jsx)(p,{}),Object(c.jsx)(O.a,{animation:"border",role:"status",children:Object(c.jsx)("span",{className:"sr-only",children:"Loading..."})}),Object(c.jsx)("h1",{children:"Loading.."})]})}}]),n}(u.Component),S=n(77),I=n(76),T=function(e){Object(s.a)(n,e);var t=Object(i.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(S.a.Brand,{id:"home",children:Object(c.jsx)("p",{className:"scriptbrandfont",children:"vintage by vo"})}),Object(c.jsxs)(S.a,{expand:"lg",sticky:"top",children:[Object(c.jsx)(S.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(c.jsx)(S.a.Collapse,{id:"basic-navbar-nav",children:Object(c.jsxs)(m.a,{className:"m-auto",children:[Object(c.jsx)(m.a.Link,{as:x.b,to:"/vintage-by-vo",children:"Home"}),Object(c.jsx)(m.a.Link,{as:x.b,to:"/vintage-by-vo/collection",children:"Collection"}),Object(c.jsx)(m.a.Link,{as:x.b,to:"/vintage-by-vo/designers",children:"Shop Designer"}),Object(c.jsxs)(I.a,{title:"About Us",id:"basic-nav-dropdown",children:[Object(c.jsx)(I.a.Item,{href:"#action/3.1",children:"About ya girl"}),Object(c.jsx)(I.a.Item,{href:"#action/3.2",children:"Item Care"}),Object(c.jsx)(I.a.Item,{href:"#action/3.3",children:"Something"}),Object(c.jsx)(I.a.Divider,{}),Object(c.jsx)(I.a.Item,{href:"#action/3.4",children:"My bunny"})]}),Object(c.jsx)(m.a.Link,{href:"#link",children:"Contact"})]})})]})]})}}]),n}(u.Component),P=function(e){Object(s.a)(n,e);var t=Object(i.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)(T,{}),Object(c.jsx)(C,{})]})}}]),n}(u.Component);var E=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsx)(x.a,{children:Object(c.jsx)(P,{})})})},U=(n(65),n(21)),V=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,81)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};n.n(U).a.render(Object(c.jsx)(j.a.StrictMode,{children:Object(c.jsx)(E,{})}),document.getElementById("root")),V()}},[[66,1,2]]]);
//# sourceMappingURL=main.4c8a42cf.chunk.js.map