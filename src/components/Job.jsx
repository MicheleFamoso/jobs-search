import { Row, Col, Button } from "react-bootstrap"
import { Link } from "react-router-dom"

import { useDispatch } from "react-redux"

const Job = ({ data }) => {
  const dispatch = useDispatch()
  return (
    <Row
      className="mx-0 mt-3 p-3  bg-body-secondary bg-gradient "
      style={{ border: "1px solid #00000033", borderRadius: 20 }}
    >
      <Col xs={6}>
        <Link className=" text-decoration-none" to={`/${data.company_name}`}>
          {data.company_name} {console.log(typeof data.company_name)}
        </Link>
        <Button
          className=" ms-2 p-1 rounded-4"
          onClick={() => {
            dispatch({
              type: "ADD_PREF",
              payload: data.company_name,
            })
          }}
        >
          *
        </Button>
      </Col>

      <Col xs={6}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
    </Row>
  )
}

export default Job
