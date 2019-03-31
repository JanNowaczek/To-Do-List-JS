class ToDo {
    constructor(selector) {
        this.container = document.querySelector(selector) || document.body
    
        this.tasks = [{
            text: 'Lorem ipsum',
            isCompleted: false,
        }]
        this.tasks = JSON.parse(localStorage.getItem('to-do-list')) || []

        this.render()
    }

    saveTask() {
        localStorage.setItem('to-do-list', JSON.stringify(this.tasks))
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
        this.saveTask()
    }

    addTask(newTaskText){
    addTask(newTaskText) {
        const newTask = {
            text: newTaskText,
            isCompleted: false,
        }

        this.tasks = this.tasks.concat(newTask)

        this.render()
        this.saveTask()
    }

    render(){
    render() {
        this.container.innerHTML = ''

        this.renderForm()

        this.tasks.forEach(
            task => this.renderTask(task)
            (task, index) => this.renderTask(task, index)
        )
    }

    renderTask(task){
    renderTask(task) {
        const div = document.createElement('div')

        div.innerText = task.text

        if (task.isCompleted) div.style.textDecoration = 'line-through'

        div.addEventListener(
            'click',
            () => this.toggleTask(index)
        )

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