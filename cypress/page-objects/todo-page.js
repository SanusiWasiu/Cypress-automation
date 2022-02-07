/// <reference types="cypress" />

export class TodoPage {
    navigate() {
        cy.visit('http://todomvc-app-for-testing.surge.sh/')
    }

    addToDo(todo) {
        cy.get('.new-todo').type(todo + '{enter}')
    }
    validateTodoTxt(listIndx, expectedText) {
        cy.get(`.todo-list li:nth-child(${listIndx + 1}) label`).should('have.text', expectedText)
        
    }
    validateToggleState(listIndx, shouldbeChecked){
        cy.get(`.todo-list li:nth-child(${listIndx + 1}) .toggle`).should(`${shouldbeChecked ? '' : 'not.'}be.checked`)
    }
    toggleTodo(listIndx){
        cy.get(`.todo-list li:nth-child(${listIndx + 1}) .toggle`).click()
    }
    clearTodo(){
        cy.contains('Clear').click()
    }
    validateTodoCleared(){
        cy.get('.todo-list').should('not.have.descendants', 'li')
    }

}