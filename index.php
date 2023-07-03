<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/styles.css">
    <link rel="shortcut icon" href="img/Page-icon/icon.svg" type="image/x-icon">
    <title>Julius Ball</title>
</head>
<body class="home-container text-font-normal">

<?php
        include 'php/navbar.php';
        $progress1 = '<div class="progressBar-container"><img src="img/Icons/Skills/Progress-Bar-1.png" alt="Error loading image" class="progress1"></div>';
        $progress2 = '<div class="progressBar-container"><img src="img/Icons/Skills/Progress-Bar-2.png" alt="Error loading image" class="progress2"></div>';
        $progress3 = '<div class="progressBar-container"><img src="img/Icons/Skills/Progress-Bar-3.png" alt="Error loading image" class="progress3"></div>';
        $progress4 = '<div class="progressBar-container"><img src="img/Icons/Skills/Progress-Bar-4.png" alt="Error loading image" class="progress4"></div>';
        $progress5 = '<div class="progressBar-container"><img src="img/Icons/Skills/Progress-Bar-5.png" alt="Error loading image" class="progress5"></div>';

?>



    <!-- Header Seciton -->
    <div class="header-section">
        <div class="header-title-container text-albWhite">
            <h1 class="text-font-normal">Hi.</h1>
            <h2 class="text-font-semibold">I am <span class="text-breaker"><br></span> <span class="text-spicyMix">Julius Ball</span>.</h2>
            <p class="text-font-semibold">I aspire to be a <span class="text-spicyMix">full stack Developer</span>.</p>
        </div>

        <div class="header-arrow">
            <a href="#myself-section">
                <img src="img/Icons/Header/arrow-down.png" alt="Error loading Image">
            </a>
        </div>
    </div>

    <!-- Myself Section -->
    <div class="myself-section text-albWhite text-font-semibold" id="myself-section">

        <h1 class="text-font-semibold text-spicyMix text-center">Welcome to my portfolio website!</h1>
        
        <!-- All the Texts -->
        <div class="text-section text-albWhite">
            <p>
                Welcome to my portfolio website! I'm excited to have you here. Let me introduce myself. I'm a 16-year-old student at HTL Villach IT, where my passion for technology has flourished. Since a young age, I've been captivated by various technologies, constantly exploring and learning about their intricacies.
            </p>
        </div>
        <div class="text-section text-albWhite">
            <p>    
                One area of fascination for me is artificial intelligence (AI), but my interests extend beyond that. I find myself drawn to a diverse range of technologies, including embedded systems, back-end and front-end development, and design. Each of these fields offers unique opportunities for innovation and problem-solving.
            </p>
        </div>
        <div class="text-section text-albWhite">
            <p>
                As I continue my journey at HTL, I actively engage in personal projects that allow me to enhance my skills and broaden my technological knowledge. Whether it's coding, designing, or diving into the complexities of hardware, I derive immense joy from the entire creative process.
            </p>
        </div>
        <div class="text-section text-albWhite">
            <p>
                This portfolio website serves as a platform to showcase my experiences, projects, and growth in the world of technology. From developing cutting-edge software solutions to exploring the intricacies of AI algorithms and delving into the realms of back-end and front-end development, I am always eager to take on new challenges and expand my horizons.
            </p>
        </div>
        <div class="text-section text-albWhite">
            <p>
                Thank you for visiting my portfolio website, and I invite you to explore my work. If you have any questions or would like to collaborate on a project, please don't hesitate to reach out to me. Let's embark on this technological journey together!
            </p>
        </div>

    </div>

    <!-- Skills Section -->
    <div class="skills-section" id="skills-section">
        <h1 class="text-spicyMix text-font-semibold ">My current Skillset</h1>

        <!-- Legende -->
        <div class="skill-legend text-font-semibold text-albWhite"> 
            <div class="legend-item">
                <?php echo $progress5; ?>
                <p>Experienced usage</p>
            </div>
            <div class="legend-item">
                <?php echo $progress4; ?>
                <p>Regular usage</p>
            </div>
            <div class="legend-item">
                <?php echo $progress3; ?>
                <p>Basic knowledge + experience</p>
            </div>
            <div class="legend-item">
                <?php echo $progress2; ?>
                <p>basic knowledge</p>
            </div>
            
    	
        </div>

        <!--    Skills   -->

        <!-- Design -->
        <div class="skill-subsection text-font-semibold text-albWhite">
            <h2 class="text-font-semibold text-spicyMix center text-center"><<span>Design</span>></h2>

            <div class="skill ">
                <p>Adobe XD</p>
                <?php echo $progress4; ?>
            </div>

            <div class="skill">
                <p>Adobe Illustrator</p>
                <?php echo $progress3; ?>
            </div>

            <div class="skill">
                <p>Font Awesome</p>
                <?php echo $progress3; ?>
            </div>

            <div class="skill">
                <p>Canva</p>
                <?php echo $progress4; ?>
            </div>

        </div>
        <!-- frontEnd -->
        <div class="skill-subsection text-font-semibold text-albWhite">
            <h2 class="text-font-semibold text-spicyMix center text-center"><<span>frontEnd</span>></h2>
        
            <div class="skill ">
                <p>HTML</p>
                <?php echo $progress5; ?>
            </div>

            <div class="skill">
                <p>Vanilla CSS</p>
                <?php echo $progress5; ?>
            </div>

            <div class="skill">
                <p>LESS</p>
                <?php echo $progress5; ?>
            </div>

            <div class="skill">
                <p>Scss and Sass</p>
                <?php echo $progress4; ?>
            </div>


            <div class="skill">
                <p>Tailwind Css</p>
                <?php echo $progress2; ?>
            </div>

            <div class="skill">
                <p>Javascript</p>
                <?php echo $progress4; ?>
            </div>

            <div class="skill">
                <p>Anime.js</p>
                <?php echo $progress3; ?>
            </div>

            <div class="skill">
                <p>Bootstrap</p>
                <?php echo $progress4; ?>
            </div>
        </div>
        <!-- backEnd -->
        <div class="skill-subsection text-font-semibold text-albWhite">
            <h2 class="text-font-semibold text-spicyMix center text-center"><<span>backEnd</span>></h2>
        
            <div class="skill ">
                <p>PHP</p>
                <?php echo $progress4; ?>
            </div>

            <div class="skill">
                <p>Laravel</p>
                <?php echo $progress2; ?>
            </div>

            <div class="skill">
                <p>SQL</p>
                <?php echo $progress4; ?>
            </div>

            <div class="skill">
                <p>Google Apps Script</p>
                <?php echo $progress5; ?>
            </div>

        </div>
        <!-- Database -->
        <div class="skill-subsection text-font-semibold text-albWhite">
            <h2 class="text-font-semibold text-spicyMix center text-center"><<span>Database</span>></h2>
        
            <div class="skill ">
                <p>MySQL</p>
                <?php echo $progress3; ?>
            </div>

        </div>
        <!-- Cybersecurity -->
        <div class="skill-subsection text-font-semibold text-albWhite">
            <h2 class="text-font-semibold text-spicyMix center text-center"><<span>Cybersecurity</span>></h2>
        
            <div class="skill ">
                <p>Linux</p>
                <?php echo $progress3; ?>
            </div>

            <div class="skill ">
                <p>Docker</p>
                <?php echo $progress3; ?>
            </div>

            <div class="skill">
                <p>Hacking</p>
                <?php echo $progress2; ?>
            </div>

            <div class="skill">
                <p>Network Building</p>
                <?php echo $progress4; ?>
            </div>

        </div>
        <!-- System Programming -->
        <div class="skill-subsection text-font-semibold text-albWhite">
            <h2 class="text-font-semibold text-spicyMix center text-center"><<span>System Programming</span>></h2>
        
            <div class="skill ">
                <p>Arduino C/C++</p>
                <?php echo $progress4; ?>
            </div>

            <div class="skill">
                <p>Network Building</p>
                <?php echo $progress4; ?>
            </div>

        </div>
        <!-- Game Development -->
        <div class="skill-subsection text-font-semibold text-albWhite">
            <h2 class="text-font-semibold text-spicyMix center text-center"><<span>Game Development</span>></h2>
        
            <div class="skill ">
                <p>Unity</p>
                <?php echo $progress2; ?>
            </div>

        </div>
        <!-- Graphics Programming -->
        <div class="skill-subsection text-font-semibold text-albWhite">
            <h2 class="text-font-semibold text-spicyMix center text-center"><<span>Graphics</span>></h2>
        
            <div class="skill ">
                <p>GLSL</p>
                <?php echo $progress3; ?>
            </div>

        </div>  
        <!-- Certificates -->
        <div class="skill-subsection text-font-semibold text-albWhite">
            <h2 class="text-font-semibold text-spicyMix center text-center"><<span>Certificates</span>></h2>
        
            <div class="skill-certificate">
                <p>W3Schools PHP Certificate</p>
            </div>
            
            <div class="skill-certificate">
                <p>Cicso Introduction to Cybersecurity</p>
            </div>
        </div>
    </div>

    <!-- Project Section -->
    <div class="projects-section" id="projects-section">
     <h1 class="text-spicyMix text-font-semibold center text-center">My Projects</h1>
        <div class="projects-grid">

            <!-- Techbird Project -->
            <div class="project size-three" id="techbird-project">
                <div class="overlay">
                    <div class="overlay-text">
                        <p>The Website was made for a School Project and is based on a Styleguide i made a few months ealier. It also has an Admin Page which lets an Admin see the job applications and also create, duplicate or delete job offers</p>
                        <p>It took around 250 hours including planning, designing and coding. When entering the Website there is a password Protection because of copyright. The login is <span class="text-softSpice">user: 2BHITMN pw: ITP202223</p>
                        <p>It is open Source. You can see the Project on my Github.</p>
                        <p>The Resouce Page is linked in the footer of the Techbird Homepage.</p>
                        <a href="https://techbird.juliusball.com"><button><p>Visit the Page</p></button></a>
                    </div>
                    
                </div>
            </div>
              <!-- GBV Projects -->
              <div class="project size-three" id="gbv-project">
                <div class="overlay">
                    <div class="overlay-text">
                        <p>In the past year i built several software solutions for the Great Big Value GMBH.</p>
                        <p>I built those applications using Google Apps Script</p>
                        <p>For example i built a time recording system, which also gives managers the possibility to see the statistics of every employee.</p>
                        <p>I also made a Dashboard which displays weekly statistics. This Dashboard also uses the Slack Api to send messages into company text channels. Also once a week it sends the statistics to specific people.</p>
                    </div>
                </div>
            </div>

             <!-- Arduino Project -->
             <div class="project size-one" id="arduino-project">
                <p class="center text-center text-albWhite project-title">Future Arduino Project</p>
                <div class="overlay">
                    <div class="overlay-text">
                        <p>In the near future I plan on doing a little project with the arduino</p>
                        <p>It will probably be a little robot which can be controlled via a controller or something.</p>
                    </div>
                </div>
            </div>

            <!-- GLSL Project -->
            <div class="project size-one" id="glsl-project">
                <p class="center text-center text-albWhite project-title">Future GLSL Project</p>
                <div class="overlay">
                    <div class="overlay-text">
                        <p>I plan on learning more about GLSL and possibly HLSL. With the knowledge I want to make a rather complex shader.</p>
                        <p>Currently i can only do simple things like color gradients or simple moving shapes.</p>
                        <p>I can also just make 2D things.</p>
                    </div>
                </div>
            </div>

            <!-- Unity 2D Project -->
            <div class="project size-one" id="unity-project">
             <p class="center text-center text-albWhite project-title">Future Unity 2D Game</p>
             <div class="overlay">
                <div class="overlay-text">
                    <p>I think Game Developement is extremely interresting as it gives you the possibility to create endless wordls and make whatever you want into a game.</p>
                    <p>The plan for this project is to make a 2D Game with fights, exporation and more. the second goal is to learn more about game and character design.</p>
                </div>
             </div>
            </div>
            

        </div>
    </div>

    <!-- Contact Section -->
    <div class="contact-section text-font-semiblod" id="contact-section">
         <h1 class="text-spicyMix text-font-semibold center text-center">Contact and more</h1>
            <p class="text-albWhite"><span class="text-spicyMix">Mail:</span> contact@juliusball.com</p>
            <p class="text-albWhite"><span class="text-spicyMix">Linkedin: </span><a href="https://www.linkedin.com/in/juliusball/"> Julius Ball</a></p>
            <p class="text-albWhite"><span class="text-spicyMix">Github: </span><a href="https://github.com/balljul"> balljul</a></p>
        </div>

</body>
</html>
