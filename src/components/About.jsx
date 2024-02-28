import React from 'react'
import Title from './Title'

const About = () => {
    return (
        <div className='flex items-center justify-center flex-col text-center pt-20 pb-6'>
            <h1 className='text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold'>Facundo</h1>
            <p className='text-base md:text-xl mb-3 font-medium'>Software Engineer & Web Developer</p>
            <p className='text-sm max-w-xl mb-6 font-bold'>
                Welcome to my personal portfolio!
                <br />
                I'm a front-end developer located in Argentina. Currently working and training in the mobile & web development field, seeking to develop my experience and constantly expanding my knowledge in the technological field, while developing my professional career at the same time.
                <br />
                Always looking for new challenges and techniques to be better at what I do.
            </p>

            <Title>Latest Projects</Title>
        </div>
    )
}

export default About