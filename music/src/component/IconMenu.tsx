import * as React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import color from '../utils/color'
import screen from '../utils/screen'
import Icon from 'react-native-vector-icons/Ionicons'

interface props {
    title: string
    icon: any
}
export class IconMenu extends React.PureComponent<props> {
    render() {
        const { title, icon } = this.props
        return (
            <View style={styles.container}>
                <View style={styles.iconContainer}>
                    <Icon name={icon} size={25} color="#6B52AE" />
                </View>
                <Text style={styles.text}>{title}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: screen.width / 4,
        height: screen.width / 4
    },
    iconContainer: {
        height: '50%',
        width: '50%',
        borderRadius: 50,
        borderWidth: 2,
        borderColor: color.theme,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        marginTop: 5,
        fontSize: 11,
        color: color.black
    }
})
