module Journal {
  export interface IEntry {
    title: string;
    body: string;
    timestamp: Date;
  }

  export class Entry implements IEntry {
    constructor(public title: string, public body:string){}
    timestamp:Date= new Date();
  }

  export class JournalEntry extends Entry {
    constructor(public title: string, public body:string){
      super(title, body);
    }
  }
}
