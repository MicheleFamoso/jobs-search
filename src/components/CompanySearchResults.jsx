import { useEffect, useState } from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
import Job from "./Job"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"

const CompanySearchResults = () => {
  const [jobs, setJobs] = useState([])
  const params = useParams()

  const listOfCompany = useSelector((state) => {
    return state.pref.company.length
  })

  const baseEndpoint =
    "https://strive-benchmark.herokuapp.com/api/jobs?company="

  useEffect(() => {
    getJobs()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getJobs = async () => {
    try {
      const response = await fetch(baseEndpoint + params.company)
      if (response.ok) {
        const { data } = await response.json()
        setJobs(data)
      } else {
        alert("Error fetching results")
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container>
      <Row sm={1}>
        <Col className=" d-flex flex-row-reverse">
          <Button>Pref:{listOfCompany} </Button>
        </Col>
      </Row>
      <Row>
        <Col className="my-3">
          <h1 className="display-4">Job posting for: {params.company}</h1>
          {jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  )
}

export default CompanySearchResults
