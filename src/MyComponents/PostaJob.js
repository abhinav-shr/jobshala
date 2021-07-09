import './PostaJob.css';
import React, { useState } from 'react'
// import firebase from '../Firebase';

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
        if(title && desc){
        
            e.preventDefault();
            // const db = firebase.firestore();
            // db.settings({
            //     timestampsInSnapshots: true
            //   });

            db.collection('jobs').add({
                'Title' : title,
                'Description' : desc,
                'Keywords' : keywords.split(',').map((str)=>(str.trim())),
                'MaxCTC': Number(maxCTC),
                'MinCTC': Number(minCTC),
                'MinExp' : Number(minExp),
                'MaxExp' : Number(maxExp),
                'Vacancies' : Number(vacancies),
                'Location' : location.split(',').map((str)=>(str.trim()))
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
            
        }else{
            alert('Title and Description can not be empty!')
        }

    }
    console.log('once')


    return (
        <>
        {/* <div className="postajob">
            <form className="formForRec" onSubmit={submit}>
                <label htmlFor="jobTitle">Job Title/Designation:  </label>
                <input type="text" id="jobTitle" name="JobTitle" value={title} onChange={(e)=>setTitle(e.target.value)} />
                <br /><br />


                <label htmlFor="JobDesc">Job Description: </label>
                <textarea name="jobDesc" id="JobDesc" cols="30" rows="10" value={desc} onChange={(e)=>setDesc(e.target.value)}></textarea>
                <br /><br />


                <label htmlFor="keywords">Keywords:</label>
                <input type="text" name="keywords" id="Keywords" value={keywords} onChange={(e)=>setKeywords(e.target.value)}/>
                <br /><br />


                <label htmlFor="experience">Work Experience: </label>
                <input type="number" name="minimum" id="experience" value={minExp} onChange={(e)=>setMinExp(e.target.value)}/><span> to </span>
                <input type="number" name="maximum" id="experience" value={maxExp} onChange={(e)=>setMaxExp(e.target.value)}/>
                <br /><br />


                <label htmlFor="ctc">Anual CTC: </label>
                <input type="number" name="minimum" id="ctc" placeholder="Minimum Anual Salary" value={minCTC} onChange={(e)=>setMinCTC(e.target.value)}/> to
                <input type="number" name="maximum" id="ctc" placeholder="Minimum Anual Salary" value={maxCTC} onChange={(e)=>setMaxCTC(e.target.value)}/>
                <br /><br />


                <label htmlFor="vaccancies">Number of Vaccancies: </label>
                <input type="number" id="vaccancies" value={vacancies} onChange={(e)=>setVacancies(e.target.value)}/>
                <br /><br />


                <label htmlFor="location">Location: </label>
                <input type="text" id="location" value={location} onChange={(e)=>setLocation(e.target.value)}/>
                <br /><br />


                <button type="submit">Submit</button>
            </form>
        </div> */}









<div className="d-flex justify-content-center container">
<form className='row mb-3 col-sm-10 jobPostForm' onSubmit={submit}>
    <div class="row mb-3">
        <label for="jobTitle" class="col-sm-2 col-form-label">Job Title/Designation:</label>
        <div class="col-sm-10">
        <input type="text" class="form-control" id="jobTitle" value={title} onChange={(e)=>setTitle(e.target.value)} />
        </div>
    </div>


    <div class="row mb-3">
        <label for="exampleFormControlTextarea1" class="col-sm-2 col-form-label">Description:</label>
        
        <div class="col-sm-10">
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" value={desc} onChange={(e)=>setDesc(e.target.value)}></textarea>
        </div>
    </div>

    <div class="row mb-3">
        <label for="keywords" class="col-sm-2 col-form-label">Keywords:</label>
        
        <div class="col-sm-10">
        <input type="text" class="form-control" id="jobTitle" value={keywords} onChange={(e)=>setKeywords(e.target.value)} />
        </div>
    </div>

    <div class="row mb-3">
        <label for="workExp" class="col-sm-2 col-form-label">Work Experience:</label>
        <div class="col-sm-4">
        <input type="number" class="form-control" id="workExp" value={minExp} onChange={(e)=>setMinExp(e.target.value)} />
        </div>to
        <div class="col-sm-4">
        <input type="number" class="form-control" id="workExp" value={maxExp} onChange={(e)=>setMaxExp(e.target.value)} />
        </div>
    </div>

    <div class="row mb-3">
        <label for="CTC" class="col-sm-2 col-form-label">Anual CTC:</label>
        <div class="col-sm-4">
        <input type="number" class="form-control" id="CTC" value={minCTC} onChange={(e)=>setMinCTC(e.target.value)} />
        </div>to
        <div class="col-sm-4">
        <input type="number" class="form-control" id="CTC" value={maxCTC} onChange={(e)=>setMaxCTC(e.target.value)} />
        </div>
    </div>

    <div class="row mb-3">
        <label for="vacancies" class="col-sm-2 col-form-label">Vacancies:</label>
        <div class="col-sm-10">
        <input type="number" class="form-control" id="vacancies" value={vacancies} onChange={(e)=>setVacancies(e.target.value)} />
        </div>
    </div>
    <div class="row mb-3">
        <label for="location" class="col-sm-2 col-form-label">Location:</label>
        <div class="col-sm-10">
        <input type="text" class="form-control" id="location" value={location} onChange={(e)=>setLocation(e.target.value)} />
        </div>
    </div>


  
  

        <button type="submit" class="btn btn-success" >Post</button>


        <button type="reset" class="btn btn-primary">Reset</button>


    
  
</form>
</div>









        </>
    )
}

export default PostaJob
