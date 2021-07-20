import './widgetSm.scss';
import { Visibility } from '@material-ui/icons';
const WidgetSm = () => {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmItem">
          <img
            src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            alt="user avatar"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">John Doe</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="vibIcon" /> Display
          </button>
        </li>
        <li className="widgetSmItem">
          <img
            src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            alt="user avatar"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">John Doe</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="vibIcon" /> Display
          </button>
        </li>
        <li className="widgetSmItem">
          <img
            src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            alt="user avatar"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">John Doe</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="vibIcon" /> Display
          </button>
        </li>
        <li className="widgetSmItem">
          <img
            src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            alt="user avatar"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">John Doe</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="vibIcon" /> Display
          </button>
        </li>
        <li className="widgetSmItem">
          <img
            src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            alt="user avatar"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">John Doe</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="vibIcon" /> Display
          </button>
        </li>
      </ul>
    </div>
  );
};

export default WidgetSm;
