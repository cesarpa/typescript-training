class Customer {
    private _firstName:string;
    private _lastName: string;

    constructor(theFirst:string, theLast:string){
        this._firstName = theFirst;
        this._lastName = theLast;
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

let myCustomer = new Customer("Cesar", "Palacios");
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
