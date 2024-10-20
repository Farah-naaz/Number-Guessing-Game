// ========= variable part start ========== //
let heading             = document.querySelector('.heading')
let PlayerName          = document.querySelector('.PlayerName')
let error               = document.querySelector('.error')
let main_turn           = document.querySelector('.main_turn')
let main_turn3          = document.querySelector('.main_turn3')
let main_turn4          = document.querySelector('.main_turn4')
let r                   = 0
let s                   = 0
let t                   = 0
main_turn.innerHTML     = r
main_turn3.innerHTML    = s
main_turn4.innerHTML    = t
// ========= winner part start ==============//
let winner              = document.querySelector('.winner')
let winner_name         = document.querySelector('.winner_name')
// ========= player_one doms ==============//
let player_one          = document.querySelector('.player_one')
let player_one_input    = document.querySelector('.player_one_input')
let player_one_button   = document.querySelector('.player_one_button')
// ========= player_two doms ==============//
let player_two          = document.querySelector('.player_two')
let player_two_input    = document.querySelector('.player_two_input')
let player_two_button   = document.querySelector('.player_two_button')
// ========= player_three doms ==============//
let player_three        = document.querySelector('.player_three')
let player_three_input  = document.querySelector('.player_three_input')
let player_three_button = document.querySelector('.player_three_button')
// ========= player_four doms ==============//
let player_four         = document.querySelector('.player_four')
let player_four_input   = document.querySelector('.player_four_input')
let player_four_button  = document.querySelector('.player_four_button')
// ========= variable part end ========== //

// ========= player_one part start ========== //
player_one_button.addEventListener('click' , ()=>{
if(player_one_input.value == ''){
    error.innerHTML       = 'Please Insert a Number'
}else{
    error.innerHTML           = ''
   if(player_one_input.value < 1 || player_one_input.value > 10){
    error.innerHTML       = 'Please Select a Number Within 1 to 10'
   }else{
    PlayerName.innerHTML  = 'Player : 2'
    error.innerHTML       = ''
    PlayerName.style      = 'color:green;'
    player_one.style      = 'display:none'
    player_two.style      = 'display:block'
   }
}    
})
// ========= player_one part end ========== //

// ========= player_two part start ========== //
player_two_button.addEventListener('click' , ()=>{
    if(player_two_input.value     == ''){
        error.innerHTML           = 'Please Insert a Number'  
    }else{
        error.innerHTML           = ''
        if (player_two_input.value < 1 || player_two_input.value > 10){
            error.innerHTML       = 'Please Select a Number Within 1 to 10'
        }else{
        if(player_one_input.value == player_two_input.value){
            PlayerName.innerHTML  = 'Congratulations!!!'
            player_two.style      = 'display:none'
            winner.style          = 'display:block'
            winner_name.innerHTML = 'Player 2 Wins'
        }else{
          s++
          main_turn.innerHTML     = s

          if(s == 5){
            PlayerName.innerHTML  = 'Player : 3'
            error.innerHTML       = ''
            PlayerName.style      = 'color:yellow;'
            player_two.style      = 'display:none'
            player_three.style    = 'display:block'   
        }
         }
        }
        } 
    }
)
// ========= player_two part end ========== //

// ========= player_three part start ========== //
player_three_button.addEventListener('click' , ()=>{
    if(player_two_input.value     == ''){
        error.innerHTML           = 'Please Insert a Number'  
    }else{
        error.innerHTML           = ''
        if (player_three_input.value < 1 || player_three_input.value > 10){
            error.innerHTML       = 'Please Select a Number Within 1 to 10'
        }else{
        if(player_one_input.value == player_three_input.value){
            PlayerName.innerHTML  = 'Congratulations!!!'
            player_three.style    = 'display:none'
            winner.style          = 'display:block'
            winner_name.innerHTML = 'Player 3 Wins'
        }else{
          r++
          main_turn3.innerHTML     = r

          if(r == 5){
            PlayerName.innerHTML  = 'Player : 4'
            error.innerHTML       = ''
            PlayerName.style      = 'color:purple;'
            player_three.style    = 'display:none'
            player_four.style     = 'display:block'
        }
         }
        }
        } 
    }
)
// ========= player_three part end ========== //

// ========= player_four part start ========== //
player_four_button.addEventListener('click' , ()=>{
    if(player_four_input.value    == ''){
        error.innerHTML           = 'Please Insert a Number'  
    }else{
        error.innerHTML           = ''
        if (player_four_input.value < 1 || player_four_input.value > 10){
            error.innerHTML       = 'Please Select a Number Within 1 to 10'
        }else{
        if(player_one_input.value == player_four_input.value){
            PlayerName.innerHTML  = 'Congratulations!!!'
            player_four.style     = 'display:none'
            winner.style          = 'display:block'
            winner_name.innerHTML = 'Player 4 Wins'
        }else{
          t++
          main_turn4.innerHTML     = t

          if(t == 5){
            PlayerName.innerHTML  = 'Congratulations!!!'
            player_four.style     = 'display:none'
            winner.style          = 'display:block'
            winner_name.innerHTML = 'Player 1 Wins'  
        }
         }
        }
        } 
    }
)
// ========= player_four part end ========== //