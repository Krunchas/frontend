import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Projects() {

  const [projects, setProjects] = useState([])

  useEffect(() => {
    const fetchAllProjects = async () => {
      try {
        const res = await axios.get("http://localhost:4000/projects")
        setProjects(res.data)
      }
      catch (err){
        console.log(err)
      }
    }
    fetchAllProjects()
  }) 

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/projects/${id}`)
      setProjects(projects.filter(project => project.id!== id))
    } 
    catch (err) {
      console.log(err)
    }
  }

  return (
    <section>
      <div className='container-fluid'>
          <h1 className='mt-5'>Projects</h1>
          <button className='addBtn'><Link to="/projects/add" className='addLink'>Add new post</Link></button>
      </div>
      <div className="projects">
        {projects.map((project) => (
          <div className="project" key={project.id}>
            <h2>{project.name}</h2>
            <p>{project.desc}</p>
            <button className='delete' onClick={()=>handleDelete(project.id)}>Delete</button>
            <button className='update'><Link to={`/projects/update/${project.id}`} className='updateLink'>Update</Link></button> <hr />
          </div>
        ))}
      </div>
    </section>
  )
}
