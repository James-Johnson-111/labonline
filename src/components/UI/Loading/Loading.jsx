import react from 'react';

import './Loading.css';
import Loader from '../../../images/66.gif';

const Loading = () => {

    return(
        <div className="Loading d-grid">
            <div className="d-flex justify-content-center">
                <img src={Loader} alt="Loader" width="20%" />
            </div>
        </div>
    );

};
export default Loading;