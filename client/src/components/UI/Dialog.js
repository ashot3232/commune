import React from 'react';
import ReactDom from 'react-dom';
import { connect } from 'react-redux';
import Dialog from '@material-ui/core/Dialog';
import { closeDialog } from 'actions';



class DialogPortal extends React.Component {
    render() {
        const { visible, closeDialog, children } = this.props;
        return ReactDom.createPortal(
            <Dialog
                open={ visible }
                onClose={ closeDialog }
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                { children }
            </Dialog>,
            document.querySelector('#dialog')
        )
    }
}

const mapStateToProps = ({ dialog: { visible } }) => ({ visible });

export default connect(mapStateToProps, { closeDialog })(DialogPortal);
