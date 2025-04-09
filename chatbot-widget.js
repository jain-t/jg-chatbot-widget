(function () {
    // Inject Fonts and CSS
    const head = document.head;
    window.botConfig = {
        baseUrl: "{{ base_url }}",
        botAvatar: "{{ bot_avatar }}",
        welcomMessage: "{{ welcome_message }}",
        botName: "{{ bot_name }}",
        userAvatar: "{{ user_avatar }}",
    }
  
    const stylesheets = [
      'https://fonts.googleapis.com/icon?family=Material+Icons',
      'https://fonts.googleapis.com/css2?family=Open+Sans&display=swap',
      'https://fonts.googleapis.com/css?family=Raleway:500&display=swap',
      'https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap',
      'https://fonts.googleapis.com/css2?family=Lato&display=swap',
      'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css',
      'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css',
      `${window.botConfig.baseUrl}/static/css/style.css` // dynamically use baseUrl
    ];
  
    stylesheets.forEach(href => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      head.appendChild(link);
    });
  
    // Load JS dependencies
    const scripts = [
      'https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js',
      `${window.botConfig.baseUrl}/static/js/lib/uuid.min.js`,
      `${window.botConfig.baseUrl}/static/js/lib/chart.min.js`,
      `${window.botConfig.baseUrl}/static/js/lib/showdown.min.js`,
      `${window.botConfig.baseUrl}/static/js/script.js`, 
    ];
  
    function loadScripts(index = 0) {
      if (index >= scripts.length) return;
  
      const script = document.createElement('script');
      script.src = scripts[index];
      script.onload = () => loadScripts(index + 1);
      head.appendChild(script);
    }
  
    loadScripts();
  
    // Inject HTML
    const container = document.createElement('div');
    container.innerHTML = `
      <div class="container chatbot-container">
        <div id="modal1" class="modal">
          <canvas id="modal-chart"></canvas>
        </div>
  
        <div class="widget">
          <div class="chat_header">
            <span class="chat_header_title">${window.botConfig.botName}</span>
            <span class="dropdown-trigger" href="#" data-target="dropdown1">
              <i class="material-icons"> more_vert </i>
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
              <i class="fa fa-paper-plane" aria-hidden="true"></i>
            </div>
          </div>
        </div>
  
        <div class="profile_div" id="profile_div">
          <img class="imgProfile" src="${window.botConfig.baseUrl}/static/img/botAvatar.png" />
        </div>
  
        <div class="tap-target" data-target="profile_div">
          <div class="tap-target-content">
            <h5 class="white-text">Hey there 👋</h5>
            <p class="white-text">
              I can help you get started with Rasa and answer your technical questions.
            </p>
          </div>
        </div>
      </div>
    `;
  
    document.body.appendChild(container);
  })();
  