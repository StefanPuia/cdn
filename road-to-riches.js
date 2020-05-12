function __applyListeners() {
    const $tableToggles = document.querySelectorAll("div.col-md-11 > div > div > div.card-body > div > table > tbody > tr > td");
    $tableToggles.removeEventListener("click", __toggleBG);
    $tableToggles.addEventListener("click", __toggleBG);

    function __toggleBG(e) {
        const $td = e.currentTarget;
        const $tr = $td.parentNode;
        if ($tr.dataset["__toggle"] == "true") {
            Array.from($tr.querySelectorAll("td")).map(td => td.style.backgroundColor = "unset");
            Array.from($tr.querySelectorAll("td")).map(td => td.style.color = "unset");
        } else {
            Array.from($tr.querySelectorAll("td")).map(td => td.style.backgroundColor = "black");
            Array.from($tr.querySelectorAll("td")).map(td => td.style.color = "white");
        }
        $tr.dataset["__toggle"] = (!$tr.data("__toggle")).toString();
    }
}

setInterval(__applyListeners, 5000);
