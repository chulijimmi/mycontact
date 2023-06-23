import React from 'react';
import {TouchableHighlight, View, Text, StyleSheet, Image} from 'react-native';

const defaultPicture = "https://w7.pngwing.com/pngs/205/731/png-transparent-default-avatar-thumbnail.png"

const styles = StyleSheet.create({
    container: {
        width: 300,
        height: 50,
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 20,
        backgroundColor: 'yellow'
    },
    avatarContainer: {
        width: 45,
        backgroundColor: 'red'
    },
    textContainer: {
        width: 100,
        backgroundColor: 'blue'
    },
    avatar: {
        width: 45,
        height: 45
    }
})

function ContactItem({item, onPress}) {
    const handlePress = () => {
        console.log("toDetail")
    }
  return(
    <TouchableHighlight onPress={handlePress} style={styles.container}>
        <React.Fragment>
            <View style={styles.avatarContainer}>
                <Image
                    style={styles.avatar}
                    source={{uri: item?.photo.includes("https") ? item.photo : defaultPicture || defaultPicture}}
                />
            </View>
            <View style={styles.textContainer}>
                <Text>Nama Contact</Text>
            </View>
        </React.Fragment>
    </TouchableHighlight>
  )
}

export default ContactItem