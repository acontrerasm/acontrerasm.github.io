const paperArticles = document.querySelectorAll(".paper");

paperArticles.forEach((paper, index) => {
  const label = paper.querySelector(".abstract-label");
  const abstract = paper.querySelector(".abstract");

  if (!label || !abstract) {
    return;
  }

  const toggleId = `abstract-toggle-${index + 1}`;
  const panelId = `abstract-panel-${index + 1}`;

  const toggle = document.createElement("button");
  toggle.type = "button";
  toggle.id = toggleId;
  toggle.className = "abstract-toggle";
  toggle.setAttribute("aria-expanded", "false");
  toggle.setAttribute("aria-controls", panelId);
  toggle.textContent = label.textContent.trim();

  const panel = document.createElement("div");
  panel.className = "abstract-panel";
  panel.id = panelId;
  panel.setAttribute("aria-hidden", "true");
  panel.setAttribute("aria-labelledby", toggleId);

  const panelInner = document.createElement("div");
  panelInner.className = "abstract-panel-inner";
  panel.append(panelInner);
  panelInner.append(abstract);

  label.replaceWith(toggle);
  toggle.insertAdjacentElement("afterend", panel);

  toggle.addEventListener("click", () => {
    const isOpen = paper.classList.toggle("is-open");

    toggle.setAttribute("aria-expanded", String(isOpen));
    panel.setAttribute("aria-hidden", String(!isOpen));
  });
});
