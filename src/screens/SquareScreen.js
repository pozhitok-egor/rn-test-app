import React, { useReducer } from 'react'
import { Text, View } from 'react-native'
import ColorCounter from '../Components/ColorCounter'

const multiplier = 15;

const reducer = (state, action) => {
  switch(action.type) {
    case 'change_red':
      return state.red + action.payload > 255 || state.red + action.payload < 0
      ? state
      : { ...state, red: state.red + action.payload }
    case 'change_green':
      return state.green + action.payload > 255 || state.green + action.payload < 0
      ? state
      : { ...state, green: state.green + action.payload }
    case 'change_blue':
      return state.blue + action.payload > 255 || state.blue + action.payload < 0
      ? state
      : { ...state, blue: state.blue + action.payload }
    default: state
  }
};

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0})

  const {red, green, blue} = state

  return (
    <View>
      <ColorCounter
        onIncrease={() => dispatch({type: 'change_red', payload: multiplier})}
        onDecrease={() => dispatch({type: 'change_red', payload: -1 * multiplier})}
        color='Red'
      />
      <ColorCounter
        onIncrease={() => dispatch({type: 'change_green', payload: multiplier})}
        onDecrease={() => dispatch({type: 'change_green', payload: -1 * multiplier})}
        color='Green'
      />
      <ColorCounter
        onIncrease={() => dispatch({type: 'change_blue', payload: multiplier})}
        onDecrease={() => dispatch({type: 'change_blue', payload: -1 * multiplier})}
        color='Blue'
      />
      <View style={{
        width: '100%',
        height: 100,
        backgroundColor: `rgb(${red},${green},${blue})`
      }}/>
      <Text>red: {red} green: {green} blue: {blue}</Text>
    </View>
  )
}

export default SquareScreen
