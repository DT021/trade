
import * as React from 'react';
import { 
    connect,
    MapDispatchToPropsFunction,
    MapStateToProps,
} from 'react-redux';
 
import { RouterProps } from 'react-router'; 
import { RouteProps, withRouter } from 'react-router-dom';
import { Moon } from '../../assets/images/Moon';
import { Sun } from '../../assets/images/Sun';
import { colors } from '../../constants';
import {
    changeColorTheme,
    RootState,
    selectCurrentColorTheme,
} from '../../modules';

interface ReduxProps {
    colorTheme: string; 
}

interface DispatchProps {
    changeColorTheme: typeof changeColorTheme; 
}
 
type NavbarProps = ReduxProps & RouteProps & DispatchProps;

interface NavbarState {
    isOpen: boolean;
    isOpenLanguage: boolean;
    email: string;
    message: string;
    name: string;
    recaptchaResponse: string;
    errorModal: boolean;
}

class FooterComponent extends React.Component<NavbarProps, NavbarState, RouterProps> {
 
    public render() {
        const { colorTheme } = this.props;

        return (
            <footer className="pg-footer"> 
<div>                
</div>
            <div className={'pg-navbar'}>
                <div className="pg-navbar__header-settings">
                    <div className="pg-navbar__header-settings__switcher">
                        <div
                            className="pg-navbar__header-settings__switcher__items"
                            onClick={() => this.handleChangeCurrentStyleMode(colorTheme === 'light' ? 'basic' : 'light')}
                        >
                            {this.getLightDarkMode()}
                        </div>
                    </div>
                </div>
            </div>
            </footer>
        );
    }

    private getLightDarkMode = () => {
        const { colorTheme } = this.props;

        if (colorTheme === 'basic') {
            return (
                <React.Fragment>
                    <div className="switcher-item">
                        <Sun fillColor={colors.light.navbar.sun}/>
                    </div>
                    <div className="switcher-item switcher-item--active">
                        <Moon fillColor={colors.light.navbar.moon}/>
                    </div>
                </React.Fragment>
            );
        }

        return (
            <React.Fragment>
                <div className="switcher-item switcher-item--active">
                    <Sun fillColor={colors.basic.navbar.sun}/>
                </div>
                <div className="switcher-item">
                    <Moon fillColor={colors.basic.navbar.moon}/>
                </div>
            </React.Fragment>
        );
    };

    private handleChangeCurrentStyleMode = (value: string) => {
        this.props.changeColorTheme(value);
    };
}

const mapStateToProps: MapStateToProps<ReduxProps, {}, RootState> =
    (state: RootState): ReduxProps => ({
        colorTheme: selectCurrentColorTheme(state), 
    });

const mapDispatchToProps: MapDispatchToPropsFunction<DispatchProps, {}> =
    dispatch => ({
        changeColorTheme: payload => dispatch(changeColorTheme(payload)), 
    });

// tslint:disable-next-line:no-any
const Footer = withRouter(connect(mapStateToProps, mapDispatchToProps)(FooterComponent) as any) as any;

export {
    Footer,
};
