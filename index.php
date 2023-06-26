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

    <div class="skills-section" id="skills-section">
        <h1 class="text-spicyMix text-font-semibold ">My current Skillset</h1>
        <!-- <h2>Not yet responsive</h2> -->

        <div class="skill-legend text-font-semibold text-albWhite"> 
            <div class="legend-item">
                <?php echo $progress5; ?>
                <p>Means I know it really well. If it is a tool it means I use it really often and know it very well.</p>
            </div>
            <div class="legend-item">
                <?php echo $progress4; ?>
                <p>Means I can use it, but there is still a lot to learn. If it is a tool it means i regulary use it and know more than just the basics</p>
            </div>
            <div class="legend-item">
                <?php echo $progress3; ?>
                <p>Means I know the basics and sometimes use it if it is a tool</p>
            </div>
            <div class="legend-item">
                <?php echo $progress2; ?>
                <p>Means i know what it is and that i am currently learning it.</p>
            </div>
            <div class="legend-item">
                <?php echo $progress1; ?>
                <p>Means i plan on learning it in the future</p>
            </div>
    	
        </div>



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

        <div class="skill-subsection text-font-semibold text-albWhite">
            <h2 class="text-font-semibold text-spicyMix center text-center"><<span>Database</span>></h2>
        
            <div class="skill ">
                <p>MySQL</p>
                <?php echo $progress3; ?>
            </div>

        </div>

        <div class="skill-subsection text-font-semibold text-albWhite">
            <h2 class="text-font-semibold text-spicyMix center text-center"><<span>Cybersecurity</span>></h2>
        
            <div class="skill ">
                <p>Linux</p>
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

        <div class="skill-subsection text-font-semibold text-albWhite">
            <h2 class="text-font-semibold text-spicyMix center text-center"><<span>System Programming</span>></h2>
        
            <div class="skill ">
                <p>Arduino C/C++</p>
                <?php echo $progress4; ?>
            </div>

            <div class="skill">
                <p>Rasperry Pi</p>
                <?php echo $progress1; ?>
            </div>

            <div class="skill">
                <p>Network Building</p>
                <?php echo $progress4; ?>
            </div>

        </div>

        <div class="skill-subsection text-font-semibold text-albWhite">
            <h2 class="text-font-semibold text-spicyMix center text-center"><<span>Game Development</span>></h2>
        
            <div class="skill ">
                <p>Unity</p>
                <?php echo $progress2; ?>
            </div>

            <div class="skill">
                <p>Gamemaker Studio</p>
                <?php echo $progress1; ?>
            </div>

            <div class="skill">
                <p>Unreal Engine</p>
                <?php echo $progress1; ?>
            </div>

        </div>

        <div class="skill-subsection text-font-semibold text-albWhite">
            <h2 class="text-font-semibold text-spicyMix center text-center"><<span>Graphics Programming</span>></h2>
        
            <div class="skill ">
                <p>GLSL</p>
                <?php echo $progress3; ?>
            </div>

            <div class="skill">
                <p>HLSL</p>
                <?php echo $progress1; ?>
            </div>

        </div>
    </div>
 
</body>
</html>