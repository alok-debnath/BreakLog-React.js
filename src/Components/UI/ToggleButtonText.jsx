import React from 'react'

const ToggleButtonText = ({ text, secondaryText, checked }) => {
    return (
        <>
            <div className="form-control">
                <label className="label cursor-pointer gap-2">
                    <div>
                        <span className="label-text font-bold">{text}</span>
                        {secondaryText &&
                            <span className="label-text font-light"><br/>{secondaryText}</span>
                        }
                    </div>
                    <input type="checkbox" className="toggle" checked={checked} />
                </label>
            </div>
        </>
    )
}

export default ToggleButtonText