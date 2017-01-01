import { expect } from 'chai'
import avatarLastAirbenderNames from '.'

describe('avatar-last-airbender-names', () => {
    it('should have a list of all available names', () => {
        expect(avatarLastAirbenderNames.all).to.satisfy(isArrayOfStrings)
    })

    it('should allow me to get a random name from the list', () => {
        expect(avatarLastAirbenderNames.random()).to.satisfy(isIncludedIn(avatarLastAirbenderNames.all))
    })
})

function isArrayOfStrings(array) {
    return array.every(i => typeof i === 'string')
}

function isIncludedIn(array) {
    return item => array.includes(item)
}