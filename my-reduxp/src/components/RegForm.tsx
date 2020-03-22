import React from 'react'


export interface InputForm {
    name: string
    arrNames: Array<string>
}

export class RegForm extends React.Component<{}, InputForm>{
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(props: {}) {
        super(props)
        this.state = {
            name: '',
            arrNames: []
        };


        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event: any) {
        this.setState({ name: event.target.value });
    }

    handleSubmit(event: any) {
        event.preventDefault();
        this.setState({
            name: '',
            arrNames: [...this.state.arrNames, this.state.name]
        })
        console.log('Отправленное имя: ' + this.state.name);
    }
    render() {
        return (
            <form onSubmit={(event) => this.handleSubmit(event)}>
                <label>Enter Your name</label>
                <input type="text"
                    className="form-control"
                    value={this.state.name}
                    id="validationDefault01"
                    placeholder="name"
                    required
                    onChange={this.handleChange}
                />

                <input className="btn btn-primary"
                    type="submit"
                    value="Submit"
                />
            </form>

        )
    }
}