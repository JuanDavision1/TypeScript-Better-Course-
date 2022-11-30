(()=>{
    class Agengerss{
        constructor(
            public nombre:string,
            public realname:string
        ){
            console.log('constructor avengers llamado')
        }

        protected getFullname(){
            return`${this.nombre} , ${this.realname}`
        }
    }
    class xmen extends Agengerss{
    constructor(
         nombre:string,
         realname:string,
        public ismutan:boolean
    ){
        super(nombre,realname)
        console.log('constructor de xmen')
        
        
    }
    get FullName() {
        return`${this.nombre} --- ${this.realname}`
        
    }
    set Fullname(nombre:string) {
        if(nombre.length<3){
            throw new Error ('debe ser mayor de 3 ')
        }
        this.nombre = nombre;
    }
    getfullnamedesdexmen(){
       console.log(super.getFullname())
    }
    }
    //private solo se accede desde clase protected desde la clase y extensiones del a misma
    const wolverrine = new xmen('ggg','sddf',true)
    console.log(wolverrine)
    console.log(wolverrine.Fullname)
})