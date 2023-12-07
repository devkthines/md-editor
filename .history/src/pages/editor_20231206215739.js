import { useState, useEffect } from 'react';
import { marked } from 'marked';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { QuestionCircleOutlined, CodeOutlined } from '@ant-design/icons';
import { FloatButton,Modal  } from 'antd';

const App = () => {
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
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
      setIsModalOpen(true);
    };
    const handleOk = () => {
      setIsModalOpen(false);
    };
    const handleCancel = () => {
      setIsModalOpen(false);
    };

    // Modal Two Example
    const [isModalTwoOpen, setIsModalTwoOpen] = useState(false);
    const showModalTwo = () => {
      setIsModalTwoOpen(true);
    };
    const handleOkTwo = () => {
      setIsModalTwoOpen(false);
    };
    const handleCancelTwo = () => {
      setIsModalTwoOpen(false);
    };
return ( <>
    <FloatButton.Group
      shape="circle"
      style={{
        right: 24,
      }}
    >
      <FloatButton icon={<QuestionCircleOutlined />} onClick={showModal}/>

      <FloatButton icon={<CodeOutlined />} onClick={showModalTwo}/>
    </FloatButton.Group>
    <Modal title="Markdown Editor/Previewer FAQs" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
    <>
            <article>
                <section>
                    <header>
                        <h1>What even is Markdown</h1>
                    </header>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                         Non sequi ad enim deleniti accusamus facere itaque commodi autem odit repudiandae.
                          Sunt doloremque, quaerat ut iste et quia laboriosam ab possimus rerum modi?
                        Adipisci consequuntur quidem quas quod aperiam porro odio. Necessitatibus v
                        elit exercitationem, dolore labore nesciunt perferendis quod minima et?</p>
                     <p>for the full breakdown on all things markdown, follow this link: <span><a href="https://www.markdownguide.org/">markdownguide.org</a></span> </p>
                </section>
                <section>
                    <header>
                        <h1>What is Markdown Used for?</h1>
                    </header>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                         Non sequi ad enim deleniti accusamus facere itaque commodi autem odit repudiandae.
                          Sunt doloremque, quaerat ut iste et quia laboriosam ab possimus rerum modi?
                        Adipisci consequuntur quidem quas quod aperiam porro odio. Necessitatibus v
                        elit exercitationem, dolore labore nesciunt perferendis quod minima et?</p>
                </section>
                <section>
                    <header>
                        <h1>What does this App do?</h1>
                    </header>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                         Non sequi ad enim deleniti accusamus facere itaque commodi autem odit repudiandae.
                          Sunt doloremque, quaerat ut iste et quia laboriosam ab possimus rerum modi?
                        Adipisci consequuntur quidem quas quod aperiam porro odio. Necessitatibus v
                        elit exercitationem, dolore labore nesciunt perferendis quod minima et?</p>
                </section>

            </article>
        </>
    </Modal>
    <Modal title="Markdown Preview Examples" open={isModalTwoOpen} onOk={handleOkTwo} onCancel={handleCancelTwo}>
    <div>
            <div id='preview' >
                <span dangerouslySetInnerHTML={{ __html: marked.parse(md.join('\r')) }}></span>

            </div>
        </div>
      </Modal>
    </>
)};


export default function Editor() {
    const [edit, SetEdit] = useState('');
    const [preview, setPreview] = useState('');
    const seePreview = (e) => {
        e.preventDefault();
        console.log(edit);
        setPreview(edit);
        SetEdit('');

    }

    return (<>
    <div className='text-center'>
        <h1>React Markdown Editor</h1>

    <h6>Practice MarkDown</h6>
        <div className='d-flex justify-content-evenly'>
            <App/>
            <Form>
                <Row>
                    <Form.Group as={Col} className="mb-3" controlId="formBasicPassword">
                    <h5>Enter Markdown Here!</h5>
                    <Form.Control value={edit} onChange={(e) => {
                        setPreview('');
                        SetEdit(e.target.value);

                    }} name="edit" id="editor" as='textarea' placeholder="Type Your Markdown here!" rows={3} />
                    </Form.Group>
                        <Button as={Col} disabled={!edit} onClick={seePreview} variant="primary" type="submit">
                    Submit
                </Button>
                </Row>
                <Row>

                </Row>
            </Form>
            <Row>
            <Col>
                <h5>Output</h5>
                <div id="mdEdView" dangerouslySetInnerHTML={{ __html: marked.parse(preview) }}></div>
            </Col>
            </Row>
       </div>
       </div>
       </>
    )
}



