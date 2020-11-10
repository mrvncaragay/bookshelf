/** @jsx jsx */
import { jsx } from '@emotion/core'

import { useEffect, useState } from 'react'
import Tooltip from '@reach/tooltip'
import { FaSearch } from 'react-icons/fa'
import { Spinner } from '../../components/Spinner'
import { Input } from '../../components/FormGroup'
import BookList from './components/BookList'
import BookItem from './components/BookItem'
import { client } from '../../utils/apiClient'

export const Discover = () => {
  const [status, setStatus] = useState('idle')
  const [data, setData] = useState(null)
  const [query, setQuery] = useState('')
  const [queried, setQueried] = useState(false)

  const isLoading = status === 'loading'
  const isSuccess = status === 'success'

  useEffect(() => {
    if (!queried) {
      return
    }
    setStatus('loading')
    client(`books?query=${encodeURIComponent(query)}`).then(responseData => {
      setData(responseData)
      setStatus('success')
    })
  }, [query, queried])

  function handleSearchSubmit(event) {
    event.preventDefault()
    setQueried(true)
    setQuery(event.target.elements.search.value)
  }

  return (
    <div
      css={{ maxWidth: 800, margin: 'auto', width: '90vw', padding: '40px 0' }}
    >
      <form onSubmit={handleSearchSubmit}>
        <Input
          placeholder="Search books..."
          id="search"
          css={{ width: '100%' }}
        />
        <Tooltip label="Search Books">
          <label htmlFor="search">
            <button
              type="submit"
              css={{
                border: '0',
                position: 'relative',
                marginLeft: '-35px',
                background: 'transparent',
              }}
            >
              {isLoading ? <Spinner /> : <FaSearch aria-label="search" />}
            </button>
          </label>
        </Tooltip>
      </form>

      {isSuccess ? (
        data?.books?.length ? (
          <BookList css={{ marginTop: 20 }}>
            {data.books.map(book => (
              <li key={book.id}>
                <BookItem key={book.id} book={book} />
              </li>
            ))}
          </BookList>
        ) : (
          <p>No books found. Try another search.</p>
        )
      ) : null}
    </div>
  )
}
