import styled from "styled-components";

export const FormStyle = styled.form`
    background-color: #fff;
    border-radius: 4px;
    padding: 48px 44px;
    box-shadow: 0 10px 22px rgba(0,0,0,.05);
    position: relative;
    @media (min-width:1024px) {
        padding: 1.5rem;
    }
    @media (min-width:1280px) {
        padding: 48px 44px;
    }
    h4{ 
        font-size: 1.25rem;
        font-weight: 700px;
        line-height: 1.3;
        margin: 0 0 1rem;
        text-align: center;
    }
`