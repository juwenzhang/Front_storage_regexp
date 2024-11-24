// 先实现定义我们的正则表达式
const re = /abc/ig

// 定义字符串
let message = "fabc123 fABC321 Abc213 faBc3134"

// 开始实现我们的匹配的机制,忽略大小写，将 abc -> cba
message = message.replace(re, "cba")
console.log(message)

// 实现将数字全部删除
message = message.replace(/[0-9]/g, "")
console.log(message)