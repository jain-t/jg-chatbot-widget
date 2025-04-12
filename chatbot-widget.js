(function () {
    // Inject Fonts and CSS
    // const head = document.head;
    window.botConfig = {
        baseUrl: ".",
        botAvatar: "{{ bot_avatar }}",
        welcomMessage: "{{ welcome_message }}",
        botName: "{{ bot_name }}",
        userAvatar: "{{ user_avatar }}",
    }
  
  


  
    // Load JS dependencies
    const scripts = [
      `${window.botConfig.baseUrl}/static/js/lib/jquery.min.js`,
      `${window.botConfig.baseUrl}/static/js/lib/materialize.min.js`,
      `${window.botConfig.baseUrl}/static/js/lib/uuid.min.js`,
      `${window.botConfig.baseUrl}/static/js/lib/chart.min.js`,
      `${window.botConfig.baseUrl}/static/js/lib/showdown.min.js`,
      `${window.botConfig.baseUrl}/static/js/script.js`, 
      
    ];
  
    function loadScripts(index = 0) {
      if (index >= scripts.length) return;
  
      const script = document.createElement('script');
      script.src = scripts[index];
      script.onload = () => {
        if (typeof window.initBot === 'function') {
          window.initBot(shadow); // pass shadow root so it can bind to elements
        }
        return loadScripts(index + 1);
      };
      document.body.appendChild(script);
      
    }
  
    loadScripts();

    const _container  = document.createElement('div');
    _container.id = 'xxshadow';
    _container.style.position = 'fixed';
    _container.style.bottom = '20px';
    _container.style.right = '20px';
    _container.style.width = '350px'; // same as .widget width
    _container.style.height = '500px';
    _container.style.zIndex = '9999'; // on top of most UI
    _container.style.all = 'initial'; // prevent inherited styles
    _container.id = 'xxshadow';
    const shadow = _container.attachShadow({ mode: 'open' });
    document.body.appendChild(_container);
  
    

    
    
    

  
    // Inject HTML
    const wrapper = document.createElement('div');
    wrapper.innerHTML = `
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway:500&display=swap">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Lato&display=swap">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/font-awesome@4.7.0/css/font-awesome.min.css">
      <link rel="stylesheet" href="${window.botConfig.baseUrl}/static/css/style.css">
      <link rel="stylesheet" href="${window.botConfig.baseUrl}/static/css/materialize.min.css">
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
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

          <!-- Dropdown menu-->
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
              <i class="material-icons"> send </i>
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
  
    shadow.appendChild(wrapper);
    window.ShadowRootObject = shadow;
  })();
  