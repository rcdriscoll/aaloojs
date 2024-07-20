console.log("🥔 Powered by aaloojs 🥔")

class Aaloo {
    error(thingToLog) {
        console.error("🥔" + thingToLog);
    }
    log(thingToLog){
        console.log("🥔" + thingToLog);
    }
}

const aaloo = new Aaloo()

module.exports = aaloo;