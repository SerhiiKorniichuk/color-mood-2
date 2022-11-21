import ReactModal from 'react-modal'

const defaultStyles = {
  overlay: {
    backgroundColor: 'transparent',
  },
  content: {
    padding: 0,
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: 0,
    backgroundColor: 'transparent',
  },
}

ReactModal.setAppElement('#root')

function Modal({ style, ...props }: ReactModal.Props) {
  return <ReactModal {...props} style={{ ...defaultStyles, ...style }} />
}

export { Modal }
