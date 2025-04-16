const newElmentButton =  document.querySelector(".newElement");
newElmentButton.addEventListener("click", (event) =>{
    document.querySelector(".newElemDialog").showModal();
});

const newListButton = document.querySelector(".newList");
newListButton.addEventListener("click", (event) =>{
    document.querySelector(".newListDialog").showModal();
});

const changeTODO = function(){

};

const newElementSelection = document.getElementById("selectElement");
newElementSelection.addEventListener("change", () => {alert("a")

});

const submitNewElem = document.querySelector(".submit-NewElem");
submitNewElem.addEventListener("click", (event)=>{
});