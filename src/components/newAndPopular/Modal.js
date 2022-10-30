import React from "react";
import "./Modal.scss";
function Modal({ modalInfo, modalActive, setModalActive }) {
  return (
    <div className="modal" onClick={() => setModalActive(false)}>
      <div onClick={() => setModalActive(false)}>
        <h1>{modalInfo.title}</h1>
        <img
          src={`https://image.tmdb.org/t/p/original/` + modalInfo.backdrop_path}
          alt="fail"
          style={{ width: "100%", height: "19rem", borderRadius: 10 }}
        />
        <div className="modal-info">
          <p>{modalInfo.overview}</p>
          <section className="rating-box">
            <span id="rating-title">User Rating</span>
            <span id="number">{modalInfo.vote_average}</span>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Modal;
