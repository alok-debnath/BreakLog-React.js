import { useState } from 'react';
import Navbar from '../../Includes/Layouts/Navbar'
import MyModal from '../../Includes/Layouts/MyModal';
import SettingsModal from '../../Includes/Layouts/SettingsModal';
import NavbarBottom from '../../Includes/Layouts/NavbarBottom';

const Index = () => {
  const [themeMode, setThemeMode] = useState("");

  const themeToggle = async () => {
    if (themeMode === "") {
      setThemeMode("dark");
    } else {
      setThemeMode("");
    }
  };


  return (
    <>
      <div data-theme="night">
        <div>
          <Navbar
            themeToggle={themeToggle}
          />
        </div>
        {/* <MyModal /> */}
        <SettingsModal />
        <div>
          <NavbarBottom />
        </div>
      </div>
    </>
  )
}

export default Index