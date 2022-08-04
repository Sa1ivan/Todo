const base = [
  {
    textt: 'Go shoping'
  },
  {
    textt: 'Go shopings'
  },
  {
    textt: 'Go shopingasdasd'
  }
];


/* class Todo {
  constructor(selector) {
    this._selector = document.querySelector(selector);
  }

  _getTemplate() {
    return this._selector
    .content
    .querySelector(".todo__card")
    .cloneNode(true);
  }

  //_setEventListeners = () => {};

  getView() {
    this.element = this._getTemplate;
    return this.element;
  }
}
const todoList = document.querySelector(".todo__before");
const todo = new Todo("#todo_card");
todo.getView();
todoList.append(todo); */

const todoList = document.querySelector(".todo__before");
const todoTemplate = document.querySelector("#todo_card");
const inpute = document.querySelector(".todo__input");
const todoForm = document.querySelector("#todo__form");


function newTodo(todo) {
  const newTodo = todoTemplate.content.cloneNode(true);
  const text = newTodo.querySelector(".todo__text");
  const toDo = newTodo.querySelector('.todo__card');
  const cercle = newTodo.querySelector('.todo__cercle');
  text.textContent = todo.textt;
  toDo.addEventListener('click', ()=>{
    text.classList.toggle('todo__text-active');
    toDo.classList.toggle('todo__card-active');
    cercle.classList.toggle('todo__cercle-active');
  })
  if(todo){
    todoForm.reset();
    return todoList.append(newTodo);
  }
}


function newTodos(evt){
  evt.preventDefault();
  const newTodoo = {
    textt: inpute.value
  }
  newTodo(newTodoo);
}


todoForm.addEventListener("submit", newTodos);

base.forEach((arg)=>{
  newTodo(arg);
})
