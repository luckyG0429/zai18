var emitter = new events.EventEmitter();
emitter.on('event_foo',function(){
  //TODO
})

/*
关于node 提供的最基本事件模块,可以看到：
 事件处理方式正是基于高阶函数的特性来完成的。

 javascript中的高阶函数，数组的一些方法是典型的高阶函数
如下：
 foreach()
 map()
 reduce()
 reduceRight()
 filter()
 some()
 every()

*/
