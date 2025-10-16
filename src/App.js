import './App.css';
import {Button, IconButton, DropDownComponent, Textbox, SingIn, TestComponent} from './components';

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
          
          <div style={{ padding: '20px' , display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}> {/* Container for inputs */}
             {/* Input with Error State (like the first image) */}
             <Textbox 
                name={'firstNameError'} 
                label={'First name'} 
                size={'lg'}
                error={'Error goes here..'} 
             />

             {/* Large Input Field */}
             <Textbox 
                name={'firstNameLg'} 
                label={'First name'} 
                size={'lg'}
             />

             {/* Medium Input Field */}
             <Textbox 
                name={'firstNameMd'} 
                label={'Email address'} 
                size={'md'}
             />

             {/* Small Input Field */}
             <Textbox 
                name={'firstNameSm'} 
                label={'Password'} 
                size={'sm'}
             />

             {/* 5. Disabled Input Field (LG size, for example) */}
              <Textbox 
                  name={'disabledField'} 
                  label={'Disabled Field'} 
                  size={'sm'}
                  placeholder={'Type here...'}
                  value={'Cannot be changed'} 
                  disabled={true} 
              />
             
        </div>
        <IconButton size="sm" icon={GetIcon('close')} />
        <IconButton size="md" icon={GetIcon('close')} />
        <IconButton size="lg" icon={GetIcon('close')} />

        <IconButton size="sm" iconColor="red" icon={GetIcon('close')} />
        <IconButton size="md" iconColor="dark" icon={GetIcon('close')} />
        <IconButton size="lg" iconColor="gradient" icon={GetIcon('close')} />
        </div>
  );
}

export default App;
