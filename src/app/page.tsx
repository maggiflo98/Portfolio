import Head from 'next/head';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillGithub,AiFillLinkedin,AiFillFacebook} from 'react-icons/ai';
import Image from "next/image";
import deved from "../../public/dev-ed-wave.png";
import design from '../../public/design.png';
import code from '../../public/code.png'
import consulting from '../../public/consulting.png'
import web1 from "../../public/web1.png";
import web2 from "../../public/web2.png";
import web3 from "../../public/web3.png";
import web4  from "../../public/web4.png";
import web5 from "../../public/web5.png";
import web6 from "../../public/web6.png";
// import {  useState} from "react";

export default function Home() {
  // const[darkMode, setDarkMode] = useState(false);
  return (
          <div>
              <Head>
                <title>Florence Atieno Portfolio</title>
              </Head>
          <main className='bg-white px-10 md:px-20 lg:px-40'>
            <section className='min-h-screen'>
              <nav className='py-10 mb-12 flex justify-between'>
                  <h1 className='text-xl font-burtons'>Developed by Florence</h1>
                  <ul className='flex items-center'>
                    <li><BsFillMoonStarsFill   className='cursor-pointer text-2xl'/></li>
                    <li><a className="bg-gradient-to-r from-cyan-500 to-red-700 text-white px-4  py-2 rounded ml-8"href="#">Resume</a></li>
                  </ul>
              </nav>
               <div className='text-center p-10 '>
                <h2 className='text-5xl py-2 text-teal-600 font-medium'>Florence Atieno</h2>
                <h3 className='text-2xl py-2 md:text-3xl'>Front-end Developer</h3>
                <p className='text-md py-5 leading-8 text-gray-800 md:text-xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem labore quia ea repellendus minus! Quisquam vel iusto, eum dolorum accusamus suscipit quaerat, est eveniet sed expedita itaque voluptate distinctio possimus?</p>
               </div>
               {/* desription div for above */}
               <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
                  <AiFillGithub/>
                  <AiFillFacebook/>
                  <AiFillLinkedin/>
               </div>
               {/* icons */}
               <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20  overflow-hidden'>
                  <Image src={deved} layout="fill" objectFit='cover' />

               </div>
               {/* avatar */}
            </section>
            {/* section page  for services */}
            <section>
              <div>
                <h3 className='text-3xl py-1'>Services I offer</h3>

                <p className='text-md py-2 leading-8 text-gray-800'>Lorem ipsum dolor sit amet consectetur
                 adipisicing elit. Earum voluptas sequi at sint quisquam iure perferendis architecto 
                 assumenda deleniti, amet incidunt nam quibusdam possimus facilis officiis libero ipsa rem itaque.
                <span className='text-teal-800'>agencies </span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum voluptas sequi at sint quisquam iure perferendis architecto assumenda deleniti, amet incidunt nam quibusdam 
                possimus facilis officiis libero ipsa rem itaque.
                </p>
                <p className='text-md py-2 leading-8 text-gray-800'>Lorem ipsum dolor sit amet consectetur
                 adipisicing elit. Earum voluptas sequi at sint quisquam iure perferendis architecto 
                 assumenda deleniti, amet incidunt nam quibusdam possimus facilis officiis libero ipsa rem itaque.</p>
              </div>
              {/* services */}
              <div className="lg:flex gap-10">
                <div className='text-center shadow-lg p-10 rounded-xl my-10'>
                  <Image src={design} width={100} height={100}/>
                  <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
                  <p className='py2'> Creating Elegant Designs Suited for your needs.</p>
                    <h4 className='py-4 text-teal-600'>Design tools I use</h4>
                    <p className='text-gray-800 py-1'>Figma</p>
                    <p className='text-gray-800 py-1'>Photoshop</p>

                    {/* for images */}
                </div>

                <div className='text-center shadow-lg p-10 rounded-xl my-10'>
                  <Image src={consulting} width={100} height={100}/>
                  <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
                  <p className='py2'> Creating Elegant Designs Suited for your needs.</p>
                    <h4 className='py-4 text-teal-600'>Design tools I use</h4>
                    <p className='text-gray-800 py-1'>Figma</p>
                    <p className='text-gray-800 py-1'>Photoshop</p>

                    {/* for images */}
                </div>


                <div className='text-center shadow-lg p-10 rounded-xl my-10'>
                  <Image src={code} width={100} height={100}/>
                  <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
                  <p className='py2'> Creating Elegant Designs Suited for your needs.</p>
                    <h4 className='py-4 text-teal-600'>Design tools I use</h4>
                    <p className='text-gray-800 py-1'>Figma</p>
                    <p className='text-gray-800 py-1'>Photoshop</p>

                    {/* for images */}
                </div>


                       </div>
            </section>
{/* servives done */}
{/* dark mode activated */}
<section>
  <div>
    <h3 className='text-3xl py-1'>Portfolio</h3>
 
  <h3 className='text-3xl py-1'>Services I offer</h3>

<p className='text-md py-2 leading-8 text-gray-800'>Lorem ipsum dolor sit amet consectetur
 adipisicing elit. Earum voluptas sequi at sint quisquam iure perferendis architecto 
 assumenda deleniti, amet incidunt nam quibusdam possimus facilis officiis libero ipsa rem itaque.
<span className='text-teal-800'>agencies </span>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum voluptas sequi at sint quisquam iure perferendis architecto assumenda deleniti, amet incidunt nam quibusdam 
possimus facilis officiis libero ipsa rem itaque.
</p>
<p className='text-md py-2 leading-8 text-gray-800'>Lorem ipsum dolor sit amet consectetur
 adipisicing elit. Earum voluptas sequi at sint quisquam iure perferendis architecto 
 assumenda deleniti, amet incidunt nam quibusdam possimus facilis officiis libero ipsa rem itaque.
 </p>
 </div>
  {/* portfolio sectence */}
  <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
    <div className='basis '><Image src={web1}/></div>
  
  {/* portfolio images */}
  
    <div className='basis'><Image src={web2}/></div>
  
  {/* portfolio images */}
  
    <div className='bais'><Image src={web3}/></div>
  
  {/* portfolio images */}
  
    <div className='basis-1/3 flex-1'><Image src={web4} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/></div>
  
  {/* portfolio images */}
  
    <div className='basis'><Image src={web5}/></div>
  
  {/* portfolio images */}
  
    <div className='basis'><Image src={web6}/></div>
  </div>
  {/* portfolio images */}
</section>

          </main>
      </div>
    
  )
}
