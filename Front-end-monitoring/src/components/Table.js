import React, { PureComponent } from 'react'
import { Table, Icon, Divider } from 'antd'

const Tablemy = props => {
    return <Table columns={props.columns} dataSource={props.data} />
}

export default Tablemy

// export default class Tablemy extends PureComponent {
//     render() {
//         const columns = this.props.columns,
//             data = this.props.data
//         return <Table columns={columns} dataSource={data} />
//     }
// }
