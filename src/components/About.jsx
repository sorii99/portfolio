import React from 'react'
import Title from './Title'

const About = () => {
    return (
        <div className='flex items-center justify-center flex-col text-center pt-20 pb-6'>
            <h1 className='text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold'>Facundo</h1>
            <p className='text-base md:text-xl mb-3 font-medium'>InfoSec Analyst & Web Developer</p>
            <p className='text-sm max-w-xl mb-6 font-bold'>
                Welcome to my personal portfolio!
                <br />
                I'm a front-end developer and infosec analyst located in Argentina. Seeking to develop my experience and constantly expanding my knowledge in the technological field; always looking forward to new challenges and techniques to be better at what I do.
            </p>

            <Title>Latest Projects</Title>
        </div>
    )
}

export default About