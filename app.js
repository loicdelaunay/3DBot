const config = require('./config/app');
const module_loader = require('./my_modules/module_loader/app');

if(process.env.NODE_ENV === "dev"){
    global.mymodule.logmanager.addLog("3Dbot executed in developpement mode",global.enum.type.info);
}else{
    global.mymodule.logmanager.addLog("3Dbot executed in production mode",global.enum.type.info);
}