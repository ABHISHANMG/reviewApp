import {Component} from 'react'
import EmojiContainer from '../EmojiContainer'

import './index.css'

class Feedback extends Component {
  state = {cardClick: true}

  onReaction = () => {
    this.setState({cardClick: false})
  }

  render() {
    const {resources} = this.props
    const {cardClick} = this.state
    const {emojis, loveEmojiUrl} = resources
    return (
      <div className="bg-container">
        {cardClick ? (
          <div className="card-container">
            <h1 className="first-side-heading">
              How satisfied are you with our customer support performance?
            </h1>
            <ul className="emoji-align">
              {emojis.map(eachItem => (
                <EmojiContainer
                  emojiList={eachItem}
                  key={eachItem.id}
                  reaction={this.onReaction}
                />
              ))}
            </ul>
          </div>
        ) : (
          <div className="card-container">
            <div className="feedback-container">
              <img
                src={loveEmojiUrl}
                alt="love emoji"
                className="love-emoji-size"
              />
            </div>
            <h1 className="first-side-heading">Thank You!</h1>
            <p className="first-side-heading">
              We will use your feedback to improve our customer support
              performance.
            </p>
          </div>
        )}
      </div>
    )
  }
}
export default Feedback

// <EmojiContainer emojiList={eachItem} key={eachItem.id} />
