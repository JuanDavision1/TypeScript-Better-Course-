(()=>{
    //clases
    class Avengers {
       //metodos y variables estaticas solo sepueden acceder desde el nombre de la clade

        static age?:number=35;
        static getAge(){
            return this.name
        }
        // en angular se usa de esta forma el constructor
        //contructor
        constructor( private name:string,
             private team:string,
              public realname?:string,
           
              ){
// dentro del constructor se puede crear y establecer la variable 
// excepto la propiedad estatica

        }
        //metodos
        public  bio(){
            return `${this.name}(${this.team})`
        } 
    }
    const antman:Avengers = new Avengers('fff','ff');
    console.log(antman)
    //se pueden consultar de manera global
    console.log(Avengers.age);
    console.log(antman.bio())
    console.log(Avengers.getAge())
    
})