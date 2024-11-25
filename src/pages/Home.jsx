import React from 'react'
import { Link } from 'react-router-dom'
import landingimg from '../assets/landingimg.png'
import ProjectCard from '../components/ProjectCard'
import Card from 'react-bootstrap/Card';


const Home = () => {
  return (
    <>
    <div style={{minHeight:'100vh'}} className='d-flex justify-content-center align-items-center rounded shadow w-100'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-lg-6'>
            <h1 style={{fontSize:'80px'}}><i class="fa-brands fa-docker"></i>  Project Fair</h1>
            <p style={{textAlign:'justify'}}>One Stop Destination for all Software Development Projects. Where User can add and manage their projects. As well as access all projects available in our website... What are you waiting for!!!
            STARTS TO EXPLORE</p>
            <Link to={'/login'} className='btn btn-warning'>STARTS TO EXPLORE</Link>
          </div>
          <div className='col-lg-6'>
            <img className='img-fluid' src={landingimg} alt="" />
          </div>

        </div>

      </div>

    </div>

    <div className='my-5 text-center'>
      <h1 className='mb-5'>Explore Our Projects</h1>
      <marquee>
        <div className='d-flex'>
          <div className='mb-5'>
            <ProjectCard/>

          </div>

        </div>
      </marquee>
      <button className='btn btn-link mt-5'>CLICK HERE TO VIEW MORE PROJECTS</button>

    </div>

    <div className='d-flex justify-content-center align-items-center my-5 flex-column'>
      <h1>Our Testmonials</h1>
      <div className='d-flex justify-content-evenly align-items-center mt-3 w-100'>
        {/* card */}
        <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Text className='d-flex  justify-content-center align-items-center flex-column'>
          <img height={'60px'} width={'60px'} className='rounded-circle img-fluid' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH0mXlCTPIpCu6Xd2HDPcMmybXzRuvt5lijF5szjMoWS72qDsWBAOpyv9e4_BK1N-DHGk&usqp=CAU" alt="" />
          <div className='d-flex justify-content-center my-2'>
            <i className='fa-solid fa-star text-warning'></i>
            <i className='fa-solid fa-star text-warning'></i>
            <i className='fa-solid fa-star text-warning'></i>
            <i className='fa-solid fa-star text-warning'></i>
            <i className='fa-solid fa-star text-warning'></i>
          </div>
         <p style={{textAlign:'justify'}}>
         Some quick example text to build on the card title and make up the
            bulk of the card's content.
         </p>
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Text className='d-flex  justify-content-center align-items-center flex-column'>
          <img height={'60px'} width={'60px'} className='rounded-circle img-fluid' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLvIje2vWcLPb3aQpDVkNUN7FMvo9ZC139L8vxJOXVopM5SZf-xuG6T-OiDwGc9l032Pg&usqp=CAU" alt="" />
          <div className='d-flex justify-content-center my-2'>
            <i className='fa-solid fa-star text-warning'></i>
            <i className='fa-solid fa-star text-warning'></i>
            <i className='fa-solid fa-star text-warning'></i>
            <i className='fa-solid fa-star text-warning'></i>
            <i className='fa-solid fa-star text-warning'></i>
          </div>
          <p style={{textAlign:'justify'}}>
         Some quick example text to build on the card title and make up the
            bulk of the card's content.
         </p>
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Text className='d-flex  justify-content-center align-items-center flex-column'>
          <img height={'60px'} width={'60px'} className='rounded-circle img-fluid' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkW38RkJBaYk73N5F4pCkVQz5U_T9qM80C8Vj0_iIY8_uVaBHK9mhhp1zBZaPe-wGa38E&usqp=CAU" alt="" />
          <div className='d-flex justify-content-center my-2'>
            <i className='fa-solid fa-star text-warning'></i>
            <i className='fa-solid fa-star text-warning'></i>
            <i className='fa-solid fa-star text-warning'></i>
            <i className='fa-solid fa-star text-warning'></i>
            <i className='fa-solid fa-star text-warning'></i>
          </div>
          <p style={{textAlign:'justify'}}>
         Some quick example text to build on the card title and make up the
            bulk of the card's content.
         </p>
        </Card.Text>
      </Card.Body>
    </Card>

      </div>

    </div>
    </>
  )
}

export default Home