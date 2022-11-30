(()=>{
    interface Xmen{
        name:string,
        realname:string;
        mutantype(id:number):string;
    }
    interface humen{
        age:number
    }
    //se implementa una interfaz en una clase
    class mutant implements Xmen,humen{
        public age: number=0;
        public  name:string='';
        public realname:string='';
        mutantype(id:number){
            return this.name+''+this.age
        }
    }
})()