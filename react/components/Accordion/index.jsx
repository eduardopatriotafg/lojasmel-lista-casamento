import React, { useState } from 'react'
import s from './styles'
import { Collapsible } from 'vtex.styleguide'

const Accordion = ({ list }) => {
  const [current, setCurrent] = useState(0)
  
  return list && list.length > 0 ? (
    <div className={s.wrapper}>
      <h1 className={s.title}>Perguntas Frequentes</h1>
      <div className={s.list}>
        {list.map((item, index) => {
          const idx = index + 1

          return (
            <Collapsible
              header={<div class={s.answer}>{item.question}</div>}
              onClick={() => {
                current === idx ? setCurrent(0) : setCurrent(idx)
              }}
              isOpen={current === idx}
              align="right"
            >
              <div className={s.question}>
                {item.answer}
              </div>
            </Collapsible>
          )
        })}
      </div>
    </div>
  ) : null
}

Accordion.schema = {
  title: 'Perguntas Frequentes',
  type: 'object',
  properties: {
    list: {
      type: 'array',
      title: 'Perguntas',
      description: 'Lista de perguntas',
      default: [
        {
          question: '',
          answer: ''
        }
      ],
      items: {
        type: 'object',
        title: 'Pergunta',
        properties: {
          question: {
            type: 'string',
            title: 'Pergunta'
          },
          answer: {
            type: 'string',
            title: 'Resposta'
          }
        }
      }
    }
  }
}

export default Accordion