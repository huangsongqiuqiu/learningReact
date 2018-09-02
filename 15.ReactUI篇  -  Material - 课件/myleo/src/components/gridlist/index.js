import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';

import DialogExampleSimple from './dialog'
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 370,
    overflowY: 'auto',
  },
};
let random = [
  {
    img: 'http://www.material-ui.com/images/grid-list/honey-823614_640.jpg',
    title: 'tang',
    author: 'jill111',
  },
  {
    img: 'http://www.material-ui.com/images/grid-list/morning-819362_640.jpg',
    title: 'coffee',
    author: 'jill111',
  },
  {
    img: 'http://www.material-ui.com/images/grid-list/vegetables-790022_640.jpg',
    title: 'vegetables',
    author: 'jill111',
  },
  {
    img: 'http://www.material-ui.com/images/grid-list/water-plant-821293_640.jpg',
    title: 'water',
    author: 'jill111',
  },

]


/**
 * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
 */
class GridListExampleSimple extends React.Component{

  constructor(){
    super();
    this.state={
        tilesData : [
        {
          img: 'http://www.material-ui.com/images/grid-list/00-52-29-429_640.jpg',
          title: 'Breakfast',
          author: 'jill111',
        },
        {
          img: 'http://www.material-ui.com/images/grid-list/burger-827309_640.jpg',
          title: 'Tasty burger',
          author: 'pashminu',
        },
        {
          img: 'http://www.material-ui.com/images/grid-list/camera-813814_640.jpg',
          title: 'Camera',
          author: 'Danson67',
        },
        {
          img: 'http://www.material-ui.com/images/grid-list/hats-829509_640.jpg',
          title: 'Hats',
          author: 'fancycrave1',
        }
      ]
    }
  }
  change(v){
    this.state.tilesData.splice(v,1);
    this.state.tilesData.push(random[parseInt(Math.random()*4)])
    this.setState({
      tilesData:this.state.tilesData
    })
  }
  click(v){
   // console.log(v)
    this.refs.Dialog.handleOpen(v);
  }
  render(){
    return (<div style={styles.root}>
    <GridList
      cellHeight={180}
      style={styles.gridList}
    >
      
      {this.state.tilesData.map((tile,v) => (
        <GridTile
          onClick={this.click.bind(this,v)}
          key={v}
          title={tile.title}
          subtitle={<span>by <b>{tile.author}</b></span>}
          actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
        >
          <img src={tile.img} />
        </GridTile>
      ))}
    </GridList>
    <DialogExampleSimple ref='Dialog' setMsg={this.change.bind(this)}/>
  </div>)
  }
}

export default GridListExampleSimple;