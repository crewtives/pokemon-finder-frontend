import React, { Component } from 'react';
import { ImageBackground, StyleSheet, StatusBar } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import * as Animatable from 'react-native-animatable';

import NavbarHome from '../commons/navbar/NavbarHome'

import { connect } from 'react-redux';


class Home extends Component {

    handleMainCard = ref => this.view = ref;
    handleMainLogo = ref => this.mainLogo = ref;
    handleSecLogo = ref => this.secLogo = ref;

    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    componentDidUpdate() {

    }

    render() {

        return (
            <ImageBackground ref={this.handleMainContainer} blurRadius={10} source={{ uri: 'https://i2.wp.com/www.bitme.gg/wp-content/uploads/2019/12/Pueblo-Paleta-existe-y-Google-Maps-nos-dice-en-donde-encontrarlo.jpg?w=1280&ssl=1' }} style={{ backgroundColor: '#000022', flex: 1 }}>
                <StatusBar backgroundColor='transparent' translucent barStyle='dark-content' />
                <NavbarHome />
                <Animatable.View ref={this.handleMainCard} animation="bounceIn" delay={250} style={{
                    flex: 1,
                    margin: 20,
                    marginLeft: wp(25),
                    marginRight: wp(25),
                    backgroundColor: '#000022',
                    borderRadius: 5
                }}
                >
                   
                </Animatable.View>
            </ImageBackground>
        )
    }
}

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = dispatch => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
    },
    slide: {
        height: hp(75),
        width: wp(35),
        resizeMode: 'cover',
        alignSelf: 'center',
    },
    text: {
        color: '#333',
        marginTop: 92,
        textAlign: 'center',
    },
    buttonCircle: {
        borderRadius: 20,
        justifyContent: 'center',
    },

});
