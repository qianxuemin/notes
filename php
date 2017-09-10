1、基本配置
安装xampp   phph项目放到htdocs目录下 
启动apache 访问localhost/项目文件夹  
启动mysql  访问localhost  找到右上角'phpmyadmin'进行数据库设置

2、乱码。PHP+MYSQL 出现乱码的解决方法
mysql_query("SET NAMES 'UTF8'"); 
mysql_query("SET CHARACTER SET UTF8"); 
mysql_query("SET CHARACTER_SET_RESULTS=UTF8'"); 

3、魔术方法。PHP 将所有以 __（两个下划线）开头的类方法保留为"魔术方法"（Magic methods）。
会自动调用，所以在定义类方法时，除了下述魔术方法，建议不要以 __ 为前缀。
如构造函数__construct()， 析构函数__destruct()， __call()， __callStatic()， __get()， __set()， __isset()，
__unset()， __sleep()， __wakeup()， __toString()， __invoke()， __set_state()，
__clone() 和 __debugInfo() 
