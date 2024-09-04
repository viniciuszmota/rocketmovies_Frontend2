/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../hooks/auth"

import { api } from "../../services/api"

import { Container, Profile, Logout } from "./styles"

import avatarPlaceholder from "../../assets/avatar-pink.svg"

import { Input } from "../Input"

import { Link } from "react-router-dom"

export function Header({ children }) {
  const { signOut, user } = useAuth()
  const navigation = useNavigate()

  function handleSignOut() {
    navigation("/")
    signOut()
  }

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder

  return (
    <Container>
      <div className="header">
        <h1>RocketMovies</h1>

        <Input placeholder="Pesquisar pelo título"></Input>

        <div className="profile">
          <div className="name-logout">
            <strong>{user.name}</strong>
            <Logout onClick={handleSignOut}>sair</Logout>
          </div>

          <Link to="/profile">
            <Profile>
              <img src={avatarUrl} alt={user.name} />
            </Profile>
          </Link>
        </div>
      </div>
    </Container>
  )
}
