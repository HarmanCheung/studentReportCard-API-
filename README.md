# 练习：学生成绩单（API版）

## 练习目标

- 基于新需求，重构既有代码
- REST API的简单设计
- Express.js服务器的基本使用
- Redis数据存储的基本使用
- 通过AJAX请求获取服务端数据

## 练习要求

使用[Express.js](http://www.runoob.com/nodejs/nodejs-express-framework.html)实现一个学生成绩管理系统的REST API服务器（以[Redis](https://www.w3cschool.cn/redis/)为数据存储），重构自己实现的[学生成绩单（Web版）](https://github.com/tws-practice/student-score-sheet-web-version)，以实现一个CS架构（Web端+服务端）的学生成绩管理系统，具有以下功能：

- 添加一条学生成绩信息
- 查询多个学生成绩信息
- 修改一条学生成绩信息
- 删除一条学生成绩信息

### 第一阶段

搭建一个Express.js服务器，实现一个简单的GET "/" API，返回”hello world“。

### 第二阶段

在项目中使用Redis，修改第一阶段的GET "/" API，将该API被请求次数记录到Redis里，并将被请求次数返回。

### 第三阶段

实现一个POST ”/add-anything“ API，接收用户提交的数据，将其存储到Redis，并将用户提交的数据返回。

备注：推荐使用[Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?hl=en)（Chrome插件）来测试POST API

### 第四阶段

修改第三阶段的POST ”/add-anything“ API，要求：

- 将API命名由”/add-anything“改为“/student”
- 对用户提交的数据进行输入校验，输入必须符合学生成绩单（Web版）中的格式，否则返回错误提示`请按正确的格式输入（格式：姓名, 学号, 学科: 成绩, …）`和错误码`400`
- 输入格式正确则将学生成绩存入Redis，并将学生成绩以[JSON](http://www.w3school.com.cn/json/json_syntax.asp)格式返回

### 第五阶段

修改第二阶段的GET ”/" API，要求：

- 将API命名由”/“改为“/students”
- 接收多个学号作为查询参数（Query  Parameters）
- 对用户提交的数据进行输入校验，输入必须满足格式：`学号, 学号,...`，否则返回错误提示`请按正确的格式输入要打印的学生的学号（格式： 学号, 学号,…）`和错误码`400`
- 输入格式正确则在Redis中查询对应的学生成绩，以JSON格式返回所查询学生的成绩以及他们的**总分平均分**和**总分中位数**

### 第六阶段

实现一个PUT “/students/:id” API，要求：

- 接收用户提交的数据
- 以学号为ID在Redis中查找学生信息
- 如果未找到，返回错误提示`该学生不存在`和错误码`404`
- 如果找到，根据用户提交的数据修改学生信息，将其存储到Redis，并将更新后的数据以JSON格式返回

### 第七阶段

实现一个DELETE “/students/:id”API，要求：

- 接收用户提交的数据
- 以学号为ID在Redis中查找学生信息
- 如果找到，从Redis中删除该学生信息，并返回成功提示`该学生已成功删除`
- 如果未找到，返回错误提示和错误码`404`

### 第八阶段

修改自己实现的学生成绩单（Web版），要求：

- 将所有数据存储操作从localStorage替换为向学生管理API服务器发送[AJAX](http://www.w3school.com.cn/ajax/ajax_intro.asp)请求

### 输出结果

将代码库地址提交到教练指定的位置。

代码库需包含：

1. 说明如何运行和测试代码的README.md文件
2. 运行结果的截图文件（一个功能一张截图）

## 如何开始：

1. 克隆项目代码：`git clone https://github.com/tws-practice/student-score-sheet-api-version`
2. （Ubuntu下）安装redis： `apt-get install redis-server`
3. 安装express.js：`npm install`
4. 运行redis：`redis-server`
5. 打开项目文件，完成练习。

## 学习资源

HTTP教程：[https://www.w3cschool.cn/http/](https://www.w3cschool.cn/http/)

RESTful API 设计指南：[http://www.ruanyifeng.com/blog/2014/05/restful_api.html](http://www.ruanyifeng.com/blog/2014/05/restful_api.html)

JSON语法：http://www.w3school.com.cn/json/json_syntax.asp

AJAX教程：[http://www.w3school.com.cn/ajax/ajax_intro.asp](http://www.w3school.com.cn/ajax/ajax_intro.asp)

JavaScript 闯关记：[https://github.com/stone0090/javascript-lessons/](https://github.com/stone0090/javascript-lessons/)