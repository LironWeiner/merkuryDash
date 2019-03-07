import React, { Component } from "react";
import Dropdown from "../Dropdown/Dropdown";
import "./Presentation.css";

class Presentation extends Component {
  state = {
    isDropdownVisible: false,
    dropdownList: [
      {
        id: 0,
        text: "Last Year"
      },
      {
        id: 1,
        text: "Last 3 Months"
      },
      {
        id: 2,
        text: "Last Month"
      }
    ],
    selectedListItem: this.props.selectedListItem
  };

  showDropdownHandler = () => {
    this.setState({ isDropdownVisible: !this.state.isDropdownVisible });
  };

  selectListItemHandler = (id) => {
      this.setState({selectedListItem: id , isDropdownVisible: !this.state.isDropdownVisible});
  }

  render() {
    const theStyle = {
      width: this.props.width
    };

    return (
      <div style={theStyle} className="presentationContainer">
        <div className="presentationRow1">
          <h2>{this.props.title}</h2>
          <div className="presentationDropButton">
            <Dropdown
              selectListItemHandler={this.selectListItemHandler}
              selectedListItem={this.state.selectedListItem}
              list={this.state.dropdownList}
              isVisible={this.state.isDropdownVisible}
              showDropdownHandler={this.showDropdownHandler}
            />
          </div>
        </div>
        <div className="presentationRow2">
          <img alt="chart" src={this.props.picture} />
        </div>
      </div>
    );
  }
}
export default Presentation;
