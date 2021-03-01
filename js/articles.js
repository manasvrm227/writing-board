const Articles = [
 {
    title: "SOLID Design Principles",
    date: "Sep 28, 2020",
    description: "SOLID design principles is very much preferred in object-oriented software.",
    link: "pages/solidDesignPrinciples.html",
  }, 
 {
    title: "GitHub special repository",
    date: "July 07, 2020",
    description: "Today, I made a mistake",
    link: "pages/gitHubSpecialRepo.html",
  },
  {
    title: "From Java IO to Java NIO",
    date: "December 28, 2019",
    description: "Transition from IO to NIO(New IO)",
    link: "pages/javaIoToNio.html",
  },
  {
    title: "Java Serialization and Deserialization",
    date: "August 01, 2018",
    description: "Deep dive into Serialization and Deserialization.",
    link: "pages/serialization.html",
  },
  {
    title: "Engineering: Electrical to Computer Science",
    date: "December 21, 2017",
    description:
      "A look into my experience from electrical to computer engineering.",
    link: "pages/electricalToComputerScience.html",
  },
];

var article = document.querySelector("#blog");
article.innerHTML =
  "<div>" +
  Articles.map((blog) => {
    return (
      `<div class="blog-head">` +
      `<div class="title">` +
      `<a href=${blog.link} target="_blank" class="link">` +
      blog.title +
      "</a>" +
      `</div>` +
      `<div class="date">` +
      blog.date +
      `</div>` +
      `</div>` +
      `<div class="description">` +
      blog.description +
      `</div>` +
      "<br/>"
    );
  }).join("") +
  "</div>";
