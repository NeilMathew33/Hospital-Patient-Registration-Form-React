import React from 'react'

const PatientNavBar = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-success">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Student App</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="/Add">Add Patient</a>
        <a class="nav-link" href="/search">Search Patient</a>
        <a class="nav-link" href="/delete">Delete Patient</a>
        <a class="nav-link" href="/ViewAll">View All Patients</a>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default PatientNavBar