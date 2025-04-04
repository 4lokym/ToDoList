import "./style.css";
import * as ext from "./barrel.js"

//TO-DO make the description pop up when clicked on the title, and disappear when clicked again

const myNote = ext.createTodoElement("Ivan va a studiare", "Ivan va a vedere i compiti e si mette a sudiare cio che gli serve", "oggi");
const myList = ext.createCheckList("New todos");


// const my_list = ext.createTodoList("my_list");
// console.log(my_list.toString());
// my_list.addToList(myNote);
// console.log(my_list.toString());


// console.log(my_list.getList()[myNote.getId()].toString());
// my_list.removeFromList_id(myNote.getId());
// console.log(my_list.toString());
// my_list.title = "newTItle"; 
// console.log(my_list.toString());



ext.addBaseElementToDom.addElement(myNote);
ext.addBaseElementToDom.addElement(myNote);
ext.addBaseElementToDom.addElement(myNote);

ext.addListToDom.addList(myList);
