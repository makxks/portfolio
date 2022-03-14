const detailTemplate = document.createElement("template");
const detailStyles = document.createElement("link");

detailTemplate.innerHTML = `
  <div class="project-detail">
    <span class="project-detail-span"></span>
    <section class="project-detail-pair">
      <section class="project-detail-text-set">
        <h3><slot name="project-links-1"></slot></h3>
        <div class="technologies-used">
          <img class="tech1 filterable" src="" alt="" style="display: none">
          <img class="tech2 filterable" src="" alt="" style="display: none">
          <img class="tech3 filterable" src="" alt="" style="display: none">
          <img class="tech4 filterable" src="" alt="" style="display: none">
          <img class="tech5 filterable" src="" alt="" style="display: none">
        </div>
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
    constructor() {
        super();

        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(detailTemplate.content.cloneNode(true));
        this.shadowRoot.appendChild(detailStyles.cloneNode(true));
        this.shadowRoot.querySelector(".image1").src = this.getAttribute("scrnShot1");
        this.shadowRoot.querySelector(".image2").src = this.getAttribute("scrnShot2");

        if (this.getAttribute("logo1")) {
            this.shadowRoot.querySelector(".tech1").src = this.getAttribute("logo1");
            this.shadowRoot.querySelector(".tech1").style.display = 'block';
        }
        if (this.getAttribute("logo2")) {
            this.shadowRoot.querySelector(".tech2").src = this.getAttribute("logo2");
            this.shadowRoot.querySelector(".tech2").style.display = 'block';
        }
        if (this.getAttribute("logo3")) {
            this.shadowRoot.querySelector(".tech3").src = this.getAttribute("logo3");
            this.shadowRoot.querySelector(".tech3").style.display = 'block';
        }
        if (this.getAttribute("logo4")) {
            this.shadowRoot.querySelector(".tech4").src = this.getAttribute("logo4");
            this.shadowRoot.querySelector(".tech4").style.display = 'block';
        }
        if (this.getAttribute("logo5")) {
            this.shadowRoot.querySelector(".tech5").src = this.getAttribute("logo5");
            this.shadowRoot.querySelector(".tech5").style.display = 'block';
        }
    }
}

window.customElements.define("project-detail", ProjectDetail);