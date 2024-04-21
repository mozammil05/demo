import React from 'react';
import CommonHeading from '../../common/CommonHeading/CommonHeading';
import './GovernancePage.scss';

const GovernancePage = () => {
    return (
        <div className='goverance_page'>
            <CommonHeading headingText="Liberty Finance Governance" />
            <div className="goverance_page_inner">
                <div className="goverance_card">
                    <div className="goverance_card_inner">
                        <h4 className='mb-0'>Use your LIBX tokens to drive the direction of Liberty Finance, adopt new pairs, build new features and create new incentives.</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GovernancePage
