import styled from "styled-components"

export const MousePathVisualizerStyle = styled.div`
    display: flex;
    justify-content: center;
    @media (min-width:1024px) {
        display: block;
    }
    .laptop{
        position: relative;
        margin-left: 0px;
        
        @media (min-width:1024px) {
            width: 50%;
            margin-left: -55px;
        }
        .overlay{
            position: relative;
            z-index: 10;
            width: 294px;
            height: 168px;
            overflow: hidden;
            @media (min-width:768px) {
                width: 560px;
                height: 320px;
            }
            img{ 
                width: 100%;
                height: 100%;
            }
        }
        .laptop-screen{ 
            position: absolute;
            top: 0;
            left: 0;
            margin-left:34px;
            margin-top: 12px;
            background-color: rgba(5,189,147,.1);
            backdrop-filter: blur(10px);
            svg{
                width: 223px;
                height: 131px;
            }
            @media (min-width:768px) {
                margin-left: 64px;
                margin-top: 18px;
                svg{ 
                    width: 430px;
                    height: 255px;
                }
            }

            .count-up{ 
                z-index: 100;
                position: absolute;
                bottom: 1rem;
                width: 100%;
                text-align: center;
                .time{ 
                    display: inline-block;
                    margin-top: 0;
                    margin-bottom: 0;
                    backdrop-filter: blur(5px);
                    border-radius: 5px;
                    padding: 0 10px;
                }
            }
        }
    }
`