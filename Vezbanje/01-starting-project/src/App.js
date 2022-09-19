import React, {useState} from 'react';

import AddUser from './Components/Users/AddUser';
import UsersList from './Components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);                            //stavljamo prazan niz za pocetak

  const addUserHandler = (uName, uAge) => {                                  //funkcija koje se pokrece iz <AddUser onAddUser={addUserHandler}/> koja ima 2 argumenta, ime i godine
    setUsersList((prevUsersList) => {                                        //pravimo novu listu tako da uzimamo proslu listu 
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },            //i na staru listu dodajemo novo ime i godinu, gde svaki ima svoj random id
      ];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;