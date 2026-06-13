import {disconnectFromDatabase, databaseType } from "./utils/database.js"; //para usar somente uma função 
//import * as database from "./utils/database.js";
import { getDataFromAPI } from "./utils/api.js";

console.log("Hello, World!");
getDataFromAPI();
console.log(databaseType);
disconnectFromDatabase();   

