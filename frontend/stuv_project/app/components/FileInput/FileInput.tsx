'use client';
import React, { useState } from 'react';

const FileInput = () => {
    const [isUploading, setIsUploading] = useState(false);
    const [UploadComplete, setUploadComplete] = useState(false);
  
    const handleUpload = () => {
        setUploadComplete(false);
        setIsUploading(true);
        setTimeout(() => { setIsUploading(false), setUploadComplete(true); }, 5000);
    };
  return (
    <div>
        <div className='flex items-center justify-center pt-20 pb-10'>
            <input type="file" className="file-input file-input-bordered w-full max-w-[40%]" />
            <button className='btn btn-wide hover:bg-primary ml-5' onClick={handleUpload}>Upload</button>
        </div>

        {isUploading && (
        <div>
            <div role="alert" className="alert alert-info mx-auto max-w-[58%] flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <span>Der Upload wurde gestartet!</span>
            </div>
            <div className='flex items-center justify-center pt-10 pb-40'>  
            <progress className="progress w-80"></progress>
            </div>
        </div>
        )}
        
        {UploadComplete && (
        <div className='pb-40'>
            <div role="alert" className="alert alert-success mx-auto max-w-[58%] flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>Upload successfull!</span>
            </div>
        </div>
        )}
        

    </div>
  )
}

export default FileInput