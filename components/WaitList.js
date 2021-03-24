import React, {Component} from 'react';
import { ListItem, Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { Text, FlatList, View, StyleSheet, ImageBackground} from 'react-native';

class WaitList extends Component {
    constructor(props){
        super(props)
    }
    render(){

        const UserItem = ({item}) => {
        
            return(
            <ListItem
            key={item.id}
            title='ddd'
            subtitle={item.username}>
                <Text>{item.username}</Text>
                <Icon
                reverse
                name='ios-american-football'
                type='ionicon'
                color='#517fa4'
                />
                <Icon
                reverse
                name='fa-bell'
                type='font-awesome'
                color='#517fa4'
                />

            </ListItem>
            )
        }
        
            
        
        return(
            <ImageBackground
                source={require('./0572.jpg')}
                style={styles.imageBackground}
                >
            <View>
                <View>
                    <Text style= {{marginTop: 30, fontSize: 24}}>Current WaitList Customer: </Text>
                </View>
                <View>
                    <FlatList
                    data={this.props.users}
                    renderItem={UserItem}
                    keyExtractor={item=> item.id.toString()}
                    ></FlatList>
                </View>


            </View>
            </ImageBackground>
            
        )
        
    }
}

const styles = StyleSheet.create({
    imageBackground: {
        height: '100%',
        width: '100%',
        resizeMode: 'cover',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
}
)

const mapStateToProps = state => {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps)(WaitList)