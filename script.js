class ToDo {
    constructor(){
    constructor(selector) {
        this.container = document.querySelector(selector) || document.body
    
        this.tasks = [{
            text: 'Lorem ipsum',
            isCompleted: false,
        }]

        this.render()
    }

    toggleTask(taskIndex) {
        this.tasks = this.tasks.map(
            (task, index) => {
                if(index === taskIndex) {
                    return {
                    (task, index) => 
                    index === taskIndex 
                    
                        text: task.text,
                        isCompleted: !task.isCompleted,
                    }
                }else{
                    return task
                }
            }
                
        )

        this.render()
    }

    addTask(newTaskText){
    addTask(newTaskText) {
        const newTask = {
            text: newTaskText,
            isCompleted: false,
        }

        this.tasks = this.tasks.concat(newTask)

        this.render()
    }

    render(){
    render() {
        this.container.innerHTML = ''

        this.renderForm()
    }

    renderTask(task){
    renderTask(task) {
        const div = document.createElement('div')

        div.innerText = task.text

        if(task.isCompleted) div.style.textDecoration = 'line-through'
        if (task.isCompleted) div.style.textDecoration = 'line-through'

        this.container.appendChild(div)
    }

    renderForm(){
    renderForm() {
        const div = document.createElement('div')
        const input = document.createElement('input')
        const button = document.createElement('button')

        input.setAttribute('placeholder', 'New task')
        button.innerText = 'Add'
        const clickHandler = () => this.addTask(input.value)
        const clickHandler = () => this.addTask(input.value) 

        button.addEventListener(
            'click',
            clickHandler
        )

        console.dir(clickHandler)

        div.appendChild(input)
        div.appendChild(button)
        this.container.appendChild(div)
    }
}