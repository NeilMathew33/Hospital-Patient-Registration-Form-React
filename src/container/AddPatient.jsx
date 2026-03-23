import React from 'react'
import PatientNavBar from './PatientNavBar'

const  AddPatient= () => {
  return (
    <div>
        <PatientNavBar />
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Patient Name</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Patient ID</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Age</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Gender</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Blood Group</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Phone Number</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Email Address</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Address</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">City</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">State</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Emergency Contact Name</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Emergency Contact Number</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Symptoms Description</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Doctor Assigned</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Date of Appointment</label>
                            <input type="date" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddPatient