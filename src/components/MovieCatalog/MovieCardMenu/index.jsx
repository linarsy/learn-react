import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import Modal from '../../Modal';
import VisibleMovieForm from '../../../containers/VisibleEditMovieForm';
import DeleteMovieDialog from '../../Modal/DeleteMovieDialog';

const MovieCardMenu = ({ movieId, onClickCloseMenu, onRemoveMovie }) => {
  const [modal, setModal] = useState({ visible: false, type: null });

  const handleClickOpenModal = (type) => () => setModal({ visible: true, type });
  const handleClickCloseModal = () => setModal({ visible: false, type: null });

  const modalBody = {
    editMovie: <VisibleMovieForm movieId={movieId} />,
    deleteMovie: <DeleteMovieDialog onClick={onRemoveMovie} />,
  };

  return (
    <div className="MovieCardMenu" data-testid="card-menu">
      <button type="button" className="MovieCardMenu_close" onClick={onClickCloseMenu}>Х</button>
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
  movieId: PropTypes.number.isRequired,
  onClickCloseMenu: PropTypes.func.isRequired,
  onRemoveMovie: PropTypes.func.isRequired,
};

export default MovieCardMenu;
