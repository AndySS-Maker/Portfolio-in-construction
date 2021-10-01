import React from "react";

const Education = () => {
    const myEducation = [
        {
        schoolName:"Ironhack",
        city: "São Paulo",
        country:"BR",
        degree:"Full-Stack Web Developer",
        schoolStarted:"2021",
        schoolEnded:"2021"
        },
        {
            schoolName:"Universidade São Judas Tadeu",
            city: "São Paulo",
            country:"Brazil",
            degree:"Mechanical Engineering",
            schoolStarted:"2012",
            schoolEnded:"2014"
        }
    ]

    return (
        <div>
            <h2>Education:</h2>
            {myEducation.map((eachSchool, index) => {
                return (
                    <div key={index}>
                        <h3>{eachSchool.schoolName}</h3>
                        <p>{eachSchool.city}, {eachSchool.country}</p>
                        <p>{eachSchool.degree}</p>
                        <p>{eachSchool.schoolStarted} - {eachSchool.schoolEnded}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Education;

