import React,{useState} from 'react'
import {Card ,Modal} from 'react-bootstrap';


const ProjectCard = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <Card onClick={handleShow} className='btn shadow'>
      <Card.Img height={'200px'} variant="top" src="https://techvidvan.com/tutorials/wp-content/uploads/2021/07/Android-Animations.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
      </Card.Body>
    </Card>

    <Modal size='lg' centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
           <div className="row">
            <div className="col-lg-6">
              <img className='img-fluid' src="https://techvidvan.com/tutorials/wp-content/uploads/2021/07/Android-Animations.jpg"  alt="" />
            </div>
            <div className="col-lg-6">
              <h3>Title</h3>
              <h6>Language Used: <span className='text-danger'>Language</span></h6>
              <p style={{textAlign:'justify'}}> <span className='fw-bolder'>Project Overview: </span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, facilis perferendis in reiciendis dolores exercitationem vitae doloremque molestias alias expedita, id repudiandae? Nostrum dignissimos aperiam qui reprehenderit corrupti, exercitationem hic.</p>
            </div>
            <div className='mt-2 float-start'>
              <a href="https://github.com/khanza2003/docapp" target='_blank' className='btn btn-secondary me-2'><i className='fa-brands fa-github'></i></a>
              <a href="https://khanza-docapp.netlify.app/" target='_blank' className='btn btn-secondary'><i className='fa-solid fa-link'></i></a>
            </div>
          </div></Modal.Body>
      </Modal>
    </>
  )
}

export default ProjectCard