import React,{useState} from 'react';
import './PrivacyForm.css';
import PrivacyText from "./PrivacyPolicy.txt";



const PrivacyForm = () => {

    const [text, setText] = useState();

  fetch(PrivacyText)
    .then((response) => response.text())
    .then((textContent) => {
      setText(textContent);
    });

  return (
    <div className='privacyContainer'>
        <pre> {text} </pre>   
    </div>
  )
}

export default PrivacyForm;