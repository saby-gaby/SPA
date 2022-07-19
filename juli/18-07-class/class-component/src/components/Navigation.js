import { Component } from "react";

class Navigation extends Component {
    render() {
        return (
            <ul>
                {this.props.items.map(item=><li>{item}</li>)}
            </ul>
        )
    }
}

export default Navigation;
