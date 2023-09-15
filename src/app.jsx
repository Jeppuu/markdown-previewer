import React from "react";
import { useState } from "react";
import { Container, Row, Col, Badge } from "react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ReactMarkdown from "react-markdown";


export default function Home() {
  const inputStyle = {
    width: "100%",
    minHeight: "50vh",
    padding: "10px",
    border: "none",
    borderRadius: "4px",
  };
  const textareaStyle = {
    width: "100%",
    minHeight: "60vh",
    padding: "10px",
    //border: "2px solid #ccc",
    borderRadius: "4px",
    resize: "none",
    transition: "border-color 0.2s ease-in-out",
    backgroundColor: "rgba(255,255,255,0.8)",
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',

    // Focus styles
    ":focus": {
      border: "2px solid #29a3a3", // Change border color on focus
      outline: "none",
      boxShadow: "0 0 5px rgba(0, 123, 255, 0.5)", // Add a subtle box shadow
    },
  };
  const outputStyle = {
    width: "100%",
    minHeight: "60vh",
    padding: "10px",
    //border: "2px solid #ccc",
    borderRadius: "4px",
    backgroundColor: "rgba(242,242,242,0.8)",
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
  };
  
  const containerStyle = {
    minHeight: "100vh",
    padding: "10px",
    borderRadius: "10px",
    background: "linear-gradient(140deg, rgb(64, 64, 64) 60%, rgba(41, 163, 163, 0.4)",
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
  }
  
  const badgeStyle = {
    fontSize: "18px", 
    fontWeight:"500", 
    padding:"14px",
    background: "#29a3a3",
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
  }
  
  const h1Style = {
 fontSize: '3rem',
    fontWeight: 600,
    color: '#fff',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)', // Add a subtle text shadow
  }

  const [markdown, setMarkdown] = useState('# Write your markdown\n ## And watch it get parsed \n you can even add [links](https://www.glitch.com) \n\n and code snippets: `<p>Hello World</p>` \n\n Even a code block: \n \``` def greet(name):print(f"Hello, {name}!")\```   \n - You can make lists \n - with many items \n **and decorate with bolded text** \n > This is a blockquote. It&apos;s pretty cool right? \n\n You can even add images: \n\n ![Example image](illustration.svg)');
  //console.log(markdown)

  return (
    <Container className="m-4" style={containerStyle}>
      <Row>
        <Col className="text-center">
          <h1 style={h1Style}>Markdown Previewer</h1>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={6}>
          <h4 className="text-center">
            <Badge pill text="light" bg="none" style={badgeStyle}>Markdown Input</Badge>
          </h4>
          <div style={inputStyle}>
            <textarea
              className="form-control"
              id="editor"
              style={textareaStyle}
              value={markdown}
              onChange={(e) => setMarkdown(e.target.value)}
            ></textarea>
          </div>
        </Col>

        <Col md={6}>
          <h4 className="text-center">
            <Badge pill bg="none" text="light" style={badgeStyle}>Preview</Badge>
          </h4>
          <div style={inputStyle}>
            <div style={outputStyle} id="preview">
              <ReactMarkdown>{markdown}</ReactMarkdown>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
