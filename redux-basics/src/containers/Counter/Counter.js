import React, { Component } from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

import * as types from '../../store/actions'
import { connect } from 'react-redux';

class Counter extends Component {
    render() {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
                <CounterControl label="Add 5" clicked={this.props.onAdd} />
                <CounterControl label="Subtract 5" clicked={this.props.onMinus} />
            < hr />
            <button onClick={() => this.props.onStoreResult(this.props.ctr)}> Store Result </button>
            <ul>
                {this.props.storedResults.map(currRes => (<li key={currRes.key} onClick={() => this.props.onDeleteResult(currRes.key)} > {currRes.result} </li>))}
            </ul>
            </div> 
        );
    }
}

// 
const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        storedResults: state.res.results 
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({ type: types.INCREMENT }),
        onDecrementCounter: () => dispatch({ type: types.DECREMENT }),
        onAdd: () => dispatch({ type: types.ADD, value: 5 }),
        onMinus: () => dispatch({ type: types.MINUS, value: 5 }),
        onStoreResult: (currRes) => dispatch({ type: types.STORE_RESULT, currRes: currRes }),
        onDeleteResult: (currKey) => {
            return dispatch({ type: types.DELETE_RESULT, toDeleteKey: currKey });
        }
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Counter);
