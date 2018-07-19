import React, { PureComponent } from 'react'
import Tablemy from '@/components/Table.js'
import { Table, Icon, Divider } from 'antd'

export default class Home extends PureComponent {
    state = {
        columns: [
            {
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
                render: text => <a href="javascript:;">{text}</a>
            },
            {
                title: 'Age',
                dataIndex: 'age',
                key: 'age'
            },
            {
                title: 'Address',
                dataIndex: 'address',
                key: 'address'
            },
            {
                title: 'Action',
                key: 'action',
                render: (text, record) => (
                    <span>
                        <a href="javascript:;">Action 一 {record.name}</a>
                        <Divider type="vertical" />
                        <a href="javascript:;">Delete</a>
                        <Divider type="vertical" />
                        <a href="javascript:;" className="ant-dropdown-link">
                            More actions <Icon type="down" />
                        </a>
                    </span>
                )
            }
        ],
        data: [
            {
                key: '1',
                name: 'John Brown',
                age: 32,
                address: 'New York No. 1 Lake Park'
            },
            {
                key: '2',
                name: 'Jim Green',
                age: 42,
                address: 'London No. 1 Lake Park'
            },
            {
                key: '3',
                name: 'Joe Black',
                age: 32,
                address: 'Sidney No. 1 Lake Park'
            }
        ]
    }
    render() {
        return (
            <div>
                <h1>前端监控</h1>
                <Tablemy data={this.state.data} columns={this.state.columns} />
            </div>
        )
    }
}
