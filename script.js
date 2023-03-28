(function(){
  
    let screen = document. querySelector('.screen');
    let buttons = document. querySelectorAll('.btn');
    let clear = document. querySelector('.btn-clear');
    let equal = document. querySelector('.btn-equal');

    // knows when a button is cliked,
    // get the values, push it onto the screen
    buttons.forEach(function(button) {
      button.addEventListener('click', function(e){
        let value = e.target.dataset.num;
        screen.value += value;
      })
    });
    
    // gets the equals button    
    equal.addEventListener('click', function(e) {
      if(screen.value === '') {
        screen.value = "";
      }else {
        let answer = eval(screen.value);
        screen.value = answer;
      }
    })

    // gets the clear button
    clear.addEventListener('click', function(e) {
      screen.value = "";      
    })

})();