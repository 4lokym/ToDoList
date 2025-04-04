export const baseElement = function(title, type = ""){
    const id = crypto.randomUUID();

    function toString(){
        return `${this.title} is a ${this.type}\nId: ${id}`
    }

    const getId = function(){
        return id;
    }
    const changeTitle = function(newTitle){
        title = newTitle;
    }

    return {title, getId, type, toString, changeTitle};
}

export const baseList = function(title, type){
    const parent_obj = baseElement(title, type);
    const list  ={};

    let list_lenght = Object.entries(list).length;

    const getList = function(){
        return {...list};
    }
    const addToList = function(element){
        list[element.getId()] = element;
        list_lenght++;
    }
    const removeFromList_id= function(id){
        delete list[id];
        list_lenght--;
    }
    const getListLength = function(){
        return list_lenght;
    }

    parent_obj.toString = () => `${parent_obj.title} is a ${parent_obj.type}\nId: ${parent_obj.getId()}\nContains: ${list_lenght} elements`;

    return Object.assign(parent_obj, {getList, addToList, removeFromList_id, getListLength});
};