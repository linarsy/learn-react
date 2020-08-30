import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import Modal from '../../Modal';
import EditMovieForm from '../../Modal/EditMovieForm';
import DeleteMovieDialog from '../../Modal/DeleteMovieDialog';

const MovieCardMenu = ({ movieId, onClickCloseMenu }) => {
  const [modal, setModal] = useState({ visible: false, type: null });

  const handleClickOpenModal = (type) => () => {
    setModal({ visible: true, type });
  };

  const handleClickCloseModal = () => {
    setModal({ visible: false, type: null });
  };

  const modalBody = {
    editMovie: <EditMovieForm movieId={movieId} />,
    deleteMovie: <DeleteMovieDialog movieId={movieId} />,
  };

  return (
    <div className="MovieCardMenu">
      <button type="button" className="MovieCardMenu_close" onClick={onClickCloseMenu}>X</button>
      <button type="button" className="MovieCardMenu_button" onClick={handleClickOpenModal('deleteMovie')}>Delete</button>
      <button type="button" className="MovieCardMenu_button" onClick={handleClickOpenModal('editMovie')}>Edit</button>
      {modal.visible && (
        <Modal onClick={handleClickCloseModal}>
          {modalBody[modal.type]}
        </Modal>
      )}
    </div>
  );
};

MovieCardMenu.propTypes = {
  movieId: PropTypes.string.isRequired,
  onClickCloseMenu: PropTypes.func,
};

MovieCardMenu.defaultProps = {
  onClickCloseMenu: () => {},
};

export default MovieCardMenu;
