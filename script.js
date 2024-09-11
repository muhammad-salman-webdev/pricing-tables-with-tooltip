const pricingListPopups = document.querySelectorAll(
  "section.custom_pricing-section#customPricingSection .pricing_table > ul > li > .custom-tooltip"
);
function togglePopup(popup) {
  if (popup.classList.contains("show")) {
    popup.classList.remove("anim");
    setTimeout(() => {
      popup.classList.remove("show");
    }, 300);
  } else {
    popup.classList.add("show");
    setTimeout(() => {
      popup.classList.add("anim");
    }, 10);
  }
}
pricingListPopups.forEach((tooltip) => {
  const btn = tooltip.querySelector(".triger"),
    closeBtn = tooltip.querySelector(".tooltip-popup .head .close-icon"),
    subTabs = tooltip.querySelectorAll(".tooltip-popup .body .tabs .tab"),
    subTabBtns = tooltip.querySelectorAll(
      ".tooltip-popup .body .tabs-btns > button"
    );
  btn.addEventListener("click", () => togglePopup(tooltip));
  closeBtn.addEventListener("click", () => togglePopup(tooltip));

  subTabBtns.forEach((tabBtn, i) => {
    if (i === 0) {
      subTabBtns[i].classList.add("active");
      subTabs[i].classList.add("active");
    }
    tabBtn.addEventListener("click", () => {
      subTabBtns.forEach((_tBtn) => _tBtn.classList.remove("active"));
      subTabBtns[i].classList.add("active");
      subTabs.forEach((_tab) => _tab.classList.remove("active"));
      subTabs[i].classList.add("active");
    });
  });
});
