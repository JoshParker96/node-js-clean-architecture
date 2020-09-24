const env = process.env.NODE_ENV || 'local'

const local = {
  app: {
    port: parseInt(process.env.LOCAL_APP_PORT) || 3000
  },
  db: {

  }
}

const test = {
  app: {
    port: parseInt(process.env.TEST_APP_PORT) || 3000
  },
  db: {

  }
}

const config = {
 local,
 test
};

module.exports = config[env];