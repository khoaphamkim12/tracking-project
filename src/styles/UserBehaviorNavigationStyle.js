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
            padding: 1rem;
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