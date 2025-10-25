import React, { useContext } from 'react';
import { DataContext } from '../../Contexts/DataContext';
import { useParams } from 'react-router';
import Error404Logo from "../../../assets/App-Error.png"

const Post = () => {
    const { id: paramId } = useParams();
    const { dataGot } = useContext(DataContext);



    const postInfo = dataGot.find(item => item.id === paramId)

    if (postInfo == undefined) {
        return (
            <div className='flex flex-col gap-5 justify-center items-center h-[80vh]'>
                <img src={Error404Logo} alt="404 Not Found" />
                <h2 className='text-4xl font-semibold'>Page Not Found</h2>
            </div>
        )
    }


    return (
        <div className='flex flex-col justify-center items-center gap-5 mt-10 p-2 lg:p-0'>
            <title>{"GameHub - " + postInfo.title}</title>
            <div className="flex-1">
                <img className='max-h-[400px] rounded-2xl' src={postInfo.coverPhoto} alt="" />
            </div>
            <div className="flex-1 text-left max-w-[700px]">
                <h1 className='text-2xl font-semibold'>{postInfo.title}</h1>
                <div className="flex gap-10 mt-2">
                    <p>
                        <span>Category: </span>
                        {postInfo.category}
                    </p>
                    <p>
                        <span>Rating: </span>
                        {postInfo.ratings}
                    </p>
                </div>
                <p className='mt-2'>Created by: <span className='text-primary'>{postInfo.developer}</span></p>
                <p className='mt-2'>Description:</p>
                <p className=''>{postInfo.description}</p>
                <div className="postInfo flex gap-5 mt-4 items-center">
                    <span>Download Link:</span>
                    <a className=' rounded-md bg-primary text-white py-1.5 px-2' href={postInfo.downloadLink} target='_blank'>Open Download Page</a>
                </div>
            </div>

        </div>
    );
};

export default Post;