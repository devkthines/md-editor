import { useState, useEffect } from 'react';
import { marked } from 'marked';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { QuestionCircleOutlined, CodeOutlined } from '@ant-design/icons';
import { FloatButton,Modal  } from 'antd';

const App = () => {
 ( <>
    <FloatButton.Group
      shape="circle"
      style={{
        right: 24,
      }}
    >
      <FloatButton icon={<QuestionCircleOutlined />} />
      <FloatButton icon={<CodeOutlined />}/>
    </FloatButton.Group>
    </>
});


export default function Editor() {
    const [edit, SetEdit] = useState('');
    const [preview, setPreview] = useState('');
    const seePreview = (e) => {
        e.preventDefault();
        console.log(edit);
        setPreview(edit);
        SetEdit('');

    }

    return (<> <h1>Practice MarkDown</h1>
        <div className='d-flex justify-content-evenly'>
            <App/>
            <Form>
                <Row> <Form.Group as={Col} className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Enter Markdown Here!</Form.Label>
                    <Form.Control value={edit} onChange={(e) => {
                        setPreview('');
                        SetEdit(e.target.value);

                    }} name="edit" id="editor" as='textarea' placeholder="Type Your Markdown here!" rows={3} />
                </Form.Group></Row>
                <Row><Button as={Col} disabled={!edit} onClick={seePreview} variant="primary" type="submit">
                    Submit
                </Button></Row>


            </Form>
            <div id="mdEdView" dangerouslySetInnerHTML={{ __html: marked.parse(preview) }}>
            </div>
        </div></>
    )
}



