window.addEventListener("DOMContentLoaded", () => {

 let body = document.querySelector('.tasker-body'),
    input = document.querySelector('.tasker-input'),
    text;


 input.addEventListener('change', () => {
  text = document.querySelector('.tasker-input').value;
  let id = createId();

  if(text !== ' ') {
   let bTask = document.createElement('div');
   bTask.className = 'b-task';
   let task = document.createElement('input')
   let taskLabel = document.createElement('label')
   task.setAttribute('type', 'checkbox')
   task.setAttribute('id', `${id}`)
   taskLabel.setAttribute('for', `${id}`)
   taskLabel.innerHTML = `${text}`
   body.append(bTask)
   bTask.append(task)
   bTask.append(taskLabel)
  }
 })



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