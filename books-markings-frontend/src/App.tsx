import React, { useState } from 'react';
import './App.css';

import FileUpload from './FileUploader';

function App() {
  const [fileContents, setFileContents] = useState<string>('');

  const handleFileRead = (contents: string) => {
    setFileContents(contents);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>File Upload Example</h1>
      </header>
      <main className="App-main">
        <FileUpload onFileRead={handleFileRead} />
      </main>
    </div>
  );
}

export default App;
