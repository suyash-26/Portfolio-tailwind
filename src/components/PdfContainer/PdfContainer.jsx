import React from "react";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css"; // Default CSS styling
import pdfUrl from '../../../public/suyash_copy.pdf'
const PdfContainer = ({styles}) => {
  // const pdfUrl = "../../"; // Path to your PDF file

  return (
    <div style={{maxHeight:'700px', maxWidth:'600px',...styles }}>
      <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
        <Viewer  style={{ maxWidth:'600px' }} fileUrl={pdfUrl} />
      </Worker>
      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <a href={pdfUrl} download="suyash_resume.pdf">
          <button style={{ padding: "10px 20px", cursor: "pointer",color:'white' }}>Download PDF</button>
        </a>
      </div>
      <h1>Hello</h1>
    </div>
  );
};


export default PdfContainer;
