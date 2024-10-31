export default async function ({ addon, console, msg }) {
  let stageHidden = false;
  let bodyWrapper;
  let smallStageButton;
  let largeStageButton;
  let hideStageButton;

  function hideStage() {
    stageHidden = true;
    if (!bodyWrapper) return;
    document.body.classList.add("sa-stage-hidden-outer");
    // Inner class is applied to body wrapper so that it won't affect the project page.
    bodyWrapper.classList.add("sa-stage-hidden");
    hideStageButton.setAttribute("aria-pressed", true);
    if (smallStageButton) smallStageButton.setAttribute("aria-pressed", false);
    if (largeStageButton) largeStageButton.setAttribute("aria-pressed", false);
    hideStageButton.classList.remove(addon.tab.scratchClass("stage-header_stage-button-toggled-off"));
    window.dispatchEvent(new Event("resize")); // resizes the code area and paint editor canvas
  }

  function unhideStage(e) {
    stageHidden = false;
    if (!bodyWrapper) return;
    document.body.classList.remove("sa-stage-hidden-outer");
    bodyWrapper.classList.remove("sa-stage-hidden");
    hideStageButton.setAttribute("aria-pressed", false);
    hideStageButton.classList.add(addon.tab.scratchClass("stage-header_stage-button-toggled-off"));
    if (e) {
      const clickedButton = e.target.closest("button");
      if (clickedButton) clickedButton.setAttribute("aria-pressed", true);
    } else if (addon.tab.redux.state) {
      const selectedStageSize = addon.tab.redux.state.scratchGui.stageSize.stageSize;
      if (smallStageButton) smallStageButton.setAttribute("aria-pressed", selectedStageSize === "small");
      if (largeStageButton) largeStageButton.setAttribute("aria-pressed", selectedStageSize === "large");
    }
    window.dispatchEvent(new Event("resize")); // resizes the code area and paint editor canvas
  }

  addon.self.addEventListener("disabled", () => unhideStage());

  while (true) {
    const stageControls = await addon.tab.waitForElement("[class*='stage-header_stage-size-toggle-group_'] [class*='toggle-buttons_row_']", {
      markAsSeen: true,
      reduxCondition: (state) => !state.scratchGui.mode.isPlayerOnly,
    });
    bodyWrapper = document.querySelector("[class*='gui_body-wrapper_']");
    smallStageButton = stageControls.firstChild;
    smallStageButton.classList.add("sa-stage-button-middle");
    largeStageButton = stageControls.lastChild;
    hideStageButton = Object.assign(document.createElement("div"), {
      role: "button",
      className: addon.tab.scratchClass(
        "toggle-buttons_button",
        { others: "sa-hide-stage-button" }
      ),
    });
    addon.tab.displayNoneWhileDisabled(hideStageButton);
    stageControls.insertBefore(hideStageButton, smallStageButton);
    hideStageButton.appendChild(
      Object.assign(document.createElement("img"), {
        className: addon.tab.scratchClass("stage-header_stage-button-icon"),
        src: addon.self.getResource("/icon.svg") /* rewritten by pull.js */,
        alt: msg("hide-stage"),
        draggable: false,
      })
    );
    if (stageHidden) hideStage();
    else unhideStage();
    hideStageButton.addEventListener("click", hideStage);
    smallStageButton.addEventListener("click", unhideStage);
    largeStageButton.addEventListener("click", unhideStage);
  }
}
