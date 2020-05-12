(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{101:function(t,s,e){"use strict";e.r(s);var a=e(0),r=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"zui组件chosen使用问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#zui组件chosen使用问题"}},[t._v("#")]),t._v(" zui组件chosen使用问题")]),t._v(" "),e("h3",{attrs:{id:"_1-问题现象"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-问题现象"}},[t._v("#")]),t._v(" 1.问题现象")]),t._v(" "),e("blockquote",[e("p",[t._v("在使用zui框架过程中，module的城市选择需要增加搜索功能")]),t._v(" "),e("p",[t._v("但是在数据填充之后，select的样式并没有显示出来")]),t._v(" "),e("p",[t._v("在一番排查之后，发现是组件的width为0\n"),e("img",{attrs:{src:"/img/question-1.jpg",alt:"具体样式问题"}})])]),t._v(" "),e("h3",{attrs:{id:"_2-解决办法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-解决办法"}},[t._v("#")]),t._v(" 2.解决办法")]),t._v(" "),e("blockquote",[e("p",[t._v("在初始化之后，修改select元素下面的宽度")]),t._v(" "),e("p",[t._v("代码如下：")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("  //组件初始化\n  $('select.chosen-select').chosen({\n    no_results_text: '没有找到',    // 当检索时没有找到匹配项时显示的提示文本\n    disable_search_threshold: 10, // 10 个以下的选择项则不显示检索框\n    search_contains: true         // 从任意位置开始检索\n  });\n  //设置元素的宽度\n  $('select.chosen-select').css('width','100%')\n")])])]),e("h3",{attrs:{id:"_3-运行代码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-运行代码"}},[t._v("#")]),t._v(" 3.运行代码")]),t._v(" "),e("p",[e("img",{attrs:{src:"/img/question-2.jpg",alt:"具体样式问题"}})])])}),[],!1,null,null,null);s.default=r.exports}}]);