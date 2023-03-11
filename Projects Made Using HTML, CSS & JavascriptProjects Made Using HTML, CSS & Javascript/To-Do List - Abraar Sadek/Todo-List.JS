/* 

NAME: Project Creator
Date Of Completion: 3/11/2023

Project Description: The following a Javascript file linked to the Todo-List HTML file, that adds functionality to the todo list website

*/

//Two constant variables named "TaskInput" & "TodoInput" that have the value of the ID "#todoinput" & "#todo-list" respectively
const TaskInput = document.querySelector("#todoinput");
const TodoList = document.querySelector("#todo-list");

//An event listener tied to a function that adds a keydown event to the "TaskInput" variable
TaskInput.addEventListener("keydown", function(event) {

  //An if statement that checks if the enter key has been pressed was the "Enter" key
  if (event.key === "Enter"){

    //A constantvariable named "Task" that store's the current value of TaskInput in a constant "task"
    const task = TaskInput.value;
    
    //Clear the input box
    TaskInput.value = "";

    //A constant vairbale named "li" that creates a new list item element
    const li = document.createElement("li");
    
    //Add the class "task" to the list item element
    li.classList.add("task");

    //Set the innerHTML of the list item to include a span element with the task text and a remove link
    li.innerHTML = `<span classList="task-text">${task}</span><a href="#" class="remove-task">REMOVE</a>`;   
    
    //A query selector tied to a function that adds a click event listener to the remove button
    li.querySelector(".remove-task").addEventListener("click", function(event){ 

      //Prevent the default behavior of the link
      event.preventDefault();
      //Remove the list item element
      li.remove();

    });

    //An event listener tied to a function that adds a click event listener to the list item
    li.addEventListener("click", function(){

      //Toggle the class "task-complete" on the list item (Apply or de-apple a strickthorugh to the clicked task)
      li.classList.toggle("task-complete");

    });

    //Add the list item to the list
    TodoList.appendChild(li);
    
  }
}); 
