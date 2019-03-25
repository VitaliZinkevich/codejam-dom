function FindLongestString (sen){

    let arr = sen.split(' ')
    
    let longestWord = ""
    arr.forEach((e)=>{
     if (longestWord.length >= e.length) {

     } else {
         longestWord = e
     }

    })
    return longestWord
}

console.log(FindLongestString("my favorite juice is grapefruit"))
console.log(FindLongestString("They often help us"))