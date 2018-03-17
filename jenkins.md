# 一、jenkins简介
> Jenkins是一个开源软件项目，是基于Java开发的一种[持续集成](https://baike.baidu.com/item/%E6%8C%81%E7%BB%AD%E9%9B%86%E6%88%90)工具，用于监控持续重复的工作，旨在提供一个开放易用的软件平台，使软件的持续集成变成可能。
官网地址：[https://jenkins.io/](https://jenkins.io/)

# 二、安装配置
## 1、远程登录到服务器 检查是否有JDK环境
```
ssh qxmcentos //远程服务器别名
```
![远程登录 检查环境](https://upload-images.jianshu.io/upload_images/11153252-a2587e0f377634b4.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
如果没有java环境(centos下) 安装jdk
```
yum search java | grep -i --color JDK
yum install java-1.8.0-openjdk.x86_64
```
## 2、下载安装
找到下载链接地址
![下载链接地址](https://upload-images.jianshu.io/upload_images/11153252-2f78a4193c37bad0.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
开始下载
```
wget http://mirrors.jenkins.io/war-stable/latest/jenkins.war //下载
```
![001.gif](https://upload-images.jianshu.io/upload_images/11153252-3f211e89c8b71067.gif?imageMogr2/auto-orient/strip)

开始运行
```
java -jar jenkins.war --httpPort=8080
```
![开始运行](https://upload-images.jianshu.io/upload_images/11153252-0320ddeeb2f764c6.gif?imageMogr2/auto-orient/strip)

若8080端口未开放 开放端口（阿里云服务器需要到安全组里配置）
在浏览器访问

![jenkins界面](https://upload-images.jianshu.io/upload_images/11153252-ab66a33b173356ce.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
到服务器获取密码 
```
vi .jenkins/secrets/initialAdminPassword
```
填入密码后到如下界面 点击左侧安装插件

![初始界面](https://upload-images.jianshu.io/upload_images/11153252-f8ba74981251f6b9.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
开始安装插件

![安装插件](https://upload-images.jianshu.io/upload_images/11153252-27405f065160c61e.gif?imageMogr2/auto-orient/strip)
安装过程中留心后台日志

![后台日志](https://upload-images.jianshu.io/upload_images/11153252-475ba5808310f046.gif?imageMogr2/auto-orient/strip)
安装完成后填写信息 

![创建管理员用户](https://upload-images.jianshu.io/upload_images/11153252-faa470d83dd09e21.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
然后点击__使用admin账户继续__

![开始使用](https://upload-images.jianshu.io/upload_images/11153252-8d127d4a6565d16c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
然后就可以进行自定义配置了，比如安装node插件

![安装插件](https://upload-images.jianshu.io/upload_images/11153252-c78bea8f60e331e8.gif?imageMogr2/auto-orient/strip)

# 三、创建任务
![创建任务](https://upload-images.jianshu.io/upload_images/11153252-e97b2df704191467.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![第一个任务](https://upload-images.jianshu.io/upload_images/11153252-a5278c203486475b.gif?imageMogr2/auto-orient/strip)
配置完成后在主界面就可以看到构建任务列表

![任务列表](https://upload-images.jianshu.io/upload_images/11153252-087db4692def3cd7.gif?imageMogr2/auto-orient/strip)
点击任务列表右侧__图标__开始构建 我演示点击三次 构建三次

![开始构建](https://upload-images.jianshu.io/upload_images/11153252-234514628a807234.gif?imageMogr2/auto-orient/strip)
查看jenkins工作目录 

![工作目录](https://upload-images.jianshu.io/upload_images/11153252-5a9d63b40cf7f98a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
回到终端可以看到产生了一个task01的目录

![jenkins工作目录](https://upload-images.jianshu.io/upload_images/11153252-dad1db85d8c08000.gif?imageMogr2/auto-orient/strip)

~the end










