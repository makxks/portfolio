const detailTemplate = document.createElement("template");
const detailStyles = document.createElement("link");

detailTemplate.innerHTML = `
  <div class="project-detail">
    <span class="project-detail-span"></span>
    <section class="project-detail-pair">
      <section class="project-detail-text-pair">
        <h3><slot name="project-links-1"></slot></h3>
        <p><slot name="project-description-long-1"></slot></p>
      </section>
      <img class="image1" src="" alt="">
    </section>
    <section class="project-detail-pair">
      <img class="image2" src="" alt="">
      <section class="project-detail-text-pair">
        <h3><slot name="project-links-2"></slot></h3>
        <p><slot name="project-description-long-2"></slot></p>
      </section>
    </section>
  </div>
`;

detailStyles.setAttribute("rel", "stylesheet");
detailStyles.setAttribute("href", "./styles/project-detail-styles.css");

class ProjectDetail extends HTMLElement {
  constructor(){
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(detailTemplate.content.cloneNode(true));
    this.shadowRoot.appendChild(detailStyles.cloneNode(true));
    this.shadowRoot.querySelector(".image1").src = this.getAttribute("scrnShot1");
    this.shadowRoot.querySelector(".image2").src = this.getAttribute("scrnShot2");
  }
}

window.customElements.define("project-detail", ProjectDetail);
