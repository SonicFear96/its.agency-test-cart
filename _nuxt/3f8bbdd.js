(window.webpackJsonp=window.webpackJsonp||[]).push([[4,2,3],{267:function(t,e,o){var content=o(269);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(46).default)("6905d79b",content,!0,{sourceMap:!1})},268:function(t,e,o){"use strict";o(267)},269:function(t,e,o){var n=o(45)(!1);n.push([t.i,".image-component[data-v-1b61789a]{width:100%;height:100%;position:absolute;top:0;left:0}.image-component.cover img[data-v-1b61789a]{height:100%;width:100%;object-position:center center;object-fit:cover}.image-component img[data-v-1b61789a]{width:100%}",""]),t.exports=n},270:function(t,e,o){var content=o(273);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(46).default)("09cb95e8",content,!0,{sourceMap:!1})},271:function(t,e,o){"use strict";o.r(e);var n={name:"image-component",props:{path:{type:String,default:""}},computed:{imagePath:function(){return"".concat(this.path)}}},c=(o(268),o(13)),component=Object(c.a)(n,(function(){var t=this._self._c;return t("div",{staticClass:"image-component cover"},[t("img",{attrs:{src:this.imagePath}})])}),[],!1,null,"1b61789a",null);e.default=component.exports},272:function(t,e,o){"use strict";o(270)},273:function(t,e,o){var n=o(45)(!1);n.push([t.i,'.card-component[data-v-716c86bd]{border-bottom:1px solid rgba(0,0,0,.1)}.card-component .image[data-v-716c86bd]{position:relative;padding-top:82%;overflow:hidden}.card-component .title[data-v-716c86bd]{margin-top:16px;font-family:"Inter",sans-serif;color:#1f2020;max-width:70%;font-style:normal;font-weight:300;font-size:16px;line-height:112%;letter-spacing:.02em}.card-component .card-bottom[data-v-716c86bd]{margin-top:24px;display:flex;flex-direction:row;justify-content:space-between;align-items:center;margin-bottom:15px}.card-component .price[data-v-716c86bd]{font-family:"Inter",sans-serif;font-weight:600;font-size:16px;line-height:100%}.card-component .add-product__wrapper[data-v-716c86bd]{opacity:0;transition:opacity .8s ease}.card-component .add-product__wrapper[data-v-716c86bd]:hover{opacity:1}.card-component .add-product__wrapper button[data-v-716c86bd]{cursor:pointer;width:80px;height:32px;border:none;border-radius:8px;background-color:#7bb899}.card-component .add-product__wrapper span[data-v-716c86bd]{font-family:"Inter",sans-serif;font-weight:600}',""]),t.exports=n},274:function(t,e,o){var content=o(277);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(46).default)("d27ffec0",content,!0,{sourceMap:!1})},275:function(t,e,o){"use strict";o.r(e);var n={components:{vImg:o(271).default},props:{data:{type:Object,default:function(){}}}},c=(o(272),o(13)),component=Object(c.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"card-component"},[e("div",{staticClass:"image"},[e("vImg",{attrs:{path:t.data.image}})],1),e("div",{staticClass:"title",domProps:{innerHTML:t._s(t.data.title)}}),e("div",{staticClass:"card-bottom"},[e("div",{staticClass:"price"},[e("span",[t._v(t._s(t.data.price)+" ₽")])]),t._m(0)])])}),[function(){var t=this._self._c;return t("div",{staticClass:"add-product__wrapper"},[t("button",{staticClass:"add-product"},[t("span",[this._v("+")])])])}],!1,null,"716c86bd",null);e.default=component.exports},276:function(t,e,o){"use strict";o(274)},277:function(t,e,o){var n=o(45)(!1);n.push([t.i,".main-page .catalog[data-v-e2c3b8e6]{margin-top:70px}.main-page .catalog-heading[data-v-e2c3b8e6]{display:flex;flex-direction:row;justify-content:space-between}.main-page .catalog-list__wrapper[data-v-e2c3b8e6]{margin-top:45px}.main-page .catalog-list[data-v-e2c3b8e6]{display:flex;flex-direction:row;flex-wrap:wrap;margin-left:-20px;margin-bottom:-20px}.main-page .catalog-list .catalog-list__item[data-v-e2c3b8e6]{margin-bottom:16px;margin-left:20px;width:calc(20% - 24px)}",""]),t.exports=n},278:function(t,e,o){"use strict";o.r(e);var n={name:"main-page",components:{vCard:o(275).default},data:function(){return{product:[{id:1,title:"Краска Wallquest, Brownsone MS90102",active:!0,price:4800,image:"/img/product/product-1.png"},{id:2,title:"Краска Wallquest, Brownsone MS90102",active:!0,price:5e3,image:"/img/product/product-1.png"},{id:3,title:"Краска Wallquest, Brownsone MS90102",active:!0,price:5200,image:"/img/product/product-1.png"},{id:4,title:"Краска Wallquest, Brownsone MS90102",active:!0,price:5400,image:"/img/product/product-1.png"},{id:5,title:"Краска Wallquest, Brownsone MS90102",active:!0,price:5600,image:"/img/product/product-1.png"},{id:6,title:"Краска Wallquest, Brownsone MS90102",active:!0,price:5700,image:"/img/product/product-1.png"}]}}},c=(o(276),o(13)),component=Object(c.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"main-page wrapper"},[e("div",{staticClass:"main"},[e("div",{staticClass:"catalog"},[t._m(0),e("div",{staticClass:"catalog-list__wrapper"},[e("div",{staticClass:"catalog-list"},t._l(t.product,(function(t){return e("div",{key:t.id,staticClass:"catalog-list__item"},[e("vCard",{attrs:{data:t}})],1)})),0)])])])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"catalog-heading"},[e("div",{staticClass:"product-quantity basic-text"},[e("span",[t._v("420 товаров")])]),e("div",{staticClass:"product-filter basic-text"},[e("span",[t._v("сначала дорогие")])])])}],!1,null,"e2c3b8e6",null);e.default=component.exports}}]);