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
  
  export class Users extends Component<ConnectedProps> {

    private renderUsers = (): JSX.Element[] =>
      this.props.users.map(user => (
            <div key={user.name}>
                Name: {user.name}
                <br/>
                Age: {user.age}
            </div>
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