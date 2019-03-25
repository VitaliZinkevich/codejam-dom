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


function ChangeLetters (str) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let toUpper = 'aeiou'.split('');
    
    let newStrArr=[]

    let strArr = str.split('')

    strArr.forEach((e)=>{

        if (alphabet.indexOf(e) !== -1) {
            let currIndex= alphabet.indexOf(e)
            e = alphabet[currIndex+1] || 'a'

            if (toUpper.indexOf(e) !== -1) {
                e = e.toUpperCase()
            }
            newStrArr.push(e)
        } else {
            newStrArr.push(e)
        }


    })

    return newStrArr.join('')

}