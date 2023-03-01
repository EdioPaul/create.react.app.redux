import './App.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clickButton } from './actions';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const App = (props) => {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()

  const { clickButton, newValue } = props

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  const handleClick = () => {
    dispatch(clickButton(value))
  }

  return (
    <div className="App" style={{ paddingTop: '10px' }}>
      <input
        onChange={handleChange}
        type="text"
        value={value}
      />
      <button onClick={handleClick}>
        Click me!
      </button>
      <h1>{newValue}</h1>
    </div>
  );
}

const mapStateProps = store => ({
  newValue: store.clickState.newValue
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ clickButton }, dispatch)

export default connect(mapStateProps, mapDispatchToProps)(App);
