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
                    
                    <h2>ANTI-MONEY LAUNDERING, COUNTER-TERRORIST FINANCING AND KNOW YOUR CUSTOMER POLICY</h2>
                    
                    <h5>Last Revised: February 13, 2020</h5>
                    

                    <h4>1. Introduction</h4>
                    <p>SFOR LLC (hereinafter “SFOR company”) is a SFOR company and its main goal and mission is to make available the fastest connection to the world markets, such as securities exchange markets, currency exchange markets and cryptocurrency markets. In the SFOR company, the greatest value is the most profound liquidity at the time of trade and fast communication with currency markets.</p>

                    <p>For the purpose of ensuring the highest standards of services offered and full providing of the requirements of the Georgian Legislation, the SFOR company has developed the Policy “Anti Money Laundering Control” (hereinafter referred to as “policy”), which is based on the Georgian law “On Facilitating the Prevention of Illicit Income Legalization”, provision of the Financial Monitoring Service of Georgian “Regulation on Receiving, Systemizing and Processing the Information by the SFOR company and Forwarding to the Financial Monitoring Service of Georgia”, Order “On the approval of additional regulating rule of the brokerage companies involved in trading of financial instruments containing high risks” and the recommendations of Financial Actions Task Force (FATF). The goal of the policy is to develop anti-money laundering and anti-terrorism funding system for the SFOR company, risk identification, analyzing, management and reduction.</p>

                    
                    <h4>2. Definition of terms</h4>
                    <p><strong>Money Laundering</strong> - to convert illicit income into legal (purchase, use, transfer or other action), as well as concealing or disguising of thrue origin, proprietor or owner and/or property rights and/or attempt to commit such acts;</p>

                    <p><strong>Terrorism Funding</strong> - anyoperation (regardless the amount of money) performed by any person illegally and intentionally, directly or indirectly, by any means, whose goal is to find and collect funds for the purpose or based on the information that this amount is used, partially or fully, for preparation or conduct of terrorism act. In some cases, it may be extended to the sources obtained legally;</p>

                    <p><strong>Illicit Income </strong>- illegal and/or unjustified income of person/company;</p>

                    <p><strong>Property</strong> - all the items (both movable and immovable) and intangible property benefits that can be owned, used and managed by individuals and legal entities;</p>

                    <p><strong>Identification</strong> - obtaining information about the client that follows to search and distinguish a person between the others;</p>

                    <p><strong>Client/Customer</strong> - any person applying to the SFOR company for the service envisaged by the Georgian legislation and/oe enjoys the above mentioned services;</p>

                    <p><strong>Beneficial Owner </strong>- a natural person who ultimately owns or controls a person/company and/or the natural person on whose behalf a transaction is being conducted. Beneficial owner of an entrepreneurial legal entity (as well as of the organizational formation provided by the Georgian legislation, which is not a legal entity) is a natural person who ultimately owns or control, direct or indirect, 25% or more of his shares or voting rights or a natural person who otherwise executes control over the entrepreneurial legal entity;</p>

                    <p><strong>Control</strong> - to exercise a strong influence, directly or indirectly, alone or together with others, by using voting shares or by other ways;</p>

                    <p><strong>Controlling person </strong>- a person who exercises control;</p>

                    <p><strong>Business relationship </strong>- a continuous or regular business, commercial or professional relationship between the SFOR company and the client and implies providing brokerage services indicated in the first article by the SFOR company to the client;</p>

                    <p><strong>Politically exposed person </strong>- a person holding a state (public) political position and/or executes important state and political activities according to the legislation of the government and their deputies, head of the state institutions, member of parliament, member of the superior court, member of the constitutional court, head and member of the military forces, member of the border of the central (national) bank/financial supervision agency, ambassador, head of the enterprise operating by the partial participation of the State, head of the political party (union), member of the executive body of the political party (union), other political figures, as well as their family members and a person in the direct business relationship with them: a person is still considered politically exposed during a year leaving the above-mentioned position;</p>

                    <p><strong>Suspicious transaction</strong> - a deal (regardless of its amount and type of the operation, on which there is a reasonable suspicion that it has been concluded or implemented for the purpose of legalization of illicit income and/or property (including cash fund) on which the transaction was concluded or executed, it has been obtained or derived through criminal activity and/or the transaction was concluded or executed for the purpose of funding terrorism (the suspicion is on the person involved in the transaction or the origin of the transaction or there is another reason for which the transaction may be considered suspicious), or any of its participants is included in the list of terrorists or person supporting terrorism and/or may be associated with them and/or money funds involved in it may be related or used for terrorism, terrorist act or by terrorists or terrorist organization or by a person sponsored terrorism or that any of its participant’s legal or real address or place of residence is in non-cooperative (non-cooperating) zone or that the transaction of his amount is done in/from such zone;</p>

                    <p><strong>Unusual transaction</strong> - complex unusually large transaction and a type of transactions with no clear economic (commercial) content or legal purpose, does not correspond to the usual activity of the person involved in the transaction;</p>

                    <p><strong>Transaction partitioning</strong> - according to this policy it implies a combination of transactions performed by/for one person in a certain period of time, which total amount exceeds 30,000 GEL or its equivalent in another currency and there is a reasonable suspicious that they were partitioned deliberately to avoid reporting about transaction. The basis for reasoning of suspicious is analysis conducted by the AML officer.</p>

                    <p><strong>AML Officer</strong> - an employee appointed on the basis of property signed by the company, who is responsible for the coordinating of money laundering in the SFOR company.</p>
                    
                    <h4>3. Internal control system</h4>
                    <p>The SFOR company provides the creation of an effective internal control system against money laundering and terrorism funding, which consists of the following components:</p>
                    <ul>
                        <li>Internal policy and procedures;</li>
                        <li>Employees responsible for control;</li>
                        <li>Risk-based approach;</li>
                        <li>Procedure “Know your client”;</li>
                        <li>Obligation of the SFOR company regarding data bookkeeping;</li>
                        <li>Obligation of the SFOR company regarding information storage;</li>
                        <li>Reporting;</li>
                        <li>Suspension of the execution of transaction on the basis of the request of Financial Monitoring Service of Georgia;</li>
                        <li>Recruitment and training;</li>
                        <li>Adding a new product to the SFOR company.</li>
                    </ul>
                    
                    <h4>4. Internal policy and procedures</h4>
                    <p>The SFOR company performs internal control on the basis of “Money laundering and terrorist funding prevention policy”. The policy defines the basic principles, responsibilities and control mechanisms for prevention of money laundering and terrorism funding.</p>

                    <p>The SFOR company “Money Laundering and Terrorism Funding Prevention Policy” includes such important procedures as “Know Your Client” (discussed in detail in article 7 of the procedure). This procedure describes the client’s identification, verification and business relationship monitoring processes. The SFOR company has approved “Client Registration Procedure” as a separate document, which represents a detailed description of the process of establishing business relationship with the client.</p>

                    <p>This policy defines the criteria of risk assignment for clients and products of the SFOR company and risk relevant measures for identification and verification of the clients.</p>

                    <p>This policy is available for all employees of the organization.</p>

                    
                    <h4>5. Employees responsible for control</h4>
                    <p>The director of the SFOR company appoints an employee responsible for money laundering control - AML officer, on the basis of the signed order/decision. The main functions and obligations of the aforesaid officer are as follows:</p>
                    <ul>
                        <li>Internal control implementation for the prevention of illicit income legalization and terrorism funding;</li>
                        <li>Development of internal instruction (internal control rules) and taking appropriate measures for the purpose of its execution;</li>
                        <li>Systematization of the information about transactions subjected to the monitoring, which implies development of data accounting system and ensuring its execution;</li>
                        <li>Implementation and monitoring of the control mechanism provided by “Know Your Client” procedure;</li>
                        <li>Monitoring of clients’ identification process and the transactions carried out by them;</li>
                        <li>Preparation and sending reports on transactions/deals subjected to monitoring to the Financial Monitoring Service of Georgia;</li>
                        <li>Preparation and sending of supervision report of National Bank of Georgia;</li>
                        <li>Process coordination during on-site inspection performed by supervision service of National Bank of Georgia;</li>
                        <li>Providing information on money laundering issues for the directors of SFOR company;</li>
                        <li>Organizing periodic trainings Control implementation on the performance of the instructions on suspension of the transaction execution made by financial monitoring service of Georgia;</li>
                        <li>Performing any other function related to the prevention of money laundering procedures in the SFOR company;</li>
                        <li>AML officer is given an absolute authority to obtain any information and documents necessary for the performance of this functions during executing his obligations;</li>
                    </ul>
                    <p>In order to fulfill the abovementioned function, the SFOR company made accessible for specially assigned employee - AML officer, all the necessary resources, including appropriate technical and software tools, with reliable means of storage of documents and information, etc.</p>

                    <p>AML officer is accountable only to the director of the SFOR company in relation to the execution of the functions imposed directly to him and the matters related to the implementation of the monitoring.</p>

                    <p>The director of the SFOR company, together with AML officer, is obliged to ensure the effectiveness of the money laundering control system, as well as to implement separate control mechanisms and the obligation of its execution is also his responsibility.</p>

                    
                    <h4>6. Risk-based approach</h4>
                    <p>For the implementation of money laundering control, the SFOR company has developed a risk-based approach, which means that the SFOR company divides its own products and also its clients into low, medium and high risk categories. The basis for risk determining is identification and assessment of relevant risk-factors by the SFOR company for money laundering and terrorism funding.</p>

                    <p>The purpose of identification and assessment of risk factors is to determine control mechanisms for medium and high risk category products and clients, on the basis of which it will be possible to reduce and manage of money laundering and terrorism funding risks facing to the SFOR company.</p>

                    <p>When assessing a specific client, it uses specific, risk-based approach and assigning them into different categories. The SFOR company is obliged to group clients in low, medium and high risk groups.</p>

                    <p>Some of the basis criteria of risk assessment are:</p>
                    <ul>
                        <li><strong>Geographical Risk</strong></li>
                    
                    <p>Geographical Risk includes geographical origin of the client (legal and/or factual address). This risk is determined according to the residential country of the client’s citizenship. If the client is a citizen or resident of a high-risk country listed in Annex 1, he is given a high-risk category according to the corresponding criterion. If the client is a foreign citizen or resident, except for the countries listed in Annex 1, he is given the average risk according to the corresponding criterion. Georgian citizens/resident clients are given low risk category according to the corresponding criterion.</p>
                    
                    <p>The country is considered in a high risk if:</p>
                    <ul>
                        <li>It is recognized under the current legislation of Georgia;</li>
                        <li>Sanctions, embargo and/or other similar measures were imposed against country by relevant international organizations (including UN Security Council) and/or developed countries;</li>
                        <li>There is no appropriate legislative base in the country to facilitate the prevention Of illicit income legalization and terrorism funding and this fact is recognized by relevant international organizations;</li>
                        <li>The level of corruption and/or organized crime is high and this fact is recognized by relevant international organizations;</li>
                    </ul>
                    </ul>
                    <ul>
                        <li><strong>Risk of activity</strong></li>
                    
                    <p>The product risk assessment is done individually by the SFOR company, considering the client’s personality and the business relationship with him. If the client’s main is in the Annex 3, it is assigned to the relevant risk category according to the criterion.</p>
                    </ul>
                    <ul>
                        <li><strong>Product and service risk</strong></li>
                    
                    <p>This category refers to the client and product and services used by him. If the client uses the products listed in Annex 2, he is assigned to the product relevant risk category according to the criterion.</p>
                    </ul>
                    <ul>
                        <li><strong>Politically exposed person</strong></li>
                    
                    <p>In case of the person’s political status, which is defined in Article 2 of the policy, he automatically represents a high risk category. This applies to both the client and the beneficiary owner.</p>

                    <p>If the client or his beneficiary owner has been given a status of politically exposed person after establishing business relations with the person implementing monitoring, they automatically fall into high risk category.</p>

                    <p>The director of the SFOR company issues a special consent about establishment of business relations with a politically exposed person, which is specified in Annex 9.</p>
                    </ul>
                    <ul>
                        <li><strong>Client risk</strong></li>
                    
                    <p>The risk category is assigned to the client at the moment of establishing a business relationship, and the initial risk category is revised in case of revealing new circumstances during permanent monitoring process of business relationship. Client classification in terms of the assigned risk is carried out in 3 levels: low, medium and high; the systematization of the information takes place only after this, however, the classification may be changed in certain circumstances, which is specified in Annex 4.</p>

                    <p>The client risk includes such types of activities of natural and legal persons, peculiarities of the implemented operations and behavior, as well as other features, which can cause to consider the client in a high risk category. The clients of the category are specified in Annex 5.</p>

                    <p>While assigning a risk category to the client or beneficiary owner, it is important to consider several factors: type of client or beneficiary owner, his location (place of registration), field of activity and geographical area, character and intensity of business relationship, type and volume of product/service or transaction (operation).</p>

                    <p>Assigning geographical risk criterion, the client’s dual citizenship is important. If the client has dual citizenship, it is important to pay attention and consider the countries, which citizenship he represents. For example, if one of the countries is in high risk category countries, it is necessary that the client should be given a high risk category.</p>

                    <p>Whereas, the client meets some high risk criterion specified in article 6, it is automatically granted a high risk category.</p>

                    <p>Whereas, the client meets some medium risk criterion specified in article 6, it is automatically granted a medium risk category.</p>

                    <p>And whereas, the client meets some low risk criterion specified in article 6, it is automatically granted a low risk category.</p>

                    <p>The high risk clients monitoring is carried out once in 6 months, while clients with medium risk are revised once a year.</p>
                    </ul>
                    
                    <h4>7. “Know Your Client” procedure</h4>
                    <p>“Know Your Client” procedure plays a crucial role for reduction of money laundering and terrorism funding risk in the SFOR company. The identification and verification of the clients are based on the basis of this procedure, which means that the SFOR company maximally processes the information provided by the clients, directly on them and their activities that is a precondition for proper assessment of the expected risk.</p>

                    <p>Before beginning business relationship with the client, the SFOR company clarifies the type and the purpose client wants to communicate with the SFOR company.</p>

                    <p>Despite the existence of an assumption and the amount of the transaction, the SFOR company shall not suspend the customer’s service, except for the existing of the following circumstances:</p>
                    <ul>
                        <li>if identification of the client with the SFOR company is unavailable;</li>
                        <li>if the client, a person, involved in the transaction, is included in the list of terrorists or persons supporting terrorism;</li>
                        <li>if he has a management refusal on establishing business relationship.</li>
                    </ul>
                    <p>The SFOR company has defined simplified identification measures for low risk clients, standard identification measures for medium risk clients and enhanced measures for the clients in high risk category.</p>

                    <p>The SFOR company identifies the client (his representative and trustee, third person, if the transaction is concluded in favor of the third party, beneficiary) for verifying his identity, if:</p>
                    <ul>
                        <li>The amount of transaction (operation) exceeds 3.000 GEL (or its equivalent in other currency);</li>
                        <li>The doubt is arisen regarding the accuracy or relevance of the client’s current identification data;</li>
                        <li>The transaction is suspicious.</li>
                    </ul>
                    <p>As for the identification measures aimed directly for the clients, as mentioned above, the SFOR company has developed the following measures:</p>
                    <ul>
                        <li>Simplified measure of identification;</li>
                        <li>Standard measure of identification;</li>
                        <li>Enhanced measure of identification.</li>
                    </ul>
                    <p>More specifically on each of them:</p>

                    <p>7.1 Simplified measures of identification</p>

                    <p>If there is a doubt on illicit income legalization and terrorism funding, the simplified identification and verification is not used, which means that it can only be used for low risk clients. The client is in a low risk category, when he is a natural person and represents a citizen/resident of Georgia, he also uses low-risk products. The client’s simplified identification is based on the documents presented by him, the verification of which is made in Article 6 on the basis of the existing Annexes.</p>

                    <p>Before making a transaction, it is important for the company to find out the following information about the client:</p>
                    <ul>
                        <li>Full name (name and surname);</li>
                        <li>Date of birth (day/month/year);</li>
                        <li>Gender;</li>
                        <li>Personal ID number;</li>
                        <li>Type of identity document;</li>
                        <li>Number of identity document;</li>
                        <li>E-mail.</li>
                    </ul>
                    <p>If a natural person was registered as an individual entrepreneur, in such case:</p>
                    <ul>
                        <li>Date of registration;</li>
                        <li>Registration number;</li>
                        <li>Registering body;</li>
                        <li>Taxpayer identification number.</li>
                    </ul>
                    <p>7.2 Standard measures of identification</p>

                    <p>Standard measure of identification applying to the clients assigned in medium risk category according to the Annexes in article 6 of the policy.</p>

                    <p>As a result of the standard procedure of the identification, the following data should be identified:</p>
                    <ul>
                        <li>In case of natural person:</li>
                        <li>Full name (name and surname);</li>
                        <li>Citizenship;</li>
                        <li>Date of birth;</li>
                        <li>Place of residence;</li>
                        <li>ID document (passport) number and the citizen’s personal number by ID document (passport);</li>
                        <li>Owner’s photo;</li>
                        <li>Phone number.</li>
                    </ul>
                    <p>If a natural person was registered as an individual entrepreneur, in such case:</p>
                    <ul>
                        <li>Date of registration;</li>
                        <li>Registration number;</li>
                        <li>Registering body;</li>
                        <li>Taxpayer identification number;</li>
                        <li>Phone number.</li>
                    </ul>
                    <p>The document should meet the following requirements:</p>
                    <ul>
                        <li>Have a document number;</li>
                        <li>It should be clear and readable due to its condition;</li>
                        <li>Name of document presenter/owner should be identified by photo;</li>
                        <li>It must be approved by the official stamp, signature of the owner and the representative person of the issuing body (except for the electronic ID card);</li>
                        <li>The document should be valid at the moment of representation.</li>
                    </ul>
                    <p>The identification documents for individuals are:</p>
                    <ul>
                        <li>ID card of a citizen of Georgia;</li>
                        <li>Electronic ID card of a citizen of Georgia;</li>
                        <li>Passport of citizen of Georgia;</li>
                        <li>Passport of a foreign citizen or other official document equal to it under the Georgian legislation containing the data necessary for a person’s identification;</li>
                        <li>The residence permission of Georgia;</li>
                        <li>Diplomatic passport/card according to the international convention;</li>
                        <li>Refugee certificate issued by the Ministry of Internally Displaced Persons from the Occupied Territories, Accommodation and Refugees of Georgia (confirming document of refugee status in Georgia for foreign citizens or persons without a citizenship);</li>
                        <li>Residing certificate of compatriot living abroad;</li>
                        <li>Temporary identification card.</li>
                    </ul>
                    <p>The identification documents for legal entities are:</p>
                    <ul>
                        <li>Act about a legal entity;</li>
                        <li>Registration certificate/extract from the register of entrepreneurs of a legal entity;</li>
                        <li>Document confirming the authority for representation of a legal entity;</li>
                        <li>Other relevant documents could be required regarding the type of the business.</li>
                    </ul>
                    <p>In case of non-resident legal entity, the following type of documents are required:</p>

                    <p>The documents issued by competent authorities, confirming the formation and registration of the entity and documents certifying the authority for representation of the person.</p>

                    <p>It is important:</p>
                    <ul>
                        <li>Document issuing country;</li>
                        <li>Document issuing body;</li>
                        <li>Date of issue of the document;</li>
                        <li>Validity period of the document.</li>
                    </ul>
                    <p>The identification should provide the following data:</p>
                    <ul>
                        <li>Full name;</li>
                        <li>Subject of activity;</li>
                        <li>Legal address (in case of branch or representation, its address as well as the address of head office);</li>
                        <li>The registering body, date and number of registration;</li>
                        <li>Taxpayer identification number;</li>
                        <li>Identification data of the persons authorized for management and representation, which are required in case of a natural person;</li>
                    </ul>
                    <p>In addition to information specified in Article 7.2, it is important to determine the following information about a natural person:</p>
                    <ul>
                        <li>Father name;</li>
                        <li>Place of birth;</li>
                        <li>Temporary (real) place of residence (both in Georgia and abroad) if it does not match the registered place of residence;</li>
                        <li>The main activity and occupied position;</li>
                        <li>Details of bank account (accounts) (name of banking institution, type of account, account number, opening (closing) date of account);</li>
                        <li>Phone, fax, e-mail address;</li>
                        <li>In case of legal entity;</li>
                        <li>Date and term of appointment of persons for management and representation (if known);</li>
                        <li>Details of bank account (accounts).</li>
                    </ul>
                    <p>The following data should be determined after the client’s identification procedure:</p>

                    <p>In case of a natural person:</p>
                    <ul>
                        <li>Full name (name and surname);</li>
                        <li>Citizenship;</li>
                        <li>Dual citizenship (if any);</li>
                        <li>Date and place of birth;</li>
                        <li>Actual place of residence (if it is different from the legal address);</li>
                        <li>Legal address;</li>
                        <li>Phone number/e-mail address;</li>
                        <li>Gender;</li>
                        <li>Issuing body/country/date of issue and validity period of ID card (passport);</li>
                        <li>If a natural person was registered as an individual entrepreneur - relevant date of registration, number of registration, registering body, taxpayer identification number.</li>
                    </ul>
                    <p>In case of a legal entity:</p>
                    <ul>
                        <li>Full name;</li>
                        <li>Field of activity;</li>
                        <li>Legal address (in case of branch or representation, its address as well as the address of head office);</li>
                        <li>The registering body, date and number of registration;</li>
                        <li>Taxpayer identification number;</li>
                        <li>Identification data of the persons authorized for management and representation;</li>
                        <li>Beneficiary owner;</li>
                        <li>Identification data of a person representing a natural person in a specific operation (transaction) subjected to monitoring.</li>
                    </ul>
                    <p>In case of doubt arising about the documentation provided by the client, the SFOR company has a right to require from the client other additional identification documents with the same legal force.</p>

                    <p>7.3 Enhanced measures of identification</p>

                    <p>Enhanced measures of identification are used, when the client are assigned in a high risk category according to the Annexes in article 6 of the policy. Consequently, the SFOR company is obliged to carry out the relevant monitoring additionally.</p>

                    <p>On the basis of the existing analysis and the information provided by AML officer, relating directly to the establishment of business relationship with the clients from the high risk category, the decision should be made by the director and confirms his consent by signing the appropriate forms. These forms are provided in Annex 6.</p>

                    <p>AML officer verifies and certifies the identification data received from the resident clients (referring directly to the resident natural persons) in electronic database of Civil Registry Agency. The verification is based on the prior written consent of the person on the inspection of the personal data, which means the signature on the form given in Annex 7. In case of a foreign citizen, for the purpose of verification it is necessary to check the identification documents provided by the natural person or the documents he has not yet presented, however the SFOR company requires their submission. Such documents are, for example ID card, driving license and so on.</p>

                    <p>About a client, who is a natural person, is required to obtain the following additional information:</p>
                    <ul>
                        <li>Average monthly income of the client;</li>
                        <li>Main source of income of the client;</li>
                        <li>Additional sources of income of the client;</li>
                        <li>Source of origin of the client’s property/funds;</li>
                        <li>Other information related to the high risk criteria assigned to the client.</li>
                    </ul>
                    <p>In case of non-resident legal entity, in addition to the list above, for the purpose of verification it is used the document - “Certificate of good standing” - provided from the registry of the country represented by the company. It also can be used a letter issued by a trusted auditor containing the information to be verified.
                    </p>
                    <p>In addition, about the legal entity is required the following information:</p>
                    <ul>
                        <li>Information about the bank accounts;</li>
                        <li>Average monthly turnover;</li>
                        <li>Turnovers made by cash;</li>
                        <li>Information about the main suppliers;</li>
                        <li>Information about the main clients;</li>
                        <li>Other information related to the high risk criteria assigned to the client.</li>
                    </ul>
                    <p>7.4 Identification data update</p>

                    <p>The SFOR company maintains a permanent monitoring of business relationship with the client, which implies the constant renewal of the clients’ base:</p>
                    <ul>
                        <li>For the clients in low risk category - once in every 2 years;</li>
                        <li>For the clients in medium risk category - once in a year;</li>
                        <li>For the clients in high risk category - once in every 6 months.</li>
                    </ul>
                    <p>7.5 Clients checking in the list of persons involved in terrorism</p>

                    <p>Prior to establishing business relationship with the client, his data is checked in the internationally recognized list of persons involved in terrorism, which is updated periodically by AML officer. This includes the following:</p>
                    <ul>
                        <li>List of individuals involved in Islamic State of Iraq and Levant (Da’esh), Al-Qaeda or are related to them;</li>
                        <li>List of legal entities, related to Taliban or Al-Qaeda;</li>
                        <li>List of individuals involved in Taliban or related to it;</li>
                        <li>UN consolidated list.</li>
                    </ul>
                    <p>If the client of the SFOR company is found in the above-mentioned list after regular update of it, contractual relationship is temporary stopped with him, and the AML officer, on the basis of the available information, shall make the relevant decision, whether the SFOR company will continue the cooperation with the client. The AML officer is obliged to immediately inform the Financial Monitoring Service of Georgia about the fact and provide with relevant information, which confirms the existence of the client in the above list. To be noted that US resident natural persons and legal entities onboarding is prohibited.
                    </p>
                    <p>7.6 Obligations of the SFOR company regarding politically exposed person</p>

                    <p>Prior to establishing business relationship with the client, the SFOR company is obliged to find out whether the person is a politically active.</p>

                    <p>When the client is a politically exposed person, the SFOR company should carry out the following activities:</p>
                    <ul>
                        <li>To get the permission from the director of the SFOR company to continue or start a business relationship with the client;</li>
                        <li>To take the appropriate measures for determining the origin of the client’s or his beneficiary owner’s property (including cash);</li>
                        <li>To establish an enhanced monitoring of its business relationship with the client.</li>
                    </ul>
                    <p>The political status of the client is determined on the basis of the information provided by him, which is verified further through fms.gov.ge for Georgian residents and via Google.com and namescan.io for non-residents.</p>

                    <p>7.7 Termination of business relationship</p>

                    <p>Business relationship between the SFOR company and the client is terminated in the existence of the following grounds:</p>
                    <ul>
                        <li>The client’s behavior is suspicious;</li>
                        <li>The contractual terms are violated by the client;</li>
                        <li>The SFOR company has a reasonable doubt that the client is connected with the money laundering fraudulent transactions;</li>
                        <li>On the basis of the decision made by AML officer in other cases.</li>
                        <li>Obligation of the SFOR company regarding data bookkeeping</li>
                    </ul>
                    
                    <h4>8. Obligation of the SFOR company regarding data bookkeeping</h4>
                    <p>8.1 The SFOR company registers the documents drawn up with clients:</p>
                    <ul>
                        <li>Type of transaction concluded;</li>
                        <li>Form of transaction (written or oral);</li>
                        <li>Subject of securities transaction (full name of the issuer, class of securities, quantity);</li>
                        <li>The goal of the transaction;</li>
                        <li>Cost and currency of transaction;</li>
                        <li>Date of signature of transaction, execution starting and finishing date, country, city the transaction was concluded;</li>
                        <li>Date (or name and surname) of registering body of the transaction, address(legal, real), date and number of registration (in case of a transaction registration);</li>
                        <li>The SFOR company, due to the transactions concluded with the client, registers the following information about the transaction carried out on securities by the SFOR company (by the client’s order);</li>
                        <li>Type of transaction performed in accordance with the legislation about securities;</li>
                        <li>Form of transaction;</li>
                        <li>Subject of securities transaction (full name of the issuer, class of securities, quantity);</li>
                        <li>Date of execution of the transaction;</li>
                        <li>Cost and currency of the transaction;</li>
                        <li>Name (or name and surname) of registering body of the transaction, address (legal, real), date and number of registration (in case of a transaction registration);</li>
                        <li>Identification data of all the persons participating in the transaction, including:
                    <ul>
                        <li>Identification information of the persons whose behalf the transaction is carried out by the SFOR company, namely the type, number and date of opening of the bank account, which is used for the specific transaction.</li>
                        <li>Information about the other party of the transaction, its identification data and bank details.</li>
                        <li>Identification data of the person acting under the client’s order of the SFOR company (representative, attorney), as well as the content of the relevant attorney or proxy, its issuing body, date of issue and the validity period, certifying person (notary) of attorney or proxy, date and place of certification.</li>
                    </ul>
                    </li>
                    </ul>
                    <ol>
                        <li>Unique number of the client;</li>
                        <li>Account number of the client;</li>
                        <li>Credit side given to the client;</li>
                        <li>The amount of money deposited by the client and the date of it;</li>
                        <li>The withdrawal amount by the client and the date of it;</li>
                        <li>The total outcome of trade for closed transactions;</li>
                        <li>Current (unrealized) profit/loss for open positions;</li>
                        <li>Initial margin used in open positions;</li>
                        <li>Free margin;</li>
                        <li>Total capital of the client;</li>
                        <li>Commission charges by types.</li>
                    </ol>
                    
                    <h4>9. Obligations of the SFOR company regarding to the information storage</h4>
                    <p>The SFOR company provides keeping of all the information related to the client specified in article 8, both in documentary and electronic form, for 6 years.</p>

                    <p>The SFOR company also provides to keeping of all the copies of the information related to the client, which is certified (signed) by a person specifically designated for carrying out the verification In the SFOR company.</p>
                    
                    <h4>10. Reporting</h4>
                    <p>The SFOR company provides the relevant report for both the Financial Monitoring Service of Georgia and the National Bank of Georgia.</p>

                    <p>The following types of transactions existing in the brokerage about the client are subject to the report to be submitted to the Financial Monitoring Service of Georgia:</p>
                    <ul>
                        <li>If the amount of all the transactions made for a transaction or its partition exceeds 30,000 GEL or its equivalent in other currency and at the same time it is:
                    <ul>
                        <li>Transaction executed by securities on the name of the presenter;</li>
                        <li>Transaction executed with the participation of a suspicious financial institution;</li>
                        <li>Transaction executed by the person acting in a questionable or suspicious zone and/or by using the account of the bank operating in such zone;</li>
                        <li>Transaction executed by cash.</li>
                    </ul>
                    </li>
                    </ul>
                    <p>The SFOR company, no later than 5 working days after receiving the information, submits the report about the above-mentioned transactions to the Financial Monitoring Service of Georgia.</p>
                    <ul>
                        <li>If the transaction or identification data is considered as suspicious – on the day of the originating of suspicious;</li>
                        <li>If any person participating in the transaction is included in the list of terrorists or persons supporting terrorism and/or may be associated with them and/or money funds involved in it may be related or used for terrorism, terrorist – on the day of receipt of the relevant information. The company provides the Financial Service of Georgia with all types of information in the form of documents.</li>
                    </ul>
                    <p>In case of the existence of the above fact in the SFOR company, all employees of the SFOR company are obliged to inform the AML officer with the relevant information, who then will take the necessary measures. The employ may consider the client's behavior as a suspicious, specified in Annex 8, all employees considering the client’s behavior as a suspicious are obliged to inform the AML officer with the information about the client.
                    </p>
                    <p>The AML officer keeps the recording on the reporting sent as by an electronic form or the form of the document:</p>
                    <ul>
                        <li>Creates an electronic folder containing an electronic version of all the documents created in accordance with this instruction;</li>
                        <li>The AML officer creates a folder, which will be intended for printed documents.</li>
                    </ul>
                    <p>The SFOR company submits the report to the National Bank of Georgia, which is prepared on the basis of the Order #40/04 of the President of the National Bank of Georgia. The order determines the rule of filling of the monitoring report and information submission of the risk on the legalization of illicit income of the SFOR company and terrorism funding.
                    </p>
                    
                    <h4>11. Suspension of the execution of transaction on the basis of the request of the Financial Monitoring Service of Georgia</h4>
                    <p>The SFOR company is obliged to suspend the transaction (operation) and/or any other transaction (operation) related to this transaction or the persons participating in it, on the basis of the written instruction of the Head of the Financial Monitoring Service of Georgia, within 72 hours (included only working days).
                    </p>
                    <p>In case of urgent necessity, the Head of the Financial Monitoring Service of Georgia or a person authorized by him is obliged to give the instruction, orally (directly or by using the means of electronic communication) or written form, on suspension of the transaction to the person executing monitoring and the SFOR company shall suspend the execution of the transaction. If after 24 hours the written instruction of the Head of the Financial Monitoring Service of Georgia has not issued and has not been transferred to the SFOR company, the SFOR company terminates the execution of the abovementioned instruction and establishes a relevant protocol on the fact, which will include the following:</p>
                    <ul>
                        <li>Full name (name and surname) and position of the issuer (authorized person of the Financial Monitoring Service of Georgia) and the recipient (authorized employee of the company) of the instruction;</li>
                        <li>Exact time issuance/receipt of the instruction (with the indication of hours and minutes);</li>
                        <li>Content of the instruction, including (oral, by using e-mail or other means of electronic communication);</li>
                        <li>Content of the instruction, including the information allowing the identification of the transaction (transactions) and/or the person executing the transaction;</li>
                        <li>Term of the termination of the transaction;</li>
                        <li>Confirmation of receipt of the instruction by the authorized employee of the SFOR company;</li>
                        <li>Date and exact time of drawing up of the protocol;</li>
                        <li>Signature of the relevant authorized employee of the Financial Monitoring Service/company.</li>
                    </ul>
                    <p>The SFOR company is obliged to confirm the receipt of the instruction to the Financial Monitoring Service of Georgia in writing and take the necessary measures for immediate execution of the reveals instructions.</p>
                    
                    <p>The instruction may be cancelled before deadline, if the assumption on the existence of the suspicious transaction is not confirmed, as well as resulting the interests of the investigation, on the basis of the written application of the General prosecutor of Georgia, relevant services of the Ministry of Internal Affairs of Georgia or the State Security of Georgia. In such case, the Financial Monitoring Service of Georgia shall immediately inform the Company about the cancellation of the instruction, which will be signed within next 24 hours by the written instruction of the Head of the Financial Monitoring Service of Georgia and transferred to the SFOR company.
                    </p>
                    <p>The SFOR company is obliged to keep instructions (also received by electronic form) provided by the Head of the Financial Monitoring Services of Georgia for a period of no less than six years, if the relevant supervisory body does not require keeping the instructions for a long period.
                    </p>
                    
                    <h4>12. Recruitment and training</h4>
                    <p>Recruiting a new employee, the SFOR company pays great the cases connected with money laundering and terrorism funding.</p>

                    <p>The AML officer periodically carries out the training for the employees involved in business relationships with the clients.</p>

                    <p>The AML officer also participates in the approval of the available new products introduction in the SFOR company, in order to prevent unwanted risk, he develops relevant recommendations and later it will be introduced to the employees as well as the director of the SFOR company.
                    </p>
                    
                    <h4>Annex 1 – List of high risk countries</h4>
                    <p>For the purpose of the correct identification of the countries, according to our information, it is necessary to disclose the list of the reasons and the countries developed by “SFOR LLC”.</p>

                    <p>Based on the principles of the law “on Facilitating the Prevention of illicit Income legalization” the list of zones worthy of attention was developed:</p>
                    <ul>
                        <li>Iran;</li>
                        <li>Iraq;</li>
                        <li>Afghanistan;</li>
                        <li>Syria;</li>
                        <li>Bosnia;</li>
                        <li>Vanuatu;</li>
                        <li>North Korea;</li>
                        <li>Sudan;</li>
                        <li>Nigeria;</li>
                        <li>Uganda;</li>
                        <li>Laos;</li>
                        <li>Colombia;</li>
                        <li>Yemen;</li>
                        <li>Côte d’Ivoire.</li>
                    </ul>
                    <p>Getting in high risk for some countries due to a variety of factors, however some of them attracts our attention because of their importance. These are:</p>
                    <ul>
                        <li>High level of corruption existing in the country;</li>
                        <li>Lack of public transparency;</li>
                        <li>Deficit of AML regulation;</li>
                        <li>Poor financial standards and financial transparency;</li>
                        <li>Weak political laws and standards.</li>
                    </ul>
                    <p>The risk assessment will be as follows:</p>
                    <ol>
                        <li>High-risk countries;</li>
                        <li>Medium-risk countries;</li>
                        <li>Low-risk countries.</li>
                    </ol>
                    <p>All the countries included in the document are high-risk countries, which will be evaluated by relevant digital explanations.</p>

                    <p>The countries, which are not included in a policy, is a medium-risk country, which will be evaluated by relevant digital explanations.</p>

                    <p>And low-risk country will be represented by Georgia, which will be evaluated by relevant digital explanations.</p>

                    <p>Some countries mentioned in policy is subject to FATF membership and its jurisdiction. FATF represents the special group of financial actions of the competent international organization against money laundering and terrorism funding. It is important to note which country belongs to the membership of above-mentioned organization.
                    </p>
                    <p><strong>Iran</strong></p>

                    <p>Iran is a high risk country. Its inclusion in this category is stipulated by some factors: weakness of government legislation, fight against money laundering; supporters/save refuge of international terrorism; is not included in EU equivalent jurisdictional white list; corruption index/low level of transparency; world governance figures (average point), figures of failed states (political issues), (average point).
                    </p>
                    <p><strong>Iraq</strong></p>

                    <p>Among other included in the list, Iraq is also a high risk country that mentioned level is determined under various indices: in the issue of money laundering assessed by USA; supporters/save of international terrorism; is not included in EU equivalent jurisdictional whitelist; corruption index (Transparency International); world governance figures (average point), figures of failed states (political issues), (average point).
                    </p>
                    <p><strong>Afghanistan</strong></p>

                    <p>Afghanistan holds quite important place in high risk countries and this is stipulated by some reasons: in the issue of money laundering assessed by USA; supporters/save of international terrorism; is not included in EU equivalent jurisdictional whitelist; corruption index (Transparency International); world governance figures (average point); figures of failed states (political issues), (average point).
                    </p>
                    <p><strong>Syria</strong></p>

                    <p>Syria is also one of the members of high risk countries that is determined under various reasons: supporters/save of international terrorism; is not included in EU equivalent jurisdictional whitelist; corruption index (Transparency International); world governance figures (average point), figures of failed states (political issues), (average point).
                    </p>
                    <p>Currently Syria is in the list of FATF countries.</p>

                    <p><strong>Bosnia-Herzegovina</strong></p>

                    <p>Bosnia-Herzegovina is one of the members of high risk countries. Due to important flaws related to the crime on money laundering and confiscation regime, it is one of those risk zone countries. Diversity of reasons, why is among high risk countries: in the issue of money laundering assessed by USA; supporters/save of international terrorism; is not included in EU equivalent jurisdictional whitelist; corruption index (Transparency International); is offshore financial center.
                    </p>
                    <p>Diversity of reasons, why is it average risk country: in the issue of money laundering assessed by USA; corruption index (Transparency International); world governance figures (average point).</p>

                    <p>Bosnia-Herzegovina is one of the FATF member countries</p>

                    <p><strong>Vanuatu</strong></p>

                    <p>Vanuatu is a high risk country. Its inclusion in this category is stipulated by some reasons: is not included in EU equivalent jurisdictional whitelist; is offshore financial center; OECD (Organization for Economic Co-Operation and Development) global forum’s information exchange standard consent. It faces average risk due to following reasons: in the issue of money laundering assessed by USA; corruption index (Transparency International); world governance figures (average point); figures of failed states (political issues), (average point).
                    </p>
                    <p>Vanuatu is one of the FATF member countries.</p>

                    <p><strong>North Korea</strong></p>

                    <p>North Korea is also one of the members  of high risk countries due to following reasons: in the issue of money laundering assessed by USA; weakness of government legislation, fight against money laundering; supporters/save refuge of international terrorism; is not included in EU equivalent jurisdictional white list; weakness of government legislation, fight against money laundering; supporters/save refuge of international terrorism; is not included in EU equivalent jurisdictional white list; world governance figures (average point); figures of failed states (political issues), (average point).
                    </p>
                    <p>North Korea is under the control of FATF member countries.</p>

                    <p><strong>Sudan</strong></p>

                    <p>Sudan is one of the high risk countries. Aforesaid is stipulated by following reasons: supporters/save of international terrorism; is not included in EU equivalent jurisdictional whitelist; corruption index (Transparency International); world governance figures (average point), figures of failed states (political issues), (average point); offshore financial center.
                    </p>
                    <p>It is among average risk countries in accordance with the following factor: weakness in legislative regulations established by government that relates to the policy of fight against money laundering.</p>

                    <p>Currently Sudan is among the list of FATF countries.</p>

                    <p><strong>Nigeria</strong></p>

                    <p>Nigeria is a high risk country due to following factors: in the issue of money laundering assessed by USA; is not included in EU equivalent jurisdictional white list; corruption index (Transparency International); world governance figures (average point); figures of failed states (political issues), (average point).
                    </p>
                    <p>It is average risk country due to the reason of weakness in legislative regulations established by government that relates to the policy of fight against money laundering.</p>

                    <p><strong>Uganda</strong></p>

                    <p>Uganda is one of the high risk countries. Aforesaid is stipulated by following reasons: is not included in EU equivalent jurisdictional white list; corruption index/low level of transparency; figures of failed states (political issues), (average point).</p>

                    <p>It is among average risk countries due to the following reasons: world governance figures (average point); weakness in legislative regulations established by government that relates to the policy of fight against money laundering.</p>

                    <p>Currently Uganda is in the list of FATF countries.</p>

                    <p><strong>Laos</strong></p>

                    <p>Laos is also one of the members of high risk countries included in aforesaid list considering following factors: weakness of government legislation; fight against money laundering; supporters/save of international terrorism; is not included in EU equivalent jurisdictional white list; corruption index/low level of transparency; world governance figures (average point); figures of failed states (political issues), (average point); member of main list of international drug control.
                    </p>
                    <p>Laos is one of the FATF member countries.</p>

                    <p>Columbia is high risk country considering following factors: weakness of government legislation; fight against money laundering; is not included in EU equivalent jurisdictional white list; is not included in EU equivalent jurisdictional white list.</p>

                    <p>What about reasons, why is it average risk country, they are as follows: corruption index/low level of transparency; world governance figures (average point).</p>

                    <p><strong>Yemen</strong></p>

                    <p>Yemen is also high risk country stipulated due to following factors: corruption index/low level of transparency; world governance figures (average point); figures of failed states (political issues), (average point).</p>

                    <p>What about reasons, why is Yemen average risk country, it is as follows: in the issue of money laundering assessed by USA; weakness in legislative regulations established by government that relates to the policy of fight against money laundering.</p>

                    <p>Currently Yemen is one of the FATF member countries.</p>

                    <p><strong>Côte d’Ivoire</strong></p>

                    <p>Côte d’Ivoire is among aforesaid countries as one of the high risk countries. Aforesaid is stipulated by various factors: is not included in EU equivalent jurisdictional white list; corruption index/low level of transparency; world governance figures (average point); figures of failed states (political issues), (average point).
                    </p>
                    <p>What about reasons, why is aforesaid average risk country, they are as follows: in the issue of money laundering assessed by USA; weakness in legislative regulations established by government that relates to the policy of fight against money laundering.</p>

                    
                    <h4>Annex 2 - Product and Service Risk</h4>
                    <p>SFOR company divides its products and services in low, average and high risk categories.</p>

                    <p>Low risk category includes following kinds of products.</p>

                    <p>SFOR company should individually assess its product/service and the risk of their means of provision, considering personality of client and the nature of their business relation. Upon risk assessment of product/service and their means of provision the SFOR company has to consider following factors:
                    </p>
                    <ul>
                        <li>Product/service is assessed by appropriate international organizations as high risk-based (for example: international transfers, international transactions made by persons without their own accounts, when financial institute is a mediator, application of private bank’s service, withdrawal of financial instruments to submitter and others);</li>
                        <li>Provision of distant product/service (application of internet banking and other such technologies that complicates identification of parties participating in the operation);</li>
                        <li>Provision of product/service through mediator (agent).</li>
                    </ul>
                    
                    <h4>Annex 3 - High Risk Activity</h4>
                    <p>High risk activity is:</p>
                    <ul>
                        <li>Activity related to lotteries and other profitable games, including online casinos and gambling, slot clubs and others;</li>
                        <li>Activity related to precious metals/stones and their products, bric-a-brac and art exponents;</li>
                        <li>Activity related to real estate agencies, real estate brokers;</li>
                        <li>Activity related to the production and sale of weapon and ammunition, military equipment and vehicle (parts);</li>
                        <li>Activity related to manufacturers/dealers of materials of nuclear reactors;</li>
                        <li>Activity related to the trade or/and production of chemical matters;</li>
                        <li>Activities related to large sum of heavy cash flow;</li>
                        <li>Organizations that activity is related to such business not oriented on profit;</li>
                        <li>Sports clubs;</li>
                        <li>Development, holding, asset management and shipping companies;</li>
                        <li>Companies providing purchase of foreign currency through electronic platform;</li>
                        <li>Organizations that main business is issue of loan (including creditors), except financial institutions;</li>
                        <li>FOREX;</li>
                        <li>Construction activity;</li>
                        <li>Oil business.</li>
                    </ul>
                    
                    <h4>Annex 4 - Client Risk Assessment Form</h4>
                    <p>Client risk assessment is conducted in 3 levels:</p>
                    <ul>
                        <li>Low risk;</li>
                        <li>Average risk;</li>
                    </ul>
                    <p>High risk.</p>
                    
                    <p>Low risk clients:</p>
                    <ul>
                        <li>Client with Georgian citizenship;</li>
                        <li>Client, whose business is within low risk category;</li>
                        <li>Client legal entity, whose registration country is Georgia;</li>
                        <li>Client legal entity, whose field of activity is the business of low risk category.</li>
                    </ul>
                    <p>Average risk clients:</p>
                    <ul>
                        <li>Client who is foreign citizen, though is not within the list of high risk countries;</li>
                        <li>Client, whose business is within average risk category;</li>
                        <li>Client legal entity, who is registered in the country not within the list of high risk countries;</li>
                        <li>Client legal entity, whose field of activity is the business of average risk category;</li>
                        <li>Client beneficiary owner, who is foreign citizen, except the country that is within the category of high risk countries.</li>
                    </ul>
                    <p>High risk clients:</p>
                    <ul>
                        <li>Client who is the citizen of high risk country;</li>
                        <li>Client who is politically exposed person (PEP);</li>
                        <li>Client, whose business is within high risk category;</li>
                        <li>Client who applies high risk products;</li>
                        <li>Client legal entity, who is registered in the country within the list of high risk countries;</li>
                        <li>Client legal entity, whose field of activity is the business of high risk category;</li>
                        <li>Client legal entity beneficiary owner, who is the citizen of high risk country;</li>
                        <li>Client legal entity beneficiary owner, who is politically exposed person (PEP);</li>
                        <li>Client legal entity who applies high risk products.</li>
                    </ul>
                    
                    <h4>Annex 5 - Client’s Risk</h4>
                    <p>Client’s risk includes such kinds of activities of physical and legal entities (also organizational formations without the status of legal entity), conducted operations and peculiarities of conduct, also other signs that may stipulate necessity of their classification within high risk. SFOR company maximally cares for such category of clients and applies strong measures of monitoring. Within this category are:
                    </p>
                    <ul>
                        <li>Politically exposed persons;</li>
                        <li>Clients, known as suspected of legalization of illegal income/the business of financing terrorism;</li>
                        <li>Clients, about whom state bodies of various countries made reference/warning with regard to their illegal activity;</li>
                        <li>Client who have complicated organizational and ownership structure;</li>
                        <li>Professional service providers;</li>
                        <li>Clients, whose business is related to precious metals/stones and their products, bric-a-brac and art exponents;</li>
                        <li>Persons organizing lotteries and other profitable games, including online casinos and gambling, slot clubs and others;</li>
                        <li>Client conducting production or/and sale of weapon and ammunition, military equipment and vehicle (parts);</li>
                        <li>Companies manufacturing/dealers of materials of nuclear reactors;</li>
                        <li>Client conducting trade or/and production of chemical matters;</li>
                        <li>Organizations that activity is not oriented of profit;</li>
                        <li>Client representing investment fund/company;</li>
                        <li>Client registered by trust agent;</li>
                        <li>Client conducting fractional doubtful and unusual transactions;</li>
                        <li>Client (legal entity) whose beneficiary owner is politically exposed person;</li>
                        <li>Client whose financial assets origin’s statement is complicated or/and doubtful;</li>
                        <li>Client whose cash flow is not noted after the opening of account within 1 year or more and after this period banking transactions are carried out with large amounts of money;</li>
                        <li>Client who manages his/her business relations in unusual circumstances, namely unusually long geographic distance is between financial institution in client;</li>
                        <li>Client who requires unusually high level of confidentiality;</li>
                        <li>Client who carries out frequent and groundless transfer of his/her accounts to various financial institutions;</li>
                        <li>Client’s transactions do not correspond to the activity carried out by him/her, the nature (amount) of his/her financial operations is suddenly (clearly) changed or/and irrelevant to his/her usual activity;</li>
                        <li>Client who systematically and purposefully carries out below limit transactions within the short period of time;</li>
                        <li>Business/economic relation is obscure between parties conducting transactions and scope of transaction is unclear;</li>
                        <li>Client who prevents or is late in provision standard information;</li>
                        <li>Clients whose transactions or cash operations significantly differ from financial operations of clients with similar activity;</li>
                        <li>Such other circumstances that raise doubts about client’s riskiness (for example: identification documents, his/her reputation or past activity and others).</li>
                    </ul>

                    
                    <h4>Annex 6 - Permission on Establishment Business Relation with High Risk Category Client</h4>
                    <p>To director of SFOR LLC,</p>

                    <p>Mr. ________________</p>

                    <p>Be informed that ___________ LTD (name), (I/C ___________) desires establishment of business relation with SFOR company that according to the procedure of granting risk criterion worked out by SFOR company is high risk person due to following reason: director and beneficiary owner of company is the citizen of the Republic of Iran.
                    </p>
                    <p>At this stage with regard to legal entity is known following:</p>

                    <p>__________________ LTD</p>

                    <p>I/C __________________</p>

                    <p>Ordinary business _________________</p>

                    <p>Beneficiary owner _________________</p>

                    <p>Purposefulness of registration ______________</p>

                    <p>Possible turnover within the context of 1 year _______________</p>

                    <p>Bank accounts ___________________</p>

                    <p>By providing information be informed that beneficiary owner __________________ LTD is registered at our SFOR company, account of “__________” LTD with its business of trade of toys.</p>

                    <p>Please, permit us establishment of business relation with “________________” LTD. (I/C ______________).</p>

                    <p>Best regards,</p>

                    <p>Name, surname</p>

                    <p>___________________</p>

                    <p>Date:</p>

                    
                    <h4>Annex 7 - Consent of Resident Physical Entity on Verification of Personal Data</h4>
                    <p>Consent Form on Verification of Personal Data to Resident Physical Entity</p>

                    <p>“I _____________ (name, surname, personal number) express consent on getting my personal data from electronic database of LEPL Public Services Development Agency essential for SFOR company by SFOR LLC pursuant to the legislation, for the purpose of provision service essential for me and in required amount for the achievement of this goal”.
                    </p>
                    <p>__________________</p>
                    
                    <p>(Signature)</p>

                    <p>(Month, date, year)</p>

                    
                    <h4>Annex 8 - Doubtful Conduct of Client</h4>
                    <p>Information provided to SFOR company by client is insufficient, false or doubtful;</p>

                    <p>Client is involved in such business that is known as high risk activity related to “money laundering”, for example gambling, jewelry stores and others;</p>

                    <p>Client refuses provision of information about beneficiary owners to SFOR company;</p>

                    <p>Client refuses submission of additional information required by SFOR company that is essential for proper cooperation;</p>

                    <p>Source of origin of client’s assets is undefined, refuses its disclosure;</p>

                    <p>Client refuses signing agreement submitted by SFOR company;</p>

                    <p>Client asks questions with regard to monitoring of transaction.</p>

                    
                    <h4>Annex 9 - Consent of Director on Establishment of Business Relation with Politically Exposed Person (PEP)</h4>
                    <p>To director of SFOR LLC.</p>

                    <p>Mr. _________________</p>

                    <p>Under the basis of law “On Facilitating the Prevention of Illicit Income Legalization” related to politically exposed persons, please allow us establishment of business relation with Mr./Mrs., name, surname (position, occupation), who pursuant to the interpretation of Georgian legislation is politically exposed person (foreign citizen).
                    </p>
                    <p>Best regards,</p>

                    <p>________________________</p>

                    <p>Signature</p>

                    <p>Date: --/--/--202-</p>

                    
                    
                    <h2>Addition</h2>

                    
                    <ol>
                        <li><strong>შესავალი</strong></li>
                    </ol>
                    <p>ბენეფიციარი მესაკუთრეების დადგენის, იდენტიფიკაციისა და მათი ვინაობის გადამოწმების შესახებ დოკუმენტი (შემდგომში „დოკუმენტი“) წარმოადგენს კომპანია ,,სფორი’’-ს  ფულის გათეთრებისა და კონტროლის პოლიტიკის დამატებას, რომელიც განუყოფელი ნაწილია ამ უკანასკნელის.
                    </p>
                    <p>დოკუმენტის მიზანია სხვადასხვა მეთოდებისა და პრინციპების გათვალისწინებით,  კომპანია ,,სფორ’’-მა განახორციელოს კლიენტების ბენეფიციარი მესაკუთრეების დადგენის, იდენტიფიკაციისა და ვინაობის გადამოწმება.
                    </p>
                    <ol>
                        <li><strong>ტერმინთა განმარტება</strong></li>
                    </ol>
                    <strong>მაკონტროლებელი პირი- </strong>პირი, რომელიც პირდაპირ ან არაპირდაპირ უფლებამოსილია ინდივიდუალურად მიიღოს გადაწყვეტილება მმართველობით და ხელმძღვანელობაზე უფლებამოსილი პირების დანიშვნის/ განთავისუფლების თაობაზე ან სხვა რაიმე ფორმით მოახდინოს მნიშვნელოვანი ზეგავლენა კლიენტზე, მიუხედავად იმისა, რომ მის საკუთრებაში არსებული წილის/აქციების ოდენობა შეიძლება ნაკლები იყოს 25 %-ზე.

                    <strong>ფინანსური ინსტიტუტი -</strong> იურიდიული პირი, რომლის საქმიანობაა ფინანსური მომსახურების განხორციელება და რომელიც მოქმედებს კომერციული ბანკის, სადაზღვევო ორგანიზაციის, გადამზღვევი კომპანიის, საინვესტიციო ბანკის, საფონდო ბირჟის, ცენტრალური დეპოზიტარის, საბროკერო კომპანიის, მიკროსაფინანსო ორგანიზაციის, საკრედიტო კავშირის, საინვესტიციო ფონდის ან საგადახდო მომსახურების პროვაიდერის სახით.

                    &nbsp;
                    <ol>
                        <li><strong>ბენეფიციარი მესაკუთრები</strong></li>
                        <li>ბენეფიციარ მესაკუთრეს წარმოადგენს ფიზიკური პირი იმ შემთხვევაში, თუ იგი აკმაყოფილებს ქვემოთ მოხსენიებული კრიტერიუმებიდან ერთ-ერთს:</li>
                    </ol>
                    <p>ა) წარმოადგენს ბენეფიციარ მესაკუთრეს საკუთრების უფლების გამოყენებით;</p>

                    <p>ბ) საბოლოოდ აკონტროლებს კლიენტს სხვა ხერხის გამოყენებით;</p>

                    <p>გ) წარმოადგენს უმაღლეს მმართველობით და აღმასრულებელ პოზიციაზე მყოფ ფიზიკურ პირს.</p>
                    <ol>
                        <li>მნიშვნელოვანია, რომ ამ მუხლის პირველი პუნქტით განსაზღვრული კრიტერიუმებით ბენეფიციარი მესაკუთრის დადგენა მოხდეს ეტაპობრივად, თანმიმდევრობის დაცვით.</li>
                    </ol>
                    &nbsp;
                    <ol>
                        <li><strong>ბენეფიციარი მესაკუთრე საკუთრების უფლების გამოყენებით</strong></li>
                        <li>ფიზიკური პირი შესაძლებელია ჩაითვალოს ბენეფიციარ მესაკუთრედ საკუთრების უფლების გამოყენებით, იმ შემთვევაში, თუ იგი აკმაყოფილებს ქვემოთ მოხსენიებული კრიტერიუმებიდან ერთ-ერთს:</li>
                    </ol>
                    <p>ა) პირდაპირ ან არაპირდაპირ ფლობს კლიენტის წილის/აქციების 25% ან მეტს;</p>

                    <p>ბ) პირდაპირ ან არაპირდაპირ ფლობს კლიენტის ხმის უფლების მქონე წილის/აქციების 25%-ს ან მეტს.</p>
                    <ol>
                        <li>იმისათვის, რომ სწორად განისაზღვროს წილის/აქციის ან ხმის უფლების ფარგლები, კომპანია ,,სფორი’’ ითვალისწინებს შემდეგს:</li>
                    </ol>
                    <p>ა) პირდაპირი და არაპირდაპირი მფლობელობა ( ზღვრული და საკონტროლო პაკეტის მიდგომა);</p>

                    <p>ბ) ნომინალური მფლობელობა;</p>

                    <p>გ) წილის ან ხმის უფლების ერთობლივი ფლობა ორი ან რამდენიმე პირის მიერ;</p>

                    <p>დ) შეთანხმებები წილისა და ხმის უფლების მფლობელებს შორის.</p>
                    <ol>
                        <li>იმ შემთხვევაში, თუ პირი, წილს ან აქციებს ფლობს სხვა პირის სასარგებლოდ, ბენეფიციარი მესაკუთრე იქნება ის, რომლის აქციებიც ნომინალურ მფლობელობაშია.</li>
                        <li>დიდი მნიშვნელობიდან გამომდინარე, კომანია ,,სფორი’’ აღრიცხავს კლიენტის ბენეფიციარი მესაკუთრის იდენტიფიკაციის დროს იმ პირებს, რომლებიც წარმოადგენენ ნომინალურ აქციონერებს/მფლობელებსა და დირექტორებს.</li>
                    </ol>
                    <p>აღნიშნულის დროს, მნიშვნელოვანია წარმოდგენილ იქნას შემდეგი სახის დოკუმენტაცია:</p>

                    <p>ა) კრების ოქმი;</p>

                    <p>ბ) წესდება;</p>

                    <p>გ) სხვა დოკუმენტი სადაც განსაზღვრულია მხარეთა უფლება-მოვალეობები და ვინაობა.</p>
                    <ol>
                        <li>თუ ორი ან მეტი პირი წილს ან/და აქციას ფლობს ერთობლივად, თითოეული მათგანი განიხილება მთლიანი (ჯამური) წილის ან/და აქციების მფლობელებად.</li>
                        <li>თუ პირთა შორის არსებობს შეთანხმება, რომ ისინი წილიდან/აქციებიდან გამომდინარე ფულებებს განახორციელებენ ერთობივად, შეთანხმების თითოეული მხარე განიხილება მხარეების მთლიანი (ჯამური) წილის/აქციების ან ხმის უფლების მფლობელად.</li>
                    </ol>
                    &nbsp;
                    <ol>
                        <li><strong>კონტროლი სხვა ხერხის გამოყენებით</strong></li>
                        <li>ბენეფიციარი მესაკუთრის დადგენა, როდესაც იგი საბოლოოდ აკონტროლებს კლიენტს სხვა ხერხის გმოყენებით შესაძლებელია, თუ:</li>
                    </ol>
                    <p>ა) საკუთრების უფლების გამოყენებით ბენეფიციარი მესაკუთრეები ვერ გამოვლინდნენ; ან</p>

                    <p>ბ) საკუთრების უფლების გამოყენებით ბენეფიაციარი მესაკუთრეები დადგენილები არიან, თუმცა არსებობს საფუძველი, რომ კლიენტზე კონტროლს, გამოვლენილ ბენეფიციარ მესაკუთრესთან ერთად ახორციელებს, სხვა პირი, ან რეალური კონტროლი მხოლოდ აღნიშნული პირის მიერ ხორციელდება.
                    </p>
                    &nbsp;
                    <ol>
                        <li><strong>უმაღლეს მმართველობით და აღმასრულებელ პოზიციაზე მყოფი ფიზიკური პირი</strong></li>
                        <li>წინამდებარე მუხლის თანახმად, კომპანია ,,სფორი’’ ბენეფიციარ მესაკუთრედ მიიჩნევს პირს, რომელიც უფლებამოსილია ხელმძღანელობასა და წარმომადგენლობაზე (მაგალითად: დირექტორი, სამეთვალყურეო საბჭოს თავმჯდომარე).</li>
                        <li>თუ სტრატეგიული გადაწყვეტილებების მიღების უფლებამოსილება გააჩნია რამოდენიმე ფიზიკურ პირს, ბენეფიციარ მესაკუთრედ მიიჩნევა მათ შორის უმაღლესი იერარქიის ფიზიკური პირი, თუ უფლებამოსილებები თანაბარია-ყველა.</li>
                        <li>გამოსათხოვი დოკუმენტაცია:</li>
                    </ol>
                    <p>ა) კომპანიის წესდება;</p>

                    <p>ბ) კომპანიის კრების ოქმი;</p>

                    <p>გ) სხვა დოკუმენტი სადაც განსაზღვრულია მხარეთა უფლება-მოვალეობები და ვინაობა.</p>

                    &nbsp;
                    <ol>
                        <li><strong>არასამეწარმეო (არაკომერციული) იურიდიული პირი</strong></li>
                        <li>წინამდებარე მუხლის შესაბამისად, იურიდიული პირის ბენეფიციარ მესაკუთრედ შესაძლებელია მიჩნეული იყოს:</li>
                    </ol>
                    <p>ა) ფიზიკური პირი, რომელიც ფლობს ხმის უფლებას კლიენტის საქმიანობასთან დაკავშირებულ საკითხებზე;</p>

                    <p>ბ) ფიზიკური პირი, რომელიც რამდენიმე ფიზიკური პირიდან, იერარქიის შესაბამისად ფლობს ხმის უფლებას კლიენტის საქმიანობასთან დაკავშირებულ საკითხებზე;</p>

                    <p>გ) თუ უფლებამოსილებები თანაბარია, ყველა ფიზიკური პირი;</p>

                    <p>დ) ფიზიკური პირი, რომელიც უფლებამოსილია დანიშნოს და გაანთავისუფლოს კლიენტის ხელმძღვანელი პირები.</p>
                    <ol>
                        <li>კომპანია ,,სფორი’’  არკვევს, იმ ბენეფიციარის ვინაობას, რომელიც უფლებამოსილია სარგებელზე.</li>
                        <li>კომპანია ,,სფორი’’  შეძლებისდაგვარად შეისწავლის არასამეწარმეო (არაკომერციული) იურიდიული პირების დაფინანსების წყაროებს.</li>
                    </ol>
                    &nbsp;
                    <ol>
                        <li><strong>სატრასტო ურთიერთობა</strong></li>
                        <li>ტრასტის მხარეებს წარმოადგენენ:</li>
                    </ol>
                    <p>ა) მარწმუნებელი;</p>

                    <p>ბ) რწმუნებული;</p>

                    <p>გ) ბენეფიციარი (პირი, რომლის სასარგებლოდ ტრასტის დაფუძნებული);</p>

                    <p>დ) მეურვე.</p>
                    <ol>
                        <li>გამოსათხოვ დუკუმენტებს წარმოადგენს:</li>
                    </ol>
                    <p>ა) ტრასტის შექმის დოკუმენტი;</p>

                    <p>ბ) ტრასტის დეკლარაცია;</p>

                    <p>გ) ტრასტის აქტივების რეესტრი (დამატებით შესაძლებელია გამოთხოვა).</p>
                    <ol>
                        <li>გამოთხოვილი დოკუმენტების შესაბამისად, საბროკერო კომპანია განსაზღვრავს უფლებამოსილებებს, რომელიც განსაზღვრულია ტრასტის შექმნის დოკუმენში).</li>
                        <li>ტრასტის მსგასი სამართლებრივი სტრუქტურის შემთხვევაში, კომპანია ,,სფორი’’ ითხოვს ტრასტისათვის სავალდებულოდ გამოსათხოვი დოკუმენტაციის ეკვივალენტ დოკუმენტაციას.</li>
                    </ol>
                    &nbsp;
                    <ol>
                        <li><strong>კლიენტის მფლობელობის და მმართველობის სტრუქტურის დადგენა</strong></li>
                        <li>კლიენტის მფლობელობის და მმართველობის სტრუქტურის დადგენის მიზნით, კომპანია ,,სფორ’’-მა:</li>
                    </ol>
                    <p>ა) კლიენტისგან უნდა გამოითხოვოს მმართველობის და მფლობელობის (კონტროლის) სტრუქტურის შესახებ ინფორმაცია, აღნიშნული შესაძლებელია დადასტურებული იყოს განცხადებით ან სქემის (თვითდეკლალირება); და</p>

                    <p>ბ) სანდო წყაროდან მოპოვებულ დოკუმენტაციაზე/ინფორმაციაზე დაყრდნობით დარწმუნდეს კლიენტის მიერ გაცხადებული ინფორმაციის სისწორეში.</p>

                    <p>გ) სტრუქტურაში შემავალი თითოეული იურიდიული პირების შესახებ ინფრომაციის გამოთხოვა, უკანასკნელი ბენეფიციარი მესაკუთრის დადგენის მიზნით.</p>

                    <p>დ) ხელმძღვანელობაზე/წარმომადგენლობაზე უფლებამოსილი პირების ვინაობა (შესაბამისი დოკუმენტაციის გამოთხოვის გზით).</p>

                    &nbsp;
                    <ol>
                        <li><strong>ინფორმაციის შეგროვება და გადამოწმება</strong></li>
                        <li>მას, შემდეგ, კომპანია ,,სფორი’’-ს მიერ დადგინდება ბენეფიციარი მესაკუთრე და კლიენტის მმართველობის და მფლობელობის სტრუქტურა,  ბენეფიციარი მესაკუთრის შესახებ ხდება შემდეგი სახის ინფორმაციის გამოთხოვა:</li>
                    </ol>
                    <p>ა) სახელი და გვარი;</p>

                    <p>ბ) მოქალაქეობა;</p>

                    <p>გ) მისამართი/ადგილსამყოფელი იურისდიქცია;</p>

                    <p>დ) დაბადების თარიღი;</p>

                    <p>ე) პირადობის მოწმობის (პასპორტის) ნომერი ან/და მოქალაქის პირადი ნომერი პირადობის მოწმობის (პასპორტის) მიხედვით.</p>
                    <ol>
                        <li>კლიენტის იდენტიფიკაციისა და ვერიფიკაციის შემდეგ, თუ მისი საქმიანობა უკანონო შემოსავლის ლეგალიზაციის ან/და ტერორიზმის დაფინანსების <strong>მაღალი რისკს</strong> შეიცავს, კომპანია  ,,სფორი’’ არკვევს ბენეფიციარი მესაკუთრის საქმიანობასა და ქონების წარმომავლობას.</li>
                        <li><strong>საშუალო რისკის</strong> არსებობის შემთხვევაში, კომპანია  ,,სფორი’’ ეყრდნობა კლიენტის მიერ მისთვის მიწოდებულ ინფორმაციას (წინამდებარე მუხლის ა-ე პუნქტები).</li>
                        <li><strong>დაბალი რისკის</strong> არსებობის შემთხვევაში, გამოიყენება ის ინფორმაცია, რომელიც გათალისწინებულია საშუალო რისკის მქონე კლიენტისათვის.</li>
                        <li><strong><u>კომპანია ,,სფორი’’ ახორციელებს ყველა კლიენტის ინფორმაციის განახლებას რისკის დონის შესაბამისი პერიოდულობით.</u></strong></li>
                    </ol>
                    <u> </u>
                    <ol>
                        <li><strong>სანდრო წყარო</strong></li>
                        <li>სანდო წყაროდ შესაძლოა მიჩნეულ იყოს:</li>
                    </ol>
                    <p>ა) ამონაწერი ოფიციალური კომერციული/სამეწარმეო/სავაჭრო (კანონმდებლობის შესაბამისად თუ რეესტრის წარმოების უფლებამოსილება აქვს) რეესტრებიდან, სახელმწიფო უწყებებიდან მიღებული ინფორმაცია/დოკუმენტაცია პირის რეგისტრაციის/დაფუძნების თაობაზე, სახელმწიფო ორგანოების ვებგვერდზებზე განთავსებული ინფორმაცია სუბიექტების შესახებ;
                    </p>
                    <p>ბ) აქციათა რეესტრი (იმ შემთხვევაში, თუ რეესტრს აწარმოებს თავად შესასწავლი პირი, დამატებით საჭიროა სხვა სანდრო წყაროს გამოყნებეა (თუ კლიენტის რისკი არ არის დაბალი), მაგ: საგადასახადო დეკლარაცია, დივიდენდის ჩარიცხვის დამადასტურებელი დოკუმენტი);
                    </p>
                    <p>გ) სასამართლოს დოკუმენტები (თუ გაცემული დოკუმენტის ვალიდობას ადასტურებს სასამართლო ან დოკუმენტი, რომლითად დგინდება ბენეფიციარი მესაკუთრის ვინაობა გაცემულია თავად სასამართლოს მიერ);
                    </p>
                    <p>დ) საგადასახადო და საბაჟო დეკლარაციები;
                    </p>
                    <p>ე) ზედამხედველობას დაქვემდებარებული ფინანსური ინსტიტუტების ინფორმაცია/დოკუმენტები, მათუ რეპუტაციისადა რეგულირების ხარისხის გათვალისწინებით;
                    </p>
                    <p>ვ) ქვემოთ ჩამოთვლილი აუდიტორული კომპანიების ჩამონათვლიდან არსბეული აუდიტის დასკვნა, რომელშიც ასახული იქნება დირექტორების, აქციონერების, პარტნიორების თუ სხვა პირების მიერ იურიდიულ პირში მონაწილეობისა და კონტროლის შესახებ ინფორმაცია.
                    </p>
                    <strong><u>აუდიტორული კომპანიებია:</u></strong>
                    <ol>
                        <li>Deloitte;</li>
                        <li>PwC;</li>
                        <li>Ernst &amp; Young;</li>
                        <li>KPMG;</li>
                        <li>Grant Thornton;</li>
                        <li>RSM Tenon;</li>
                        <li>Smith &amp; Williamson;</li>
                        <li>Baker Tilly;</li>
                        <li>Moore Stephens;</li>
                        <li>Mazars;</li>
                        <li></li>
                    </ol>
                    <p>ზემოხსენებული აუდიტორული კომპანიების გარდა სანდრო წყაროდ შესაძლოა მიჩნეულ იქნეს ისეთი აუდიტორული კომპანიები, რომლებიც ექვემდებარებიან ზედამხევდელობას ფულის გათეთრების წინააღმდეგ ბრძოლის მიმართულებით და რომელთა მიმართაც საბროკერო კომპანიას ჩატარებული აქვს შესაბამისი ანალიზი, რომელიც იწყვევს ნდობას ამ აუდიტორული კომპანიების მიმართ.
                    </p>
                    <p>ზ) უფლებამოსილი პირის მიერ (მაგ. ნოტარიუსი) დამოწმებული იურიდიული პირის ოფიციალური დოკუმენტაცია.</p>

                    <p>2) მაშინ, როდესაც  კომპანია ,,სფორი’’-ს მიერ ინტერნეტის მეშვეობით და საჯარო წყაროებიდან მოპოვებული ინფორმაცია წარმოადგენს სანდო დოკუმენტს,  კომპანია ,,სფორი’’ აკმაყოფილებს იმ მინიშვნელოვან კრიტერიუმებს, რომელსაც წარმოადგენს:
                    </p>
                    <ol>
                        <li>წყაროს დასახელება;</li>
                        <li>დოკუმენტის გადმოწერის თარიღი (დამოწმებული შესაბამისი თანამშრომლის მიერ, ასეთის არ არსებობის შემთხვევაში, გადმოწერის თარიღის დადასტურება ხდება სხვა გზით);</li>
                        <li>კომპანია ,,სფორი’’-ს მიერ ბენეფიციარი მესაკუთრის შესახებ ნებისმიერი სახის ინფორმაცია (გარდა აუდის დასკვნის - რომელიც დათარიღებულია არა უგვიანეს წინა წლით, წესდებისა და პირადობის დამდასტურებელი დოკუმენტისა) განახლებას ექვემდებარება ყოველი 6 თვეში ერთხელ.</li>
                        <li>კომპანია ,,სფორი’’-ს კლიენტთა შესახებ არსებული ნებისმიერი სახის ინფორმაცია ინახება 6 წლის ვადით.</li>
                        <li><strong><u>ბენეფიციარ მესაკუთრეთა დადგენა არ ხდება </u></strong>წარმომდგენს ფასიან ქაღალდებზე დაყრდნობით. გამონაკლისს წარმოადგენს შემთხვევა, როდესაც ფასიანი ქაღალდები ინახება ზედემხედველობას დაქვემდებარებულ ფინანსურ ინსტიტუტთან ან პროფესიულ შუამავალთან. ასეთ შემთხვევაში ხდება ორი ფაქტორის გათვალისწინება: 1) იურისდიქციის შესაბამისობა FATF-ის რეკომენდაციებთან. სადაც საქმიანობს ფინანსური ინსტიტუტი; 2) პროფესიული შუამავალი და მხედველობა მიიღება მისი ზედამხედველობის ეფექტიანობა AML/CFT მიმართულებით.</li>
                    </ol>
                    &nbsp;
                    <ol>
                        <li><strong>ფიზიკური პირის ბენეფიციარი მესაკუთრე</strong></li>
                    </ol>
                    <p>ფიზიკური პირი შესაძლეელია იყოს ბენეფიციარი მესაკუთრე. ასეთ დროს, კომპანია ,,სფორი’’ შეისწავლის ბენეფიციარი მესაკუთრის შესახებ სხვადასხვა სახის ინფორმაციას:</p>

                    <p>კლიენტის სახსრების წარმოამვლობა;</p>

                    <p>კომპანია ,,სფორ’’-ში შემოტანილი თანხის შესაბამისობა კლიენტის სახსრებთან;</p>

                    <p>საქმიანობის სფერო;</p>
                    <ol>
                        <li><strong>ინფორმაციის გამოთხოვა გამონაკლის შემთხვევებში</strong></li>
                    </ol>
                    <p>კომპანია ,,სფორი’’ გარკვეული ნდობის შესაბამისად, ითხოვს კლიენტთა შესახებ ინფორმაციას, ხოლო კლიენტი უფლებამოსილია გამოიყენოს თვითდეკლარირების ფორმა, რომელიც უნდა შეიცავდეს შემდეგ მონაცემებს:</p>

                    <p>ა) გამოთხოვილ სტუქტურაში მონაწილე ყველა <strong>ფიზიკური პირის</strong> ვინაობა და მაიდენტიფიცირებელი დოკუმენტები:</p>
                    <ul>
                        <li>პირადობის დამადასტურებელი დოკუმენტი;</li>
                        <li>პასპორტი;</li>
                        <li>სახელი;</li>
                        <li>გვარი;</li>
                        <li>მოქალაქეობა;</li>
                        <li>დაბადების თარიღი;</li>
                        <li>დაბადების ადგილი.</li>
                    </ul>
                    <strong>ბ) იურიდიული პირის შემთხვევაში:</strong>
                    <ul>
                        <li>დასახელება;</li>
                        <li>სამართლებრივი ფორმა;</li>
                        <li>რეგისტრაციის ნომერი/საიდენტიფიკაციო ნომერი;</li>
                        <li>რეგისტრაციის თარიღი;</li>
                        <li>რეგისტრაციის ადგილი;</li>
                        <li>ლიცენზიის არსებობის შემთხვევაში, ლიცენზიის ასლი.</li>
                    </ul>
                    <ol>
                        <li>კომპანია ,,სფორი’’ ახორციელებს განსხვავებული წესით ინდენტიფიკაციასა და ვერიფიკაციას თუ კლიენტი წარმოადგენს:</li>
                    </ol>
                    <ul>
                        <li>ადგილობრივ ფინანსურ ინსტიტუტს, რომელიც ექვემდებარება ზედამხედველობას „უკანონო შემოსავლის ლეგალიზაციის აღკვეთის ხელშეწყობის შესახებ“ საქართველოს კანონის შესაბამისად;</li>
                        <li><strong>საერთაშორისო ორგანიზაციებს (რომელთა სტატუსის გადამოწმება ხორციელდება ზედამხედველი ორგანოს ვებ-გვერდზე):</strong></li>
                        <li>ევროპის პარლამენტი;</li>
                        <li>ევროკომისია;</li>
                        <li>ევროპის მართლმსაჯულების სასამართლო (ECJ);</li>
                        <li>გაერთიანებული ერების ორგანიზაცია, მისი ოფიცები და პროგრამები;</li>
                        <li>ევროპის უშიშროებისა და თანამშრომლობის ორგანიზაცია;</li>
                        <li>ჩრდილოატლატიკური ხელშეკრულების ორგანიზაცია (NATO);</li>
                        <li>ევროპის თავისუფალი ვაჭრობის ასოციაცია;</li>
                        <li>ევროპის სტატისტიკის სამსახური (EUROSTAT);</li>
                        <li>ათასწლეულის გამოწვევის ფონდი;</li>
                        <li>მსოფლიო ვაჭრობის ორგანიზაცია;</li>
                        <li>ეკონომიკური თანამშრომლობის და განვითარების ორგანიზაცია;</li>
                        <li>მფოლიო ტურიზმის ორგანიზაცია;</li>
                        <li>მიგრაციის საერთაშორისო ორგანიზაცია;</li>
                        <li>სამოქალაქო ავიაციის საერთაშორისო ორგანიზაცია;</li>
                        <li>შრომის საერთაშორისო ორგანიზაცია;</li>
                        <li>მსოფლიო მეტეოროლოგიური ორგანიზაცია;</li>
                        <li>ჯანდაცვის მსოფლიო ორგანიზაცია;</li>
                        <li>მსოფლიოს ეკონომიკური ფორუმი.</li>
                        <li><strong>საერთაშორისო ფინანსურ ინსტიტუტებს:</strong></li>
                        <li>ევროპის რეკონსტუქციისა და განვითარების ბანკი (EBRD);</li>
                        <li>აზიის განვითარების ბანკი (ADB);</li>
                        <li>მსოფლიო ბანკის ჯგუფი (WBG);</li>
                        <li>რეკონსტრუქციისა და განვითარების საერთაშორისო ბანკი (IBRD);</li>
                        <li>საერთაშორისო ფინანსური კორპორაცია (IFC);</li>
                        <li>მრავალმხრივი ინვესტიციების გარანტიის სააგენტო(MIGA);</li>
                        <li>ევროპის საინვესტიციო ბანკი (EIB);</li>
                        <li>ევროპის საბჭოს განვითარების ბანკი (CEB);</li>
                        <li>საერთაშორისო სავალუტო ფონდი (IMF);</li>
                        <li>სკანდინავიური გარემოს საფინანსო კორპორაცია (NEFCO)-საერთაშორისო საფინანსო ინსტიტუტი, რომელიც დაარსდა სკანდინავიის ხუთი ქვეყნის (დანია, ფინეთი, ისლანდია, ნორვეგია და შვედეთი) მიერ;</li>
                        <li>შავი ზღვის ვაჭრობისა და განვითარების ბანკი (BSTDB);</li>
                        <li>უცხოეთის კერძო საინვესტიციო კორპორაცია (OPIC);</li>
                        <li>ნიდერლანდების განვითარების ბანკი (FMO);</li>
                        <li>European Central Bank (ECB);</li>
                        <li>Bank for International Settlements (BIS);</li>
                        <li>საქართველოს სახელმწიფო ორგანიზაცია და საჯარო სამართლის იურიდიული პირი, სამეწარმეო იურიდიული პირი სახელმწიფოს წილობრივი მონაწილეობით ან სახელმწიფოს მიერ დაფუძნებული არასამეწარმეო არაკომერციული იურიდიული პირი ( კომპანია ,,სფორი’’ უზრუნველყოფს სამეწარმეო რეესტრის ამონაწერების ამოღებას);</li>
                        <li>საელჩო/საკონსულო;</li>
                        <li>პირი, რომელსაც საფონდო ბირჟის ან კანონმდებლობის თანახმად მოეთხოვება ინფორმაციის გამჟღავნება, ბენეფიციური მფლობელობის გამჭვირვალობის უზრუნველყოფა და რომლის აქციებიც საჯაროდ ივაჭრება შემდეგებ ჩამონათვალში არსებულ<strong> კრიპტოვალუტის ბირჟებზე ( კომპანია ,,სფორი’’  მხედველობაში იღებს კრპტო ბირჟასა და კომპანიის ვებ-გვერდზე განთავსებულ ინფორმაციას, ასევე აუდიტორის მიერ გამოქვეყნებულ ფინანსურ ანგარიშგებას):</strong></li>
                        <li>კროპტოვალუტის ბირჟა:</li>
                        <li><a href="https://www.kraken.com/" target="_blank" rel="noopener">https://www.kraken.com/</a></li>
                        <li><a href="https://hitbtc.com/" target="_blank" rel="noopener">https://hitbtc.com/</a></li>
                        <li><a href="https://poloniex.com/" target="_blank" rel="noopener">https://poloniex.com/</a></li>
                        <li><a href="https://www.binance.com/" target="_blank" rel="noopener">https://www.binance.com/</a></li>
                    </ul>

                    <ul>
                        <li>რეზიდენტი კომპანიები, რომელთა მმართველობის სტრუქტურაში ფიგურირებენ მხოლოდ საქართველოს მოქალაქეები.</li>
                        <li>თუ სტრუქტურაში, გარდა იმ პირისა, რომელის იდენტიფიკაცია და ვერიფიკაცია ხდება, ასევე მონაწილეობენ სხვა პირები, საბროკერო კომპანია ახდენს ყველა სხვა პირის იდენტიფიკაციას.</li>
                    </ul>
                    <ol>
                        <li>წინამდებარე მუხლით განსაზღვრული შემთხვევები არ განიხილება, თუ კოპანიას:</li>
                    </ol>
                    <ul>
                        <li>აქვს ეჭვი კლიენტის ან/და ბენეფიციარი მესაკუთრის უკვე განხორციელებული იდენტიფიკაციის/ვერიფიკაციის სისწორეში;</li>
                        <li>ისეთი სახის ოპერაციისა ან ინვესტიციის განხორციელებისას, რომელიც არ შეესაბამება კლიენტის არსებულ პროფილს;</li>
                        <li>აქვს ინფორმაცია, რომ კლიენტმა არსებითად შეიცვალა საქმიანობის სფერო;</li>
                        <li>კლიენტის მაღარი რისკის მაჩვენებლის შემთხვევაში.</li>
                    </ul>
                    <ol>
                        <li>კლიენტის, ბენეფიციარი მესაკუთრის ხელახალი გადამოწმება ხდება მაშინ, როდესაც:</li>
                    </ol>
                    <ul>
                        <li>კომპანია ,,სფორ-ს’’ აქვს ეჭვი, კლიენტის უკვე განხორციელებული ვერიფიკაცია/იდენტიფიკაციის სისწორეში;</li>
                        <li>ისეთი სახის ოპერაციისა ან ინვესტიციის განხორციელებისას, რომელიც არ შეესაბამება კლიენტის არსებულ პროფილს;</li>
                        <li>აქვს ინფორმაცია, რომ კლიენტმა არსებითად შეიცვალა საქმიანობის სფერო;</li>
                        <li>კლიენტის რისკის მაჩვენებლის გაუარესების შემთხვევაში, თუ გატარებული ღონისძიებები არასაკმარისად მიიჩნევა ბენეფიციარი მესაკუთრის დადგენის, იდენტიფიკაციის ან/და ვერიფიკაციის მიზნებისათვის, ამ დოკუმენტის შესაბამისად.</li>
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
export const AmlPolicy = withRouter(injectIntl(connect(mapStateToProps, null)(Landing) as any));
