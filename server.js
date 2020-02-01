// CHANGE
const AWS_ACCESS_KEY = ''
const AWS_SECRET = ''
const AWS_REGION = ''
///////////////////////////////////////////////////////

const Koa = require('koa')
const Router = require('koa-router')
const send = require('koa-send')
const AWS = require('aws-sdk')

const app = new Koa()
const router = Router()
const s3 = new AWS.S3({
  accessKeyId: AWS_ACCESS_KEY,
  secretAccessKey: AWS_SECRET,
  region: AWS_REGION,
})

// AUTHENTICATE/AUTHORIZE USER !!!
// app.use(authMiddleware)

// Serve index.html
router.get('/', async ctx => {
  await send(ctx, './index.html')
})

// Get signed request
router.get('/signed-url', async ctx => {
  try {
    ctx.body = await s3.getSignedUrl('putObject', {
      Bucket: ctx.query.bucket,
      Key: ctx.query.key,
      ContentType: ctx.query.type,
      Expires: 60 * 60,
      ACL: 'public-read',
      Tagging: 'userUpload=1'
    })
  } catch (error) {
    ctx.throw(400, error)
  }
})

app.use(router.routes())

app.listen(8080, () => {
  console.log('Server running http://localhost:8080')
})