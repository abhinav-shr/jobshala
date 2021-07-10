import './JobCard.css'


import React from 'react'

function JobCard({data, data_id}) {

    function findTime(time){
        let hours = Math.floor(time/3600000);
        let minutes = Math.floor(((time/3600000)-hours)*60);
        // let seconds = Math.floor(((((time/3600000)-hours)*60)-minutes)*60)
        if(hours){
            if(hours === 1){
                return `Updated an Hour ago`
            }else{
                return `Updated ${hours} Hours ago`
            }
        }else if(minutes>1){
            return `Updated ${minutes} Minutes ago`
        }else {
            return `Updated just now`
        }
        
    }

    const truncate = (string, n) => {
        
        return string?.length > n ? string.substring(0, n - 1) + '...' : string;
    }

    return ( 
    <div className="jobcardcontainer" id={data_id}>

    
        <div className="jobcard" >
            <p className='title_jobcard'>{data?.Title}</p>
            <li>{data?.MinExp}-{data?.MaxExp} <span> Years</span> </li>
            <li>{data?.MinCTC}-{data?.MaxCTC}<span> P.A.</span></li>
            
            <li>{data?.Location.join(', ')}</li><br />
            <p></p>
            <p>{truncate(data?.Description,100)}</p>
            <p>{data?.Vacancies}<span> Vacancies</span></p>
            <p>{data?.Keywords.join(', ')}</p>
            <p>{findTime(Date.now() - data.timestamp)}</p>
        </div>
    </div>
    )
}

export default JobCard
