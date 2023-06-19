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
        $progress1 = '<img src="img/Icons/Skills/Progress-Bar-1.png" alt="Error loading image" class="progress1">';
        $progress2 = '<img src="img/Icons/Skills/Progress-Bar-2.png" alt="Error loading image" class="progress2">';
        $progress3 = '<img src="img/Icons/Skills/Progress-Bar-3.png" alt="Error loading image" class="progress3">';
        $progress4 = '<img src="img/Icons/Skills/Progress-Bar-4.png" alt="Error loading image" class="progress4">';
        $progress5 = '<img src="img/Icons/Skills/Progress-Bar-5.png" alt="Error loading image" class="progress5">';

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
        <h2>Not yet responsive</h2>

        <div class="skill-subsection">
            <h2 class="text-font-semibold text-spicyMix center text-center"><<span>Design</span>></h2>
        
            <div class="skill text-font-semibold text-albWhite">
                <?php echo $progress4; ?>
                <p>Adobe XD</p>
            </div>

            <div class="skill">
              <?php echo $progress3; ?>
            </div>

            <div class="skill">
              <?php echo $progress3; ?>
            </div>

            <div class="skill">
             <?php echo $progress4; ?>
            </div>

            <div class="skill">
                <?php echo $progress5; ?>
            </div>

        </div>


    </div>
 
</body>
</html>