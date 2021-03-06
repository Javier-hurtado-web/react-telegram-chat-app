import React, { Component } from 'react';

import { Layout, Icon } from 'antd';
const { Header } = Layout;

import { connect } from 'react-redux';
import { toggleSidebar } from './Sidebar/SidebarActions';


const CustomHeader = ({ collapsed , onToggle }) => {

  return (
    <Header style={{ background: '#fff', padding: 0 }}>
      <div style={{paddingLeft : 30}}>
        <Icon
          type={collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={onToggle}
        />
      </div>
    </Header>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onToggle : () => {
      dispatch(toggleSidebar);
    }
  };
};

export default connect(null, mapDispatchToProps)(CustomHeader);
