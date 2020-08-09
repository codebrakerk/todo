// ****** SELECT ITEMS **********
const form =document.querySelector(".grocery-form");
const alertm=document.querySelector(".alert");
const items =document.getElementById("grocery");
const submitbtn=document.querySelector(".submit-btn");
const list =document.querySelector(".grocery-list");
const clearbtn=document.querySelector(".clear-btn");
const container=document.querySelector(".grocery-container");

// edit option
let editElement;
let editFlag=false;
let editId="";

// ****** EVENT LISTENERS *********
/*
window.addEventListener("DOMContentLoaded",function(){
  
})*/

submitbtn.addEventListener("click",function(e){
const value=items.value;
e.preventDefault();
   if(value && !editFlag){
      container.classList.add("show-container");
      const id=new Date().getTime().toString();
      const  element=document.createElement("article");

      let attr=document.createAttribute("data-id");
      attr.value=id;
      element.setAttributeNode(attr);
      element.classList.add("grocery-item");
     element.innerHTML=`<p class="title">${value}</p>
     <div class="btn-container">
      <button class="edit-btn" type="button">
      <i class="fas fa-edit"></i>
      </button>
     <button class="delete-btn" type="button">
     <i class="fas fa-trash"></i>
     </button>
      </div>`;
      list.appendChild(element);
     displayalert("item added to the list","success");
     //items.value="";
setBackToDefault();
//addToLocalStorage(id,value);

      const deletebtn=document.querySelectorAll(".delete-btn");
      deletebtn.forEach(function(dbtn){
      const fordelete=dbtn.parentElement.parentElement;
      
       dbtn.addEventListener("click",function(){
        list.removeChild(fordelete);
        const id =fordelete.dataset.id;
        console.log(id);
       displayalert("removed item","danger");
       if(list.children.length===0){
        container.classList.remove("show-container");
        
                                    }
        setBackToDefault();
        //deleteFromLocalStorage(id);
       
        
                              })
                      })


const editbtn=document.querySelectorAll(".edit-btn");
editbtn.forEach(function(edit){
  edit.addEventListener("click",function(){
   const banana= edit.parentElement.previousElementSibling;
   editElement=banana;
   
   
    editFlag=true;
    submitbtn.innerText="edit";
    items.value=banana.innerText;
    //editLocalStorage(id,value);
   
              })
           })




}
/*const valued=items.value;
console.log(valued);*/
 /*if(valued  !=="" && editFlag){
  submitbtn.addEventListener("click",function(){
   console.log(submitbtn);
    banana.innerHTML=valued;
   dangeralert("value changed","success");
   console.log(banana.innerHTML);
    
    
  })
  
}*/
else if(value !=="" && editFlag){
   
  
  //  banana.innerHTML=value;
   displayalert("value changed","success");
   editElement.innerHTML=items.value;
    setBackToDefault();
    
  
}
 



else{
  displayalert("please enter the value","danger");
}
})


 clearbtn.addEventListener("click",function(){
   container.classList.remove("show-container");
   const buds=document.querySelectorAll(".grocery-item");
  // console.log(buds)
   buds.forEach(function(item){
     const p=item.parentElement;
     p.removeChild(item);
   })
 // localStorage.removeItem("list");
   setBackToDefault();
 })

 

  
  //container.classList.remove("show-container") ;


  








// ****** FUNCTIONS **********
 function displayalert(text,type){
   alertm.textContent=text;
   alertm.classList.add(`alert-${type}`);
   setTimeout(function(){
     alertm.textContent="";
     alertm.classList.remove(`alert-${type}`);
   },1000);
 };
 function setBackToDefault(){
   items.value="";
   editFlag=false;
   submitbtn.textContent="submit";
 }

// ****** LOCAL STORAGE **********
//addToLocalStorage
/*function addToLocalStorage(id,value){
 const grocery={id,value};
 let items=getLocalStorage();
  localStorage.setItem("list",JSON.Stringfy(items))
  
  ;
}*/

//getLocalStorage
/*function getLocalStorage(){
  return localStorage.getItem("list")?JSON.parse(localStorage.getItem("list")):[];
}
//delete deleteFromLocalStorage
function deleteFromLocalStorage(id){
  
}

function editLocalStorage(id,value){
  
}


// ****** SETUP ITEMS **********
*/