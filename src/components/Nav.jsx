import React from "react"
import './Nav.css'

export default function Nav() {
    return(
        <nav className='nav'>
        <ul>
          <li>
            <a>profile</a>
          </li>
          <li>
            <a>messages</a>
          </li>
          <li>
            <a>news</a>
          </li>
          <li>
            <a>music</a>
          </li>
          <li>
            <a>settings</a>
          </li>
        </ul>
      </nav>
    )
}