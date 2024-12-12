import React,{useEffect, useState} from 'react'
import Collapse from 'react-bootstrap/Collapse';
import uploadImg from '../assets/user.png'
import SERVER_BASE_URL from '../services/serverUrl';
import { updateUserAPI } from '../services/allAPI';

const Profile = () => {
    const [open, setOpen] = useState(false);
    const[preview,setPreview]=useState("")
    const [existingprofilePic,setExistingProfilePic]=useState("")
    const[userDetails,setUserDetails]=useState({
      username:"",email:"",password:"",github:"",linkedin:"",profilePic:""
    })
    console.log(userDetails);
    //get existing user details from session and store it to userdetails state
    useEffect(()=>{
      if(sessionStorage.getItem("user")){
        const user=JSON.parse(sessionStorage.getItem("user"))
        setUserDetails({
          ...userDetails,username:user.username,email:user.email,password:user.password,github:user.github,linkedin:user.linkedin
        })
        setExistingProfilePic(user.profilePic)
      }
    },[open])

    //generate url for uploading profilepic
    useEffect(()=>{
      if(userDetails.profilePic){
        setPreview(URL.createObjectURL(userDetails.profilePic))
        }else{
          setPreview("")
        }
      },[userDetails.profilePic])

    const handleUserUpdate =async()=>{
     //1.get all user details
     const {username,email,password,github,linkedin,profilePic}=userDetails
     //if text filed have values
     if(github && linkedin){
      //req body
      const reqBody=new FormData()
      reqBody.append("username",username)
      reqBody.append("email",email)
      reqBody.append("password",password)
      reqBody.append("github",github)
      reqBody.append("linkedin",linkedin)
      preview?reqBody.append("profilePic",profilePic):reqBody.append("profilePic",existingprofilePic)
      //reqHeader
      const token=sessionStorage.getItem("token")
      if(token){
        const reqHeader={
            "Content-Type":"multipart/form-data",
            "Authorization":`Bearer ${token}`
        }
        //makeApi call
        try{
          const result=await updateUserAPI(reqBody,reqHeader)
          if(result.status==200){
            //alert
            alert("User profile updated successfully!!")
            //store update user in session
            sessionStorage.setItem("user",JSON.stringify(result.data))
            //collapse profile
            setOpen(!open)
          }

        }catch(err){
          console.log(err);
          
        }
      }

     }else{
      alert("Please Fill The Form Completely!!!")
     }
    }
  return (
    <>
    <div className="d-flex justify-content-evenly">
        <h3 className='text-warning'>Profile</h3>
        <button onClick={()=>setOpen(!open)} className='btn text-warning'><i className='fa-solid fa-chevron-down'></i></button>
    </div>
    <Collapse in={open}>
        <div className='row container-fluid align-items-center justify-content-center shadow p-2 rounded' id="example-collapse-text">
        {/*upload pic*/}
        <label className='text-center mb-2'>
            <input onChange={e=>setUserDetails({...userDetails,profilePic:e.target.files[0]})} style={{display:'none'}} type="file" />
            {
              existingprofilePic==""?
              <img src={preview?preview:uploadImg} width={'200px'} height={'200px'} className='rounded circle' alt="" />
            :
            <img width={'200px'} height={'200px'} className='rounded circle' src={preview?preview:`${SERVER_BASE_URL}/uploads/${existingprofilePic}`} alt="" />
            }
        </label>
         <div className="mb-2 w-100">
            <input value={userDetails.github} onChange={e=>setUserDetails({...userDetails,github:e.target.value})} type="text" placeholder='User Github Link' className='form-control'/>
         </div>
         <div className="mb-2 w-100">
            <input value={userDetails.linkedin} onChange={e=>setUserDetails({...userDetails,linkedin:e.target.value})} type="text" placeholder='User LINKDIN Link'  className='form-control'/>
         </div>
         <div className='d-grid w-100'>
            <button onClick={handleUserUpdate} className='btn btn-warning'>Update</button>
         </div>
        </div>
      </Collapse>
    </>
  )
}

export default Profile