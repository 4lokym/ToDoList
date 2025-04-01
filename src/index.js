import "./style.css";
import * as ext from "./barrel.js"
 






console.log(ext.createCheckList("mycheckList").toString());







console.log(ext.createNoteElement("myNoteElement").toString());
console.log(ext.createCheckElement("myCheckElement").toString());
console.log(ext.createTodoElement("myTOdolement", "", null, "high").toString());