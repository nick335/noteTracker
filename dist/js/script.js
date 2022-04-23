const noteEl=document.querySelector('#note-el') 
const addNote=document.querySelector('#add_note')
const closeX=document.querySelector('.popupCloseButton')
const displayBackground=document.querySelector('.output-area__background')
const renderingArea=document.querySelector('.rendering-area__structure');
const displayP=document.querySelector('.displayArea')
let displayBtn=document.querySelector('.display-note')
let noteArr=[]
let localStorageNoteArr=JSON.parse(localStorage.getItem('Note'))
if (localStorageNoteArr) {
 noteArr=localStorageNoteArr
 render(noteArr)
}
//displaying note background
// displayBtn.addEventListener('click', function () {
//  displayBackground.classList.toggle('active')
// })

closeX.addEventListener('click', function () {
 displayBackground.classList.toggle('active')
})


addNote.addEventListener('click', function (params) {

 //save note to local storage
let noteObj={
 noteContent:''
}
noteObj.noteContent=noteEl.value 
noteArr.push(noteObj)
localStorage.setItem('Note', JSON.stringify(noteArr))
noteEl.value=''
render(noteArr);
})


function render(noteArray) {
 let noteSection=""
 for (let i = 0; i < noteArray.length; i++) {
  notePara=noteArray[i].noteContent
  noteparaFirst30=notePara.split(' ').slice(0,30).join(' ');
  noteSection +=
  `
  <div class="rendering-area__display-card">
   <h2>Note ${i + 1}</h2>
   <p>${noteparaFirst30}</p>
   <button class="display-note" id='${i}' onclick="showMore(this.id)">Show More</button>
  </div>
  ` 
 }
 renderingArea.innerHTML= noteSection  
}

function showMore(clicked_id){
 displayBackground.classList.toggle('active')
 document.body.scrollTop = document.documentElement.scrollTop = 0
 let index=clicked_id
 let localStorageNoteArr=JSON.parse(localStorage.getItem('Note'))
 noteArr=localStorageNoteArr
 for (let i = 0; i < noteArr.length; i++) {
  if (index == i) {
   notePara=noteArr[index].noteContent
   displayP.textContent=notePara
   break
  }
 }

}