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
          <div className={'d-flex flex-column mt-4'}>
              <Button size={'lg'} type={'primary'} text={'Done'}/>
              <Button size={'md'} text={'Done'} type={'primary'}/>
              <Button size={'sm'} text={'Done'} type={'primary'}/>
          </div>
          <InputField name={'firstName'}/>
          <InputField name={'lastName'}/>
          <CloseButton icon={GetIcon('close')}/>
      </div>
  );
}

export default App;
