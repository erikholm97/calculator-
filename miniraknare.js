       const calculator = document.querySelector('.calculator')
       const keys = calculator.querySelector('.calculator__keys')
       const display = document.querySelector('.calculator__display')
      
       
    keys.addEventListener('click', e => {
       if (e.target.matches('button')) {
        const key = e.target
        const action = key.dataset.action // Om tangenttrycket inte har någon "data-action" så måste det vara ett nummer. 
        const keyContent = key.textContent // för att spara vilket knapptryck som gjorts
        const displayedNum = display.textContent // Sparar vilket nummer som finns på displayen. 
        const previousKeyType = calculator.dataset.previousKeyType
        
    
        if (!action) {
            if (displayedNum === '0' || previousKeyType === 'operator') {
                display.textContent = keyContent;
               
            } 
            
            else {
                display.textContent = displayedNum + keyContent
            }
        // console.log('number key!')
        if ( 
        
            action === 'add' ||
            action === 'subtract' ||
            action === 'multiply' ||
            action === 'divide'
            ){
              /*  
              Array.from(key.parentNode.children)
                .forEach(k => k.classList.remove('is-depressed'))
                // Add custom attribute
                calculator.dataset.previousKeyType = 'operator'
              */  
            
             
            }
        
        }
        if (action === 'decimal') { // Om action är decimal. 
            display.textContent = displayedNum + '.' // Nummret som visas får ett decimal tecken. 
        }
        if(action === 'clear'){
            console.log("pressed clear");
            display.textContent = 0
        }
        
        if (action === 'decimal') {
         display.textContent = displayedNum + '.'
        }

        if (action === 'clear') {
        console.log('clear key!')
        }

        if (action === 'calculate') {
        console.log('equal key!')
            
         const firstValue = calculator.dataset.firstValue
         console.log(firstValue)
         const operator = calculator.dataset.operator
         const secondValue = displayedNum
         console.log(secondValue)
                
            display.textContent = calculate(firstValue, operator, secondValue);


        }
        const calculate = (n1, operator, n2) => {
            let result = ''
            
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
    
    }
    
})
       
  