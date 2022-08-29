import React,{useState} from 'react';
import './PrivacyForm.css';
import PrivacyText from "./PrivacyPolicy.txt";



function PrivacyForm() {

    const [text, setText] = useState();

  fetch(PrivacyText)
    .then((response) => response.text())
    .then((textContent) => {
      setText(textContent);
    });

  return (
    <div className='privacyContainer'>
            {text}
    </div>
  )
}

export default PrivacyForm;