import React, { useState } from 'react';
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage';
import { storage } from '../firebase';

const Test = () => {
  

  const upLoadImage = (e) => {
    e.preventDefault();
    const file = e.target[0].files[0];
    upload(file);
  };
  const upload = (file) => {
    if (!file) return;

    const sotrageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(sotrageRef, file);
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(prog);
      },
      (error) => console.log(error),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);
        });
      }
    );
  };
  return (
    <div className='flex justify-center items-center h-screen'>
      <div>
        <form onSubmit={upLoadImage}>
          <input type='file' className='input' />
          <button type='submit'>Upload image</button>
              </form>
              <h1>{progress}</h1>
      </div>
    </div>
  );
};

export default Test;
