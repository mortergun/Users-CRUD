import './styles/UserCard.css'

const UserCard = ({ user, deleteUserById, setUpdateInfo, handleOpenForm }) => {
  
  const handleDelete = () => {
    deleteUserById('/users', user.id)
  }

  const handleUpdate = () => {
    setUpdateInfo(user)
    handleOpenForm()
  }

  return (
    <article className="user">
      <section className="user__body">
        <h2 className="user__name">{`${user.first_name} ${user.last_name}`}</h2>
        <hr className="user__line"/>
        <ul className="user__list">
          <li className="user__item">
            <span className="user__label">Email</span>
            <span className="user__item-value">{user.email}</span>
          </li>
          <li className="user__item">
            <span className="user__label">Birthday</span>
            <span className="user__item-value"><i className='bx bx-gift'></i> {user.birthday}</span>
          </li>
        </ul>
        <hr className="user__line"/>
        <footer className="user__footer">
          <button id="trash" onClick={handleDelete}><i className='bx bx-trash'></i></button>
          <button id="edit" onClick={handleUpdate}><i className='bx bx-edit' ></i></button>
        </footer>
      </section>
    </article>
  )
}

export default UserCard