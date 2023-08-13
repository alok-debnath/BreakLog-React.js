import { useState } from 'react';
import Navbar from '../../Includes/Layouts/Navbar'
import MyModal from '../../Includes/Layouts/MyModal';
import Button from 'react-bootstrap/Button';

const Index = () => {
  const [themeMode, setThemeMode] = useState("");

  const themeToggle = async () => {
    if (themeMode === "") {
      setThemeMode("dark");
    } else {
      setThemeMode("");
    }
  };

  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div data-bs-theme={themeMode}>
        <Navbar
          themeToggle={themeToggle}
        />
        <div>
          <Button onClick={handleOpenModal}>Open Modal</Button>
          <MyModal show={showModal} handleClose={handleCloseModal} />
        </div>
      </div>
    </>
  )
}

export default Index