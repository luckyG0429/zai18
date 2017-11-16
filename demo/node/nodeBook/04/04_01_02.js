var toString = Object.prototype.toString;

var isString = function (obj) {
  return toString.call(obj) == ['object String'];
}

var isFunction = function (obj) {
  return toString.call(obj) == ['object Function'];
}

//在js中进行类型判断时，通常会进行上述的方法定义
/*
Object.prototype.toString 可以检测出一个对象的类型
*/

var toString = Object.prototype.toString;

//isType()函数预先指定type值，然后返回一个新的函数
var isType = function(type){
   return function(obj){
     return toString.call(obj)=='[object '+type+']';
   };
}

var isString=isType('String');
var isFunction = isType('Function')

//以上这种通过指定部分参数来产生一个新的定制函数的形式 -- 就是偏函数。
