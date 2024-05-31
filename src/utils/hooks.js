/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { useState, useLayoutEffect } from 'react';
import { useEffect } from 'react';

/**
 * custom hoook to detect the window size of a broswer
 * @return {Array} [height, width ].
 */
export const useWindowSize = () => {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
};


export const useHashNodePosts = async(_tag, _page) => {
  const hashNodeApiUrl = process.env.GATSBY_HASHNODE_API_URL + _tag + '/' + _page;
  const response = await axios.get(hashNodeApiUrl,{headers: {
      'X-API-Key': `${process.env.GATSBY_HASHNODE_API_KEY}`,
      'Content-Type': 'application/json',
    }});
  return response.status === 200 ? response.data.data.user.publication.posts : [];
};
