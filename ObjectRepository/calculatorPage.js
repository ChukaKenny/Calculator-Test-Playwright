class calculatorPage {

    constructor (page) {

        this.page = page
        this.build = page.getByTestId('selectBuild')
        this.Field1 = page.getByTestId('number1Field')
        this.Field2 = page.getByTestId('number2Field')
        this.Operation = page.getByTestId('selectOperationDropdown')
        this.calculateButton = page.getByTestId('calculateButton')
        this.integerCheckBox = page.getByTestId('integerSelect')
        this.answerField = page.locator("#numberAnswerField")
        this.clearButton = page.getByTestId('clearButton')
        this.dataSet = JSON.parse(JSON.stringify(require("../Utils/fixture.json")))
        this.expectedAnswer;
        this.integerAnswer;
        this.data;

    }

    setData(data) {
        this.data = data
    }

    async visitUrl () {
        await this.page.goto("https://testsheepnz.github.io/BasicCalculator.html")
    }

    async selectBuild (choice) {
        await this.build.selectOption(choice)
    }

    async inputNumbers () {
        await this.Field1.fill(`${generatedNumber1}`)
        await this.Field2.fill(`${generatedNumber2}`)
        console.log(await number1)
        console.log(await number2)
    }

    async selectOperation (sign) {
        await this.Operation.selectOption(sign)
    }

    async calculate () {
        await this.calculateButton.click()
    }

    async verifyAnswerValue () {

        
                       if (this.data.operator === "Add") {
                          this.expectedAnswer = (number1 + number2).toString()
                          console.log(await this.expectedAnswer)
                       }
        
                       if (this.data.operator === "Subtract") {
                        this.expectedAnswer = (number1 - number2).toString()
                          console.log(await this.expectedAnswer)
                       }
        
                       if (this.data.operator === "Multiply") {
                        this.expectedAnswer = (number1 * number2).toString()
                          console.log(await this.expectedAnswer)
                       }
        
                       if (this.data.operator === "Divide") {
                        this.expectedAnswer = (number1 / number2).toString()
                          console.log(await this.expectedAnswer)
                       }
                       
                       if (this.data.operator === "Concatenate") {
                        this.expectedAnswer = (`${number1}`+ `${number2}`)
                          console.log(await this.expectedAnswer)
                       }
        
              await expect(this.answerField).toHaveValue(this.expectedAnswer);
    }

    async convertToInteger () { 
          if (this.data.operator === "Add" || this.data.operator === "Subtract" || this.data.operator === "Multiply" || this.data.operator === "Divide") { 
                          this.integerCheckBox.click()
                          this.integerAnswer = (Math.floor(parseInt(this.expectedAnswer))).toString()
                          console.log(await this.integerAnswer)
                          await expect(this.answerField).toHaveValue(this.integerAnswer);
                       }
    }

    async clearAnswerField () {
        await this.clearButton.click()
        await expect(this.answerField).toBeUndefined;
        await expect(this.Field1).toBeDefined;
        await expect(this.Field2).toBeDefined;
    }





}

const {expect} = require("@playwright/test")
const {number1,number2,generatedNumber1,generatedNumber2,expectedAnswer,integerAnswer} = require("../test-variables/variables") 
module.exports = {calculatorPage}
