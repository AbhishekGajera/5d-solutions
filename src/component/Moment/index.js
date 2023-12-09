import React, { useState, useRef, useEffect } from "react";
import "./style.css";
import { useForm } from "react-hook-form";
import { Row, Col } from "react-bootstrap";
import image from "../../assets/icon/image 1.svg";
import upload from "../../assets/upload.png";
import docs from "../../assets/google-docs.png";
import { formatFileSize, truncateFileName } from "../../utils/helpers";

const Moment = () => {
  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm();
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [isDragging, setIsDragging] = useState(false);

  const fileInputRef = useRef(null);

  useEffect(() => {
    fileInputRef.current = document.createElement("input");
    fileInputRef.current.type = "file";
    fileInputRef.current.multiple = true;
    fileInputRef.current.accept = "image/*"; // Only allow image files
    fileInputRef.current.addEventListener("change", handleFileChange); // Add event listener
  }, []);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    handleFiles(files);
    setIsDragging(false);
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    handleFiles(files);
  };

  const handleFiles = (files) => {
    // Only allow image files
    const imageFiles = files.filter((file) => file.type.startsWith("image/"));

    // Update the selectedFiles state based on previous state
    setSelectedFiles((prevFiles) => [...prevFiles, ...imageFiles]);

    // Set the value using react-hook-form
    setValue("file", (prevFiles) => [...prevFiles, ...imageFiles]);
  };

  useEffect(() => {
    if (fileInputRef.current) {
      fileInputRef.current.addEventListener("change", handleFileChange);

      // Clean up the event listener when the component unmounts
      return () => {
        fileInputRef.current.removeEventListener("change", handleFileChange);
      };
    }
  }, []);

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleClick = () => {
    fileInputRef.current.value = null;
    fileInputRef.current.click();
  };

  const onSubmit = (data) => {
    // Handle form submission here
    console.log(data);
  };

  return (
    <>
      <div className="content">
        <div className="container-fluid p-4">
          <div className="col-sm-12 col-xl-12">
            <div className="bg-light rounded h-100 content-main-layout">
              <h6 className="mb-4">Add new moment</h6>

              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className={`form-control ${
                      errors.title ? "is-invalid" : ""
                    }`}
                    id="title"
                    aria-describedby="titleHelp"
                    placeholder="Sample title"
                    {...register("title", {
                      required: "Title is required",
                      maxLength: {
                        value: 100,
                        message: "Title cannot exceed 100 characters",
                      },
                    })}
                  />
                  <div className="invalid-feedback">
                    {errors.title?.message}
                  </div>
                </div>
                <Row>
                  <Col lg={5} md={6} sm={6} xs={12}>
                    <div className="mb-3">
                      <label htmlFor="tags" className="form-label">
                        Tags
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="tags"
                        {...register("tags")}
                      />
                    </div>
                    <div>
                      <h6 className="mb-5">Uploading</h6>
                      <div>
                        {selectedFiles.map((file, index) => (
                          <div
                            key={index}
                            className="d-flex justify-content-between upload-file mb-5"
                          >
                            <div className="uplod-img">
                              <img
                                src={
                                  file.type.startsWith("image/") ? image : docs
                                }
                                alt="img"
                              />
                            </div>
                            <div>
                              <div>
                                <div>
                                  <div htmlFor={`file${index}`}>
                                    {truncateFileName(file.name, 20)}{" "}
                                    {/* Adjust the desired maxLength */}
                                  </div>
                                  <progress
                                    id={`file${index}`}
                                    value="0"
                                    max="100"
                                  >
                                    {" "}
                                    0%{" "}
                                  </progress>
                                </div>
                                <div className="d-flex justify-content-between">
                                  <span>0% done</span>
                                  <span>{formatFileSize(file.size)}</span>
                                </div>
                              </div>
                            </div>
                            <div className="close-icon">
                              <i className="ri-close-line"></i>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Col>
                  <Col lg={7} md={6} sm={6} xs={12}>
                    <div
                      className={`uplod-file-img ${
                        isDragging ? "dragging" : ""
                      }`}
                      onDragOver={handleDragOver}
                      onDrop={handleDrop}
                      onDragLeave={handleDragLeave}
                    >
                      <img src={upload} alt="uploade" />
                      <p>Drag and drop files here</p>
                      {selectedFiles.length > 0 && (
                        <div>
                          <div>
                            <p>Selected Files count: {selectedFiles?.length}</p>
                          </div>
                        </div>
                      )}
                      <input
                        type="file"
                        style={{ display: "none" }}
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        {...register("file", {
                          required: "File is required",
                          validate: {
                            isImage: (value) =>
                              value && value[0].type.includes("image/")
                                ? true
                                : "Only image files are allowed",
                          },
                        })}
                      />
                      <span>OR</span>
                      <button
                        type="button"
                        className="btn btn-primary submit-btn"
                        onClick={handleClick}
                      >
                        Browse
                      </button>
                      <div className="invalid-feedback">
                        {errors.file?.message}
                      </div>
                    </div>
                  </Col>
                </Row>
                <div className="submit-main">
                  <button
                    type="submit"
                    className="btn btn-primary content-submit-btn"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Moment;
