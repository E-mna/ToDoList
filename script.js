// Je récupère les données de mon formulaire    
const inputTask = document.querySelector("#inputtask");
const form = document.querySelector(".form");
const addButton = document.querySelector("#addbutton");
const toDoList = document.querySelector(".todolist");
const clear = document.querySelector(".clear");

//function pour creer une tache 
form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (inputTask.value == "") {
    alert("Il faut ajouter du text");
  } else {
    const newTask = createNewItem(inputTask.value);     // creer une nouvelle tache 
    toDoList.appendChild(newTask);                     // l'afficher dans le ol la nouvelle tache
    inputTask.value = "";
    inputTask.focus();
    clear.classList.remove("d-none");
  }

  clear.addEventListener("click", function () {          // clear tous les taches ajoutées
    toDoList.innerHTML = "";
  });
});

function createNewItem(inputValue) {
  const task = document.createElement("li");
  const span = document.createElement("span");
  const delBtn = document.createElement("button");
  const editBtn = document.createElement("button");
  span.textContent = inputValue;      // la span prend la valeur de l'input
  delBtn.textContent = "Supprimer";   // remplir le bouton avec un text 
  editBtn.textContent = "Modifier";
  task.appendChild(span);        // afficher la valeur dans la span
  task.appendChild(delBtn);      //Afficher le button supprimer
  task.appendChild(editBtn);     //Afficher le button modifier

  delBtn.addEventListener("click", function () {   // en cliquant sur le bouton supprimer il supprimer la tache 
    task.parentNode.removeChild(task);
  });
  editBtn.addEventListener("click", function () {  // en cliquant sur le bouton modifier il modifie la tache 
    span.contentEditable = true;
    span.focus();
  });

  return task;
}
