(this["webpackJsonpvintage-by-vo"]=this["webpackJsonpvintage-by-vo"]||[]).push([[0],{23:function(e,t,c){},70:function(e,t,c){},71:function(e,t,c){"use strict";c.r(t);var n=c(1),r=(c(23),c(10)),s=c(11),a=c(13),i=c(12),o=c(30),l=c.n(o),d=c(38),j=c(0),u=c.n(j),b=c(76),h=c(82),p=c(77),O=(c(28),function(e){Object(a.a)(c,e);var t=Object(i.a)(c);function c(e){var n;return Object(r.a)(this,c),(n=t.call(this,e)).state={carousel:n.props.carousel},n}return Object(s.a)(c,[{key:"render",value:function(){return this.state.carousel?Object(n.jsx)(b.a,{fluid:!0,children:Object(n.jsxs)(h.a,{className:"carousel",indicators:!1,prevIcon:"",nextIcon:"",children:[Object(n.jsxs)(h.a.Item,{children:[Object(n.jsx)("img",{className:"d-block tinted carousel-img",src:"./images/banner.jpg",alt:"First slide",style:{alignSelf:"center"}}),Object(n.jsxs)(h.a.Caption,{class:"carousel-caption",children:[Object(n.jsx)("h1",{children:"Vintage by Vo"}),Object(n.jsx)("p",{children:"Fashion from DEN <-> LAX, and beyond"})]})]}),Object(n.jsxs)(h.a.Item,{children:[Object(n.jsx)("img",{className:"d-block tinted carousel-img",src:"./images/banner1.png",alt:"Third slide"}),Object(n.jsxs)(h.a.Caption,{children:[Object(n.jsx)("h1",{children:"Loved Goods"}),Object(n.jsx)("p",{children:"Looking for a new home"})]})]}),Object(n.jsxs)(h.a.Item,{children:[Object(n.jsx)("img",{className:"d-block tinted carousel-img",src:"./images/banner2.png",alt:"Third slide"}),Object(n.jsxs)(h.a.Caption,{children:[Object(n.jsx)("h1",{children:"Quality and care"}),Object(n.jsx)("p",{children:"That's just how we do"})]})]})]})}):Object(n.jsx)(p.a,{src:"./images/banner.jpg",fluid:!0})}}]),c}(j.Component)),x=c(14),m=c(78),f=c(79),v=c(84),g=c(80),k=c(54),y=function(e){Object(a.a)(c,e);var t=Object(i.a)(c);function c(e){var n;return Object(r.a)(this,c),(n=t.call(this,e)).state={chunkSize:3,depop:"Vintagebyvo",isLoaded:!1,homepage:n.props.homepage,products:n.props.products,brands:{d:"Dior",lv:"Louis Vuitton"},brandsToPopulate:[]},n}return Object(s.a)(c,[{key:"componentDidMount",value:function(){var e=Object(d.a)(l.a.mark((function e(){var t,c,n,r,s,a=this;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=this.state,c=t.brands,n=t.products,r=[],n.forEach((function(e){r.push(a.formatProductTitle(e.slug))})),s=[],Object.values(c).forEach((function(e){r.find((function(t){return t.includes(e)}))&&s.push(e)})),s.sort(),this.setState({isLoaded:!0,brandsToPopulate:s});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"chunker",value:function(e,t){for(var c=[],n=0;n<e.length;n+=t)c.push(e.slice(n,n+t));return c}},{key:"formatProductTitle",value:function(e){var t=this.state.depop;return e.replace(/-/g," ").replace(/(^\w{1})|(\s+\w{1})/g,(function(e){return e.toUpperCase()})).replace(t+" ","")}},{key:"getKeyByValue",value:function(e,t){return Object.keys(e).find((function(c){return e[c]===t}))}},{key:"render",value:function(){var e=this.state,t=e.isLoaded,c=e.brands,r=e.brandsToPopulate,s=e.chunkSize,a=e.products,i=e.homepage,o=this.chunker,l=this.getKeyByValue;if(t){if(null==r&&0!==a.length)return Object(n.jsx)("div",{id:"designers",children:Object(n.jsx)("h1",{className:"sectionheader",children:'please check "collection" to see all products'})});if(0===a.length)return Object(n.jsxs)("div",{id:"designers",children:[Object(n.jsx)("div",{className:"sectionspacer"}),Object(n.jsx)("h1",{className:"sectionheader",children:"no items for now, check back soon!"})]});if(i){var d=o(r,s),j=s;return Object(n.jsxs)("div",{id:"designers",children:[Object(n.jsx)("h1",{className:"sectionheader",children:"designers"}),Object(n.jsxs)(b.a,{fluid:!0,children:[d.map((function(e){var t=e.map((function(e){if(null!==e&&0!==j){var t=l(c,e);return Object(n.jsxs)(f.a,{xs:!0,lg:"2",children:[Object(n.jsx)(x.c,{to:"/collection?b="+t,children:Object(n.jsx)(p.a,{src:"./images/"+t+"-icon.jpg",className:"productimg",rounded:!0})}),Object(n.jsx)(v.a.Link,{as:x.c,to:"/collection?b="+t,className:"productname",children:e})]})}return null}));return Object(n.jsx)(g.a,{className:"justify-content-md-center",children:t})})),Object(n.jsx)(x.c,{to:"/collection",children:Object(n.jsx)(k.a,{bsPrefix:"custom-btn",variant:"viewmore",children:"View more"})})]}),Object(n.jsx)("br",{})]})}return d=o(r,s),Object(n.jsxs)("div",{id:"designers",children:[Object(n.jsx)("h1",{className:"sectionheader",children:"designers"}),Object(n.jsx)(b.a,{fluid:!0,children:d.map((function(e){var t=e.map((function(e){if(null!==e){var t=l(c,e);return Object(n.jsxs)(f.a,{xs:!0,lg:"2",children:[Object(n.jsx)(x.c,{to:"/collection?b="+t,children:Object(n.jsx)(p.a,{src:"./images/"+t+"-icon.jpg",className:"productimg",rounded:!0})}),Object(n.jsx)(v.a.Link,{as:x.c,to:"/collection?b="+t,className:"productname",children:e})]})}return null}));return Object(n.jsx)(g.a,{className:"justify-content-md-center",children:t})}))}),Object(n.jsx)("br",{})]})}return Object(n.jsxs)("div",{id:"designers",children:[Object(n.jsx)("h1",{className:"sectionheader",children:"designers"}),Object(n.jsx)(m.a,{animation:"border",role:"status",children:Object(n.jsx)("span",{className:"sr-only",children:"Loading..."})})]})}}]),c}(j.Component),N=function(e){Object(a.a)(c,e);var t=Object(i.a)(c);function c(e){var n;return Object(r.a)(this,c),(n=t.call(this,e)).state={chunkSize:3,depop:"Vintagebyvo",depopLink:"https://www.depop.com/products/",isLoaded:n.props.isLoaded,homepage:n.props.homepage,products:n.props.products,brandSpecified:n.getQueryStringValue("b"),brands:{d:"Dior",lv:"Louis Vuitton"}},n}return Object(s.a)(c,[{key:"chunker",value:function(e,t){for(var c=[],n=0;n<e.length;n+=t)c.push(e.slice(n,n+t));return c}},{key:"formatProductTitle",value:function(e,t){return e.replace(/-/g," ").replace(/(^\w{1})|(\s+\w{1})/g,(function(e){return e.toUpperCase()})).replace(t+" ","")}},{key:"formatProductTitle",value:function(e,t,c){return e.replace(/-/g," ").replace(/(^\w{1})|(\s+\w{1})/g,(function(e){return e.toUpperCase()})).replace(t+" ","").replace(c,"")}},{key:"getQueryStringValue",value:function(e){return decodeURIComponent(window.location.hash.replace(new RegExp("^(?:.*[&\\?]"+encodeURIComponent(e).replace(/[\.\+\*]/g,"\\$&")+"(?:\\=([^&]*))?)?.*$","i"),"$1"))}},{key:"imageClick",value:function(e){window.open(e)}},{key:"searchBrandName",value:function(e,t){return!!e.includes(t)}},{key:"render",value:function(){var e=this.state,t=e.chunkSize,c=e.isLoaded,r=e.products,s=e.depopLink,a=e.depop,i=e.brands,o=e.brandSpecified,l=e.homepage,d=this.chunker,j=this.imageClick,u=this.formatProductTitle,h=this.searchBrandName;if(c){if(c&&""!==o&&0===r.length)return Object(n.jsxs)("div",{id:"collection",children:[Object(n.jsx)("br",{}),Object(n.jsx)("h1",{children:"no items for now, check back soon!"})]});if(c&&l){var O=d(r,t),v=t;return Object(n.jsxs)("div",{id:"collection",className:"no-overflow",children:[Object(n.jsx)("div",{className:"sectionspacer-half"}),Object(n.jsx)("h1",{className:"sectionheader",children:"collection"}),O.map((function(e){var t=e.map((function(e){return!1===e.sold&&0!==v?(v--,Object(n.jsxs)(f.a,{xs:!0,lg:"2",children:[Object(n.jsx)(p.a,{src:Object.values(e.preview)[5],className:"productimg",rounded:!0,onClick:function(){return j(s+e.slug)}}),Object(n.jsx)("br",{}),Object(n.jsx)("a",{href:s+e.slug,target:"_blank",rel:"noreferrer",className:"productname",children:u(e.slug,a,i[o])}),Object(n.jsx)("br",{}),Object(n.jsx)("text",{className:"productprice",children:"$ "+e.price.price_amount})]})):null}));return Object(n.jsx)(g.a,{className:"justify-content-md-center",children:t})})),Object(n.jsx)(x.c,{to:"/collection",children:Object(n.jsx)(k.a,{bsPrefix:"custom-btn",variant:"viewmore",children:"View more"})})]})}if(c&&""!==o){var y=[];return r.forEach((function(e){if(null!=e){var t=u(e.slug,a);h(t,i[o])&&y.push(e)}})),O=d(y,t),Object(n.jsxs)("div",{id:"collection",children:[Object(n.jsx)("h1",{className:"sectionheader",children:i[o]}),Object(n.jsx)("h2",{className:"subheader",children:"collection"}),Object(n.jsx)(b.a,{fluid:!0,children:O.map((function(e){var t=e.map((function(e){return!1===e.sold?Object(n.jsxs)(f.a,{xs:!0,lg:"2",children:[Object(n.jsx)(p.a,{src:Object.values(e.preview)[5],className:"productimg",rounded:!0,onClick:function(){return j(s+e.slug)}}),Object(n.jsx)("br",{}),Object(n.jsx)("a",{href:s+e.slug,target:"_blank",rel:"noreferrer",className:"productname",children:u(e.slug,a,i[o])}),Object(n.jsx)("br",{}),Object(n.jsx)("text",{className:"productprice",children:"$ "+e.price.price_amount})]}):null}));return Object(n.jsx)(g.a,{className:"justify-content-md-center",children:t})}))})]})}return c&&0===r.length?Object(n.jsxs)("div",{id:"collection",children:[Object(n.jsx)("div",{className:"sectionspacer"}),Object(n.jsx)("h1",{className:"sectionheader",children:"no items for now, check back soon!"})]}):(O=d(r,t),Object(n.jsxs)("div",{id:"collection",children:[Object(n.jsx)("h1",{className:"sectionheader",children:"collection"}),Object(n.jsx)(b.a,{fluid:!0,children:O.map((function(e){var t=e.map((function(e){return!1===e.sold?Object(n.jsxs)(f.a,{xs:!0,lg:"2",children:[Object(n.jsx)(p.a,{src:Object.values(e.preview)[5],className:"productimg",rounded:!0,onClick:function(){return j(s+e.slug)}}),Object(n.jsx)("br",{}),Object(n.jsx)("a",{href:s+e.slug,target:"_blank",rel:"noreferrer",className:"productname",children:u(e.slug,a)}),Object(n.jsx)("br",{}),Object(n.jsx)("text",{className:"productprice",children:"$ "+e.price.price_amount})]}):null}));return Object(n.jsx)(g.a,{className:"justify-content-md-center",children:t})}))})]}))}return Object(n.jsxs)("div",{id:"collection",children:[Object(n.jsx)("h1",{className:"sectionheader",children:"collection"}),Object(n.jsx)(m.a,{animation:"border",role:"status",children:Object(n.jsx)("span",{className:"sr-only",children:"Loading..."})})]})}}]),c}(j.Component),w=function(e){Object(a.a)(c,e);var t=Object(i.a)(c);function c(){return Object(r.a)(this,c),t.apply(this,arguments)}return Object(s.a)(c,[{key:"render",value:function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(O,{carousel:!0}),Object(n.jsx)(N,{homepage:!0,products:this.props.products,isLoaded:this.props.isLoaded}),Object(n.jsx)(y,{homepage:!0,products:this.props.products,isLoaded:this.props.isLoaded})]})}}]),c}(j.Component),L=c(7),C=c(85),S=c(86),I=function(e){Object(a.a)(c,e);var t=Object(i.a)(c);function c(e){var n;return Object(r.a)(this,c),(n=t.call(this,e)).state={isLoaded:!1,products:[]},n}return Object(s.a)(c,[{key:"componentDidMount",value:function(){var e=Object(d.a)(l.a.mark((function e(){var t=this;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"https://webapi.depop.com/api/v1/shop/27178787/products/?limit=1000","https://cors-anywhere.herokuapp.com/","https://webapi.depop.com/api/v1/shop/27178787/products/?limit=1000",fetch("https://cors-anywhere.herokuapp.com/https://webapi.depop.com/api/v1/shop/27178787/products/?limit=1000").then((function(e){return e.json()})).then((function(e){var c=[];e.products.forEach((function(e){!1===e.sold&&"ONSALE"===e.status&&(console.log(e),c.push(e))})),t.setState({isLoaded:!0,products:c})})).catch((function(e){return console.log(e),e}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.products,c=e.isLoaded;return c?Object(n.jsx)("div",{id:"collection",children:Object(n.jsx)(L.a,{render:function(e){var r=e.location;return Object(n.jsx)(C.a,{children:Object(n.jsx)(S.a,{timeout:300,classNames:"fade",exit:!1,children:Object(n.jsx)(x.b,{children:Object(n.jsxs)(L.c,{children:[Object(n.jsx)(L.a,{exact:!0,path:"/",render:function(){return Object(n.jsx)(w,{products:t,isLoaded:c})}}),Object(n.jsx)(L.a,{exact:!0,path:"/#/",render:function(){return Object(n.jsx)(w,{products:t,isLoaded:c})}}),Object(n.jsx)(L.a,{exact:!0,path:"/collection",render:function(){return Object(n.jsx)(N,{products:t,isLoaded:c})}}),Object(n.jsx)(L.a,{exact:!0,path:"/designers",render:function(){return Object(n.jsx)(y,{products:t,isLoaded:c})}}),Object(n.jsx)(L.a,{render:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("br",{}),Object(n.jsx)("h1",{className:"sectionheader",children:"page not found"})]})}})]})})},r.key)})}})}):Object(n.jsxs)("div",{id:"collection",children:[Object(n.jsx)(O,{}),Object(n.jsx)(m.a,{animation:"border",role:"status",children:Object(n.jsx)("span",{className:"sr-only",children:"Loading..."})}),Object(n.jsx)("h1",{children:"Loading.."})]})}}]),c}(j.Component),T=function(e){Object(a.a)(c,e);var t=Object(i.a)(c);function c(){return Object(r.a)(this,c),t.apply(this,arguments)}return Object(s.a)(c,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"footer",children:[Object(n.jsx)("div",{className:"sectionspacer-half"}),Object(n.jsx)("hr",{style:{color:"#C7B49F",backgroundColor:"inherit"}}),Object(n.jsx)("div",{className:"sectionspacer-half"})]})}}]),c}(j.Component),P=c(83),V=c(81),F=function(e){Object(a.a)(c,e);var t=Object(i.a)(c);function c(){return Object(r.a)(this,c),t.apply(this,arguments)}return Object(s.a)(c,[{key:"render",value:function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(P.a.Brand,{id:"home",children:Object(n.jsx)("p",{className:"scriptbrandfont",children:"vintage by vo"})}),Object(n.jsxs)(P.a,{expand:"lg",sticky:"top",children:[Object(n.jsx)(P.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(n.jsx)(P.a.Collapse,{id:"basic-navbar-nav",children:Object(n.jsxs)(v.a,{className:"m-auto",children:[Object(n.jsx)(v.a.Link,{as:x.c,to:"/vintage-by-vo/#",children:"Home"}),Object(n.jsx)(v.a.Link,{as:x.c,to:"/vintage-by-vo/#/collection",children:"Collection"}),Object(n.jsx)(v.a.Link,{as:x.c,to:"/vintage-by-vo/#/designers",children:"Shop Designer"}),Object(n.jsxs)(V.a,{title:"About Us",id:"basic-nav-dropdown",children:[Object(n.jsx)(V.a.Item,{href:"#action/3.1",children:"About ya girl"}),Object(n.jsx)(V.a.Item,{href:"#action/3.2",children:"Item Care"}),Object(n.jsx)(V.a.Item,{href:"#action/3.3",children:"Something"}),Object(n.jsx)(V.a.Divider,{}),Object(n.jsx)(V.a.Item,{href:"#action/3.4",children:"My bunny"})]}),Object(n.jsx)(v.a.Link,{href:"#link",children:"Contact"})]})})]})]})}}]),c}(j.Component),B=function(e){Object(a.a)(c,e);var t=Object(i.a)(c);function c(){return Object(r.a)(this,c),t.apply(this,arguments)}return Object(s.a)(c,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"layout",children:[Object(n.jsx)(F,{}),Object(n.jsx)(I,{}),Object(n.jsx)(T,{})]})}}]),c}(j.Component);var D=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(x.a,{children:Object(n.jsx)(B,{})})})},E=(c(70),c(24)),U=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,87)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),n(e),r(e),s(e),a(e)}))};c.n(E).a.render(Object(n.jsx)(u.a.StrictMode,{children:Object(n.jsx)(D,{})}),document.getElementById("root")),U()}},[[71,1,2]]]);
//# sourceMappingURL=main.3acb20f5.chunk.js.map