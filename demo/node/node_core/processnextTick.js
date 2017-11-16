
//关于定时器的红黑树

process.nextTick = function(callback){
  if(process._exiting) return;

  if(tickDepth >= process.maxTickDepth)
    maxTickWarn();
  var tock = { callback: callback};
  if(process.domain) tock.domain = process.domain;
  nextTickQueue.push(tock);
  if(nextTickQueue.length){
    process._needTickCallback();
  }
};
process.nextTick(function(){
  console.log(1);
})
