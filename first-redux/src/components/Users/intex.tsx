import React from 'react';
import { UserItemProps } from "../NewUser";
import { Component } from "react";
import { UserState } from '../../store/reducers/userReducer';
import { connect } from "react-redux";

interface State {
    users: UserItemProps[];
  }
  
interface ConnectedProps {
    users: UserItemProps[];
  }
  
  type ComponentProps = ConnectedProps;
  
  class Users extends Component<ConnectedProps> {
      render() {
        return this.props.users.length > 0 ? (
            <div>Users will be here</div>
          ) : (
            <div>Nothing to see here yet</div>
          );
        }
      }
      
    const mapStateToProps = (state: { userReducer: UserState }): ConnectedProps => ({
        users: state.userReducer.users
    });

    export default connect(mapStateToProps)(Users);