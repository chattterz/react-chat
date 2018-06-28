import React from 'react'

const scrollToBottom = ({ current }) => {
  if (current) {
    current.scrollTop = current.scrollHeight
  }
}

const getLastMessageKeyFromProps = props => {
  const messages = props.children.props.children
  const lastMessage = messages[messages.length - 1]

  return lastMessage && lastMessage.key
}

export class ScrollToBottom extends React.Component {
  constructor(props) {
    super(props)

    this.containerRef = React.createRef()
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    const newChildren = getLastMessageKeyFromProps(this.props) !==
      getLastMessageKeyFromProps(prevProps)

    return {
      newChildren
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (snapshot.newChildren) {
      scrollToBottom(this.containerRef)
    }
  }

  render() {
    const { children, className, ...props } = this.props

    const classess = `chat-messages ${className}`

    return <div ref={this.containerRef}
                className={classess} {...props}>
      { children }
    </div>
  }
}
