import styled from "styled-components";

export const Button = styled.button`
    border-radius: 7px;
    font-size: 15px;
    font-weight: 600;
    padding: 12px 28px;
    position: relative;
    transition: all .5s ease;
    background: #05bd93;
    border-color: #05bd93 !important;
    color: #fff;
    border: none;
    width: 100%;
    font-size: 1rem;
    line-height: 1.5;
    &:hover{
        background: #04a984;
        border-color: #04a984;
        box-shadow: 0 8px 20px -6px rgba(5, 189, 147, .6);
    }
`