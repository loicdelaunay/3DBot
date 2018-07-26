global.module.express_app.set('views', global.appRoot + '/app/views/');
global.module.express_app.use(global.module.express.static(global.appRoot + '/app/'));

var infos = {
    env: process.env.NODE_ENV
};



global.module.express_app.get('/', function (req, res) {
    res.render('index.ejs',{
        infos : infos
    });
});

global.module.http.listen(global.config.port, function () {
    global.mymodule.logmanager.addLog('3DBot running on port : ' + global.config.port,global.enum.type.info,global.enum.context.database);
});