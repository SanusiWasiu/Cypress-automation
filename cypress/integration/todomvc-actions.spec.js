/// <reference types="cypress" />

import {TodoPage} from '../page-objects/todo-page'
describe('todo actions', () => {
    const toDo = new TodoPage()
    beforeEach(() => {
        toDo.navigate()
    
        toDo.addToDo('Clean Codes')
    })
    it('should be able to add a new to do', () => {
        toDo.validateTodoTxt(0, 'Clean Codes')
    
        toDo.validateToggleState(0)
        // cy.get('.gLFyf', {timeout: 6000}).type('water{enter}')
    
        // cy.get('.MUFPAc > :nth-child(2) > a').click()
    
        // cy.contains('ocean').click()
    })
    
    it('should mark a todo as completed', () => {
        toDo.toggleTodo(0)
    
        toDo.validateToggleState(0, true)
    })
    
    it('should clear the todo list', () => {
        toDo.toggleTodo(0)
        toDo.clearTodo()
        toDo.validateTodoCleared()
    })
})