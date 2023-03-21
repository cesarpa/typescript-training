export class Product {
    constructor(public sku:string,
        public name:string,
        public description:string,
        public unitPrice:number,
        public imageUrl:string,
<<<<<<< HEAD
        public active:boolean,
        public unitsInStick:number,
        public dateCreated: Date,
        public lastUpdated: Date)
        {
    }
=======
        public active:number,
        public unitsInStock:number,
        public dateCreated:Date,
        public lastUpdate:Date,
        public categoryId:number

        ){

        }
>>>>>>> 27502088fd5fc6d86b4fd5f88cd46524714b1eab
}
