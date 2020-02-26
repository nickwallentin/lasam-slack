import React, { useState, useEffect } from "react"

import styled from "styled-components"

const Hide = ({ children }) => {
  const [input, setInput] = useState("")
  const [correct, setCorrect] = useState(false)
  const code = "testcode"

  useEffect(() => {
    if (input === code) {
      setCorrect(true)
    }
  }, [input])
  return (
    <React.Fragment>
      {correct ? (
        <div>{children}</div>
      ) : (
        <Ghoster>
          <input
            onChange={e => setInput(e.target.value)}
            type="text"
            placeholder="Klistra in koden här"
          />
        </Ghoster>
      )}
    </React.Fragment>
  )
}

const Ghoster = styled.div`
  padding: 15px;
  border-radius: 5px;
  background: #f2f2f2;
  input {
    padding: 5px 10px;
    border-radius: 5px;

    border: none;
  }
`

export default Hide
