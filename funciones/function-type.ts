(()=>{
const addnumber =(a:number,b:number)=> a+b
const great =(name:string)=> `hola ${name}`
const savetheworld =()=>'flkfkngldfkn'
//* una funcion que regresa un numero
let myfuncion:()=>string;
//*myfuncion =10;
//*console.log(myfuncion)

//*myfuncion =addnumber;
//*console.log(myfuncion(1,2))

//*myfuncion =great;
//*console.log(myfuncion('holaaa'))

myfuncion =savetheworld;
console.log(myfuncion())
})()