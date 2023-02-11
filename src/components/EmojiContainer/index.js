import {Component} from 'react'

import './index.css'

class EmojiContainer extends Component {
  render() {
    const {emojiList, reaction} = this.props
    const {name, imageUrl} = emojiList
    const clickReaction = () => {
      reaction(reaction)
    }
    return (
      <li className="list-container">
        <div className="column-emoji">
          <img
            src={imageUrl}
            className="emoji-size"
            alt={name}
            onClick={clickReaction}
          />
          <p className="para">{name}</p>
        </div>
      </li>
    )
  }
}

export default EmojiContainer
