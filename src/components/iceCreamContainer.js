import React from 'react'
import { buyIceCream } from '../Redux/iceCream/iceCreamActions'
import {connect} from "react-redux"

const iceCreamContainer = (props) => {
  return (
    <div>
        <h2>Number of IceCream - {props.numOfIceCream}</h2>
        <button onClick={props.buyIceCream}>Buy Cake</button>
    </div>
  )
}
const mapStateToProps = state =>{
    return {
        numOfIceCream: state.iceCream.numOfIceCream
    }
}
const mapDispatchToProps = dispatch=>{
    return {
        buyIceCream: () => dispatch(buyIceCream())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(iceCreamContainer)