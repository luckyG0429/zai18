const p2= new Promise((resolve,reject)=>{
//  resolve('成功');
  reject('失败');
})

p2.then(value=>console.log(value),reason=>console.log(reason));

const p1= new Promise((resolve,reject)=>{
  resolve(1);
});

p1.then(value=>{console.log(value+1);return value+1}).then(value=>{console.log(value)});
