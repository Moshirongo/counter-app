let firstName = "Sospeter"
let lastName = "Nyaga"
let name = "sos"
let greeting = "Hi there"
function call()
{
    let salam = greeting +", " + name + "!"
    console.log(salam)

}call()

let fullName = firstName +" " + lastName
console.log(fullName)

let myPoints =3

// Create two functions, add3Points() and remove1Point(), and have them
// add/remove points to/from the myPoints variable
function add3Points()
{
    myPoints += 3
}
function remove1Point()
{
    myPoints -= 1

}
add3Points()
remove1Point()
console.log(myPoints)



// Call the functions to that the line below logs out 10