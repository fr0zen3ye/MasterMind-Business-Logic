const colors = require('./colors')
const hints = require('./hints')
const pickColor = (randomFn) => {
    const randomValue = randomFn();
    if(randomValue < 0.125) {
        return colors.RED
    } 
    else if(randomValue >= 0.125 && randomValue < 0.25) {
        return colors.GREEN
    } 
    else if(randomValue >= 0.25 && randomValue < 0.375) {
        return colors.YELLOW
    } 
    else if(randomValue >= 0.375 && randomValue < 0.5) {
        return colors.BLUE
    } 
    else if(randomValue >= 0.5 && randomValue < 0.625) {
        return colors.PURPLE
    } 
    else if(randomValue >= 0.625 && randomValue < 0.75) {
        return colors.ORANGE
    } 
    else if(randomValue >= 0.75 && randomValue < 0.875) {
        return colors.PINK
    } 
    else if(randomValue >= 0.875 && randomValue < 1) {
        return colors.BROWN
    }
    throw new Error('Invalid Random')
    
}

const generateCode = (randomFn) => {
    return [1,2,3,4].map((_) => {
        return pickColor(randomFn)
    })
}

const checkCode = (code, guess, randomFn) => {
    const result = []
    let randomVaule = randomFn();
    guess.forEach((color, index) => {
        if (color === code[index]) {
            result.push(hints.FITS)
        }
        else if (color === code[0] || color === code[1] || color === code[2] || color === code[3]) {
            result.push(hints.PARTIALLY)
        }
        else {
            result.push(hints.NOT_AT_ALL)
        }
    })

    let changedResult = result.slice();

    console.log(randomVaule);
    if (randomVaule >= 0 ){
        changedResult[0] = result [1]
        changedResult[1] = result [2]
        changedResult[2] = result [3]
        changedResult[3] = result [0]
    }
    else if(randomVaule >= 1) {
        changedResult[0] = result [2]
        changedResult[1] = result [3]
        changedResult[2] = result [1]
        changedResult[3] = result [0]
    }
    else if(randomVaule >= 2) {
        changedResult[0] = result [3]
        changedResult[1] = result [0]
        changedResult[2] = result [2]
        changedResult[3] = result [1]
    }
    else if (randomVaule < 0){
        throw new Error ('Invalid Random'); 
    } 
    console.log(changedResult)
    return changedResult;
}

module.exports = {
    pickColor,
    generateCode,
    checkCode
}