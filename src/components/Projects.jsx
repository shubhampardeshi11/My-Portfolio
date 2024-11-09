import { motion } from 'framer-motion';
import '../styles/Projects.css';

const projects = [
  {
    title: "Movie Browser Application",
    description: `This application allows users to browse and filter movies by genres using data fetched from the TMDb API. Users can also load more movies by scrolling up or down to fetch movies from different release years.
Features:
• Fetch genres from TMDb API
• Allow multiple genre selections
• Fetch movies by selected genres and sort them by release year
• Infinite scrolling to load movies from previous or next years
• Mobile-friendly and visually appealing interface`,
    technologies: ["React", "Node.js", "MongoDB"],
    image: "/my-portfolio/project-images/movie-list-app.png",
    github: "https://github.com/shubhampardeshi11/movie-list-app",
    live: "https://movie-list-app-by-shubh.netlify.app/"
  },

  {
    title: "Goa Jazz Academy",
    description: "GJA presents a clean and professional look, perfect for a music academy! " +
      "Homepage: The homepage makes an impactful introduction, with vibrant visuals. " +
      "Academy Overview: There's likely a section detailing the academy's mission and values. " +
      "Courses and Offerings: The website showcases various courses, from beginner to advanced levels. " +
      "Faculty and Mentorship: A dedicated section highlights instructor experience. " +
      "Events and Workshops: Features upcoming events, performances, and workshops. " +
      "Contact and Enrollment: Easy-to-use contact page for potential students.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "/my-portfolio/project-images/GJA.png",
    github: "https://github.com/shubhampardeshi11/goa-jazz-academy",
    live: "https://goajazzacademy.com/"
  },
  {
    title: "Live News Application",
    description: `This application allows users to browse and filter movies by genres using data fetched from the NEWS API. Users can also load more NEWS by scrolling up or down to fetch Live News from different release date.
Features:
• Fetch genres from NEWS API
• Allow multiple categories selections
• Fetch News by selected genres and sort them
• Infinite scrolling 
• Mobile-friendly and visually appealing interface`,
    technologies: ["React", "Node.js", "MongoDB"],
    image: "/my-portfolio/project-images/movie-list-app.png",
    github: "https://github.com/shubhampardeshi11/movie-list-app",
    live: "https://movie-list-app-by-shubh.netlify.app/"
  },
  {
    title: "ShivPriya Fiber Forge Technologies",
    description: "SFFT appears to be dedicated to showcasing the company's expertise in technology solutions and services.",
    technologies: ["Wordpress", "Wordpress Pulgins"],
    image: "/my-portfolio/project-images/SFFT.png",
    github: "",
    live: "https://fiberforgetechnologies.com/?i=1"
  },
  
  
  // Add more projects...
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2 className="projects-heading">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="project-card"
          >
            <div className="project-image">
              <img 
                src={project.image} 
                alt={project.title} 
                onError={(e) => {
                  e.target.src = '/fallback-image.png'; // Add a fallback image
                  console.log(`Failed to load image for ${project.title}`);
                }}
              />
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href={project.live} target="_blank" rel="noopener noreferrer">Live Demo</a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;