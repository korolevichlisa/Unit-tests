export class Calculate{
    isNumber(number) {
        const typeOfVariable = typeof number
        if (typeOfVariable !== 'number') {
            throw new Error(`${number} is not of type "Number" it is of type ${typeOfVariable}`)
        } else {
            return true
        }
    }
    addNumbers(number1, number2) {
        if (this.isNumber(number1) && this.isNumber(number2) === true) {
            return number1 + number2
        }
    }
    subtractNumbers(number1, number2) {
        if(this.isNumber(number1) && this.isNumber(number2) === true){
            return number1 - number2
        }
    }
    multiplyNumbers(number1, number2) {
        if(this.isNumber(number1) && this.isNumber(number2) === true){
            return number1 * number2
        }
    }
    divideNumbers(number1, number2) {
        if (number2 === 0) {
            throw new Error('Divide on "0" was forbidden')
        }
        if(this.isNumber(number1) && this.isNumber(number2) === true){
            return number1 / number2
        }
    }
}