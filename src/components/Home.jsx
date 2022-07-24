import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';

import { useGetCryptosQuery } from '../services/cryptoApi';

import Cryptocurrencies from './Cryptocurrencies'
import News from './News';
const { Title } = Typography;


const Home = () => {
    const { data, isFetching } = useGetCryptosQuery(100);

    if (isFetching) return <p>Loading ....</p>

    const globalStats = data?.data?.stats;
    console.log(globalStats);
    if (!globalStats) return "Loading";
    return (
        <>
            <Title level={2} className="heading">Global Crypto Stats</Title>
            <Row gutter={[32, 32]}>
                <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats.total} /></Col>
                <Col span={12}><Statistic title="Total Exchanges" value={globalStats.totalExchanges} /></Col>
                <Col span={12}><Statistic title="Total Market Cap:" value={globalStats.totalMarketCap} /></Col>
                <Col span={12}><Statistic title="Total 24h Volume" value={globalStats.total24hVolume} /></Col>
                <Col span={12}><Statistic title="Total Markets" value={globalStats.totalMarkets} /></Col>
            </Row>
            <hr />
            <div className="home-heading-container">
                <Title style={{ "color": "orange", "textDecoration": "underline", "marginTop": "20px", "marginLeft": "30%" }} level={2} className="home-title">Top 10 Cryptos In The World</Title>
                <Cryptocurrencies simplified />
                <Title level={3} className="show-more"><Link to="/cryptocurrencies">Show more</Link></Title>
            </div>
            <hr />
            <div className="home-heading-container">
                <Title style={{ "color": "orange", "textDecoration": "underline", "marginTop": "20px", "marginLeft": "30%" }} level={2} className="home-title">Top 6 Cryptos News of the World</Title>
                <News simplified />
                <Title level={3} className="show-more"><Link to="/cryptocurrencies">Show more</Link></Title>
            </div>


        </>
    )
}

export default Home