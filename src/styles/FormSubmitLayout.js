import styled from "styled-components";

export const FormSubmitStyle = styled.div`
    position: relative;
    .banner-overlay{ 
        background:rgba(5,189,147,.1);
        position: absolute;
        z-index: 10;
        left: 0;
        top: 0;
        right: 0;
        overflow: hidden;
        min-height: 40rem;
        @media (min-width:1024px) {
            position: relative; 
        }
        img { 
            position: absolute;
            object-fit: cover;
            bottom: 0;
            width: 100%;
            left: 0;
        }
        .shape { 
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        margin-bottom: -6px;
        object-fit: contain;
        svg{ 
            width: 100%;
        }
        }
    }
    .box { 
        position: relative; 
        top : 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        padding-top: 5rem;
        z-index: 100;
        @media (min-width:1024px) {
            position: absolute; 
        }
        .box-form { 
            width: 100%;
            @media (min-width:1024px) {
                width: 50%;
            }
        }
        .box-panel{ 
            max-width: 102rem;
            margin: auto;
            display: flex;
            flex-direction: column;
            padding: 0 10px;
            @media (min-width:1024px) {
            padding: 0 50px;
            flex-direction: row;
            }
            @media (min-width:1280px) {
                padding: 0 150px;
            }
            .box-content{ 
                display: block;
                width: 100%;
                text-align: center;
                @media (min-width:1024px) {
                    width: 50%;
                    min-width: 560px;
                    text-align: left;
                }
                .box-subtitle h6{ 
                    font-size: 15px;
                    letter-spacing: 2px;
                    text-transform: uppercase;
                    font-weight: 700;
                    line-height: 1.3;
                    margin: 10px 0;
                }
                .box-title h1{ 
                    font-size: 2.5rem;
                    margin: 10px 0;
                }
            }
        }
    }
    
`