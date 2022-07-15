import 'dotenv/config'

const CONSTANTS = {
    APP: {
        ENV: process.env.NODE_ENV || 'development',
        PORT: process.env.PORT || 3000,
    },
};

export default CONSTANTS;
