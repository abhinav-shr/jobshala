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
        <div className="postajob">
            <form className="formForRec" onSubmit={submit}>
                <label htmlFor="jobTitle">Job Title/Designation:  </label>
                <input type="text" id="jobTitle" name="JobTitle" value={title} onChange={(e)=>setTitle(e.target.value)} /> <br /><br />
                <label htmlFor="JobDesc">Job Description: </label>
                <textarea name="jobDesc" id="JobDesc" cols="30" rows="10" value={desc} onChange={(e)=>setDesc(e.target.value)}></textarea><br /><br />
                <label htmlFor="keywords">Keywords:</label>
                <input type="text" name="keywords" id="Keywords" value={keywords} onChange={(e)=>setKeywords(e.target.value)}/><br /><br />
                <label htmlFor="experience">Work Experience: </label>
                <input type="number" name="minimum" id="experience" value={minExp} onChange={(e)=>setMinExp(e.target.value)}/><span> to </span>
                <input type="number" name="maximum" id="experience" value={maxExp} onChange={(e)=>setMaxExp(e.target.value)}/><br /><br />
                <label htmlFor="ctc">Anual CTC: </label>
                <input type="number" name="minimum" id="ctc" placeholder="Minimum Anual Salary" value={minCTC} onChange={(e)=>setMinCTC(e.target.value)}/> to
                <input type="number" name="maximum" id="ctc" placeholder="Minimum Anual Salary" value={maxCTC} onChange={(e)=>setMaxCTC(e.target.value)}/><br /><br />
                <label htmlFor="vaccancies">Number of Vaccancies: </label>
                <input type="number" id="vaccancies" value={vacancies} onChange={(e)=>setVacancies(e.target.value)}/><br /><br />
                <label htmlFor="location">Location: </label>
                <input type="text" id="location" value={location} onChange={(e)=>setLocation(e.target.value)}/><br /><br />
                <button type="submit">Submit</button>
            </form>

        </div>
    )
}

export default PostaJob
