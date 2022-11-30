(()=>{
class Apocalipsis{
    static intance:Apocalipsis;

     private constructor(public name:string){
         
    }
    static callApocalipsis():Apocalipsis{
if(!Apocalipsis.intance){
        Apocalipsis.intance = new Apocalipsis('ssdfdsfd')
        }
        return Apocalipsis.intance 
    }
}
const Apocalipsis1 = Apocalipsis.callApocalipsis()
//const Aapocalipsis = new Apocalipsis('sdfsdfsdsdff')
//const Aapocalipsis2 = new Apocalipsis('erwer')
//const Aapocalipsis3 = new Apocalipsis('sdfsdfsweerrwerrdsdff')
//console.log(Aapocalipsis)

})