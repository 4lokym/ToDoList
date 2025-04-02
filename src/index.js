import "./style.css";
import * as ext from "./barrel.js"
 

const myNote = ext.createTodoElement("Ivan va a studiare", "Ivan va a vedere i compiti e si mette a sudiare cio che gli serve", "oggi");



// const my_list = ext.createTodoList("my_list");
// console.log(my_list.toString());
// my_list.addToList(myNote);
// console.log(my_list.toString());


// console.log(my_list.getList()[myNote.getId()].toString());
// my_list.removeFromList_id(myNote.getId());
// console.log(my_list.toString());
// my_list.title = "newTItle"; 
// console.log(my_list.toString());

const addToDomTools = function(){

    const elemetsSection = document.querySelector(".elementsSection");
    
    const elementContainer = function(){
        const element_container = document.createElement("div");
        element_container.classList.add("anElement");
        return element_container;
    }

    const lineText = function(){
        const lineText = document.createElement("div");
        lineText.classList.add("lineText");
        return lineText;
    }

    const checkbox = function(){
        const checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");
        checkbox.setAttribute("name", "done");
        return checkbox;
    }

    const title = function(title){
        const labelTitle = document.createElement("label");
        labelTitle.classList.add("titleLable", "clickable", "topText");
        labelTitle.textContent = title;
        labelTitle.addEventListener("click", (event) => {
            const elements_section = event.target.parentNode.parentNode;
            console.log(elements_section);
            elements_section.querySelector(".description").classList.toggle("hidden");
        });
        return labelTitle;
    }

    const dueDate = function(date){
        const dueDate = document.createElement("span");
        dueDate.classList.add("dueDate", "topText");
        dueDate.textContent = date ? "Due date: " + date : "";
        return dueDate;
    }

    const line = function(){
        const line = document.createElement("div");
        line.classList.add("line");
        return line;
    }

    const description = function(description){
        const description_var = document.createElement("div");
        description_var.textContent = description;
        description_var.classList.add("hidden","description");
        return description_var;
    }

    const addCheckElement_d = function(element){
        const element_container = elementContainer();
        const line_text = lineText();
        line_text.appendChild(checkbox());
        line_text.appendChild(title(element.title));
        line_text.appendChild(dueDate(element.dueDate));
        element_container.appendChild(line_text);
        element_container.appendChild(line());
        element_container.appendChild(description(element.description))
        elemetsSection.appendChild(element_container);
    }
    
    return {checkbox, title, element_container: elementContainer, line, addCheckElement_d}
}();

addToDomTools.addCheckElement_d(myNote);
addToDomTools.addCheckElement_d(myNote);
addToDomTools.addCheckElement_d(myNote);
