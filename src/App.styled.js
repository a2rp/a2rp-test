import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div`
        /* border: 10px solid #f00; */
        box-shadow: 0 0 15px 15px #000 inset;
        height: 100vh;
        position: relative;

        display: flex;
        align-items: center;
        justify-content: center;

        padding: 30px;
    `,

    Main: styled.div`
        border: 6px solid #000;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 15px;
        border-radius: 15px;

        h1 {
            font-size: 70px;
        }
    `,
};
