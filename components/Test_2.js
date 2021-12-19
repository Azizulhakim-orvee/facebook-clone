import React from 'react';

const Test_2 = () => {
  const uploadPost = async () => {
    console.log('shuru');

    // Create a post and add to firestore 'posts' collection
    // get the post ID for the newly created post
    // upload the image to firebase storage with the post ID
    // get a download URL from fb storage and update the original post with image

    const docRef = await addDoc(collection(db, 'posts'), {
      username: session.user.username,
      caption: captionRef.current.value,
      profileImg: session.user.image,
      timestamp: serverTimestamp(),
    });

    console.log('new doc added with ID', docRef.id);
    console.log('half done');

    const imageRef = ref(storage, `posts/${docRef.id}/image`);

    await uploadString(imageRef, selectedFile, 'data_url').then(
      async (snapshot) => {
        const downloadURL = await getDownloadURL(imageRef);

        await updateDoc(doc(db, 'posts', docRef.id), {
          image: downloadURL,
        });
      }
    );
    console.log('shesh bhai');

    setSelectedFile(null);
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
  return <div></div>;
};

export default Test_2;
