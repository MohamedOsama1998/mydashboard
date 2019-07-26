import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import OVerlayMenu from "react-overlay-menu";

export default class NotificationMenu extends Component {
  state = {
    isOpen: false
  };

  toggleMenu = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <div>
        <button type="button" onClick={this.toggleMenu}>
          Open menu
        </button>

        <OVerlayMenu
          open={this.state.isOpen}
          onClose={this.toggleMenu}
          right={true}
        >
          <Card style={{ width: "18rem" }}>
            <Card.Header>Featured</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>Cras justo odio</ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
          </Card>
        </OVerlayMenu>
      </div>
    );
  }
}
