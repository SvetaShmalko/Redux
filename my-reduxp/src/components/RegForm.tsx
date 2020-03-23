import React from 'react'

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

    handleChange(event: any) {
        this.setState({ name: event.target.value },
            () => console.log(this.state)
        );
    }

    handleSubmit(event: any) {
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