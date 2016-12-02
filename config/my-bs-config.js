module.exports = {
    port: 3001,
    files: ["./src/**/*.{html,htm,css,js}"],
    server: {
        baseDir: "./dist",
        middleware: {
            1: require('connect-history-api-fallback')({index: '/index.html', verbose: true}),
            2: require('compression')()
        }
    }
};