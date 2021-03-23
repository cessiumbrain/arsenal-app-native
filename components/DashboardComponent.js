import React, {Component} from 'react';
import { ImageBackground } from 'react-native';
import {View, Text, Select, StyleSheet, Picker, Button, ScrollView} from 'react-native';
import {Input} from 'react-native-elements';
import {connect} from 'react-redux';
import DateTimePicker from '@react-native-community/datetimepicker';

const mapStateToProps = state => {
    return {
        specialType: state.currentSpecial.specialType,
        startTime: state.currentSpecial.startTime,
        endTime: state.currentSpecial.endTime
    }
}



class Dashboard extends Component {
    constructor(props){
        super(props)
        this.state={
            specialType: null,
            startTime: null,
            endTime: null 
        }
    }   

    render(){
        console.log(this.props)

        return(
            <ImageBackground
                source={require('./0572.jpg')}
                style={styles.imageBackground}
                >
            <View style={styles.backgroundBox}>
                <Text style={{fontSize: 30, padding: 10}}>Admin Dashboard</Text>
                <View style={styles.formRow}>
                    <Input
                    label='Special Type'
                    onChangeText={ (text)=>this.setState({specialType: text })}
                    value={this.state.specialType}>

                    </Input>
                </View>
        
                <View style={styles.formRow}>
                    
                    <View style={{margin: 3}}>
                        <Input
                        label='Start Time'
                        onChangeText={(text)=>this.setState({startTime: text})}
                        value={this.state.startTime}
                        >
                        </Input>
                        <Input
                        label='End Time'
                        onChangeText={(text)=>this.setState({endTime: text})}
                        value={this.state.endTime}
                        >
                            
                        </Input>
                    
                    </View>
                    
                    
                    
                </View>
            </View>
            
            <Button
            title="submit"
            onPress={()=>this.props.dispatch({type: 'SET_SPECIAL', payload: 
            {
                specialType: this.state.specialType,
                startTime: this.state.startTime,
                endTime: this.state.endTime
            }})}>Submit</Button>
            <Button
            title='Clear'></Button>
            
            <Text>Current Special: {this.props.specialType}</Text>
            <Text>Start Time: {this.state.startTime}</Text>
            <Text>End Time: {this.state.endTime}</Text>
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
    formRow: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    formItem: {
        flex: 1
    },
    backgroundBox: {
        backgroundColor: 'hsla(360, 100%, 100%, 0.3)',
        height: '50%',
        alignItems: 'center',
        width: '80%'
    }

}
)


export default connect(mapStateToProps)(Dashboard)