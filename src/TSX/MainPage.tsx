import { useState } from 'react';
import '../CSS/style.css';
import AboutWindow from './Compontents/AboutWindow';
import OthersWindow from './Compontents/OthersWindow';

function MainPage() {
  const [openWindows, setOpenWindows] = useState({
    about: false,
    others: false,
  });

  const windowButtons: { id: 'about' | 'others'; name: string; }[] = [
    { id: "about", name: "About" },
    { id: "others", name: "Others" },
  ];

  const links: { Name: string; Links: string; Icons: string; }[] = [
    {
      "Name": "Bluesky",
      "Links": "https://bsky.app/profile/daveberry.netlify.app",
      "Icons": "/social/bluesky.svg"
    },
    {
      "Name": "X",
      "Links": "https://x.com/ItsDaveberry",
      "Icons": "/social/x.svg"
    },
    {
      "Name": "Youtube",
      "Links": "https://youtube.com/@daveberrys",
      "Icons": "/social/youtube.svg"
    },
    {
      "Name": "Github",
      "Links": "https://github.com/daveberrys",
      "Icons": "/social/github.svg"
    },
    {
      "Name": "Discord",
      "Links": "https://discord.gg/S5jTpsq8Js",
      "Icons": "/social/discord.svg"
    }
  ];

  const toggleWindow = (windowName: keyof typeof openWindows) => {
    setOpenWindows(prevState => ({ ...prevState, [windowName]: !prevState[windowName] }));
  };

  return (
    <div>
      <div className='xyCenter'>
        <div className='mainAttraction'>
          <img src="/otherImages/dave.png" className='me' draggable="false"/> <br/>
          <span className="header">Heyo! I'm <b>Daveberry</b>.</span>
        </div>
        
        <div className="flex center moreSpaced">
          {links.map((link) => (
            <div key={link.Name}>
              <a href={link.Links} target="_blank" rel="noopener noreferrer">
                <img src={link.Icons} alt={link.Name} className="socialLogo invertLogo" draggable="false" />
              </a>
            </div>
          ))}
        </div>
        
        <div className='flex center'>
          {windowButtons.map((button) => (
            <div key={button.id} className='clickyBox' onClick={() => toggleWindow(button.id)}>
              <span>{button.name}</span>
            </div>
          ))}
        </div>
      </div>
      {openWindows.about && <AboutWindow onClose={() => toggleWindow('about')} />}
      {openWindows.others && <OthersWindow onClose={() => toggleWindow('others')} />}
    </div>
  );
}

export default MainPage;