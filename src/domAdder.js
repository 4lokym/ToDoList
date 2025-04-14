export const domAdder = function(){

    const elemetsSection = document.querySelector(".elementsSection");
    const overflow_container = document.querySelector(".overflow-container");
    
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
        dueDate.textContent = date ? date : "";
        return dueDate;
    }
    const priority = function(priority){
        const priority_var = document.createElement("span");
        priority_var.classList.add("priority", "topText");
        priority_var.textContent = priority;
        return priority_var;
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

    const text = function(text){
        const description_var = document.createElement("div");
        description_var.textContent = text;
        description_var.classList.add("description");
        return description_var;
    }

    const addCheck = function(element){
        const element_container = elementContainer();
        const line_text = lineText();
        line_text.appendChild(checkbox());
        line_text.appendChild(title(element.title));
        element_container.appendChild(line_text);
        element_container.appendChild(line());
        element_container.appendChild(description(element.description))
        elemetsSection.appendChild(element_container);
        return element_container;
    }

    const addTodo = function(element){
        const element_container = addCheck(element);
        const linetext = element_container.querySelector(".lineText");
        linetext.append(priority(element.priority));
        linetext.append(dueDate(element.dueDate));
        return element_container;
    }

    const addNote = function(element){
        const element_container = elementContainer();
        element_container.classList.add("noteElement");
        const line_text = lineText();
        line_text.appendChild(title(element.title));
        element_container.appendChild(line_text);
        element_container.appendChild(text(element.text));
        elemetsSection.appendChild(element_container);
        return element_container;
    }

    const addElement = function(element){
        switch (element.type) {
            case "todoElement":
                addTodo(element);
                break;
            case "checkElement":
                addCheck(element);
                break;
            case "noteElement":
                addNote(element);
                break;
            default:
                console.log("the inserted type doesn't exist");
                break;
        }
    }

    const addAllFromList = function (listElem){
        const list = listElem.getList();
        if(listElem.getListLength() >0){
            for (let key in list){
                addElement(list[key]);
            }
        }
    }

    const removeAllElements = function(){
        
        const allElements = elemetsSection.querySelectorAll(".anElement");
        if(!!allElements.length){
            allElements.forEach(element => {
                element.remove();   
            });
        }
    }
    
    const changePageTitle = function(title){
        const elem_title = elemetsSection.querySelector(".elemSectTitle");
        elem_title.textContent = title;
    }

    const addList = function(list){
        const list_var = document.createElement("div");
        list_var.classList.add("list", "clickable", `${list.type}`);
        list_var.textContent = list.title;
        list_var.addEventListener("click", (event) =>{
            changePageTitle(list.title);
            updatePageSubTitle(list.type);
            removeAllElements();
            addAllFromList(list);
        });
        overflow_container.appendChild(list_var);
        return list_var;
    }

    const changePageSubTitle = function(subTitle){
        const columnHeader = elemetsSection.querySelector(".columnHeader");
        columnHeader.textContent = subTitle;
    }

    const updatePageSubTitle = function(type){
        switch(type){
            case "todolist":
            changePageSubTitle("Title\\Priority\\Due date");
            break;
            case "checklist":
            changePageSubTitle("Title");
            break;
            case "notelist":
            changePageSubTitle("");    
            break;
            default:
            throw new Error("The element type doesn't exist");
        }
    }


    return {addCheck, addTodo, addElement, addAllFromList, removeAllElements, addList, addNote}
}();