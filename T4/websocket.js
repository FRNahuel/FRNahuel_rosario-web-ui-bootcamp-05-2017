let url = 'ws://echo.websocket.org';
init = () => {
  let socket = document.getElementsByClassName('button')[4];
  socket.addEventListener('click',websocket,false);
}

websocket = () => {
  websocket = new WebSocket(url);
  websocket.onopen = function(evt) { onOpen(evt) };
  websocket.onclose = function(evt) { onClose(evt) };
  websocket.onmessage = function(evt) { onMessage(evt) };
  websocket.onerror = function(evt) { onError(evt) };
}



function onOpen(evt)
  {
    let value = document.getElementById('value').value;
    writeToScreen("CONNECTED");
    doSend(value);
  }

  function onClose(evt)
  {
    writeToScreen("DISCONNECTED");
  }

  function onMessage(evt)
  {
    writeToScreen('<span class="message"">MESSAGE: ' + evt.data+'</span>');
    websocket.close();
  }

  function onError(evt)
  {
    writeToScreen('<span class="error">ERROR:</span> ' + evt.data);
  }

  function doSend(message)
  {
    writeToScreen("SENT: " + message);
    websocket.send(message);
  }

  function writeToScreen(message)
{
    box.innerHTML+='<div>'+message+'</div>';
}



window.addEventListener('load',init,false);
