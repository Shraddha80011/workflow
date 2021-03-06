const fs = require('fs')
module.exports = {
  rethinkdb: {
    host: process.env.host || "47.254.27.134",
    port: process.env.port || 28015,
    db: process.env.db || "FlowzEngine",
    authKey: process.env.authDB,
    ssl: process.env.cert ? { ca: fs.readFileSync('./ca.cer') } : null
  },
  qOptions: {
    name: process.env.scheduler || "scheduler",
    masterInterval: 60000,
    changeFeed: true,
    concurrency: 1,
    removeFinishedJobs: false
  },
  serviceURL: process.env.serviceURL || "http://localhost:4002",
  jobURL: process.env.jobURL || "http://localhost:4001"
}