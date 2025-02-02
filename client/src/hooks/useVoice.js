export const useVoice = (setInput) => {
    if (
        !("SpeechRecognition" in window || "webkitSpeechRecognition" in window)
    ) {
        // change alert to a different text from here ( older vesrion of safari seems to not be working from my
        // testing)
        alert("Speech Recognition is not supported.");
        return;
    }

    const SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.lang = "en-US";
    recognition.interimResults = true; // Live looks much better !
    recognition.maxAlternatives = 1;

    recognition.start();

    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setInput((prevInput) => prevInput + transcript);
    };

    recognition.onerror = (event) => {
        console.error("Speech Recognition Error:", event.error);
    };
};
