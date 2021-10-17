window.addEventListener("DOMContentLoaded", () => {

 let list = document.querySelector('.task-list'),
    input = document.querySelector('.tasker-input'),
    btn = document.querySelector('.tasker-button'),
    task,
    taskLabel,
    todoList = [];

  btn.addEventListener('click', newTask);

   function newTask() {
     list.innerHTML = ''
     newTodo = document.querySelector('.tasker-input').value;
     if(newTodo !== '') {
     todoList.push(newTodo)
     todoList.forEach(i => {
     let id = createId();
     let bTask = document.createElement('div');
     let deleteTask = document.createElement('div');
     deleteTask.className = 'delete';
     bTask.className = 'b-task';
     task = document.createElement('input')
     taskLabel = document.createElement('label')
     task.setAttribute('type', 'checkbox')
     task.setAttribute('id', `${id}`)
     taskLabel.setAttribute('for', `${id}`)
     taskLabel.innerHTML = `${i}`
     list.append(bTask)
     bTask.append(task)
     bTask.append(taskLabel)
     bTask.append(deleteTask)
     document.querySelector('.tasker-input').value = ''
     })
    } else {
     console.log('Задача не введена!')
    }
  }

   function createId() {
    let random_start = 1;
    let random_end = 500;
    allСycles = 10;
    let array= []
    for(i=random_start;i<=random_end;i++){
       array.push(i)
    }
    for(countCycles=1;countCycles<=allСycles;countCycles++){
        return(array.splice(Math.random()*array.length,1)[0])
    }

  }

})