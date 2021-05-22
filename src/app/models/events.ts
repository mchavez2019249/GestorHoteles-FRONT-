export class Event{
    constructor(
        public _id: string,
        public name: string,
        public estado: boolean,
        public precio: number,
        public fecha: string,
        public hora: string
    ){
    }
}