const {expect} = require("@playwright/test")
const {Build9} = require("../Utils/test-base")
const {calculatorPage} = require ("../ObjectRepository/calculatorPage")
const dataSet = JSON.parse(JSON.stringify(require("../Utils/fixture.json")))


for (let data of dataSet) {

      Build9(`${data.testName} Operation`, async ({page,selectBuild})=>{

            const CalculatorPage = new calculatorPage(page)
            CalculatorPage.setData(data);   

            await CalculatorPage.visitUrl() 
            await CalculatorPage.selectBuild(selectBuild.Option)
            await CalculatorPage.inputNumbers()
            await CalculatorPage.selectOperation(data.operator) 
            await CalculatorPage.calculate() 
            await CalculatorPage.verifyAnswerValue()
            await CalculatorPage.convertToInteger()  
            await CalculatorPage.clearAnswerField() 
         
      })


}