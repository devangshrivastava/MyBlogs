import Image from 'next/image';
import Posts from './components/Posts';
import Contact from './components/Contact';

export default function Home() {
  return (
    <main className='px-6 mx-auto'>
      <p className='mt-12 text-3xl text-center dark:text-white'>
        Hi! I 
        <span className='whitespace-nowrap'>
          &apos;m <span className='font-bold'>Devang </span>. 
        </span>        
      </p>

      <p className='mt-1 mb-12 text-3xl text-center dark:text-white'>
        Hope you like reading my experience!
      </p>
      <Posts />

      

      <Contact />
    </main>
  );
}
