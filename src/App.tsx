import { useEffect } from 'react';
import { DrawnTile } from './components/DrawnTile';
import { Map } from './components/Map';

export const App = () => {
  useEffect(() => {
    document.addEventListener('contextmenu', function (event) {
      event.preventDefault();
    });
  }, []);

  return (
    <div className="app">
      <DrawnTile />
      <Map />
    </div>
  )
};
