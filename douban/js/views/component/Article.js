import React from 'react'
import {
    View,
    FlatList,
    Text,
    Image,
    StyleSheet,
    Dimensions,
    TouchableOpacity
} from 'react-native'
let { height, width } = Dimensions.get('window')

const ListItem = (item, navigation) => (
    <View style={styles.list} key={item.id}>
        <TouchableOpacity
            onPress={() =>
                navigation.navigate('BookWebView', {
                    alt: item.alt
                })
            }
        >
            <Image
                style={{ width: width * 0.45, height: 208 }}
                source={{
                    uri: item.image
                }}
            />
        </TouchableOpacity>
        <Text style={styles.text}>{item.title}</Text>
    </View>
)
const Article = props => (
    <View>
        <FlatList
            data={props.data}
            renderItem={({ item }) => ListItem(item, props.navigation)}
            horizontal={false}
            numColumns={2}
        />
    </View>
)

const styles = StyleSheet.create({
    list: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 14,
        paddingTop: 10,
        paddingBottom: 10
        // alignItems: 'center',
        // justifyContent: 'center'
    }
})
export default Article
