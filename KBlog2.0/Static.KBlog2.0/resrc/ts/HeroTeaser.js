var HeroTeaser = (function () {
    function HeroTeaser(source, alternative) {
        this.source = null;
        this.alternative = null;
        this.heroTeaser = "<section class=\"heroTeaser\"><img src = \"${src}\" alt =\"${alt}\"/></section >";
        this.heroImg = {
            src: this.source,
            alt: this.alternative
        };
        this.source = source;
        this.alternative = alternative;
        $.tmpl(this.heroTeaser, this.heroImg).appendTo("main");
    }
    return HeroTeaser;
})();
//# sourceMappingURL=heroTeaser.js.map
