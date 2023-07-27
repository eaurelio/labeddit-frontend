import React from 'react'
import { Container, Loader, Modal, Text } from './styled'

const LoadingModal = () => {
  return (
    <Container>
      <Modal>
        <Loader/>
        <Text>
          Carregando ...
        </Text>
      </Modal>
    </Container>
  )
}

export default LoadingModal