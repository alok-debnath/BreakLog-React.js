import { useEffect, useState } from 'react';
import Navbar from '../../Includes/Layouts/Navbar'
import MyModal from '../../Includes/Layouts/MyModal';
import SettingsModal from '../../Includes/Layouts/SettingsModal';
import NavbarBottom from '../../Includes/Layouts/NavbarBottom';
import Button from '../UI/Button';

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
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <div className="overflow-x-auto">
                <div className='bg-base-100 rounded-2xl rounded-b-none py-2.5 px-7 mt-20'>
                  <div className='text-left font-semibold mb-3'>
                    <p>20 / August,</p>
                    <p>Sunday</p>
                    <p className='font-medium my-2'>Break taken: 00:00:00 (hh:mm:ss)</p>
                  </div>
                  <table className="table text-center">
                    <thead>
                      <tr>
                        <th>Time</th>
                        <th>Log</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>11:10:29</td>
                        <td>exit</td>
                      </tr>
                      <tr>
                        <td>11:10:29</td>
                        <td>exit</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className='mb-20'>
                  <Button
                    text="End Day"
                    className="btn w-full bg-primary-focus rounded-2xl rounded-t-none"
                  />
                </div>
              </div>
            </div>
          </div>
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