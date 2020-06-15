$.get("templates/new-message.html", function (content){
  console.log(content);
});

//eventListner
$("#send-btn").click(function (event) {
    const $message = $("#message");
  
    // Do the thing!
    const msgValue = $message.val();

    if (msgValue === '') {
      //Notifier l'utilisateur

     $message.addClass("is-invalid"); 


    } else {
      //Créer le nouveau message
    
      const template = $("#new-message-template").html();
      const $template = $(template);
      $("div.msg-content", $template).text(msgValue);
      // $("small.text-info", $template).text(getCurrentTime())
      $("#dialog > .row").append($template);
      $message.val('');
      // console.log($template);
      // const template = $("#new-message-template").html();
      // const $template = $(template);
      // console.log($template);
    }
    event.preventDefault();
  });

