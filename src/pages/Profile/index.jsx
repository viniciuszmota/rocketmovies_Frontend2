import { Container, Form, Avatar } from "./styles"

import { useNavigate } from "react-router-dom"
import { useState } from "react"

import { FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi"

import avatarPlaceholder from "../../assets/avatar-pink.svg"
import { useAuth } from "../../hooks/auth"
import { api } from "../../services/api"

import { ButtonText } from "../../components/ButtonText"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"

import { Link } from "react-router-dom"

export function Profile() {
  const { user, updateProfile } = useAuth()

  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [passwordOld, setPasswordOld] = useState()
  const [passwordNew, setPasswordNew] = useState()

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder

  const [avatar, setAvatar] = useState(avatarUrl)
  const [avatarFile, setAvatarFile] = useState(null)

  const navigate = useNavigate()

  async function handleUpdate(event) {
    event.preventDefault()
    const updated = {
      name,
      email,
      password: passwordNew,
      old_password: passwordOld,
    }

    const userUpdated = Object.assign(user, updated)

    await updateProfile({ user: userUpdated, avatarFile })
  }

  function handleChangeAvatar(event) {
    const file = event.target.files[0]
    setAvatarFile(file)

    const imagePreview = URL.createObjectURL(file)
    setAvatar(imagePreview)
  }

  function handleBack() {
    navigate(-1)
  }

  return (
    <Container>
      <header>
        <Link onClick={handleBack}>
          <div className="header">
            <ButtonText title="Voltar" />
          </div>
        </Link>
      </header>

      <Form>
        <Avatar>
          <img src={avatar} alt={user.name} />

          <label htmlFor="avatar">
            <FiCamera />

            <input id="avatar" type="file" onChange={handleChangeAvatar} />
          </label>
        </Avatar>

        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
          onChange={(e) => setName(e.target.value)}
        />

        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          placeholder="Senha atual"
          type="password"
          icon={FiLock}
          onChange={(e) => setPasswordOld(e.target.value)}
        />

        <Input
          placeholder="Senha nova"
          type="password"
          icon={FiLock}
          onChange={(e) => setPasswordNew(e.target.value)}
        />

        <Button title="Salvar" onClick={handleUpdate} />
      </Form>
    </Container>
  )
}
