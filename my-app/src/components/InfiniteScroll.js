import React, { useEffect, useRef } from 'react';

const InfiniteScroll = ({ fetchMoreData, hasMore }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollHandler = () => {
      if (scrollRef.current && window.innerHeight + window.scrollY >= scrollRef.current.offsetTop) {
        fetchMoreData();
      }
    };

    window.addEventListener('scroll', scrollHandler);
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, [fetchMoreData]);

  return <div ref={scrollRef}>{hasMore && <p>...</p>}</div>;
};

export default InfiniteScroll;
