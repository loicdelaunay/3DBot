global.module.express_app.set('views', global.appRoot + '/app/views/');
global.module.express_app.use(global.module.express.static(global.appRoot + '/app/'));

global.module.express_app.get('/', function (req, res) {
    res.render('index.ejs');
})

global.module.express_app.listen(3000, function () {
    console.log('3Dbot running on port : 3000')
})
