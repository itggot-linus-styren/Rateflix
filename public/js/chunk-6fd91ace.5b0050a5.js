(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6fd91ace"],{"7e55":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Navbar"),a("NewMovie"),a("NewAuthor")],1)},n=[],i=a("c665"),o=a("dc0a"),s=a("d328"),u=a("11d9"),c=(a("cadf"),a("551c"),a("097d"),a("9ab4")),l=a("60a3"),v=a("d178"),h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"jumbotron"},[t._m(0),a("div",{staticClass:"row"},[a("label",{attrs:{for:"moviename"}},[t._v("Movie Name:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.query.title,expression:"query.title"}],attrs:{id:"moviename",placeholder:"Movie name...",type:"text"},domProps:{value:t.query.title},on:{input:function(e){e.target.composing||t.$set(t.query,"title",e.target.value)}}}),void 0!=t.error.title?a("p",{staticClass:"text-danger"},[t._v(t._s(t.error.title[0]))]):t._e()]),a("div",{staticClass:"row"},[a("label",{attrs:{for:"authername"}},[t._v("Name of the Author:")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.query.author_id,expression:"query.author_id"}],attrs:{id:"authername",placeholder:"Author name",type:"text"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.$set(t.query,"author_id",e.target.multiple?a:a[0])}}},[a("option",{attrs:{disabled:""}},[t._v("Author's name")]),t._l(t.authors,function(e,r){return a("option",{domProps:{value:e.id}},[t._v(t._s(e.name))])})],2),void 0!=t.error.author?a("p",{staticClass:"text-danger"},[t._v(t._s(t.error.author[0]))]):t._e()]),a("div",{staticClass:"row"},[a("button",{staticClass:"btn btn-primary",on:{click:t.newMovie}},[t._v("ADD")]),t.notice?a("p",{staticClass:"text-success"},[t._v(t._s(t.notice))]):t._e()])])},d=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("h2",{staticClass:"display-2"},[t._v("ADD A NEW MOVIE")])])}],p=a("aa9a"),m=function(t){function e(){var t;return Object(i["a"])(this,e),t=Object(s["a"])(this,Object(u["a"])(e).apply(this,arguments)),t.authors=[],t.query={title:"",author_id:""},t.notice="",t.error={},t}return Object(p["a"])(e,[{key:"created",value:function(){var t=this,e=function(){t.axios.get("/api/v1/authors.json",{withCredentials:!0}).then(function(e){t.authors=e.data})};this.$root.$on("added-author",e),e()}},{key:"newMovie",value:function(){var t=this;this.error={},this.notice="",this.axios.post("/api/v1/movies.json",this.query,{withCredentials:!0}).then(function(e){t.notice="Successfully created movie "+t.query.title+"!"}).catch(function(e){t.error=e.response.data})}}]),Object(o["a"])(e,t),e}(l["b"]);m=c["a"]([l["a"]],m);var f=m,_=f,b=a("2877"),y=Object(b["a"])(_,h,d,!1,null,null,null);y.options.__file="NewMovie.vue";var w=y.exports,j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"jumbotron"},[t._m(0),a("div",{staticClass:"row"},[a("label",{attrs:{for:"authorname"}},[t._v("Author Name:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.query.name,expression:"query.name"}],attrs:{id:"authorname",placeholder:"Author name...",type:"text"},domProps:{value:t.query.name},on:{input:function(e){e.target.composing||t.$set(t.query,"name",e.target.value)}}}),void 0!=t.error.name?a("p",{staticClass:"text-danger"},[t._v(t._s(t.error.name[0]))]):t._e(),t.notice?a("p",{staticClass:"text-success"},[t._v(t._s(t.notice))]):t._e()]),a("div",{staticClass:"row"},[a("button",{staticClass:"btn btn-primary",on:{click:t.newAuthor}},[t._v("ADD")])])])},C=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("h2",{staticClass:"display-2"},[t._v("ADD A NEW AUTHOR")])])}],O=(a("7f7f"),function(t){function e(){var t;return Object(i["a"])(this,e),t=Object(s["a"])(this,Object(u["a"])(e).apply(this,arguments)),t.error={},t.notice="",t.query={name:""},t}return Object(p["a"])(e,[{key:"newAuthor",value:function(){var t=this;this.error={},this.notice="",this.axios.post("/api/v1/authors.json",this.query,{withCredentials:!0}).then(function(e){t.notice="Successfully created author "+t.query.name+"!",t.$root.$emit("added-author")}).catch(function(e){t.error=e.response.data})}}]),Object(o["a"])(e,t),e}(l["b"]));O=c["a"]([l["a"]],O);var A=O,q=A,x=Object(b["a"])(q,j,C,!1,null,null,null);x.options.__file="NewAuthor.vue";var N=x.exports,g=function(t){function e(){return Object(i["a"])(this,e),Object(s["a"])(this,Object(u["a"])(e).apply(this,arguments))}return Object(o["a"])(e,t),e}(l["b"]);g=c["a"]([Object(l["a"])({components:{Navbar:v["a"],NewMovie:w,NewAuthor:N}})],g);var $=g,k=$,D=Object(b["a"])(k,r,n,!1,null,null,null);D.options.__file="Add.vue";e["default"]=D.exports},"7f7f":function(t,e,a){var r=a("86cc").f,n=Function.prototype,i=/^\s*function ([^ (]*)/,o="name";o in n||a("9e1e")&&r(n,o,{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(t){return""}}})}}]);
//# sourceMappingURL=chunk-6fd91ace.5b0050a5.js.map