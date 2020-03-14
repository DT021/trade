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
                

                <h2>TERMS OF USE AGREEMENT</h2>
                &nbsp;
                <h5>Last Revised: August 25, 2019</h5>
                &nbsp;
                <h4>1. COMMON PROVISIONS</h4>
                <ol>
                    <li>These Terms of Use contain an electronic agreement between you (hereinafter the “User”) and SFOR LLC, company number 439868341, registered in Georgia, hereinafter the “SFOR.TRADE”, that applies to your use of this website, all services, products and content provided by SFOR.TRADE.</li>
                    <li>These Terms of Use contain important provisions, which the User must consider carefully and understand when choosing whether to visit the Site and use the services, products and content of SFOR.TRADE. Please read these Terms of Use carefully before agreeing to them.</li>
                    <li>References in these Terms of Use to SFOR.TRADE, 'we', 'our' or 'us', are to the company SFOR LLC, including but not limited to, employees, directors, officers, agents or other related parties, third parties, whose content is offered on this website and/or in SFOR.TRADE’s software, depending on the context, and references to “User”, 'you' or 'your' are to the person with whom SFOR.TRADE enters into the electronic agreement, unless otherwise provided herein.</li>
                    <li>The User is solely responsible for understanding and complying with any and all laws, rules and regulations of his/her specific jurisdiction that may be applicable to the User in connection with the use of any and all services, products and content of SFOR.TRADE.</li>
                    <li>By signing up to use an account through SFOR.TRADE or any of our associated websites, APIs, or mobile applications (collectively the 'SFOR.TRADE’s Software') and/or by using SFOR.TRADE’s Software, you agree that you have read, understood, and accept all of the terms and conditions contained in these Terms of Use, as well as our Privacy Policy and our Anti Money Laundering Policy and procedures. The User has to read and to understand the entire Terms of Use carefully before each using the Site and/or any of the Services provided by SFOR.TRADE.</li>
                    <li>IF THE USER DOES NOT ACCEPT AND/OR UNDERSTANDS THESE TERMS OF USE, THE USER SHALL NOT ACCESS THIS SITE AND SHALL NOT USE ANY OF SFOR.TRADE’s SOFTWARE, SERVICES, PRODUCTS AND CONTENT.</li>
                    <li>You should be aware that the risk of loss in trading or holding Digital Currencies (coins and/or tokens) can be high. Digital currency services are not currently regulated in most countries (by financial authorities or any other regulator). You should therefore carefully consider whether trading or holding Digital currencies are suitable for you in light of your financial condition and possible risks.</li>
                </ol>
                <h4>2. DEFINITIONS</h4>
                <p>Terms used in these Terms of Use shall be interpreted in accordance with the definitions provided below:</p>
                
                <p><b>Account: </b>means an account, registered by the User on the SFOR.TRADE’s Platform.</p>
                
                <p><b>Buyer: </b>means the User, who makes an Order to buy Digital currencies through the Platform (SFOR.TRADE’s Software) and/or the User whose Order is accepted by the Seller depending on the context.</p>
                
                <p><b>Digital currency or Digital asset: </b>means peer-to-peer decentralized digital representation of value – products, commonly known as cryptographic tokens, digital tokens or cryptographic currency (bitcoins, ethers, tokens, etc.).</p>
                
                <p><b>Deposit: </b>means a transaction involving a transfer of funds to the Account.</p>
                
                <p><b>Deposit of Platform’s Internal Coin(s): </b>means a purchase of Platform’s Internal Sfor coin (s) by User from the SFOR.TRADE at a price with depositing of bought Platform’s Internal Coin(s) on User’s account.</p>
                
                <p><b>External Wallet: </b>means a Digital currency or Fiat wallet that is not part of the SFOR.TRADE’s platform but which may be indicated on the SFOR.TRADE’s platform.</p>
                
                <p><b>Fiat currency: </b>means government-issued currency, which is regulated in its country of issuance through government regulation or law.</p>
                
                <p><b>Fiat currency storage service: </b>means service, delivered by a third party, holding an appropriate financial license, which includes holding of User’s Fiat currency on External Wallet of User.</p>
                
                <p><b>Platform’s Internal Coin: </b>means blockchain based Digital currency SFOR, created and operated by the SFOR.TRADE, which could be used not only for transactions on SFOR.TRADE platform.</p>
                
                <p><b>Order: </b>means the User's offer on the SFOR.TRADE’s platform (SFOR.TRADE’s software) to buy or sell Digital currency on certain conditions.</p>
                
                <p><b>Platform: </b>means an appropriate environment (including software), created and/or operated by the SFOR.TRADE, which allows to trade Digital currencies and/or to provide other Services.</p>
                
                <p><b>Seller: </b>means the User who submits an Order to sell Digital currencies through the Platform (SFOR.TRADE’s software) and/or the User whose Order is accepted by the Buyer depending on the context.</p>
                
                <p><b>Services: </b>means all and any service provided by SFOR.TRADE.</p>
                
                <p><b>Website or Site: </b>means SFOR.TRADE’s website at https://sfor.trade.</p>
                
                <p><b>Storage fee: </b>means fee, charged for Storage service.</p>
                
                <p><b>Storage service</b>: means service, provided by SFOR.TRADE, which includes storing of balances from the abandoned Accounts (Account not used 1 year or more), and/or balances in no longer supported Digital currencies.</p>
                
                <p><b>User: </b>means a person or an entity that uses the Services, agrees to follow the Terms of Use and is a holder of an Account.</p>
                
                <p><b>Withdrawal: </b>means a transaction involving a transfer of Funds from the User’s Account.</p>
                
                <p><b>Withdrawal of Platform’s Internal Coin(s): </b>means a purchase of Platform’s Coin(s) by SFOR.TRADE from User. SFOR.TRADE does not provide any guarantees as for existence or keeping of certain withdrawal options and/or directions for the Platform’s Coin.</p>
                
                <p>Where the context so admits words denoting the singular shall include the plural and vice versa.</p>
                <h4>3. Eligibility and Prohibition of use</h4>
                <p>By registering an Account, the User expressly represents and warrants that he/she:</p>
                <ol>
                    <li>follows the rules and laws in his/her country of residence and/or country from which he/she accesses this Website, Platform and the Services;</li>
                    <li>has accepted these Terms of Use;</li>
                    <li>is at least 18 years old and has the right to accept these Terms of Use and use the Services;</li>
                    <li>has not previously been suspended or removed from using our Services;</li>
                    <li>does not currently have an existing SFOR.TRADE account;</li>
                    <li>will strictly observe the security, authentication, dealing, charging, withdrawal mechanism or procedures of the website/service.</li>
                </ol>
                <p>If User is entering into these Terms on behalf of a legal entity of which he/she is an employee or agent, User represents and warrants that he/she has all necessary rights and authority to bind such legal entity.</p>
                
                <p>By accessing and using the Services, you represent and warrant that you are not on any trade or economic sanctions (and/or restrictions) lists, such as the UN Security Council Sanctions list.</p>
                
                <p>SFOR.TRADE maintains the right to select its markets and jurisdictions to operate and may restrict or deny the Services in certain countries at its discretion. Depending on the User’s place of residence (and/or other legal facts), the User may not be able to use all the functions of the Website.</p>
                
                <p>It is the User’s responsibility to follow those rules and laws in his/her place of residence and/or place from which the User accesses this Website. The User must understand that technical possibility to use the appropriate Services on the Platform (SFOR.TRADE’s software) doesn’t mean that such a use is legal for him/her.</p>
                
                <p>The User is solely responsible for understanding and complying with any and all laws, rules and regulations of his/her specific jurisdiction that may be applicable to the User in connection with the use of any and all services, products and content of SFOR.TRADE.</p>
                
                <p>Please note that not all our Services are available in every country. In particular, SFOR.TRADE does not provide Services to citizens or residents of countries that are blacklisted by FATF.</p>
                
                <p>Depending on the User’s place of residence, there might be other factors which might limit the Users in using the Services fully or in part. It is your responsibility to follow those rules and Laws in your place of residence and/or place from which you access the Site and/or the Platform.</p>
                
                <p>Attention to users, in particular to сountries where initial distribution or secondary trading of certain digital currency (traded on this platform and/or via the SFOR.TRADE’s software) is (would be) contrary to any law or regulation or demands any registration, licensing or other authorization, etc. of entity, person, digital currency and/or demands from entities (persons), managing this platform to perform other legal deeds.</p>
                
                <p>The appropriate digital currency, traded on this platform and/or via SFOR.TRADE’s software (in particular, token, which could be considered as securities by sec) is not intended for purchase/sale and/or distribution to, or use by any person or entity in any jurisdiction or country, where such purchase and/or distribution and/or use is (would) be contrary to any law or regulation, or which would oblige (would subject) an issuer/seller/buyer of such digital currency (traded on this platform and/or via the SFOR.TRADE’s software) and/or SFOR.TRADE and/or entity (including their affiliates) creating/maintaining this website to any registration, licensing or other authorization requirement within such jurisdiction or country.</p>
                <h4>4. OUR SERVICES</h4>
                <ol>
                    <li>SFOR.TRADE provides an online Digital currency (asset) trading platform for Digital Currency. SFOR.TRADE functions as a trading platform provider and not as a buyer or seller in trades made between Users, Sellers, Buyers. The User acknowledges and agrees that, when completing trading transactions, he/she is trading with other Users, and that SFOR.TRADE acts only as a provider of technical services (the Platform and/or SFOR.TRADE’s software) in such transactions, not as the counterparty to any trade.</li>
                    <li>As an exception to the above SFOR.TRADE reserves the right to sell to Users the Platform’s Coin(s) while Deposit of Platform’s Coin(s) and/or to buy the Platform’s Coin(s) while Withdrawal of Platform’s Coin(s).</li>
                    <li>SFOR.TRADE strives to maintain the accuracy of information on the Website (Platform) and/or given while providing of the Services, however SFOR.TRADE cannot and does not guarantee the accuracy, suitability, reliability, completeness, performance or fitness for any purpose of the content made available through the Website (Platform), Services, and will not be liable for any loss or damage that may arise directly or indirectly from your use of such content. Information on the Services can be subjected to change without notice and is provided for the primary purpose of facilitating users to arrive at independent decisions. SFOR.TRADE does not provide investment or advisory advice and will have no liability for the use or interpretation of information. All users of the Services must understand that there are risks involved in trading in Digital Currencies. SFOR.TRADE encourages all users to exercise prudence and trade responsibly within their own means.</li>
                </ol>
                <h4>5. OUR RIGHTS, RESPONSIBILITIES AND WARRANTIES</h4>
                <ol>
                    <li>SFOR.TRADE undertakes to provide the Services with the appropriate effort, due care and in accordance with these Terms of Use. SFOR.TRADE’s responsibility shall be limited to using reasonable technical efforts to ensure the receipt of the Digital currencies transferred. When initiating Digital currency transactions to a user who is not the SFOR.TRADE User, SFOR.TRADE responsibility shall be further limited to ensuring the transfer of the necessary technical data to the Digital currency network.</li>
                    <li>To the extent permitted by law, SFOR.TRADE is not responsible for any damages, loss of profit, loss of revenue, loss of business, loss of opportunity, loss of data, indirect or consequential loss unless the loss suffered is caused by a breach of the Terms of Use by SFOR.TRADE.</li>
                    <li>SFOR.TRADE has the right to suspend (freeze) the User’s Account and block all and/or part of Digital currency contained therein in case of non-fulfillment or unduly fulfillment of the Terms of Use by the User.</li>
                    <li>SFOR.TRADE is not responsible: - for the delay in the processing of payments made by the fault of any third parties, operators of such transactions; - for any malfunction, breakdown, delay or interruption, including but not limited to, caused directly or indirectly by blockchain environment and its processes, nodes etc., and/or caused by the Internet connection or any reason why our Website and/or Platform (Services) are unavailable at any given time.</li>
                    <li>In the case of fraud, SFOR.TRADE undertakes to report all the necessary information, including names, addresses and all other requested information, to the relevant authorities dealing with fraud and breaches of the law.</li>
                    <li>The Users recognize that their account may be frozen at any time at the request of any competent authority investigating a fraud or any other illegal activity and/or according to applicable law and/or according to the Terms of Use.</li>
                    <li>All buy and sell orders made on the Platform, will be managed in an anonymous manner so that Buyers and Sellers are not acquainted with each other. The exchange (transaction) price is calculated on the basis of actual matched orders made by the Buyers and Sellers participating in the bidding process on the Platform combined with the applicable fees.</li>
                    <li>SFOR.TRADE represents and warrants that once the orders to buy or sell Digital currencies match, such orders may not be cancelled or reversed. It holds all Digital currencies acquired by each User in his/her Account and on the respective User's behalf.</li>
                    <li>SFOR.TRADE reserves the right to cancel orders/trades obviously made by mistake (in particular if the price of the order/trade due to mistake is clearly very different from the market price, orders/trades obviously made due to lags of User’s equipment/software etc.) The cancelation can be made based on request of interested User and/or decision of SFOR.TRADE and only if an appropriate technical possibility exists in case if mistake made is absolutely obvious. This right couldn’t be considered as an obligation and/or a guaranty of SFOR.TRADE.</li>
                    <li>SFOR.TRADE does not provide any financial, investment or legal advice in connection with the Services provided by SFOR.TRADE. SFOR.TRADE may provide news of the Platform, information on the price, range, volatility of Digital currencies and events that have affected the price of Digital currencies and/or links to trading ideas of third parties (persons), but it should not be considered as an investment or financial advice and should not be construed as such. Any decision to buy or sell Digital currencies is the User’s decision and SFOR.TRADE will not be liable for any loss suffered.</li>
                    <li>No communication or information provided to User by SFOR.TRADE is intended as, or shall be considered or construed as, investment advice, financial advice, trading advice, or any other sort of advice. User is solely responsible for determining whether any investment, investment strategy or related transaction is appropriate for him/her based on his/her personal investment objectives, financial circumstances and risk tolerance. User should consult legal or tax professional regarding specific situation. SFOR.TRADE does not recommend that any Digital Currency should be bought, earned, sold, or held. Before making the decision to buy, sell or hold any Digital Currency, User should conduct his/her own due diligence, study documents (terms and conditions, white paper, etc.) related to Digital currency and consult financial advisors before making any investment decision. SFOR.TRADE will not be held responsible for the decisions User make to buy, sell, or hold Digital Currency based on the information provided by SFOR.TRADE.</li>
                </ol>
                <h4>6. THE USER’S RIGHTS, RESPONSIBILITIES AND WARRANTIES</h4>
                <ol>
                    <li>The User has the right to enter and/or use the Site and the Services, as long as he/she agrees to and actually complies with the Terms of Use. By using the Site, the User agrees to accept and comply with the terms and conditions stated herein.</li>
                    <li>The User has to comply with any and all applicable laws and regulations related to the use of the Services.</li>
                    <li>The User has to monitor all and any changes on his/her Account. The User has to inform SFOR.TRADE immediately about any unusual, suspicious, not sanctioned, abnormal changes on his/her Account. In case of late informing or non-informing the User will be liable for the breach of the Terms of Use and SFOR.TRADE will have the right to take any further steps accordingly, including but not limited to report to the relevant state or national authorities.</li>
                    <li>The User agrees that, whenever the transaction is made, the Platform sends and receives the Digital currencies to/from the Buyer’s and the Seller’s Accounts.</li>
                    <li>The User has to inform SFOR.TRADE immediately of any unauthorized use of his/her Account or password, or any other breach of security by email. Any User who violates the mentioned rules held liable for any losses incurred by SFOR.TRADE or any user of the Site, his/her Account may be suspended.</li>
                    <li>The User undertakes not to use the Service to perform criminal and/or not legal activity of any sort, including but not limited to, money laundering, financing terrorist organizations, or malicious hacking.</li>
                    <li>The User is responsible for any and all damages caused, and all liability actions brought against SFOR.TRADE for infringement of any third-party rights or violation of any applicable laws. Nothing in the Terms of Use excludes or limits the liability of the User for fraud, penalties any other negative consequences, caused by their negligence, breach of the terms implied by operation of law or any other liability which may not be limited or excluded by law.</li>
                    <li>Users are solely responsible for determining whether any contemplated transaction is appropriate for them based on their personal goals, financial status and risk willingness.</li>
                    <li>All payment instruments (methods), used to deposit/withdraw funds to/from User’s Account (bank account, credit card, debit card, or others) must be personalized and owned by the Account holder. Any attempt otherwise will (or can) be recognized as fraud.</li>
                    <li>By registering an Account, the User expressly represents and warrants that he/she: follows the rules and laws in his/her country of residence and/or country from which he/she accesses this Site and Services; has accepted these Terms of Use; is at least 18 years old and has the right to accept these Terms of Use and participate in transactions involving Digital currencies.</li>
                    <li>The User represents and warrants that he/she will only use the Platform to perform transactions in accordance with the conditions set forth in these Terms and that they are duly authorized and have the capacity to enter into the transactions on the Platform.</li>
                    <li>The User represents and warrants that currencies held on his/her Account (deposited and/or indicated, basing on the information from External wallet) on the Platform belong to the User and derived from legal sources.</li>
                    <li>The User represents and warrants than he/she will withdraw any Digital currency from his/her Account only to his/her wallets, otherwise SFOR.TRADE does not hold any liability for the consequences of such withdrawal. A mistake in requisite of the User’s wallet while transaction may cause the loss of appropriate currencies without any responsibility and/or coverage from SFOR.TRADE.</li>
                    <li>The User represents and warrants that all transactions being carried out do not violate the rights of any third party or applicable laws.</li>
                    <li>The User understands that his personal data may be shared due to legal obligations etc. It may be used according to our Privacy policy.</li>
                    <li>The User undertakes to pay all his/her taxes and duties, which can be resulted from the use of SFOR.TRADE Services and should be paid according to the User’s state of residence regulations. SFOR.TRADE is not responsible for any violation made by the User due to his/her obligation to calculate and pay taxes and duties. The User has to refrain from transactions on the Platform related to tax offences and/or violations.</li>
                </ol>
                <p>By accessing the Service, User agrees that SFOR.TRADE shall have the right to investigate any violation of these Terms of Use, unilaterally determine whether User has violated these Terms of Use, and take actions to apply relevant rules without receiving User’s consent or giving prior notice.</p>
                
                <p>Examples of such actions include, but are not limited to:</p>
                <ul>
                    <li>block and close order requests;</li>
                    <li>freezing Account;</li>
                    <li>reporting the incident to authorities;</li>
                    <li>publishing the alleged violations and actions that have been taken;</li>
                    <li>deleting any information User published that is in violation.</li>
                </ul>
                <h4>7. RISK DISCLOSURE</h4>
                <ol>
                    <li>Any statements made on Platform, in SFOR.TRADE’s software or in information provided by SFOR.TRADE do not constitute investment advice.</li>
                    <li>SFOR.TRADE is not liable for any errors or omissions or oversights.</li>
                    <li>You are not entitled to a refund at any time or for any reason.</li>
                    <li>The Digital Assets market is a dynamic area and the respective prices are often highly unpredictable and volatile. You should not deal in these or similar products unless you understand their nature and the extent of your exposure to risk. You should also be satisfied that the product is suitable for you in light of your circumstances and financial position. In addition, use of the Platform and of our Services can never be considered a safe investment but only an investment with a high risk of loss inherently associated with it. It is possible that the value of Digital Assets will drop significantly in the future. The market for Digital Assets is still new and uncertain. No-one should have funds invested in Digital Assets or speculate in Digital Assets that she is not prepared to lose entirely.</li>
                    <li>Whether the market for one or more Digital Assets will move up or down, or whether a particular Digital Asset will lose all or substantially all of its value, is unknown. Participants should be cautious about holding Digital Assets.</li>
                    <li>There are risks associated with utilizing an internet-based platform including, but not limited to, the failure of hardware, Services software, and internet connections. You acknowledge that SFOR.TRADE shall not be responsible for any communication failures, disruptions, errors, distortions or delays you may experience when using the services.</li>
                    <li>Hackers or other groups or organizations may attempt to steal your Digital Assets or the revenue from your transactions.</li>
                    <li>Digital Assets transactions are irrevocable and stolen or incorrectly transferred Digital Assets may be irretrievable. As a result, any incorrectly executed Transaction could adversely affect the value of your Wallets. Once a transaction has been verified and recorded in a block that is added to the blockchain, an incorrect transfer of Digital Assets or a theft of Digital Assets generally will not be reversible and there may be no compensation for any such transfer or theft.</li>
                    <li>The risk information presented here does not reflect all of the risks or other important aspects of your transactions via the Services (including related to the nature and performance of any products available on the Platform). Therefore, before starting to use the Services, you should learn the specifics of such transactions and possible underlying assets in detail or seek further professional advice. Please consider these risks carefully and seek professional advice if anything in this section or in the general is not clear to you. Do not use the Services until you are sure that you correctly understand all the associated risks.</li>
                    <li>Markets for Digital Assets have varying degrees of liquidity. Some are quite liquid while others may be thinner. Thin markets can amplify volatility. There is never a guarantee that there will be an active market for one to sell, buy, or trade Digital Assets or products derived from or ancillary to them. Furthermore, any market for tokens may abruptly appear and vanish. SFOR.TRADE makes no representations or warranties about whether a Digital Asset that may be traded on the Site any point in the future, if at all. Any Digital Asset is subject to delisting without notice or consent. Values in any digital asset marketplace are volatile and can shift quickly. Participants in any Digital Assets market are warned that they should pay close attention to their position and holdings, and how they may be impacted by sudden and adverse shifts in trading and other market activities.</li>
                    <li>The legal status of certain Digital Assets may be uncertain. This can mean that the legality of holding or trading them is not always clear. Whether and how one or more Digital Assets constitute property, or assets, or rights of any kind may also seem unclear.</li>
                    <li>Participants are responsible for knowing and understanding how Digital Assets will be addressed, regulated, and taxed under applicable law.</li>
                    <li>When you finance a purchase or sale of Digital Assets on a peer-to-peer basis, you run the risk of losing your provided financing. Similarly, when you accept financing to enter a trading agreement, you accept the risk of not being able to repay that financing (e.g., if the market price of the Digital Asset you purchased with the financing falls). Participants should know all of the terms of any contracts they enter and how their trading strategies and other market and risk factors can affect their financing obligations.</li>
                    <li>Before buying, trading Digital Asset (including initial offering) User has to read (study) carefully and to understand the documents related to such Digital asset (e.g. terms and conditions, white paper, road map etc.).</li>
                </ol>
                <h4>8. INTELLECTUAL PROPERTY RIGHTS</h4>
                <ol>
                    <li>Each project, team, company, User – initiator, sponsor of COIN/TOKEN listing and/or customer of listing services and/or services of IEO grants to SFOR.TRADE a non-exclusive, personal, royalty-free license to use its created intellectual property (logos, trademarks, description of the project, promotional materials, etc.) in relation to listing and/or IEO to the extent necessary for SFOR.TRADE to carry out its obligations in relation to listing and/or IEO and for informing and promotion.</li>
                </ol>
                <h4>9. VERIFICATION</h4>
                <ol>
                    <li>With registration of an Account, the User agrees to share personal information requested for the purposes of identity verification. This information is used specifically for the detection of money laundering, terrorist financing, fraud and other financial crimes on the Platform. SFOR.TRADE will collect, use and share this information in accordance with our posted Privacy Policy. In addition to providing this information, to facilitate compliance with global industry standards for data retention, you agree to permit us to keep a record of such information for the lifetime of your account plus 5 years beyond account closing. You also authorize us to make inquiries, either directly or through third parties, that are deemed necessary to verify your identity, to check the relevance and accuracy of the information provided for verification purposes or to protect you and/or us against financial crimes such as fraud.</li>
                    <li>Identification and verification procedures (also known as 'Know Your Customer' or 'KYC') are required. If the User refuses to provide required documents and information under KYC, SFOR.TRADE reserves the right to immediately terminate the Services provision to the User.</li>
                    <li>The User undertakes to provide SFOR.TRADE with correct and relevant documents and personal information contained therein. In case the User provides counterfeit documents and/or false personal information, such behavior will be interpreted as a fraudulent activity – in that case SFOR.TRADE reserves the right to immediately terminate the Services provision to the User and/or to suspend the Account.</li>
                    <li>If there is any reasonable doubt that any information provided by you is wrong, untruthful, outdated or incomplete, SFOR.TRADE shall have the right to send you a notice to demand corrections, request additional information, remove relevant information directly and, as the case may be, terminate all or part of the Services to you. You shall be solely and fully responsible for any loss or expenses incurred during the use of Services if you cannot be reached through the contact information provided.</li>
                </ol>
                <h4>10. ACCOUNT MAINTENANCE</h4>
                <ol>
                    <li>SFOR.TRADE is vigilant in maintaining the security of the Site and the Service. By registering with SFOR.TRADE, the User agrees to provide SFOR.TRADE with actual (up to date), accurate and complete personal information as prompted by the registration process and to keep such information updated.</li>
                    <li>The User is allowed to register only one Account on the Platform. Thus, any additional Account may be suspended.</li>
                    <li>The User agrees that he/she will not use any Account other than their own or access the Account of any other User at any time, or assist others in obtaining unauthorized access - if the User breaches it, SFOR.TRADE reserves the right to suspend/freeze his/her account.</li>
                    <li>SFOR.TRADE reserves the right to set and/or recommend amount limits for the Account funding/withdrawal. SFOR.TRADE may set and/or recommend daily, monthly and per one-transaction amount limits but is not obliged to do it.</li>
                    <li>The User is responsible for maintaining the confidentiality of information on their Account, including, but not limited to their password, email, wallet address, wallet balance and of all activities including transactions made via their Account. If there is any suspicious activity related to the User’s Account or in accordance with its internal policies, SFOR.TRADE may request additional information from the User, including authenticating documents and freeze the Account for the review time. The User is obligated to comply with these security requests or accept termination of their Account.</li>
                    <li>Creation or use of the Accounts without obtaining a prior permission from SFOR.TRADE will result in the immediate suspension of all respective Accounts, as well as all pending buy/sell orders. Any attempt to do so or to assist others (Users or other third parties), or distribution of instructions, software or tools for that purpose will result in termination of such Users’ Accounts. Termination is not an exclusive remedy for such a violation and SFOR.TRADE may decide to take further action against the User.</li>
                    <li>Abandoned Accounts with zero balances may be deactivated.</li>
                </ol>
                <h4>11. TRANSACTIONS</h4>
                <ol>
                    <li>The Platform allows the User to submit the Orders to buy or sell Digital currencies.</li>
                    <li>The User recognizes that the Order should only be submitted after careful consideration and the User understands and accepts consequences of its execution. The User agrees that as soon as the Order is executed, such transaction is irreversible and may not be cancelled. Transactions will be executed instantly upon the matching of the Buyer's and the Seller's Orders without prior notice to the Seller and the Buyer and will be considered to have taken place at the execution date and time.</li>
                    <li>The User acknowledges and agrees that in case the destination tag is not specified, is incorrectly indicated or the reference number is incorrectly specified, the User may lose the deposit or at least the processing speed of such requests will be made with low priority.</li>
                    <li>Minimal and maximal price, as well as minimal and maximal order amount and/or other restrictions (limits) for trade orders (operations) may be set. Restrictions (limits) may vary for each trading pair (and/or depending on other details).</li>
                    <li>The User acknowledges and agrees that Deposit and Withdrawal transaction may be delayed due to some verifications and checks (performed by SFOR.TRADE or appropriate third parties). Similarly, and due to the inherent nature of the Digital currency networks, the User acknowledges and agrees that depositing and withdrawing Digital currencies into/from their Account may take some time.</li>
                    <li>Unverified users are not allowed to withdraw any Digital currencies from their Account until the verification process has been completed</li>
                    <li>In case if the User discovers transaction activity, including but not limited to unknown deposits and withdrawals, on their Account that was not initiated by the User, the User shall immediately notify SFOR.TRADE of this fact and follow the instructions sent by SFOR.TRADE. Otherwise, SFOR.TRADE reserves the right to freeze the Account until the end of investigation.</li>
                    <li>SFOR.TRADE may be forced to cancel or recall already executed Withdrawal transaction at a request of financial institutions, including but not limited to banks, which are involved in settlement of such transactions. In such cases the User obliges to cooperate with SFOR.TRADE in order to discover the reasons for such request</li>
                    <li>SFOR.TRADE reserves the right to set the minimal and/or maximal deposit amount for Digital currencies hold by the User on the Platform. If the amount is less and/or higher than specified, the funds will not be credited to the User's Account.</li>
                </ol>
                <h4>12. FEES</h4>
                <ol>
                    <li>You agree to pay to SFOR.TRADE the fees set forth at https://sfor.trade/fees which may be updated from time to time in SFOR.TRADE’s sole discretion. Any such updated fees will apply prospectively to any trades or other transactions that take place following the effective date of such updated fees. You authorize SFOR.TRADE to remove any amounts from your Account for any applicable fees owed by you under these Terms.</li>
                    <li>The minimal fee equals to minimal currency amount. The fee is charged with a rounding in the favor of the Platform. The rounding policy for Digital currencies may vary depending on Digital currency.</li>
                    <li>For specific type of orders the fee may differ from those published on the Website. Such special fee rate shall be disclosed before the order execution.</li>
                    <li>The fees, other charges, as well as the charge procedure can be changed/reviewed unilaterally by SFOR.TRADE from time to time and such changes shall become effective the moment they are posted on the Site.</li>
                    <li>The Storage fee may be charged by SFOR.TRADE for storing any Digital currency until assets are claimed back by the User or the Account goes to a zero balance. The Storage fee (if applicable) is set in the Fee Schedule page. The Storage fee is charged on a daily basis. SFOR.TRADE has the right to change the Storage fee unilaterally.</li>
                </ol>
                <h4>13. ILLEGAL TRANSACTIONS</h4>
                <ol>
                    <li>SFOR.TRADE reserves the right to suspend or terminate your Account on the Platform at any time if we reasonably believe to be required to do so by the law or in order to comply with recommendations issued by a relevant government authority or recognized body for the prevention of financial crime.</li>
                    <li>It is strictly forbidden to use the Account for any illegal purposes. SFOR.TRADE will report any suspicious activity to the relevant law enforcement. The User shall ensure that they do not use the Services for the transactions relating to:
                
                <p>- money laundering, terrorist financing, proliferation of weapons of mass destruction;</p>
                
                <p>- human trafficking;</p>
                
                <p>- any goods or services that are illegal or the promotion, offer or marketing of which is illegal or that are offered in connection with illegal, obscene or pornographic content, depict children or minors in sexual postures, depict means of propaganda or signs of unconstitutional organizations glorifying war or violating human dignity;</p>
                
                <p>- any goods or services, promotion, offer or marketing of which would violate copyrights, industrial property rights or other rights of any person;</p>
                
                <p>- archeological findings;</p>
                
                <p>- drugs, narcotics or hallucinogens;</p>
                
                <p>- weapons of any kind;</p>
                
                <p>- Ponzi, pyramid or any other “get rich quick” schemes;</p>
                
                <p>- goods that are subject to any trade embargo;</p>
                
                <p>- media that is harmful to minors and violates laws and, in particular, the provision in respect of the protection of minors;</p>
                
                <p>- body parts or human remains;</p>
                
                <p>- protected animals or protected plants;</p>
                
                <p>- weapons or explosive materials;</p>
                
                <p>- or any other illegal goods, services or transactions.</p></li>
                </ol>
                <h4>14. ACCOUNT SECURITY</h4>
                <ol>
                    <li>The User is responsible for maintaining the confidentiality of their Account’s credentials, including, but not limited to a password, email, wallet address, balance and of all activity including transactions made through the Account.</li>
                    <li>SFOR.TRADE personnel will never ask the User to disclose their password. Any message the User receives or website that he/she visits that asks for the password, other than the SFOR.TRADE’s Site, should be reported to SFOR.TRADE. Before each using of the Website the User has to check (ensure) that he/she is using a genuine website.</li>
                    <li>We advise to change the User’s password regularly in order to reduce the risk of a security breach in relation to the Account. The User must never allow anyone to access his/her Account or watch the User accessing his/her Account. If the User has any security concerns concerning his/her Account, login details, (password or other security feature being lost, stolen, misappropriated, used without authorization or otherwise compromised), the User is advised to change the password immediately. The User must contact support service without undue delay on becoming aware of any loss, theft, misappropriation or unauthorized use of the Account, login details, password or other security features. If the User suspects that someone else accessed his/her Account, the User should also contact an appropriate government agency and report the incident.</li>
                    <li>The User must take reasonable care to ensure that his/her email account(s) are secure and only accessed by the User, as his/her email address may be used to reset passwords or to communicate with the User about the security of the Account. SFOR.TRADE cannot be liable for the breach of an email account resulting an unauthorized transaction to be executed with proper confirmation. In case any of the email addresses registered with the User’s Accounts is compromised, the User should without undue delay after becoming aware of this contact Support Service and also contact his/her email service provider.</li>
                    <li>Irrespective of whether the User is using a public, a shared or his/her own computer to access the Account, the User must always ensure that his/her login details are not stored by the browser, cached or otherwise recorded. The User should never use any functionality that allows login details or passwords to be stored by the computer he/she is using.</li>
                    <li>Additional products or services the User uses may have additional security requirements and the User must familiarize with those as notified to him/her.</li>
                    <li>We strictly recommend to use additional authentication options of the Platform.</li>
                    <li>The User shall be the only liable for the damages or losses caused by his/her negligence in security matters and/or non-reporting, delay in reporting security/access concerns to SFOR.TRADE.</li>
                    <li>User shall be solely responsible for the safekeeping of his/her Account and password, and shall be responsible for all activities under Account and SFOR.TRADE will not be responsible for any loss or consequences of authorized or unauthorized use of your Account credentials including but not limited to information disclosure, information posting, consent to or submission of various rules and agreements by clicking on the website, online renewal of agreement, etc.</li>
                </ol>
                <h4>15. FRAUD INVESTIGATION POLICY</h4>
                <ol>
                    <li>User has to report fraud, related to certain operation(s)/asset(s)/account(s) to the SFOR.TRADE’s legal department legal@sfor.trade. Fraud report has to be made from the User’s email bound with his verified account to authenticate User's identity. Additional verification of the User’s identity may be requested by SFOR.TRADE.</li>
                    <li>If convincing evidence(s) of fraud is(are) provided, the appropriate operation(s)/asset(s)/account(s) is(are) considered suspicious of fraud.</li>
                    <li>As a rule, the SFOR.TRADE will freeze suspicious of fraud asset(s)/account(s) and/or will cancel suspicious of fraud operation(s) and/or will transfer stolen funds to proper owner only based on final resolution in written of the appropriate competent authorities (courts etc.) or based on the SFOR.TRADE’s internal KYC/AML procedures.</li>
                    <li>As an exception SFOR.TRADE reserves the right:
                
                <p>- to freeze temporary asset(s)/account(s) if convincing evidence(s) is (are) submitted that the interested person has turned to law enforcement and the appropriate investigation is underway (for reasonable time according to a decision of an appropriate SFOR.TRADE’s body or the Arbitration Committee of the SFOR.TRADE);</p>
                
                <p>- in absolutely apparent cases to freeze and to return clearly stolen assets to its proper owner based on internal investigation and decision of the Arbitration Committee of the SFOR.TRADE (for example if tokens are stolen while ICO directly to account on sfor.trade and sfor.trade is the only exchange, trading the appropriate tokens). In such cases before assets transfer - the proper owner has to pass registration and verification on sfor.trade and the cost of investigation and considering by the Arbitration Committee of the SFOR.TRADE (based on time spent) has to be compensated according to the appropriate invoice.</p>
                </li>
                </ol>
                <h4>16. TERMINATION</h4>
                <ol>
                    <li>The User may terminate the Terms of Use and close their Account at any time, following settlement of any pending transactions and paying all due fees.</li>
                    <li>The User also agrees that SFOR.TRADE may, by giving notice, at its sole discretion terminate his/her access to the Site and to his/her Account, including without limitation, our right to: limit, suspend or terminate the service and the Users' Accounts, prohibit access to the Site and its content, services and tools, delay or remove hosted content and take technical and legal steps to keep the User off the Site if we think that he/she or his/her activity/deeds linked to illegal activity, infringing the intellectual property rights of third parties or acting inconsistently with the letter or spirit of these Terms. Additionally, we may, in appropriate circumstances and at our discretion, suspend or terminate Account of User for any reason, including without limitation: (1) attempts to gain unauthorized access to the Site or another User's account or providing assistance to others' attempting to do so, (2) overcoming software security features limiting use of or protecting any content, (3) usage of the Service to perform illegal activities such as money laundering, financing terrorism, or other criminal activities, (4) violations of these Terms of Use, (5) failure to pay or fraudulent payment for transactions and/or Services, (6) unexpected operational difficulties, or (7) upon the request of law enforcement or other government agencies, if deemed to be legitimate and compelling by SFOR.TRADE, acting at its sole discretion.</li>
                    <li>SFOR.TRADE also reserves the right to cancel unconfirmed Accounts or Accounts that have been inactive for a period of six (6) months or more and/or to modify or discontinue our Site or Service. The User agrees that SFOR.TRADE will not be liable to them or to any third party for termination of their Account or access to the Site.</li>
                    <li>The suspension of the Account shall not affect the payment of the fees due for past transactions. Upon termination, the User shall provide a valid account details or Digital currency address to allow the transfer of any currencies deposited to his/her Account. SFOR.TRADE shall transfer the currencies as soon as possible following the User's request in the time frames specified by SFOR.TRADE. If account is suspended because of detection of illegal or criminal activity transfer may be delayed for the time necessary for appropriate investigation of an appropriate authorities.</li>
                </ol>
                <h4>17. SERVICES AVAILABILITY</h4>
                <ol>
                    <li>All Services are provided “AS IS”, without guarantees of any kind, either expressed or implied.</li>
                    <li>SFOR.TRADE will strive to keep the Site up and running; however, all online services suffer from occasional disruptions and outages and SFOR.TRADE is not liable for any disruption or loss the User may suffer as a result. Thus, SFOR.TRADE does not provide any guarantees that access to the Site will not be interrupted or that there will be no delays, failures, errors, omissions or loss of transmitted information.</li>
                    <li>SFOR.TRADE will use reasonable efforts to ensure that the User can normally access the Site in accordance with the Terms of Use. SFOR.TRADE may suspend use of the Site for maintenance and will make reasonable efforts to give the User a notice. The User acknowledges that this may not be possible in an emergency.</li>
                </ol>
                <h4>18. API</h4>
                In order to ensure a stability of the Platform API requests maybe reasonably limited by SFOR.TRADE at our discretion. If this limit is exceeded, it may result to the ban for reasonable time.
                <h4>19. MOBILE APPLICATIONS AND WIDGETS</h4>
                <ol>
                    <li>SFOR.TRADE may provide mobile applications (“mobile apps”), which can be used to get an access to the Account. The use of these mobile apps is the subject to these Terms of Use.</li>
                    <li>SFOR.TRADE may provide widgets for the User’s use. The User is free to use widgets in their original unmodified and unaltered state.</li>
                </ol>
                <h4>20. NOTICES, ANNOUNCEMENTS AND COMMUNICATION</h4>
                <ol>
                    <li>SFOR.TRADE reserves the right to send notices to and communicate with the User by any means of communication available to SFOR.TRADE, considering the contact details provided by the User.</li>
                    <li>The User expressly agrees to receive any notices in electronic form and to be bound by them, if so is required by the Terms of Use.</li>
                    <li>The official information channel of SFOR.TRADE is the Website. Nevertheless any recommendation and/or trade idea (even on official channel of SFOR.TRADE) don’t have a status of official recommendation and/or trade idea of SFOR.TRADE.</li>
                    <li>All official announcements, news, promotions, competitions and airdrops will be posted on our Website.</li>
                    <li>SFOR.TRADE will not be held liable or responsible in any manner of compensation should users incur personal losses arising from ignorance or negligence of the announcements.</li>
                    <li>SFOR.TRADE may provide information related to different Digital Assets on this Site, but SFOR.TRADE does not endorse, evaluate, approve or certify such information, nor does it guarantee the accuracy, completeness, efficacy, authenticity or timeliness of such information. User shall use information from official websites of Digital Assets and/or from other sources and shall check accuracy, completeness, efficacy, authenticity and timeliness of such information by himself or applying to appropriate consultants. Besides, the User shall not use the SFOR.TRADE’s Website to get an address of official website, related to any Digital Asset.</li>
                </ol>
                <h4>21. GOVERNING LAW AND DISPUTE RESOLUTION</h4>
                These Terms of Use shall be governed by and construed in accordance with the laws of Georgia, unless otherwise expressly provided.
                
                <p>All disputes arising out of or in connection with the present Terms of Use shall be finally settled by arbitration in accordance with the Rules of the Georgia ICC (International Chamber of Commerce). The Parties shall attempt to resolve all disputes relating to these Terms of Use by negotiations. If the Parties fail to resolve the disputes relating to these Terms of Use through negotiations, the dispute shall be conclusively resolved in the Georgian International Arbitration Centre (hereinafter: the Arbitration Court) in accordance with the Rules of the Arbitration Court. The dispute shall be resolved on the basis of the laws of Georgia. The language of the Arbitration Court shall be Georgian. By joint decision of all parties of the dispute the language of the Arbitration Court may be changed to English. The Arbitration Court shall consist of 3 (three) members. Each Party shall appoint one arbitrator within the time period prescribed by the Council of the Georgia ICC. Each Party shall ask the arbitrator chosen by him to appoint a third arbitrator together with the arbitrator chosen by the other Party, who shall be the chairman of the Arbitration Court in the resolution of the dispute. If the arbitrators appointed by the Parties fail to choose a third arbitrator within the time period prescribed by the Council of the Georgia ICC, the third arbitrator who shall also be the chairman of the Arbitration Court shall be appointed by the Council of the Georgia ICC. If the Parties fail to form the Arbitration Court in accordance with the provisions of these Terms of Use and the Rules of the Arbitration Court, the Arbitration Court shall be formed by the Council of the Georgia ICC. The award of the Arbitration Court shall be final and binding upon the Parties.</p>
                <h4>22. LIMITATION OF LIABILITY</h4>
                IN NO EVENT SHALL SFOR.TRADE, ITS OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, AND ALL THIRD PARTY SERVICE PROVIDERS BE LIABLE TO THE USER OR ANY OTHER PERSON OR ENTITY FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, PUNITIVE OR CONSEQUENTIAL DAMAGES WHATSOEVER, INCLUDING ANY THAT MAY RESULT FROM (I) ACCURACY, COMPLETENESS OR CONTENT OF THIS SITE, (II) ACCURACY, COMPLETENESS OR CONTENT OF ANY SITES LINKED (THROUGH HYPERLINKS, BANNER ADVERTISING OR OTHERWISE) TO THIS SITE, (III) THE SERVICES FOUND AT THIS SITE OR ANY SITES LINKED (THROUGH HYPERLINKS, BANNER ADVERTISING OR OTHERWISE) TO THIS SITE, (IV) PERSONAL INJURY OR PROPERTY DAMAGE OF ANY NATURE WHATSOEVER, (V) THIRD-PARTY CONDUCT OF ANY NATURE WHATSOEVER, (VI) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SERVERS AND/OR ANY AND ALL CONTENT, PERSONAL INFORMATION, FINANCIAL INFORMATION OR OTHER INFORMATION AND DATA STORED THEREIN, (VII) ANY INTERRUPTION OR CESSATION OF SERVICES TO OR FROM THIS SITE OR ANY SITES LINKED (THROUGH HYPERLINKS, BANNER ADVERTISING OR OTHERWISE) TO THIS SITE, (VIII) ANY VIRUSES, WORMS, BUGS, TROJAN HORSES OR THE LIKE, WHICH MAY BE TRANSMITTED TO OR FROM THIS SITE OR ANY SITES LINKED (THROUGH HYPERLINKS, BANNER ADVERTISING OR OTHERWISE) TO THIS SITE, (IX) ANY USER CONTENT OR CONTENT THAT IS DEFAMATORY, HARASSING, ABUSIVE, HARMFUL TO MINORS OR ANY PROTECTED CLASS, PORNOGRAPHIC, “X-RATED”, OBSCENE OR OTHERWISE OBJECTIONABLE AND/ OR (X) ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USER'S USE OF THIS SITE OR THE SERVICES FOUND AT THIS SITE, WHETHER BASED ON WARRANTY, CONTRACT, TORT OR ANY OTHER LEGAL OR EQUITABLE THEORY AND WHETHER OR NOT SFOR.TRADE IS ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. IN ADDITION, YOU SPECIFICALLY ACKNOWLEDGE AND AGREE THAT ANY CAUSE OF ACTION ARISING OUT OF OR RELATED TO THIS SITE OR THE SERVICES FOUND AT THIS SITE MUST BE COMMENCED WITHIN ONE (1) YEAR AFTER THE CAUSE OF ACTION ACCRUES, OTHERWISE SUCH CAUSE OF ACTION SHALL BE PERMANENTLY BARRED. IN ADDITION, THE USER SPECIFICAL LY ACKNOWLEDGE AND AGREE THAT IN NO EVENT SHALL SFOR.TRADE’S TOTAL AGGREGATE LIABILITY EXCEED THE TOTAL AMOUNT PAID BY THE USER FOR THE PARTICULAR SERVICES THAT ARE THE SUBJECT OF THE CAUSE OF ACTION. THE FOREGOING LIMITATION OF LIABILITY SHALL APPLY TO THE FULLEST EXTENT PERMITTED BY LAW AND SHALL SURVIVE ANY TERMINATION OR EXPIRATION OF THESE TERMS OF USE OR THE USER'S USE OF THIS SITE OR THE SERVICES FOUND AT THIS SITE.
                
                <p>SFOR.TRADE will not be liable for the transactions, initiated by the User, below the prescribed limits.</p>
                <h4>23. INDEMNITY</h4>
                <p>The User agrees to protect, defend, indemnify and hold harmless SFOR.TRADE and its officers, directors, employees, agents and third party service providers from and against any and all claims, demands, costs, expenses, losses, liabilities and damages of every kind and nature (including, without limitation, reasonable attorneys’ fees) imposed upon or incurred by SFOR.TRADE directly or indirectly arising from (i) the User’s use of and access to this Site or the Services found at this Site; (ii) the User’s violation of any provision of the Terms of Use or the policies or agreements which are incorporated herein; and/or (iii) the User’s violation of any third-party right, including without limitation any intellectual property or other proprietary right. The indemnification obligations under this section shall survive any termination or expiration of the Terms of Use or the User’s use of this Site or the Services found on this Site.</p>
                <h4>24. FORCE MAJEURE</h4>
                <p>If SFOR.TRADE is unable to perform the Services outlined in the Terms of Use due to the factors beyond its control including but not limited to the event of Force Majeure, change of law or change in sanctions policy, SFOR.TRADE will not have any responsibility to the User with respect to the Services provided hereunder and for a time period coincident with the event.</p>
                <h4>25. MODIFICATIONS AND AMENDMENTS</h4>
                <p>SFOR.TRADE reserves the right to amend or modify any portion of these Terms of Use at any time by publishing the revised version of the Terms of Use on the Site. The changes will become effective and shall be deemed accepted by the User, the first time the User uses the Services after the publishing of the revised Terms of Use and shall apply on a going-forward basis with respect to any activity initiated after publishing. In the event that the User does not agree with any such modification, the User's sole and exclusive remedy is to terminate the use of the Services and close the Account. The User agrees that SFOR.TRADE shall not be liable to the User or any third party as a result of any losses suffered by any modification or amendment of these Terms of Use.</p>
                <h4>26. LINKS TO THIRD-PARTY WEBSITES</h4>
                <p>This Site and the Services found at this Site may contain links to third-party websites that are not owned or controlled by SFOR.TRADE. SFOR.TRADE assumes no responsibility for the content, terms and conditions, privacy policies or practices of any third-party websites. In addition, SFOR.TRADE does not censor or edit the content of any third-party websites. By using this Site or the Services found at this Site, you expressly release SFOR.TRADE from any and all liability arising from the User's use of any third-party website. Accordingly, SFOR.TRADE encourages the User to be aware when the User leaves this Site, or the Services found at this Site and to review the terms and conditions, privacy policies and other governing documents of any other website that you may visit.</p>
                <h4>27. CONTACT US</h4>
                <p>If you have any questions relating to these Terms of Use, your rights and obligations arising from these Terms and/or your use of the Site and the Service, your Account or any other matter, please, contact us via email, mentioned on the Website.</p>
                
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
export const TermsofUse = withRouter(injectIntl(connect(mapStateToProps, null)(Landing) as any));
