import Image from 'next/image';
import Posts from './components/Posts';

export default function Home() {
  return (
    <main className='px-6 mx-auto'>
      <p className='mt-12 mb-12 text-3xl text-center dark:text-white'>
        Hi! I 
        <span className='whitespace-nowrap'>
          &apos;m <span className='font-bold'>Devanggg </span>. 
        </span>        
      </p>
      <Posts />
    </main>
  );
}
