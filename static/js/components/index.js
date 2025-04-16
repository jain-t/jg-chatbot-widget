function include(file) {
    const script = document.createElement('script');
    script.src = file;
    script.type = 'text/javascript';
    script.defer = true;

    document.getElementsByTagName('head').item(0).appendChild(script);
}

/* include all the components js file */

const staticURL = window.botConfig["staticURL"];

include(`${staticURL}static/js/components/chat.js`);
include(`${staticURL}static/js/constants.js`);
include(`${staticURL}static/js/components/cardsCarousel.js`);
include(`${staticURL}static/js/components/botTyping.js`);
include(`${staticURL}static/js/components/charts.js`);
include(`${staticURL}static/js/components/collapsible.js`);
include(`${staticURL}static/js/components/dropDown.js`);
include(`${staticURL}static/js/components/location.js`);
include(`${staticURL}static/js/components/pdfAttachment.js`);
include(`${staticURL}static/js/components/quickReplies.js`);
include(`${staticURL}static/js/components/suggestionButtons.js`);
