const ElementId = 'web-speech-api-for-subtitle';

chrome.runtime.onMessage.addListener(function(msg) {
    window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
    var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    if (msg.isStopClicked) {
        recognition.stop();
        return;
    }

    recognition.lang = msg.language;
    recognition.continuous = true;
    recognition.interimResults = true;
    if (!document.getElementById(ElementId)) {
        $('body').prepend(`<div class="txt" id="${ElementId}"></div>`);
    }

    recognition.start();

    recognition.onresult = function(event){
        var results = event.results;
        let transcript = '';
        for (let i = event.resultIndex; i<results.length; i++) {
            transcript += results[i][0].transcript;
        }

        document.getElementById(ElementId).innerHTML = transcript;
    }
  });