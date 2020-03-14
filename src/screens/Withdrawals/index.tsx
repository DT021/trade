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

const btcwith = require('../../assets/images/paysystems/btcwith.svg');
const banktransfertwith = require('../../assets/images/paysystems/banktransfertwith.svg');  
const coinpaymentswith = require('../../assets/images/paysystems/coinpaymentswith.svg'); 
const payeerwith = require('../../assets/images/paysystems/payeerwith.svg'); 
const advcashwith = require('../../assets/images/paysystems/advcashwith.svg');  
const depositgrey = require('../../assets/images/paysystems/depositgrey.svg');    
const withdrawgold = require('../../assets/images/paysystems/withdrawgold.svg');  
 

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

                <div className="terms_wrapper__depowith">

                <h2>Deposits & Withdrawals</h2>
                    &nbsp;
                    <h5>Last updated: September 15, 2019</h5>
                    &nbsp;
                    <div className="deposit_table">
                        <div className="flex-container">
                        
                        <Link to="/deposits" className="flex_2">
                            <img src={depositgrey} alt="SFOR.TRADE support"/>
                           <span>{this.translate('page.body.deposit.deposit')}</span>
                        </Link>

                        <Link to="/withdrawal" className="flex_2">
                            <img src={withdrawgold} alt="SFOR.TRADE support"/>
                             <span>{this.translate('page.body.deposit.withdraw')}</span>
                        </Link>
            
                        </div>
                            <div className="flex-container">
                                <div className="flex_66">
                                    <span>Paym. system</span>
                                </div>
                                <div className="flex_66">
                                    <span>Currency</span>
                                </div>
                                <div className="flex_66">
                                    <span>Method</span>
                                </div>
                                <div className="flex_66">
                                    <span>Min/Max Per 1 transaction</span>
                                </div>
                                <div className="flex_66">
                                    <span>Max Daily limit</span>
                                </div> 
                                <div className="flex_66">
                                    <span>Service Fee</span>
                                </div> 
                            </div>
                
                            <div className="flex-container">
                                <div className="flex_6">
                                    <img src={btcwith}/>
                                    <span>Crypto</span>
                                </div>
                                <div className="flex_6">
                                    <span>Crypto</span> 
                                </div>
                                <div className="flex_6">
                                    <span>Direct</span> 
                                </div>
                                <div className="flex_6">
                                    <span>0.001BTC/Unlimited</span> 
                                </div>
                                <div className="flex_6">
                                    <span>Unlimited</span> 
                                </div>
                                <div className="flex_6">
                                    <span>0%</span>  
                                </div>
                            </div>
                            <div className="flex-container">
                                <div className="flex_6"> 
                                <img src={banktransfertwith}/>
                                    <span>Bank wire</span>
                                </div>
                                <div className="flex_6">
                                    <span>USD</span>
                                    <span>EUR</span>
                                    <span>RUB</span>
                                </div>
                                <div className="flex_6">
                                    <span>SWIFT</span>
                                    <span>SEPA</span>
                                </div>
                                <div className="flex_6">
                                    <span>$300/Unlimited</span>
                                </div>
                                <div className="flex_6">
                                    <span>Unlimited</span>
                                </div>
                                <div className="flex_6">
                                    <span>0.3%</span>
                                </div>
                            </div>
                             
                            <div className="flex-container">
                                <div className="flex_6"> 
                                <img src={coinpaymentswith}/>
                                    <span>CoinPayments</span>
                                </div>
                                <div className="flex_6"> 
                                    <span>Crypto</span> 
                                </div>
                                <div className="flex_6">
                                    <span>Direct</span> 
                                </div>
                                <div className="flex_6">
                                    <span>0.001BTC/Unlimited</span> 
                                </div>
                                <div className="flex_6">
                                    <span>Unlimited</span> 
                                </div>
                                <div className="flex_6">
                                    <span>0.5%</span> 
                                </div>
                            </div>
                            <div className="flex-container">
                                <div className="flex_6"> 
                                <img src={payeerwith}/>
                                    <span>Payeer</span>
                                </div>
                                <div className="flex_6">
                                    <span>RUB</span>
                                    <span>USD*</span>
                                    <span>EUR*</span>
                                </div>
                                <div className="flex_6">
                                    <span>Visa</span>
                                    <span>MasterCard</span>
                                    <span>Maestro/Cirrus</span>
                                    <span>Мир</span>
                                    <span>Payeer</span> 
                                </div>
                                <div className="flex_6">
                                    <span>₽1.5K/₽75K</span>
                                    <span>₽1.5K/₽75K</span>
                                    <span>₽1.5K/₽75K</span>
                                    <span>₽1.5K/₽75K</span>
                                    <span>₽1.5K/Unlimited</span> 
                                </div>
                                <div className="flex_6">
                                    <span>₽525K (per card)</span>
                                    <span>₽525K (per card)</span>
                                    <span>₽525K (per card)</span>
                                    <span>₽525K (per card)</span>
                                    <span>Unlimited</span> 
                                </div>
                                <div className="flex_6">
                                    <span>3.9%+45₽</span>
                                    <span>3.9%+45₽</span>
                                    <span>3.9%+45₽</span>
                                    <span>3.9%+45₽</span>
                                    <span>0.95%</span> 
                                </div>
                            </div>	
                            <div className="flex-container">
                                <div className="flex_6"> 
                                <img src={advcashwith}/>
                                    <span>Advcash</span>
                                </div>
                                <div className="flex_6">
                                    <span>USD</span>
                                    <span>EUR</span> 
                                </div>
                                <div className="flex_6">
                                    <span>AdvCash Wallet</span> 
                                    <span>Crypto Card</span> 
                                </div>
                                <div className="flex_6">
                                    <span>10$/Unlimited</span>
                                    <span>10$/99,999$</span> 
                                </div>
                                <div className="flex_6">
                                    <span>Unlimited</span> 
                                </div>
                                <div className="flex_6">
                                    <span>0%</span> 
                                    <span>0.99%</span> 
                                </div>
                            </div>
                            
                        </div>
 
                <h4>Withdrawal Policy</h4>
                <p> Withdrawal requests are processed by the financial department of the Company one-at-a-time. The processing time is up to 3 business days. The Company reserves the right to increase the processing time; in such case, the Company shall notify the Client via any contact method specified by the Client in his/her profile.</p>
                <p>The Client is fully responsible for the information he/she provides to the Company through the withdrawal request.</p>
                <p>If the Client uses a bank card for making deposits, withdrawals shall be made to this bank card in the amounts not exceeding the amount deposited within 90 (ninety) calendar days from the last deposit. </p>
                <p>Withdraw funds to a card may takes up to 9 business days for your issuing bank to process the payment, and unfortunately we can't speed up this process.</p>
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
export const Withdrawals = withRouter(injectIntl(connect(mapStateToProps, null)(Landing) as any));
