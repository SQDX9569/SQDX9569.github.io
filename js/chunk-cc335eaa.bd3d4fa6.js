(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cc335eaa"],{"3b2f":function(t,e,s){"use strict";s("c806")},"47a4":function(t,e,s){},"5cbe":function(t,e,s){t.exports=s.p+"img/recommend_bg.794b6628.jpg"},"661c":function(t,e,s){"use strict";s("47a4")},"6f07":function(t,e,s){},"8e2e":function(t,e,s){},b3d7:function(t,e,s){"use strict";s.r(e);var o=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"home"}},[e("nav-bar",{staticClass:"home-nav",scopedSlots:t._u([{key:"center",fn:function(){return[e("div",[t._v("购物车")])]},proxy:!0}])}),e("tab-control",{directives:[{name:"show",rawName:"v-show",value:t.isTabFixed,expression:"isTabFixed"}],ref:"tabControl1",staticClass:"tab-content",attrs:{titles:["流行","新款","精选"]},on:{tabClick:t.tabClick}}),e("scroll",{ref:"scroll",staticClass:"content",attrs:{"probe-type":3,"pull-up-load":!0},on:{scroll:t.contentScroll,pullingUp:t.loadMore}},[e("home-swiper",{attrs:{banners:t.banners},on:{swiperImgLoad:t.swiperImgLoad}}),e("home-recommend-view",{attrs:{recommends:t.recommends}}),e("feature-view"),e("tab-control",{ref:"tabControl2",attrs:{titles:["流行","新款","精选"]},on:{tabClick:t.tabClick}}),e("goods-list",{attrs:{goods:t.showGoods}})],1),e("back-top",{directives:[{name:"show",rawName:"v-show",value:t.isShowBackTop,expression:"isShowBackTop"}],nativeOn:{click:function(e){return t.backClick.apply(null,arguments)}}})],1)},r=[],a=(s("14d9"),function(){var t=this,e=t._self._c;return e("swiper",t._l(t.banners,(function(s){return e("swiper-item",[e("a",{attrs:{href:s.link}},[e("img",{attrs:{src:s.image,alt:""},on:{load:t.imgLoad}})])])})),1)}),n=[],i=s("dc2c"),c={name:"HomeSwiper",props:{banners:{type:Array,default(){return[]}}},data(){return{isLoad:!1}},components:{Swiper:i["a"],SwiperItem:i["b"]},methods:{imgLoad(){this.isLoad||(this.$emit("swiperImgLoad"),this.isLoad=!0)}}},l=c,u=s("2877"),d=Object(u["a"])(l,a,n,!1,null,null,null),m=d.exports,p=function(){var t=this,e=t._self._c;return e("div",{staticClass:"recommend"},t._l(t.recommends,(function(s){return e("div",{staticClass:"recommend-item"},[e("a",{attrs:{href:s.link}},[e("img",{attrs:{src:s.image,alt:""}}),e("div",[t._v(t._s(s.title))])])])})),0)},h=[],f={name:"HomeRecommendView",props:{recommends:{type:Array,default(){return[]}}}},b=f,g=(s("f811"),Object(u["a"])(b,p,h,!1,null,"45ad8004",null)),w=g.exports,v=function(){var t=this;t._self._c;return t._m(0)},k=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"feature"},[e("a",{attrs:{href:"https://act.mogujie.com/zzlx67"}},[e("img",{attrs:{src:s("5cbe"),alt:""}})])])}],C={name:"FeatureView"},_=C,x=(s("3b2f"),Object(u["a"])(_,v,k,!1,null,"0166b8f0",null)),T=x.exports,y=s("a7ac"),H=function(){var t=this,e=t._self._c;return e("div",{staticClass:"tab-control"},t._l(t.titles,(function(s,o){return e("div",{staticClass:"tab-control-item",class:{active:o===t.currentIndex},on:{click:function(e){return t.itemClick(o)}}},[e("span",[t._v(t._s(s))])])})),0)},I=[],S={name:"TabControl",props:{titles:{type:Array,default(){return[]}}},data(){return{currentIndex:0}},methods:{itemClick(t){this.currentIndex=t,this.$emit("tabClick",t)}}},L=S,O=(s("661c"),Object(u["a"])(L,H,I,!1,null,"52d40e80",null)),$=O.exports,j=s("6d71"),G=s("5d17"),F=s("fdd6"),B=s("1bab");function M(){return Object(B["a"])({url:"/home/multidata"})}function V(t,e){return Object(B["a"])({url:"/home/data",params:{type:t,page:e}})}var A=s("eecb"),N={name:"Home",mixins:[A["b"],A["a"]],data(){return{banners:[],recommends:[],goods:{pop:{page:0,list:[]},new:{page:0,list:[]},sell:{page:0,list:[]}},currentType:"pop",tabOffsetTop:0,isTabFixed:!1,saveY:0}},components:{NavBar:y["a"],HomeSwiper:m,HomeRecommendView:w,FeatureView:T,TabControl:$,GoodsList:j["a"],Scroll:G["a"],BackTop:F["a"]},computed:{showGoods(){return this.goods[this.currentType].list}},created(){this.getHomeMultidata(),this.getHomeGoods("pop"),this.getHomeGoods("new"),this.getHomeGoods("sell")},mounted(){},activated(){this.$refs.scroll.refresh()},deactivated(){this.saveY=this.$refs.scroll.getScrollY(),this.$bus.$off("itemImgload",this.itemImgListener)},methods:{tabClick(t){switch(t){case 0:this.currentType="pop";break;case 1:this.currentType="new";break;case 2:this.currentType="sell";break}this.$refs.tabControl1.currentIndex=t,this.$refs.tabControl2.currentIndex=t},contentScroll(t){this.isShowBackTop=-t.y>1e3,this.isTabFixed=-t.y>this.tabOffsetTop},loadMore(){this.getHomeGoods(this.currentType)},swiperImgLoad(){this.tabOffsetTop=this.$refs.tabControl2.$el.offsetTop},getHomeMultidata(){M().then(t=>{this.banners=t.data.banner.list,this.recommends=t.data.recommend.list})},getHomeGoods(t){const e=this.goods[t].page+1;V(t,e).then(e=>{this.goods[t].list.push(...e.data.list),this.goods[t].page+=1,this.$refs.scroll.finishPullUp()})}}},Y=N,z=(s("e8935"),Object(u["a"])(Y,o,r,!1,null,"38065b16",null));e["default"]=z.exports},c806:function(t,e,s){},e8935:function(t,e,s){"use strict";s("8e2e")},f811:function(t,e,s){"use strict";s("6f07")}}]);
//# sourceMappingURL=chunk-cc335eaa.bd3d4fa6.js.map