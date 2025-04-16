
(function () {
  // Configuration
  const botConfig = {
    baseUrl: "{{ server_url }}",
    botId: "{{ bot_id }}",
    domain: "{{ domain }}",
    botAvatar: "{{ bot_avatar }}",
    welcomeMessage: "{{ welcome_message }}",
    botName: "{{ bot_name }}",
    userAvatar: "{{ user_avatar }}"
  };

  window.botConfig = botConfig;  

  // Create container
  const container = document.createElement("div");
  container.style.position = "fixed";
  container.style.bottom = "20px";
  container.style.right = "20px";
  container.style.width = "400px";
  container.style.height = "550px";
  container.style.zIndex = "9999";
  container.style.overflow = "hidden";

  // Create iframe
  const iframe = document.createElement("iframe");
  iframe.style.width = "100%";
  iframe.style.height = "100%";
  iframe.style.border = "none";
  iframe.setAttribute("sandbox", "allow-scripts allow-same-origin allow-forms");
  container.appendChild(iframe);
  document.body.appendChild(container);

  // iframe content
  const srcdoc = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway:500&display=swap">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Lato&display=swap">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/font-awesome@4.7.0/css/font-awesome.min.css">
  <link rel="stylesheet" href="${botConfig.baseUrl}/static/css/style.css">
  <link rel="stylesheet" href="${botConfig.baseUrl}/static/css/materialize.min.css">
  <style>
    .material-icons {
      font-family: 'Material Icons';
      font-style: normal;
      font-weight: normal;
      font-size: 24px;
      line-height: 1;
      display: inline-block;
      -webkit-font-feature-settings: 'liga';
      -webkit-font-smoothing: antialiased;
    }
  </style>
</head>
<body>
  <div class="container chatbot-container">
    <div id="modal1" class="modal">
      <canvas id="modal-chart"></canvas>
    </div>

    <div class="widget">
      <div class="chat_header">
        <span class="chat_header_title">${botConfig.botName}</span>
        <span class="dropdown-trigger" href="#" data-target="dropdown1">
          <i class="material-icons">more_vert</i>
        </span>
        <ul id="dropdown1" class="dropdown-content">
          <li><a href="#" id="clear">Clear</a></li>
          <li><a href="#" id="restart">Restart</a></li>
          <li><a href="#" id="close">Close</a></li>
        </ul>
      </div>

      <div class="chats" id="chats"><div class="clearfix"></div></div>

      <div class="keypad">
        <textarea id="userInput" placeholder="Type a message..." class="usrInput"></textarea>
        <div id="sendButton">
          <i class="material-icons">send</i>
        </div>
      </div>
    </div>

    <div class="profile_div" id="profile_div">
      <img class="imgProfile" src="${botConfig.baseUrl}/static/img/botAvatar.png" />
    </div>

    
  </div>

  <script src="${botConfig.baseUrl}/static/js/lib/jquery.min.js"></script>
  <script src="${botConfig.baseUrl}/static/js/lib/materialize.min.js"></script>
  <script src="${botConfig.baseUrl}/static/js/lib/uuid.min.js"></script>
  <script src="${botConfig.baseUrl}/static/js/lib/chart.min.js"></script>
  <script src="${botConfig.baseUrl}/static/js/lib/showdown.min.js"></script>
  <script src="${botConfig.baseUrl}/static/js/script.js"></script>
</body>
</html>
`;

  // Assign content to iframe
  iframe.srcdoc = srcdoc;
})();

