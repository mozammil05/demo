import React from 'react';
import CommonHeading from '../../common/CommonHeading/CommonHeading';
import './PortfolioPage.scss';

const PortfolioPage = () => {
    return (
        <div className='portfolio_page'>
            <CommonHeading headingText="Portfolio" />
            <div className="portfolio_page_inner">
                <div className="portfolio_card">
                    <div className="portfolio_card_inner">
                        <h4 className='mb-0'>Users detailed portfolio of assets here.</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PortfolioPage
