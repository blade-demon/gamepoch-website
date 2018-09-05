# webapp-scafford

Webapp 开发脚手架，使用 gulp，babel, browserify 搭建的前端开发脚手架, 可以使用 ES6，ES7 的部分最新功能比如 Async/Await 等。

## 开始开发

```
  npm install
  bower install
  gulp
  npm run dev
```

```
  npm run dist
```

## 脚手架功能及简述, 使用 gulp 工具构建工作流：

#### 1. 将 source 文件夹的 html 文件 copy 到 dist 文件夹下

#### 2. 将 source 文件夹的 jade 文件转换成 html 文件 copy 到 dist 文件夹下面

#### 3. 使用 Babel 将 source/js 文件夹的 ES6 Javascript 文件转换成 ES5 文件夹下面

#### 4. 使用 browserify 将 ES6 文件转换成前端浏览器可执行的 JS 文件，解决 require 的问题

#### 5. 将 source/scss 文件夹下面的 sass 文件转换成 css 文件，并使用 autoprefixer 使 css 对各种浏览器的更新更加完善

#### 6. jquery 和 bootstrap 通过 bower 安装，并使用 gulp 将 js,css 文件 copy 到.tmp 文件夹下，然后再压缩 js 文件，将 js 和 css 文件 copy 到 dist/js 和 dist/css 文件夹下面。

#### 7. gulp serve:dev 监听 html，jade, js，sass 文件的变化自动刷新页面。

#### 8. 增加 Lazysizes 实现页面懒加载。

## 脚手架压缩规则

- develop
  - js
    - console
    - 不压缩
      -css
    - 不压缩
- production
  - js
    - 放弃 console.log(), 压缩文件
  - css, html
    - 压缩

###

#部署
`scp -r build/* root@139.196.239.213:/root/gamepoch-website-en-test`
