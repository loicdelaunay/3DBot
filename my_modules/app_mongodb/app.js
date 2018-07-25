global.module.mongoClient.connect("mongodb://localhost/3dbot", function(error, db) {
    if (error){
        global.mymodule.logmanager.addLog("3Dbot can't find database :( working in amnesia mode ... error : " + error,global.enum.type.error,global.enum.context.database);
    }else{
        global.mymodule.logmanager.addLog("Connected to the 3dbot database",global.enum.type.info,global.enum.context.database);
    }
});