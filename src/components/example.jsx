import React, { useState } from 'react';
import QrReader from 'react-web-qr-reader';
import "./example.css"

const Example = () => {
  const delay = 500;

  const previewStyle = {
    height: 200,
    width: 290,
  };

  const [result, setResult] = useState('No result');

  const handleScan = (result) => {
    if (result) {
      setResult(result.data);
    }
  };

  const handleError = (error) => {
    console.log(error);
  };

  return (
    <div className="page">
    <div className="QrReader">
      <h2>Scan any QR code</h2>
      <QrReader
        delay={delay}
        style={previewStyle}
        onError={handleError}
        onScan={handleScan}        
      />
      <a href={result} className="result">{result}</a>
    </div>
      

    </div>
  );
};

export default Example;