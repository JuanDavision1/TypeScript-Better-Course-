(()=>{
    type Hero ={
        name:string,
        age?:number,
        powers:number[],
        getName?:()=>string
    }
    let myCostumVariable:(string | number | Hero) ='Fernando'
    console.log(typeof(myCostumVariable))
  myCostumVariable =30
  console.log(typeof(myCostumVariable))
  myCostumVariable ={
    name:'fff',
    powers:[1,2,2]
  }
  console.log(typeof(myCostumVariable))
})
