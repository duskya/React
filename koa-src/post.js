const Koa =require('koa')
const app =new Koa()
const bodyParser = require('koa-bodyparser')
const { is } = require('type-is')
//使用koa-bodyparser中间件
app.use(bodyParser())

app.use(async(ctx)=>{
    if(ctx.url === '/' && ctx.method === 'GET'){
        let html = `
        <h1>koa</h1>
        <form method="POST" action="/">
        Name:<input name="name" /><br/>
        Email:<input name="email" /><br/>
        <button type="submit">submit</button>
        </form>
        `
        ctx.body = html
    }else if(ctx.url==='/'&& ctx.method==='POST'){
     // 当POST请求的时候，中间件koa-bodyparser解析POST表单里的数据，并显示出
    ctx.body = ctx.request.body
    }else{
        ctx.body = `<h1>404</h1>`
    }
})
app.listen(3000)