(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,a,t){e.exports=t(45)},2:function(e,a,t){e.exports={colorWhite:"_1yg0P5Z5filfe3jWGoK5tx",bgColorRebeccapurple:"_9ua1LTFXc3JrLoAvrf6K2",marginTop5:"_1QZrCuW2mTSOTAZZqFz7Ks",marginTop10:"_1UiS45eYcnnwF5CTplyQqD",marginTop15:"_1ia3gLvLFud5HNQxoyaFWW"}},23:function(e,a,t){},45:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),c=t(10),l=t.n(c),s=(t(23),t(11)),o=t(12),i=t(15),m=t(13),u=t(16),d=t(14),g=t.n(d),h=t(2),f=t.n(h),E=function(e){function a(){var e;return Object(s.a)(this,a),(e=Object(i.a)(this,Object(m.a)(a).call(this))).getImages=function(){g.a.get("/api/product").then(function(a){e.setState({images:a.data.products})}).catch(function(e){console.log(e)})},e.state={images:[]},e.getImages(),e}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{class:"top-fixed"},n.a.createElement("header",{className:"ae-container-fluid ae-container-fluid--full rk-header ".concat(f.a.bgColorRebeccapurple)},n.a.createElement("input",{type:"checkbox",id:"mobile-menu",class:"rk-mobile-menu"}),n.a.createElement("label",{for:"mobile-menu"},n.a.createElement("svg",null,n.a.createElement("use",{href:"assets/img/symbols.svg#bar"})),n.a.createElement("svg",null,n.a.createElement("use",{href:"assets/img/symbols.svg#bar"})),n.a.createElement("svg",null,n.a.createElement("use",{href:"assets/img/symbols.svg#bar"}))),n.a.createElement("div",{class:"ae-container-fluid rk-topbar"},n.a.createElement("h1",{className:"rk-logo ".concat(f.a.colorWhite)},n.a.createElement("a",{href:"index.html"},"Juguetes Didactea")),n.a.createElement("nav",{class:"rk-navigation"},n.a.createElement("ul",{class:"rk-menu"},n.a.createElement("li",{className:"active rk-menu__item ".concat(f.a.colorWhite)},n.a.createElement("a",{href:"index.html",class:"rk-menu__link"},"Inicio")),n.a.createElement("li",{class:"rk-menu__item ".concat(f.a.colorWhite)},n.a.createElement("a",{href:"contact.html",class:"rk-menu__link"},"Contacto"))),n.a.createElement("form",{class:"rk-search"},n.a.createElement("input",{type:"text",placeholder:"Search",id:"urku-search",class:"rk-search-field"}),n.a.createElement("label",{for:"urku-search"},n.a.createElement("svg",null,n.a.createElement("use",{href:"assets/img/symbols.svg#icon-search"}))))))),n.a.createElement("section",{class:"ae-container-fluid rk-main"},n.a.createElement("section",{class:"ae-container-fluid ae-container-fluid--inner rk-portfolio ".concat(f.a.marginTop15)},n.a.createElement("div",{class:"ae-masonry ae-masonry-md-2 ae-masonry-xl-4"},this.state.images&&this.state.images.map(function(e){return n.a.createElement("a",{key:"image.id",href:"portfolio-item.html",class:"rk-item ae-masonry__item"},n.a.createElement("img",{src:"/uploads/".concat(e.image),alt:""}),n.a.createElement("div",{class:"item-meta"},n.a.createElement("h2",null,e.name),n.a.createElement("p",null,e.description)))})))),n.a.createElement("footer",{class:"ae-container-fluid rk-footer "},n.a.createElement("div",{class:"ae-grid ae-grid--collapse"},n.a.createElement("div",{class:"ae-grid__item item-lg-4 au-xs-ta-center au-lg-ta-left"},n.a.createElement("p",{class:"rk-footer__text rk-footer__copy "}," ",n.a.createElement("span",{class:"ae-u-bold"},"\xa9 "),n.a.createElement("span",{class:"ae-u-bolder"},"Juguestes Didactea "),"Todos los derechos reservados.")),n.a.createElement("div",{class:"ae-grid__item item-lg-4 au-xs-ta-center"},n.a.createElement("a",{href:"https://www.facebook.com/Juguetes-Didactea-385429638896603/"},n.a.createElement("img",{src:"/img/facebook.png",height:"50px",width:"50px"}))),n.a.createElement("div",{class:"ae-grid__item item-lg-4 au-xs-ta-center au-lg-ta-right"},n.a.createElement("p",{class:"rk-footer__text rk-footer__contact "}," ",n.a.createElement("span",{class:"ae-u-bold"},"Email: "),n.a.createElement("span",{class:"ae-u-bolder"}," ",n.a.createElement("a",{href:"#0",class:"rk-dark-color "},"contacto@gmail.com ")))))))}}]),a}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,2,1]]]);
//# sourceMappingURL=main.39ed4443.chunk.js.map