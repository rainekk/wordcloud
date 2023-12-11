/*  Function updates the wordcloud based on parameter "button".
    If the parameter value is
        - "add", a word is added to the wordcloud, and
        - "clear", the wordcloud is cleared.
    Otherwise, meaning when no argument is given,
        - the wordload is set up with default words.

    Contents of the wordcloud is based on list "words" that is
    updated as needed. It is stored in sessionStorage,
    meaning it stays only the duration of the session and is
    resetted between them (for example, when the page is reloaded
    or the browser is closed).

    The wordcloud is drawn using wordcloud2 library.
*/
function updateCloud(button) {
    const defaultWords =
        [["HTML", 30], ["CSS", 20], ["JavaScript", 50]];
    let words = [];

    // Updating the wordcloud in if-else if-else structure
    if (button == "add") {
        newWord = [document.getElementById("word").value,
            document.getElementById("weight").value];
        words = sessionStorage.getItem("words");
        if (words == null) {
            words = [newWord];
        } else {
            words = JSON.parse(words);
            words.push(newWord);
        }
        sessionStorage.setItem("words", JSON.stringify(words));
    } else if (button == "clear") {
        words = [];
        sessionStorage.removeItem("words");
    } else {
        words = defaultWords;
        sessionStorage.setItem("words", JSON.stringify(words));
    }

    // Drawing the wordcloud using the wordcloud2 librray
    WordCloud(document.getElementById("canvas"),
        { list: words } );
}