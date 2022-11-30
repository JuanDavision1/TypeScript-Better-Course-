(()=>{
const hero: string ='glas';

function returnname():string{
    return hero;
}
 const activate = ():string=>{
return 'batiseñal';
 }
console.log(typeof activate)
const hername = returnname();

const fullname =(firstname:string,...restArgs:string[]):string =>{
    return `${firstname}${restArgs.join('')}`
}
const superman = fullname('fff','sdd','e','y')
})()