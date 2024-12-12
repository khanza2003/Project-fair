import commonAPI from "./commonAPI";
import SERVER_BASE_URL from "./serverUrl";

//registerAPI
export const registerAPI=async(reqBody)=>{
    return await commonAPI("POST",`${SERVER_BASE_URL}/register`,reqBody)
}
//loginAPI
export const loginAPI=async(reqBody)=>{
    return await commonAPI("POST",`${SERVER_BASE_URL}/login`,reqBody)
}
//addProjectAPI
export const addProjectAPI=async(reqBody,reqHeader)=>{
    return await commonAPI("POST",`${SERVER_BASE_URL}/add-project`,reqBody,reqHeader)
}
//home-project
export const homeProjectAPI=async()=>{
    return await commonAPI("GET",`${SERVER_BASE_URL}/home-project`,{})
}
//user-project
export const userProjectAPI=async(reqHeader)=>{
    return await commonAPI("GET",`${SERVER_BASE_URL}/user-project`,{},reqHeader)
}
//all-project
export const allProjectAPI=async(reqHeader,searchKey)=>{
    //query parameter of url -search=${searchKey}&query stored in search
    return await commonAPI("GET",`${SERVER_BASE_URL}/all-project?search=${searchKey}`,{},reqHeader)
}

//project/67527c0e6de38deba4713826/edit
export const updateProjectAPI=async(id,reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${SERVER_BASE_URL}/project/${id}/edit`,reqBody,reqHeader)
}

//delete project api
export const deleteProjectAPI=async(id,reqHeader)=>{
    return await commonAPI("DELETE",`${SERVER_BASE_URL}/project/${id}/remove`,{},reqHeader)
}

//update user api
export const updateUserAPI=async(reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${SERVER_BASE_URL}/user/edit`,reqBody,reqHeader)
}
