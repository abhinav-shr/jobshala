import './PostaJob.css';
import React, { useState } from 'react'

function PostaJob({db}) {

    
    

    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [keywords, setKeywords] = useState('');
    const [minExp, setMinExp] = useState('');
    const [maxExp, setMaxExp] = useState('');
    const [minCTC, setMinCTC] = useState('');
    const [maxCTC, setMaxCTC] = useState('');
    const [vacancies, setVacancies] = useState('');
    const [location, setLocation] = useState('');
    

    
    

    const submit = (e) => {
        
            e.preventDefault();

            const timestamp= Date.now();

            db.collection('jobs').add({
                'Title' : title,
                'Description' : desc,
                'Keywords' : keywords.split(',').map((str)=>(str.trim())),
                'MaxCTC': Number(maxCTC),
                'MinCTC': Number(minCTC),
                'MinExp' : Number(minExp),
                'MaxExp' : Number(maxExp),
                'Vacancies' : Number(vacancies),
                'Location' : location.split(',').map((str)=>(str.trim())),
                'timestamp' : timestamp
            })
            setTitle('')
            setDesc('')
            setLocation('')
            setMaxCTC('')
            setMinCTC('')
            setVacancies('')
            setMinExp('')
            setMaxExp('')
            setKeywords('')

    }
    console.log('once')


    return (
    <>
    <h3 className="formheading">Fill this Form to post a job:)</h3>
    <div className="d-flex justify-content-center " id="container">
        <form className='row mb-3 jobPostForm' onSubmit={submit}>
            <div className="row mb-3">
                <label htmlFor="jobTitle" className="col-sm-2 col-form-label">Job Title/Designation:</label>
                <div className="col-sm-10">
                <input type="text" className="form-control" id="jobTitle" value={title} onChange={(e)=>setTitle(e.target.value)} required/>
                </div>
            </div>


            <div className="row mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="col-sm-2 col-form-label">Description:</label>
                
                <div className="col-sm-10">
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={desc} onChange={(e)=>setDesc(e.target.value)} required></textarea>
                </div>
            </div>

            <div className="row mb-3">
                <label htmlFor="keywords" className="col-sm-2 col-form-label">Keywords:</label>
                
                <div className="col-sm-10">
                <input type="text" className="form-control" id="jobTitle" value={keywords} onChange={(e)=>setKeywords(e.target.value)} required/>
                </div>
            </div>

            <div className="row mb-3">
                <label htmlFor="workExp" className="col-sm-2 col-form-label">Work Experience:</label>
                <div className="col-sm-4">
                <input type="number" className="form-control" id="workExp" value={minExp} onChange={(e)=>setMinExp(e.target.value)} required/>
                </div>to
                <div className="col-sm-4">
                <input type="number" className="form-control" id="workExp" value={maxExp} onChange={(e)=>setMaxExp(e.target.value)} required/>
                </div>
            </div>

            <div className="row mb-3">
                <label htmlFor="CTC" className="col-sm-2 col-form-label">Anual CTC:</label>
                <div className="col-sm-4">
                <input type="number" className="form-control" id="CTC" value={minCTC} onChange={(e)=>setMinCTC(e.target.value)} required/>
                </div>to
                <div className="col-sm-4">
                <input type="number" className="form-control" id="CTC" value={maxCTC} onChange={(e)=>setMaxCTC(e.target.value)} required/>
                </div>
            </div>

            <div className="row mb-3">
                <label htmlFor="vacancies" className="col-sm-2 col-form-label">Vacancies:</label>
                <div className="col-sm-10">
                <input type="number" className="form-control" id="vacancies" value={vacancies} onChange={(e)=>setVacancies(e.target.value)} required/>
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="location" className="col-sm-2 col-form-label">Location:</label>
                <div className="col-sm-10">
                <input type="text" className="form-control" id="location" value={location} onChange={(e)=>setLocation(e.target.value)} required/>
                </div>
            </div>


        
        

                <button type="submit" className="btn btn-success" >Post</button>


                <button type="reset" className="btn btn-primary">Reset</button>


            
        
        </form>
    </div>
    </>
    )
}

export default PostaJob
