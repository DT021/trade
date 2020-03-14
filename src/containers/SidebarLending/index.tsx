import classnames from 'classnames';
import { History } from 'history';
import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { connect, MapDispatchToPropsFunction } from 'react-redux';
import { Link, RouteProps, withRouter } from 'react-router-dom'; 
import {
    changeLanguage,
    logoutFetch,
    Market,
    RootState, 
    selectCurrentLanguage,
    selectCurrentMarket,
    selectSidebarState,
    selectUserLoggedIn,
    toggleSidebar,
} from '../../modules';
import { languages } from '../../api/config';
import { Dropdown } from 'react-bootstrap';
 

interface State {
    isOpenLanguage: boolean;
}

interface DispatchProps {
    changeLanguage: typeof changeLanguage;
    toggleSidebar: typeof toggleSidebar;
    logoutFetch: typeof logoutFetch;
}

interface ReduxProps {
    lang: string; 
    isLoggedIn: boolean;
    currentMarket: Market | undefined;
    isActive: boolean;
}

interface OwnProps {
    onLinkChange?: () => void;
    history: History;
}

type Props = OwnProps & ReduxProps & RouteProps & DispatchProps;

class SidebarContainer extends React.Component<Props, State> {
    public state = {
        isOpenLanguage: false,
    };

    public render() {
        const { lang } = this.props;
        const { isOpenLanguage } = this.state;
        const languageName = lang.toUpperCase();

        const languageClassName = classnames('dropdown-menu-language-field', {
            'dropdown-menu-language-field-active': isOpenLanguage,
        });

        return (
            <div className="pg-sidebar-wrapper">
  
                <div className="pg-sidebar-wrappersetlinks">
 
                <div className="pg-sidebar-wrapper-lng">
                    <div className="btn-group pg-navbar__header-settings__account-dropdown dropdown-menu-language-container">
                        <Dropdown>
                            <Dropdown.Toggle variant="primary" id={languageClassName}>
                                <img
                                    src={this.tryRequire(lang) && require(`../../assets/images/sidebar/${lang}.svg`)}
                                    alt={`${lang}-flag-icon`}
                                />
                                <span className="dropdown-menu-language-selected">{languageName}</span>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {this.getLanguageDropdownItems()}
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
                </div>
                
            </div>
        );
        
    }
 

    public renderNavItems = (address: string) => (values: string[], index: number) => {
        const { currentMarket } = this.props;

        const [name, url, img] = values;
        const handleLinkChange = () => this.props.toggleSidebar(false);
        const path = url.includes('/trading') && currentMarket ? `/trading/${currentMarket.id}` : url;
        const isActive = (url === '/trading/' && address.includes('/trading')) || address === url;
        return (
            <Link to={path} key={index} onClick={handleLinkChange} className={`${isActive && 'route-selected'}`}>
                <div className="pg-sidebar-wrapper-nav-item">
                    <div className="pg-sidebar-wrapper-nav-item-img-wrapper">
                        <img
                            className="pg-sidebar-wrapper-nav-item-img"
                            src={require(`../../assets/images/sidebar/${img}.svg`)}
                            alt="icon"
                        />
                    </div>
                    <p className="pg-sidebar-wrapper-nav-item-text">
                        <FormattedMessage id={name} />
                    </p>
                </div>
            </Link>
        );
    };
  

    public getLanguageDropdownItems = () => {
        return languages.map((l: string) =>
            <Dropdown.Item onClick={e => this.handleChangeLanguage(l)}>
                <div className="dropdown-row">
                    <img
                        src={this.tryRequire(l) && require(`../../assets/images/sidebar/${l}.svg`)}
                        alt={`${l}-flag-icon`}
                    />
                    <span>{l.toUpperCase()}</span>
                </div>
            </Dropdown.Item>,
        );
    };

    private tryRequire = (name: string) => {
        try {
            require(`../../assets/images/sidebar/${name}.svg`);
            return true;
        } catch (err) {
            return false;
        }
    };


    private handleChangeLanguage = (language: string) => {
        this.props.changeLanguage(language);
    }
}

const mapStateToProps = (state: RootState): ReduxProps => ({ 
    isLoggedIn: selectUserLoggedIn(state),
    currentMarket: selectCurrentMarket(state),
    lang: selectCurrentLanguage(state),
    isActive: selectSidebarState(state),
});

const mapDispatchToProps: MapDispatchToPropsFunction<DispatchProps, {}> =
    dispatch => ({
        changeLanguage: payload => dispatch(changeLanguage(payload)),
        toggleSidebar: payload => dispatch(toggleSidebar(payload)),
        logoutFetch: () => dispatch(logoutFetch()),
    });

// tslint:disable no-any
const SidebarLending = withRouter(connect(mapStateToProps, mapDispatchToProps)(SidebarContainer) as any) as any;

export {
    SidebarLending,
};
