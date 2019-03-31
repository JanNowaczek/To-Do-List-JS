class ToDo {
    constructor(){
    constructor(selector) {
        this.container = document.querySelector(selector) || document.body
    }
        this.tasks = [{
            text: 'Lorem ipsum',
            isCompleted: false,
        }]
    }
}