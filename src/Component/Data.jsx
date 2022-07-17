import React, { useEffect, useState } from 'react';
import './Data.css'

function Data() {
    const [contest, setContest] = useState([]);
    useEffect(() => {
        fetch(`https://kontests.net/api/v1/all`)
            .then((res) => res.json())
            .then((json) =>
                setContest(json));
    }, []);
    const start_time = [];
    const end_time = [];
    contest.map((item) => {
        let date1 = new Date(item.start_time);
        date1 = date1.toLocaleString('en-US');
        start_time.push(date1);
        let date2 = new Date(item.end_time);
        date2 = date2.toLocaleString('en-US');
        end_time.push(date2);
        return (
            <>
            
        </>
        )
    })

    return (
        <div className='coder'>
            <div className='data'>
                <div className='title'>
                    <h2>Coder</h2>
                    <span>Details about coding contests.</span>
                </div>
                <div className='contest'>
                    {
                        contest.map((data, index) => {
                            return (
                                    <div className='Item' key={index}>
                                        <div className='button'>
                                            <a href={data.url} target='_blank' rel='noreferrer' className='link'>Visit</a>
                                        </div>
                                        <div className='heading'>{data.name}</div>
                                        <div className='host'>Hosted on :   {data.site}</div>
                                        <div className='date'>
                                            
                                            <span>{start_time[index]}</span>
                                            <hr className='line' />
                                            <span>{end_time[index]}</span>
                                        </div>
                                        <div className='status'>Status :   {data.status}</div>

                                    </div>
                                
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Data;