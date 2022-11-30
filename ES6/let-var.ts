(()=>{
  console.log('let')  
    const avengers ={
        nik:'suald',
        ireon:'sf',
        kd:'ssdfdfk',
        activos:true,
        nro:32324
    }
    //sacar las propierdades que me interesan
    const {nik,ireon } =avengers
    console.log(nik,ireon.toUpperCase())
//desestructurizacion
    const avengerarr:[string,boolean,number] =['sdd',true,2222]
    const [,sdfd,seriaunnumero] =avengerarr;
    console.log({sdfd,seriaunnumero})
})