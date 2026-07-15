document.addEventListener("DOMContentLoaded", () => {

    const searchInput = document.querySelector(".search-box input");
    const cards = document.querySelectorAll(".card");
    const container = document.querySelector(".search-box");

    if (!searchInput) return;

    // Search Result Message
    const result = document.createElement("p");
    result.style.marginTop = "15px";
    result.style.fontSize = "16px";
    result.style.fontWeight = "600";
    result.style.color = "#0b6b3a";
    container.appendChild(result);

    function filterProducts() {

        const keyword = searchInput.value.trim().toLowerCase();
        let visible = 0;

        cards.forEach(card => {

            const title =
                (card.querySelector("h3")?.textContent || "") +
                " " +
                (card.querySelector("h4")?.textContent || "");

            const text = (title + " " + card.textContent).toLowerCase();

            if (text.includes(keyword)) {

                card.style.display = "block";
                card.style.opacity = "1";
                card.style.transform = "scale(1)";
                visible++;

            } else {

                card.style.display = "none";

            }

        });

        if (keyword === "") {
            result.textContent = "";
        } else if (visible === 0) {
            result.textContent = "❌ No Products Found";
        } else {
            result.textContent = `✅ ${visible} Product${visible > 1 ? "s" : ""} Found`;
        }

    }

    searchInput.addEventListener("input", filterProducts);

});
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

topBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});