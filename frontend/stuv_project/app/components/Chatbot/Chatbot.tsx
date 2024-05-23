'use client';
import React, { useState, useEffect, useRef } from 'react';


const Chatbot = () => {

  const [messages, setMessages] = useState([
    "It's over Anakin, I have the high ground.",
    "You underestimate my power!"
  ]);

  const [inputValue, setInputValue] = useState('');

  //
  const handleInputKeyPress = async (event: { key: string; }) => {
    if (event.key === 'Enter') {
      const newMessages = [...messages, inputValue]; // Vorherige Nachricht hinzufügen
      setInputValue('');
  
      try {
        setMessages(newMessages); // Vorherige Nachricht anzeigen
  
        // Fügen Sie hier eine Verzögerung von 3 Sekunden für die Antwort ein
        setTimeout(async () => {
          const response = await fetch('https://random-data-api.com/api/v2/beers');
          const data = await response.json();
          const beerName = data.brand;
  
          setMessages([...newMessages, beerName]); // Neue Antwort hinzufügen
        }, 1000); // Verzögerung von 3 Sekunden (3000 Millisekunden)
      } catch (error) {
        console.error('Fehler beim Abrufen der Antwort:', error);
      }
    }
  };
  


  //Referenzierung des letzten Elements (Scrollbar immer unten)
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
    <div className='pb-8 mr-4 rounded-lg shadow shadow-base-300'>
      <div className='grid grid-flow-rows gap-y-4 p-4 h-100'>
        <div className='h-80 overflow-y-auto'>
          {messages.map((message, index) => (
            <div key={index} className={`chat ${index % 2 === 0 ? 'chat-start' : 'chat-end'} mx-4 mb-4`}>
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

    