module.exports = function toReadable (number) {
  let a;
    let b;
    let c;
   
      if ((number < 0) || number  > (999)) {return 'вне диапазона';}
      else if (number  > -1 && number  < 10) {
        if (number  === 0) {a = 'zero';}
        else if (number  === 1) {a = 'one';}
        else if (number  === 2) {a = 'two';}
        else if (number  === 3) {a = 'three';}
        else if (number  === 4) {a = 'four';}
        else if (number  === 5) {a = 'five';}
        else if (number  === 6) {a = 'six';}
        else if (number  === 7) {a = 'seven';}
        else if (number  === 8) {a = 'eight';}
        else if (number  === 9) {a = 'nine';}
        return a;
      }
      else if (number  > 9 && number  < 20) {
        if (number  === 10) {a = 'ten';}
        else if (number  === 11) {a = 'eleven';}
        else if (number  === 12) {a = 'twelve';}
        else if (number  === 13) {a = 'thirteen';}
        else if (number  === 14) {a = 'fourteen';}
        else if (number  === 15) {a = 'fifteen';}
        else if (number  === 16) {a = 'sixteen';}
        else if (number  === 17) {a = 'seventeen';}
        else if (number  === 18) {a = 'eighteen';}
        else if (number  === 19) {a = 'nineteen';}
        return a;
      }
     else if (number  > 19 && number  < 100) {
       if (number.toString()[0] == 2) {b= 'twenty';}
       else if (number.toString()[0] == 3) {b= 'thirty';}
       else if (number.toString()[0] == 4) {b= 'forty';}
       else if (number.toString()[0] == 5) {b= 'fifty';}
       else if (number.toString()[0] == 6) {b= 'sixty';}
       else if (number.toString()[0] == 7) {b= 'seventy';}
       else if (number.toString()[0] == 8) {b= 'eighty';}
       else if (number.toString()[0] == 9) {b= 'ninety';}
       if (number.toString()[1] == 0) {a= '';}
       else if (number.toString()[1] == 1) {a= 'one';}
       else if (number.toString()[1] == 2) {a= 'two';}
       else if (number.toString()[1] == 3) {a= 'three';}
       else if (number.toString()[1] == 4) {a= 'four';}
       else if (number.toString()[1] == 5) {a= 'five';}
       else if (number.toString()[1] == 6) {a= 'six';}
       else if (number.toString()[1] == 7) {a= 'seven';}
       else if (number.toString()[1] == 8) {a= 'eight';}
       else if (number.toString()[1] == 9) {a= 'nine';}
       
       
       let f = b+' '+a;
       return f.replace(/\s+/g, ' ').trim();
     } 
     if (number > 99 && number < 1000) {
       if (number.toString()[0] == 1) {c= 'one';}
       else if (number.toString()[0] == 2) {c= 'two';}
       else if (number.toString()[0] == 3) {c= 'three';}
       else if (number.toString()[0] == 4) {c= 'four';}
       else if (number.toString()[0] == 5) {c= 'five';}
       else if (number.toString()[0] == 6) {c= 'six';}
       else if (number.toString()[0] == 7) {c= 'seven';}
       else if (number.toString()[0] == 8) {c= 'eight';}
       else if (number.toString()[0] == 9) {c= 'nine';}
    
      if (number.toString()[1]+number.toString()[2] == 10) {b = 'ten', a = '';}
      else if (number.toString()[1]+number.toString()[2] == 11) {b = 'eleven', a = '';}
    else if (number.toString()[1]+number.toString()[2] == 12) {b = 'twelve', a = '';}
    else if (number.toString()[1]+number.toString()[2] == 13) {b = 'thirteen', a = '';}
    else if (number.toString()[1]+number.toString()[2] == 14) {b = 'fourteen', a = '';}
    else if (number.toString()[1]+number.toString()[2] == 15) {b = 'fifteen', a = '';}
    else if (number.toString()[1]+number.toString()[2] == 16) {b = 'sixteen', a = '';}
    else if (number.toString()[1]+number.toString()[2] == 17) {b = 'seventeen', a = '';}
    else if (number.toString()[1]+number.toString()[2] == 18) {b = 'eighteen', a = '';}
     else if (number.toString()[1]+number.toString()[2] == 19) {b = 'nineteen', a = '';} 
         
       else if (number.toString()[1] == 0) {b='';}
       else if (number.toString()[1] == 2) {b= 'twenty';}
       else if (number.toString()[1] == 3) {b= 'thirty';}
       else if (number.toString()[1] == 4) {b= 'forty';}
       else if (number.toString()[1] == 5) {b= 'fifty';}
       else if (number.toString()[1] == 6) {b= 'sixty';}
       else if (number.toString()[1] == 7) {b= 'seventy';}
       else if (number.toString()[1] == 8) {b= 'eighty';}
       else if (number.toString()[1] == 9) {b= 'ninety';}
       
      if (number.toString()[2] == 0) {a= '';}
       else if (number.toString()[2] == 1 && number.toString()[1] != 1) {a= 'one';}
       else if (number.toString()[2] == 2  && number.toString()[1] != 1) {a= 'two';}
       else if (number.toString()[2] == 3  && number.toString()[1] != 1) {a= 'three';}
       else if (number.toString()[2] == 4  && number.toString()[1] != 1) {a= 'four';}
       else if (number.toString()[2] == 5  && number.toString()[1] != 1) {a= 'five';}
       else if (number.toString()[2] == 6  && number.toString()[1] != 1) {a= 'six';}
       else if (number.toString()[2] == 7  && number.toString()[1] != 1) {a= 'seven';}
       else if (number.toString()[2] == 8  && number.toString()[1] != 1) {a= 'eight';}
       else if (number.toString()[2] == 9  && number.toString()[1] != 1) {a= 'nine';} 
       
       let d = c + ' hundred' + ' ' + b +' '+ a;
   return d.replace(/\s+/g, ' ').trim();
     
}
}
