import React from "react";
import Button from "@/components/Button";

const App: React.FC = () => {
  return (
    <>
      <div className={'App'}>
        <header className={'App-header'}>
          <Button>Default</Button>
          <Button buttonType={'primary'} onClick={() => console.log('Hello')} disabled>Primary</Button>
          <Button buttonType={'danger'}>Primary</Button>
          <Button buttonType={'link'} href={'/'}>link</Button>
        </header>
      </div>
    </>
  )
}

export default App
