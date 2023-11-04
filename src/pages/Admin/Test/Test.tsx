import TreeChart from '../../../components/TreeChart'

const Test = () => {
  return (
    <div>
        <TreeChart object={{
          fullName:"root",
          children:[
            {
              fullName:"لورم ایپسوم متن ساختگی با تولید سادگی ",
              children:[
                {
                  fullName:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت ",
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