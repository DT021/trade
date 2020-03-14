import * as React from 'react'; 
import { connect } from 'react-redux'; 
import { InjectedIntlProps, injectIntl } from 'react-intl';
import { Link, RouteProps, withRouter } from 'react-router-dom'; 
import { MarketsTable, SidebarLending } from '../../containers'; 
import {
    RootState,
    selectUserLoggedIn,
} from '../../modules';

const LogoImage = require('../../assets/images/logos.svg');
const supportImage = require('../../assets/images/support.svg'); 

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
                        <div className="pg-landing-screen__header__wrap__left" onClick={e => this.handleScrollTop()}>
                            <img src={LogoImage} alt="SFOR.TRADE Logo"/>
                        </div>
                        <div className="pg-landing-screen__header__wrap__right">
                            <Link to="/profile" className="landing-button">
                                {this.translate('page.body.landing.header.button1')}
                            </Link>
                        <div className="button_supportchat">
                              <img src={supportImage} alt="SFOR.TRADE support"/>
                        </div>
                        <div className="button_leng"> 
                          <SidebarLending />
                        </div>
                        </div>
                    </div>
                </div>
            );
        }

        return (
            <div className="pg-landing-screen__header">
                <div className="pg-landing-screen__header__wrap">
                    <div className="pg-landing-screen__header__wrap__left" onClick={e => this.handleScrollTop()}>
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
                        <div className="button_leng"> 
                          <SidebarLending />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    

    public renderHeaderInfosBlock() {
        return (
            <div className="pg-landing-screen__InfosBlock">
                <div className="pg-landing-screen__up_containerfirst">
                        <div className="pg-landing-screen__main_description"> 
                        <h1>{this.translate('page.body.landingmine.marketInfo.title.text1')}</h1>
                        <span>{this.translate('page.body.landingmine.marketInfo.titleh2.text1')}</span> 
                        <div className="strde"> 
                        <Link to="/trading" className="strdea">
                            {this.translate('page.body.landing.marketInfo.title.button')}
                        </Link>
                        <div className="coin_border"></div>
		            	<div className="border-hover"></div>
                        </div> 
                    </div> 
                </div>
                <div className="pg-landing-screen__down_containerfirst"> 
                    <div className="left_coverlayer"> 
                        <div className="container_cryptolist"> 
                        <MarketsTable /> 
                        </div>
                    </div>
                    <div className="right_coverlayer"> 
                        <div className="flex">
                            <h3>{this.translate('page.body.landing.register.item.title')}</h3>
                            <p>{this.translate('page.body.landingmine.features.features.item1.text')}</p>
                        </div>
                        <div className="flex">
                             <h3>{this.translate('page.body.landing.register.item.titlesecon')}</h3>
                            <p>{this.translate('page.body.landing.marketInfo.title.text2')}</p>
                        </div>
                          
                    </div>
                </div>
                 
            </div>
        );
    }
 

    public renderFeaturesBlock() {
        return (
            <div className="pg-landing-screen__features">
                <div className="pg-landing-screen__features__wrap">
                    <h2>{this.translate('page.body.landing.features.title')}</h2>
  
                    <div className="pg-landing-screen__features__content">
                        <div className="pg-landing-screen__features__content__row">
                            <div className="pg-landing-screen__features__content__row__item">
                                 
                                <h3>{this.translate('page.body.landing.features.features.item1.title')}</h3>
                                <p>{this.translate('page.body.landing.features.features.item1.text1')}</p>
                                <p>{this.translate('page.body.landing.features.features.item1.text2')}</p>
                                <ul>
                                    <li>{this.translate('page.body.landing.features.features.item1.text3')}</li>
                                    <li>{this.translate('page.body.landing.features.features.item1.text4')}</li>
                                    <li>{this.translate('page.body.landing.features.features.item1.text5')}</li>
                                    <li>{this.translate('page.body.landing.features.features.item1.text6')}</li>
                                    <li>{this.translate('page.body.landing.features.features.item1.text7')}</li>
                                    <li>{this.translate('page.body.landing.features.features.item1.text8')}</li>
                                    <li>{this.translate('page.body.landing.features.features.item1.text9')}</li>
                                </ul>
                            </div>
                            <div className="pg-landing-screen__features__content__row__item">
                                
                                <h3>{this.translate('page.body.landing.features.features.item2.title')}</h3>
                                <p>{this.translate('page.body.landing.features.features.item2.text1')}</p>
                                    <ul>
                                        <li>{this.translate('page.body.landing.features.features.item2.text2')}</li>
                                        <li>{this.translate('page.body.landing.features.features.item2.text3')}</li>
                                        <li>{this.translate('page.body.landing.features.features.item2.text4')}</li>
                                        <li>{this.translate('page.body.landing.features.features.item2.text5')}</li>
                                        <li>{this.translate('page.body.landing.features.features.item2.text6')}</li>
                                        <li>{this.translate('page.body.landing.features.features.item2.text71')}</li>
                                        <li>{this.translate('page.body.landing.features.features.item2.text8')}</li>
                                        <li>{this.translate('page.body.landing.features.features.item2.text9')}</li> 
                                    </ul>
                                <p>{this.translate('page.body.landing.features.features.item2.text10')}</p>
                                <p>{this.translate('page.body.landing.features.features.item2.text11')}</p>
                            </div>
                        </div>
                          
                    </div>
                </div>
            </div>
        );
    }

    public renderTradeOnTheGoBlock() {
        return (
            <div className="pg-landing-screen__trade-on-the-go">
                <div className="pg-landing-screen__trade-on-the-go__wrap">
                    <div className="pg-landing-screen__trade-on-the-go__wrap__content">
                        <h2>{this.translate('page.body.landing.tradeOnTheGo.item.title')}</h2>
                        <p>{this.translate('page.body.landing.tradeOnTheGo.item.text1')}</p>
                        <p>{this.translate('page.body.landing.tradeOnTheGo.item.text2')}</p>
                        <p>{this.translate('page.body.landing.tradeOnTheGo.item.text3')}</p>
                    </div>

                    <div className="pg-landing-screen__trade-on-the-go__wrap__image"/>
                </div>
            </div>
        );
    }

    public renderStartTradingBlock() {
        return (
            <div className="pg-landing-screen__start-trading">
                <div className="pg-landing-screen__start-trading__wrap">
                    <h2>{this.translate('page.body.landing.startTrading.title')}</h2>
                    <span>{this.translate('page.body.landing.startTradingtext.title')}</span>

                    <div className="strde"> 
                        <Link to="/trading" className="strdea">
                            {this.translate('page.body.landing.marketInfo.title.button')}
                        </Link>
                        <div className="coin_border"></div>
		            	<div className="border-hover"></div>
                    </div>
                    <span>{this.translate('page.body.landing.startTradingtext.title2')}</span>
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
                {this.renderHeaderInfosBlock()}   
                {this.renderFeaturesBlock()}
                {this.renderTradeOnTheGoBlock()}
                {this.renderStartTradingBlock()}
                {this.renderFooter()}
            </div>
        );
    }

    private handleScrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } 
    private translate = (key: string) => this.props.intl.formatMessage({id: key});
}

const mapStateToProps = (state: RootState): ReduxProps => ({
    isLoggedIn: selectUserLoggedIn(state),
});

// tslint:disable no-any
export const LandingScreen = withRouter(injectIntl(connect(mapStateToProps, null)(Landing) as any));