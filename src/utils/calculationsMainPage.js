import { dataUser } from "./dataMock"

export const totalExpenditure = (selectedUser)=>  {
    const totalNoRent = dataUser.water + dataUser.electricity + dataUser.gas;
    switch (selectedUser) {
        case "Ger":
            return totalNoRent +dataUser.specificToUser.find(user => user.user === "Ger").rent
        case "Kiki":
            return totalNoRent + dataUser.specificToUser.find(user => user.user === "Kiki").rent
        case "Kaka":
            return totalNoRent + dataUser.specificToUser.find(user => user.user === "Kaka").rent
        default:
            return totalNoRent + dataUser.totalRent
    }

}

export const totalMonth = () =>{
    return dataUser.electricity + dataUser.gas + dataUser.totalRent + dataUser.water
}

export const userRent = (selectedUser)=>  {
    switch (selectedUser) {
        case "Ger":
            return dataUser.specificToUser.find(user => user.user === "Ger").rent
        case "Kiki":
            return dataUser.specificToUser.find(user => user.user === "Kiki").rent
        case "Kaka":
            return dataUser.specificToUser.find(user => user.user === "Kaka").rent
        default:
            return dataUser.totalRent
    }

}

export const roundNumberToTwo = (numero, decimales) => {
    const numeroRegexp = new RegExp('\\d\\.(\\d){' + decimales + ',}');   // Expresion regular para numeros con un cierto numero de decimales o mas
    if (numeroRegexp.test(numero)) {         // Ya que el numero tiene el numero de decimales requeridos o mas, se realiza el redondeo
        return Number(numero.toFixed(decimales));
    } else {
        return Number(numero.toFixed(decimales)) === 0 ? 0 : numero;  // En valores muy bajos, se comprueba si el numero es 0 (con el redondeo deseado), si no lo es se devuelve el numero otra vez.
    }
}


export const numberOfTenants = () => {
    return 3
}

export const individualCosts = (selectedUser) => {
    const water = roundNumberToTwo(dataUser.water / numberOfTenants(), 2)
    const rent = roundNumberToTwo(userRent(selectedUser),2)
    const gas = roundNumberToTwo(dataUser.gas / numberOfTenants(),2)
    const electricity = roundNumberToTwo((dataUser.electricity) / numberOfTenants(),2)
    return {"water": water, 
            "rent": rent, 
            "gas": gas, 
            "electricity": electricity,
            "total": water + rent + gas + electricity
        }
}
   
export const consumptionPercentages= (selectedUser) => {
    const currentRent = userRent(selectedUser)
    const percentageWater = roundNumberToTwo((dataUser.water / totalExpenditure(selectedUser))*100, 2)
    const percentageRent =  roundNumberToTwo((currentRent / totalExpenditure(selectedUser))*100, 2)
    const percentageGas =  roundNumberToTwo((dataUser.gas / totalExpenditure(selectedUser))*100, 2)
    const percentageElectricity =  roundNumberToTwo((dataUser.electricity / totalExpenditure(selectedUser))*100, 2)
    const totalPercentages = {percentageElectricity, percentageGas, percentageWater, percentageRent}
    return totalPercentages
}

