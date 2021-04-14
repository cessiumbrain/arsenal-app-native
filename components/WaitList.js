import React, {Component} from 'react';
import { ListItem, Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { Text, FlatList, View, StyleSheet, ImageBackground, ScrollView} from 'react-native';

class WaitList extends Component {
    constructor(props){
        super(props);
    }

    render(){
        console.log(this.props.userList)
        const UserItem = ({item}) => {
            
            return(
            <ListItem
            key={item.id}
            title=''
            subtitle={item.username}>
                <Text>{item.username}</Text>
                <Text>Add</Text>
                <Icon
                reverse
                name='plus'
                type='font-awesome'
                color='#fcdb03'
                onPress={()=>{this.props.dispatch({type: 'ADD_WAIT_USER', payload: item})}}

                />
            </ListItem>
            )
        }

        return(
            <ImageBackground
                source={require('./0572.jpg')}
                style={styles.imageBackground}
                >
                <ScrollView>
                
                    <Text style= {{marginTop: 30, fontSize: 24}}>Current WaitList Customer: </Text>
                
                    <View>
                        {this.props.waitList.map(user=>(
                            <ListItem><Text>
                            {user.username}   </Text>
                            <Icon
                    reverse
                    name='phone'
                    type='font-awesome'
                    color='green'
                    />
                    <Text>Remove</Text>
                    <Icon
                    reverse
                    name='minus'
                    type='font-awesome'
                    color='red'
                    onPress={()=>{this.props.dispatch({type: 'REMOVE_WAIT_USER', payload: user});
                    }}
                    /></ListItem>
                        ))}
                    </View>
                  
                    <Text style= {{marginTop: 30, fontSize: 24}}>Users:</Text>
                
                    <FlatList
                    data={this.props.userList}
                    renderItem={UserItem}
                    
                    ></FlatList>
                </ScrollView>
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
        userList: state.users.userList,
        waitList: state.users.waitList,
        waitListLength: state.waitList.length
    }
}

export default connect(mapStateToProps)(WaitList)