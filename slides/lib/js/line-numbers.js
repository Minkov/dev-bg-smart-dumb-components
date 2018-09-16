Reveal.addEventListener('slidechanged', function (event) {
    // For any code blocks with the class 'line-numbers'.
    $('code.line-numbers').each(function () {
        // Check if highlight js has already run and not already added line numbers
        if ($(this).hasClass('hljs') && ($(this).html().indexOf('class="line-number') < 1)) {
            // ...
        }
    });
});

Reveal.addEventListener('slidechanged', function (event) {
    // For any code blocks in the current slide with class 'line-numbers'.
    $('code.line-numbers').each(function () {
        // Check if highlight js has already run and not already added line numbers
        if ($(this).hasClass('hljs') && ($(this).html().indexOf('class="line-number') < 1)) {
            // Get the content of the code block.
            var content = $(this).html();
            // Split the content on new lines "\n".
            content = content.split("\n");
            // Re-join the content with line number spans after the new line.
            content = content.join("\n<span class='line-number'> ");
            // Prefix with a line number for the first line.
            content = '<span class="line-number"> ' + content;
            // Replace the content of the code block with the new content.
            $(this).html(content);
        }
    });
});