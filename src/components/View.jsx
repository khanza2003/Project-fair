import React, {useContext, useEffect, useState } from 'react'
import Add from './Add'
import Edit from './Edit'
import {deleteProjectAPI, userProjectAPI} from '../services/allAPI'
import { addProjectContext, editContextProject } from '../context/ContextShare'

const View = () => {
    const {editProjectResponse,setEditProjectResponse}=useContext(editContextProject)
    const {addProjectResponse,setAddProjectResponse}=useContext(addProjectContext)
    //to display user project
    //create state to store user project
    const[userProject,setUserProject]=useState([])
  console.log(userProject);
  useEffect(()=>{
    getUserProjects()

  },[addProjectResponse,editProjectResponse])
    //create a function for getting all project and call api inside that function store all user project inside state 
    const getUserProjects=async()=>{
        const token=sessionStorage.getItem("token")
        if(token){
          const reqHeader={
            "Authorization":`Bearer ${token}`
          }
          try{
            const result=await userProjectAPI(reqHeader)
            console.log(result);
            if(result.status==200){
              setUserProject(result.data)
            }
          }catch(err){
            console.log(err);
          }
        }
      }
    //call that user project getting function using useEffect
   const removeProject=async(id)=>{
    const token=sessionStorage.getItem("token")
    if(token){
      const reqHeader={
        "Authorization":`Bearer ${token}`
      }
      try{
        const result=await deleteProjectAPI(id,reqHeader)
        if(result.status==200){
          getUserProjects()
        }
      }catch(err){
        console.log(err);
        
      }
    }
   }
  return (
    <>
    <div className="d-flex justify-content-between mt-3">
        <h2 className='text-warning'>All Project</h2>
        <div>
            <Add/>
        </div>
    </div>
    <div className='mt-2'>
        {
            userProject.length>0?
            userProject?.map(project=>(
             <div key={project?._id} className="border rounded p-2 d-flex justify-content-between mb-3">
            <h3>{project?.title}</h3>
            <div className="d-flex align-items-center">
                <div>
                    <Edit project={project}/>
                </div>
                <button className='btn'><a href={project?.github} target='_blank'><i className='fa-brands fa-github'></i></a></button>
                <button onClick={()=>removeProject(project?._id)} className='btn'><i className='fa-solid fa-trash text-danger'></i></button>
            </div>
        </div>
            ))
            :
        <div>You haven't uploaded any project yet....Add your project</div>
        }
    </div>
    </>
  )
}

export default View