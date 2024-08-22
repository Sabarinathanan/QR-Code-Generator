import { useState } from "react";
import '../component/Scanner.css'

function Scanner() {
  const [img, setImg] = useState("https://source.unsplash.com/100x100?scanner?");
  const [loading, setLoading] = useState(false);
  const [qrname, setQrname]=useState("www.google.com")
  const [size,setSize]=useState("150x150")
  function Generater() {
    setLoading(true);
    try {
      const url = `https://api.qrserver.com/v1/create-qr-code/?size=${size}&${size}&data=${encodeURIComponent(qrname)}`;
      setImg(url);
    } 
    catch (error) {
      console.error("error:", error);
    } 
    finally {
      setLoading(false);
    }
  }
  function Downloader() {

  }
  return (
    <div id="container-scanner">
      <h1>QR CODE GENERATOR</h1>
      {loading && <p>please wait....</p>}
      {img && <img src={img} alt="QR code" />}
      <div>
        <label htmlFor="datainput">Data for QR Code:</label>
        <input
          type="text" value={qrname} onChange={(e)=>setQrname(e.target.value)}
          className="datainput"
          placeholder="Enter data for QR code"
        />
        <label htmlFor="sizeinput">Image Size(e.g., 150):</label>
        <input
          type="text" value={size} onChange={(e)=>setSize(e.target.value)}
          className="datainput"
          placeholder="Enter Image size"
        />
      </div>
      <div>
        <button className="generate" onClick={Generater}>
          Generate QR Code
        </button>
        <button className="download" onClick={Downloader}>
          Download QR Code
        </button>
      </div>
    </div>
  );
}

export default Scanner;