let projects = $all(".project-content");

function getElementY(query) {
  return window.pageYOffset + document.querySelector(query).getBoundingClientRect().top;
};

function scrollToElement(elementY, duration, yOffset = 0){
  let startingY = window.pageYOffset;

  let diff = getElementY(elementY) - startingY - 90 + yOffset;
  let start;

  window.requestAnimationFrame(function step(timestamp) {
    if (!start) start = timestamp;
    let time = timestamp - start;
    let percent = Math.min(time / duration, 1);

    window.scrollTo(0, startingY + diff * percent);

    if (time < duration) {
      window.requestAnimationFrame(step);
    }
  });
};

function offScreenY(el, onlyAbove = true) {
  let rect = el.getBoundingClientRect();
  let above = (rect.top + rect.height) < 0;
  let below = rect.y > (window.innerHeight || document.documentElement.clientHeight);
  return onlyAbove ? above : above || below;
}

window.addEventListener("scroll", (e) => {
  let bodyHeight = body.offsetHeight;

  if (this.scrollY > 0) {
    header.classList.add("header-scrolled");
    title.classList.add("header-title-scrolled");
    themes.classList.add("header-option-scrolled");
  } else {
    header.classList.remove("header-scrolled");
    title.classList.remove("header-title-scrolled");
    themes.classList.remove("header-option-scrolled");
  }

  if(offScreenY(nav)){
    navLeft.classList.add("nav-left-on");
  } else {
    navLeft.classList.remove("nav-left-on");
  }

  projects.forEach((project) => {
    if(!checkProjectDetailsOn()){
      if(!offScreenY(project, false)){
        project.classList.add("project-content-on");
      } else {
        project.classList.remove("project-content-on");
      }
    }
  });

  function checkProjectDetailsOn(isOn){
    let projectShowing = false;
    projects.forEach((project) => {
      if(project.classList.contains("project-being-shown" || 'project-centered-left') || project.classList.contains('project-centered-right')){
        projectShowing = true;
      }
    })
    return projectShowing;
  }
});
