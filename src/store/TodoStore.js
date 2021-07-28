import { makeAutoObservable } from 'mobx'

class TodoListStore {
    todos = [
    ]
    
    constructor() {
        makeAutoObservable(this,{},{autoBind: true})
        
    }
    add(todo) {
        this.todos.push(todo)
    }
    toggle(index) {
        console.log("toggle todo: " + this.todos[index])
        this.todos[index].done = !this.todos[index].done
    }
    remove(index) {
        console.log("delete todo: " + this.todos[index])
        this.todos.splice(index,1)
    }
}
class TodoStore {
    todo = {}
    
    
    constructor(todo) {
        makeAutoObservable(this,{},{autoBind: true})
        if(todo) {
            this.todo = todo
        }
    }
    set(todo) {
        this.todo = todo
    }
}


export const todoListStore = new TodoListStore()
export const todoStore = new TodoStore()
