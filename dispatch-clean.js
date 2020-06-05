(() => {
    setInterval(hideNonPC, 500);
    function hideNonPC() {
        const rows = document.querySelectorAll("table#rescueTable tbody#rescueRows tr");
        if (rows) {
            for (const row of rows) {
                const platform = row.querySelector("td.rescue-row-platform");
                if (platform) {
                    if (!platform.classList.contains("platform-PC")) {
                        platform.style.opacity = 0.3;
                    }
                }
            }
        }
    }
})()
