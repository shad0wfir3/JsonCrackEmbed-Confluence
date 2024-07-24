import React, { useEffect } from 'react';
import { invoke } from '@forge/bridge';

const App = () => {
  useEffect(() => {
    async function fetchData() {
      const data = await invoke('resolver');
      const json = data.jsonData || JSON.stringify({
        congrats: "You did it!"
      });
      const options = {
        theme: "light", // "light" or "dark"
        direction: "RIGHT", // "UP", "DOWN", "LEFT", "RIGHT"
      };

      const jsonCrackEmbed = document.getElementById("jsoncrackEmbed");
      if (jsonCrackEmbed) {
        jsonCrackEmbed.onload = () => {
          jsonCrackEmbed.contentWindow.postMessage({
            json,
            options
          }, "*");
        };
      }
    }

    fetchData();
  }, []);

  return (
    <div style={{ width: '100%', height: '500px' }}>
      <iframe
        id="jsoncrackEmbed"
        src="https://jsoncrack.com/widget"
        style={{ width: '100%', height: '100%', border: 'none' }}
        sandbox="allow-scripts allow-same-origin"
      ></iframe>
    </div>
  );
};

export default App;
