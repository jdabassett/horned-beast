import React from "react";
import Form from "react-bootstrap/Form";

export default class FormElement extends React.Component {
  render() {
    return (
      <>
        <Form.Group className="mb-3">
          <Form.Label>
            Narrow the beasts displayed but how many horns they have:
          </Form.Label>
          <Form.Select onChange={(e) => this.props.setFilteredHorns(e)}>
            <option placeholder="true" value={this.props.uniqueHorns}>
              all
            </option>

            {this.props.uniqueHorns.map((item, index) => (
              <option key={index} value={[item]}>
                {item}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
      </>
    );
  }
}
