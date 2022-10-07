import { ChangeEvent, FormEvent, useState } from "react";
import styles from "./index.module.css";
import { Comment } from "../Comment";
import { Avatar } from "../Avatar";
import { format, formatDistanceToNow } from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR'

interface Author {
  name: string;
  role: string;
  avatarUrl: string;
}

interface Content {
  type: string;
  content: string;
}

interface PostProps {
  author: Author;
  content: Content[];
  publishedAt: string;
}

export function Post({author, content, publishedAt}: PostProps) {
  const [comments, setComments] = useState(["Que legal, adorei sua postagem!"]);
  const [newComment, setNewComment] =useState('')

  const publishDateFormatted = format(
    new Date(publishedAt), "d 'de' LLLL 'ás' HH:mm'h' ", {
      locale: ptBr,
    }
  );

  const publishDateRelativeToNow = formatDistanceToNow(
    new Date(publishedAt), {
      locale: ptBr,
      addSuffix: true,
    }
  )

 function handleCreateNewComment(e: FormEvent) {
  e.preventDefault();
  setComments([...comments, newComment] );

  setNewComment('')
 }

 function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
  setNewComment(event.target.value);
 }

 function deleteComment(commentToDelete: string) {
  const newCommentWithoutDelete = comments.filter(comment => {
    return comment !== commentToDelete;
  });

  setComments(newCommentWithoutDelete);
 }
  
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.profile}>
          <Avatar hasBorder={true} src={author.avatarUrl}/>
          <div className={styles.description}>
            <strong>{author.name}</strong>
            <span>
              {author.role}
            </span>
          </div>
        </div>

        <time title={publishDateFormatted} dateTime={new Date(publishedAt).toISOString()}>
          Publicado {publishDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
       {content.map(line => {
        switch (line.type) {
          case 'paragraph': 
          return <p>{line.content}</p>;
          case 'link': 
          return <p><a href="#">{line.content}</a></p>
          default:
          return ""
        }
       })}
      </div>

      <form onSubmit={handleCreateNewComment}>
        <strong>Deixe seu feedback</strong>

        <textarea value={newComment} onChange={handleNewCommentChange}placeholder="Deixe um comentário" />

        <button type="submit">Publicar</button>
      </form>

      <div className={styles.comments}>
        {comments.map((comment) => {
          return (<Comment 
            deleteComment={deleteComment} 
            content={comment} />)
        })}
      </div>
    </article>
  );
}
