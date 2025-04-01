import "./style.css";
import * as ext from "./barrel.js"
 

const myNote = ext.createNoteElement("myNote", "hellooooooooo worldddddd");

const my_list = ext.createNoteList("my_list");
console.log(my_list.toString());
my_list.addToList(myNote);
console.log(my_list.toString());
console.log(my_list.list[myNote.id].toString());
my_list.removeFromList_id(myNote.id);
console.log(my_list.toString());