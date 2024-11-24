// const token = "code by 76433"
// const username = "76433"
// const age = "18"
//
// // 开始实现我们的设置数据保存在我们的 本地 localstorage 中
// localStorage.setItem("token", token)
// localStorage.setItem("username", username)
// localStorage.setItem("age", age)


// 在我们的开发中长设置的代码是
let token = localStorage.getItem("token")
if (!token) {
    console.log("开始实现我们的从服务器中获取 token")
    token = "vbdfsfsdgvdfbhdfsdbfggsdfgds"
    localStorage.setItem("token", token)
}


// 开始我们实现我们的登录校验
let username = localStorage.getItem("username")
let password = localStorage.getItem("password")
if (!username || !password) {
    console.log("用户自己开始实现输入密码")
    username = "76433"
    password = "123456"
    localStorage.setItem("username", username)
    localStorage.setItem("password", password)
}