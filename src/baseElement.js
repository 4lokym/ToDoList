export const baseElement = function(title, type = ""){
    const id = crypto.randomUUID();
    function toString(){
        return `${this.title} is a ${this.type}\nId: ${id}`
    }

    const changeTitle = function(new_title){
        this.title = new_title;
    }

    return {title, id, type, toString, changeTitle};
}

export const baseList = function(title, type, list){
    const myobj = baseElement(title, type);
    if(typeof list !== typeof {}){
        throw new Error("baselist() takes only objects as an argument");
    }

    myobj.list = list;
    myobj.list_lenght = Object.entries(myobj.list).length;
    myobj.toString = () => `${myobj.title} is a ${myobj.type}\nId: ${myobj.id}\nContains: ${myobj.list_lenght} elements`;
    
    myobj.addToList = function (element){

        myobj.list[element.id] = element;
        myobj.list_lenght++;
    }

    myobj.removeFromList_id = function(id){
        delete this.list[id];
        myobj.list_lenght--;
    }

    return myobj;
};