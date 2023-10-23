import React from 'react'
import Title from '../../../components/Forms/Title/Title'
import TitleWithGrid from '../../../components/Forms/Title/TitleWithGrid'
import TreeChart from '../../../components/TreeChart'

const Test = () => {
  return (
    <div>
        <TreeChart object={{
          name:"root",
          children:[
            {
              name:"لورم ایپسوم متن ساختگی با تولید سادگی ",
              children:[
                {
                  name:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت ",
                  children:[]
                }
              ]
            }
          ]
        }}/>
    </div>
  )
}

export default Test