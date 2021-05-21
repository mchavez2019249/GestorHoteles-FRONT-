export class Hotel{
    constructor(
        public _id: string,
        public name: string,
        public direction:string,
        public description:string,
        public telefono: number,
        public images:string,
        public calificaciones: [],
        public habitacion: [],
        public eventos: [],
    ){
    }
}