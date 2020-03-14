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
    selectCurrentColorTheme,
    selectCurrentLanguage,
    selectCurrentMarket,
    selectSidebarState,
    selectUserLoggedIn,
    toggleSidebar,
} from '../../modules';
import { languages } from '../../api/config';
import { Dropdown } from 'react-bootstrap';

import logo from '../../assets/images/logoLight.svg';
import logoLight from '../../assets/images/logoLight.svg';

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
    colorTheme: string;
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
        const { colorTheme, lang } = this.props;
        const { isOpenLanguage } = this.state;
        const languageName = lang.toUpperCase();

        const languageClassName = classnames('dropdown-menu-language-field', {
            'dropdown-menu-language-field-active': isOpenLanguage,
        });

        return (
            <div className="pg-sidebar-wrapper">
                   <div onClick={e => this.redirectToLanding()} className="pg-header__logo">
                            <div className="pg-logo">
                                {colorTheme === 'light' ? (
                                    <img src={logoLight} className="pg-logo__img" alt="Logo" />
                                ) : (
                                    <img src={logo} className="pg-logo__img" alt="Logo" />
                               )}
                            </div>
                    </div>
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
                {this.renderLogout()}
            </div>
        );
        
    }
    private redirectToLanding = () => {
        this.props.toggleSidebar(false);
        this.props.history.push('/');
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

    public renderProfileLink = () => {
        const { isLoggedIn, colorTheme, location } = this.props;
        const isLight = colorTheme === 'light';
        const handleLinkChange = () => this.props.toggleSidebar(false);
        const address = location ? location.pathname : '';
        const isActive = address === '/profile';

        return isLoggedIn && (
            <div className="pg-sidebar-wrapper-profile">
                <Link to="/profile" onClick={handleLinkChange} className={`${isActive && 'route-selected'}`}>
                    <div className="pg-sidebar-wrapper-profile-link">
                        <img
                            className="pg-sidebar-wrapper-profile-link-img"
                            src={require(`../../assets/images/sidebar/profile${isLight ? 'Light' : '' }.svg`)}
                            alt="icon"
                        />
                        <p className="pg-sidebar-wrapper-profile-link-text">
                            <FormattedMessage id={'page.header.navbar.profile'} />
                        </p>
                    </div>
                </Link>
            </div>
        );
    };

    public renderLogout = () => {
        const { isLoggedIn, colorTheme } = this.props;
        const isLight = colorTheme === 'light';
        if (!isLoggedIn) {
            return null;
        }

        return (
            <div className="pg-sidebar-wrapper-logout">
                <div className="pg-sidebar-wrapper-logout-link" onClick={this.props.logoutFetch}>
                    <img
                        className="pg-sidebar-wrapper-logout-link-img"
                        src={require(`../../assets/images/sidebar/logout${isLight ? 'Light' : '' }.svg`)}
                        alt="icon"
                    />
                    <p className="pg-sidebar-wrapper-logout-link-text">
                        <FormattedMessage id={'page.body.profile.content.action.logout'} />
                    </p>
                </div>
            </div>
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
    colorTheme: selectCurrentColorTheme(state),
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
const SidebarSecond = withRouter(connect(mapStateToProps, mapDispatchToProps)(SidebarContainer) as any) as any;

export {
    SidebarSecond,
};
