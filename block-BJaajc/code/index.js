function fullName(firstName,lastName){
    return `${firstName} ${lastName}`
}
function isPalindrome(val){
    return val == val.split("").reverse().join("") ? true:false
}
function getCircumfrence(radius){
    let circumfrence= 2 * Math.PI *radius
    return `The circumference is NN`
}

function getArea(radius){
    return `The area is ${Math.PI * radius * radius}`
}
    module.exports = {fullName,isPalindrome,getCircumfrence,getArea}