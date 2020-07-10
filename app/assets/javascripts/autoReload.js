$(function(){
  function buildHTML(message){
    if ( message.image ) {
      let html =
        `<div class="ChatMain__MessageField__MessageBox" data-message-id=${message.id}>
          <div class="ChatMain__MessageField__MessageBox__MessageInfo">
            <div class="ChatMain__MessageField__MessageBox__MessageInfo__Name">
              ${message.user_name}
            </div>
            <div class="chatMain__MessageField__MessageBox__MessageInfo__Date">
              ${message.created_at}
            </div>
          </div>
          <div class="ChatMain__MessageField__MessageBox__Message">
            <p class="Message__content">
              ${message.content}
            </p>
            <img class="Message__image" src="${message.image}">
          </div>
        </div>`
      return html;
    } else {
      let html =
      `<div class="ChatMain__MessageField__MessageBox" data-message-id=${message.id}>
        <div class="ChatMain__MessageField__MessageBox__MessageInfo">
          <div class="ChatMain__MessageField__MessageBox__MessageInfo__Name">
            ${message.user_name}
          </div>
          <div class="chatMain__MessageField__MessageBox__MessageInfo__Date">
            ${message.created_at}
          </div>
        </div>
        <div class="ChatMain__MessageField__MessageBox__Message">
          <p class="Message__content">
            ${message.content}
          </p>
        </div>
      </div>`
      return html;
    };
  }

  let reloadMessages = function() {
    let last_message_id = $('.ChatMain__MessageField__MessageBox:last').data("message-id");
    $.ajax({
      url: "api/messages",
      type: 'get',
      dataType: 'json',
      data: {id: last_message_id}
    })
    .done(function(messages) {
      if (messages.length !== 0) {
        let insertHTML = '';
        $.each(messages, function(i, message) {
          insertHTML += buildHTML(message)
        });
        $('.ChatMain__MessageField').append(insertHTML);
        $('.ChatMain__MessageField').animate({ scrollTop: $('.ChatMain__MessageField')[0].scrollHeight});
      }
    })
    .fail(function() {
      alert('error');
    });
  };
  setInterval(reloadMessages, 7000);
});