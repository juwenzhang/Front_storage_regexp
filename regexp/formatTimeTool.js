// 通过我们的默认参数来实现我们的默认的匹配的规则实现
function formatTimeTool(formatTime, formatString="YYYY-MM-DD hh:mm:ss") {
    const date = new Date(formatTime);
    const dateO = {
        "Y+": date.getFullYear(),
        "M+": date.getMonth() + 1,
        "D+": date.getDate(),
        "h+": date.getHours(),
        "m+": date.getMinutes(),
        "s+": date.getSeconds(),
    }

    let fmtString = ""
    for(const key in dateO) {
        if(new RegExp(key, "ig").test(formatString)) {
            const value = typeof dateO[key] === "string" ? dateO[key].padStart(2, "0")
                : dateO[key].toString().padStart(2, "0")
            formatString = formatString.replace(new RegExp(key, "ig"), value);
        }
    }
    fmtString = formatString
    return fmtString;
}

const formatTime = formatTimeTool(1342342523434)


// 实现导出我们的工具函数
export {
    formatTimeTool
}