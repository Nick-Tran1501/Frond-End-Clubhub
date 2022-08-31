import React,{useState} from 'react';
import TermText from './TermCondition.txt';
import './PrivacyForm.css'

const TermForm = () => {
    const [text, setText] = useState();

    fetch(TermText)
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

export default TermForm