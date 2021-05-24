export class Room{
    constructor(
        public _id: string,
        public name: string,
        public tipo:string,
        public estado:boolean,
        public precio: number,
    ){
    }
}