const config = require('./my_modules/config/app');
const module_loader = require('./my_modules/module_loader/app');

if(process.env.NODE_ENV === "dev"){
    console.log("3Dbot executed in developpement mode");
}else{
    console.log("3Dbot executed in production mode");
}