import styled from "styled-components";

export const HomeOverallStyle = styled.section`
    padding-bottom: 40px;
    padding-top: 40px;
    margin: 0 20px;
    @media (min-width:768px) {
        margin: 0 100px;
    }
    @media (min-width:1280px) {
        margin: 0 150px;
    }
    .box-container{ 
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        max-width: 102rem;
        margin: auto;

    }
    .content {
        max-width: 650px;
        margin: auto;
        text-align: center;
    h5{ 
        color: #8492a6;
        line-height: 1.6;
        margin-bottom: .25rem;
        margin-top: .25rem;
        font-size: 15px;
        text-transform: uppercase;
    }
    h2 { 
        margin-bottom: .25rem;
        margin-top: .25rem;
        font-size: 1.75rem;
        line-height: 1.3;

    }
    .desc{ 
        margin-top: 1rem;
        margin-bottom: 1rem;
        color: #8492a6;
    }
    
}

`