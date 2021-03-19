import React, {Component} from 'react';
import { ImageBackground } from 'react-native';
import {View, Text, Select, StyleSheet, Picker, Button, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import DateTimePicker from '@react-native-community/datetimepicker';

const mapStateToProps = state => {
    return {
        currentSpecial: state.currentSpecial
    }
}



class Dashboard extends Component {
    constructor(props){
        super(props)
        this.state={
            formSpecialName: 'default',
            showStartTime: false
        }
    }   



    handleFormChange(){

    }

    /*showStartTime(){
        this.setState({showStartTime: !this.showStartTime})
    }*/
    render(){
        const StartTime = (props) => {
            if(this.state.showStartTime) {
                return(
                    <DateTimePicker
                    testID="dateTimePicker"
                    value={new Date()}
                    mode='time'
                    is24Hour={true}
                    display="spinner"></DateTimePicker>
                )
            } else {
                return(
                    <>
                    </>
                )
            }
        }

    const EndTime = (props) => {
        if(this.state.showEndTime){
            return(
                <DateTimePicker
                    testID="dateTimePicker"
                    value={new Date()}
                    mode='time'
                    is24Hour={true}
                    display="spinner"></DateTimePicker>
            )
        } else {
            return(
                <>
                </>
            )
        }
    }
        return(
            <ImageBackground
                source={require('./0572.jpg')}
                style={styles.imageBackground}
                >
            <View style={styles.backgroundBox}>
                <Text style={{fontSize: 30, padding: 10}}>Admin Dashboard</Text>
                <View style={styles.formRow}>
                    <Text>Select Special</Text>
                    <Picker
                        selectedValue='Special Type'
                        style={{ height: 50, width: 150, backgroundColor: 'white' }}
                        onValueChange={(value) => this.setState({
                            ...this.state, formSpecialName: value
                        })}
                    >
                        <Picker.Item label="Half Off Cover" value="Half Off Cover" />
                        <Picker.Item label="Free Cover" value="Free Cover" />
                        <Picker.Item label="Free Game" value="Free Game"/>
                    </Picker>
                </View>
                <View style={styles.formRow}>
                    <Text>Start Time:</Text>
                    <Text>End Time:</Text>

                </View>
                <View style={styles.formRow}>
                    <View style={{margin: 3}}>
                     <Button
                        
                        title="Set Start Time"
                        onPress={()=>this.setState({showStartTime: !this.state.showStartTime})}></Button>
                    <StartTime/>   
                    </View>
                    <View style={{margin: 3}}>
                        <Button
                    
                        title="Set End Time"
                        onPress={()=>this.setState({showEndTime: !this.state.showEndTime})}/>
                    <EndTime/>
                    </View>
                    
                    
                    
                </View>
            </View>
            
            <Button
            title="submit">Submit</Button>
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