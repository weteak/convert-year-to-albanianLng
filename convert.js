const numbers = {
    0: 'zero', 1: 'një', 2: 'dy', 3: 'tre', 4: 'katër',
    5: 'pesë', 6: 'gjashtë', 7: 'shtatë', 8: 'tetë', 9: 'nëntë',
    10: 'dhjetë', 11: 'njëmbëdhjetë', 12: 'dymbëdhjetë', 13: 'trembëdhjetë',
    14: 'katërmbëdhjetë', 15: 'pesëmbëdhjetë', 16: 'gjashtëmbëdhjetë',
    17: 'shtatëmbëdhjetë', 18: 'tetëmbëdhjetë', 19: 'nëntëmbëdhjetë',
    20: 'njëzetë', 30: 'tridhjetë', 40: 'dyzetë', 50: 'pesëdhjetë',
    60: 'gjashtëdhjetë', 70: 'shtatëdhjetë', 80: 'tetëdhjetë', 90: 'nëntëdhjetë',
    };
  
  const units = ['', 'mijë', 'milionë', 'miliardë','trilion'];
  
  function convertNumberToWords(number) {
    if (isNaN(number) || number < 0 || number >= 1000000000000000) {
      return 'Numri është jashtë limitit të lejuar (0-1000000000000000)';
    }
  
    if (number < 20) {
      return numbers[number];
    } else if (number < 100) {
      const tens = Math.floor(number / 10) * 10;
      const ones = number % 10;
      return ones === 0 ? numbers[tens]  : `${numbers[tens]} e ${numbers[ones]}`;
    } else if (number < 1000) {
      const hundreds = Math.floor(number / 100);
      const remainder = number % 100;
      if (remainder === 0) {
        return `${numbers[hundreds]}qind `;
      } else {
        return `${numbers[hundreds]}qind e ${convertNumberToWords(remainder)}`;
      }
    } else {
      const numberString = String(number);
      const groups = [];
  
      for (let i = numberString.length; i > 0; i -= 3) {
        const group = numberString.slice(Math.max(0, i - 3), i);
        groups.unshift(group);
      }
  
      const words = [];
  
      for (let i = 0; i < groups.length; i++) {
        const groupNumber = parseInt(groups[i]);
        if (groupNumber !== 0) {
          const unit = units[groups.length - i - 1];
          words.push(` ${convertNumberToWords(groupNumber)} ${unit} `);
        }
      }
  
      return words.join(' e ');
    }
  }
  
 
  