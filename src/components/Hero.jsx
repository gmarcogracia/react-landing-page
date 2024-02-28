import React from 'react';
import {Typed,ReactTyped} from "react-typed";

function Hero() {
  return (

    <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>

            <p className='text-[#00df9a] font-bold p-2'>Mi primera Landing Page con React</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl md:py-6'>Mira que guay</h1>

      
        <div>
            <p className='md:text-5xl sm:text-4xl text-xl font-bold'>Este texto cambia y todo </p>
            <ReactTyped strings={["WOW","Que guay","Bueno, no es para tanto"]} typeSpeed={190} backSpeed={290} className='md:text-5xl sm:text-4xl text-xl font-bold pl-2' loop/>
           <br/><button className='bg-[#00df9a] w-[150px] h-12 rounded-md font-medium my-6 mx-auto px-6 py-3 text-black'>Get Started</button>
        </div>
        </div>
    </div>
  )
}

export default Hero