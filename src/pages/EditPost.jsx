import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import appwriteService from '../appwrite/configure';
import { PostForm } from '../Components';

function EditPost() {
    const [post, setPost] = useState(null);
    const {slug} = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        if (slug) {
            appwriteService.getPost(slug).then((post)=>{
                if (post) {
                    setPost(post)
                }
            })
        } else{
            navigate("/")
        }
    },[])

  return post ? (
    <div className='py-8'>
        <PostForm post={post}/>
    </div>
  ) : null 
}


export default EditPost