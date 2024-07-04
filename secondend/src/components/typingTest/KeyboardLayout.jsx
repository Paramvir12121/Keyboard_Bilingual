import React from 'react';
import ColemakKeyboard from '../keyboard/ColemakKeyboard';

const KeyboardLayout = () => {
    return (
        <>
            <div className="row align-items-start">
                <div className="col-xl-2 col-lg-1 d-none d-lg-block">
                   
                </div>
                <div className="col-xl-8 col-lg-10  col-12">
                    <ColemakKeyboard />
                </div>
                <div className="col-xl-2 col-lg-1 d-none d-lg-block">
                </div>
            </div>
        </>
    );
};

export default KeyboardLayout;
