import React from 'react';
import { Component } from "react";
import { UserState } from '../../store/reducers/userReducer';
import { connect } from "react-redux";
import { User, UserItemProps } from '../User';


interface State {
    users: UserItemProps[];
  }
  
interface ConnectedProps {
    users: UserItemProps[];
  }
  
  type ComponentProps = ConnectedProps;
  
  export class Users extends Component<ConnectedProps, State> {

    private renderUsers = (): JSX.Element[] => 
      this.props.users.map(user => (
        <User name={user.name} age={user.age}/>
        ))

      render() {
        return this.props.users.length > 0 ? (
        <div> {this.renderUsers()} </div>
          ) : (
            <div>Nobody's here</div>
          );
        }
      }
      
    const mapStateToProps = (state: { userReducer: UserState }): ConnectedProps => ({
        users: state.userReducer.users
    });

    export default connect(mapStateToProps)(Users);