import styled from "styled-components"

export const Container = styled.div`
    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    width: 100vw;
    height: 100vh;

    /* border: 1px solid yellow; */

    .containerMain {
        /* border: 1px solid yellow; */
        width: 90%;
        height: 100%;

        @media screen and (min-width: 460px) {
            max-width: 421px;
        }

        .btnReturnLogin {
            display: flex;
            align-items: center;
            
            margin-top: 3%;
            gap: 5px;
            padding: 15px;
            overflow: hidden;
            
            font-family: 'Inter', sans-serif;
            font-size: 12px;
            font-weight: 700;
    
        }
    
        .containerForm{
            display: flex;
            flex-direction: column;
            align-items: center;
        
            border-radius: 8px;

            margin-top: 5%;
            padding: 25px 15px;
            gap: 15px;
            min-width: 288px;
            width: 421px;
            max-width: 421px;
            /* border: 1px solid blue; */

            background-color: rgb(173 173 173 / 0%);
            box-shadow: rgb(0 0 0 / 25%) 0px 4px 40px -10px;

            @media screen and (min-width: 460px) {
                margin-top: 6%;
            }

            span {
                font-family: "Inter", sans-serif;
                font-weight: 400;
                font-style: 10px;
                color: #868e96;
                margin-bottom: 22px;
            }
        }
    }

`