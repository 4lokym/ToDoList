import "./style.css";
import * as ext from "./barrel.js"




//TO-DO make the description pop up when clicked on the title, and disappear when clicked again

const myNote = ext.createNoteElement("Ivan va a studiare", "Ivan va a vedere i compiti e si mette a sudiare cio che gli serve");
const myList = ext.createNoteList("a Note");
myList.addToList(myNote);
console.log(myList);
console.log(myList.getList());
const mytodo = ext.createTodoElement("Ivan va a studiare", "Ivan va a vedere i compiti e si mette a sudiare cio che gli serve", "oggi");
const myTodoList = ext.createTodoList("New todos");
myTodoList.addToList(mytodo);
const mycheck = ext.createCheckElement("Ivan va a studiare", "Ivan va a vedere i compiti e si mette a sudiare cio che gli serve", "oggi");
const myCheckList = ext.createCheckList("New todos");
myCheckList.addToList(mycheck);


// const my_list = ext.createTodoList("my_list");
// console.log(my_list.toString());
// my_list.addToList(myNote);
// console.log(my_list.toString());


// console.log(my_list.getList()[myNote.getId()].toString());
// my_list.removeFromList_id(myNote.getId());
// console.log(my_list.toString());
// my_list.title = "newTItle"; 
// console.log(my_list.toString());




ext.domAdder.addList(myList);
ext.domAdder.addList(myTodoList);
ext.domAdder.addList(myCheckList);


document.querySelector(".newElemDialog").showModal();