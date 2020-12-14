function read_file(filename) {
    const fs = require('fs')
    try {
      const data = fs.readFileSync(filename, 'utf8')
      return data
    } catch (err) {
      return null
    }
}

function write_file(filename, data) {
    const fs = require('fs');
    try {
      fs.writeFileSync(filename, data, {flag: 'w+'});
      return true
    } catch (err) {
      return false
    }
}

module.exports = { read_file, write_file };