import uniqueRandomArray from 'unique-random-array'
const avatarLastAirbenderNames = require('./avatar-last-airbender-names.json')

const mainExport = {
    all: avatarLastAirbenderNames,
    random: uniqueRandomArray(avatarLastAirbenderNames),
}

export default mainExport
module.exports = mainExport // for CommonJS compatibility