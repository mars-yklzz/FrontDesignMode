// es6 class
class SingleCase {
    constructor() {

    }
    static getInstance() {
        if (!SingleCase.instance) {
            SingleCase.instance = new SingleCase() 
        }
        return SingleCase.instance 
    }
}

const s1 = SingleCase.getInstance()
const s2 = SingleCase.getInstance()
console.log(s1 === s2) // true

// 闭包形式
SingleCase.getInstance = (function () {
    let instance
    return function () {
        if (!instance) {
            instance = new SingleCase()
        }
        return instance
    }
})()