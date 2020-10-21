// ASSESSMENT 5: JavaScript Coding Practical Questions

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

var secretCodeWord1 = "lackadaisical"
// Expected output: "l4ck4d41s1c4l"
var secretCodeWord2 = "gobbledygook"
// Expected output: "g0bbl3dyg00k"

const codeWord = (string) => {
    // split string into array of letters
    let letterArr = string.split("")
    let codedArr = []
    // check if letter needs translation (then push), if not push.
    letterArr.map(letter => {
        if(letter === "a"){
            letter = 4
            codedArr.push(letter)
        } else if(letter === "e"){
            letter = 3
            codedArr.push(letter)
        } else if(letter === "i"){
            letter = 1
            codedArr.push(letter)
        } else if(letter === "o"){
            letter = 0
            codedArr.push(letter)
        } else {
            codedArr.push(letter)
        }
    })
    // return arr joined back into string
    return codedArr.join("")
}

console.log(codeWord(secretCodeWord1));
console.log(codeWord(secretCodeWord2), "\n");

// --------------------2) Create a function that takes in an array and returns all the words that contain the letter a.

var arrayOfWords = ["Apple", "Banana", "Plum", "Cherry", "Kiwi", "Peach"]
// Expected output: "Apple" "Banana" "Peach"

const aFilter = (arr) => {
    // filter through and check if the words includes an "A" or "a"
   return arr.filter(word => {
        return word.includes("A") || word.includes("a")
   })
}

console.log(aFilter(arrayOfWords), "\n");

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

var hand1 = [5, 5, 5, 3, 3]
// Expected output: true
var hand2 = [5, 5, 3, 3, 4]
// Expected output: false
var hand3 = [5, 5, 5, 5, 4]
// Expected output: false

const fullHouse = (arr) => {
    // make an empty arr to hold one of each card value
    cardArr = []
    // Push one of each card to arr
    arr.map(num => {
        if(!cardArr.includes(num)){
            cardArr.push(num)
        }
    })
    // If more than two numbers in arr, it fails.
    if(cardArr.length !== 2){
        return false
    } else {
        // If there are only two numbers in the cards and you can only have 5 in a hand, make sure that one of the numbers is a pair.
        if(arr.filter(num => num === cardArr[0]).length == 2){
            return true
        } else if(arr.filter(num => num === cardArr[1]).length == 2){
            return true
        // If there's no pair, then it fails.
        } else {
            return false
        }
    }
}

console.log(fullHouse(hand1));
console.log(fullHouse(hand2));
console.log(fullHouse(hand3));

