import { Container, Content, Add } from "./styles"

import { MovieList } from "../../components/MovieList"
import { Scroll } from "../../components/Scroll"
import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"

import { api } from "../../services/api"
import { useState, useEffect } from "react"

import { FiPlus, FiSearch } from "react-icons/fi"

import { Link, useNavigate } from "react-router-dom"

export function Home() {
  const [search, setSearch] = useState("")
  const [notes, setNotes] = useState([])

  const navigate = useNavigate()

  function handleDetails(id) {
    navigate(`/details/${id}`)
  }

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes?title=${search}`)
      setNotes(response.data)
    }

    fetchNotes()
  }, [search])

  return (
    <Container>
      <Header>
        <Input
          type="text"
          placeholder="Pesquisar pelo título"
          icon={FiSearch}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Header>

      <Add>
        <div className="add">
          <h1>Meus Filmes</h1>
          <Link to="/new">
            <Button title="Adicionar Filme" icon={FiPlus} maxWidth="19rem" />
          </Link>
        </div>

        <main>
          <Content>
            <Scroll>
              <section>
                <div className="movie">
                  {notes.map((note) => (
                    <MovieList
                      key={String(note.id)}
                      data={note}
                      onClick={() => handleDetails(note.id)}
                    />
                  ))}
                </div>
              </section>
            </Scroll>
          </Content>
        </main>
      </Add>
    </Container>
  )
}
