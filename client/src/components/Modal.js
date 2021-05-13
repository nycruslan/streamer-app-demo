import React from 'react';

import { Dialog, DialogContent, DialogActions, DialogTitle } from '@material-ui/core';

const Modal = ({ content, title, actions, onDismiss }) => {
    return (
        <div>
            <Dialog onBackdropClick={onDismiss} open>
                <DialogTitle>{title}</DialogTitle>
                <DialogContent>{content}</DialogContent>
                <DialogActions>{actions}</DialogActions>
            </Dialog>
        </div>
    );
};

export default Modal;
