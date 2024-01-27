const createBtn=document.querySelector('#create__Btn')
const notesCont=document.querySelector('#notes-container')
function show(){
    notesCont.innerHTML=localStorage.getItem("notes")
}
show()
function upadate(){
    localStorage.setItem("notes", notesCont.innerHTML)
}
function createNotes(){
  
    let inputBox=document.createElement("p")
    let img=document.createElement("img")
    inputBox.placeholder="sample"
    addClass([inputBox],["text-lg","text-gray-700","font-medium","duration-150" ,"p-5","bg-white" ,"w-11/12" ,"h-44" ,"mt-5", "shadow-lg", "outline-none" ,"border-[#8E58FA]" ,"border-2" ,"rounded-xl", "relative"])
    inputBox.setAttribute("contenteditable","true")
    inputBox.setAttribute("id","input-box")
    addClass([img],["w-7" ,"bottom-5", "right-5", "absolute", "hover:scale-110" ,"duration-100" ,"hover:shadow-lg"])
    img.src="images/delete.png"
    notesCont.appendChild(inputBox).appendChild(img)
    // console.log(inputBox)
  }
;
  notesCont.addEventListener('click',function(e){
    console.log(e.target);
  if(e.target.tagName==="IMG"){
    e.target.parentElement.remove()
    upadate()
  }else if(e.target.tagName==="P"){
notes=document.querySelectorAll('#input-box')
// console.log(notes);
notes.forEach(not=>{
    not.onkeyup=function(){
        upadate()
    }

})

  }
  })

function addClass(Elements,classes){
    Elements.forEach((element)=> {
    classes.forEach((className) => {
        element.classList.add(className)
    });       
    });
}
document.addEventListener('keydown',event=>{
    if(event.key==="Enter"){
        document.execCommand("insertLineBreak")
        event.preventDefault()
    }
})