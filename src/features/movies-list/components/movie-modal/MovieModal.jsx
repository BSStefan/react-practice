// @flow
import * as React from 'react';
import { Modal } from 'react-bootstrap';

type Props = {
  render: (toggleModal: any) => React.Node
}

type State = {
  open: boolean,
  movieName: string,
  movieDescription: string
}

class MovieModal extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      open: false,
      movieName: '',
      movieDescription: ''
    };
    (this: any).toggleModal = this.toggleModal.bind(this);
  }

  toggleModal(movieName?: string, movieDescription?: string) {
    this.setState({
      open: !this.state.open,
      movieName: movieName || '',
      movieDescription: movieDescription || ''
    })
  }

  render() {
    return (
      <React.Fragment>
        <Modal show={this.state.open} onHide={this.toggleModal}>
          <Modal.Header closeButton>
            <Modal.Title>{this.state.movieName}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>{this.state.movieDescription}</p>
          </Modal.Body>
        </Modal>
        {this.props.render(this.toggleModal)}
      </React.Fragment>
    )
  }
}

export default MovieModal;