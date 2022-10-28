import { dataUser } from "./dataMock"

export const totalExpenditure = ()=>  {
    return dataUser.rent + dataUser.water + dataUser.electricity + dataUser.gas
}

export const roundNumbertoTwo = (numero, decimales) => {
    const numeroRegexp = new RegExp('\\d\\.(\\d){' + decimales + ',}');   // Expresion regular para numeros con un cierto numero de decimales o mas
    if (numeroRegexp.test(numero)) {         // Ya que el numero tiene el numero de decimales requeridos o mas, se realiza el redondeo
        return Number(numero.toFixed(decimales));
    } else {
        return Number(numero.toFixed(decimales)) === 0 ? 0 : numero;  // En valores muy bajos, se comprueba si el numero es 0 (con el redondeo deseado), si no lo es se devuelve el numero otra vez.
    }
}
   
export const consumptionPercentages=  {
    percentageWater:  roundNumbertoTwo((dataUser.water / totalExpenditure())*100, 2),
    percentageRent:  roundNumbertoTwo((dataUser.rent / totalExpenditure())*100, 2),
    percentageGas:  roundNumbertoTwo((dataUser.gas / totalExpenditure())*100, 2),
    percentageElectricity:  roundNumbertoTwo((dataUser.electricity / totalExpenditure())*100, 2),
}

