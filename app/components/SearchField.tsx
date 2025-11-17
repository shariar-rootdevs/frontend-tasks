'use client'

import { Movie } from '@/type' // Apnar Movie type import korben
import { Search } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useDebounce } from '../hook/useDeboucne'
import MovieSearchCard from './MovieSearchCard'

export default function SearchField() {
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | undefined>(undefined)
  const [result, setResults] = useState<Movie[]>([])
  const [searchText, setSearchText] = useState<string>('')

  // Use debounce hook here
  const debouncedSearchText = useDebounce(searchText, 500)

  useEffect(() => {
    if (debouncedSearchText.trim() === '') {
      setResults([])
      setLoading(false)
      setError(undefined)
      return
    }

    const controller = new AbortController()
    async function fetchMovies() {
      setLoading(true)
      setError(undefined)
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=${
            process.env.NEXT_PUBLIC_TMDB_API_KEY
          }&query=${encodeURIComponent(debouncedSearchText)}`,
          { signal: controller.signal }
        )
        if (!response.ok) {
          throw new Error('Failed to fetch movies')
        }
        const data = await response.json()
        setResults(data.results)
      } catch (error) {
        if (error instanceof Error && error.name !== 'AbortError') {
          setError(error.message)
        }
      } finally {
        setLoading(false)
      }
    }

    fetchMovies()

    return () => controller.abort()
  }, [debouncedSearchText])

  return (
    <div className='w-full flex justify-center'>
      <div className='w-full max-w-3xl'>
        {/* Search Box */}
        <div className='relative w-full border border-gray-300 rounded-md bg-white focus-within:border-2 focus-within:border-blue-300'>
          <input
            onChange={e => setSearchText(e.target.value)}
            type='text'
            className='p-2 pr-10 w-full focus:outline-none'
            placeholder='Search movies...'
            aria-label='Search movies'
          />
          <Search className='absolute right-2 top-1/2 -translate-y-1/2 text-gray-500' />
        </div>

        {/* Result Box */}

        {searchText.length > 0 && (
          <div className='w-full bg-white p-3 max-h-[400px] shadow-lg rounded-md overflow-auto mt-2 overflow-y-scroll'>
            {loading && (
              <div className='flex justify-center py-4'>
                <span
                  className='inline-block w-6 h-6 border-4 border-gray-300 border-t-gray-600 rounded-full animate-spin'
                  aria-label='Loading spinner'
                ></span>
              </div>
            )}

            {error && <p className='text-center py-4 text-red-500'>{error}</p>}
            {!loading && !error && searchText.length > 0 && result.length === 0 && (
              <p className='text-center py-4 text-gray-600'>No movies found.</p>
            )}
            <div className='space-y-2'>
              {result.map(movie => (
                <MovieSearchCard
                  key={movie.id}
                  title={movie.title}
                  imageUrl={movie.poster_path}
                  release_date={movie.release_date}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
