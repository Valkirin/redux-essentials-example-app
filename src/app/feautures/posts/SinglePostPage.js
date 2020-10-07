import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

//Реакт роутер передает объект {match} как свойство, содержащее URL, который нам нужен. Когда мы настраиваем маршрут для рендеринга этого компонента, мы собираемся указать ему, чтобы он анализировал вторую часть URL-адреса как переменную с именем postId, и мы можем прочитать это значение из match.params:

export const SinglePostPage = ({ match }) => {
  const { postId } = match.params

  //Получив значение postId, мы можем использовать его внутри функции useSelector, чтобы найти нужный объект post из  store. Мы знаем, что state.posts должен быть массивом всех post-объектов, поэтому мы можем использовать функцию Array.find (), чтобы перебирать массив и возвращать post-запись с ID, который мы ищем:

  const post = useSelector((state) =>
    state.posts.find((post) => post.id === postId)
  )
  //Возможно, у нас может не быть post записи в store - возможно, пользователь попытался ввести URL-адрес напрямую, или у нас не загружены нужные данные. Если это произойдет, функция find () вернет undefined вместо фактического объекта post. Наш компонент должен это проверить и обработать, показывая сообщение "Сообщение не найдено!" на странице:

  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    )
  }

  //То, что должно вернуться, когда все работает:
  return (
    <section>
      <article className="post">
        <h2>{post.title}</h2>
        <p className="post-content">{post.content}</p>
        <Link to={`/editPost/${post.id}`} className="button">
          Edit Post
        </Link>
      </article>
    </section>
  )
}
