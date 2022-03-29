import { Link } from "react-router-dom"
import * as C from './MenuStyled'

export const Menu = () => {

  return (
    <C.Menu>
      <ul>
        <Link className="link" to={'/'}>
          <li>Home</li>
        </Link>
        <Link className="link" to={'/desafio'}>
          <li>Desafio</li>
        </Link>
      </ul>
    </C.Menu>
  )
}