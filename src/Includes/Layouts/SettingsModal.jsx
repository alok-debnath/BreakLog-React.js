import React, { useState } from 'react';
import ToggleButtonText from '../../Components/UI/ToggleButtonText';
import SelectboxText from '../../Components/UI/SelectboxText';
import { ThemeName } from '../../Constants/Constant';

const SettingsModal = ({ themeToggle, themeMode, setBreaklogMode }) => {
    const handleThemeChange = (event) => {
        themeToggle(event.target.value);
    };

    const [isChecked, setIsChecked] = useState(true);
    const handleToggleChange = (event) => {
        setIsChecked(event.target.checked);
        setBreaklogMode(isChecked);
    };

    return (
        <>
            <dialog id="setting_modal" className="modal modal-bottom sm:modal-middle">
                <form method="dialog" className="modal-box">
                    {/* <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button> */}
                    <h3 className="font-bold text-lg text-center">Settings</h3>
                    <div className="divider"></div>

                    <ToggleButtonText
                        text="BreakLog mode"
                        checked={isChecked}
                        secondaryText="(LOP will be miscalculated once log is saved using this mode)"
                        onChange={handleToggleChange}
                    />
                    <SelectboxText
                        text="Theme"
                        OptionValue={ThemeName}
                        checked={themeMode}
                        onChange={handleThemeChange}
                    />

                    <div className="modal-action">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn">Close</button>
                    </div>
                </form>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </>
    );
};

export default SettingsModal;
