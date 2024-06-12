import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const PasswordToggleIcon = ({ passwordShown, togglePasswordVisibility }) => {
  return (
    <span className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer" onClick={togglePasswordVisibility}>
      <FontAwesomeIcon icon={passwordShown ? faEye : faEyeSlash} />
    </span>
  );
};

export default PasswordToggleIcon;
