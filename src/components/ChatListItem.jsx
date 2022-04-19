import React from "react";
import './ChatListItem.css';

const ChatListItem = ()=>{
    return(
        <div className="chatListItem">
            <img className="chatListItem-avatar" src="https://thumbs.dreamstime.com/b/imagem-do-avatar-perfil-no-fundo-cinzento-142213585.jpg" alt="" />
            <div className="chatListItem-lines">
                <div className="chatListItem-line">
                    <div className="chatListItem-name">Fabiano</div>
                    <div className="chatListItem-date">18:30</div>
                </div>
                <div className="classListItem-line">
                    <div className="chatListItem-lastMsg">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam corrupti molestiae ad veniam, rerum obcaecati tempora dolorum? Necessitatibus labore enim nostrum, modi possimus laborum ex eveniet maiores facilis obcaecati corporis.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChatListItem;
