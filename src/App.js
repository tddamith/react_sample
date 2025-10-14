import './App.css';
import {Button, CloseButton, DropDownComponent, InputField, SingIn, TestComponent} from './components';

import {GetIcon} from "./config/icon";

function App() {
  return (
      <div className="App">
          <DropDownComponent/>
          <TestComponent/>
          <div className={'mb-4'}>
              <SingIn isSubTitle={true}/>
          </div>
           <div className="App" style={{ display: 'flex', justifyContent: 'flex-start', marginTop: '40px' }}>
      {/* Primary Buttons */}
      <div style={{ marginRight: '80px' }}>
        <h3>Primary</h3>
        <div><Button size="lg" type="primary" text="Done" /></div><br/>
        <div><Button size="md" type="primary" text="Done" /></div><br/>
        <div><Button size="sm" type="primary" text="Done" /></div><br/>
        <div><Button size="sm" type="primary" text="Done" disabled /></div>
      </div>

      {/* Secondary Buttons */}
      <div>
        <h3>Secondary</h3>
        <div><Button size="lg" type="secondary" text="Done" /></div><br/>
        <div><Button size="md" type="secondary" text="Done" /></div><br/>
        <div><Button size="sm" type="secondary" text="Done" /></div><br/>
        <div><Button size="sm" type="secondary" text="Done" disabled /></div>
      </div>
    </div>
          
          <InputField name={'firstName'}/>
          <InputField name={'lastName'}/>
          <CloseButton icon={GetIcon('close')}/>
      </div>
  );
}

export default App;
