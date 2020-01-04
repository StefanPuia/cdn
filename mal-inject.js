$(function () {
    $("img.hover-info.image").each((k, img) => {
        const regex = new RegExp("(https://cdn.myanimelist.net/).+?(images/anime/.+?).webp.+");
        const old = img.src;
        const match = old.match(regex);
        if (match) {
            img.src = old.replace(regex, "$1$2.jpg");
        }
    });
});
