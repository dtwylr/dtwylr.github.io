window.addEventListener('DOMContentLoaded', () => {
    const loadInclude = (id, url) => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Failed to load ${url}: ${response.statusText}`);
                }
                return response.text();
            })
            .then(html => {
                const container = document.getElementById(id);
                if (container) {
                    container.innerHTML = html;
                }
            })
            .catch(err => {
                console.error(err);
            });
    };

    loadInclude('site-header', 'header.html');
    loadInclude('site-footer', 'footer.html');
});
