一、shim与polyfill。shim 是硬垫片，polyfill 是软垫片,按需加载。
1.Shim
一个shim是一个库,它将一个新的API引入到一个旧的环境中,而且仅靠旧环境中已有的手段实现.
有时候也称为shiv,比如https://github.com/aFarkas/html5shiv 让ie浏览器支持H5
如ie9支持h5的canvas需要在页面引入：http://html5shiv.googlecode.com/svn/trunk/html5.js

2.Polyfill ,babel-polyfill、 css polyfill
一个polyfill是一段代码(或者插件),提供了那些开发者们希望浏览器原生提供支持的功能.
因此,一个polyfill就是一个用在浏览器API上的shim.我们通常的做法是先检查当前浏览器是否
支持某个API,如果不支持的话就加载对应的polyfill.然后新旧浏览器就都可以使用这个API了.

二、语法
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
var 会声明提前 let不会

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

5、async表示是一个async函数
await只能用在这个函数里
await后面跟着的应该是一个promise对象
async await是generator函数的语法糖，解决了异步嵌套黑洞的写法问题 真正解决异步问题的是promise
区分for in   for of


6、babel -node app.js
7、语法检查
http://jshint.com/

8、var arr1=[1,2,3];
var arr2=[...arr1];//es
相当于es5的
var arr2=[].concat(arr1);
或 var arr2=arr1.slice(0);
