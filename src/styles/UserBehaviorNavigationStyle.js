import styled from "styled-components";

export const UserBehaviorNavigationStyle = styled.section`
    padding: 80px 20px;
    background: rgba(5,189,147,.1);
    min-height: 100vh;
    @media (min-width:768px) {
        padding: 80px 20px;  
    }
    @media (min-width:1024px) {
        padding: 80px 100px;  
    }
    @media (min-width:1280px) {
        padding: 80px 150px;  
    }
    .center{ 
        text-align: center;
    }
    .title { 
        font-size: 1.75rem;
        line-height: 1;
        font-weight: 700;
        margin-top: 0rem;
        margin-bottom: 0.25rem;
        &.primary {
            color: #05bd93;
        }
        &.danger{
            color: rgba(255, 99, 132, 1);
        }
    }

    .box-main  {
        margin-top: 1rem;
        max-width: 102rem;
        margin: auto;
        .box-content { 
            background: #fff;
            box-shadow: 0 3px 10px 0 rgba(22,28,45,.08);
            border-radius: 10px;
            padding: 25px;
            margin-bottom: 1rem;
            h2{ 
                margin-top: 0;
            }
            .box-wrap{ 
                display: block;
                margin-top: 2rem;
                @media (min-width:768px) {
                    display: flex;
                }
                .box-left{ 
                    width: calc(100%);
                    margin-right: 0rem;
                    margin-bottom: 1rem;
                    @media (min-width:768px) {
                        width: calc(30% - 1rem);
                        margin-right: 1rem;
                        margin-bottom: 0rem;
                    }
                }
                .box-right{ 
                    width: 100%;
                    margin:0;
                    @media (min-width:768px) {
                        width: 60%;
                        margin:auto;
                    }
                }
            }
            
        }
        .cols { 
            display: flex;
            flex-wrap: wrap;
            flex-direction: row;
            box-sizing: border-box;
            margin-top: 1rem;
            position: relative;
            &.absolute {
                position: absolute;
                left: 0;
                right: 10px;
                bottom: 10px;
            }
            .col-4 { 
                width: calc(50% - 1rem);
                margin-right: 1rem;
                margin-bottom: 1rem;
                background: #fff;
                box-shadow: 0 3px 10px 0 rgba(22,28,45,.08);
                border-radius: 10px;
                padding: 25px;
                box-sizing: border-box;
                position: relative;
                padding-bottom: 5rem;
                &:nth-child(even){ 
                    margin-right: 0;
                    width: 50%;
                }

                @media (min-width:768px) {
                    width: calc(50% - 1rem);
                    &:nth-child(even){ 
                        margin-right: 0;
                        width: 50%;
                    }
                }
                @media (min-width:1024px) {
                    width: calc(25% - 1rem);
                    margin-right: 1rem;
                    margin-bottom: 1rem;
                    &:nth-child(4n){ 
                        margin-right: 0;
                        width: 25%;
                    }
                    &:nth-child(even){ 
                        margin-right: 1rem;
                        width: calc(25% - 1rem);
                    }
                }
                @media (min-width:1280px) {
                    width: calc(25% - 1rem);
                    margin-right: 1rem;
                    margin-bottom: 1rem; 
                    &:nth-child(4n){ 
                        margin-right: 0;
                        width: 25%;
                    }
                    &:nth-child(even){ 
                        margin-right: 1rem;
                        width: calc(25% - 1rem);
                    }
                }
            }
            .col-3 { 
                width: calc(100%);
                margin-bottom: 1rem;
                background: #fff;
                box-shadow: 0 3px 10px 0 rgba(22,28,45,.08);
                border-radius: 10px;
                padding: 25px;
                box-sizing: border-box;

                @media (min-width:768px) {
                    width: calc(50% - 1rem);
                    &:last-child{ 
                        margin-right: 0;
                        width: 50%;
                    }
                }
                @media (min-width:1024px) {
                    width: calc(33.33% - 1rem);
                    margin-right: 1rem;
                    margin-bottom: 1rem;
                    &:last-child{ 
                        margin-right: 0;
                        width: 33.33%;
                    }
                }
                @media (min-width:1280px) {
                    width: calc(33.33% - 1rem);
                    margin-right: 1rem;
                    margin-bottom: 1rem;
                    &:last-child{ 
                        margin-right: 0;
                        width: 33.33%;
                    }
                }
            }
            .col-2 { 
                width: calc(50%);
                box-sizing: border-box;
                
            }

        }
    }
    .box{ 
        max-width: 102rem;
        margin: auto;
        background-color: rgb(5 189 147 / 20%);
        margin-bottom: 1rem;
        border-radius: 10px;
        box-shadow: 0 3px 10px 0 rgba(22,28,45,.08);
        overflow: hidden;
        .box-overall{ 
            padding: 25px;
            background: url('/image/img-dropbox-bg.svg');
            background-repeat: no-repeat;
            background-size: cover ;
            background-position: right bottom;
            .box-container{ 
                display: block;
                @media (min-width:768px) {
                    display: flex;
                }
                .box-overall-left{ 
                    width: calc(100%);
                    margin-right: 0px;
                    box-sizing: border-box;
                    @media (min-width:768px) {
                        width: calc(50% - 20px);
                        margin-right: 20px;
                    }
                    h4{
                        color: #8492a6;
                        font-weight: 600;
                    }
                    .buttons{  
                        margin-top: 2rem;
                    }
                }
                .box-overall-right{ 
                    width: 100%; 
                    box-sizing: border-box;
                    text-align: center;
                    @media (min-width:768px) {
                        width: 50%; 
                    }
                }
            }
            
        }
    }
    .box-admin{ 
        display: block;
        max-width: 102rem;
        margin: auto;
        @media (min-width:768px) {
            display: flex;
            flex-wrap: wrap;
        }
        
        
        .box-top-left{ 
            padding: 1rem;
            width: 100%;
            margin-right: 0px;
            margin-bottom: 1rem;
            border-radius: 10px;
            box-shadow: 0 3px 10px 0 rgba(22,28,45,.08);
            box-sizing: border-box;
            background-color: #fff;
            padding: 25px;
            display: block;
            @media (min-width:768px) {
                width: calc(70% - 20px);
                margin-right: 20px;
                margin-bottom: 0rem;
            }
            .title{ 
                margin: 10px;
                margin-bottom: 2rem;
            }
            .container { 
                display: flex;
                .box-item-left{
                    display: inline-block;
                    width: 30%;
                    box-sizing: border-box;
                    padding: 1rem;

                    img { 
                        width: 100%;
                        object-fit: contain;
                    }
                }
                .box-item-right{
                    width: 70%;
                    display: inline-block;
                    box-sizing: border-box;
                    margin: auto;
                    padding-left: 1rem;
                    .item-title { 
                        font-size: 18px;
                        line-height: 1.3;
                        color: #8492a6;
                    }
                    .item-number{ 
                        font-size: 1.75rem;
                        line-height: 1.6;
                        font-weight: 700;
                    }

                }
            }
        }
        .box-top-right{ 
            padding: 25px 1rem;
            width: 100%;
            border-radius: 10px;
            margin-bottom: 1rem;
            box-shadow: 0 3px 10px 0 rgba(22,28,45,.08);
            box-sizing: border-box;
            background-color: #fff;
            @media (min-width:768px) {
                margin-bottom: 0rem;
                width: 30%;
            }
            .title{ 
                margin: 10px 15px;
                margin-bottom: 2rem;
            }

        }
    }
`