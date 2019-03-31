class ToDo {
    constructor(){
    constructor(selector){
        this.container = document.querySelector(selector) || document.body
    }
        this.tasks = [{
            text: 'Lorem ipsum',
            isCompleted: false,
        }]

        this.render()
    }

    addTask(newTaskText){
        const newTask = {
            text: newTaskText,
            isCompleted: false,
        }

        this.tasks = this.tasks.concat(newTask)

        this.render()
    }

    render(){
        this.container.innerHTML = ''

        this.tasks.forEach(
            task => this.renderTask(task)
        )
    }

    renderTask(task){
        const div = document.createElement('div')

        div.innerText = task.text

        if(task.isCompleted) div.style.textDecoration = 'line-through'

        this.container.appendChild(div)
    }

    renderForm(){
        const div = document.createElement('div')
        const input = document.createElement('input')
        const button = document.createElement('button')

        input.setAttribute('placeholder', 'New task')
        button.innerText = 'Add'

        const clickHandler = () => console.log(input.value)
        const.clickHandler = () => this.addTask(input.value) 

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