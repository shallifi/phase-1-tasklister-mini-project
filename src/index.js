document.addEventListener("DOMContentLoaded", () => {
  const createTaskForm = document.getElementById("create-task-form")
  createTaskForm.addEventListener('submit', (e) =>{
    e.preventDefault();
  })
  createTaskForm.addEventListener("submit", newTask);
  const createNewTask = document.getElementById("new-task-description")
  
  // document.querySelector('form').addEventListener('submit', (e) => {

  

  // handleTD(e.target.MyTodos.value)
  
  
  function newTask(e) {
    e.preventDefault();
    // console.log(e.target)
    handleTD(createNewTask.value)
    createTaskForm.reset()
  }
 
});
  // your code here

function handleTD(todo) {
  let p = document.createElement('p')
  p.textContent = todo
  console.log(p)
  let btn = document.createElement('button')
  btn.textContent = 'x'
  p.textContent = `${todo} `
  p.appendChild(btn)
  console.log(p)
  document.querySelector('#tasks').appendChild(p)

}
