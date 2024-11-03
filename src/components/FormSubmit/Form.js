// @ts-nocheck
import { FormStyle } from 'styles/FormStyle';
import React, { useState } from 'react';
import { InputForm } from 'styles/Object/InputForm';
import { TextAreaForm } from 'styles/Object/TextAreaForm';
import { Button } from 'styles/Object/Button';
import useLocalStorage from 'hooks/useLocalStorage';

const Form = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');

    const [clickDataLocal, setClickDataLocal] = useLocalStorage('clickData');
    const trackingFormSubmit = () => {
        const dateNum = new Date().toISOString().split('T')[0];
        const clickData = clickDataLocal || {}
        if (!clickData['FORM_SUBMIT']) {
            clickData['FORM_SUBMIT'] = {}
        }
        if (!clickData['FORM_SUBMIT'][dateNum]) {
            clickData['FORM_SUBMIT'][dateNum] = {}
        }
        clickData['FORM_SUBMIT'][dateNum].clicked = (clickData['FORM_SUBMIT'][dateNum].clicked || 0) + 1
        setClickDataLocal(clickData)
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        // Reset form
        setFullName('');
        setEmail('');
        setContact('');
        //
        trackingFormSubmit()


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

                    />
                </label>
            </div>
            <div>
                <label>
                    Contact:

                    <TextAreaForm
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}

                    />
                </label>
            </div>
            <Button type="submit">Submit</Button>
        </FormStyle>
    );
};

export default Form;
