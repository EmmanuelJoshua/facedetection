import React, { Component } from 'react';
import Particles from 'react-particles-js'
import Clarifai from 'clarifai'
import Navigation from './components/Navigation'
import Header from './components/Header'
import particlesParams from './assets/particlesParams.json'
import './App.css';

// https://cdn.vox-cdn.com/thumbor/ptMI2El-DHUl9Hmmw1QNlzfT2m0=/0x0:3049x2048/1220x813/filters:focal(1333x1562:1819x2048):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/63058104/fake_ai_faces.0.png

const app = new Clarifai.App({
  apiKey: '8dde49518fc44db984fc82bfa68b5409'
});

class App extends Component {

  constructor() {
    super()
    this.state = {
      input: '',
      imageUrl: '',
      box: {},
      route: 'signin',
      isSignedIn: false
    }
  }

  onRouteChange = (route) =>{
    this.setState({route: route});
  }

  onURLChange = (event) => {
    this.setState({ input: event.target.value });
  }

  onButtonDetect = () => {
    this.setState({ imageUrl: this.state.input });
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input).then(
      response => this.displayFaceBox(this.calculateFaceLocation(response))
        .catch(err => console.log(err))
    );
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('InputImage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
    this.setState({box: box});
  }

  render() {
    return (
      <div className="App">
        <Particles
          className='Particles'
          params={particlesParams}
        />
        <Navigation route={this.state.route} onRouteChange={this.onRouteChange} />
        <Header onRouteChange={this.onRouteChange} route={this.state.route} box={this.state.box} imageUrl={this.state.imageUrl} onButtonDetect={this.onButtonDetect} onURLChange={this.onURLChange} />
      </div>
    )

  }
}

export default App;
