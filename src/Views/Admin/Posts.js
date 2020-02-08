import React, { Component } from 'react';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  FormGroup,
  Input,
  Label,
  Row,
} from 'reactstrap';

class Forms extends Component {
  constructor(props) {
    super(props);
    this.changeValue = this.changeValue.bind(this);
    this.state = {
      subject:""
    };
  }

  changeValue(event){
    this.setState({subject: event.target.value})
  }


  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="12" >
            <Card>
              <CardHeader>
                <strong>Posts</strong>
                <small> Form</small>
              </CardHeader>
              <CardBody>
                <FormGroup>
                  <Label htmlFor="title">Title</Label>
                  <Input type="text" id="title" placeholder="Enter your title name" value={this.state.subject} onChange={this.changeValue} />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="subject">Subject</Label>
                  <Input type="text" id="subject" placeholder="Enter your subject" />
                </FormGroup>
                <FormGroup >
                  <Label htmlFor="details">Details</Label>
                  <Input type="textarea" name="details" id="details" rows="9"
                    placeholder="Details..." />
                </FormGroup>
                <FormGroup row >
                  <Col md="6">
                    <Label htmlFor="date">Date</Label>
                    <Input type="date" id="date" name="date" placeholder="Date" />
                  </Col>
                  <Col md="6">
                    <Label>Status</Label>
                    <FormGroup check className="checkbox">
                      <Input className="form-check-input" type="checkbox" id="status" name="status" value="isActive" />
                      <Label check className="form-check-label" htmlFor="checkbox1">Active</Label>
                    </FormGroup>
                  </Col>
                </FormGroup>
              </CardBody>
              <CardFooter>
                <FormGroup  >
                  <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Submit</Button>
                </FormGroup>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Forms;
