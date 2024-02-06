const AlertMessage = ({ message, clas }) => {
    return (
      <div className={clas} style={{
                    border: '1px solid #000',
                    margin: '10px',
                    width: '500px', 
                    backgroundColor: 'red',
                    color: 'white'
                    
                }}>
        Emeliyyatin veziyyeti: {message}

      </div>
    );
  }
  export default AlertMessage;