const cardTemplate = document.createElement("template");
const cardStyles = document.createElement("link");

cardTemplate.innerHTML = `
  <div class="project-card">
    <section class="project-content-desc">
      <h2><slot name="project-name"></slot></h2>
      <p><slot name="project-description"></slot></p>
    </section>
    <img src="" alt="">
  </div>
`;

cardStyles.setAttribute("rel", "stylesheet");
cardStyles.setAttribute("href", "./styles/project-card-styles.css");

class ProjectCard extends HTMLElement {
  constructor(){
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(cardTemplate.content.cloneNode(true));
    this.shadowRoot.appendChild(cardStyles.cloneNode(true));
    this.shadowRoot.querySelector("img").src = this.getAttribute("scrnShot");
  }
}

window.customElements.define("project-card", ProjectCard);
