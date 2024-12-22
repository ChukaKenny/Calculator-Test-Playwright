
    let randomNumberGenerator = (multiplier) => {
        return Math.floor(Math.random()*multiplier)
    }

    let generatedNumber1 = 1 + (randomNumberGenerator(100))
    let generatedNumber2 = 1 + (randomNumberGenerator(100))
    let number1 = generatedNumber1
    let number2 = generatedNumber2


 module.exports = {number1,number2,generatedNumber1,generatedNumber2}