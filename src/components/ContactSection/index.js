import React from 'react';
import { AiTwotoneMail } from 'react-icons/ai';
import './Form.css';
import { ContactCont, ContactH1, ContactP, Email, Form, Button } from './ContactElements';

const Contact = () => {
	return (
		<>
			<ContactCont id='contact'>
				<ContactH1>Contact Me</ContactH1>
				<ContactP>Fill out the below form to contact me or send an email to the email address below.</ContactP>
				<Email>
					<AiTwotoneMail />
					<i>murokiruth@gmail.com</i>
				</Email>
				<Form>
					<form>
						<>
							<input type='text' className='fname' id='fname' name='fname' placeholder='First Name' />
							<input type='text' className='lname' id='lname' name='lname' placeholder='Last Name' />
						</>
						<>
							<input type='text' className='fname' id='email' name='email' placeholder='Email' />
							<input type='number' className='lname' id='phonenumber' name='number' placeholder='Phone Number' />
						</>
						<input type='text' id='subject' name='subject' placeholder='Subject' />
						<textarea type='text' id='message' name='message' placeholder='Message'></textarea>

						<Button>SUBMIT</Button>
					</form>
				</Form>
			</ContactCont>
		</>
	);
};

export default Contact;
