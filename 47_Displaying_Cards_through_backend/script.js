let main = document.querySelector('main');
let add = ''
let skills = '';

const Users = [
  {
    fullName: "Hitesh Choudhary",
    companyName: "LearnCode Online",
    skills: ["JavaScript", "React", "Node.js","Angular"],
    shortDescription: "Senior developer and educator with a focus on modern web technologies.",
    image: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=600",
    domain: "Full Stack Development"
  },
  {
    fullName: "Ananya Sharma",
    companyName: "Infosys",
    skills: ["Java", "Spring Boot", "MySQL"],
    shortDescription: "Backend engineer experienced in building scalable enterprise applications.",
    image: "https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?w=600",
    domain: "Backend Development"
  },
  {
    fullName: "Rahul Verma",
    companyName: "TCS",
    skills: ["Python", "Django", "REST APIs"],
    shortDescription: "Software engineer working on API-driven web platforms.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600",
    domain: "Web Development"
  },
  {
    fullName: "Sneha Iyer",
    companyName: "Wipro",
    skills: ["UI/UX", "Figma", "Adobe XD"],
    shortDescription: "UI/UX designer creating intuitive and accessible digital experiences.",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600",
    domain: "UI/UX Design"
  },
  {
    fullName: "Arjun Mehta",
    companyName: "Google",
    skills: ["ML", "Python", "TensorFlow","Data Science","Langchain"],
    shortDescription: "ML engineer working on intelligent systems and data-driven solutions.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600",
    domain: "Machine Learning"
  },
];

Users.forEach((elem)=>{

add += `<div class="card">
        <img
          src=${elem.image}
          alt="user_img"
        />
        <h2>${elem.fullName}</h2>
        <h3>${elem.domain}</h3>
        <h5>${elem.companyName}</h5>
        ${skills = `
        <div id="skills">
          <h6>${elem.skills[0]}</h6>
          <h6>${elem.skills[1]}</h6>
          <h6>${elem.skills[2]}</h6>
          <h6>${'+' + (elem.skills.length - 3)}</h6>
        </div>
        `}
        <p>
          ${elem.shortDescription}
        </p>
        <h3 id="profile">view profile</h3>
      </div>`
})

main.innerHTML= add;

