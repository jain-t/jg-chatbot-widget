(function () {
  // Set config
  window.botConfig = {
    baseUrl: ".", // Replace with your actual base URL
    botAvatar: "bot.png",
    welcomeMessage: "Hi there! 👋",
    botName: "MyBot",
    userAvatar: "user.png",
  };

  // Create container
  const container = document.createElement("div");
  container.style.position = "fixed";
  container.style.bottom = "20px";
  container.style.right = "20px";
  container.style.width = "350px";
  container.style.height = "500px";
  container.style.zIndex = "9999";
  container.style.overflow = "hidden";

  // Create iframe
  const iframe = document.createElement("iframe");
  iframe.style.width = "100%";
  iframe.style.height = "100%";
  iframe.style.border = "none";
  iframe.setAttribute("sandbox", "allow-scripts allow-same-origin allow-forms");

  // Attach iframe to container
  container.appendChild(iframe);
  document.body.appendChild(container);

  // Construct HTML with srcdoc (this ensures everything gets injected properly)
  iframe.srcdoc = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Chatbot</title>

  <!-- Styles -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
  <link rel="stylesheet" href="${window.botConfig.baseUrl}/static/css/materialize.min.css">
  <link rel="stylesheet" href="${window.botConfig.baseUrl}/static/css/style.css">

  <style>
    body {
      margin: 0;
      font-family: 'Open Sans', sans-serif;
    }
    .material-icons {
      font-family: 'Material Icons';
      font-style: normal;
      font-weight: normal;
      font-size: 24px;
      display: inline-block;
      line-height: 1;
      -webkit-font-smoothing: antialiased;
      -webkit-font-feature-settings: 'liga';
    }
  </style>
</head>
<body>
  <div class="container chatbot-container">
    <div class="widget">
      <div class="chat_header">
        <span class="chat_header_title">${window.botConfig.botName}</span>
        <span class="dropdown-trigger" data-target="dropdown1">
          <i class="material-icons">more_vert</i>
        </span>
        <ul id="dropdown1" class="dropdown-content">
          <li><a href="#" id="clear">Clear</a></li>
          <li><a href="#" id="restart">Restart</a></li>
          <li><a href="#" id="close">Close</a></li>
        </ul>
      </div>
      <div class="chats" id="chats"></div>
      <div class="keypad">
        <textarea id="userInput" placeholder="Type a message..." class="usrInput"></textarea>
        <div id="sendButton">
          <i class="material-icons">send</i>
        </div>
      </div>
    </div>
  </div>

  <script>
    window.botConfig = ${JSON.stringify(window.botConfig)};
  </script>
  <script src="${window.botConfig.baseUrl}/static/js/lib/jquery.min.js"></script>
  <script src="${window.botConfig.baseUrl}/static/js/lib/materialize.min.js"></script>
  <script src="${window.botConfig.baseUrl}/static/js/lib/uuid.min.js"></script>
  <script src="${window.botConfig.baseUrl}/static/js/lib/chart.min.js"></script>
  <script src="${window.botConfig.baseUrl}/static/js/lib/showdown.min.js"></script>
  <script src="${window.botConfig.baseUrl}/static/js/script.js"></script>
</body>
</html>
`;
})();
