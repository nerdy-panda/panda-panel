import Accordion from "../Service/Accordion.js";

const accordions = window.document.body.querySelectorAll(".sub-menu>a");
for (const accordionElement of accordions) {
    const accordion = new Accordion(accordionElement,"opened-menu");
}