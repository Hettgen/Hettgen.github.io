const projects = [{
  name: "ROTMG DPS Calculator",
  description : "A web based tool for testing build damage per second in realm of the mad god",
  technologies : ["Python", "Flask", "Javascript", "HTML", "CSS", "Chart.js"],
  github : "https://github.com/Hettgen/rotmg-dps-calculator",
  image : null,
  demo : null
  },
  {
    name : "Discord Book Club Bot",
    description : "A bot for hosting and managing a book club from within a discord server",
    technologies : ["Javascript", "Node.js", "Discord.js", "MongoDB", "AWS"],
    github : "",
    image : null,
    demo : null
  },
];

const container = document.getElementById("project-container");

projects.forEach(project => {
  
  const card = document.createElement("article");
  card.classList.add("project-card");

  // Card Image
  if(project.image){
    const image = document.createElement("img");
    image.src = project.image;
    image.alt = `${project.name} screenshot`;
    image.classList.add("project-image");
    image.loading = "lazy";
    card.append(image);
  }

  const content = document.createElement("div");
  content.classList.add("project-content");

  // Adding content
  const heading = document.createElement("h3");
  heading.textContent = project.name;
  
  const description = document.createElement("p");
  description.textContent = project.description;

  const techList = document.createElement("div");
  techList.classList.add("tech-list");

  project.technologies.forEach(tech => {
    const tag = document.createElement("span");
    tag.classList.add("tech-tag");
    tag.textContent = tech;
    techList.append(tag);
  });

  const links = document.createElement("div");
  links.classList.add("project-links");

  //add github link
  if(project.github){
    const github = document.createElement("a");
    github.href = project.github;
    github.textContent = "Github";
    github.target = "_blank";
    github.rel = "noopener noreferrer"
    links.append(github);
  }

  if(project.demo){
    const demo = document.createElement("a");
    demo.href = project.demo;
    demo.textContent = "Live Demo";
    demo.target = "_blank";
    demo.rel = "noopener noreferrer";
    links.append(demo);
  }

  content.append(heading, description, techList, links);
  card.append(content);
  container.append(card);
  
});

