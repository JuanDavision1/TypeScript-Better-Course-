(()=>{
    abstract class Mutante {
        constructor(
        public name:string,
        public realname:string){}
    }
    
    class xmen extends Mutante{
        salvarmundo(){
            return 'ffsdff'
        }
    }
    class villian  extends Mutante{
        destruirmundo(){
            return 'wer'
        }
    }
    const wolvering = new xmen('afdfk','ssdfdk') 
    const magneto = new villian('sdfs','ssdfdf')
    console.log(wolvering.salvarmundo)
    console.log(magneto.destruirmundo)

    const printname=(character:Mutante)=>{
        console.log(character.realname)
    }
})