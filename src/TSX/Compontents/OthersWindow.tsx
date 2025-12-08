import React from 'react';
import Window from './Window';

interface OthersWindowProps {
  onClose: () => void;
}

const OthersWindow: React.FC<OthersWindowProps> = ({ onClose }) => {
  const otherStuff: { Name: string; Desc: string; Links: string; Icons: string; }[] = [
    {
      "Name": "Track The Code",
      "Desc": "A team of people dedicated to make free and open source apps.",
      "Links": "https://trackthecode.github.io",
      "Icons": "/otherStuff/trackthecode.png"
    },
    {
      "Name": "Noteted",
      "Desc": "An alternative to other notes app. Open source, free forever. TTC owned.",
      "Links": "https://noteted.netlify.app",
      "Icons": "/otherStuff/noteted.png"
    }
  ]
  
  return (
    <Window title="Other things I contribute" onClose={onClose}>
      {otherStuff.map((other) => (
        <a href={other.Links}>
          <div key={other.Name} className='flex otherStuffClass'>
            <img src={other.Icons} width={80} draggable="false" />
            <div>
              <span className='header'><b>{other.Name}</b></span> <br/>
              <span>{other.Desc}</span>
            </div>
          </div>
        </a>
      ))}
    </Window>
  );
};

export default OthersWindow;