import React from 'react'
import { View, FlatList, Text, Image } from 'react-native'
import { Link } from 'react-router-native'

const ListItem = ({ item }) => (
    <View key={item.id}>
        <Text>{item.title}</Text>
        <Link to={`/book/${item.id}`}>
            <Image
                style={{ width: 166, height: 158 }}
                source={{
                    uri: item.image
                }}
            />
        </Link>
    </View>
)
const Article = props => (
    <View>
        <FlatList data={props.data} renderItem={ListItem} />
    </View>
)

export default Article
