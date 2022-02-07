/// <reference types="cypress" />

import{ navigate,
    addToDo,
    toggleTodo,
    filterActive} from '../page-objects/todo-filter'
describe('todo filtering', () => {
    beforeEach(() => {
        navigate()

        addToDo('Python and Data Science{enter}')
        addToDo('HTML, CSS & Javascript{enter}')
        addToDo('Vue, React or Angular{enter}')

        toggleTodo(1)
    })
    it('should filter "Active" todos', () => {
        filterActive()

        cy.get('.todo-list li').should('have.length', 2)
    })
    it('should filter "Completed" todos', () => {
        cy.contains("Completed").click()

        cy.get('.todo-list li').should('have.length', 1)
    })
    it('should filter "All" todos', () => {
        cy.contains("All").click()

        cy.get('.todo-list li').should('have.length', 3)
    })
})
