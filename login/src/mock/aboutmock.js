let Mock = require("mockjs")
//  /a拦截
let arr = ["1","2","3","4","5"]
// 正则/api/aa
Mock.mock(/\/api\/acd/,"get",(options)=>{
    console.log("about",options);
    // {url:"/api/aa",type:"get",body:null}
    return arr
})

Mock.mock("/api/asd","post",(options)=>{
    console.log("aboutpost",options);
    return {
        status:200,
        message:"success",
        data:arr,
    }
})