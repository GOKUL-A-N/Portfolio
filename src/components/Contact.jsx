/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_lok3wic', 'template_jxv1c75', form.current, '4eMx2v-NLVJkMVoz9')
      .then((result) => {
          alert("Thanks for your message")
      }, (error) => {
          alert("Unsuccessfull could you please send again")
      });
      e.target.reset()
  };

  return (
    <div className='w-full flex items-center flex-col justify-center mb-10'>
      <h1 className='text2 text-center  font-bold text-[25px] sm:text-[30px]'>Contact me</h1>
      <div className="max-w-screen-md mx-auto p-5">
  
  
  <form className="w-full" ref={form} onSubmit={sendEmail}>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className ="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
        First Name
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" name='first_name' type="text" placeholder="First Name" />
      <p className="text-red-500 text-xs italic">Please fill out this field.</p>
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
        Last Name
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" name='last_name' type="text" placeholder="Last Name" />
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
        Email Address
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" name='email' type="email" placeholder="********@*****.**" />
    </div>
  </div>
    
    <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
        Your Message
      </label>
      <textarea name='message' rows="10" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
        
      </textarea>
    </div>
    <div className="flex justify-between w-full px-3">
      <div className="md:flex md:items-center">
        {/* <label class="block text-gray-500 font-bold">
          <input class="mr-2 leading-tight" type="checkbox" />
          <span class="text-sm">
            Send me your newsletter!
          </span>
        </label> */}
      </div>
      <button className="button" type="submit">
        Send Message
      </button>
    </div>
      
  </div>
    
</form>
</div>
    </div>
  )
}

export default Contact