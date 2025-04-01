import "./style.css";
import * as ext from "./barrel.js"
 

const myNote = ext.createTodoElement("myNote", "hellooooooooo worldddddd");

const my_list = ext.createTodoList("my_list");
console.log(my_list.toString());
my_list.addToList(myNote);
console.log(my_list.toString());


console.log(my_list.getList()[myNote.getId()].toString());
my_list.removeFromList_id(myNote.getId());
console.log(my_list.toString());
my_list.title = "newTItle"; 
console.log(my_list.toString());