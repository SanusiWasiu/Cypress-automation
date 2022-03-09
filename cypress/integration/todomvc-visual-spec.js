/// <reference types="cypress"/>

import { TodoPage } from '../page-objects/todo-page'

describe("Visual Validation, lol", () => {
    const toDo = new TodoPage()
    before(()=> {
        toDo.navigate()
    })
    beforeEach(() => cy.eyesOpen({
        appName: 'myCYVisuals', batchName: 'firstCyVisual',
        browser: [
            {name: 'chrome', width: 1024, height: 768},
            {name: 'chrome', width: 800, height: 600},
            {name: 'firefox', width: 1024, height: 768},
            {deviceName: 'iPhone X'},
        ]
    }))
    afterEach(() => cy.eyesClose())

    it('should pass eye test', () => {
        cy.eyesCheckWindow("no todo list")

        toDo.addToDo('starting eye test')
        toDo.addToDo('enjoying eye test')
        toDo.addToDo('ending eye test')
        cy.eyesCheckWindow("three todo list")

        toDo.toggleTodo(1)
        cy.eyesCheckWindow("mark as completed")
    })
})