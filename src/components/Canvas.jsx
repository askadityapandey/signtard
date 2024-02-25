// Canvas.jsx
import React, { useRef, useState } from 'react';

function Canvas() {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [prevPos, setPrevPos] = useState({ x: 0, y: 0 });

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    setIsDrawing(true);
    setPrevPos({ x: offsetX, y: offsetY });
  };

  const draw = ({ nativeEvent }) => {
    if (!isDrawing) return;
    const ctx = canvasRef.current.getContext('2d');
    const { offsetX, offsetY } = nativeEvent;
    ctx.beginPath();
    ctx.moveTo(prevPos.x, prevPos.y);
    ctx.lineTo(offsetX, offsetY);
    ctx.strokeStyle = '#000'; // Change color if needed
    ctx.lineWidth = 2; // Change thickness if needed
    ctx.stroke();
    setPrevPos({ x: offsetX, y: offsetY });
  };

  const endDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const ctx = canvasRef.current.getContext('2d');
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
  };

  const downloadSignature = () => {
    const canvas = canvasRef.current;
    const image = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.download = 'signature.png';
    link.href = image;
    link.click();
  };

  return (
    <div className="canvas-container">
      <h2 className=" text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-blue-to-r from bg-blue-700 to to-green-700">
  Draw your Sign!
</h2>

      <canvas
        ref={canvasRef}
        width="400"
        height="200"
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={endDrawing}
        onMouseLeave={endDrawing}
        onTouchStart={startDrawing}
        onTouchMove={draw}
        onTouchEnd={endDrawing}
        style={{ border: '2px solid #000', borderRadius: '8px', backgroundColor: '#fff' }} // Apply border and background color
      ></canvas>
      <div className="buttons mt-4">
      <div className="buttons mt-4">
  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2" onClick={clearCanvas}>Clear</button>
  <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={downloadSignature}>Download</button>
</div>

      </div>
    </div>
  );
}

export default Canvas;
