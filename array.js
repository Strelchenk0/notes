const inputElement = document.getElementById('input1')
const add = document.getElementById('add')
const listElement = document.getElementById('list')

const notes = [{
    title: 'training',
    completed: false,
},
 { 
    title: 'retrodrop',
    completed: false,
 },

]


function render() {
   listElement.innerHTML = ""
   if (notes.length === 0) {
    listElement.innerHTML = `<p>No elements </p>`
   }
   for (i = 0; i < notes.length; i++) {
      listElement.insertAdjacentHTML('beforeend', 
    getNoteTemplate(notes[i], i))
    }
}
render()

add.onclick = function () {
   if (inputElement.value.length === 0) {
    return 
   } 
   const newNotes = {
     title: inputElement.value,
     completed: false,
   }
   notes.push(newNotes)
  render()
  inputElement.value = ''
  }

  listElement.onclick = function (event) {
  if (event.target.dataset.index) {
    const index = Number(event.target.dataset.index)
    const type = event.target.dataset.type

    if (type === "toggle") {
      notes[index].completed = !notes[index].completed}
      else if (type === "remove") {
        notes.splice(index, 1)}
    render()
  }
}

 function getNoteTemplate(notes, index, done) {
  return `
  <li class="list-group-item d-flex justify-content-between align-items-center ${notes.completed ? "hover" : ""}"> 
       <span class="${notes.completed ? "text-decoration-line-through" : ""}">${notes.title}</span>
       <span>
        <span class="btn ${notes.completed ? "new" : ""} btn-small btn-success" data-index="${index}" data-type="toggle">&check;</span>
          <span class="btn btn-small btn-secondary" data-index="${index}" data-type="remove">&times;</span>
          </span>
        </li>`
}






 const wealthyPeople = [
  {name: "nazar", money: 2000 },
  {name: "vika", money: 7000 },
  {name: "alex", money: 3000 },
]



// const sorted = wealthyPeople.filter(function (p) {
//  return p.money > 4000
// })
// console.log(sorted);