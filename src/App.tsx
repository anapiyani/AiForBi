import "./App.css";

const App = () => {
  return (
    <div id="content">
      <div id="video-wrapper">
        <div>
          <video
            id="idle-video-element"
            width="400"
            height="400"
            autoPlay
            loop
            style={{ opacity: 1 }}
          ></video>
          <video
            id="stream-video-element"
            width="400"
            height="400"
            autoPlay
            style={{ opacity: 0 }}
          ></video>
        </div>
      </div>
      <br />

      <div className="textfield">
        <input type="text" id="input-send" />
        <button type="button" id="read-button">
          Read
        </button>
      </div>

      <div className="add-auto-file">
        <input type="file" id="file" />
        <button type="button" id="send-button-audio">
          Send
        </button>
      </div>

      <div id="buttons">
        <button id="connect-button" type="button">
          Connect
        </button>
        <button id="destroy-button" type="button">
          Destroy
        </button>
      </div>

      <div id="status">
        ICE gathering status: <label id="ice-gathering-status-label"></label>
        <br />
        ICE status: <label id="ice-status-label"></label>
        <br />
        Peer connection status: <label id="peer-status-label"></label>
        <br />
        Signaling status: <label id="signaling-status-label"></label>
        <br />
        Last stream event: <label id="stream-event-label"></label>
        <br />
        Streaming status: <label id="streaming-status-label"></label>
        <br />
      </div>

      <div id="react-root"></div>
    </div>
  );
};

export default App;
