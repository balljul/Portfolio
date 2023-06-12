
<?php
    $navVisibility = 'style="display: none"';
    $openNavVisibility = '';
    $closeNavVisibility = 'style="display: none"';
    $backgroundStatus = 'style="background-image: none;"';


    if($_SERVER["REQUEST_METHOD"] == "POST"){
        if(isset($_POST['openNav']) == TRUE){
            $navVisibility = '"';
            $openNavVisibility = 'style="display: none"';
            $closeNavVisibility = '';
            $backgroundStatus = '';
        }
        if(isset($_SERVER['closeNav']) == TRUE){
            $navVisibility = 'style="display: none';
            $openNavVisibility = '';
            $closeNavVisibility = 'style="display: none"';
            $backgroundStatus = 'style="background-image: none;"';
        }
    }
?>

<nav class="navbar-container">
    <div class="nav-contact">
        <a class="linkedIn-icon" href="https://www.linkedin.com/in/juliusball/"><img class="icon" src="img/Icons/Navbar/linkedin.png" alt="Loading error"></a>
        <a class="git-icon" href="https://github.com/balljul"><img class="icon" src="img/Icons/Navbar/github.png" alt="Loading error"></a>
    </div>

    <div class="nav-content-container" <?php echo $backgroundStatus; ?>>
        <div class="openNavIcon">
            <form action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>" method="POST">
                <button <?php echo $openNavVisibility; ?> type="submit" name="openNav">
                    <img class="icon" src="img/Icons/Navbar/open-nav-albescentwhite.png" alt="Loading Error">
                </button>
                <button <?php echo $closeNavVisibility; ?> type="submit" name="closeNav">
                    <img class="icon" src="img/Icons/Navbar/open-nav-spicymix.png" alt="Loading Error">
                </button>
            </form>
        </div>

        <div class="nav-links" <?php echo $navVisibility; ?>>

            <div class="nav-link-item text-uppercase ">
                <a href="#myself-section"><p class="text-font-semibold">Myself</p></a>
            </div>
            
            <div class="nav-link-item text-uppercase">
                <a href="#skills-section"><p class="text-font-semibold">Skills</p></a>
            </div>
            
            <div class="nav-link-item text-uppercase">
                <a href="#projects-section"><p class="text-font-semibold">Projects</p></a>
            </div>
            
            <div class="nav-link-item text-uppercase">
                <a href="#contact-section"><p class="text-font-semibold">Contact</p></a>
            </div>

        </div>
    </div>
</nav>
