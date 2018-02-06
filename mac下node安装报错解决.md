### mac下node安装提示command not found

刚从windows转到mac，从官网下载了node的.pkg文件安装node，安装好后，在mac终端下输入npm -v 和 node -v均提示 command not found，参考了网上的方法，终于得解

第一步：创建.bash_profile文件，～表示在～目录下，.表示隐藏文件，打开终端，输入命令如下
touch ~/.bash_profile  

第二步：打开.bash_profile文件，输入命令如下：
open -t ~/.bash_profile  

第三步：这时候会弹出一个空白的文本编辑框，在文本编辑框里面第一行编辑：
export PATH=/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin  
command + s保存文件。

第四步：保存.bash_profile文件，输入命令：
source .bash_profile  

第五步：再输入npm -v 或者node -v  就能看到版本号啦~
