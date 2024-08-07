import { expect, assert } from "chai";
import { Calculate } from "../calculate.js";
import {should} from 'chai'
should()

let calculateNembers;
describe('calculate tests', () => {
    beforeEach(() => {
        calculateNembers = new Calculate()
    })
    afterEach(() => {
        calculateNembers = null
    })
    it('5 is type of number', () => {
        expect(calculateNembers.isNumber(5)).to.be.true
    })
    it('"one" not a type of number', () => {
        expect(() => { calculateNembers.isNumber("one") }).to.be.Throw('one is not of type "Number" it is of type string')
    })
    it('add 8 and 3 should give 11', () => {
        calculateNembers.addNumbers(8,3).should.to.be.equal(11)
    })
    it('10 - 2 must be a 8', () => {
        assert.equal(calculateNembers.subtractNumbers(10,2),8)
    })
    it('10 * 2 must be a 20', () => {
        expect(calculateNembers.multiplyNumbers(10, 2)).equal(20)
    })
    it('10 / 2 must be a 5', () => {
        assert.equal(calculateNembers.divideNumbers(10,2), 5)
    })
    it('divide on "0" was forbidden', () => {
        (() => { calculateNembers.divideNumbers(2,0) }).should.to.be.Throw('Divide on "0" was forbidden')

    })
})