(()=>{
    type avenger ={
        name:string,
        weapon:string;
    }
    const ironman:avenger={
        name:'ifvfd',
        weapon:'sdff'
    }
    const cap:avenger={
        name:'rrr',
        weapon:'qqq'
    }
    const ttt:avenger={
        name:'wee',
        weapon:'ppp'
    }
    const avengers =[ironman,cap,ttt];

    for(const avenger of avengers){
        console.log(avenger)
    }
})