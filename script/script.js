window.onload = function(){

    const login_btn = document.querySelector('#login_btn')
    const icon = document.querySelectorAll('.icon')
    const id_pw_input = document.querySelectorAll('input[name^=user]')
    const error = document.querySelectorAll('.error')
    const pw_show_hide = document.querySelector('.pw_show_hide')
    let click = false
    console.log(login_btn,id_pw_input,error,pw_show_hide)
    

    login_btn.addEventListener('click',function(){
        id_pw_input.forEach(function(target,index){
            if(target.value ==''){
                error[index].style.display = 'block'
                target.style.borderBottom = '2px solid #e52528'
                icon[index].style.borderBottom = '2px solid #e52528'
            }else{
                error[index].style.display = 'none'
                target.style.borderBottom = '1px solid #ccc'
                icon[index].style.borderBottom = '1px solid #ccc'
            }
        })
    })


    pw_show_hide.addEventListener('click',function(){
        if(click==false){
            this.style.backgroundPosition = '-127px 0'
            id_pw_input[1].type = 'text'
            click = true
        }else{
            this.style.backgroundPosition = '-106px 0'
            id_pw_input[1].type = 'password'
            click = false
        }
    })
}