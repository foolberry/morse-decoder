const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let result="";    
    let arrExpr = expr.match(/.{10}/g); //Split expression to symbols
        //Create array of Morse code
        let arrCode = arrExpr.map(function(value) {        
            if (value == '**********')  return ' ';
            else {       
                let intArr = value.match(/.{2}/g);
                return intArr.reduce(function (prev, current) { 
                    if (current == '10') return prev + '.';
                    else if (current == '11') return prev + '-';
                    else return prev;          
                },"");    
                }          
        })
        //Use Morse table to find symbol code
        arrCode.forEach(item => {
          if (item == " ") result += item;
          else {
            result += MORSE_TABLE[item];
          }
      })
  
    return result; 
}

module.exports = {
    decode
}