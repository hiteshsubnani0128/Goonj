var enablePush = document.querySelectorAll('.enable-noti');


function askForNotiPermission(){
    Notification.requestPermission(function(result){
        console.log('user choice',result);
        if(result !=='granted'){
            console.log("No Notification Permission Granted");
        }
        else{
            
        }
    });
}
if('Notification' in window){
    for(var i = 0; i < enablePush.length;i++){
        enablePush[i].style.display = 'inline-block';
        enablePush[i].addEventListener('click',askForNotiPermission);
    }
}