import React, { useEffect, useState } from 'react'
import appwriteService from '../appwrite/configure'
import { PostCard } from '../Components'

function AllPost() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        appwriteService.getPosts().then((response) => {
            if (response && Array.isArray(response.documents)) {
                setPosts(response.documents);
            } else {
                console.warn("Unexpected response from getPosts:", response);
            }
        });
    }, []);

    return (
        <div className='h-screen w-full py-20  '>
            <div className='flex flex-wrap '>
                {posts.map((post) => {
                    return (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard
                                $id={post.$id}
                                title={post.title}
                                featuredImage={post.featuredImage}
                            />
                        </div>
                        
                    );
                })}
                
            </div>
            {/* <div className="absolute w-[387px] h-[408px] -top-1 -left-1 bg-[#20443d] rounded-[23px] overflow-hidden border-4 border-solid border-[#427727]">
            <img
              className="absolute w-[379px] h-[227px] top-0 left-0 object-cover"
              alt="Rectangle"
              src={rectangle11}
            />

            <div className="absolute w-[365px] h-[338px] top-[261px] left-3.5">
              <div className="absolute w-[319px] h-[294px] top-11 left-4 bg-[#ace48c] rounded-[159.5px/147px] blur-[116.5px]" />

              <p className="absolute w-[365px] top-0 left-0 [font-family:'Mogra-Regular',Helvetica] font-normal text-white text-xl tracking-[1.00px] leading-[normal]">
                The Importance of Blogging for Businness
              </p>

              <p className="absolute w-[365px] top-14 left-0 opacity-[0.67] [font-family:'Mogra-Regular',Helvetica] font-normal text-white text-xl tracking-[1.00px] leading-[normal]">
                Discover how blogging can boost your bussiness
              </p>
            </div>

            <img
              className="absolute w-[103px] h-4 top-[237px] left-3.5"
              alt="Union"
              src={union}
            />
          </div> */}
        </div>
    )
}

export default AllPost