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
  
    const stylesheets = [
      'https://fonts.googleapis.com/icon?family=Material+Icons',
      'https://fonts.googleapis.com/css2?family=Open+Sans&display=swap',
      'https://fonts.googleapis.com/css?family=Raleway:500&display=swap',
      'https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap',
      'https://fonts.googleapis.com/css2?family=Lato&display=swap',
      `https://cdn.jsdelivr.net/npm/font-awesome@4.7.0/css/font-awesome.min.css`,
      `${window.botConfig.baseUrl}/static/css/materialize.min.css`,
      `${window.botConfig.baseUrl}/static/css/style.css` // dynamically use baseUrl
    ];

  


  
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
    const shadow = _container.attachShadow({ mode: 'open' });
    document.body.appendChild(_container);
  
    const style = document.createElement('style');
    style.textContent = stylesheets.map(href => `@import url('${href}');`).join('\n');
  
    shadow.appendChild(style);

    const faStyle = document.createElement("style");
    faStyle.textContent = `
    @font-face {
      font-family: 'FontAwesome';
      src: url('https://cdn.jsdelivr.net/npm/font-awesome@4.7.0/fonts/fontawesome-webfont.woff2?v=4.7.0') format('woff2'),
           url('https://cdn.jsdelivr.net/npm/font-awesome@4.7.0/fonts/fontawesome-webfont.woff?v=4.7.0') format('woff');
      font-weight: normal;
      font-style: normal;
    }
    
    .fa {
      font-family: 'FontAwesome' !important;
      font-style: normal;
      font-weight: normal;
      text-rendering: auto;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    
    .fa-search-minus:before {
      content: "\\f010";
    }
    `;
    shadow.appendChild(faStyle);
    
    

  
    // Inject HTML
    const wrapper = document.createElement('div');
    wrapper.innerHTML = `
      <div class="container chatbot-container">
        <div id="modal1" class="modal">
          <canvas id="modal-chart"></canvas>
        </div>
  
        <div class="widget">
          <div class="chat_header">
            <span class="chat_header_title">${window.botConfig.botName}</span>
          </div>
  
          <div class="chats" id="chats"><div class="clearfix"></div></div>
  
          <div class="keypad">
            <textarea id="userInput" placeholder="Type a message..." class="usrInput"></textarea>
            <div id="sendButton">
              <i class="fa fa-search-minus" aria-hidden="true"></i>
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
  