for(const img of document.querySelectorAll("img.hover-info.image")) {
    const regex = new RegExp("(https://cdn.myanimelist.net/).+?(images/anime/.+?).webp.+");
    const old = img.src;
    const match = old.match(regex);
    if (match) {
        img.src = old.replace(regex, "$1$2.jpg");
    }
}
