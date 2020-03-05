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
    let strOut = [];
    for (let i = 0; i < expr.length / 10; i++) {
        let strInput = expr.substr(i * 10, 10);
        if (strInput === '**********') {
            strOut.push(' ');
            continue;
        }
        let mrsCode = '';
        for (let j = 0; j < 5; j++) {
            switch (strInput.substr(j * 2, 2)) {
                case '10': mrsCode += '.'; break;
                case '11': mrsCode += '-'; break;
                case '00': mrsCode += '';  break;
            }
        }
        strOut.push(MORSE_TABLE[mrsCode]);
    }
    return strOut.join('');;
}

module.exports = {
    decode
}