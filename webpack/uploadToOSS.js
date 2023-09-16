const dotenv = require("dotenv");
const OSS = require("ali-oss");
const path = require("path");
const fs = require("fs");
console.log(dotenv.config({path: path.resolve(__dirname, '../.env')}))
const publicPath = path.resolve(__dirname, '../app/public')
const client = new OSS({
    accessKeyId: process.env.ALC_ACCESS_KEY || '',
    accessKeySecret: process.env.ALC_SECRET_KEY || '',
    bucket: 'lego-backend-ldy2',
    endpoint: 'oss-cn-beijing.aliyuncs.com'
})
// console.log(client)

// async function upload() {
async function upload() {
    try {
        console.log('- ', publicPath)
        let publicFiles = fs.readdirSync(publicPath)
        publicFiles = publicFiles.filter(i => i !== 'page.nj')
        const xxx = publicFiles.map(item => {
            const ossPath = path.join('h5-assets', item)
            const filePath = path.join(publicPath, item)
            const result = client.put(ossPath, filePath)
            const {url} = result
            return url
        })
        const res = await Promise.all(xxx)
        console.log('上传成功', res)
    } catch (e) {
        console.log(e)
    }

}

upload()
