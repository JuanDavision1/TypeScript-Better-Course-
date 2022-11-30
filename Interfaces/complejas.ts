(()=>{
    interface Client{
        name:string,
        age:number;
        //no es recomendable anidar tipado
        //es mejor crear otra interface llamada address
        //address:{
        //    id:number,
        //    zip:string,
        //    city:string
        //}
        address:Address;
        getFullAdress(id:string):string;
    }
    interface Address{
        id:number,
         zip:string,
         city:string
    }
    const cliente:Client={
        name:'ggg',
        age:222,
        address:{
            id:122,
            zip:'sdsdf',
            city:'dgfdfd'
        },
        getFullAdress(id:string){
            return 'sddf'
        }
    }
    const cliente2:Client={
        name:'eewf',
        age:324,
        address:{
        id:222,
        zip:'ddd',
        city:'ssdsd'
      },
      getFullAdress(id:string){
        return 'sddf'
    }
    }
})()