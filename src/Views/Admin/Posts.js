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

import { connect } from 'react-redux'
import * as actionType from '../../store/index'

class Forms extends Component {
  constructor(props) {
    super(props);
    
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
                  <Input type="text" id="title" placeholder="Enter your title name" value={this.props.title} onChange={this.props.onEnterTitle} />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="subject">Subject</Label>
                  <Input type="text" id="subject" placeholder="Enter your subject" value={this.props.subject} onChange={this.props.onEnterSubject}/>
                </FormGroup>
                <FormGroup >
                  <Label htmlFor="details">Details</Label>
                  <Input type="textarea" name="details" id="details" rows="9" value={this.props.details} onChange={this.props.onEnterDetails}
                    placeholder="Details..." />
                </FormGroup>
                <FormGroup row >
                  <Col md="6">
                    <Label htmlFor="date">Date</Label>
                    <Input type="date" id="date" name="date" placeholder="Date" value={this.props.date} onChange={this.props.onEnterDate}/>
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

const mapStateToProps = state => {
  return {
    title: state.redFst.title,
    subject: state.redFst.subject,
    details: state.redSnd.details,
    date: state.redSnd.date,
  }
}

const mapDispatchToProps = dispatch =>{
  return{
    onEnterTitle: () => dispatch(actionType.title()),
    onEnterSubject: () => dispatch(actionType.subject()),
    onEnterDetails: () => dispatch(actionType.details("DETAILS")),
    onEnterDate: () => dispatch(actionType.date("DATE"))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Forms);
