import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    StatusBar,
    Text,
    TextInput,
    TouchableOpacity,
    ActivityIndicator,
} from 'react-native';

import * as Animatable from 'react-native-animatable';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { connect } from 'react-redux';
import { getData, fetchData } from '../../../actions/userActions'

class Login extends Component {

    handleMainCard = ref => this.mainCard = ref;
    handleNameFromGroup = ref => this.nameFromGroup = ref;
    handleEmailFromGroup = ref => this.emailFromGroup = ref;
    handleNameInput = ref => this.nameInput = ref;
    handleEmailInput = ref => this.emailInput = ref;

    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            email: props.email,
        }
    }

    componentDidMount() {
        this.emailInput.focus()

    }

    componentDidUpdate(){
        if (this.props.user) {
            const { navigate } = this.props.navigation;
            navigate('pokemonStartupLaboratory')
        }
    }

    loginRequest = async () => {

        this.props.getData()

        this.props.fetchData(this.state.name, this.state.email)

    }

    render() {
        return (
            <View style={styles.container}>

                <StatusBar backgroundColor="#000022" barStyle="light-content" />
                <View style={{
                    marginTop: 20,
                    marginLeft: wp(25),
                    flexDirection: 'row'
                }}>
                    <Animatable.Text ref={this.handleMainLogo} delay={750} animation="fadeInUp" style={{
                        fontFamily: 'Raleway-Bold',
                        fontSize: hp(3.5),
                        color: '#FECA1B'
                    }}>
                        pokemon
                    </Animatable.Text>
                    <Animatable.Text ref={this.handleSecLogo} delay={750} animation="fadeInDown" style={{
                        fontFamily: 'Raleway-Regular',
                        fontSize: hp(3.5),
                        color: '#FECA1B'
                    }}>
                        finder
                        </Animatable.Text>
                </View>

                <Animatable.View ref={this.handleMainCard} animation="bounceIn" delay={250} style={styles.mainCard}>
                    <View style={{ flexDirection: 'column' }}>
                        <View style={{ flex: 1, margin: 20 }}>
                            <Text style={styles.title}>explore the pokemon world</Text>
                        </View>

                        <Animatable.View ref={this.handleNameFromGroup} style={styles.formGroup}>
                            <Text style={styles.labelInput}>NAME OF YOUR CHARACTER:</Text>
                            <TextInput
                                ref={this.handleNameInput}
                                style={styles.inputStyle}
                                onChangeText={(name) => this.setState({ name })}
                                value={this.state.name}
                            />
                        </Animatable.View>

                        <Animatable.View ref={this.handleEmailFromGroup} style={styles.formGroup}>
                            <Text style={styles.labelInput}>EMAIL:</Text>
                            <TextInput
                                ref={this.handleEmailInput}
                                style={styles.inputStyle}
                                onChangeText={(email) => this.setState({ email })}
                                value={this.state.email}
                            />
                        </Animatable.View>

                        <View style={styles.formGroup}>
                            <TouchableOpacity onPress={() => this.loginRequest()} style={{
                                backgroundColor: '#000022',
                                borderRadius: 10,
                            }}>

                                {this.props.isfetching ? <ActivityIndicator style={{
                                    padding: 20,

                                }} color="rgb(232, 163, 235)" /> : <Text style={{
                                    color: 'white',
                                    fontSize: hp(2),
                                    fontFamily: 'Raleway-Bold',
                                    textAlign: 'center',
                                    padding: 20,
                                }}>I WANT MY IMMERSION!</Text>}

                            </TouchableOpacity>
                        </View>

                    </View>

                </Animatable.View>
            </View>

        )
    }
}


const mapStateToProps = (state) => {

    return {
        user: state.loginUser.user,
        name: state.loginUser.name,
        email: state.loginUser.email,
        isfetching: state.loginUser.isFeching,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getData: () => {
            return dispatch(getData())
        },
        fetchData: (name, email) => {
            return dispatch(fetchData(name, email))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000022',
    },
    mainCard: {
        flex: 1,
        margin: 20,
        marginLeft: wp(25),
        marginRight: wp(25),
        backgroundColor: 'white',
        borderRadius: 5
    },
    formGroup: { flex: 1, flexDirection: 'column', margin: 20 },
    labelInput: { fontFamily: 'Raleway-Bold', fontSize: hp(2) },
    inputStyle: {
        borderColor: '#000022',
        borderWidth: 1,
        marginTop: hp(1),
        borderRadius: 10,
        padding: 10,
        fontFamily: 'Raleway-Regular',
        color: '#000022',
        fontSize: hp(2.5),
    },
    title: {
        fontFamily: 'Raleway-Bold',
        fontSize: hp(3),
        textAlign: 'center',
        marginTop: hp(5)
    }
});
