       const calculator = document.querySelector('.calculator')
       const keys = calculator.querySelector('.calculator__keys')
       const display = document.querySelector('.calculator__display')
       let operator = null;


       const calculate = (n1, n2) => {
       let result = ''
        console.log(n1)
        console.log(n2)
        console.log(operator)
        if (operator === 'add') {
          result = n1 + n2
        } else if (operator === 'subtract') {
          result = n1 - n2
        } else if (operator === 'multiply') {
          result = n1 * n2
        } else if (operator === 'divide') {
          result = n1 / n2
        }
        
        return result
      }
      const checkDecimal = (decimalNumber) =>{
        
        if(decimalNumber.includes("..")){
          return false;
        }
        else{
          return true;
        }
      }
       
    keys.addEventListener('click', e => {
       if (e.target.matches('button')) {
        const key = e.target
        const action = key.dataset.action // Om tangenttrycket inte har någon "data-action" så måste det vara ett nummer. 
        const keyContent = key.textContent // för att spara vilket knapptryck som gjorts
        const displayedNum = display.textContent // Sparar vilket nummer som finns på displayen. 
        
       
        
    
        if (!action) {
            if (displayedNum === '0') {
                display.textContent = keyContent;
               
            } 
            
            else {
                display.textContent = displayedNum + keyContent
            }
        }
        if (action === 'decimal') { // Om action är decimal. 
            display.textContent = displayedNum + '.' // Nummret som visas får ett decimal tecken.
            bool = checkDecimal(display.textContent)
            console.log(bool)
        }
        if(action === 'clear'){
            console.log("pressed clear");
            display.textContent = 0
        }
        
        if (action === 'add') {
          display.textContent = displayedNum + '+'
          operator = 'add';

        }
        if(action === 'subtract'){
          display.textContent = displayedNum + '-'
          operator = 'subtract';
        }
        if(action === 'multiply'){
          display.textContent = displayedNum + '*'
          operator = 'multiply';
          
        }
        if(action === 'divide'){
          display.textContent = displayedNum + '/'
          operator = 'divide';
          
        }


        if (action === 'clear') {
        console.log('clear key!')
        }

        if (action === 'calculate') {
        console.log('equal key!')
        const values = displayedNum.match(/[+-]?\d+(\.\d+)?/g).map(n => parseFloat(n));
        console.log(values)
        display.textContent = calculate(values[0], values[1]);
        console.log(display.textContent)
        
      
        }
        
    
    }
    
})
       
  