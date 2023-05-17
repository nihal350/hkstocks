function sendMsg(){
    var message = document.getElementById('msg').value;
    window.open("https://api.whatsapp.com/send?phone=+919497830078&text="+message);
  }
