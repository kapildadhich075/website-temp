import styled from 'styled-components';
import {Link} from 'react-scroll';

export const Button = styled(Link)`
    background: ${({primary}) => primary ? '#01bf71' : '#000'};
    border-radius: 50px;
    padding: ${({big}) => big ? '14px 48px' : '12px 30px'};
    white-space: nowrap;
    border: none;
    color: ${({dark}) => dark ?  '#01bf71':'#fff'};
    font-size: ${({Fontbig}) => Fontbig ? '20px' : '16px'};
    outline: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease-in-out;

    &:hover {
        transition: all 0.3s ease-in-out;
        background: ${({primary}) => primary ? '#fff' : '#01bf71'};
    }
`;