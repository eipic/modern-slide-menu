import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Nav from '../components/nav';
import { AntDesign } from '@expo/vector-icons';

export default class Home extends Component {
    
    state = {
        display: 'none',
        menuList: [
            "Menu Item", "Menu Item", "Menu Item", "Menu Item", "Menu Item", "Menu Item", "Menu Item"
        ]
    }
    itemAnimation = [];

    render() {
        
        return (
            <View style={styles.container}>
                <View style={styles.contentContainer}>
                    <TouchableOpacity onPress={() => this.openMenu()}>
                        <Text>Hello</Text>
                    </TouchableOpacity>
                </View>
                <Nav 
                    list={this.state.menuList} 
                    obj={this} 
                    display={this.state.display} 
                    closeMenu={this.closeMenu}
                    />
            </View>
        );
    }

    openMenu = () => {
        this.setState({display: 'flex'});
        this.fade.fadeIn(700);
        this.slide.fadeInLeft(700);
        let time = 400;
        for(let i = 0; i<this.state.menuList.length; i++){
            this.itemAnimation[i].slideInLeft(500 + time);
            time = time + 350;
        }
    }

    closeMenu = () => {
        this.fade.fadeOut(700)
        this.slide.fadeOutLeft(700).then(() => {
            this.setState({display: 'none'})
        })
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        backgroundColor: 'white'
    },
    contentContainer:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})