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

function WordReverse (str){
    return str.split('').reverse().join('')
}

