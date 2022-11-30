// Crear interfaces
interface carro{
  encender:boolean;
  velocidadMaxima:number;
  acelear():void;
}
// Cree una interfaz para validar el auto (el valor enviado por parametro)
const conducirBatimovil = ( auto:carro ):void => {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelear();
}

const batimovil:carro = {
  encender:false,
  velocidadMaxima:0,
  acelear(){
    console.log("...... gogogo!!!");
  }
}

// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales
interface villanos{
  reir?:boolean;
  comer?:boolean;
  llorar?:boolean;
}
const guason:villanos = {
  reir: true,
  comer:true,
  llorar:false
}

const reir = ( guason:villanos ):void => {
  if( guason.reir ){
    console.log("JAJAJAJA");
  }
}


// Cree una interfaz para la siguiente funcion
interface ciudad{
  (ciudadanos:string[]):number
}
const ciudadGotica:ciudad = ( ciudadanos:string[] ):number => {
  return ciudadanos.length;
}

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos
interface must{
  nombre:string;
  edad:number;
  sexo:string;
  estadocivil:string;
  imprimirvio?():void
}
/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/
class Persona implements must {
  public nombre:string='';
  public edad:number=0;
  public sexo:string='';
  public estadocivil:string='';

}