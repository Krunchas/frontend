import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Add = () => {
  const [project, setProject] = useState({
    name:"",
    desc:"",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setProject((prev) => ({...prev, [e.target.name]: e.target.value}))
  };

  const handleClick = async e => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4000/projects", project);
      navigate("/projects");
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
      <h1>Add new project</h1>
      <input type="text" placeholder='Title' onChange={handleChange} name='name' />
      <input type="text" placeholder='Short Description' onChange={handleChange} name='desc' />
      <button className='formBtn' onClick={handleClick}>Add</button>
      <button className='cancelBtn' onClick={handleCancel}>Cancel</button>
    </div>
  )
}

export default Add
