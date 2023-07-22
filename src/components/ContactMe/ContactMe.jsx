import './ContactMe.css'
import Form from './Form'
import Typewriter from 'typewriter-effect'

const ContactMe = () => {
  return (
   <section id="contact">
<div className="contact-box">
<div className='contact-message'>
    <Typewriter
    options={{
      strings:['Contact me...'],
      autoStart:true,
      loop:true
    }}/>
    <p>If you want to contact me, you can do it through social networks or by filling out the contact form. I will answer you as soon as possible. Thank you! 😊</p>
    <a target='_blank' href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRvwTmCLtxNgxhRqNktJHJZGRHbMJgxNpPMwddVdFxjcNWjwNqJVfldZlXDHQKTxwljPbQB" rel="noreferrer"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><rect x="3" y="5" width="18" height="14" rx="2"></rect><polyline points="3 7 12 13 21 7"></polyline></svg> lucaseramos13@gmail.com</a>
</div>
<div className='form-box'>
  <Form/>
</div>
</div>
   </section>
  )
}

export default ContactMe