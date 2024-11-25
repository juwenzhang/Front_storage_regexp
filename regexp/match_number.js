const re01 = /\d+/g  // 开启贪婪匹配的模式
const re02 = /\d/g  // 不开启贪婪匹配的模式


const message = "vdfv12342b e234234 fferf343422345"

// 开始实现我们的匹配数字了
console.log(message.match(re01))
console.log(message.match(re02))