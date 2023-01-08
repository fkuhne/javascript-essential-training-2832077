/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
 */

const addTextToDOM = function(newText) {

    const newParagraph = document.createElement("p");
    newParagraph.innerHTML = newText;

    const main = document.querySelector("main");
    main.append(newParagraph);
}

addTextToDOM("bla bla bla")

addTextToDOM("jsahdklsjhdflkjh")
