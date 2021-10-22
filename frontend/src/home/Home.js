import React from "react";
import Header from "../common/Header";
import Footer from "../footer/Footer";
import {Container} from "react-bootstrap";
import "./Home.css";
import TradingViewWidget from 'react-tradingview-widget';
import TechnicalAnalysis, { INTERVALS } from 'react-tradingview-technical-analysis';

export default function Home () {
    return (
        <div>
            <Header/>
            <Container>
                <div className={'graphic'}>
                    <TradingViewWidget
                        symbol="BINANCE:BTCBRL"
                        locale="br"
                        theme="dark"
                        autosize
                    />
                    <div className="tradingview-widget-copyright"><a
                        href="https://www.tradingview.com/" rel="noopener" target="_blank"><span
                        className="blue-text">AAPL Chart</span></a> by TradingView
                    </div>
                </div>
                <div className={'analysis'}>
                    <TechnicalAnalysis
                        symbol="BINANCE:BTCBRL"
                        locale="br"
                        interval="1D"
                        colorTheme="dark"
                    />
                </div>

            </Container>
            <Footer/>
        </div>

    )
}
