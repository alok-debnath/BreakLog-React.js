import { useEffect, useState } from 'react';
import Navbar from '../../Includes/Layouts/Navbar'
import MyModal from '../../Includes/Layouts/MyModal';
import SettingsModal from '../../Includes/Layouts/SettingsModal';
import NavbarBottom from '../../Includes/Layouts/NavbarBottom';

const Index = () => {
  const [themeMode, setThemeMode] = useState("night");

  useEffect(() => {
    const savedTheme = localStorage.getItem('thememode');

    if (savedTheme) {
      setThemeMode(savedTheme);
    }
  }, []);

  const themeToggle = (themeName) => {
    setThemeMode(themeName);
    localStorage.setItem('thememode', themeName);
  };


  return (
    <>
      <div data-theme={themeMode}>
        <div>
          <Navbar
            themeToggle={themeToggle}
          />
        </div>
        {/* <MyModal /> */}
        <SettingsModal
          themeToggle={themeToggle}
          themeMode={themeMode}
        />
        <div>
          <NavbarBottom />
        </div>
      </div>
    </>
  )
}

export default Index