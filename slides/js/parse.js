const getMarkdown = async () => {
    const markdownUrl = 'README.md';
    const res = await fetch(markdownUrl);
    return res.text();
}

const parseAttributesFrom = (line) => {
    if (!line.includes('{')) {
        return '';
    }
    const from = line.indexOf('{') + 1;
    const to = line.indexOf('}');
    return line.substring(from, to);
}

const parseToSlides = (markdown) => {
    const slides = [];
    let currentSlide;
    markdown.split('\n')
        .filter(line => line.trim() !== '')
        .forEach(line => {
            if (line.startsWith('<!-- slide')) {
                if (currentSlide) {
                    slides.push(currentSlide);
                }

                const attributes = parseAttributesFrom(line);
                currentSlide = {
                    lines: [],
                    attributes,
                };
            } else {
                currentSlide.lines.push(line);
            }
        });

    if (currentSlide) {
        slides.push(currentSlide);
    }

    return slides;
};

const toSlideComponent = (slide) => {
    let {
        lines,
        attributes
    } = slide  ;

    const content = lines.join('\n');

    return `
<section ${attributes} data-markdown>
    <script type="text/slide">
        ${content}
    </script>
</section>`
};

(function () {
    const run = async () => {
        const markdown = await getMarkdown();
        const slides = parseToSlides(markdown);
        const slideComponents = slides.map(slide => toSlideComponent(slide));
        const content = slideComponents.join("");
        const slidesContainer = document.getElementById('slides-container');
        console.log(slidesContainer);
        slidesContainer.innerHTML = content;
    };

    run();
}());