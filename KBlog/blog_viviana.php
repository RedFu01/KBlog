<!DOCTYPE html>
<?php
include "../blogHead.php";
?>
<html>
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, user-scalable=no">
    <title>Viviana Vitomarco</title>
    <link rel="stylesheet" href="resrc/less/all.css" />
    <link href="http://fonts.googleapis.com/css?family=Open+Sans+Condensed:300" rel="stylesheet" type="text/css">
    <link href="http://fonts.googleapis.com/css?family=Raleway:100" rel="stylesheet" type="text/css">

</head>
<body>
    <header>
        <nav>
            <a href="blog_annika.html"><img src="Media/nav-1.jpg" /><span>ANNIKA</span></a><a href="blog_viviana.html"><img src="Media/nav-2.jpg" /><span>VIVIANA</span></a>
        </nav>
    </header>
    <div class="main">
        <!-- BLOG HEADLINE -->
        <h1>VIVIANA VITOMARCO</h1>
        <span class="email"><a href="mailto:viviana_vitomarco@the-sense-of-fashion.com">viviana_vitomarco@the-sense-of-fashion.com</a></span>

        <!-- Start Blogpost-->
        
        <!-- End Blogpost -->
        <!-- Start Blogpost-->
            <?php
                $renderer->renderBlogPost($postContents);
            ?>
        <section class="blogpost" data-template-id="1" data-content-id="1">
            <h2 data-field-name="headline">jungle</h2>
            <span data-field-name="date">6/05/2014</span>

            <article data-array-name="content" data-array-index="0">
                a little throw back thursday post
                <br />
                xx
            </article>
            <figure>
                <img data-array-name="content" data-array-index="1" src="Media/image-1.jpg" alt="" />
                <figcaption>
                    Image Description 1
                </figcaption>
            </figure>
            <figure>
                <img data-array-name="content" data-array-index="2" src="Media/image-2.jpg" />
                <figcaption>
                    Image Description 2
                </figcaption>
            </figure>
            <figure>
                <img data-array-name="content" data-array-index="3" src="Media/image-3.jpg" />
                <figcaption>
                    Image Description 3
                </figcaption>
            </figure>
            <!-- Edited url parameters for soundcloud -->
            <iframe data-field-name="soundcloud" width="100%" height="150" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/102385010&amp;auto_play=false&amp;hide_related=true&amp;show_comments=false&amp;show_user=false&amp;show_reposts=false&amp;visual=true"></iframe>
            <div class="social-media">
                <span class="facebook"></span>
                <span class="twitter"></span>
                <span class="pinterest"></span>
                <span class="google"></span>
            </div>
        </section>
        <!-- End Blogpost -->
    </div>
    <footer>
        POWERD BY KnK
    </footer>
</body>
</html>
