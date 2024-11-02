// @ts-nocheck
import { FormStyle } from 'styles/FormStyle';
import React, { useState } from 'react';
import { InputForm } from 'styles/Object/InputForm';
import { TextAreaForm } from 'styles/Object/TextAreaForm';
import { Button } from 'styles/Object/Button';

const Form = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Full Name:', fullName);
        console.log('Email:', email);
        console.log('Contact:', contact);
        // Reset form
        setFullName('');
        setEmail('');
        setContact('');
    };

    return (
        <FormStyle onSubmit={handleSubmit}>
            <div>
                <h4>Get 30 Days Free Trial</h4>
                <label>
                    Full Name:
                    <InputForm
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                    />
                </label>
            </div>
            <div>
                <label>
                    Email:
                    <InputForm
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </label>
            </div>
            <div>
                <label>
                    Contact:

                    <TextAreaForm
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                        required
                    />
                </label>
            </div>
            <Button type="submit">Submit</Button>
        </FormStyle>
    );
};

export default Form;
