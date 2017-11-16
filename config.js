module.exports = {
  port: process.env.PORT || 3001,
  db: process.env.MONGODB_URI || /*'mongodb://localhost:27017/shop'*/ 'mongodb://paco.dev:PaCoSaNcHeZ1994@ds259855.mlab.com:59855/shop',
  SECRET_TOKEN: 'miclavedetokens'
}
