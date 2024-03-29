import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg'
import { join } from 'path'
import * as dovenv from 'dotenv'
dovenv.config()
export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;
  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1631677352881_6029';

  // add your egg config in here
  config.middleware = [ 'customError' ];

  config.security = {
    csrf: {
      enable: false
    },
    domainWhiteList: [ 'http://localhost:8080' ]
  }
  config.oss = {
    client: {
      // accessKeyId1:1
      accessKeyId: process.env.ALC_ACCESS_KEY || '',
      accessKeySecret: process.env.ALC_SECRET_KEY || '',
      bucket: 'lego-backend-ldy2',
      endpoint: 'oss-cn-beijing.aliyuncs.com'
    }
  }
  config.view = {
    defaultViewEngine: 'nunjucks'
  }
  config.logger = {
    consoleLevel: 'DEBUG'
  }
  config.mongoose = {
    url: 'mongodb://localhost:27017/lego'
  }
  config.bcrypt = {
    saltRounds: 10
  }
  config.session = {
    encrypt: false
  }
  config.jwt = {
    secret: '1234567890'
  }
  config.redis = {
    client: {
      port: 6379,
      host: '127.0.0.1',
      password: '',
      db: 0
    }
  }
  // config.multipart = {
  //   mode: 'file',
  //   tmpdir: join(appInfo.baseDir, 'uploads')
  // }
  config.static = {
    dir: [
      { prefix: '/public', dir: join(appInfo.baseDir, 'app/public') },
      { prefix: '/uploads', dir: join(appInfo.baseDir, 'uploads') }
    ]
  }
  config.cors = {
    origin: 'http://localhost:8080',
    allowMethods: 'GET,HEAD,PUT,OPTIONS,POST,DELETE,PATCH'
  }
  const aliCloudConfig = {
    accessKeyId: process.env.ALC_ACCESS_KEY,
    accessKeySecret: process.env.ALC_SECRET_KEY,
    endpoint: 'dysmsapi.aliyuncs.com'
  }
  // gitee oauth config
  const giteeOauthConfig = {
    cid: process.env.GITEE_CID,
    secret: process.env.GITEE_SECRET,
    redirectURL: 'http://localhost:7001/api/users/passport/gitee/callback',
    authURL: 'https://gitee.com/oauth/token?grant_type=authorization_code',
    giteeUserAPI: 'https://gitee.com/api/v5/user'
  }
  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
    myLogger: {
      allowedMethod: [ 'POST' ]
    },
    baseUrl: 'default.url',
    aliCloudConfig,
    giteeOauthConfig,
    jwtExpires: '1h',
    H5BaseURL: 'http://localhost:7001/api/pages'
  };

  // the return config will combines to EggAppConfig
  return {
    ...config as {},
    ...bizConfig,
  };
};
