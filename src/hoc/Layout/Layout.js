import React, {PureComponent} from 'react';
import Aux from '../Aux/Aux';
import styles from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends PureComponent {
  state = {
    showSideDrawer: true
  }
  sideDrawerClosedHandler = () => {
    this.setState({showSideDrawer: false})
  }

  sideDrawerToggleHandler = () => {
    this.setState( ( prevState ) => {
      return { showSideDrawer: !prevState.showSideDrawer }
    });
  }

  render() {
    return (
      <Aux>
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
        />
        <div className={styles['content']}>
          {this.props.children}
        </div>
      </Aux>
    );
  }
}

export default Layout;