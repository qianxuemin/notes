1、模块思想
按需引入vs全局引入
多点暴露vs全局暴露
import {each,...} from 'underscore.js';//es6
var _ = require('underscore');//CommonJS

export {eachm,map,...}//es6
module.exports=_;//CommonJS

2、反引号拼接字符串
`hello ${a}`  相当于 'hello'+a

3、解构
let [a,b]=[1,2,3,4]

4、promise 告别回调地狱
比如实现帧动画
function delay(time){
    return new Promise(function(resolve, reject){
        //做一些异步操作
        setTimeout(function(){
            resolve('可传参数');
        }, time);
    })          
}
delay(100).then(function(){
  console.log('第一帧')
  return delay(1000);
}).then(function(){
  console.log('第二帧')
  return delay(2000);
}).then(function(){
  console.log('第三帧')
  return delay(3000);
})
核心原理：执行一个异步任务，会返回一个结果，这个结果是个promise
它保证他将会变成一个成功或者失败
