
<?php
    $navVisibility = 'style="display: none"';
    $navStatus = FALSE;
    

    if($_SERVER["REQUEST_METHOD"] == "POST"){
        if(isset($_POST['openNav']) == TRUE){
            switch($navStatus) {
                case FALSE:
                    $navVisibility = "";
                    $navStatus = TRUE;
                    break;
        
                case TRUE:
                    $navVisibility = 'style="display: none"';
                    $navStatus = FALSE;
                    break;
            }
        }
    }

?>

<nav class="navbar-container">
    <div class="nav-contact">
        <a class="linkedIn-icon" href="https://www.linkedin.com/in/juliusball/"><img class="icon" src="img/Icons/Navbar/linkedin.png" alt="Loading error"></a>
        <a class="mail-icon" href="mailto:juliusball197@gmail.com"><img class="icon" src="img/Icons/Navbar/mail.png" alt="Loading error"></a>
    </div>


    <div class="nav-links" <?php echo $navVisibility; ?>>

        <div class="nav-link-item text-uppercase">
            <a href="#section-myself"><p class="text-albWhite">Myself</p></a>
        </div>
        
        <div class="nav-link-item text-uppercase">
            <a href="#section-skills"><p class="text-albWhite">Skills</p></a>
        </div>
        
        <div class="nav-link-item text-uppercase">
            <a href="#section-projects"><p class="text-albWhite">Projects</p></a>
        </div>
        
        <div class="nav-link-item text-uppercase">
            <a href="#section-contact"><p class="text-albWhite">Contact</p></a>
        </div>

    </div>

    <div class="openNavIcon">
        <form action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>" method="POST">
            <button type="submit" name="openNav">
                <img class="icon" src="img/Icons/Navbar/open-nav-albescentwhite.png" alt="Loading Error">
            </button>
        </form>
    </div>


</nav>
