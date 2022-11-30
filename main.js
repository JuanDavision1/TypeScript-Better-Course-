"use strict";
(() => {
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    const fuerzaFlash = 5;
    const fuerzaSuperman = 100;
    const fuerzaBatman = 1;
    const fuerzaAcuaman = 0;
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
(() => {
    class Mutante {
        constructor(name, realname) {
            this.name = name;
            this.realname = realname;
        }
    }
    class xmen extends Mutante {
        salvarmundo() {
            return 'ffsdff';
        }
    }
    class villian extends Mutante {
        destruirmundo() {
            return 'wer';
        }
    }
    const wolvering = new xmen('afdfk', 'ssdfdk');
    const magneto = new villian('sdfs', 'ssdfdf');
    console.log(wolvering.salvarmundo);
    console.log(magneto.destruirmundo);
    const printname = (character) => {
        console.log(character.realname);
    };
});
(() => {
    class Avengers {
        constructor(name, team, realname) {
            this.name = name;
            this.team = team;
            this.realname = realname;
        }
        static getAge() {
            return this.name;
        }
        bio() {
            return `${this.name}(${this.team})`;
        }
    }
    Avengers.age = 35;
    const antman = new Avengers('fff', 'ff');
    console.log(antman);
    console.log(Avengers.age);
    console.log(antman.bio());
    console.log(Avengers.getAge());
});
(() => {
    class Agengerss {
        constructor(nombre, realname) {
            this.nombre = nombre;
            this.realname = realname;
            console.log('constructor avengers llamado');
        }
        getFullname() {
            return `${this.nombre} , ${this.realname}`;
        }
    }
    class xmen extends Agengerss {
        constructor(nombre, realname, ismutan) {
            super(nombre, realname);
            this.ismutan = ismutan;
            console.log('constructor de xmen');
        }
        get FullName() {
            return `${this.nombre} --- ${this.realname}`;
        }
        set Fullname(nombre) {
            if (nombre.length < 3) {
                throw new Error('debe ser mayor de 3 ');
            }
            this.nombre = nombre;
        }
        getfullnamedesdexmen() {
            console.log(super.getFullname());
        }
    }
    const wolverrine = new xmen('ggg', 'sddf', true);
    console.log(wolverrine);
    console.log(wolverrine.Fullname);
});
(() => {
    class Apocalipsis {
        constructor(name) {
            this.name = name;
        }
        static callApocalipsis() {
            if (!Apocalipsis.intance) {
                Apocalipsis.intance = new Apocalipsis('ssdfdsfd');
            }
            return Apocalipsis.intance;
        }
    }
    const Apocalipsis1 = Apocalipsis.callApocalipsis();
});
(() => {
    const ironman = {
        name: 'ifvfd',
        weapon: 'sdff'
    };
    const cap = {
        name: 'rrr',
        weapon: 'qqq'
    };
    const ttt = {
        name: 'wee',
        weapon: 'ppp'
    };
    const avengers = [ironman, cap, ttt];
    for (const avenger of avengers) {
        console.log(avenger);
    }
});
(() => {
    console.log('let');
    const avengers = {
        nik: 'suald',
        ireon: 'sf',
        kd: 'ssdfdfk',
        activos: true,
        nro: 32324
    };
    const { nik, ireon } = avengers;
    console.log(nik, ireon.toUpperCase());
    const avengerarr = ['sdd', true, 2222];
    const [, sdfd, seriaunnumero] = avengerarr;
    console.log({ sdfd, seriaunnumero });
});
const conducirBatimovil = (auto) => {
    auto.encender = true;
    auto.velocidadMaxima = 100;
    auto.acelear();
};
const batimovil = {
    encender: false,
    velocidadMaxima: 0,
    acelear() {
        console.log("...... gogogo!!!");
    }
};
const guason = {
    reir: true,
    comer: true,
    llorar: false
};
const reir = (guason) => {
    if (guason.reir) {
        console.log("JAJAJAJA");
    }
};
const ciudadGotica = (ciudadanos) => {
    return ciudadanos.length;
};
class Persona {
    constructor() {
        this.nombre = '';
        this.edad = 0;
        this.sexo = '';
        this.estadocivil = '';
    }
}
(() => {
    let flash = {
        name: 'barry allen',
        age: 42,
        powers: [1, 2, 3]
    };
    let sss = {
        name: 'ttt',
        age: 44,
        powers: [4, 5, 6],
        getName() {
            return this.name;
        }
    };
})();
(() => {
    class mutant {
        constructor() {
            this.age = 0;
            this.name = '';
            this.realname = '';
        }
        mutantype(id) {
            return this.name + '' + this.age;
        }
    }
})();
(() => {
    const cliente = {
        name: 'ggg',
        age: 222,
        address: {
            id: 122,
            zip: 'sdsdf',
            city: 'dgfdfd'
        },
        getFullAdress(id) {
            return 'sddf';
        }
    };
    const cliente2 = {
        name: 'eewf',
        age: 324,
        address: {
            id: 222,
            zip: 'ddd',
            city: 'ssdsd'
        },
        getFullAdress(id) {
            return 'sddf';
        }
    };
})();
(() => {
    let addNumerFuntion;
    addNumerFuntion = (a, b) => {
        return 10;
    };
    addNumerFuntion(3, 4);
})();
(() => {
    const addnumber = (a, b) => a + b;
    const great = (name) => `hola ${name}`;
    const savetheworld = () => 'flkfkngldfkn';
    let myfuncion;
    myfuncion = savetheworld;
    console.log(myfuncion());
})();
(() => {
    const hero = 'glas';
    function returnname() {
        return hero;
    }
    const activate = () => {
        return 'batiseñal';
    };
    console.log(typeof activate);
    const hername = returnname();
    const fullname = (firstname, ...restArgs) => {
        return `${firstname}${restArgs.join('')}`;
    };
    const superman = fullname('fff', 'sdd', 'e', 'y');
})();
function sumar(a, b) {
    return a + b;
}
const contar = (heroes) => {
    return heroes.length;
};
const superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
const llamarBatman = (llamar) => {
    if (llamar) {
        console.log("Batiseñal activada");
    }
};
const unirheroes = (...personas) => {
    return personas.join(", ");
};
const noHaceNada = (numero, texto, booleano, arreglo) => { };
let noHaceNadaTampoco;
noHaceNadaTampoco = noHaceNada;
(() => {
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    let fuerza;
    (function (fuerza) {
        fuerza[fuerza["acuaman"] = 0] = "acuaman";
        fuerza[fuerza["batman"] = 1] = "batman";
        fuerza[fuerza["flash"] = 5] = "flash";
        fuerza[fuerza["superman"] = 100] = "superman";
    })(fuerza || (fuerza = {}));
    const fuerzaFlash = fuerza;
    const fuerzaSuperman = fuerza;
    const fuerzaBatman = fuerza;
    const fuerzaAcuaman = fuerza;
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
var validation;
(function (validation) {
    validation.validatetext = (text) => {
        return (text.length > 3) ? true : false;
    };
    validation.validteDate = (fecha) => {
        return (isNaN(fecha.valueOf()) ? false : true);
    };
})(validation || (validation = {}));
console.log(validation.validatetext('wewf'));
(() => {
    console.log('hhh');
    let flash = {
        name: 'barry allen',
        age: 42,
        powers: ['velociyty', 'viajar']
    };
    let sss = {
        name: 'ttt',
        age: 44,
        powers: ['velociyty', 'yyyy']
    };
});
(() => {
    let flash = {
        name: 'barry allen',
        age: 42,
        powers: [1, 2, 3]
    };
    let sss = {
        name: 'ttt',
        age: 44,
        powers: [4, 5, 6],
        getName() {
            return this.name;
        }
    };
});
(() => {
    let myCostumVariable = 'Fernando';
    console.log(typeof (myCostumVariable));
    myCostumVariable = 30;
    console.log(typeof (myCostumVariable));
    myCostumVariable = {
        name: 'fff',
        powers: [1, 2, 2]
    };
    console.log(typeof (myCostumVariable));
});
//# sourceMappingURL=main.js.map