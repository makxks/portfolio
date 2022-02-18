let projects = $(".projects");
let isShowing = false;

function toggleProjectDetails(elementToShow, projectToShow, cards){
    moveCards(elementToShow, cards);

    let details = projectToShow.shadowRoot.querySelector(".project-detail");

    if(!isShowing){
        details.classList.add("project-detail-on");
    } else {
        details.classList.remove("project-detail-on");
    }

    isShowing = !isShowing;
}

function moveCards(elementToShow, cards){
    if(!isShowing){
        cards.forEach((card, index) => {
            if(card != elementToShow){
                card.children[0].classList.remove("project-content-on");
            }
            if(card == elementToShow){
                let topValue;
                if(body.offsetWidth < 1200){
                    topValue = -1 * ((100 * index) - 50);
                    elementToShow.children[0].classList.add("project-being-shown");
                    projects.classList.add("projects-one");
                }
                else {
                    topValue = -1 * ((100 * Math.floor(index / 2)) - 50);
                    if(index % 2 == 1){
                        elementToShow.children[0].classList.add("project-being-shown", "project-centered-right", "project-scaled");
                    } else {
                        elementToShow.children[0].classList.add("project-being-shown", "project-centered-left", "project-scaled");
                    }
                }
                elementToShow.children[0].style.top = "" + topValue + "%";
            }
        });
    } else {
        projects.classList.remove("projects-one");
        cards.forEach((card, index) => {
          if(card != elementToShow){
              card.children[0].classList.add("project-content-on");
          }
          if(card == elementToShow){
              if(index % 2 == 1){
                  elementToShow.children[0].classList.remove("project-centered-right", "project-scaled");
              } else {
                  elementToShow.children[0].classList.remove("project-centered-left", "project-scaled");
              }
              elementToShow.children[0].style.top = 0;
          }
      });
    }
}
