class HeroTeaser {
    source: string = null;
    alternative: string = null;

    constructor(source, alternative) {
        this.source = source;
        this.alternative = alternative;
        $.tmpl(this.heroTeaser, this.heroImg).appendTo("main");
    }
    heroTeaser: string = "<section class=\"heroTeaser\"><img src = \"${src}\" alt =\"${alt}\"/></section >";
    heroImg = {
        src: this.source,
        alt: this.alternative
    }
}