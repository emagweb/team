import { Link } from 'react-router-dom'

const Notfoundpage = () => {
  return (
    <div>
      This page doesn't exist. Go <Link to="/team/">home</Link>
    </div>
  )
}

export { Notfoundpage };
