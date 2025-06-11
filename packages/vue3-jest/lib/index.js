const crypto = require('crypto')
const babelJest = require('babel-jest').default
module.exports = {
  process: require('./process'),
  getCacheKey: function getCacheKey(
    fileData,
    filename,
    { config, configString, instrument, rootDir }
  ) {
    return crypto
      .createHash('sha256')
      .update(
        babelJest.createTransformer().getCacheKey(fileData, filename, {
          config,
          configString,
          instrument,
          rootDir
        }),
        'hex'
      )
      .digest('hex')
  }
}
