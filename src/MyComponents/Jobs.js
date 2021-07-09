import './Jobs.css';
import React, { useState, useEffect } from 'react';
import JobCard from './JobCard';
// import firebase from '../Firebase';


function Jobs({db}) {
    
    // const db = firebase.firestore();
    const [search, setSearch] = useState('');
    const [searchKeywords, setSearchKeywords] = useState([]);   
    const [jobdata, setJobdata] = useState([])


    let fetchData;
    
    
        console.log(searchKeywords)
        fetchData = async()=>{
            const response = db.collection('jobs');
            
            if([...searchKeywords].length >= 1){
                const data = await response.where('Location', 'array-contains-any',searchKeywords).get();
                console.log('searching',searchKeywords)
                setJobdata(data.docs);

            }else{
        
                const data = await response.get();
                console.log('nosearch')
                setJobdata(data.docs);
            }
    }
    

    useEffect(() => {
        fetchData()
    },[searchKeywords])


    console.log(searchKeywords);
    console.log(jobdata);

    // useEffect(() => {
    //     search ? setSearchKeywords(search.split(',').map((str)=>(str.trim()))) : setSearchKeywords([]);
        
    // }, [search])


    const submit = (e) => {
        e.preventDefault();
        search ? setSearchKeywords(search.split(',').map((str)=>(str.trim()))) : setSearchKeywords([]);
        // setSearchKeywords(search.split(',').map((str)=>(str.trim())));
        setSearch('')

    }
    const cancelSearch = (e) => {
        e.preventDefault();
        setSearchKeywords([])
    }

    
    return (
        <div className="job_search_form_container">
            {/* <form className='jobsearch' onSubmit={submit} style={{padding:'70px'}}>
                <input type="text" value={search}  onChange={(e)=>setSearch(e.target.value)} />
                <button type="submit">search</button>
                <button onClick={cancelSearch}>cancel search</button>
            </form> */}
            <form className="d-flex" onSubmit={submit}>
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search}  onChange={(e)=>setSearch(e.target.value)}  />
                <button className="btn btn-outline-success" type="submit">Search</button>
                <button className="btn btn-outline-primary" onClick={cancelSearch}>cancel search</button>
            </form>
            {/* {console.log(jobdata)} */}
            {jobdata.map((snapshot)=>{
                console.log(snapshot.data())
                return <JobCard key={snapshot.id} data_id={snapshot.id} data = {snapshot.data()} />}
            )}

        </div>
    )
}

export default Jobs
