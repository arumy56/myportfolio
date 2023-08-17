
import React from 'react'
import Layout from '../components/Layout'
export default function Projects() {
  return (
<Layout>
    <div>
      
      <h3 className='text-center uppercase font-bold'>Projects I've Created</h3>

     <div className='flex  justify-center mt-16 '>
     <div className='flex flex-col items-center mr-8' >
      <img className='h-60 w-60  object-cover ' src="https://neilpatel.com/wp-content/uploads/2018/10/blog.jpg" alt="blog post" />
  <a className='text-bold  hover:text-sky-400 mt-1' href="http://nordin-blog.vercel.app" target='_blank' rel='noopener noreferrer'>
  <span>Click here to view the blog:</span>
  </a>
    </div>
<div className='flex flex-col items-center'>
  <img className='h-60  w-full object-cover' src="https://i5.walmartimages.com/asr/e438d372-f7c0-47e6-a82a-2dda8ea47dc2.d6f2cddf6e6e74bfe92ddab373f757cd.jpeg" alt="adhkar counter" />
  <a className='text-bold  hover:text-sky-400 mt-1' href=" https://incandescent-lebkuchen-8a8d6c.netlify.app/" target='_blank'>
    <span>Click here to view</span>
  </a>
  </div>
  </div>
  <div className='flex flex-col items-center justify-center '>
  <h3 className='text-center mt-8'>You can also view my GitHub profile</h3>
  <img className='h-16 w-16 mt-1' src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub icon" />
  <a className='text-bold hover:text-sky-400 mt-1' href="https://github.com/arumy56" target='_blank' rel='noopener noreferrer'>
    Click here to view
  </a>
</div>

 
    </div>
    </Layout>
  )
}
