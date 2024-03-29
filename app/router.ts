import {Application} from 'egg';

export default (app: Application) => {
    const {controller, router} = app;
    // const logger = app.middleware.myLogger({
    //   allowedMethod: [ 'GET' ],
    // }, app)
    const jwtMiddleware = app.jwt as any
    router.get('/', controller.home.index);
    // router.get('/test/:id', controller.test.index)
    // router.post('/test/:id', controller.test.index)
    // router.get('/dog', logger, controller.test.getDog)
    router.post('/api/users/create', controller.user.createByEmail)
    router.get('/api/users/getUserInfo', jwtMiddleware, controller.user.show)
    router.post('/api/users/loginByEmail', controller.user.loginByEmail)
    router.post('/api/users/genVeriCode', controller.user.sendVeriCode)
    router.post('/api/users/loginByPhoneNumber', controller.user.loginByCellphone)
    router.get('/api/users/passport/gitee', controller.user.oauth)
    router.get('/api/users/passport/gitee/callback', controller.user.oauthByGitee)

    router.post('/api/works', jwtMiddleware, controller.work.createWork)
    router.post('/api/works/copy/:id', jwtMiddleware, controller.work.copyWork)
    router.get('/api/works', jwtMiddleware, controller.work.myList)
    router.get('/api/works/:id', jwtMiddleware, controller.work.myWork)
    router.get('/api/templates', controller.work.templateList)
    router.get('/api/templates/:id', controller.work.template)
    router.patch('/api/works/:id', jwtMiddleware, controller.work.update)
    router.delete('/api/works/:id', jwtMiddleware, controller.work.delete)
    router.post('/api/works/publish/:id', jwtMiddleware, controller.work.publishWork)
    router.post('/api/works/publish-template/:id', jwtMiddleware, controller.work.publishTemplate)


    // router.post('/api/utils/upload', controller.utils.fileUploadByStream)
    router.post('/api/utils/upload', controller.utils.uploadToOSS)
    router.get('/pages/:idAndUuid', controller.utils.renderH5Page)
};
