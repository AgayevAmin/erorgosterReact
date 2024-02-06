
import './App.css';
import AlertMessage from './components/Form';

function App() {
  const alertMessages = [
    {
      alert: "success",
      message: "VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUgurlu emeliyyatVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV ",
      clas:"succes"
    },
    {
      alert: "error",
      message: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXEmeliyyat ugursuz olduXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX ",
      clas:"error"
    },
    {
      alert: "info",
      message: "Emeliyyat davam edir...",
      clas:"info"
    }
  ];



  return (
  <>
        {alertMessages.map((alertMessage) => (
        <AlertMessage
          message={alertMessage.message}
          clas={alertMessage.clas}
        
        />
      ))}
  </>
    


  );
}

export default App;
