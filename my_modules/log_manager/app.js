const chalk = require('chalk');

global.log = [];


class logManager {

    /**
     * Create log object
     * @param message
     * @param type
     * @returns {{date: number, message: *, type: *}}
     */
    addLog(message, type , context) {

        if(context === undefined){
            context = "";
        }

        function NotAValidType() {
        }

        try {
            if (type !== 'INFO' && type !== 'SUCCESS' && type !== 'ERROR' && type !== 'WARNING' && type !=='CRITICAL') {
                throw new NotAValidType();
            }
        } catch (e) {
            if (e instanceof NotAValidType) {
                console.error('Error logmanager type invalid for the message : ' + message + ' and type : ' + type + 'please use INFO/SUCCESS/ERROR/WARNING/CRITICAL');
            }
        }

        let log = {
            timestamp: Date.now(),
            message: message,
            type: type,
            context: context,
        };

        global.log.push(log);
        this.readLog(log);
    }

    readLog(log) {

        switch (log.type) {
            case "INFO":
                if(log.context === ""){
                    console.log('[ ' + chalk.blue(log.type) + ' ] : ' + log.message);
                }else{
                    console.log('[ ' + chalk.blue(log.type) + ' ]' + ' [ ' + chalk.blue(log.context) + ' ] : ' + log.message);
                }
                break;
            case "SUCCESS":
                if(log.context === ""){
                    console.log('[ ' + chalk.green(log.type) + ' ] : ' + log.message);
                }else{
                    console.log('[ ' + chalk.green(log.type) + ' ]' + ' [ ' + chalk.green(log.context) + ' ] : ' + log.message);
                }
                break;
            case "WARNING":
                if(log.context === ""){
                    console.log('[ ' + chalk.yellow(log.type) + ' ] : ' + log.message);
                }else{
                    console.log('[ ' + chalk.yellow(log.type) + ' ]' + ' [ ' + chalk.yellow(log.context) + ' ] : ' + log.message);
                }
                break;
            case "ERROR":
                if(log.context === ""){
                    console.log('[ ' + chalk.red(log.type) + ' ] : ' + log.message);
                }else{
                    console.log('[ ' + chalk.red(log.type) + ' ]' + ' [ ' + chalk.red(log.context) + ' ] : ' + log.message);
                }
                break;
            case "CRITICAL":
                if(log.context === ""){
                    console.log(chalk.bgRed('[ ' +log.type + ' ] : ' + log.message));
                }else{
                    console.log(chalk.bgRed('[ ' + log.type + ' ]' + ' [ ' + log.context + ' ] : ' + log.message));
                }
                break;
        }
    }

}

module.exports = new logManager();