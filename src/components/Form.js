import React, { useState, useEffect } from 'react';
import './stylesheets/Form.scss';

const Form = () => {
  const InitialValues = { name:"", email:"", message:"" };
  const [formValues, setFormValues]= useState(InitialValues);
  const [formErrors, setFormErrors]= useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [isValidate, setIsValidate] = useState(false);

  const HandleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({...formValues, [name]: value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validate(formValues);
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      setIsValidate(true); }

    const data = JSON.stringify(formValues)
    
      try{
        const result = await fetch('https://win23-assignment.azurewebsites.net/api/contactform', {
          method: 'post',
          headers: {
            'content-type': 'application/json'
          },
          body: data
        })
        setIsSubmit(true)
        console.log(result)
  
      } catch(error) {
        setIsSubmit(false)
      };
    
  };

  useEffect(() => {
    if(Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors])

  const validate = (values) => {
    const errors = {};
    const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const regexName = /^[a-zA-Z]{2,15} [a-zA-Z]{2,15}$/;
    if(!values.name){
      errors.name = "Name is required!";
    } else if (!regexName.test(values.name)){
      errors.name = "Name is not valid! Please enter a first and last name with space between.";
    }
    if(!values.email){
      errors.email = "Email is required!";
    } else if (!regexEmail.test(values.email)){
      errors.email = "This is not a valid email";
    }
    if(!values.message){
      errors.message = "Message is required!";
    } else if (values.message.length < 20){
      errors.message = "Message is too short!";
    } else if (values.message.length > 1000){
      errors.message = "Message is too long!";
    }
    return errors;
  };

  return (
    
    <section className="form">

        <div className="container">

            <div className="title">

                <h2>Leave us a message<br /> 
                    for any information.</h2>

            </div>

              {/* {Object.keys(formErrors).length === 0 && isSubmit ? (<div className="success">Message Sent!</div>
            ) : null} */}
            <div className="success">Message Sent!</div>

            <form action="action_page.php" onSubmit={handleSubmit} noValidate>

                <label forhtml="name" hidden>Name</label>

                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  placeholder="Name*" 
                  value={formValues.name} 
                  className="form-layout" 
                  onChange={HandleChange}
                />
                <p className="error">{ formErrors.name }</p>
                <label forhtml="email" hidden>Email</label>

                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  placeholder="Email*" 
                  value={formValues.email} 
                  className="form-layout"
                  onChange={HandleChange} 
                />
                <p className="error">{ formErrors.email }</p>
                <label forhtml="message" hidden>Message</label>

                <textarea 
                  name="message" 
                  placeholder="Your Message*" 
                  value={formValues.message} 
                  className="form-layout"
                  onChange={HandleChange}>
                </textarea>
                <p className="error">{ formErrors.message }</p>

                <button 
                  className="button">Send Message<i className="fa-regular fa-arrow-up-right"></i>
                </button>
                
            </form>

        </div>

    </section>
  )
}

export default Form;