function formatInline(text) {
    return text
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/`(.*?)`/g, '<code>$1</code>');
}

export function parseMarkdown(text) {
    if (!text) return '';

    const normalized = String(text).replace(/\r\n/g, '\n').trim();
    if (!normalized) return '';

    const lines = normalized.split('\n');
    const blocks = [];
    let paragraphLines = [];
    let listType = null;
    let listItems = [];

    const flushParagraph = () => {
        if (!paragraphLines.length) return;
        blocks.push(`<p>${formatInline(paragraphLines.join('<br>'))}</p>`);
        paragraphLines = [];
    };

    const flushList = () => {
        if (!listItems.length || !listType) return;
        blocks.push(
            `<${listType}>${listItems.map((item) => `<li>${formatInline(item)}</li>`).join('')}</${listType}>`
        );
        listType = null;
        listItems = [];
    };

    lines.forEach((rawLine) => {
        const line = rawLine.trim();

        if (!line) {
            flushParagraph();
            flushList();
            return;
        }

        const headingMatch = line.match(/^(#{1,3})\s+(.*)$/);
        if (headingMatch) {
            flushParagraph();
            flushList();
            const level = Math.min(headingMatch[1].length + 2, 5);
            blocks.push(`<h${level}>${formatInline(headingMatch[2])}</h${level}>`);
            return;
        }

        const unorderedMatch = line.match(/^[-*]\s+(.*)$/);
        if (unorderedMatch) {
            flushParagraph();
            if (listType && listType !== 'ul') flushList();
            listType = 'ul';
            listItems.push(unorderedMatch[1]);
            return;
        }

        const orderedMatch = line.match(/^\d+\.\s+(.*)$/);
        if (orderedMatch) {
            flushParagraph();
            if (listType && listType !== 'ol') flushList();
            listType = 'ol';
            listItems.push(orderedMatch[1]);
            return;
        }

        flushList();
        paragraphLines.push(line);
    });

    flushParagraph();
    flushList();

    return blocks.join('');
}
