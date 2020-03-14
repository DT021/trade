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
  
                <h2>Bug Bounty</h2>
                    &nbsp;
                    <h5>Last Revised: August 21, 2019</h5>
                    &nbsp;

                    <p>Although our team of experts has made every effort to squash all the bugs in our systems, there's always the chance that we might have missed one posing a significant vulnerability. If you discover a bug, we appreciate your cooperation in responsibly investigating and reporting it to us so that we can address it as soon as possible. For significant bugs, we offer reward and recognition on our Wall of Fame (below).</p>
                    <h4>Responsible Investigation and Reporting</h4>
                    <p>Responsible investigation and reporting includes, but isn't limited to, the following:</p>
                    <ul>
                        <li>Don't violate the privacy of other users, destroy data, disrupt our services, etc.</li>
                        <li>Only target your own accounts in the process of investigating the bug. Don't target, attempt to access, or otherwise disrupt the accounts of other users.</li>
                        <li>Don't target our physical security measures, or attempt to use social engineering, spam, distributed denial of service (DDOS) attacks, etc.</li>
                        <li>Initially report the bug only to us and not to anyone else.</li>
                        <li>Give us a reasonable amount of time to fix the bug before disclosing it to anyone else, and give us adequate written warning before disclosing it to anyone else.</li>
                    </ul>
                    <p>In general, please investigate and report bugs in a way that makes a reasonable, good faith effort not to be disruptive or harmful to us or our users. Otherwise your actions might be interpreted as an attack rather than an effort to be helpful.</p>

                    <h4>Eligibility</h4>
                    <p>Generally speaking, any bug that poses a significant vulnerability, either to the security of our site or the integrity of our trading system, could be eligible for reward. But it's entirely at our discretion to decide whether a bug is significant enough to be eligible for reward.</p>
                    <p>Security issues that typically would be eligible (though not necessarily in all cases) include:</p>
                    <ul>
                        <li>Cross-Site Request Forgery (CSRF)</li>
                        <li>Cross-Site Scripting (XSS)</li>
                        <li>Code Injection</li>
                        <li>Remote Code Execution</li>
                        <li>Privilege Escalation</li>
                        <li>Authentication Bypass</li>
                        <li>Clickjacking</li>
                        <li>Leakage of Sensitive Data</li>
                    </ul>

                    <h4>Ineligibility</h4>

                    <p>Things that are not eligible for reward include:</p>
                    <ul>
                        <li>Vulnerabilities on sites hosted by third parties unless they lead to a vulnerability on the main website.</li> 
                        <li>Vulnerabilities contingent on physical attack, social engineering, spamming, DDOS attack, etc.</li>
                        <li>Vulnerabilities affecting outdated or unpatched browsers.</li>
                        <li>Vulnerabilities in third party applications that make use of Kraken's API.</li>
                        <li>Bugs that have not been responsibly investigated and reported.</li>
                        <li>Bugs already known to us, or already reported by someone else (reward goes to first reporter).</li>
                        <li>Issues that aren't reproducible.</li>
                        <li>Issues that we can't reasonably be expected to do anything about.</li>
                    </ul>

                    <h4>Reward</h4>
                    <ul>
                        <li>The minimum reward for eligible bugs is the equivalent of 100 USD in SFORs.</li>
                        <li>Rewards over the minimum are at our discretion, but we will pay significantly more for particularly serious issues.</li>
                        <li>Only one reward per bug.</li>
                    </ul> 
                    <ul>
                    <h4>How to Report a Bug</h4>
                        <li>Send your bug report to bugbounty@sfor.trade.</li>
                        <li>Try to include as much information in your report as you can, including a description of the bug, its potential impact, and steps for reproducing it or proof of concept.</li>
                        <li>Include your name and link as you would like it to appear on our Wall of Fame (optional).</li>
                        <li>Include your SFOR address for payment.</li>
                        <li>Please allow 3 business days for us to respond before sending another email.</li>
                    </ul>
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
export const BugBounty = withRouter(injectIntl(connect(mapStateToProps, null)(Landing) as any));
