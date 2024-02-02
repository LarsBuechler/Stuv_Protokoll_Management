'use client';
import React, { useState, useEffect, useRef } from 'react';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    "It's over Anakin, I have the high ground.",
    "You underestimate my power!"
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleInputKeyPress = (event: { key: string; }) => {
    if (event.key === 'Enter') {
      setMessages([...messages, inputValue]);
      setInputValue('');
    }
  };

  const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
      if (messages.length) {
        ref.current?.scrollIntoView({
          behavior: "smooth",
          block: "end",
        });
      }
    }, [messages.length]);

  return (
    <div className='pb-8 ml-12 mr-16 rounded-lg shadow shadow-base-300'>
      <div className='grid grid-flow-rows gap-y-10 p-6 h-100'>
        <div className='h-80 overflow-y-auto'>
          {messages.map((message, index) => (
            <div key={index} className={`chat ${index % 2 === 0 ? 'chat-start' : 'chat-end'} mx-4`}>
              <div className='chat-bubble'>{message}</div>
            </div>
          ))}
          <div ref={ref} />
        </div>

        <div className='text-center ml-12 mr-16'>
          <input
            type='text'
            placeholder='Wie kann ich dir helfen?'
            className='input input-bordered input-secondary w-[100%]'
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleInputKeyPress}
          />
        </div>
      </div>
    </div>
  );
};

export default Chatbot;

    