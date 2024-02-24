const Notification = ({ message, alert }) => {
    if (message === null) {
      return null
    }
    if (alert){
      return (
        <div className="alert">
          {message}
        </div>
      )
    }
    return (
      <div className="notification">
        {message}
      </div>
    )
  }

export default Notification