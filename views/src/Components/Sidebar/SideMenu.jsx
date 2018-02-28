import React, { Component } from 'react';

import { Menu, Icon } from 'antd';
const { Item } = Menu;

const SideMenu = (props) => {
  return (
    <Menu theme="dark" mode="inline" defaultSelectedKeys={[props.selectedItem.toString()]} onSelect={ (item) => props.onHandleItem(item.key)}>
      <Item key="1" >
        <Icon type="user-delete" />
        <span>Kick users</span>
      </Item>
      <Item key="2">
        <Icon type="table" />
        <span>Show all users</span>
      </Item>
    </Menu>
  );
};

export default SideMenu;