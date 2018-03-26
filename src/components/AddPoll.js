import React from 'react';

class AddPoll extends React.Component {
    state = {
        question: '',
        a: '',
        b: '',
        c: '',
        d: '',
    }

    handleChange = (event) => {
        const {name, value} = event.target;

        this.setState(()=>({[name]: value}));
    }
    handleSubmit = (event) => {
        event.preventDefault();
        // inform that your question is ok to append in the List of all question
        console.log(this.state);
        // dispatch this add poll event to store (authedUser, polls)
    }
    isDisable = () => {
        let { question, a, b, c, d } = this.state;
        return (question && a && b && c && d) ? true : false;
    }
    render () {
        let { question, a, b, c, d } = this.state;
        return (
            <div>
                <form className="add-form" onSubmit={this.handleSubmit}>
                    <h3 style={{marginBottom: 5}}>What is your question ?></h3>
                    <input type="text" value={question} onChange={this.handleChange} name="question" className="input"/>

                    <h3>What the the options ?></h3>
                    <label className="label" htmlFor="a">A.</label>
                    <input type="text" value={a} onChange={this.handleChange} name="a" className="input" id="a"/>

                    <label className="label" htmlFor="a">B.</label>
                    <input type="text" value={b} onChange={this.handleChange} name="b" className="input" id="b"/>

                    <label className="label" htmlFor="a">C.</label>
                    <input type="text" value={c} onChange={this.handleChange} name="c" className="input" id="c"/>

                    <label className="label" htmlFor="a">D.</label>
                    <input type="text" value={d} onChange={this.handleChange} name="d" className="input" id="d"/>

                    <button disabled={!this.isDisable()} className="btn" type="submit" >Submit</button>
                </form>
            </div>
        )
    }
}
export default AddPoll;