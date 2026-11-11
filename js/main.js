const projects = [{
  name: "ROTMG DPS Calculator",
  description : "A web based tool for testing build damage per second in realm of the mad god",
  technologies : ["Python", "Flask", "Javascript", "HTML", "CSS", "Chart.js"],
  github : "https://github.com/Hettgen/rotmg-dps-calculator"
  },
  {
    name : "Discord Book Club Bot",
    description : "A bot for hosting and managing a book club from within a discord server",
    technologies : ["Javascript", "Node.js", "Discord.js", "MongoDB", "AWS"]
  }
];

const container = document.getElementById("project-container");

projects.forEach(project => {
  const card = document.createElement("article");
  const heading = document.createElement("h3");
  const description = document.createElement("p");
  const technologies = document.createElement("p");

  heading.textContent = project.name;
  description.textContent = project.description;
  technologies.textContent = project.technologies.join(" • ");

  card.append(heading, description, technologies);

  if (project.github) {
    const link = document.createElement("a");
    link.href = project.github;
    link.textContent = "View on GitHub";
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    card.append(link);
  }

  container.append(card);
});

