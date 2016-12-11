import React from 'react';
import Style from 'react-style-tag';

export default function (props) {
    return <div>
        <Style>{`
          .lorem {
            font-size: ${props.fontSize}px;
          }
        `}</Style>
        </div>;
}
