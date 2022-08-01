let Mock = require("mockjs")
Mock.mock("/api/login","post",(config)=>{
    console.log(config.body); //string
    let body= JSON.parse(config.body)
    console.log(body);
    let username = body.username;
    let password = body.password;
    if(username==='login'&&password==='123'){
        return {
            status:200,
            message:"success",
            data:{
                username,
                password,
                token:"111www"
            }
        }
    }else{
        return {
            status:501,
            message:"fail",
        }
    }
    
})