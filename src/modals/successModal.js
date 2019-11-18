import React, { Component } from 'react';
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import Backdrop from '@material-ui/core/Backdrop';



export default class SuccessModal extends Component {
    render() {
        console.log(this.props);

        return (
            <div className="bootModal">
                    <Modal aria-labelledby="transition-modal-title" aria-describedby="transition-modal-description"
                        className="modalMain" open={true} onClose={false} closeAfterTransition
                        BackdropComponent={Backdrop} BackdropProps={{ timeout: 500,}}  >
                        <Fade in={true} style={{background : '#fff'}}>
                            <div className="modalBg">
                                <h2 id="transition-modal-title">Success !</h2>
                                <p id="transition-modal-description">{this.props.message}.</p>
                                <button type="button" className="btn btn-default" data-dismiss="modal" onClick={this.props.closeModal}>Close </button>
                            </div>
                        </Fade>
                    </Modal>
                {/* <div className="modal fade modalShow" id="myModal" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" onClick={this.props.closeMe}>&times;</button>
                                <h4 className="modal-title"></h4>
                            </div>
                            <div className="modal-body">
                                <p></p>
                            </div>
                            <div className="modal-footer">
                            </div>
                        </div>

                    </div>
                </div> */}
            </div>
        )
    }
}
