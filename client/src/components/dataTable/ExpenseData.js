import React, { Component } from 'react';

class ExpenseData extends Component {
    render() {
        return (
            <tr>
                <td>
                    {this.props.obj._id}
                </td>
                <td>
                    {this.props.obj.name}
                </td>
                <td>
                    {this.props.obj.expense}
                </td>
                <td>
                    {this.props.obj.budget}
                </td>
            </tr>
        );
    }
}

export default ExpenseData;