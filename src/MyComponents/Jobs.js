import './Jobs.css';
import React, { useState, useEffect } from 'react';
import JobCard from './JobCard';


function Jobs({db}) {
    
    const [search, setSearch] = useState('');
    const [searchKeywords, setSearchKeywords] = useState([]);   
    const [jobdata, setJobdata] = useState([])



    
    
    console.log(searchKeywords)
    const fetchData = async()=>{
            const response = db.collection('jobs').orderBy('timestamp','desc');
            const data = await response.get();
            setJobdata(data.docs);
            // console.log(jobdata)
    }
    


    useEffect(() => {
        fetchData()
    },[])
console.log(jobdata)


  


    const submit = (e) => {
        e.preventDefault();
        search ? setSearchKeywords(search.split(',').map((str)=>(str.trim().toLowerCase()))) : setSearchKeywords([]);

    }
    // const cancelSearch = (e) => {
    //     e.preventDefault();
    //     setSearchKeywords([])
    // }


///// improving the search

const [jobsToShow, setJobsToShow] = useState([])
console.log(jobdata)
console.log(jobsToShow)

function findCommonElements(arr1, arr2) {
    return arr1.some(item => arr2.includes(item))
}


const filterData = () => {
    if([...searchKeywords].length >= 1){
        
        let filterOutput = jobdata.filter((snapshot) => {
            let keys = [...snapshot.data().Location,...snapshot.data().Keywords,snapshot.data().Title];
            keys = keys.map((item)=>(item.toLowerCase()))
            return findCommonElements(keys,searchKeywords)
            })
        setJobsToShow(filterOutput)
        console.log(jobsToShow)
    

    }else{
        setJobsToShow([...jobdata])
        console.log(jobsToShow)
    }
}
useEffect(() => {
    filterData()
}, [searchKeywords])


useEffect(() => {
    setJobsToShow([...jobdata])
}, [jobdata])














    
    return (
        <div className="job_search_form_container">
            {/* <form className='jobsearch' onSubmit={submit} style={{padding:'70px'}}>
                <input type="text" value={search}  onChange={(e)=>setSearch(e.target.value)} />
                <button type="submit">search</button>
                <button onClick={cancelSearch}>cancel search</button>
            </form> */}
            <form className="d-flex job_search_form" onSubmit={submit}>
                <input className="form-control me-2" type="search" placeholder="Skills,Designation,Location" aria-label="Search" value={search}  onChange={(e)=>setSearch(e.target.value)} style={{background:'whitesmoke'}} />
                <button className="btn btn-outline-success" type="submit" >Search</button>
                {/* <button className="btn btn-outline-primary" onClick={cancelSearch}>cancel search</button> */}
            </form>
            {/* {console.log(jobdata)} */}
            {jobsToShow.map((snapshot)=>{
                // console.log(snapshot.data())
                return <JobCard key={snapshot.id} data_id={snapshot.id} data = {snapshot.data()} />}
            )}

        </div>
    )
}

export default Jobs
