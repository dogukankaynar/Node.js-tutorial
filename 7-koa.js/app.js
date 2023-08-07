const Koa = require('koa')
const app = new Koa;

app.use(ctx=>{
    if(ctx.path==='/')
    {
        ctx.body="<h1>Welcome İndex</h1>"
    }
    else if(ctx.path==="/about"){
        ctx.body="<h1>Welcome About</h1>"
    }
    else if(ctx.path==="/about"){
        ctx.body="<h1>Welcome About</h1>"
    }
    else if(ctx.path==="/contact"){
        ctx.body="<h1>Welcome Contact</h1>"
    }
    else{
        ctx.body="<h1>404</h1>"
    }
})

const port =3000;

app.listen(port, () => {
    console.log(`Sunucu port ${port} da çalışmaya başladı...`);
  });