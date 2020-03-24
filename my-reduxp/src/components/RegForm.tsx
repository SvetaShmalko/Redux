import React from 'react'
import { connect } from 'react-redux';
import { createInfo } from '../redux/actions';

export interface InputForm {
    name: string
}

export class RegForm extends React.Component<{}, InputForm>{
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(props: {}) {
        super(props)
        this.state = {
            name: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event: React.ChangeEvent<HTMLInputElement> ) {
        this.setState({ name: event.target.value },
            () => console.log(this.state)
        );
    }

    handleSubmit(event: React.FormEvent) {
        event.preventDefault();

        console.log('Отправленное имя: ' + this.state.name);
        this.setState({ name: '' })
    }
    render() {
        return (
            <form
                onSubmit={(event) => this.handleSubmit(event)}
            >
                <label>Enter Your name</label>

                <input type="text"
                    className="form-control"
                    value={this.state.name}
                    id="validationDefault01"
                    placeholder="name"
                    required
                    onChange={this.handleChange}
                />

                <input className="btn btn-success"
                    type="submit"
                    value="Submit"
                />
            </form>

        )
    }
}

const mapDispatchToProps = {
    createInfo
}

export default connect(() => ({}), mapDispatchToProps)(RegForm)