import React from 'react'

const header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark"> 
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-crrent="page" href="/">Home</a>
        <a className="nav-link" href="/work">My Work</a>
        <a className="nav-link" href="/interest">Interests And Hobbies</a>
      </div>
    </div>
  </div>
</nav>
  )
}

export default header
