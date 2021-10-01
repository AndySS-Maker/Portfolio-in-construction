import React from 'react';

const Projects = () => {
    const myProjects = [
        {
            projectName: 'Project SecondLife',
            tecnologies: ['HTML', 'CSS', 'JavaScript'],
            duration: 'one week',
            about: 'Second Life is a simply game based on choices, this game was built using HTML, CSS and JavaScript and it is a part of an Ironhack first project, and my first as well.',
            projectUrl: 'https://andyss-maker.github.io/projectSecondLife/'
        },
        {
            projectName: 'Aluga Mais app',
            tecnologies: ['HTML', 'CSS', 'JavaScript', 'React', 'SASS'],
            duration: 'one week',
            about: 'Aluga Mais is an application developed with the aim of promoting the rental of private vehicles, which are made available by individuals, on an online and very intuitive platform.',
            projectUrl: 'https://alugamais.netlify.app/'
        },
        {
            projectName: 'The Circle',
            tecnologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Express', 'MongoDB', 'Mongoose'],
            duration: 'one week',
            about: 'We decided to create a social network, where people, therapists and the like, can exchange therapies or services. In order for them to exchange their experiences, therapies and other skills, contributing to each other. Thus, we decided, in a virtual space, to create a "circle" of people who are willing to offer their skills, but also receive from others. We can then create a "circle" of people performing, creating and socializing their skills for the greater good.Our goal is mutual help, whether from newly graduated or more experienced therapists, so that they can exchange their experiences and skills as professionals. The Circle came from the idea of ​​two developers, able to enrich and contribute even more to social networks, using it in the best way of mutual help. Thats why it was created based on our skills with back-end and front-end, to test our knowledge learned so far when finishing the course by Iron Hack.',
            projectUrl: 'https://thecircle-network.netlify.app/'
        }
    ]

    return (
        <div>
            <h2>Projects:</h2>
            {myProjects.map((eachProject, index) => {
                return (
                    <div key={index}>
                        <h3>{ eachProject.projectName }</h3>
                        {eachProject.tecnologies.map((eachTecnologie) =>{
                            return (
                                <p>{eachTecnologie}</p>
                            ) 
                        })}
                        <p>{eachProject.duration}</p>
                        <p>{eachProject.about}</p>
                        <a href={eachProject.projectUrl}>Project SecondLife</a>
                    </div>
                )
            })}
        </div>
    );
}

export default Projects;