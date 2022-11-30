
namespace validation{
export  const validatetext = (text:string):boolean=>{
   return (text.length>3)?true : false;
}
export const validteDate =(fecha:Date):boolean=>{
    return (isNaN(fecha.valueOf())?false:true)
}
}
console.log(validation.validatetext('wewf'))

// los namespace se agreupan todo lo que quiero funcione , la logica, variables todo y solo se exportan todo lo que quiera