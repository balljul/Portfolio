const profile = {
  name: "Julius Ball",
  title: "Full Stack Developer & Student",
  tagline: "I build things for the web.",
  location: "Vienna, Austria",
  profileImage: "/assets/images/profile/profile-photo.jpeg",
  bio: `I'm a passionate software developer currently studying Computer Science at TU Vienna. I love creating digital experiences that solve real-world problems and have a keen interest in both frontend and backend technologies.

  My journey in programming began during high school, and since then I've been exploring various technologies from web development to mobile apps and cloud computing.

  When I'm not coding, you can find me contributing to open source projects, learning about emerging technologies, or enjoying the beautiful Austrian countryside.`,

  contact: {
    email: "contact@juliusball.com",
    linkedin: "https://www.linkedin.com/in/julius-dev/",
    github: "https://github.com/julius-dev",
    website: "https://www.juliusball.com"
  },

  availability: {
    status: "Student",
    openToOpportunities: true,
    preferredRoles: ["Full Stack Developer", "Backend Developer"]
  }
};

const experience = {
  companies: [
    {
      id: "gbv",
      company: "Great Big Value GmbH",
      companyUrl: "https://www.greatbigvalue.com",
      companyLogo: "/images/companies/techstart-logo.jpg",
      location: "Klagenfurt - Austria",
      positions: [
        {
          id: "gbv-full-stack",
          title: "Full Stack Developer",
          range: "August 2023 - Present",
          description: [
            "Fullstack Development",
            "Google Workspace Management",
            "Cloud Infrastructure",
            "Project Management",
          ],
          technologies: ["Rust", "PHP", "JavaScript", "Git", "GitHub", "Docker", "MySQL", "PostgreSQL", "MinIO", "Redis", "ClickHouse", "Figma", "Postman", "Google Apps Script", "3CX", "gRPC", "Laravel Cloud", "Laravel Forge", "Hetzner", "n8n"]
        },
        {
          id: "gbv-data-research",
          title: "Data Researcher",
          range: "August 2021 - November 2022",
          description: [
            "Research of contact data for telephony jobs",
            "Further development of the overview table for orders"
          ],
          technologies: ["Google Sheets", "Google Apps Script"]
        },
        {
          id: "gbv-intern",
          title: "Internship",
          range: "July 2021 - August 2021",
          description: [
            "Research of company data",
            "Conducting phone calls",
            "Creating tables in Google Sheets:",
            "Overview tables for orders",
            "Creating work time logs for employees"
          ],
          technologies: ["Google Sheets", ,"Google Apps Script", "3CX"]
        }
      ]
    },
    {
      id: "datacycle",
      company: "DataCycle GmbH",
      companyUrl: "https://datacycle.info/",
      companyLogo: null,
      location: "Klagenfurt, Austria",
      positions: [
        {
          id: "dc-internship-2025",
          title: "Internship",
          range: "July 2025 - August 2025",
          description: [
            "Fullstack Development in the Datacycle Product",
            "Integrating AI",
          ],
          technologies: ["Ruby", "Ruby on Rails", "Big Data", "AI", "PostgreSQL"]
        },
        {
          id: "dc-internship-2024",
          title: "Internship",
          range: "July 2024 - August 2024",
          description: [
            "Backend Development for the Datacycle Product",
            "Working with Big Data",
            "Working with external APIs",
          ],
          technologies: ["Ruby", "Ruby on Rails", "Big Data", "PostgreSQL", "MongoDB", "Docker"]
        },
      ]
    },
    {
      id: "pixelpoint",
      company: "Pixelpoint multimedia werbe GmbH",
      companyUrl: "https://www.pixelpoint.at/",
      companyLogo: null,
      location: "Klagenfurt, Austria",
      positions: [
        {
          id: "pixel-intern-2023",
          title: "Internship",
          range: "July 2023 - August 2023",
          description: [
            "Developing Customer Projects in Wordpress",
            "Development of the new DataCycle Homepage",
            "Developing custom WordPress Theme",
            "Developing packages for WordPress",
            "Introduction into IT (Server Hosting and Infrastructure)",
            "Introduction into Typo3",
          ],
          technologies: ["WordPress", "TYPO3", "PHP", "JavaScript", "HTML5", "CSS3"]
        },
        {
          id: "pixel-intern-2022",
          title: "Internship",
          range: "July 2022 - August 2022",
          description: [
            "Working with Workdpress",
            "Learning Git & GitLab",
            "Working with APIs"
          ],
          technologies: ["WordPress", "Git", "GitLab", "HTML5", "CSS3"]
        }
      ]
    },
    {
          id: "htl",
          company: "HTL Villach",
          companyUrl: "https://www.pixelpoint.at/",
          companyLogo: null,
          location: "Klagenfurt, Austria",
          positions: [
            {
              id: "htl-school-rep",
              title: "School Representative (Schulsprecher)",
              range: "Schoolyear of 2024/25",
              description: [
              ],
              technologies: []
            },
            {
              id: "htl-medientechnik",
              title: "Student - Department of Media Technology",
              range: "Schoolyear 2024/25 - Present",
              description: [
                "Studying Media Technology with specialty in Web Development"
              ],
              technologies: ["InDesign", "Lightroom", "Blender", "Next.js", "Nest.js", "TypeScript", "Strapi", "Git", "GitLab", "MySQL", "PHP", "JavaScript", "React", "PostgreSQL"]
            },
            {
              id: "htl-netzwerktechnik",
              title: "Student - Department of Network Technology",
              range: "Schoolyear 2021/22 - Schoolyear 2023/24",
              description: [
                "Network Security",
                "Application Security",
                "Software Development"
              ],
              technologies: ["Python", "Git", "GitLab", "Cisco", "MikroTik", "Red Hat"]
            }
          ]
        }
  ],

  education: [
    {
      id: "tu-vienna",
      school: "Technical University of Vienna",
      degree: "Bachelor of Science in Computer Science",
      location: "Vienna, Austria",
      range: "2022 - 2026",
      description: [
        "Focusing on software engineering and web technologies",
        "Relevant coursework in algorithms, data structures, and database systems",
        "Active member of the Computer Science Student Association",
        "Current GPA: 3.8/4.0"
      ],
      relevantCourses: [
        "Advanced Web Development",
        "Software Engineering Principles",
        "Database Design",
        "Computer Networks",
        "Human-Computer Interaction"
      ]
    },
    {
      id: "gymnasium",
      school: "BRG Wien Gymnasium",
      degree: "Matura (Austrian High School Diploma)",
      location: "Vienna, Austria",
      range: "2018 - 2022",
      description: [
        "Graduated with honors",
        "Specialized in Mathematics and Computer Science",
        "Led the school's programming club for 2 years"
      ],
      relevantCourses: [
        "Advanced Mathematics",
        "Computer Science Fundamentals",
        "Physics",
        "English"
      ]
    }
  ]
};

// Technology icons mapping
const techIcons = {
  "JavaScript": "/assets/images/tech/javascript.svg",
  "PHP": "/assets/images/tech/php.svg",
  "HTML/CSS": "/assets/images/tech/html5.svg",
  "CSS3": "/assets/images/tech/css3.svg",
  "React": "/assets/images/tech/react.svg",
  "Node.js": "/assets/images/tech/nodejs.svg",
  "HTML5": "/assets/images/tech/html5.svg",
  "Vue.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
  "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  "PostgreSQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  "Docker": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  "Git": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "TypeScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  "MySQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  "AWS": "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
  "Express": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  "Socket.io": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",
  "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  "Bootstrap": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  "C/C++": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  "SQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  "Linux": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  "Figma": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  "Unity": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg",
  "Rust": "https://www.rust-lang.org/static/images/rust-logo-blk.svg",
  "K8s": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
  "WordPress": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAASFBMVEVHcEw4WOk4WOk4WOk4WOk4WOk4WOk4WOk4WOk4WOk1VukrUOggSeifrPPq7f3+///Z3vp8jvBFYupbc+zL0fmzvPYTQ+iSoPLrT+6TAAAACnRSTlMAOofC6v9f7hnd5AhKAgAAAU5JREFUeAFkUgeSAzEI2+ZLAti4rff/Pz1hZlJJ2SIsibI8Y932I4Rj39blO/5u4Rm3vw/o/vDXRH593N8YJ8DCIeBvJqwfGFNMikiR+A29B4REzaUy15I1SkA4s+lJTs0IjbylLqY7fU4sQxCY/fjUiZpn1MAxjVCpBtBWjlC+GBVNN0Rm5BzdLpcYqETmaZsHVfsI41KYmak94ui27FBMBWggew1+Rk5JUN0X9JM1xCkjIG6Wk0kZfV7MoEpVzRK4qJ7I0TjUfDvIko2XT+PFySoOTtrKl/FKAtoYgtVp3RATeEfpDbyjX+KGvJQs5oV7Gwm8GiR7Kd4EcIE3ibWn5NG8Cd4+vBY1p1QV6EjePm+89DzMCwWzLdkb/xxZTwVqRqL5ObLnsFFLr0TVavJhv68JX1kR+WL+WSLfLd8yw35WE/G7mv/DlajxZgcA3qEazaxj2GIAAAAASUVORK5CYII=",
  "Ruby": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg",
  "Postgres": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  "ClickHouse": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/clickhouse/clickhouse-original.svg",
  "Redis": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
  "MinIO": "https://github.com/minio/minio/raw/master/.github/logo.svg",
  "AWS": "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
  "Postman": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
  "Google Apps Script": "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_Apps_Script.svg",
  "Google Sheets": "https://upload.wikimedia.org/wikipedia/commons/3/30/Google_Sheets_logo_%282014-2020%29.svg",
  "3CX": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAn1BMVEU3Nzc4NDI4Mi0xMTErKysuLi45MCkvUGMjbpQmZ4k1PUI0NDQdHR1gYGCmpqavr6+GhoYgICBwcHB9fX08PDwAmdkwS1vY2Nj////Nzc1oaGgWFhYUh705Kx4yRVAYgLEdDwDg4ODs7OyPj4+5ubkNDQ1XV1cLd6eCfXkaEQg5LSMJks4XEw9RUVEpYH0sVm07JQ0jHBabm5ssKCVGRkaL8pitAAAA4klEQVR4AeWQhRHDMAwAZXYYlajMzLD/bA34ukTebLFgQDDOoUVIqUCo/i56mTbW8xkEYRQnaZYXEADIPC2hgVtsqJiqqR4RjamegExpJKEFp7M5LparNYTZJMk2tN3taTWBFt+aGeDhSEEbRprTljZEKuhj8vMUL3Jbh+1DY3WtiW4uH6b1/YCHv3B+3dI66A3ZY1Hp5xRT5/bxelNC67AXGlzMfLws131Cn5xGu2ZNOuPzAhvuXKy6Ur60ziCLKY72rVQ/rDfnrglhGn+bz+wd72+Bax/7t0/J7k/K1u1A+AFKERMEdNLXwwAAAABJRU5ErkJggg==",
  "Big Data": "https://cdn-icons-png.flaticon.com/512/2762/2762506.png",
  "Ruby on Rails": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-original-wordmark.svg",
  "AI": "https://cdn-icons-png.flaticon.com/512/8620/8620443.png",
  "gRPC": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grpc/grpc-original.svg",
  "n8n": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAM1BMVEVHcEzrS3HrS3HrS3HrS3HrSnPqS3HqS3HqS3HrS3HqS3HrSnHqS3HqS3HqS3HrS3HqS3FCR2ANAAAAEXRSTlMAKXFeFwVB6924gIjOxFOrmtUKd24AAACZSURBVHgB3dBBDgMhCAXQz4gACur9T9vWtLOpJxgSVo+QD3h80VX4CLVC1NQPSqX1FllFx5/xNJ/vBtlGakuAOlZjQKww16IeSQA4LVRQNM2BFow92T+GYQK3qQui7truVNhIcM2NEXptuuNl5HdtAj14h/gx9TWAWlZnQHRQhGsBcDoller0en6cK+GMADjU9nvOenXCw+oFhVkFUeZv5wAAAAAASUVORK5CYII=",
  "Hetzner": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAASFBMVEXVDC3UACnVACXXHDneUGPbOE/UACDoiJX////32d3UAB764ubngY7ojZn65OfWEDL99fb0yM7TAAvUABbmfovXFjXhXW/gWGvU3JPNAAAAdElEQVR4Ab2SAxLAMBAAG9aNk/+/tLa9wzO9DwEQQrAhAoQxJoNIShF1IvWDIAgjrxPjUkxoK0XpxAiz/4ygZa0hyFrAMjLIOuJgaRy4aOSihy8bklGL2lkfgHu7/cC43C1NlsfWnREYa+34Tax1Buw/2GcUp1oMJ4gvm9kAAAAASUVORK5CYII=",
  "Laravel Cloud": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAP1BMVEX///9dXl9GR0hHSEmAgIE0NjiYmJnc3d2vr7BBQ0QAAABhY2SgoaKSk5TQ0NAACAxXWFl7fH14eXqys7Ryc3QiIzPxAAAAa0lEQVR4AdTJtQHDQBAAsGfmy/6rxszszmqFPguTHmWb40L2FF2fNsR2nCSbMz60hF2nNtGkXGoQ1mlNjCaDUvArm0xNAqrBWarXCXk/GdRy8kTgTUYz4GibPaPRNrc35mB7iKWBrTZkUxwAMIIJZ2xBsSMAAAAASUVORK5CYII=",
  "Laravel Forge": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAARVBMVEX///+y49lmy7dszLp80sEWup8AspQAtZgAsJDB6eGF1MRVxrEAt5tfybUpvaT2/Pvi9fGf3dC55dzd8+91z72o39QAtZnnkFokAAAAdElEQVR4AdXPxQGAQAwEwD3FXfovlSXoYX/mGQ/+SGkT0BYH56NAnOCQZlGUH6ICISvZUrgKodqzo8Gzlknf4VkfsRMV4S6feXKg+0oRpbgZorWRL94UI5vqGe7YOBZftw54UPe5bKzxwPpI4EmqDekGvzYBfVMGRQKLEZgAAAAASUVORK5CYII=",
  "TYPO3": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA6ElEQVR4AYXSPQhBUQAF4BfJoiwyWu0ZDTZlYxNFKYPNHhsmgxgksu8Lme3IoNgHE8l/uM4tr066P6++5Z7T6b7Xc/gRLScEOehAlc6bIH5OsIA+RN1CEqbwoWKZBmZ0zvYybGvCOg0MNZ2XDB+acEIDeU1nJ8O7JrxB8DcQgLOiM5bhBoRGiW7RU+RJ5fuRJQ2E4UjZGjwyyIAwSNFIGp7whoR76IeDYWAFXhqJQfz/B+pablFzTA8KEXgZBt5QsI2MQFjMwace4K+sdoWo7RZFw0CWqsaRgeL9K1SxDnihARfYQsrU/wIMpKFO6U2GCwAAAABJRU5ErkJggg==",
  "GitHub": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  "GitLab": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg",
  "Cisco": "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg",
  "Red Hat": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redhat/redhat-original.svg",
  "MikroTik": "https://cdn-icons-png.flaticon.com/512/1006/1006771.png",
  "InDesign": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAY1BMVEX////+9fX+9/b96+vpAAD4xsXyjYrqEADqAADuVlL2s7HyhoPsNS/61tb2rq3wbGjrIxzrLyn1pqTzmJb60tHvZmP3vLv4wcDzk5HtRkL73t3xeXb97ezsQTzuWlb62djqGQ+7TL0FAAAAwElEQVR4AbWQVQLDMAxDF06GZab7n3KxyvBblWy9gNLH/WLci10zISF1CbU0XtZdQmkgKS7Yc4avC/i2ZqJn9pFmht8T/NHEd0CRwiNjNFFGMT7JAY4uE/Sx6QHayXQWg3Ysm5fLURQ7WFpvBfMSxm5ZNcahskCZbWANh1PZIFK7Mg5Wj02HSNUCI8Bv//l4T00jZw2GJEm+GxsOgrGzZD7/jwgIB59l0ymSGeZzbMV8JBQZoPj0qz4eNmRQtpv0B4L4C2q5kuOCAAAAAElFTkSuQmCC",
  "Lightroom": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAUVBMVEUAHjYAECQACR0lgscsmOgrlOIzrf8yq/8AEygAHDMfcKwun/IojdcEJkEzr/8xp/4ebagEJUAAAAAAABQ0sf8KMVEAFisVUoAZXZAXV4gPPmPFfgZOAAAAbElEQVR4Ad3JhRGAMBAAwbjhEO+/T3ws818AXDxLPhllFDcuOKpMKsFw1C8axiyjFkTjun6QI7EwqmlSGM4n8vm8wagGZlDUiyU4DgCu2xmFcdJKKR8gFKO625wfW4wp3xVTcyZt8Y3Yc/2wA2PqBkpGoNedAAAAAElFTkSuQmCC",
  "Blender": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg",
  "Next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  "Nest.js": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAANlBMVEVHcEzgI07gI07gI07gI07gI07gI07gI07gI07gI07gI07gI07gI07gI07gI07gI07gI07gI04MRxOkAAAAEnRSTlMA9GdXHbN6/0ieBuA5jcIT0C5JiDMVAAAAuElEQVR4AWIgCTAC6qALIwZiIAiCKxzRU/7JuvyMXSwdW+f1JURI+pABii5cMEDNrQOIOimVi3D+M1xlWS185K6JqL/KQy8Lg6TEQ5YDwsss1GhH/ob/Lx/mrgNjtLHnbtRf01/J3OgscVV05rgYdNG/ld0aT5wYbcBLQzOE5/UTSC5gaNsXSasBTAcQPItktMvb4pGZKUk7u12Mv4zTRXPTtkyXR72INkGW0asGTrHoTTZRX6ZBZz8K+QvOS9frRQAAAABJRU5ErkJggg==",
  "TypeScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  "Strapi": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACiUlEQVR4AaVXQW4TQRAcPgEPytgMZ5DyBiIsRcrBEkASHgBIAG8APmAJXuIDfoIlH/fianrTE2V2S5XNKiNVFI/X3dXVPTvd6XadnNizFwtbOzaOrWPv6BxHBxw2C9lQ4rfdja1s27CN9XJpT1O7lie28C8PbAjGhu/+L+3nGSgLHHqf4dzZ9M7JaYYVaQSaHDmrz2d67vC8V6K4JNqAMjgfpQfbX6fIi8ojRztfeibeKLLpCWy1AuCcE1hqHQxhm2q1G0MrMlULRTll7J0AunkEWA1ylGvOBbGGdJfinEtHioQAJqLHmMyxJwCSUeDi3Ozj5TSur8xOXykCaAkgjZkp9qszs93OYsFGizacyFQ6A4kdM4E37vzHtyBAbhFodxEEIiVC3TIgkHUKVuG8EoCphbECV8PAmAgpoJ0HQAqQV5kCnd7Em+S8UUA4JV4gAgpNCjA4KqcvGZ8/mf36CYfd4Lfj7x+tQKGXFeiSSxx9KEL7GfbhLaviRGKBCcjXd1N3aXBb8XFsjQSBr+H4e0Ngugb0MU8Tb6oWUoE2eEgFIGuA2BXxPnj/DioFtK4vRzbJOaegbuqrefU6VGjxxQvz385sN8LF+f3Hr5ACAuqajajgp4PTsjpr6+q+KxpWLyPFFpP14QRqQUaBhvMHA3fXcRYkJFAJgCLngpM9xTH5n24cVZmRElegcQ4ro8tmIp0dtWR0/qld5xSw7EIB+h77FBPLdPTauO6MStZNSYnjvuW2/JG9vzrC4vlNr8B62BNgftR5HvFGmfXtUHqgbkg6Ekc0T80NYjR7UofT4huFo9DR5kd10XU4jdUOqTGeZ9s69g4az4vsIek2hStTx3Psq82+3gbj+X9LeqPtxkiTtwAAAABJRU5ErkJggg=="
};

const skills = {
  categories: [
    {
      name: "Programming Languages",
      skills: [
        { name: "JavaScript", level: 4, icon: techIcons["JavaScript"] },
        { name: "PHP", level: 4, icon: techIcons["PHP"] },
        { name: "HTML/CSS", level: 5, icon: techIcons["HTML/CSS"] },
        { name: "C/C++", level: 3, icon: techIcons["C/C++"] },
        { name: "SQL", level: 4, icon: techIcons["SQL"] },
        { name: "Python", level: 3, icon: techIcons["Python"] }
      ]
    },
    {
      name: "Frontend Technologies",
      skills: [
        { name: "React", level: 3, icon: techIcons["React"] },
        { name: "Vue.js", level: 2, icon: techIcons["Vue.js"] },
        { name: "CSS/SASS/LESS", level: 5, icon: techIcons["CSS3"] },
        { name: "Bootstrap", level: 4, icon: techIcons["Bootstrap"] },
        { name: "Tailwind CSS", level: 3, icon: techIcons["Tailwind CSS"] },
        { name: "Responsive Design", level: 5, icon: techIcons["HTML5"] }
      ]
    },
    {
      name: "Backend & Database",
      skills: [
        { name: "Node.js", level: 3, icon: techIcons["Node.js"] },
        { name: "PHP/Laravel", level: 4, icon: techIcons["PHP"] },
        { name: "MySQL", level: 4, icon: techIcons["MySQL"] },
        { name: "Google Apps Script", level: 5, icon: techIcons["JavaScript"] },
        { name: "REST APIs", level: 4, icon: techIcons["Node.js"] }
      ]
    },
    {
      name: "Tools & DevOps",
      skills: [
        { name: "Git", level: 4, icon: techIcons["Git"] },
        { name: "Linux", level: 3, icon: techIcons["Linux"] },
        { name: "Docker", level: 3, icon: techIcons["Docker"] },
        { name: "VS Code", level: 5, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
        { name: "Adobe XD", level: 4, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-line.svg" },
        { name: "Figma", level: 3, icon: techIcons["Figma"] }
      ]
    },
    {
      name: "Specialized Skills",
      skills: [
        { name: "Cybersecurity", level: 3, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
        { name: "Network Administration", level: 4, icon: techIcons["Linux"] },
        { name: "Arduino/IoT", level: 4, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg" },
        { name: "Game Development (Unity)", level: 2, icon: techIcons["Unity"] },
        { name: "GLSL Shaders", level: 3, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opengl/opengl-original.svg" }
      ]
    }
  ],

  skillLevels: {
    1: "Beginner",
    2: "Basic",
    3: "Intermediate",
    4: "Advanced",
    5: "Expert"
  }
};

const projects = {
  featured: [
    {
      id: "ecommerce-platform",
      title: "Modern E-Commerce Platform",
      description: "A full-stack e-commerce platform built with React and Node.js, featuring real-time inventory management, payment processing, and an admin dashboard for store management.",
      image: "/assets/images/projects/ecommerce-platform.jpg",
      longDescription: `This e-commerce platform represents a comprehensive full-stack development project that demonstrates modern web development practices and real-world business application.

Built using React for the frontend and Node.js with Express for the backend, the platform includes all essential e-commerce features: product catalog browsing, shopping cart functionality, secure user authentication, and integrated payment processing through Stripe.

The admin dashboard provides store owners with powerful tools to manage inventory, process orders, analyze sales data, and handle customer support. Real-time updates ensure that inventory levels are always accurate across all user sessions.

Key technical challenges included implementing secure payment processing, optimizing database queries for fast product searches, and creating a responsive design that works seamlessly across desktop and mobile devices.`,
      technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe API", "JWT", "Tailwind CSS"],
      liveUrl: "https://shop-demo.julius-dev.com",
      githubUrl: "https://github.com/julius-dev/ecommerce-platform",
      featured: true,
      year: "2024",
      status: "completed",
      highlights: [
        "Full-stack MERN application",
        "Integrated payment processing with Stripe",
        "Real-time inventory management",
        "Responsive mobile-first design",
        "Comprehensive admin dashboard"
      ]
    },
    {
      id: "task-manager",
      title: "Collaborative Task Management App",
      description: "A team collaboration tool with real-time updates, project tracking, and integrated communication features built using modern web technologies.",
      image: "/assets/images/projects/task-manager.jpg",
      longDescription: `This task management application was designed to solve the coordination challenges faced by remote development teams.

The application features real-time collaboration capabilities powered by WebSocket connections, allowing team members to see updates instantly as they occur. Users can create projects, assign tasks, set deadlines, and track progress through an intuitive kanban-style interface.

Advanced features include time tracking, project analytics, file sharing, and integrated chat functionality. The application also supports role-based permissions, ensuring that sensitive project information remains secure while maintaining transparency for team coordination.

The frontend is built with Vue.js and uses a component-based architecture for maintainability, while the backend leverages Node.js and Socket.io for real-time functionality. Data persistence is handled through PostgreSQL with optimized queries for fast performance even with large datasets.`,
      technologies: ["Vue.js", "Node.js", "Socket.io", "PostgreSQL", "JWT", "Docker", "AWS"],
      liveUrl: "https://taskflow.julius-dev.com",
      githubUrl: "https://github.com/julius-dev/task-manager",
      featured: true,
      year: "2024",
      status: "completed",
      highlights: [
        "Real-time collaboration with WebSockets",
        "Kanban-style project management",
        "Role-based access control",
        "Integrated team communication",
        "Deployed on AWS with Docker"
      ]
    }
  ],

  other: [
    {
      id: "weather-app",
      title: "Weather Forecast PWA",
      description: "A progressive web app that provides detailed weather forecasts with offline capabilities and location-based services.",
      image: "/assets/images/projects/weather-app.jpg",
      technologies: ["JavaScript", "Service Workers", "OpenWeather API", "Chart.js", "CSS Grid"],
      githubUrl: "https://github.com/julius-dev/weather-pwa",
      liveUrl: "https://weather.julius-dev.com",
      featured: false,
      year: "2023",
      status: "completed"
    },
    {
      id: "budget-tracker",
      title: "Personal Finance Tracker",
      description: "A React-based application for tracking personal expenses with data visualization and budget planning features.",
      image: "/assets/images/projects/budget-tracker.jpg",
      technologies: ["React", "Chart.js", "Local Storage", "CSS Modules", "React Hooks"],
      githubUrl: "https://github.com/julius-dev/budget-tracker",
      liveUrl: "https://budget.julius-dev.com",
      featured: false,
      year: "2023",
      status: "completed"
    },
    {
      id: "recipe-finder",
      title: "AI Recipe Finder",
      description: "A smart recipe discovery app that suggests meals based on available ingredients using machine learning APIs.",
      technologies: ["React", "Python", "Flask", "Spoonacular API", "TensorFlow", "Material-UI"],
      githubUrl: "https://github.com/julius-dev/recipe-finder",
      liveUrl: "https://recipes.julius-dev.com",
      featured: false,
      year: "2024",
      status: "completed"
    },
    {
      id: "crypto-tracker",
      title: "Cryptocurrency Portfolio Tracker",
      description: "Real-time crypto portfolio management with price alerts, profit/loss calculations, and market trend analysis.",
      image: "/assets/images/projects/crypto-tracker.jpg",
      technologies: ["Vue.js", "Node.js", "WebSocket", "CoinGecko API", "Chart.js", "MongoDB"],
      githubUrl: "https://github.com/julius-dev/crypto-tracker",
      liveUrl: "https://crypto.julius-dev.com",
      featured: false,
      year: "2024",
      status: "completed"
    },
    {
      id: "markdown-editor",
      title: "Collaborative Markdown Editor",
      description: "A real-time collaborative markdown editor with live preview, syntax highlighting, and document sharing capabilities.",
      technologies: ["TypeScript", "Socket.io", "Monaco Editor", "Express", "SQLite"],
      githubUrl: "https://github.com/julius-dev/markdown-editor",
      liveUrl: "https://editor.julius-dev.com",
      featured: false,
      year: "2023",
      status: "completed"
    },
    {
      id: "fitness-tracker",
      title: "Fitness & Workout Tracker",
      description: "A comprehensive fitness tracking application with workout planning, progress monitoring, and social features.",
      technologies: ["React Native", "Expo", "Firebase", "Chart.js", "AsyncStorage"],
      githubUrl: "https://github.com/julius-dev/fitness-tracker",
      liveUrl: "", // Mobile app, no live URL
      featured: false,
      year: "2024",
      status: "completed"
    },
    {
      id: "url-shortener",
      title: "URL Shortener Service",
      description: "A fast and reliable URL shortening service with analytics, custom aliases, and QR code generation.",
      technologies: ["Go", "PostgreSQL", "Redis", "Docker", "Nginx", "Bootstrap"],
      githubUrl: "https://github.com/julius-dev/url-shortener",
      liveUrl: "https://short.julius-dev.com",
      featured: false,
      year: "2023",
      status: "completed"
    },
    {
      id: "code-snippet-manager",
      title: "Code Snippet Manager",
      description: "A developer tool for organizing and sharing code snippets with syntax highlighting and search functionality.",
      technologies: ["Svelte", "SvelteKit", "Prisma", "PostgreSQL", "Prism.js", "Tailwind CSS"],
      githubUrl: "https://github.com/julius-dev/snippet-manager",
      liveUrl: "https://snippets.julius-dev.com",
      featured: false,
      year: "2024",
      status: "in-progress"
    },
    {
      id: "quiz-app",
      title: "Interactive Quiz Platform",
      description: "A gamified learning platform with custom quiz creation, real-time multiplayer modes, and progress tracking.",
      technologies: ["Next.js", "Prisma", "MySQL", "Socket.io", "Tailwind CSS", "NextAuth"],
      githubUrl: "https://github.com/julius-dev/quiz-platform",
      liveUrl: "https://quiz.julius-dev.com",
      featured: false,
      year: "2023",
      status: "completed"
    },
    {
      id: "portfolio-website",
      title: "Personal Portfolio Website",
      description: "A modern, responsive portfolio website showcasing my projects and skills with smooth animations and clean design.",
      technologies: ["HTML5", "CSS3", "JavaScript", "GSAP", "Netlify"],
      githubUrl: "https://github.com/julius-dev/portfolio",
      liveUrl: "https://julius-portfolio.dev",
      featured: false,
      year: "2024",
      status: "completed"
    }
  ]
};

const certifications = [
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "March 2024",
    url: "https://aws.amazon.com/certification/certified-cloud-practitioner/",
    description: "Foundational certification covering AWS cloud concepts, core services, security, architecture, pricing, and support."
  },
  {
    name: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    date: "January 2024",
    url: "https://freecodecamp.org/certification/julius-dev/javascript-algorithms-and-data-structures",
    description: "Comprehensive course covering ES6, regular expressions, debugging, data structures, and algorithmic thinking."
  },
  {
    name: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "December 2023",
    url: "https://freecodecamp.org/certification/julius-dev/responsive-web-design",
    description: "Full certification in modern web design including HTML5, CSS3, flexbox, CSS Grid, and responsive design principles."
  }
];

const interests = [
  "Full-Stack Web Development",
  "Cloud Computing & DevOps",
  "Mobile App Development",
  "Open Source Contribution",
  "UI/UX Design",
  "Agile Development Methodologies",
  "Tech Community & Mentoring",
  "Sustainable Technology Solutions"
];

// Social links and contact preferences
const social = {
  github: "julius-dev",
  linkedin: "julius-dev",
  email: "julius@example.com",
  twitter: "julius_codes",
  website: "https://julius-portfolio.dev"
};

// Make variables globally available (removed export for traditional script loading)
