import { useState, useEffect } from 'react';
import { marked } from 'marked'
export default function Preview() {
    const [md, setMd] = useState(
    //     {
    //     h1text: '# This is H1 Text',
    //     h2text: '## This is H1 Text',
    //     linkEx: '[Link Example](https://www.markdownguide.org/basic-syntax/#links)',
    //     inlineEx: 'this is an inline code `example`',
    //     codeBlock: '    <html>    <head>    </head>    </html>',
    //     listItem: '1. First item',
    //     listItem2: '2. Second item',
    //     listItem3: '3. Third item',
    //     listItem4: '4. Fourth item',
    //     blockQuote: '> Dorothy followed her through many of the beautiful rooms in her castle.',
    //     imgPrev: '![The San Juan Mountains are beautiful!](/assets/images/san-juan-mountains.jpg "San Juan Mountains")',
    //     boldText: 'I just love **bold text**.',
    // },

    [
        '# This is H1 Text',
        '## This is H2 Text',
        '[Link Example](https://www.markdownguide.org/basic-syntax/#links)',
         'this is an inline code `example`',
        '    <html>    <head>    </head>    </html>',
        '1. First item',
       '2. Second item',
        '3. Third item',
         '4. Fourth item',
    '> Dorothy followed her through many of the beautiful rooms in her castle.',
      '![The San Juan Mountains are beautiful!](/assets/images/san-juan-mountains.jpg "San Juan Mountains")',
       'I just love **bold text**.',
    ]
    )
    return (
        <div>
            <h1>Markdown Preview Examples</h1>
            <div id='example'>
                <p>

                </p>
            </div>
            <div id='preview' >
                <span dangerouslySetInnerHTML={{ __html: marked.parse(md.join('\r')) }}></span>

            </div>
        </div>
    )
}