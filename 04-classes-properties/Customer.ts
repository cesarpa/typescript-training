class Customer {
    constructor(private _firstName:string,
        private _lastName:string){
    }

     
    public get lastName(): string {
        return this._lastName;
    }
    public set lastName(value: string) {
        this._lastName = value;
    }

    public get firstName(){
        return this._firstName;
    }

    public set firstName(firstName:string){
        this._firstName = firstName;
    }
}

let custormerOne = new Customer("a","b");
console.log(custormerOne.lastName)