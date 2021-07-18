import './sidebar.scss';
import {
  LineStyle,
  Timeline,
  TrendingUp,
  People,
  Error,
  Euro,
  Gavel,
  Report,
  Store,
  Mail,
  Message,
  DynamicFeed,
  Work,
} from '@material-ui/icons';
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
              Home
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              Sales
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem ">
              <People className="sidebarIcon" />
              Users
            </li>
            <li className="sidebarListItem">
              <Store className="sidebarIcon" />
              Products
            </li>
            <li className="sidebarListItem">
              <Euro className="sidebarIcon" />
              Transactions
            </li>
            <li className="sidebarListItem">
              <Report className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem ">
              <Mail className="sidebarIcon" />
              Mail
            </li>
            <li className="sidebarListItem">
              <DynamicFeed className="sidebarIcon" />
              Feedback
            </li>
            <li className="sidebarListItem">
              <Message className="sidebarIcon" />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem ">
              <Work className="sidebarIcon" />
              Manage
            </li>
            <li className="sidebarListItem">
              <Gavel className="sidebarIcon" />
              Rules
            </li>
            <li className="sidebarListItem">
              <Error className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
