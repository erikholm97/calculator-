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
          else{

          if(displayedNum.slice(-1) != parseInt(displayedNum.slice(-1))){ 
             return
          }
        
          if(displayedNum.match(/[+-]?\d+(\.\d+)?/g).length === 2){
            return
          }
        }
          
        if (action === 'decimal') { // Om action är decimal. 
             // Nummret som visas får ett decimal tecken.
            if (action === 'decimal') { // Om action är decimal. 
             
              if(displayedNum.match(/[+-]?\d+(\.\d+)?/g).pop().indexOf('.') != -1) { return } 
              
              display.textContent = displayedNum + '.' // Nummret som visas får ett decimal tecken. 
          }
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

        if (action === 'calculate' || action != 'clear') {
        console.log('equal key!')
        const values = displayedNum.match(/[+-]?\d+(\.\d+)?/g).map(n => parseFloat(n));
        if(values.length < 2) return
        display.textContent = calculate(values[0], values[1]);
        console.log(display.textContent)
        
      
        }
        
    
      }
    
})
       
  