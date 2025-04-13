function include(file) {
    const script = document.createElement('script');
    script.src = file;
    script.type = 'text/javascript';
    script.defer = true;

    document.getElementsByTagName('head').item(0).appendChild(script);
}

/* include all the components js file */
const _baseUrl = window.botConfig?.baseUrl || '';
include(`${_baseUrl}/static/js/components/chat.js`);
include(`${_baseUrl}/static/js/constants.js`);
include(`${_baseUrl}/static/js/components/cardsCarousel.js`);
include(`${_baseUrl}/static/js/components/botTyping.js`);
include(`${_baseUrl}/static/js/components/charts.js`);
include(`${_baseUrl}/static/js/components/collapsible.js`);
include(`${_baseUrl}/static/js/components/dropDown.js`);
include(`${_baseUrl}/static/js/components/location.js`);
include(`${_baseUrl}/static/js/components/pdfAttachment.js`);
include(`${_baseUrl}/static/js/components/quickReplies.js`);
include(`${_baseUrl}/static/js/components/suggestionButtons.js`);
