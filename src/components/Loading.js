import React, { useState, useEffect } from 'react';

const Loading = ({ text = 'Loading' }) => {
  const [content, setContent] = useState(text)

  useEffect(() => {
    const id = window.setInterval(() => {
      setContent((content) => {
        return content === `${text}...` ?
          text
          : `${content}.`
      })
    }, 300)
  }, [text])

  return (
    <div className="text-center">
      <h1>{content}</h1>
    </div>
  );
};

export default Loading;