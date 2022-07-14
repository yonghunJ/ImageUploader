import { useState } from 'react';
import ImageUpload from './components/ImageUpload';
import './App.css';

function App() {
  const [loadImageLink, setLoadImageLink] = useState('');

  const imageLinkOnChange = (e) => {
    const { value } = e.target;
    setLoadImageLink(value);
  }
  return (
    <div className="App">
      <header className="App-header">
        <ImageUpload 
          setImageLink={setLoadImageLink}
        />  
      </header>
      <div>
        <input 
          type="text"
          value={loadImageLink}
          placeholder="Enter a tag"
          onChange={imageLinkOnChange}
        />
      </div>
      <div>
        IMAGE LINK: {loadImageLink === '' ? '' : `https://heyboss-component-library-images.s3.amazonaws.com/${loadImageLink}`}
      </div>
      <img 
        alt=''
        className="profile-img"
        src={`https://heyboss-component-library-images.s3.amazonaws.com/${loadImageLink}`}/>
    </div>
  );
}

export default App;
