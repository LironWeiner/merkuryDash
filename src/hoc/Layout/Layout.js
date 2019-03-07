import React, { Component } from "react";
import SideMenu from "../../Components/SideMenu/SideMenu";
import Navbar from "../../Components/Navbar/Navbar";
import Presentation from "../../Components/Presentation/Presentation";
import InfoCard from "../../Components/InfoCard/InfoCard";
import chartIcon from "../../Icons/charticon.png";
import graphIcon from "../../Icons/graphicon.png";
import {
  tasksBadges,
  messagesBadges,
  activityBadges
} from "../../data/badgesData";
import { activities } from "../../data/activityData";
import { messages } from "../../data/messagesData";
import { tasks } from "../../data/tasksData";
import { TYPES } from "../../Components/InfoCardItem/InfoCardItem";
import "./Layout.css";

class Layout extends Component {
  state = {
    isSideMenuVisible: false
  };

  openSideMenuHandler = () => {
    this.setState({ isSideMenuVisible: !this.state.isSideMenuVisible });
  };

  render() {
    return (
      <div className="layoutContainer">
        <SideMenu isVisible={this.state.isSideMenuVisible} />
        <div className="contentContainer">
          <header>
            <Navbar
              openSideMenuHandler={this.openSideMenuHandler}
              isVisible={this.state.isSideMenuVisible}
            />
          </header>
          <div className="title">
            <h1>{this.props.welcome}</h1>
          </div>
          <main className="mainContainer">
            <div className="listItem1">
              <Presentation
                width="500px"
                title="Your Sales"
                picture={chartIcon}
                selectedListItem={0}
              />
            </div>
            <div className="listItem2">
              <Presentation
                title="Report"
                picture={graphIcon}
                selectedListItem={0}
              />
            </div>
            <div className="mainContainerRow2">
              <div className="listItem3">
                <InfoCard
                  typeOfCard={TYPES.TASKS}
                  cardTitle="Tasks"
                  badges={tasksBadges}
                  data={tasks}
                />
              </div>
              <div className="listItem4">
                <InfoCard
                  typeOfCard={TYPES.MESSAGES}
                  cardTitle="Messages"
                  badges={messagesBadges}
                  data={messages}
                />
              </div>
              <div className="listItem5">
                <InfoCard
                  typeOfCard={TYPES.ACTIVITY}
                  cardTitle="Activity"
                  badges={activityBadges}
                  data={activities}
                />
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }
}
export default Layout;
