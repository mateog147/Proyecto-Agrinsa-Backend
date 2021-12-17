require('dotenv').config();

const config = {
    env: process.env.NODE_ENV || 'dev',
    isProd: process.env.NODE_ENV === 'production',
    dbUrl: process.env.MONGODB_URI,
    port: process.env.PORT || 3006
}

module.exports = { config };