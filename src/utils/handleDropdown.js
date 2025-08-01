function handleDropdown(e) {
    const panel = e.target.nextElementSibling;
    panel.style.display = panel.style.display === "none" ? "block" : "none";
}

export default handleDropdown;
