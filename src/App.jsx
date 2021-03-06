import { useState, useEffect} from 'react'
import './App.css'

import ChatListItem from './components/ChatListItem.jsx'

import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search'


function App() {
  
   const [chatList, setChatList] = useState([{},{},{},{},{},{},{},{},{},{},{},{},]);

return (
    <div className="app-window">
       <div className="sidebar">

           <header>
              <img className="header-avatar" src="https://thumbs.dreamstime.com/b/imagem-do-avatar-perfil-no-fundo-cinzento-142213585.jpg" alt="" />
              <div className="header-buttons"> 
                  <div className="header-btn">
                        <DonutLargeIcon style={{color: '#919191'}}/>
                  </div>
                  <div className="header-btn">
                        <ChatIcon style={{color: '#919191'}}/>
                  </div>
                  <div className="header-btn">
                        <MoreVertIcon style={{color: '#919191'}}/>
                  </div>
              </div>
           </header>

           <div className="search">
               <div className="search-input">
                     <SearchIcon fontSize='small' style={{color:'#919191'}} />
                     <input type="search" placeholder="Procurar ou começar uma nova conversa" name="" id="" />
               </div>
           </div>
           
           <div className="chat-list">
               {chatList.map((item, key)=>
                  <ChatListItem  key={key}/>
               )}
           </div>

        </div>
       <div className="contentarea" >
          ...
       </div>
    </div>
  )
}

export default App
