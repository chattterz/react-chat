import React from 'react'

const scrollToBottom = ({ current }) => {
  if (current) {
    current.scrollTop = current.scrollHeight
  }
}

export class ScrollToBottom extends React.Component {
  constructor(props) {
    super(props)

    this.containerRef = React.createRef()
  }

  /* getSnapshotBeforeUpdate(prevProps) {
   *   if (prevProps.list.length < this.props.list.length) {
   *     const list = this.listRef.current
   *     return list.scrollHeight - list.scrollTop
   *   }

   *   return null
   * } */

  componentDidUpdate() {
    scrollToBottom(this.containerRef)
  }

  render() {
    const { children, className, ...props } = this.props

    const classess = `chat-messages ${className}`

    return <div ref={this.containerRef} className={classess} {...props}>
      { children }
    </div>
  }
}
