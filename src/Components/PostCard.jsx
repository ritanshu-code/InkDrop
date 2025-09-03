import React from 'react'
import { Link } from 'react-router-dom'
import appwriteService from '../appwrite/configure'

function PostCard({$id, title, featuredImage}) {
    const imgUrl = appwriteService.getfilePreview(featuredImage);
        
  return (
    <Link to={`/post/${$id}`}>
    <div className='w-full bg-[#111606] rounded-[23px] hover:border-2 hover:border-[#b1dd40] p-4 transition duration-300'>
        <div className='backdrop-blur-md bg-white/10 border-2 border-[#b1dd40]/30 rounded-xl shadow-lg p-4  '>
            <div className='w-full justify-center mb-4 '>
        
            <img src={imgUrl} alt={title} 
            className='rounded-xl'/>
            
        </div>
        <h2 style={{ fontFamily: "'Mogra', Helvetica" }} 
        className='text-xl font-bold text-white'>
            {title}
        </h2>
        
            </div>
    </div>
    </Link>
  )
}

export default PostCard


//  <div className="relative w-[379px] h-[400px] bg-[#20443d] rounded-[23px] overflow-hidden border-4 border-solid border-[#427727]">
//       <img
//         className="absolute w-[379px] h-[227px] top-0 left-0 object-cover"
//         alt="Rectangle"
//         src={rectangle11}
//       />

//       <div className="absolute w-[365px] h-[338px] top-[261px] left-3.5">
//         <div className="absolute w-[319px] h-[294px] top-11 left-4 bg-[#ace48c] rounded-[159.5px/147px] blur-[116.5px]" />

//         <p className="absolute w-[365px] top-0 left-0 [font-family:'Mogra-Regular',Helvetica] font-normal text-white text-xl tracking-[1.00px] leading-[normal]">
//           The Importance of Blogging for Businness
//         </p>

//         <p className="absolute w-[365px] top-14 left-0 opacity-[0.67] [font-family:'Mogra-Regular',Helvetica] font-normal text-white text-xl tracking-[1.00px] leading-[normal]">
//           Discover how blogging can boost your bussiness
//         </p>
//       </div>

//       <img
//         className="absolute w-[103px] h-4 top-[237px] left-3.5"
//         alt="Union"
//         src={union}
//       />
//     </div>