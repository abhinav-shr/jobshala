import './JobCard.css'

import React from 'react'

function JobCard({data, data_id}) {

    const truncate = (string, n) => {
        
        return string?.length > n ? string.substring(0, n - 1) + '...' : string;
    }

    return ( 
    <div className="jobcardcontainer" id={data_id}>

    
        <div className="jobcard" >
            <h3>{data?.Title}</h3>
            <li>{data?.MinExp}-{data?.MaxExp} <span> Years</span> </li>
            <li>{data?.MinCTC}-{data?.MaxCTC}<span> P.A.</span></li>
            
            <li>{data?.Location.join(', ')}</li><br />
            <p></p>
            <p>{truncate(data?.Description,100)}</p>
            <p>{data?.Vacancies}<span> Vacancies</span></p>
            <p>{data?.Keywords.join(', ')}</p>
           
        </div>
    </div>
    )
}

export default JobCard
