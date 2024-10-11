const formatearDinero = (valor) => {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency', 
        currency: 'USD'
    });
    return formatter.format(valor)

}

const calcularTotalPagar = (cantidad, plazo) => {
    let total;

    // mientras mayor es la cantidad solicitada, menor es el interes
    if(cantidad < 5000){
        total = cantidad * 1.5; // es el 50% de interes

    }else if(cantidad >= 5000 && cantidad < 10000){
        total = cantidad * 1.4;

    }  else if(cantidad >= 10000 && cantidad < 15000){
        total = cantidad * 1.3;
    } else{
        total = cantidad * 1.2;

    }

    // plazo    mas plazo mayor interés 
    if(plazo === 3){
        total *= 1.1;  // 10%
    } else if (plazo === 6){
        total *= 1.2;   //20%
    } else if (plazo === 12){
        total *= 1.3;  //30%
    } else {
        total *= 1.4; //40%
    }

    return total;

}

export  {
    formatearDinero,
    calcularTotalPagar
}