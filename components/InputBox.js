import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React, { useRef, useState } from 'react';
import azsrc from '../public/images/Capture.PNG';
import { EmojiHappyIcon } from '@heroicons/react/outline';
import { CameraIcon, VideoCameraIcon } from '@heroicons/react/solid';
import { db, storage } from '../firebase';
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from '@firebase/firestore';
import { ref, getDownloadURL, uploadString } from '@firebase/storage';
import { css } from '@emotion/react';
import { RingLoader } from 'react-spinners';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const InputBox = () => {
  const filePickerRef = useRef(null);
  const inputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);

  const sendPost = async (e) => {
    e.preventDefault();
    if (!inputRef.current.value) return;
    if (!session) return;

    setLoading(true);
    const docRef = await addDoc(collection(db, 'posts'), {
      username: session.user.name,
      caption: inputRef.current.value,
      profileImg: session.user.image,
      timestamp: serverTimestamp(),
    });
    if (selectedFile) {
      const imageRef = ref(storage, `posts/${docRef.id}/image`);
      await uploadString(imageRef, selectedFile, 'data_url').then(
        async (snapshot) => {
          const downloadURL = await getDownloadURL(imageRef);
          await updateDoc(doc(db, 'posts', docRef.id), {
            image: downloadURL,
          });
        }
      );
    }
    setSelectedFile(null);
    setLoading(false);
  };

  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target.result);
    };
  };
  return loading ? (
    <RingLoader color='black' css={override} size={150} />
  ) : (
    <div className='bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6'>
      <div className='flex space-x-4 p-4 items-center'>
        <Image
          className='rounded-full'
          src={session?.user?.image || azsrc}
          width={40}
          height={40}
          layout='fixed'
          alt='pic'
        />
        <form className='flex flex-1'>
          <input
            ref={inputRef}
            className='rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none'
            type='text'
            placeholder={`${
              session?.user?.name
                ? 'Upload an image please, write a caption and hit Enter 😎 '
                : 'Please Sign In to upload status'
            }`}
          />
          <button hidden onClick={sendPost}>
            Submit
          </button>
        </form>

        {selectedFile && (
          <div className='flex flex-col'>
            <img
              src={selectedFile}
              alt='no'
              className='h-20 w-20 object-contain rounded-md cursor-none'
            />
            <p
              className='text-xs text-red-500 text-center cursor-pointer hover:scale-110 transform transition duration-75 ease-linear'
              onClick={() => setSelectedFile(null)}
            >
              Delete
            </p>
          </div>
        )}
      </div>
      <div className='flex justify-evenly p-3 border-t'>
        <div className='inputIcon'>
          <VideoCameraIcon className='h-7 text-red-500' />
          <p className='text-xs sm:text-sm xl:text-base'>Live Video</p>
        </div>
        <div
          className='inputIcon'
          onClick={() => filePickerRef.current.click()}
        >
          <CameraIcon className='h-7 text-green-400' />
          <p className='text-xs sm:text-sm xl:text-base'>Upload Photo </p>
          <input
            ref={filePickerRef}
            type='file'
            hidden
            onChange={addImageToPost}
          />
        </div>
        <div className='inputIcon'>
          <EmojiHappyIcon className='h-7 text-yellow-300' />
          <p className='text-xs sm:text-sm xl:text-base'>Feeling/Activity</p>
        </div>
      </div>
    </div>
  );
};

export default InputBox;
