import React from 'react';

interface Props {
  message: string;
  onClose: () => void;
}

export default function CreateDisplay(props: Props){
    return (
        <div
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                zIndex: 1,
            }}
        >
            <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '70%',
            height: '80%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
            zIndex: 2,
          }}
        >
            <input type="text" />
            <button onClick={props.onClose}>Close</button>
        </div>
        </div>
        
      );
}


  

