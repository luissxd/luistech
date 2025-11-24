function loadFragment(url, targetId) {
    fetch(url)
        .then(response => response.text())
        .then(html => {
            const target = document.getElementById(targetId);
            if (target) {
                target.innerHTML = html;
            }
        })
        .catch(err => console.error("Error cargando fragmento:", url, err));
}

document.addEventListener("DOMContentLoaded", function () {
    loadFragment("partials/footer.html", "site-footer");
});
