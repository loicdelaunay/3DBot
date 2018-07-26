global.class = [];

try{
    global.class.field = require(global.appRoot + '/my_modules/my_class/classes/field');
    global.mymodule.logmanager.addLog("All classes loaded",global.enum.type.success,global.enum.context.class);
}catch (e) {
    global.mymodule.logmanager.addLog("Error loading classes : " + e,global.enum.type.critical,global.enum.context.class);
}