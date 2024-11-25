import React,{useState} from 'react'
import { Modal,Button} from 'react-bootstrap'
import uploadimg from '../assets/uploadImg.png'

const Edit = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
     <button onClick={handleShow} className='btn '><i className='fa-solid fa-edit'></i></button>
    <Modal size='lg' centered show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Update Project Details!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="row align-items-center">
                <div className="col-lg-4">
                    <label>
                        <input style={{display:'none'}} type="file" />
                        <img className='img-fluid' height={'200px'} src={uploadimg} alt="" />
                    </label>
                    <div className="text-warning fw-bolder">*Upload only the following file types (jpg,png,jpeg) here!!!</div>
                </div>
                <div className="col-lg-8">
                    <div className="mb-2">
                        <input className='form-control' type="text" placeholder='Project Title'/>
                    </div>
                    <div className="mb-2">
                        <input className='form-control' type="text" placeholder='Project Languages'/>
                    </div>
                    <div className="mb-2">
                        <input className='form-control' type="text" placeholder='Project Overview'/>
                    </div>
                    <div className="mb-2">
                        <input className='form-control' type="text" placeholder='Project Github Link'/>
                    </div>
                    <div className="mb-2">
                        <input className='form-control' type="text" placeholder='Project Website Link'/>
                    </div>
                </div>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" >
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Edit