const express = require('express')
const app = express()
const home = require('./src/routes/home')
// *앱 세팅  //
app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use(express.static(`${__dirname}/src/public`)) // 정적 경로 추가 __dirname : 현재 __dirname이 작성된 파일 (현재 app.js)가 속한 경로를 뜻함
app.use('/', home) // use -> 미들웨어를 등록해주는 메서드

module.exports = app;