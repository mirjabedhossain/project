
// start working from here

const inputItem = document.querySelector('.input-item')
const addBtn = document.querySelector('.add-btn')
const addedItems = document.querySelector(".added-items")



addBtn.addEventListener('click',function(){
    let items = inputItem.value;
    inputItem.value = '';
    const listItem = document.createElement('li')
    const listText = document.createElement('span')
    const listBtn = document.createElement('button')
    listItem.appendChild(listText)
    listItem.appendChild(listBtn)
    if(items){
        listText.textContent = items;
        listBtn.textContent = "Delete";
        addedItems.appendChild(listItem)
        
    }else{
        
        listText.remove()
        listBtn.remove()
    }
    
    
    listBtn.addEventListener('click',function(){
        addedItems.removeChild(listItem)
    })
})
