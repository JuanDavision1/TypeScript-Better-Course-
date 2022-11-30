(()=>{
    interface Hero {
        name:string,
        age?:number,
        powers:number[],
        getName?:()=>string
    }
    
    let  flash:Hero={
        name :'barry allen',
        age:42,
        powers :[1,2,3]
    }
    let  sss:Hero ={
        name :'ttt',
        age:44,
        powers :[4,5,6],
        getName() {
           return this.name; 
        }
    }
    //un tipo  no se puede extender la interfaz si , añadir mas tipos y asi
    
    
})()