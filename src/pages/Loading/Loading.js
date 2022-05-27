import React from 'react';
import { DotLoader  } from 'react-spinners';
import { css } from "@emotion/react";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Loading = () => {
    return (
        <div className='h-screen flex items-center	'>
            <DotLoader
                css={override} loading size={250} color="red" />
        </div>
    );
};

export default Loading;