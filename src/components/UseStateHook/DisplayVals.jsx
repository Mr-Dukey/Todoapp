import React from 'react'

export default function DisplayVals(props) {
  return (
    <div>
        <h2>Page 2</h2>
        <h1>{props.values}</h1>
    </div>
  )

    // if(props.values === 1){
    //     return(
    //         <div>
    //             <img src="https://tse2.mm.bing.net/th?id=OIP.HLuY60jzx5puuKjbqmWRRwHaEK&pid=Api&P=0&h=180" alt="" />
    //             <h3>Page 1</h3>
    //         </div>
    //     )
    // }
    // if(props.values === 2){
    //     return(
    //         <div>
    //             <img src="https://tse2.mm.bing.net/th?id=OIP.Z7JiQaFe5xBABL7QsL8kSAHaE8&pid=Api&P=0&h=180" alt="" />
    //             <h3>Page 2</h3>
    //         </div>
    //     )
    // }
}
