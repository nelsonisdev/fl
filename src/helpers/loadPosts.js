import { collection, getDocs } from 'firebase/firestore/lite';
import { firebaseDB } from '../firebase/config';

export const loadPosts = async () => {
  const collectionRef = collection(firebaseDB, `FL2022/fastlearning/posts`);
  const docs = await getDocs(collectionRef);

  const posts = [];
  docs.forEach((doc) => {
    posts.push({
      id: doc.id,
      ...doc.data(),
    });
  });

  return posts;
};
