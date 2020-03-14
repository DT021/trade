import * as React from 'react'; 
import { connect } from 'react-redux'; 
import { InjectedIntlProps, injectIntl } from 'react-intl';
import { Link, RouteProps, withRouter } from 'react-router-dom';  
import {
    RootState,
    selectUserLoggedIn,
} from '../../modules';

const LogoImage = require('../../assets/images/logos.svg');
const supportImage = require('../../assets/images/support.svg'); 

const btc = require('../../assets/images/coins/tradeicons_btc.svg'); 
const eth = require('../../assets/images/coins/tradeicons_ethereum.svg'); 
const sfor = require('../../assets/images/coins/tradeicons_sfor.svg'); 
const ltc = require('../../assets/images/coins/tradeicons_litecoin.svg'); 
const xrp = require('../../assets/images/coins/tradeicons_xrp.svg'); 
const tether = require('../../assets/images/coins/tradeicons_tether.svg'); 
const eos = require('../../assets/images/coins/tradeicons_eos.svg'); 
const stellar = require('../../assets/images/coins/tradeicons_stellar.svg'); 
const ethclassic = require('../../assets/images/coins/tradeicons_ethereumclassic.svg'); 
const btccash = require('../../assets/images/coins/tradeicons_btccash.svg'); 
const neo = require('../../assets/images/coins/tradeicons_neo.svg'); 
const monero = require('../../assets/images/coins/tradeicons_monero.svg'); 
const zcash = require('../../assets/images/coins/tradeicons_zcash.svg'); 
const dash = require('../../assets/images/coins/tradeicons_dash.svg'); 
const cardano = require('../../assets/images/coins/tradeicons_cardano.svg'); 
const tusd = require('../../assets/images/coins/tradeicons_tusd.svg'); 

const TelegramIcon = require('../../assets/images/landing/social/Telegram.svg');
const FacebookIcon = require('../../assets/images/landing/social/Facebook.svg');
const TwitterIcon = require('../../assets/images/landing/social/Twitter.svg'); 


interface ReduxProps {
    isLoggedIn: boolean;
}

type Props = ReduxProps & RouteProps & InjectedIntlProps;

class Landing extends React.Component<Props> {
    public renderHeader() {
        if (this.props.isLoggedIn) {
            return (
                <div className="pg-landing-screen__header">
                    <div className="pg-landing-screen__header__wrap">
                        <div className="pg-landing-screen__header__wrap__left" onClick={e => this.redirectToLanding()}>
                            <img src={LogoImage} alt="SFOR.TRADE Logo"/>
                        </div>
                        <div className="pg-landing-screen__header__wrap__right">
                            <Link to="/profile" className="landing-button">
                                {this.translate('page.body.landing.header.button1')}
                            </Link>
                        <div className="button_supportchat">
                              <img src={supportImage} alt="SFOR.TRADE support"/>
                        </div> 
                        </div>
                    </div>
                </div>
            );
        }

        return (
            <div className="pg-landing-screen__header">
                <div className="pg-landing-screen__header__wrap">
                    <div className="pg-landing-screen__header__wrap__left" onClick={e => this.redirectToLanding()}>
                        <img src={LogoImage} alt="SFOR.TRADE Logo"/>
                    </div>
                    <div className="pg-landing-screen__header__wrap__right">
                        <Link to="/signin" className="landing-button landing-button--simple">
                            {this.translate('page.body.landing.header.button2')}
                        </Link>
                        <Link to="/signup" className="landing-button">
                            {this.translate('page.body.landing.header.button3')}
                        </Link>
                        <div className="button_supportchat">
                              <img src={supportImage} alt="SFOR.TRADE support"/>
                        </div> 
                    </div>
                </div>
            </div>
        );
    }

 
 

    public renderFeaturesBlock() {
        return (
            <div className="pg-landing-screen__features">

                <div className="terms_wrapper__feees">

                <h2>Fee Schedule</h2>
                    &nbsp;
                    <h5>Last updated: September 12, 2019</h5>
                    &nbsp;
                    
                <div className="fees_table">
 
                    <div className="flex-container">
                        <div className="flex_6">
                            <span>Coin</span>
                        </div>
                        <div className="flex_6">
                            <span>Instrument</span>
                        </div>
                        <div className="flex_6">
                            <span>Minimum Withdrawal</span>
                        </div>
                        <div className="flex_6">
                            <span>Withdrawal Fee</span>
                        </div> 
                        <div className="flex_6">
                            <span>30d Trade Volume</span>
                        </div>
                        <div className="flex_6">
                            <span>Maker / Taker</span>
                        </div>
                    </div>
                    <div className="flex-container">
                        <div className="flex_6">
                            <img src={sfor}/><span>SFOR*</span>
                        </div>
                        <div className="flex_6">
                            <span>SFOR</span>
                        </div>
                        <div className="flex_6">
                            <span>-</span> 
                        </div>
                        <div className="flex_6">
                            <span>-</span>
                        </div> 
                        <div className="flex_6">
                            <span> $25k USD</span>
                        </div>
                        <div className="flex_6">
                            <span>0.15% / 0.25%</span>
                        </div>
                    </div>
                    <div className="flex-container">
                        <div className="flex_6">
                            <img src={btc}/><span>Bitcoin</span>
                        </div>
                        <div className="flex_6">
                            <span>BTC</span>
                        </div>
                        <div className="flex_6">
                            <span>0.01</span> 
                        </div>
                        <div className="flex_6">
                            <span>0.001</span>
                        </div> 
                        <div className="flex_6">
                            <span> $1m USD</span>
                        </div>
                        <div className="flex_6">
                            <span>0.08% / 0.20%</span>
                        </div>
                    </div>
                    <div className="flex-container">
                        <div className="flex_6">
                            <img src={eth}/><span>Ethereum</span>
                        </div>
                        <div className="flex_6">
                            <span>ETH</span>
                        </div>
                        <div className="flex_6">
                            <span>0.02</span>
                        </div>
                        <div className="flex_6">
                            <span>0.01</span>
                        </div> 
                        <div className="flex_6">
                            <span> $2.5m USD</span>
                        </div>
                        <div className="flex_6">
                            <span>0.05% /	0.15%</span>
                        </div>
                    </div>
                    <div className="flex-container">
                        <div className="flex_6">
                            <img src={ltc}/><span>Litecoin</span>
                        </div>
                        <div className="flex_6">
                            <span>LTC</span>
                        </div>
                        <div className="flex_6">
                            <span>0.002</span>
                        </div>
                        <div className="flex_6">
                            <span>0.001</span>
                        </div> 
                        <div className="flex_6">
                            <span> $20m USD</span>
                        </div>
                        <div className="flex_6">
                            <span>0.02% / 0.13%</span>
                        </div>
                    </div>
                    <div className="flex-container">
                        <div className="flex_6">
                            <img src={xrp}/><span>Ripple</span>
                        </div>
                        <div className="flex_6">
                            <span>XRP</span>
                        </div>
                        <div className="flex_6">
                            <span>2</span>
                        </div>
                        <div className="flex_6">
                            <span>0.25</span>
                        </div> 
                        <div className="flex_6">
                            <span>≥ $20m USD</span>
                        </div>
                        <div className="flex_6">
                            <span>0.02% / 0.1%</span>
                        </div>
                    </div>
                    <div className="flex-container">
                        <div className="flex_6">
                            <img src={tether}/><span>TetherUS</span>
                        </div>
                        <div className="flex_6">
                            <span>USDT</span>
                        </div>
                        <div className="flex_6">
                            <span>2.6</span>
                        </div>
                        <div className="flex_6">
                            <span>1.3</span>
                        </div> 
                        <div className="flex_6">
                            
                        </div>
                        <div className="flex_6">
                            
                        </div>
                    </div>
                    <div className="flex-container">
                        <div className="flex_6">
                            <img src={eos}/><span>EOS</span>
                        </div>
                        <div className="flex_6">
                            <span>EOS</span>
                        </div>
                        <div className="flex_6">
                            <span>0.2</span>
                        </div>
                        <div className="flex_6">
                            <span>0.1</span>
                        </div> 
                        <div className="flex_6">
                    
                        </div>
                        <div className="flex_6">
                            
                        </div>
                    </div>
                    <div className="flex-container">
                        <div className="flex_6">
                            <img src={stellar}/><span>Stellar</span>
                        </div>
                        <div className="flex_6">
                            <span>XLM</span>
                        </div>
                        <div className="flex_6">
                            <span>1</span>
                        </div>
                        <div className="flex_6">
                            <span>0.01</span>
                        </div> 
                        <div className="flex_6">
                            
                        </div>
                        <div className="flex_6">
                        
                        </div>
                    </div>
                    <div className="flex-container">
                        <div className="flex_6">
                            <img src={ethclassic}/><span>Ethereum Classic</span>
                        </div>
                        <div className="flex_6">
                            <span>ETC</span>
                        </div>
                        <div className="flex_6">
                            <span>0.02</span>
                        </div>
                        <div className="flex_6">
                            <span>0.01</span>
                        </div> 
                        <div className="flex_6">
                        
                        </div>
                        <div className="flex_6">
                    
                        </div>
                    </div>
                    <div className="flex-container">
                        <div className="flex_6">
                            <img src={btccash}/><span>Bitcoin Cash</span>
                        </div>
                        <div className="flex_6">
                            <span>BCH</span>
                        </div>
                        <div className="flex_6">
                            <span>0.002</span>
                        </div>
                        <div className="flex_6">
                            <span>0.001</span>
                        </div> 
                        <div className="flex_6">
                        
                        </div>
                        <div className="flex_6">
                    
                        </div>
                    </div>
                    <div className="flex-container">
                        <div className="flex_6">
                            <img src={neo}/><span>NEO</span>
                        </div>
                        <div className="flex_6">
                            <span>NEO</span>
                        </div>
                        <div className="flex_6">
                            <span>1</span>
                        </div>
                        <div className="flex_6">
                            <span>0</span>
                        </div> 
                        <div className="flex_6">
                        
                        </div>
                        <div className="flex_6">

                        </div>
                    </div>
                    <div className="flex-container">
                        <div className="flex_6">
                            <img src={monero}/><span>Monero</span>
                        </div>
                        <div className="flex_6">
                            <span>XMR</span>
                        </div>
                        <div className="flex_6">
                            <span>0.0002</span>
                        </div>
                        <div className="flex_6">
                            <span>0.0001</span>
                        </div> 
                        <div className="flex_6">
                        
                        </div>
                        <div className="flex_6">

                        </div>
                    </div>
                    <div className="flex-container">
                        <div className="flex_6">
                            <img src={zcash}/><span>Zcash</span>
                        </div>
                        <div className="flex_6">
                            <span>ZEC</span>
                        </div>
                        <div className="flex_6">
                            <span>0.01</span>
                        </div>
                        <div className="flex_6">
                            <span>0.005</span>
                        </div> 
                        <div className="flex_6">
                        
                        </div>
                        <div className="flex_6">

                        </div>
                    </div>
                    <div className="flex-container">
                        <div className="flex_6">
                            <img src={dash}/><span>Dash</span>
                        </div>
                        <div className="flex_6">
                            <span>DASH</span>
                        </div>
                        <div className="flex_6">
                            <span>0.004</span>
                        </div>
                        <div className="flex_6">
                            <span>0.002</span>
                        </div> 
                        <div className="flex_6">
                        
                        </div>
                        <div className="flex_6">

                        </div>
                    </div>
                    <div className="flex-container">
                        <div className="flex_6">
                            <img src={cardano}/><span>Cardano</span>
                        </div>
                        <div className="flex_6">
                            <span>ADA</span>
                        </div>
                        <div className="flex_6">
                            <span>2</span>
                        </div>
                        <div className="flex_6">
                            <span>1</span>
                        </div> 
                        <div className="flex_6">
                        
                        </div>
                        <div className="flex_6">

                        </div>
                    </div>
                    <div className="flex-container">
                        <div className="flex_6">
                            <img src={tusd}/><span>TrueUSD</span>
                        </div>
                        <div className="flex_6">
                            <span>TUSD</span>
                        </div>
                        <div className="flex_6">
                            <span>0.032</span>
                        </div>
                        <div className="flex_6">
                            <span>0.016</span>
                        </div> 
                        <div className="flex_6">
                        
                        </div>
                        <div className="flex_6">

                        </div>
                    </div>

 

                    <p>Trading fees are determined based on trading volume over a 30-day period in USD.</p>
                    <p>We will adjust the withdrawal fees according to the cryptocurrency market’s performance.</p>

                    <p><b>What Does Maker-Taker Mean?</b></p>
                    <p>Every trade occurs between two parties: the maker, whose order exists on the order book prior to the trade, and the taker, who places the order that matches (or "takes") the maker's order. Makers are so named because their orders make the liquidity in a market. Takers are the ones who remove this liquidity by matching makers' orders with their own.</p>

                    <p>The maker-taker model encourages market liquidity by rewarding the makers of that liquidity with a fee discount. It also results in a tighter market spread due to the increased incentive for makers to outbid each other. The higher fee that the taker pays is usually offset by the better prices this tighter spread provides.</p>

                    </div>
                </div>
            </div>
        );
    }

 

 

    public renderFooter() {
        return (
            <div className="pg-landing-screen__footer">
                <div className="pg-landing-screen__footer__wrap"> 
                    <div className="pg-landing-screen__footer__wrap__navigation">
                        <div className="pg-landing-screen__footer__wrap__navigation__col">
                            <Link to="/termsofuse">{this.translate('page.body.landing.footer.terms')}</Link>
                            <Link to="/cookie">{this.translate('page.body.landing.footer.cookies')}</Link>
                            <Link to="/privacy">{this.translate('page.body.landing.footer.privacy')}</Link>
                            <Link to="/aml">{this.translate('page.body.landing.footer.aml')}</Link>
                        </div>
                        <div className="pg-landing-screen__footer__wrap__navigation__col"> 
                            <Link to="/bugbounty">{this.translate('page.body.landing.footer.febugbountyes')}</Link> 
                            <Link to="/deposits">{this.translate('page.body.landing.footer.depositwithdrawal')}</Link> 
                            <Link to="/fees">{this.translate('page.body.landing.footer.fees')}</Link> 
                        </div>
                        <div className="pg-landing-screen__footer__wrap__navigation__col">
                             <a href="mailto:support@sfor.trade">support@sfor.trade</a>
                            <p>{this.translate('page.body.landing.footer.community')}</p>
                            <p>{this.translate('page.body.landing.footer.info')}</p>
                        </div>
 
                        <div className="pg-landing-screen__footer__wrap__social__row">
                            <a href="https://t.me/sfor_trade" target="_blank"><img src={TelegramIcon} alt="Telegram" />Like Us on Facebook</a>
                            <a href="https://twitter.com/SforTrade" target="_blank"><img src={TwitterIcon} alt="Twitter" />Follow Us on Twitter</a> 
                            <a href="https://www.facebook.com/SforTradeOfficial" target="_blank"><img src={FacebookIcon} alt="Facebook" />Like Us on Facebook</a>
                        </div>
                    </div>
                </div>
                <span className="pg-landing-screen__footer__rights"><p>{this.translate('page.body.landing.footer.rights')}</p><a href="https://cybsecgroup.com" target="_blank">C.S.G Team</a></span>
            </div>
        );
    }

    public render() {
        return (
            <div className="pg-landing-screen">
                {this.renderHeader()}    
                {this.renderFeaturesBlock()} 
                {this.renderFooter()}
            </div>
        );
    }

    private redirectToLanding = () => {
        this.props.history.push('/');
    }
    private translate = (key: string) => this.props.intl.formatMessage({id: key});
}

const mapStateToProps = (state: RootState): ReduxProps => ({
    isLoggedIn: selectUserLoggedIn(state),
});

// tslint:disable no-any
export const FeesPolicy = withRouter(injectIntl(connect(mapStateToProps, null)(Landing) as any));
