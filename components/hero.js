import React from 'react';
import Typed from 'typed.js';
class Hero extends React.Component {
  state = {
    showEnd: false,
  };

  componentDidMount() {
    new Typed(this.helloRef, {
      strings: ['Hello'],
      typeSpeed: 50,
      startDelay: 10,
      showCursor: false,
    });

    new Typed(this.meetRef, {
      strings: ['Nice to Meet You'],
      typeSpeed: 50,
      startDelay: 700,
      showCursor: false,
    });

    new Typed(this.textRef, {
      strings: [
        'I like cycling',
        'I fly drones',
        'I like fun things',
        'I like running',
        'I build cool things',
        '',
      ],
      typeSpeed: 50,
      startDelay: 4000,
      showCursor: false,
    });

    new Typed(this.jadenRef, {
      strings: ["I'm Jaden"],
      typeSpeed: 50,
      startDelay: 2000,
      showCursor: false,
      onComplete: () => {
        this.setState({ showEnd: true });
      },
    });
  }

  render() {
    return (
      <div id="hero">
        <div id="text-contain">
          <h1 className="hello">
            <span ref={ref => (this.helloRef = ref)} />
          </h1>
          <h1 className="meet">
            <span ref={ref => (this.meetRef = ref)} />
          </h1>
          <h1 className="jaden">
            <span ref={ref => (this.jadenRef = ref)} />
          </h1>
          {this.state.showEnd && (
            <div className="sub animated fadeIn">
              <h2>Full Stack Developer</h2>
              <h2>in OKC</h2>
            </div>
          )}
          <h3 className="text">
            <span ref={ref => (this.textRef = ref)} />
          </h3>
        </div>
        <div className="see-more">
          <h2>Want to see?</h2>
          <p className="text-center">Keep scrolling</p>
          <a href="#about">
            <i className="fa fa-arrow-circle-o-down" />
          </a>
        </div>
      </div>
    );
  }
}

export default Hero;
