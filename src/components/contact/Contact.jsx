import './Contact.css'
import { MdOutlineEmail } from "react-icons/md";
// import { RiMessengerFill } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gnpjx92', 'template_ro5sj4j', form.current, '4qu_31rlPZ1N68l4I')

    e.target.reset()

      //* TEST
      // .then((result) => {
      //     console.log(result.text);
      // }, (error) => {
      //     console.log(error.text);
      // });
  };

  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>thomysurb1997@gmail.com</h5>
            <a href="mailto:thomysurb1997@gmail.com" rel='noreferrer' target='_blank'>Send a message</a>
          </article>
          {/* <article className='contact__option'>
            <RiMessengerFill className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>Thomy Licari</h5>
            <a href="#" target='_blank'>Send a message</a>
          </article> */}
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon' /> 
            <h4>WhastApp</h4>
            <h5></h5>
            <a href="https://api.whatsapp.com/send?phone+543548586887" rel='noreferrer' target="_blank">Send a message</a>
          </article>
        </div>
        
        {/* {END OF CONTACT OPTIONS} */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Message' required />
          <textarea name='message' rows={7} placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact