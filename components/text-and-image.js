import dynamic from 'next/dynamic';
import React, { Component } from 'react';

// Load components
const Title = dynamic(() => import('./title.js'));
const Button = dynamic(() => import('./button.js'));
const SmallCapsTitle = dynamic(() => import('./small-caps-title.js'));

class TextAndImage extends Component {
  render() {
    return <div className="TextAndImage">
      <div className="image-wrapper" style={{
        backgroundImage: `url(${this.props.image})`,
        order: this.props.imagePosition  == 'right' ? 1 : 0
      }}>
        <img src={this.props.image} className="image" />
      </div>
      <div className="text-wrapper">
        <SmallCapsTitle>
          {this.props.category}
        </SmallCapsTitle>
        <Title>
          {this.props.title}
        </Title>
        <div className="text">
          {this.props.text}
        </div>
        <Button href={this.props.buttonLink || 'https://www.bartroorda.nl'}>
          {this.props.buttonText || 'learn more'}
        </Button>
      </div>
      <style jsx>{`
        .TextAndImage {
          color: #0F2247;
          font-family: "Maison Neue", sans-serif;
          font-size: 1.2rem;
          font-weight: 500;
          line-height: 2rem;
          text-align: left;
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;
        }
        .image-wrapper,
        .text-wrapper {
          width: 100%;
        }
        @media (max-width: 480px) {
          .image-wrapper {
            order: 0 !important;
          }
        }
        .image {
          display: block;
        }
        .text-wrapper {
          padding: 2rem 2rem 6rem;
        }
        .text {
          margin: 3rem 0;
        }
        /* On desktop: show full size image */
        @media (min-width: 480px) {
          .TextAndImage {
            flex-wrap: nowrap;
            padding: 2rem 24px;
          }
          .image-wrapper,
          .text-wrapper {
            flex: 1;
            width: 50%;
          }
          .image-wrapper {
            background-image: none;
            background-size: cover;
            background-position: center center;
          }
          .image {
            display: none;
          }
          .text-wrapper {
            padding: 3rem;
          }
        }
      `}</style>
    </div>
  }
}

export default TextAndImage;