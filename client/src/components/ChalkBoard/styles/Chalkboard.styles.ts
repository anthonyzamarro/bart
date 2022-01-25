import styled from 'styled-components';

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 80% 20%;
    grid-template-rows: 500px 150px;
    grid-template-areas:
    'wall wall
    floor floor';
    perspective: 100px;
    
    .wall-1 {
        grid-column: 1 / 2;
		grid-row: 1;
        background-color: #8f901e;
        border-right: 5px solid #000;
        transform-style: preserve-3d;
        transform: rotateY(4deg);
    }

    .wall-2 {
        grid-column: 2 / 2 ;
		grid-row: 1;
        background-color: #355416;
        transform-style: preserve-3d;
        transform: rotateY(-17.5deg);
    }

    .floor {
        grid-column: 1 / 3;
		grid-row: 2;
        background-color: #1f110a;
        transform-style: preserve-3d;
        transform: rotateY(4deg) rotateX(282deg);
    }
`;

export const Chalkboard = styled.div`
display: flex;
justify-content: center;
align-items: center;
background: #000401;
margin: 75px 0 0 0;
height: 50%;
width: 75%;
color: #fff;
border-top: 10px solid #4b1f0a;
border-bottom: 10px solid #4b1f0a;
border-right: 10px solid #4b1f0a;
`;
