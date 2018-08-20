/**
 * Discord module music
 */
class discordMusic {
    playmusicurl(url, msg) {
        if (msg.member.voiceChannel) {
            msg.member.voiceChannel.join().then(connection => { //
                var music = connection.playArbitraryInput(url);
                music.setVolume(1);
            }).catch(console.log);
        } else {
            msg.reply('Il faut dabord rejoindre un channel avant!');
        }
    }

    playmusic(songname, msg) {
        if (msg.member.voiceChannel) {
            msg.member.voiceChannel.join().then(connection => { //
                var music = connection.playFile(global.appRoot + '/data/music/' + songname);
                music.setVolume(1);
            }).catch(console.log);
        } else {
            msg.reply('Il faut dabord rejoindre un channel avant!');
        }
    }
}

module.exports = new discordMusic();
