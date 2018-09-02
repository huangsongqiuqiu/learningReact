import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import AppBarExampleIcon from './../Home'
import TabsExampleSimple from './../tabs'
import DatePickerExampleSimple from './../date'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {blue500, red500, greenA200} from 'material-ui/styles/colors';
import SvgIcon from 'material-ui/SvgIcon';
import HardwareVideogameAsset from 'material-ui/svg-icons/hardware/videogame-asset';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';

const iconStyles = {
  marginRight: 24,
};

const HomeIcon = (props) => (
  <SvgIcon {...props}>
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
  </SvgIcon>
);


const recentsIcon = <HomeIcon style={iconStyles} color={blue500} />;
const favoritesIcon = <HardwareVideogameAsset style={iconStyles} color={blue500} />;
const nearbyIcon = <IconLocationOn color={blue500}/>;

/**
 * A simple example of `BottomNavigation`, with three labels and icons
 * provided. The selected `BottomNavigationItem` is determined by application
 * state (for instance, by the URL).
 */
class Aaa extends Component{
  render(){
    return (<div>asdasd</div>)
  }
}

class BottomNavigationExampleSimple extends Component {
  state = {
    selectedIndex: 0,
  };

  select = (index) => {
    console.log(1);
    return this.setState({selectedIndex: index})
  }

  render() {
    return (
      <Router>
        <div>
            <Paper zDepth={1} style={{position:'fixed',left:0,bottom:0,width:'100%'}}>
            
              <BottomNavigation selectedIndex={this.state.selectedIndex}>
                <Link to='/Index'>
                  <BottomNavigationItem
                    label="Recents"
                    icon={recentsIcon}
                    onClick={() => this.select(0)}
                  />
                </Link>
                <Link to='/News'>
                  <BottomNavigationItem
                    label="Favorites"
                    icon={favoritesIcon}
                    onClick={() => this.select(1)}
                  />
                </Link>
                <Link to='/About'>
                <BottomNavigationItem
                  label="Nearby"
                  icon={nearbyIcon}
                  onClick={() => this.select(2)}
                />
                </Link>
                
              </BottomNavigation>
              

           
          </Paper>
          <Route path='/Index' component={AppBarExampleIcon} />
          <Route path='/News' component={TabsExampleSimple} />
          <Route path='/About' component={DatePickerExampleSimple} />

        </div>
      </Router>
    );
  }
}

export default BottomNavigationExampleSimple;
