class Cache {
    // 构造函数的实现
    constructor(is_local = true) {
        this.storage = is_local ? localStorage : sessionStorage
    }

    // 设置的操作
    setCache(key, value) {
        if (value) {
            this.storage.setItem(key, JSON.stringify(value))
        } else {
            throw new Error("值不存在...")
        }
    }

    // 获取的操作
    getCache(key) {
        const result = this.storage.getItem(key)
        if (result) {
            return JSON.parse(result)
        } else {
            throw new Error("键对应的值不存在....")
        }
    }

    // 移除的操作
    removeCache(key) {
        this.storage.removeItem(key)
    }

    // 清空的操作
    clearCache() {
        this.storage.clear()
    }
}

// 直接将我们的工具函数实现导出
export {
    Cache
}