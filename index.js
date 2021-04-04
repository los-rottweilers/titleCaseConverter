function converter(sentence) {
    let capitalized = [];
    let words = sentence.split(" ");


    words.forEach(word => {
        let capitalizedWord = word.split(0,1).toUpperCase() + word.splice(1);
        capitalized.push(capitalizedWord);
    });

    let converted = capitalized.join(" ");

    return converted;
}

module.exports = converter;