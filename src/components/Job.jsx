import { Row, Col, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

const Job = ({ data }) => {
  return (
    <Row
      className="mx-0 mt-3 p-3  "
      style={{ border: "1px solid #00000033", borderRadius: 4 }}
    >
      <Col xs={4}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>{" "}
        <Button className=" ms-2 p-1 rounded-4">Add pref</Button>
      </Col>

      <Col xs={4}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
    </Row>
  )
}

export default Job
