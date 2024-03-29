import { Link, useNavigate } from 'react-router-dom'
import { Container } from '../../components/Container/Container'
import { MENU_PATHS } from '../../const'
import { useBooksByUser } from '../../hooks/useTopReaders'
import { BookCard } from '../../components/BookCard/BookCard'

import placeholderImage from '../../assets/profile-placeholder.png'

import './styles.css'

export const MyProfile: React.FC = () => {
  const email = JSON.parse(localStorage.getItem('user') ?? '')?.email
  const { booksByUser } = useBooksByUser({ userId: '1' })

  const navigate = useNavigate()

  const handleLogout = (): void => {
    localStorage.removeItem('user')
    navigate(MENU_PATHS.HOME)
  }

  return (
    <Container className='my-profile'>
      <div className='my-profile'>
        <img
          src={placeholderImage}
          alt="user avatar"
        />
        <h1>{email}</h1>
        <button className='link-button' type='button' onClick={handleLogout}>Cerrar sesión</button>
      </div>
      <h2>Mis Libros</h2>
      <ul className=''>
        {booksByUser.map(book =>
          <BookCard
            key={book.id}
            book={book}
          >
            <button
              className='icon-button'
              type='button'
            >
              🗑️
            </button>
          </BookCard>
        )}
      </ul>

      <Link className='float-button' to={MENU_PATHS.REGISTER_BOOK}>
        +
      </Link>

    </Container>
  )
}
