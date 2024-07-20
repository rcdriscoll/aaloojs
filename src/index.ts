console.log(" 🥔 Powered by aaloojs 🥔 ")

class Aaloo {
    error(thingToLog: string, objectToLog: Object) {
        if (objectToLog) {
            console.error(" 🥔 " + thingToLog, objectToLog);
        } else {
            console.error(" 🥔 " + thingToLog);
        }
    }

    log(thingToLog: string, objectToLog: Object) {
        if (objectToLog) {
            console.log(" 🥔 " + thingToLog, objectToLog);
        } else {
            console.log(" 🥔 " + thingToLog);
        }
    }
}

const aaloo = new Aaloo()

export default aaloo;