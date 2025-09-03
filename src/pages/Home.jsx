import React, { useEffect, useState } from 'react'
import appwriteService from "../appwrite/configure";
import { PostCard } from '../Components';
import { useNavigate } from 'react-router-dom';
import AllPost from './AllPost';




function Home() {
    const [posts, setPosts] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])

    // if (posts.length === 0) {
    //     return (
    //         <div className="w-full py-8 mt-4 text-center">

    //                 <div className="flex flex-wrap">
    //                     <div className="p-2 w-full">
    //                         <h1 className="text-2xl font-bold hover:text-gray-500">
    //                             Login to read posts
    //                         </h1>
    //                     </div>
    //                 </div>

    //         </div>
    //     )
    // }
    return (
        <div
            style={{ fontFamily: "'Mogra', Helvetica" }}
            className='min-h-screen relative z-10 w-full py-8 flex-grow mt-'>

            {/* <div className='flex flex-wrap mt-16'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post}/>
                        </div>
                    ))}
                </div> */}

            <div className='flex flex-col gap-16 relative min-h-screen text-center justify-center items-center'>
                <div className='flex flex-col gap-2'>
                <h1 className="text-8xl font-bold mb-4 text-[#b1dd40]">
                    Got Something to Say <span className=" bg-gradient-to-r from-lime-400 to-yellow-300 bg-clip-text text-transparent">Blog It!</span>
                    
                </h1>
                <h1 style={{ fontFamily: "'Poppins', sans-serif" }}
                 className='text-4xl text-[#b1dd40]'>
                     Share your ideas, stories, and passions with the world—your way.
                </h1>
                </div>
                
                <button 
                onClick={()=> navigate("/add-post")}
                className="flex items-center justify-center gap-2 px-6 py-3 hover:border-emerald-700 hover:bg-[#30332f]  transition duration-300 bg-transparent backdrop-blur-md text-[#fdfbe3] text-lg font-semibold rounded-full border-2 border-[#b1dd40] min-w-40 hover:scale-105  ">
                    <span>Start Blogging</span>

                </button>
            </div>

            {/* <div className="flex flex-col gap-7 items-center justify-center  relative"> */}
  {/* Heading */}
  {/* <div className="heading text-center justify-center flex">
    <p className="font-mogra font-normal text-transparent text-7xl tracking-normal leading-normal whitespace-nowrap">
      <span className="text-white">Got Something to Say? </span>
      <span className="text-[#ace48c]">Blog It!</span>
    </p>
  </div> */}

  {/* Blurred Background Box */}
  {/* <div className="absolute top-[20%] w-[1184px] h-[469px] bg-[#20443d] rounded-3xl overflow-hidden border-4 border-[#427727]">
    <div className="relative w-[1597px] h-[658px] -top-[50px] -left-[42px]">
      <div className="w-[319px] h-[294px] top-[364px] left-[319px] bg-[#ace48c] rounded-full absolute blur-[116.5px]" />
      <div className="w-[319px] h-[294px] top-0 left-0 bg-[#427727] rounded-full absolute blur-[116.5px]" />
      <div className="w-[553px] h-[467px] top-[70px] left-[1044px] bg-[#427727] rounded-full absolute blur-[116.5px]" />

      <img
        className="absolute w-[493px] h-[394px] top-[84px] left-[72px] object-cover"
        alt="Rectangle"
        src="/path-to-image.jpg" // <-- Make sure to add src
      />

      <div className="absolute w-[592px] h-[242px] top-[147px] left-[630px]">
        <p className="absolute w-[588px] top-[113px] left-0 opacity-70 font-mogra font-normal text-white text-4xl tracking-wide leading-normal">
          Share your ideas, stories, and passions with the world—your way.
        </p>
        <p className="absolute w-[518px] top-0 left-0 font-mogra font-normal text-white text-[40px] tracking-wide leading-normal">
          10 Tips for Successful Blogging
        </p>
      </div>
    </div>
  </div> */}
  
  {/* Button */}
  {/* <div className="flex items-center mt-10">
    <button className="box-border w-80 h-[59px] bg-[#427727] text-white text-lg font-semibold rounded-full">
      Start
    </button>
  </div>
</div> */}




            {/* <div className="absolute w-[1440px] h-[1024px] top-0 left-0 bg-black opacity-10" /> */}

            {/* <button className="all-[unset] box-border absolute w-80 h-[59px] top-[864px] left-[561px]">
            <div className="relative w-[318px] h-[59px] bg-[#427727] rounded-[51px]">
              <div className="absolute top-1.5 left-[103px] [font-family:'Mogra-Regular',Helvetica] font-normal text-white text-[40px] tracking-[2.00px] leading-[normal] whitespace-nowrap">
                Start
              </div>
            </div>
          </button>

          <p className="absolute top-[234px] left-[134px] [font-family:'Mogra-Regular',Helvetica] font-normal text-transparent text-[80px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
            <span className="text-white">Got Something to Say? </span>

            <span className="text-[#ace48c]">Blog It!</span>
          </p>

          <div className="absolute w-[1184px] h-[469px] top-[100px] left-32 bg-[#20443d] rounded-3xl overflow-hidden border-4 border-solid border-[#427727]">
            <div className="relative w-[1597px] h-[658px] top-[-50px] left-[-42px]">
              <div className="w-[319px] h-[294px] top-[364px] left-[319px] bg-[#ace48c] rounded-[159.5px/147px] absolute blur-[116.5px]" />

              <div className="w-[319px] h-[294px] top-0 left-0 bg-[#427727] rounded-[159.5px/147px] absolute blur-[116.5px]" />

              <div className="w-[553px] h-[467px] top-[70px] left-[1044px] bg-[#427727] rounded-[276.5px/233.5px] absolute blur-[116.5px]" />

              <img
                className="absolute w-[493px] h-[394px] top-[84px] left-[72px] object-cover"
                alt="Rectangle"
               
              />

              <div className="absolute w-[592px] h-[242px] top-[147px] left-[630px]">
                <p className="absolute w-[588px] top-[113px] left-0 opacity-[0.67] [font-family:'Mogra-Regular',Helvetica] font-normal text-white text-4xl tracking-[1.80px] leading-[normal]">
                  Share your ideas, stories, and passions with the world—your
                  way.
                </p>

                <p className="absolute w-[518px] top-0 left-0 [font-family:'Mogra-Regular',Helvetica] font-normal text-white text-[40px] tracking-[2.00px] leading-[normal]">
                  10 Tips for Successful Blogging
                </p>
              </div>
            </div>
          </div>
        </div> */}

              <AllPost/>
        </div>

    )
}

export default Home