import React from 'react'

const scrollToBottom = ({ current }) => {
  if (current) {
    current.scrollTop = current.scrollHeight
  }
}

const getMessagesFromProps = props =>
  props.children.props.children.length

export class ScrollToBottom extends React.Component {
  constructor(props) {
    super(props)

    this.containerRef = React.createRef()
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    return {
      newChildren: getMessagesFromProps(this.props) !== getMessagesFromProps(prevProps)
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
