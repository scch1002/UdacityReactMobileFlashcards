import rewire from "rewire"
import React from "react"
import renderer from "react-test-renderer"

const App = rewire("./App")
const navigationOptions = App.__get__("navigationOptions")
it('renders without crashing', () => {
  const rendered = renderer.create(<App />).toJSON();
  expect(rendered).toBeTruthy();
});

// @ponicode
describe("navigationOptions", () => {
    test("0", () => {
        let callFunction = () => {
            navigationOptions("International Intranet Coordinator")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            navigationOptions("Dynamic Quality Specialist")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            navigationOptions("Direct Functionality Orchestrator")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            navigationOptions("Future Interactions Representative")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            navigationOptions("Internal Interactions Strategist")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            navigationOptions(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
