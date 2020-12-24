(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{101:function(t,a,_){"use strict";_.r(a);var n=_(0),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,_=t._self._c||a;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"_1-复杂度：如何衡量程序运行的效率？"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-复杂度：如何衡量程序运行的效率？"}},[t._v("#")]),t._v(" 1.复杂度：如何衡量程序运行的效率？")]),t._v(" "),_("h3",{attrs:{id:"_1-1-复杂度是什么？"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-复杂度是什么？"}},[t._v("#")]),t._v(" 1-1 复杂度是什么？")]),t._v(" "),_("ul",[_("li",[t._v("复杂度是衡量代码运行效率的重要的度量因素;")]),t._v(" "),_("li",[t._v("首先，这段代码消耗的资源是什么？(消耗计算时间和计算空间)")]),t._v(" "),_("li",[t._v("其次，这段代码对于资源的消耗是多少？")]),t._v(" "),_("li",[t._v("复杂度是一个关于输入数据量 n 的函数;")]),t._v(" "),_("li",[t._v("计算复杂度与具体的常系数无关;O(n) 与 O(2n) 表示一样的复杂度")]),t._v(" "),_("li",[t._v("多项式级的复杂度相加的时候，选择高者作为结果; O(n"),_("sup",[t._v("2")]),t._v(") + O(n)与 O(n"),_("sup",[t._v("2")]),t._v(") 表示一样的复杂度")]),t._v(" "),_("li",[t._v("O(1) 也表示一个特殊的复杂度，与输入数量n无关"),_("br")])]),t._v(" "),_("h4",{attrs:{id:"_1-1-1-实例分析"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-1-实例分析"}},[t._v("#")]),t._v(" 1-1-1 实例分析")]),t._v(" "),_("blockquote",[_("p",[t._v("下面看一个实例：输入数组a = [1,2,3,4,5],要求输出数组b,值为[5,4,3,2,1]"),_("br")])]),t._v(" "),_("blockquote",[_("p",[t._v("方法一：定义并初始化一个b数组，数组长度等于a数组，且每一个元素为0，通过for循环，从左到右将a数组从右向左赋值给b"),_("br")])]),t._v(" "),_("ul",[_("li",[t._v("初级做法")])]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v(" function s1_1(){\n  let a = [1,2,3,4,5];\n  let b = Array(5).fill(0);\n  for(let i = 0; i < a.length;i++){\n    b[a.length - i - 1] = a[i]\n  }\n  return b;\n }\n")])])]),_("ul",[_("li",[t._v("优化后")])]),t._v(" "),_("blockquote",[_("p",[t._v("以上方法，时间复杂度与数组长度有关，为O(n)；空间复杂度，即重新定义了b数组，与a数组同等长度，为O(n)；"),_("br"),t._v("\n方法二：定义一个中间变量temp,然后取a的一半数据，交换位置，再将值return"),_("br")])]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v(" function s1_2(){\n  let a = [1,2,3,4,5];\n  let temp;\n  for(let i = 0; i < a.length/2;i++){\n    temp = a[i];\n    a[i] = a[a.length - i - 1];\n    a[a.length - i - 1] = temp;\n  }\n  return a;\n }\n")])])]),_("blockquote",[_("p",[t._v("以上方法，时间复杂度为O(n/2)，也就是O(n)；"),_("br"),t._v("\n空间复杂度，需要一个temp变量，它与数组长度无关，不论数组多长，它都只需要一个temp变量，所以空间复杂度，为O(1)；"),_("br")])]),t._v(" "),_("h4",{attrs:{id:"_1-1-2-总结："}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-2-总结："}},[t._v("#")]),t._v(" 1-1-2 总结：")]),t._v(" "),_("blockquote",[_("p",[t._v("总结：对于同一个问题，采用不同编码方法，对时间和空间的损耗是有可能不一样的")])]),t._v(" "),_("h3",{attrs:{id:"_1-2-时间复杂度与代码结构的关系"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-时间复杂度与代码结构的关系"}},[t._v("#")]),t._v(" 1-2 时间复杂度与代码结构的关系")]),t._v(" "),_("blockquote",[_("p",[t._v("时间复杂度，与代码结构有非常强的关系"),_("br")])]),t._v(" "),_("h4",{attrs:{id:"_1-2-1-实例分析1："}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-1-实例分析1："}},[t._v("#")]),t._v(" 1-2-1 实例分析1：")]),t._v(" "),_("blockquote",[_("p",[t._v("下面看一个实例：定义一个数组a = [1,4,3],查找数组a中的最大值"),_("br")])]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v(" function s1_3(){\n   let a = [1,4,3]\n   let b = -1;\n   for(let i = 0; i < a.length; i++){\n     if(a[i] > b){\n       b = a[i]\n     }\n   }\n   return b;\n }\n")])])]),_("blockquote",[_("p",[t._v("以上方法，时间复杂度，就是将数组遍历一遍，也就是O(n)；"),_("br")])]),t._v(" "),_("h4",{attrs:{id:"_1-2-2-实例分析2："}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-2-实例分析2："}},[t._v("#")]),t._v(" 1-2-2 实例分析2：")]),t._v(" "),_("blockquote",[_("p",[t._v("下面看再一个实例：定义一个数组a = [1,3,4,3,4,1,3],查找数组中出现次数最多的那个数组"),_("br")])]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v(" function s1_4(){\n   let a = [1,3,4,3,4,1,3];\n   let max_val = -1;\n   let max_time = 0;\n   let time_temp = 0;\n   for(let i = 0;i < a.length;i++){\n      time_temp = 0;\n      for(let j = 0; j < a.length; j++){\n        if(a[i] === a[j]){\n          time_temp++\n        };\n      }\n      if(time_temp > max_time){\n        max_time = time_temp;\n        max_val = a[i];\n      }\n   }\n   return max_val\n }\n")])])]),_("blockquote",[_("p",[t._v("这段代码中，使用了双循环，时间方面的消耗就是n*n,即时间复杂度O("),_("sup",[t._v("n")]),t._v(")；"),_("br"),t._v("\n由以上例子，我们可以做以下结论："),_("br")])]),t._v(" "),_("h4",{attrs:{id:"_1-2-3-总结："}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-3-总结："}},[t._v("#")]),t._v(" 1-2-3 总结：")]),t._v(" "),_("ul",[_("li",[t._v("一个顺序结构的代码，复杂度为O(1)")]),t._v(" "),_("li",[t._v("二分查找，采用分而治之的二分策略，时间复杂度为O(logn)")]),t._v(" "),_("li",[t._v("一个简单的for循环，时间复杂度为O(n)")]),t._v(" "),_("li",[t._v("两个顺序执行的for循环，时间复杂度是O(n)+O(n)=O(2n)，其实也是 O(n)")]),t._v(" "),_("li",[t._v("两个嵌套的for循环，时间复杂度为O(n"),_("sup",[t._v("2")]),t._v(")")])]),t._v(" "),_("h3",{attrs:{id:"_1-3-降低时间复杂度的必要性"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-降低时间复杂度的必要性"}},[t._v("#")]),t._v(" 1-3 降低时间复杂度的必要性")]),t._v(" "),_("blockquote",[_("p",[t._v("很有必要，不同的时间及空间复杂度，会直接影响到计算次数")])]),t._v(" "),_("h3",{attrs:{id:"_1-4-总结"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-总结"}},[t._v("#")]),t._v(" 1-4 总结")]),t._v(" "),_("blockquote",[_("p",[t._v("复杂度细分为时间复杂度和空间复杂度，其中时间复杂度与代码的结构设计高度相关；"),_("br"),t._v("\n空间复杂度与代码总数据结构的选择高度相关"),_("br")])]),t._v(" "),_("ul",[_("li",[t._v("1.复杂度它与具体常系数无关；O(n) 与 O(2n)表示一样的复杂度")]),t._v(" "),_("li",[t._v("2.复杂度相加时，选择高者作为结果；也就是说 O(n²)+O(n) 和 O(n²) 表示的是同样的复杂度")]),t._v(" "),_("li",[t._v("3.O(1) 也是表示一个特殊复杂度；即任务与算例个数 n 无关")])])])}),[],!1,null,null,null);a.default=e.exports}}]);