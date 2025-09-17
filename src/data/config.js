const profile = {
  name: "Julius Ball",
  title: "Full Stack Developer & Student",
  tagline: "Building Systems for a living",
  location: "Treffen, Austria",
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
          technologies: ["Google Sheets", "Google Apps Script", "3CX"]
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
  "Rust": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAANlBMVEVHcEwjHx8jHx8jHx8jHx8jHx8jHx8jHx8jHx8jHx8jHx8jHx8jHx8jHx8jHx8jHx8jHx8jHx/pCNtjAAAAEnRSTlMADiSVPKYWSdT14v9atn80x3B9g/IgAAABJklEQVR4AWySgarGIAiFy6alVqv3f9l76gZj4/8gJE+qmOFNDD+JROlivhLR94VILqzmbsoli7zE2pqDnhy0VsPDXRk+SyPxSAh3rvcTZ+raKUpjiTRxsXokqaxu9DRL5spV/sVVLsQYZR0RvDAU3mLMEF/0QOotR4hU/EuM8BVaIlsvvcPHHfASpXTlJSa1bjHAlwPIO9KmasLtMh8zRPhsgNVLDL24XRCRZwaIh1NsogpM26LAq8ABvDcvs9OeyAyTHFCAttMm9VQr0iwT7h06UXk3ROwPK/TA9B0COnn1tcdXiG6AMnLfhPdnfHvw2scMh9mmQpTny8ZsR5PWy/Nl+7O5lioRRaSO3NTqZ010pN7T0LMm3wXbfBfsb5hJk3Cixp8bAALfEoXZ1D8wAAAAAElFTkSuQmCC",
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
  "Strapi": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACiUlEQVR4AaVXQW4TQRAcPgEPytgMZ5DyBiIsRcrBEkASHgBIAG8APmAJXuIDfoIlH/fianrTE2V2S5XNKiNVFI/X3dXVPTvd6XadnNizFwtbOzaOrWPv6BxHBxw2C9lQ4rfdja1s27CN9XJpT1O7lie28C8PbAjGhu/+L+3nGSgLHHqf4dzZ9M7JaYYVaQSaHDmrz2d67vC8V6K4JNqAMjgfpQfbX6fIi8ojRztfeibeKLLpCWy1AuCcE1hqHQxhm2q1G0MrMlULRTll7J0AunkEWA1ylGvOBbGGdJfinEtHioQAJqLHmMyxJwCSUeDi3Ozj5TSur8xOXykCaAkgjZkp9qszs93OYsFGizacyFQ6A4kdM4E37vzHtyBAbhFodxEEIiVC3TIgkHUKVuG8EoCphbECV8PAmAgpoJ0HQAqQV5kCnd7Em+S8UUA4JV4gAgpNCjA4KqcvGZ8/mf36CYfd4Lfj7x+tQKGXFeiSSxx9KEL7GfbhLaviRGKBCcjXd1N3aXBb8XFsjQSBr+H4e0Ngugb0MU8Tb6oWUoE2eEgFIGuA2BXxPnj/DioFtK4vRzbJOaegbuqrefU6VGjxxQvz385sN8LF+f3Hr5ACAuqajajgp4PTsjpr6+q+KxpWLyPFFpP14QRqQUaBhvMHA3fXcRYkJFAJgCLngpM9xTH5n24cVZmRElegcQ4ro8tmIp0dtWR0/qld5xSw7EIB+h77FBPLdPTauO6MStZNSYnjvuW2/JG9vzrC4vlNr8B62BNgftR5HvFGmfXtUHqgbkg6Ekc0T80NYjR7UofT4huFo9DR5kd10XU4jdUOqTGeZ9s69g4az4vsIek2hStTx3Psq82+3gbj+X9LeqPtxkiTtwAAAABJRU5ErkJggg==",
  "C#": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
  "Azure": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
  "Laravel": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAaVBMVEX/////3Nv/cGr/dG7/5uX/+Pf/hYD/paL/nJj/jon//Pz/Y1z/hoD/eXP/6ej/ubf/8vL/sq//iYX/lZH/mZX/y8n/4N//g33/oJz/X1f/MiT/w8H/09H/fnj/kY3/q6j/TkX/WVH/amMDRFxnAAAAr0lEQVR4Ac3JxWHEMAAAwbUtNjNj/z0GPofKOzdiLZ8qCCOBn1QajHX4xAlAmgJkaZg/xaSI8jKVFbi6gTbquOtB55DAMGbAMD3HefmNGGnsHBbWHwuEgsQbG0kxwPoeK+otXJxm3d/jEWWQp2cveYlBd7UA7TXAaxx3ABHO7j1Ktf9uBgrDkwggCM0qgaLhSXAtACtAmRa8KKMMFCzXgofdsDIq8cvWqXb8SfL/vgFFhAm7+9RQWQAAAABJRU5ErkJggg==",
  "Java": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
};

const skills = {
  categories: [
    {
      name: "Programming Languages",
      skills: [
        { name: "JavaScript", level: 4, icon: techIcons["JavaScript"] },
        { name: "PHP", level: 5, icon: techIcons["PHP"] },
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
      id: "dialogstudio",
      title: "DialogStudio",
      description: "Workflow Software for everything an in/outbound callcenter could ever need",
      image: "/assets/images/projects/DS-1.png",
      url: "https://greatbigvalue.com/pages/dialog_studio_software",
      longDescription: ``,
      technologies: ["Laravel", "Hetzner", "Laravel Cloud", "GitHub"],
      featured: true,
      year: "since 2023",
      highlights: [
        "",
      ]
    },
    {
      id: "callbit",
      title: "Callbit Platform",
      description: "A text-to-speech and analysis platform for businesses.",
      image: "/assets/images/projects/CB-1.png",
      url: "https://greatbigvalue.com/pages/callbit_ai_software",
      longDescription: ``,
      technologies: ["Rust", "Hetzner", "K8s", "Docker", "GitHub"],
      featured: true,
      year: "since 2023",
      highlights: [
        "",
      ]
    },
  ],

  other: [
  ]
};

const achievements = {
  certifications: [
    {
      id: "cisco-introduction-to-cybersecurity",
      name: "Cisco Introduction to Cybersecurity",
      issuer: "Cisco",
      date: "2021",
      url: "#",
      description: "Certificate covering the basics of cybersecurity, including network security, threat intelligence, and incident response.",
      icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAM1BMVEX///8AvOva9fwOwOyL4fbh9/1S0vFe1fLt+v72/f41yu/n+f0SwewuyO+G3/YexO1Iz/Ed+DxzAAAAS0lEQVR4AZVNhQHAMAyC1b3/Xzt3jyvgm3CJ1wOuemh7PQ0OGNeUbAQkBQSVpukPrQAlnEcQEKEfRMAnl/pBVP1L7EJGoa39y39pAWsWATQk3kGTAAAAAElFTkSuQmCC",
      type: "certification"
    },
    {
      id: "w3s-php",
      name: "W3Schools PHP Certificate",
      issuer: "w3schools",
      date: "2022",
      url: "https://verify.w3schools.com/1N2IK8G5H1",
      description: "Comprehensive course covering PHP basics, advanced topics, and best practices.",
      icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAYFBMVEX///+63c6gz7um0sCr1cSv18aYzLYmonRjtpTB4NP4/Pvu9/PT6eA3pnyFxKoAkFcAlV8AklpruZoAlV4AmmgAmGTi8evl8+4AiUmLx69Yso612ssupHgLnWxBqYHK5dqH3wIXAAAAq0lEQVR4AdzLgwEDQRRF0bu27f67zJuYDeQMv/gDlu24/OL5QYiI63luBMSup1+CpBlXeVGWhXK+3rKqkazxuCrbtquJm9aoemQYubJVLZJJt3QzTOlScXPOtbJ2Gk1xtiDlxm1UVa0h0Gfn1dYapY9VafTghXLSAauelVeBGXSAw4xavDC5DWPv2sblhXLVgpFWbcCbtLil5iLi3X4aTEhMFjMmxJFYQxIAAFFuC1yESb31AAAAAElFTkSuQmCC",
      type: "certification"
    },
    {
      id: "redhat-system-administration-ii",
      name: "Redhat System Administration II",
      issuer: "redhat-enterprise-linux",
      date: "2023",
      url: "#",
      description: "Advanced course for Linux Administration, covering system administration, networking, security and several other topics.",
      icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACh0lEQVR4AWIYEmAUvGNgYATQXg9hckRRGIZPxoqziW3btm3bySa2bdu2bW1i2xx3T5x05uZbVAdtLt7n3rqF85erkAhhJuOpUAGZEeDNAHVwEefQHzlQDmfxFS+xAx2QFgk8WTwNbkJpDHiPGCgTBjzAZOSBjycCtIMByklvMBYp3Cnuj21QLorHMgS6GiAn3kC5IRx5XQ3QG8pNv9Da6eKrRYIiRA64HQCY6VRxxdWbVaT0JpFIvWcCnESIrUPth/zohUVxIru7iNzOxkV0Gh4I8QqZrRVPhikIRzxULDpz7oQ2J2M7tHGd6wG+RYvUthZgEn5CGemxgAB+tILkBBiIe9C7ECQat0RGWgtwH+pfsXhBsXoQLYQP8jI9HXfAMirOgTCxeI8xXAeHRTJaCvAIypQOtylUEwnoi8YXWRnrgW24g3DotED/0mk7MgElRQwPRe5xBHuy/dB/A6yAshbiCSv3QxJoIQAEIhPjVTld3TGa/izauZzSSfR70i9K689y6egTlqDynW0vRwpjgEJ4bCtEFPawci2EaUHsMFumBmNvEas9orEYocYQbaCDskaPd1qQDuxNZtoAe0GQAIVY9hRMrpfP6GwM4IseiLZ3QekRjTtscAsGE6Y+itDPSptBk5vp2rTTcM+0uAaX/r0WfNAQD6Ds0SEOekTiFUUe4q5QEE/pRzBu57aNsHRX5MIGfIFyVKxGB9Bn3L4X1p4NwWiGC/gB5SUb7L2Ok6MDzuALlAc9RylHvwsSoxZW4il+QrnhDZq58oHiiwxoiaW4gmgYHPw8C8cmlEACdz9WfZAUBdAMw7AEO3EUp3AE2zALnZEPgd7+ifFDIH6PA0ozMwxmMAoAeMXZ15G46mMAAAAASUVORK5CYII=",
      type: "certification"
    },
  ],

  contests: [
    {
      id: "kelag-hackathon-2025",
      name: "Kelag Hackathon 2025",
      organizer: "Kelag",
      date: "June 2025",
      achievement: "1st Place",
      url: "",
      description: "48-hour hackathon focused on building a fullstack application in C#.",
      icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAMAAACelLz8AAAAYFBMVEX///84h0rv9PBal2cjgDro7+k9iU7e6OAsg0FHjlf2+fZKj1nJ2szr8u2zzLiqxq9TlGGKspK70cAHeSsUfDHS4dUvhESBrYk7iU1mnXEdfjZ0pX4Pei5gmmzb596St5koaea6AAAAhElEQVQokd3QvRaCMAwF4Nv0L7RUilDQovD+b0k9ZUOPO3dIhi8ZEuC6uf0m5Wrv+ETTpxCVmRMJy7oTsS90H9iQ5bFJlfyYyqbsiQu6TELDt5VMP+NBqc0mGIDDADwPylgm2cjoFC/Ri9ds3uogDawIFggOViOsWvv0/ZhN5e3/N66YHVRSBNIpA/TuAAAAAElFTkSuQmCC",
      type: "contest",
      technologies: ["C#", "Azure", "GitHub"]
    },
    {
      id: "priorit-hackathon",
      name: "PriorIt Hackathon",
      organizer: "PriorIt",
      date: "Summer 2024",
      achievement: "2nd Place",
      url: "",
      description: "Full Day Hackathon focused on building a fullstack application.",
      icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAV1BMVEVHcEymIzumIzumIzumIzumIzumIzumIzumIzumIzumIzumIzumIzv///+hASmjFTKgACPiwcamITmjCC3EfYj9+frdt7y9aXbKjJXnys7Plp7t2Nu0UWA4wvZmAAAADHRSTlMAd4/rqVDEG9o+ZCzYLq5qAAAAzklEQVQokYXSWRaDIAwFUKiAU5i0dez+11kDTkTbvj+9JzEQGaOp5UNk1eU1Y1IUgLlaFWGJpMRhjyCUF3BKlicGJOUJqQEctbFn24I1GIud9wNE67yZuiW+R+VJodPazRozIEIyjXtp1w+z7oZ3c8zEd2yt8/ppgsEjoDiwMQva+KwCqnss/uPPtvwe40D1Pa57y7ZLSHDbcrw+P9rGTmNvT1330hZPb01aeLPOZKElteQPq7/Wne8JQ3+wdeFhzJza+lHFaypoSnB5KfkAh+kZAEbVGrkAAAAASUVORK5CYII=",
      type: "contest",
      technologies: ["PHP", "Laravel", "GitHub", "JavaScript", "Docker"]
    },
    {
      id: "knapp-coding-contest",
      name: "Knapp Coding Contest 2025",
      organizer: "Knapp Graz",
      date: "2025",
      achievement: "Place 17 of ~120",
      url: "",
      description: "Full Day Hackathon focused on building an optimized Algorithm",
      icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAYFBMVEX///+goKBhYWFnZ2dpaWhmZmTCwsKxsbG4uLicnJu2trSlpaO0tLOrq6mVlZPR0dGNjY2QkJDY2NdAQD/w8PDHx8aFhYWqqqpwcHBtbW3z8/OAgIDk5OTLy8v4+PVkZGcnf7QbAAAAlUlEQVR4Ae3PxQHEIBAF0I87xF3673Iha8c0kIc7g8c9QhkXXAgm3ji/CkEhlTbWWe+8t9b7EKO1LsaEokLdoO1ggF7nEvWASo4jinrKm6qpLA4VIGU3Y1iaCsWaJqDaagLSLQZ9pTpUo8alwj7myriDSnl2fXPNZf8P5Z8EE6MZR+V9/pzav6EwwQqe5UaUsCjBrccLXQ0HKpQzs8AAAAAASUVORK5CYII=",
      type: "contest",
      technologies: ["Java"]
    },
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
window.techIcons = techIcons;
