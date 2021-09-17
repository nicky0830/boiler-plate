
const express = require('express')
//express.js 경로로 들어가는 것 
//express는 node의 프레임워크, node-module에 있는 express(node.js의 framework )를 가져온다 
//require(): node.js에서는 require메서드를 통해 외부 모듈을 가져올 수 있다 
//require메서드는 파라미터로 추가할 모듈의 파일 경로값을 받습니다 
//src를 받아오고 소스 파일을 읽어서 저장한 뒤 빈 해시를 만들어두고 eval을 한 뒤(복붙이나 다름 없다) return을 한다 
const app = express()
// function을 이용해서 새로운 express app을 만들고 
const port = 4747
//백서버 포트 : 7000 
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://nikki:nicky1004@boilerplate.lrwjm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { 
    useNewUrlParser: true, useUnifiedTopology: true
}).then(()=>console.log('MongoDB Connected...'))
.catch(err=>console.log(err))

app.get('/', (req, res) => res.send('Hello World!'))
// app에서 require하면 response로 루트 디렉토리에 오면 hello world 출력되게 한다 
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
//port=5000에서 앱을 실행 

