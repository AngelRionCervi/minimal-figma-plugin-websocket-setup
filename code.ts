/// <reference types="@figma/plugin-typings" />

if (figma.editorType === "figma") {
  figma.showUI(__html__);

  figma.ui.onmessage = (msg) => {
    console.log("[ui -> code] Message from UI: ", msg);
  }

  setTimeout(() => {
    figma.ui.postMessage("Hello from Figma plugin code!");
  }, 5000);
}
 