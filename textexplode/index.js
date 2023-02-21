const enhance = id => {
    const element = document.getElementById(id);
    let imp = "@PRATHAM._."
    text = imp.split("");

    element.innertText = "";

    text.forEach(letter => {
        const span = document.createElement("span");

        span.className = "letter";

        span.innerText = letter;

        element.append(span)

    });
}

enhance("channel-link");
document.getElementById('hideit').hidden = true;