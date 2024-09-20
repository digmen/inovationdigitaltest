import { useState } from 'react';
import './index.css';
import AcceptCheckBox from './components/acceptCheckBox';
import SubmitBtn from './components/submitBtn';
import InputField from './components/InputField';

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [accepted, setAccepted] = useState(false);
  const [notification, setNotification] = useState('');

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.company) newErrors.company = 'Company is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.message) newErrors.message = 'Message is required';
    if (!accepted) newErrors.acceptTerms = 'You must accept the terms and conditions'; // Проверяем чекбокс
    if (formData.phone && isNaN(formData.phone)) newErrors.phone = 'Phone must be a number';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length === 0) {
      setNotification('Your message has been sent successfully!');
      setTimeout(() => setNotification(''), 5000);
    } else {
      setErrors(newErrors);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <div className="main">
      <h1 className='main_title'>Hello</h1>
      <form className='main_form' onSubmit={handleSubmit}>
        <div className='main_form_header'>
          <h2>For business enquiries please use the form below</h2>
          <span>*Required</span>
        </div>
        <div className='main_form_inp_block'>
          <InputField label="Name" id="name" required value={formData.name} onChange={handleChange} error={errors.name} />
          <InputField label="Company" id="company" required value={formData.company} onChange={handleChange} error={errors.company} />
          <InputField label="E-mail" id="email" required type="email" value={formData.email} onChange={handleChange} error={errors.email} />
          <InputField label="Phone" id="phone" type="tel" value={formData.phone} onChange={handleChange} error={errors.phone} />
          <InputField label="Subject" id="subject" value={formData.subject} onChange={handleChange} />
          <InputField label="Message" id="message" required value={formData.message} onChange={handleChange} error={errors.message} />
        </div>
        <div>
          <AcceptCheckBox
            checked={accepted}
            onChange={() => setAccepted(!accepted)}
            error={errors.acceptTerms}
          />
        </div>
        <SubmitBtn color="#2C2F47" />
      </form>
      {notification && <div className="notification">{notification}</div>}
    </div>
  );
};

export default App;
