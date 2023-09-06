import { Modal, Button } from 'react-bootstrap'
import { useGame } from '../context/WordleContext'

type StatusProps = {
  isOpen: boolean
}

const Status = ({ isOpen }: StatusProps) => {
  const { isCorrect, restart } = useGame()
  return (
    <Modal show={ isOpen }>
      <Modal.Header>
        <Modal.Title>
          {isCorrect ? 'You won!' : 'Try Again'}
        </Modal.Title>
      </Modal.Header>
      <Modal.Footer>
        <Button variant="primary" onClick={ restart }>
          Play Again
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default Status