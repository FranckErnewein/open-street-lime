import React from 'react';

const TILE_SIZE = 256;

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      center: props.center,
      zoom: props.zoom,
      width: props.width,
      height: props.height
    };
  }
  zoomIn() {
    this.setState({
      zoom: this.state.zoom + 1
    });
  }
  render() {
    let style = {
      width: this.state.width,
      height: this.state.height,
      outline: '1px solid #ccc'
    };
    let layer_size = TILE_SIZE * Math.pow(2, this.state.zoom);
    let img_number = Math.pow(2, this.state.zoom);
    let layer_style = {
      position: 'absolute',
      width: layer_size,
      height: layer_size,
      marginTop: -layer_size / 2,
      marginLeft: -layer_size / 2,
      top: this.state.height / 2,
      left: this.state.width / 2
    };

    var grid = [];
    for (let x = 0; x < img_number; x++) {
      for (let y = 0; y < img_number; y++) {
        let img_url_path = [this.state.zoom, x, y].join('/');
        let url = 'http://tile.openstreetmap.org/' + img_url_path + '.png';
        let tile_style = {
          position: 'absolute',
          top: y * TILE_SIZE,
          left: x * TILE_SIZE
        };
        grid.push(<img key={img_url_path} src={url} style={tile_style} />);
      }
    }
    return <div style={style}>
      <div onClick={this.zoomIn.bind(this)} style={layer_style}>
        {grid}
      </div>
    </div>;
  }

}


export
default Map;
