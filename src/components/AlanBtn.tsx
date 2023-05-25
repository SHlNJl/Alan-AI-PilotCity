import React, {
    useEffect,
    useRef,
  } from 'react';
  import { withRouter } from 'react-router';
 
  const AlanBtn: React.FC = (props: any) => {
    const alanBtnComponent = useRef<any>(null);
 
    useEffect(() => {
      alanBtnComponent.current.addEventListener('command', (data: CustomEvent) => {
        const commandData = data.detail;
 
        if (commandData.command === 'command') {
          /* Call client code that will react to the received command */
        }
      });
    }, []);
 
    return <alan-button ref={alanBtnComponent} alan-key="84f599eb8cc946bebbc2eced81cfcd2f2e956eca572e1d8b807a3e2338fdd0dc/stage" />;
  };
 
  export default withRouter(AlanBtn);