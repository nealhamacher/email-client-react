import axios from 'axios';
import { useState, useEffect } from 'react';
import './App.css';
import Sidebar from './components/sidebar/sidebar.component';
import Body from './components/body/body.component';

function App() {
  const [emails, setEmails] = useState([]);
  const [selected, setSelected] = useState({});
  const [filteredEmails, setFilteredEmails] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  
  useEffect (() => {
    const fetchEmails = async () => {
      const response = await axios.get("https://gist.githubusercontent.com/mrchenliang/15e1989583fd6e6e04e1c49287934c91/raw/ed03cfea1e2edb0303543d2908cd7429ed75580d/email.json");
      setEmails(response.data)
      console.log(response.data)
    };

    fetchEmails();
  }, [])

  useEffect(() => {
    let filtered = [];
    if (searchInput === "") {
      filtered = emails;
    } else {
      filtered = emails.filter(email =>
        email.subject.toLowerCase().includes(searchInput.toLowerCase())
      );
    }
    setFilteredEmails(filtered);
  },[searchInput,emails]);
  
  const handleRead = (id) =>{
    const email = emails.find(email=>email.id === id);
    console.log(email.read);
    email.read = 'true';
    setSelected(email);
    setFilteredEmails([...emails]);
  }

  const handleInput = e => {
    setSearchInput(e.target.value)
  };

  return (
    <div className="App">
      <div className="sidebarview">
        <Sidebar emails={filteredEmails} selected={selected} handleRead={handleRead} 
                 setFilteredEmails={setFilteredEmails} handleInput={handleInput}/>
      </div>
      <div className='bodyview'>
        <Body displayed={selected} />
      </div>
    </div>
  );
}

export default App;
