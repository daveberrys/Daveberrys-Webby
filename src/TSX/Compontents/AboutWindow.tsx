import React from "react";
import Window from "./Handlers/Window";

interface AboutWindowProps {
  onClose: () => void;
}

const AboutWindow: React.FC<AboutWindowProps> = ({ onClose }) => {
  return (
    <Window title="About me!" onClose={onClose}>
      <ul>
        <b> Main infomation: </b>
        <li> Australian and Malaysian. </li>
        <li> Programmer, Hardware, Voice Actor, Artist and Designer. </li>

        <br />

        <b> Other infomation: </b>
        <li>
          Web developer, software developer, frontend developer, (somewhat)
          backend developer.
        </li>
        <li> Software and hardware developer for random hobby projects. </li>
        <li>
          I want to make a team that's dedicated to make great and open source
          software.
        </li>
        <li>
          I <i>do</i> use AI, but I check code before full sending it.{" "}
        </li>
        <li>
          I use <a href="https://zed.dev">Zed</a> instead of{" "}
          <a href="https://vscode.dev">Visual Studio Code</a>.{" "}
        </li>
      </ul>
    </Window>
  );
};

export default AboutWindow;
