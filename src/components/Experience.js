import React from "react";

const Experience = () => {
    const placesWhereIWorked = [
        {
        name:"Frank Flanagan Fittings",
        city: "Dublin",
        country:"Ireland",
        jobTitle:"Warehouse Team Member",
        jobDescription:"Customer service, with collection at the site of all components necessary to build a Kitchen. Work with manipulation of invoices, as well as a huge stock more than 8 thousand kinds of peaces, on a warehouse beside Dublin Airport, delivering acroos all Ireland.",
        jobStarted:"2019",
        jobEnded:"2021"
        },
        {
        name:"Outback Steakhouse Brasil",
        city: "São Paulo",
        country:"Brazil",
        jobTitle:"Waiter",
        jobDescription:"I was the best seller in the store, this restaurant exists in several countries. Work with suggested sale, based on the expiration date of the stock, as this food is more complex,  Situations that attended to a station with about more than 20 tables, maintaining the standard.",
        jobStarted:"2016",
        jobEnded:"2018"
        },
        {
        name:"Atento Brazil",
        city: "São Paulo",
        country:"Brazil",
        jobTitle:"Supervisor and Trainer",
        jobDescription:"Creation of teaching material for training from scratch, Refresher training application for over 100 people, To be promoted to supervisor of an extensive team of 50 people who prospected for fiber optics,  Creating action plans to hit aggressive goals.",
        jobStarted:"2013",
        jobEnded:"2015"
        }
    ]

    const checkJobEnded = (end) => {
        let endYear;
        if(end === ''){
            endYear = 'Current';
        } else {
            endYear = end;
        }
        return endYear;
    }

    return(
        <div className=''>
            <h2>Work Experience:</h2>
            {placesWhereIWorked.map((eachPlace, index) => {
                return (
                    <div className='experience-content' key={index}>
                        <h3>{eachPlace.name}</h3>
                        <p>{eachPlace.city}, {eachPlace.country}</p>
                        <h4>{eachPlace.jobTitle}</h4>
                        <p>{eachPlace.jobDescription}</p>
                        <p>{eachPlace.jobStarted} - {eachPlace.jobEnded}</p>
                    </div>
                )
            })}
        </div>
    ) 
}

export default Experience;