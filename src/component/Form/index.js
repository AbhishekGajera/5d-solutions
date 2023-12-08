import React, { useState } from 'react'
import './style.css';
import { Row, Col } from 'react-bootstrap';
import image from '../../assets/image.png';
import upload from '../../assets/upload.png';
import docs from '../../assets/google-docs.png';
const Form = () => {

    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
    };

    const handleUpload = () => {

        if (selectedFile) {
            console.log('Uploading file:', selectedFile.name);
            setSelectedFile(null);
        }
    };


    return (
        <div className='content'>
            <div className='container-fluid p-4'>
                <div className="col-sm-12 col-xl-12">
                    <div className="bg-light rounded h-100 p-4">
                        <h6 className="mb-4">Add new moment</h6>
        
                        <form>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Sample title' />
                            </div>
                            <Row>
                                <Col md={5}>
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
                                                        <div for="file">Photo.png</div>
                                                        <progress id="file" value="32" max="100"> 38% </progress>
                                                    </div>
                                                    <div className='d-flex justify-content-between'>
                                                    <span>38% done</span>
                                                    <span>6.5 mb</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='close-icon'><i class="ri-close-line"></i></div>
                                        </div>
                                        <div className='d-flex justify-content-between upload-file'>
                                            <div className='uplod-img'>
                                                <img src={docs} alt="img" />
                                            </div>
                                            <div>
                                                <div>
                                                    <div>
                                                        <div for="file">Photo.png</div>
                                                        <progress id="file" value="32" max="100"> 38% </progress>
                                                    </div>
                                                    <div className='d-flex justify-content-between'>
                                                    <span>38% done</span>
                                                    <span>6.5 mb</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='close-icon'><i class="ri-close-line"></i></div>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={7}>

                                    <div className="uplod-file-img " style={{
                                        width: '300px',
                                        height: '300px',
                                        border: '2px dashed #ccc',
                                        borderRadius: '10px',
                                        textAlign: 'center',
                                        padding: '20px',
                                        margin: '20px auto',
                                    }}
                                    >
                                        <img src={upload} alt='uploade' />
                                        <p>Drag and drop files here</p>
                                        {selectedFile && (
                                            <div>
                                                <p>Selected File: {selectedFile.name}</p>
                                                <p>File Size: {selectedFile.size} bytes</p>
                                            </div>
                                        )}
                                        <input type="file" onChange={handleFileChange}

                                            onClick={handleUpload}

                                        />
                                        <span>OR</span>
 
                            <button type="submit" className="btn btn-primary form-button submit-btn" > Brouse</button>                                  </div>
                                
                                
                                </Col>
                            </Row>
                            <div className='submit-main'>
                            <button type="submit" className="btn btn-primary form-button submit-btn" >submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form