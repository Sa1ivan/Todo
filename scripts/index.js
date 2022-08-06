const base = [
  {
    textt: "Go shoping",
  },
  {
    textt: "Go shopings",
  },
  {
    textt: "Go shopingasdasd",
  },
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
const renames = document.querySelector(".renames");

function newTodo(todo) {
  const newTodo = todoTemplate.content.cloneNode(true);
  const text = newTodo.querySelector(".todo__text");
  const toDo = newTodo.querySelector(".todo__card-container");
  const cercle = newTodo.querySelector(".todo__cercle");
  const menu = newTodo.querySelector(".buttons");
  text.textContent = todo.textt;
  toDo.addEventListener("click", () => {
    text.classList.toggle("todo__text-active");
    toDo.classList.toggle("todo__card-active");
    cercle.classList.toggle("todo__cercle-active");
    menu.classList.toggle("buttons_active");
    if (!text.classList.contains("todo__text-active")) {
      renames.classList.remove("renames_active");
    }
  });
  const deletee = newTodo.querySelector(".delete");
  deletee.addEventListener("click", (evt) => {
    evt.target.closest(".todo__card").remove();
  });
  const renamee = newTodo.querySelector(".rename");
  renamee.addEventListener("click", (evt) => {
    inpute.value = evt.target
      .closest(".todo__card")
      .querySelector(".todo__text").textContent;
    renames.classList.toggle("renames_active");
    renames.addEventListener("click", () => {
      evt.target
        .closest(".todo__card")
        .querySelector(".todo__text").textContent = inpute.value;
        renames.classList.remove('renames_active');
    });
  });
  const copy = newTodo.querySelector(".copy");
  copy.addEventListener("click", (evt) => {
    inpute.value = evt.target
      .closest(".todo__card")
      .querySelector(".todo__text").textContent;
    newTodos();
    if (renames.classList.contains("renames_active")) {
      renames.classList.remove("renames_active");
    }
  });
  if (todo.textt) {
    todoForm.reset();
    return todoList.append(newTodo);
  }
}

function newTodos() {
  const newTodoo = {
    textt: inpute.value,
  };
  newTodo(newTodoo);
}

todoForm.addEventListener("submit", newTodos);

base.forEach((arg) => {
  newTodo(arg);
});
