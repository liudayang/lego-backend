"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AppBoot {
    constructor(app) {
        this.app = app;
        app.sessionMap = {};
        app.sessionStore = {
            async get(key) {
                app.logger.info('key', key);
                return app.sessionMap[key];
            },
            async set(key, value) {
                app.logger.info('key', key);
                app.logger.info('value', value);
                app.sessionMap[key] = value;
            },
            async destroy(key) {
                delete app.sessionMap[key];
            }
        };
        // const { url } = this.app.config.mongoose
        // assert(url, '[egg-mongoose] url is required on config')
        // const db = createConnection(url)
        // db.on('connected', () => {
        //   app.logger.info(`[egg-mongoose] ${url} connected successfully`)
        // })
        // app.mongoose = db
    }
    configWillLoad() {
        // 此时 config 文件已经被读取并合并，但是还并未生效
        // 这是应用层修改配置的最后时机
        // this.app.config.coreMiddleware.unshift('myLogger')
    }
    async willReady() {
        // console.log('enable willready', this.app.config.coreMiddleware)
        // const dir = join(this.app.config.baseDir, 'app/model')
        // this.app.loader.loadToApp(dir, 'model', {
        //   caseStyle: 'upper'
        // })
        // app/model/user.ts => app.model.User
    }
    async didReady() {
        // console.log('middleware', this.app.middleware)
        const ctx = await this.app.createAnonymousContext();
        const res = await ctx.service.test.sayHi('viking');
    }
}
exports.default = AppBoot;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBSUEsTUFBcUIsT0FBTztJQUUxQixZQUFZLEdBQWdCO1FBQzFCLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFBO1FBQ2QsR0FBRyxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUE7UUFDbkIsR0FBRyxDQUFDLFlBQVksR0FBRztZQUNqQixLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUc7Z0JBQ1gsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFBO2dCQUMzQixPQUFPLEdBQUcsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDNUIsQ0FBQztZQUNELEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEtBQUs7Z0JBQ2xCLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQTtnQkFDM0IsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFBO2dCQUMvQixHQUFHLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQTtZQUM3QixDQUFDO1lBQ0QsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHO2dCQUNmLE9BQU8sR0FBRyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUM1QixDQUFDO1NBQ0YsQ0FBQTtRQUNELDJDQUEyQztRQUMzQywwREFBMEQ7UUFDMUQsbUNBQW1DO1FBQ25DLDZCQUE2QjtRQUM3QixvRUFBb0U7UUFDcEUsS0FBSztRQUNMLG9CQUFvQjtJQUN0QixDQUFDO0lBQ0QsY0FBYztRQUNaLCtCQUErQjtRQUMvQixpQkFBaUI7UUFDakIscURBQXFEO0lBQ3ZELENBQUM7SUFDRCxLQUFLLENBQUMsU0FBUztRQUNiLGtFQUFrRTtRQUNsRSx5REFBeUQ7UUFDekQsNENBQTRDO1FBQzVDLHVCQUF1QjtRQUN2QixLQUFLO1FBQ0wsc0NBQXNDO0lBQ3hDLENBQUM7SUFDRCxLQUFLLENBQUMsUUFBUTtRQUNaLGlEQUFpRDtRQUNqRCxNQUFNLEdBQUcsR0FBRyxNQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsc0JBQXNCLEVBQUUsQ0FBQTtRQUNuRCxNQUFNLEdBQUcsR0FBRyxNQUFNLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQTtJQUNwRCxDQUFDO0NBQ0Y7QUE3Q0QsMEJBNkNDIn0=