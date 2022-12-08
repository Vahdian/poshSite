

export const totalMonth = (expenses, userType) =>{
    return individualCost(expenses.electricity) + individualCost(expenses.gas) + userRent(userType) + individualCost(expenses.water)
}

export const totalExpenses = (expenses) =>{
    return individualCost(expenses.electricity) + individualCost(expenses.gas) + individualCost(expenses.water)
}

export const userRent = (userType)=>  {
    switch (userType) {
        case 1:
            return 370
        case 2:
            return 340
        case 3:
            return 290
        case 4:
            return 500
        default:
            return 1000
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

export const individualCost = (total) => {
    return roundNumberToTwo(total/numberOfTenants(), 2)
}
   
export const consumptionPercentages= (selectedUser, expenses, expense) => {
    const userType = selectedUser.tenantType
    if(expense === "rent"){
        const percentage = roundNumberToTwo((userRent(userType))/totalMonth(expenses, userType)*100, 2) 
        return percentage
    } else {
        const percentage = roundNumberToTwo((individualCost(expenses[expense]))/totalMonth(expenses, userType)*100, 2)
        return percentage
    }
}

