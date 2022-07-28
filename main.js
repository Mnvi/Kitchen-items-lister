let addBtn = document.getElementById("add-btn")

let kitchenItemsList = document.getElementById("kitchen-items-list")

let kitchenInput = document.getElementById("kitchen-input")

let kitchenInputData;
let kitchenInputDataArray = []

function setItemLocalStorage(){
    localStorage.setItem("KitchenInput",JSON.stringify(kitchenInputDataArray))
}
function getItemLocalStorage(){
        if(localStorage.getItem("KitchenInput")){
            kitchenInputData = JSON.parse(localStorage.getItem("KitchenInput"))
            buildUI()
        }
       
    
    
}
function buildUI(){
    kitchenItemsList.textContent = ""
     kitchenInputDataArray.forEach((item) => {
          //Create DOM elements now
        let li = document.createElement('li')
        let spanEl = document.createElement('span');
        li.appendChild(spanEl)
        spanEl.innerText = item
        kitchenItemsList.appendChild(li)
        li.style.cssText = 'animation-name : slideIn;'
        kitchenInput.value = ''
        kitchenInput.focus()
    
      
      //Create Trash button
        let trashBtn = document.createElement('i')
        trashBtn.classList.add('fas','fa-trash')
        li.appendChild(trashBtn)
    
  
      //edit item
        let editBtn = document.createElement('i')
        editBtn.classList.add("fas","fa-edit")
        li.appendChild(editBtn)
  
      })
      
}

//step 2
//Add Kitchen items
function addKitchenItems(event){
    kitchenInputData = kitchenInput.value
    kitchenInputDataArray.push( kitchenInputData)
    //Set item to local storage
    setItemLocalStorage()


    //Get item 
    getItemLocalStorage()


   /*  //Create DOM elements now
    let li = document.createElement('li')
    let spanEl = document.createElement('span');
    li.appendChild(spanEl)
    spanEl.innerText = kitchenInputData
    kitchenItemsList.appendChild(li)
    li.style.cssText = 'animation-name : slideIn;'
    kitchenInput.value = ''
    kitchenInput.focus()
  
    
    //Create Trash button
    let trashBtn = document.createElement('i')
    trashBtn.classList.add('fas','fa-trash')
    li.appendChild(trashBtn)
    console.log(trashBtn)

    //edit item
    let editBtn = document.createElement('i')
    editBtn.classList.add("fas","fa-edit")
    li.appendChild(editBtn) */

}

//delete kitchen item
function deleteKitchenItem(event){
    if(event.target.classList[1] === "fa-trash"){
        let item = event.target.parentElement
        console.log(item)
        item.classList.add("slideOut")
        item.addEventListener('transitionend',function(){
            console.log("animation has completed")
            item.remove()
        })
        //item.remove()
    }
}
//Edit Kitchen Items
function editKitchenItem(event){
    if(event.target.classList[1] === "fa-edit"){
        let editedValue = prompt("Enter the new value")
        let item = event.target.parentElement
         
        let spanEl = item.querySelector('span')
        spanEl.innerText = editedValue
    }
}


// step 1
// add an event listener to the button
addBtn.addEventListener("click",addKitchenItems);
kitchenItemsList.addEventListener("click",deleteKitchenItem)
kitchenItemsList.addEventListener("click",editKitchenItem)

getItemLocalStorage()