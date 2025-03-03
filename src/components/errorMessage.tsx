import styled from '@emotion/styled';
import { FC } from 'react';

type Props = {
    message: string;
}

const ErrorMessage: FC<Props> = ({message}) => {
    return (
        <MessageStyle>
            {message}
        </MessageStyle>
    )
}

export default ErrorMessage;

export const MessageStyle = styled.div`
display: flex;
align-items: center;
gap: 1rem;
color: var(--colors-base-black, #000);
font-style: normal;
font-weight: 200;
margin-bottom: 1rem;
margin-top: 1rem;
& img{
    width: 2rem;
    height: 2rem;
}
`

