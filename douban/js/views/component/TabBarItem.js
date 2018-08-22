// import React from 'react'
// import { Image } from 'react-native'

// export default props => (
//     <Image
//         source={this.props.focused ? this.props.selectedIcon : this.props.icon}
//         style={{ width: 30, height: 30 }}
//     />
// )
import React, { Component } from 'react'
import { Image } from 'react-native'

export default class TabBarItem extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Image
                source={
                    this.props.focused
                        ? this.props.selectedIcon
                        : this.props.icon
                }
                style={{ width: 50, height: 50 }}
            />
        )
    }
}
