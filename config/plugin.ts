import {EggPlugin} from 'egg';

const plugin: EggPlugin = {
    nunjucks: {
        enable: true,
        package: 'egg-view-nunjucks'
    },
    mongoose: {
        enable: true,
        package: 'egg-mongoose'
    },
    oss: {
        enable: true,
        package: 'egg-oss'
    },
    validate: {
        enable: true,
        package: 'egg-validate'
    },
    bcrypt: {
        enable: true,
        package: 'egg-bcrypt'
    },
    jwt: {
        enable: true,
        package: 'egg-jwt'
    },
    redis: {
        enable: true,
        package: 'egg-redis'
    },
    cors: {
        enable: true,
        package: 'egg-cors'
    }
};

export default plugin;
