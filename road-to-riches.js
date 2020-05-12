function __applyListeners() {
    const $table = document.querySelector("div.col-md-11 > div > div > div.card-body > div > table");
    if ($table.dataset["__loaded"] == "true") return;
    $table.dataset["__loaded"] = "true";

    const $tableToggles = $table.querySelectorAll("tbody > tr > td");
    $tableToggles.forEach(tr => tr.addEventListener("click", __toggleBG));

    function __toggleBG(e) {
        const $td = e.currentTarget;
        const $tr = $td.parentNode;
        if ($tr.dataset["__toggle"] == "true") {
            $tr.querySelectorAll("td").forEach(td => td.style.backgroundColor = "unset");
            $tr.querySelectorAll("td").forEach(td => td.style.color = "unset");
        } else {
            $tr.querySelectorAll("td").forEach(td => td.style.backgroundColor = "black");
            $tr.querySelectorAll("td").forEach(td => td.style.color = "white");
        }
        $tr.dataset["__toggle"] = (!$tr.data("__toggle")).toString();
    }
}

setInterval(__applyListeners, 5000);
window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector("#theme-stylesheet").href = "/assets/darkly-a248c0ba83b2ef421891ad2638a9df38.css";
    }, 1000);
});
