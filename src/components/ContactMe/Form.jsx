import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const Form = () => {
  const form = useRef();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (e) =>{
    const { name, value } = e.target;
    if (name === 'user_name') {
      setName(value);
    } else if (name === 'user_email') {
      setEmail(value);
    } else if (name === 'message') {
      setMessage(value);
    }
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0dnnnmc', 'template_30ug73d', form.current, '-rWW5_Ir5axt-64pj')
      .then((result) => {
        console.log(result.text);
        setName('')
        setEmail('')
        setMessage('')
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form className='contact-form' ref={form} onSubmit={sendEmail}>
      <input type='text' autoComplete='off' name='user_name' value={name} onChange={handleChange} placeholder='Put your name' required />
      <input type='email' autoComplete='off' name='user_email' value={email} onChange={handleChange} placeholder='Put your email address' required />
      <textarea name='message' value={message} onChange={handleChange} placeholder='Write your message' required  maxLength="200" rows="7" cols="30"/>
      <input type='submit' value='Send'/>
    </form>
  );
};

export default Form