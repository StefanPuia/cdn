function __applyListeners() {
    const $tableToggles = $("div.col-md-11 > div > div > div.card-body > div > table > tbody > tr > td");
    $tableToggles.off("click", __toggleBG);
    $tableToggles.on("click", __toggleBG);

    function __toggleBG(e) {
        const $td = $(e.currentTarget);
        const $tr = $td.parent();
        if ($tr.data("__toggle") == true) {
            $tr.find("td").css("background-color", "unset");
            $tr.find("td").css("color", "unset");
        } else {
            $tr.find("td").css("background-color", "black");
            $tr.find("td").css("color", "white");
        }
        $tr.data("__toggle", !$tr.data("__toggle"))
    }
}

setInterval(__applyListeners, 5000);
