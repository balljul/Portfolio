
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
        <a class="mail-icon" href="mailto:juliusball197@gmail.com"><img class="icon" src="img/Icons/Navbar/mail.png" alt="Loading error"></a>
    </div>

    <div class="nav-content-container" <?php echo $backgroundStatus; ?>>
        <!-- <img class="mobileNav-background" src="img/Backgrounds/Nav-background.png" alt="Error loading"> -->
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

            <div class="nav-link-item text-uppercase">
                <a href="#section-myself"><p>Myself</p></a>
            </div>
            
            <div class="nav-link-item text-uppercase">
                <a href="#section-skills"><p>Skills</p></a>
            </div>
            
            <div class="nav-link-item text-uppercase">
                <a href="#section-projects"><p>Projects</p></a>
            </div>
            
            <div class="nav-link-item text-uppercase">
                <a href="#section-contact"><p>Contact</p></a>
            </div>

        </div>
    </div>
</nav>
