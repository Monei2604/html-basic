var button1 = document.getElementById('button1')
var heading1 = document.getElementById('heading1')

var count =0
button1.addEventListener('click', function(){
    count+=1
    if(count % 2 === 0){
        heading1.innerHTML = 'mon'
    }else{
        heading1.innerHTML = 'mon ko ga'
    }
})