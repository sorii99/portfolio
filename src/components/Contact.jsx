import React from 'react';
import Title from './Title';

const Contact = () => {
    return (
        <div className='flex flex-col mb-10 mx-auto'>
            <div className='flex justify-center items-center'>
                <form
                    action='https://getform.io/f/dd02d7e6-6b87-4995-bdd1-23aa35985672'
                    method='POST'
                    className='flex flex-col w-full md:w-7/12'
                >
                    <Title>Contact</Title>
                    <input
                        type='text'
                        name='name'
                        placeholder='Name'
                        required
                        className='p-2 bg-transparent border-2 rounded-md focus:outline-none'
                    />

                    <input
                        type='text'
                        name='email'
                        pattern='[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.]{1}[a-zA-Z]{2,}$'
                        title='Please enter a valid email!'
                        placeholder='Email'
                        required
                        className='my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none'
                    />

                    <textarea
                        name='message'
                        placeholder='Message'
                        rows='10'
                        required
                        className='p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none'
                    />

                    <button
                        type='submit'
                        className='text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 drop-shadow-md hover:from-indigo-500 hover:via-blue-500 hover:to-cyan-500'
                    >
                        Reach Me
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contact