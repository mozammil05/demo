import React from 'react';
import CommonTabs from '../CommonTabs/CommonTabs';
import OpenOrdersTab from './MarketTabs/OpenOrdersTab';
import OrderHistoryTab from './MarketTabs/OrderHistoryTab';
import PositionsTab from './MarketTabs/PositionsTab';
import TradeHistoryTab from './MarketTabs/TradeHistoryTab';
import TriggerOrdersTab from './MarketTabs/TriggerOrdersTab';
import './WalletSummaryCard.scss';

const WalletSummaryCard = () => {
    const tabsData = [
        {
            id: 1,
            eventKey: "positions",
            title: <>Positions <span className="count_text">0</span></>,
            content: <PositionsTab />,
        },

        {
            id: 2,
            eventKey: "open-orders",
            title: <>Open Orders <span className="count_text">0</span></>,
            content: <OpenOrdersTab />,
        },
        {
            id: 3,
            eventKey: "trigger-orders",
            title: <>Trigger Orders <span className="count_text">0</span></>,
            content: <TriggerOrdersTab />,
        },
        {
            id: 4,
            eventKey: "order-history",
            title: <>Order History <span className="count_text">0</span></>,
            content: <OrderHistoryTab />,
        },
        {
            id: 5,
            eventKey: "trade-history",
            title: <>Trade History <span className="count_text">0</span></>,
            content: <TradeHistoryTab />,
        },
    ]
    return (
        <div className="wallet_summry">
            <div className="wallet_summry_inner">
                <CommonTabs
                    tabs={tabsData}
                />
            </div>

        </div>
    )
}

export default WalletSummaryCard
