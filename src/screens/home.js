import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Nav from '../components/nav';

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
                    <Text style={styles.title}>Modern Slide Menu</Text>
                    <TouchableOpacity onPress={() => this.openMenu()} style={styles.button}>
                        <Text style={{ color: 'white' }}>Open Menu</Text>
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
    },
    button:{
        backgroundColor: '#b4004e',
        borderRadius: 3,
        paddingHorizontal: 16,
        paddingVertical: 8
    },
    title:{
        fontSize: 22,
        color: 'gray',
        marginBottom: 36
    }
})