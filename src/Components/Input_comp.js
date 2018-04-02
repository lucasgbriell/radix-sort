import React from 'react'

const Input_comp = () => (
    <div className="col-md-4 input-div">
        <input id="Input" type="text" />
        <button type="submit" value="Submit" onClick={this.add}>Send</button>
    </div>
)

const add() {
    var joined = this.state.my_array.concat(0);
    this.setState({ my_array: joined })
    console.log(this.my_array)
}

export default Input_comp