console.log(" 🥔 Powered by aaloojs 🥔 ")

class Aaloo {
    error(...args) {
        console.error(" 🥔 ", ...args)
    }

    log(...args) {
        console.log(" 🥔 ", ...args)
    }
}

const aaloo = new Aaloo()

export default aaloo;