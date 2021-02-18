import "bootstrap/dist/css/bootstrap.css";
import "./styles/style.css";

import "bootstrap/dist/js/bootstrap.bundle.js";
import "regenerator-runtime";

/* component */
import "./script/component/header-navigation";
import "./script/component/content-hero";
import "./script/component/content-gallery";
import "./script/component/review-user";
import "./script/component/footer-food";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

import typed from "./script/view/typed.js";
import carousel from "./script/view/carousel.js";
import main from "./script/view/main.js";

document.addEventListener("DOMContentLoaded", typed);
document.addEventListener("DOMContentLoaded", carousel);
document.addEventListener("DOMContentLoaded", main);
