import { EggAppConfig, PowerPartial } from 'egg';

export default () => {
  const config: PowerPartial<EggAppConfig> = {};
  config.baseUrl = 'prod.url'
  config.security = {
    domainWhiteList: [ 'https://imooc-lego.com', 'https://www.imooc-lego.com' ]
  }
  config.jwtExpires = '2 days'
  config.giteeOauthConfig = {
    redirectURL: 'https://api.imooc-lego.com/api/users/passport/gitee/callback'
  }
  config.H5BaseURL = 'https://h5.imooc-lego.com'
  return config;
};
