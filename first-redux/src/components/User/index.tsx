import React from 'react';


export interface UserItemProps {
    name: string;
    age: number
  }

export const User: React.FC<UserItemProps> = ({ name, age }) => {
    return (
        <div className="card">
            <li className="list-group-item">Name: {name}</li>
            <li className="list-group-item">Age: {age}</li>
        </div>
    );
};