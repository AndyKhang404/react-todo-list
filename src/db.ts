import Dexie,{type EntityTable} from "dexie";

interface DBTodoItems{
	id:number;
	name:string;
	taskId:string;
	isFinished:number;
	date:Date;
	priority:number;
}

const db = new Dexie("TodoListDatabase") as Dexie & {tasks:EntityTable<DBTodoItems,'id'>};

db.version(1).stores({tasks:'++id,name,taskId,isFinished,date,priority'});

export type {DBTodoItems};
export {db};