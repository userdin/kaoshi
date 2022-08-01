let Mock = require("mockjs")
//  /a拦截
let arr = ["一一","二二","三三"]
// /api/aa

// 正则/api/aa
Mock.mock(/\/api\/aa/,"get",(options)=>{
    console.log(options);
    // {url:"/api/aa",type:"get",body:null}
    return arr
})

Mock.mock("/api/ab","post",(options)=>{
    console.log(10,options);
    return {
        status:200,
        message:"success",
        data:arr,
    }
})