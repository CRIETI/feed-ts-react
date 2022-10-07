import { useState } from "react";
import styles from "./index.module.css";

import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "../Avatar";

interface CommentProps{
  content: string;
  deleteComment: (content: string) => void;
}

export function Comment({content, deleteComment}: CommentProps) {
  const [likes, setLikes] = useState(0);
  
  function handleDeleteComment() {
    deleteComment(content);
  }

  function handleNewLike() {
    setLikes(likes + 1);
  }
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1021&q=80"/>

      <div className={styles.commentArea}>
        <div className={styles.content}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Wade Warren</strong>
              <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:00">
                Comentado há 1h
              </time>
            </div>

            <button title="Deletar comentário" onClick={handleDeleteComment}>
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleNewLike} >
          {/* <button onClick={() => setLikes(likes+1)} > */}
            <ThumbsUp />
            <span> {likes}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
