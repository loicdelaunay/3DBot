/**
 * Discord module autoresponse
 */
class discordPermission {
    getPermission(id){
        if(id === "118072401681448960"){
            return 5
        }else{
            return 1
        }
    }
}
module.exports = new discordPermission();
