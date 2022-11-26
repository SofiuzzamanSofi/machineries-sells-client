import React from 'react';
import ButtonPublic from '../ButtonPublic/ButtonPublic';

const ModalPublic = (modalOpen, setModalOpen, product) => {
    console.log(product);
    // console.log(modalOpen);
    return (
        <div>
            <input type="checkbox" id="modal-public" className="modal-toggle" />
            <label htmlFor="modal-public" className="modal cursor-pointer">
                <label className="modal-box relative" htmlFor="">
                    <div>

                        <ButtonPublic size={"w-full"} onClick={() => setModalOpen(false)} >Submit</ButtonPublic>
                    </div>
                </label>

            </label>
        </div>
    );
};

export default ModalPublic;