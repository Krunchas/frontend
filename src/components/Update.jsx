import React, {useState} from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios';

const Update = () => {
  const [project, setProject] = useState({
    title:"",
    desc:"",
  });

  const navigate = useNavigate();
  const location = useLocation();

  const projectId = location.pathname.split("/")[3];

  const handleChange = (e) => {
    setProject((prev) => ({...prev, [e.target.name]: e.target.value}))
  };

  const handleClick = async e => {
    e.preventDefault();
    try {
      await axios.put("http://localhost:4000/projects/"+projectId, project)
      navigate("/projects")
    }catch (err){
      console.log(err);
    }
  }

  const handleCancel = async e => {
    e.preventDefault();
    try {
      navigate("/projects");
    } 
    catch (err) {
      console.log(err);
    }
  } 

  console.log(project);
  return (
    <div className='form'>
      <h1>Update project</h1>
      <input type="text" placeholder='Title' onChange={handleChange} name='title' />
      <input type="text" placeholder='Author' onChange={handleChange} name='author' />
      <input type="text" placeholder='Text (max 500 words)' onChange={handleChange} name='text' className='text' />
      <button className='formBtn' onClick={handleClick}>Update</button>
      <button className='cancelBtn' onClick={handleCancel}>Cancel</button>
    </div>
  )
}

export default Update