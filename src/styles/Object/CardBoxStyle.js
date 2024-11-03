import styled from "styled-components";

export const CardBoxStyle = styled.div`
    &.box{ 
        display: block;
        border-radius: .25rem;
        padding: 40px 30px;
        margin-top: 2rem;
        width: 100%;
        text-align: center;
        @media (min-width:768px) {
        width: 50%; 
        box-sizing: border-box;
        }
        @media (min-width:1024px) {
        width: calc(33.333% - 10px); 
        }
        &:nth-child(even) { 
            box-shadow: 0 10px 22px rgba(0,0,0,.05);
        }
        .icon { 
            img{ 
                object-fit: contain;
            }
        }
        .box-title{ 
            font-size: 18px;
            font-weight: 700px;
            line-height: 1.3;
            margin-top: 0.5rem;
            margin-bottom: 0.5rem;
        }
        .div-tag{ 
            background: #05bd93;
            background: linear-gradient(90deg, transparent, #05bd93, transparent);
            height: 1px;
            margin: 0 auto;
            width: 60px;
        }
        .box-large-title{
            font-size: 24px;
            font-weight: 700px;
            line-height: 1.3;
         }
    }
`