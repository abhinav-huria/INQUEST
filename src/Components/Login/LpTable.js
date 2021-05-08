//import logo from './inqq.png';

import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
//import Table from 'react-bootstrap/Table';
import LpNav from './LpCard';
import './App.css';

class LpTable extends React.Component {
    render() {

        return (
            <table><tbody>
                <tr><td>
                        <LpNav />
                    </td>
                </tr></tbody>
            </table>

        );
    }
}
export default LpTable;
