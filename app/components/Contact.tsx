'use client'
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { useState } from 'react';


export type FormData = {
  name: string;
  email: string;
};

const Contact: FC = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const [isSubmitted, setIsSubmitted] = useState(false);
  // Google Form URL
  const googleFormAction = 'https://docs.google.com/forms/d/e/1FAIpQLSe7sqkY9Ibv6OxPzSTaSJSstksgT9GrXtuSyIHJfm-76k_eYA/formResponse';

  // Function to handle form submission
  const onSubmit = async (data: FormData) => {
    // Log form data
    console.log(data);

    // You can add any additional logic here

    // Submit the form data to the Google Form
    const formData = new FormData();
    formData.append('entry.2099102864', data.name);
    formData.append('entry.696453027', data.email);
    setIsSubmitted(true);
    try {
      await fetch(googleFormAction, {
        method: 'POST',
        body: formData,
      });
    
    } catch (error) {
      console.error('Error submitting the form:', error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form className="w-full max-w-md" onSubmit={handleSubmit(onSubmit)}>
        <p className='mt-1 mb-7 text-3xl text-center dark:text-white'>
          Please Subscribe! &#9786;
        </p>
        <div className='mb-5'>
          <label
            htmlFor='name'
            className='mb text-xl text-center dark:text-white'
          >
            Full Name
          </label>
          <input
            type='text'
            placeholder='Full Name'
            className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md mt-2'
            {...register('name', { required: true })}
          />
        </div>
        <div className='mb-5'>
          <label
            htmlFor='name'
            className='mb text-xl text-center dark:text-white'
          >
            Email Address
          </label>
          <input
            type='email'
            placeholder='example@domain.com'
            className='mt-2 w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
            {...register('email', { required: true })}
          />
        </div>
        <div className='text-center'>
            <button className='hover:shadow-lg active:bg-purple-300 rounded-md bg-purple-500 py-3 px-8 text-base font-semibold text-white outline-none'>
                Submit
            </button>
        </div>


        {isSubmitted ? 
        <p className="text-2xl text-green-600 mt-4 text-center">
          Thank you for subscribing!
        </p>:''
      }
      </form>
    </div>
  );
};

export default Contact;
