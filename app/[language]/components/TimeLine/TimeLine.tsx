import "./TimeLine.css";
export function TimeLine() {
  return (
    <div className="timeline">
      <div className="events">
        <div className="event born">
          <svg
            className="marker"
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
          >
            <circle cx="6" cy="6" r="6"></circle>
          </svg>
          <div className="content">
            <time>2003</time>
            <div className="text">
              <p>我出生在福建省</p>
            </div>
          </div>
        </div>
        <div className="event study">
          <svg
            className="marker"
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
          >
            <circle cx="6" cy="6" r="6"></circle>
          </svg>
          <div className="content">
            <time>2022</time>
            <div className="text">
              <p>我考入重庆邮电大学</p>
            </div>
          </div>
        </div>

        <div className="event work">
          <svg
            className="marker"
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
          >
            <circle cx="6" cy="6" r="6"></circle>
          </svg>
          <div className="content">
            <time>2024</time>
            <div className="text">
              <p>我在广州小红书上班</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
