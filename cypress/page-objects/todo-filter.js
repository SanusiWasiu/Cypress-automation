/// <reference types="cypress" />

export function navigate() {
    cy.visit('http://todomvc-app-for-testing.surge.sh/')
}

export function addToDo(todo) {
    cy.get('.new-todo').type(todo + '{enter}')
}

export function toggleTodo(listIndx){
    cy.get(`.todo-list li:nth-child(${listIndx + 1}) .toggle`).click()
}

export function filterActive(){
    cy.contains("Active").click()
}