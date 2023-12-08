import React, { useState, useRef } from 'react';
import './style.css';
import { Row, Col } from 'react-bootstrap';
import image from '../../assets/icon/image 1.svg';
import upload from '../../assets/upload.png';
import docs from '../../assets/google-docs.png';

const Form = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleClick = () => {
    // Trigger the file input when the div is clicked
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    // Handle the selected file
    const selectedFile = e.target.files[0];
    setSelectedFile(selectedFile);
    if (selectedFile) {
      console.log('Selected file:', selectedFile);
      // You can perform additional actions with the selected file here
    }
  };

  return (
    <div className='content'>
      <div className='container-fluid p-4'>
        <div className="col-sm-12 col-xl-12">
          <div className="bg-light rounded h-100 content-main-layout">
            <h6 className="mb-4">Add new moment</h6>

            <form>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Sample title' />
              </div>
              <Row>
                <Col lg={5} md={6} sm={6} xl={12}>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Tags</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" />
                  </div>
                  <div>
                    <h6 className='mb-5'>Uploading</h6>

                    <div className='d-flex justify-content-between align-items-center upload-file mb-5'>
                      <div className='uplod-img'>
                        <img src={image} alt="img" />
                      </div>
                      <div>
                        <div>
                          <div>
                            <div htmlFor="file">Photo.png</div>
                            <progress id="file" value="32" max="100"> 38% </progress>
                          </div>
                          <div className='d-flex justify-content-between'>
                            <span>38% done</span>
                            <span>6.5 mb</span>
                          </div>
                        </div>
                      </div>
                      <div className='close-icon'><i className="ri-close-line"></i></div>
                    </div>
                    <div className='d-flex justify-content-between upload-file'>
                      <div className='uplod-img'>
                        <img src={docs} alt="img" />
                      </div>
                      <div>
                        <div>
                          <div>
                            <div htmlFor="file">Photo.png</div>
                            <progress id="file" value="32" max="100"> 38% </progress>
                          </div>
                          <div className='d-flex justify-content-between'>
                            <span>38% done</span>
                            <span>6.5 mb</span>
                          </div>
                        </div>
                      </div>
                      <div className='close-icon'><i className="ri-close-line"></i></div>
                    </div>
                  </div>
                </Col>
                <Col lg={7} md={6} sm={6} xl={12}>
                
                  <div className="uplod-file-img " onClick={handleClick} >
                    <img src={upload} alt='uploade' />
                    <p>Drag and drop files here</p>
                    {selectedFile && (
                      <div>
                        <p>Selected File: {selectedFile.name}</p>
                        <p>File Size: {selectedFile.size} bytes</p>
                      </div>
                    )}
                    <input
                      type="file"
                      style={{ display: 'none' }}
                      ref={fileInputRef}
                      onChange={handleFileChange}
                    />
                    <span>OR</span>
                    <button type="submit" className="btn btn-primary submit-btn">Browse</button>
                  </div>
                
              </Col>
            </Row>
            <div className='submit-main'>
              <button type="submit" className="btn btn-primary content-submit-btn">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
)
};

export default Form;
