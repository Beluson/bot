module.exports = {
    app: {
        px: '$$',
        token: 'OTUzOTEzNzA2MTEzMjczODY2.YjLfXg.IS9FFpsIO4LstdwccA9ZAImi_Ww',
        playing: '||Polite Pepe||#0791'
    },

    opt: {
        DJ: {
            enabled: true,
            roleName: 'ADMIN',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
