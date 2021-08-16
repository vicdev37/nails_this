import module from "./module";
import jquery from "jquery";
window.$ = window.jQuery = jquery;

$(document).ready(() => {
  jQuery(".lightzoom").lightzoom({
    speed: 400,
    viewTitle: true,
    isOverlayClickClosing: true,
  });
  module();
});
