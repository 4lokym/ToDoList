export const baseElement = function(title, type = ""){
    const id = crypto.randomUUID();
    function toString(){
        return `${this.title} is a ${this.type}\nId: ${id}`
    }

    return {title, id, type, toString};
}

export const baseList = function(title, type, list){
    const myobj = baseElement(title, type);
    if(typeof list !== typeof {}){
        throw new Error("baselist() takes only objects as an argument");
    }
    myobj.list = list;
    myobj.toString = () => `${myobj.title} is a ${myobj.type}\nId: ${myobj.id}\nContains: ${Object.entries(myobj.list).length} elements`;
    return myobj;
};