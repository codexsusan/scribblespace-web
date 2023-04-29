import './App.css'
import CustomButton from './common/button/CustomButton'

import {
  Label,
  Body1,
  Body2,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  Display
} from './common/typography/Typography'

import Navbar from './common/navbar/Navbar'


function App() {

  return (
    <div className="App">
      <Navbar />
      <Display body={`Display`} />
      <Heading1 body={`Heading1`} />
      <Heading2 body={`Heading2`} />
      <Heading3 body={`Heading3`} />
      <Heading4 body={`Heading4`} />
      <Heading5 body={`Heading5`} />
      <Heading6 body={`Heading6`} />
      <Label body={`Label`} />
      <Body1 body={`Body1`} />
      <Body2 body={`Body2`} />
      <CustomButton type="submit"  buttonText="Submit" />
    </div>
  )
}

export default App
