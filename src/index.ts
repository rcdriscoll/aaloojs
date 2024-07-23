console.log(" 🥔 Powered by aaloojs 🥔 ")

class Aaloo {
    error(...args) {
        console.error(" 🥔 ", ...args)
    }

    log(...args) {
        console.log(" 🥔 ", ...args)
    }

    sharvil() {
        console.log("🥔")
    }
}

const aaloo = new Aaloo()

export default aaloo;