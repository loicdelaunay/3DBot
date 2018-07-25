global.module.mongoClient.connect("mongodb://localhost/3dbot", function(error, db) {
    if (error){
        console.error("Not connected to 3dbot database ! Please launch mongodb or create a database")
    }else{
        console.log("Connected to the 3dbot database");
    }
});