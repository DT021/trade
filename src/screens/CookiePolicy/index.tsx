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

                <div className="terms_wrapper">

                <h2>Cookie Policy</h2>
                    &nbsp;
                    <h5>Last updated: September 08, 2019</h5>
                    &nbsp;
                    
                    <p>Like almost every other online service, our Services (including our website and app) use cookies and similar technologies to provide you with an enhanced user experience as well as allowing us to analyse and improve our Services. We would not be able to provide you with all of our Services, including certain personalised features, without the use of cookies and related technology and as such, your computer, mobile phone, tablet or other enabled mobile device (which we refer to collectively in this policy as a “device”) will need to be set up to enable such technologies.</p>
                    
                    <p>By visiting and continuing to browse our website, downloading and using our app and using, your account, including, where appropriate, with your browser settings adjusted to accept cookies, you are consenting to our use of cookies, web beacons and related technologies to provide our Services. If you do not consent to our use of cookies your only recourse is to stop using the Services and stop visiting our website. You are also free to disable cookies in your browser, but doing so may interfere with your use of our website or the Services. See Section 2 below for information on how to disable cookies.</p>
                    <h4>1. What do we mean when we use the term ‘cookie’, ‘web beacon’ or ‘similar technology’?</h4>
                    <p>Cookies is a term used to describe is a small text file (typically made of letters and numbers) that is downloaded and stored on your browser or your device by websites that you visit. They are sometimes considered as forming part of the “memory” of your use of websites and related services as they allow service providers to remember you and respond appropriately.</p>
                    
                    <p>Cookies are typically split into 2 main types, namely:</p>
                    <p>Session cookies. Session cookies are stored in your device’s memory only for the length of time of your browsing session. For example, sessions cookies allow you to move around our website and your account features without having to repeatedly log in. They are not accessible after your browser session may have been inactive for a period of time and are deleted from your device when your browser is closed down.</p>
                    <p>Persistent cookies. Persistent cookies are stored in your devices’ memory and are not deleted when your browser is closed. Persistent cookies can helpfully remember you and your preferences each time you access our Services.</p>
                    <p>We use both of these types of cookies.</p>
                    <p>Cookies can also be further categorized as follows:</p>
                    <p>Strictly necessary cookies. These are cookies that are required for the necessary operation of our services. They include, for example, cookies that enable you to log into secure areas of our website and/or app.</p>
                    <p>Performance cookies. They allow us to recognize and count the number of visitors and to see how visitors move around our website when they are using it. This helps us to improve the way our website works, for example, by ensuring that users are finding what they are looking for easily.</p>
                    <p>Functionality cookies. These are used to recognize you when you return to our website. This enables us to personalize our content for you, greet you by name and remember your preferences (for example, your choice of language or region).</p>
                    <p>Targeting cookies. These cookies record your visit to our website, the pages you have visited and the links you have followed. We will use this information to make our website and the advertising displayed on it more relevant to your interests. We may also share this information with third parties for this purpose.</p>
                    <p>Web beacons.</p>
                    <p>The term ‘web beacon’ is used to describe an object embedded in a webpage or email. This object is typically invisible to you, but it permits us to confirm whether you have viewed the web page and/or email (as the case may be). There are other names for ‘web beacons’ which you may come across – these include web bug, tracking bug, clear gif and pixel tag.</p>
                    <h4>2. Managing Cookies</h4>
                    <p>You can manage your cookies (including the enabling or disabling of cookies) by using your browser. For example, you block cookies by activating the setting on your browser that allows you to refuse the setting of all or some cookies. However, if you use your browser settings to block all cookies (including cookies that are strictly necessary) you may not be able to access all or parts of our Services.</p>
                    <p>Each browser is different and as such we suggest that you check the ‘Help’ menu on your particular browser (or your mobile phone’s handset manual) to learn how to change your cookie preference. You may also find more information on how to manage your cookies from third party websites.</p>
                    <p>Here are some links to popular browser cookie information pages which you might find helpful to assist in your cookie management</p>
                    
                    <p><a href="https://support.microsoft.com/en-gb/products/windows?os=windows-10" rel="noopener" target="_blank">Internet Explorer</a></p>

                    <p><a href="https://support.apple.com/en-gb/HT201265" rel="noopener" target="_blank">Safari</a></p>

                    <p><a href="https://support.google.com/chrome/answer/95647?hl=en&amp;ref_topic=3434352" rel="noopener" target="_blank">Google Chrome</a></p>

                    <p><a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" rel="noopener" target="_blank">Mozilla Firefox</a></p>
                    <h4>3. General</h4>
                    <p>We hope the above has clearly explained how we use cookies and similar technologies as well as how you many manage such matters. While we have provided details of third party websites and services which we thought you may find useful, please note that we are not responsible for the content, functionality or services provided by such sites. If you have any further questions or comments about our use of cookies, please contact Support.</p>

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
export const CookiePolicy = withRouter(injectIntl(connect(mapStateToProps, null)(Landing) as any));
