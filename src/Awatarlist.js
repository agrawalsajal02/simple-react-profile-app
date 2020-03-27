import React from 'react'
const Awatarlist=(props)=>{
return (
    <div className="Awatarstyle ma4 bg-light-purple dib pa3 grow shadow-4">
        <img src={`https://joeschmoe.io/api/v1/${props.name}`} alt="Awatar"/>
 <h1 class="tc">{props.name}</h1>
<p>{props.work}</p>
    </div>
)
}

export default Awatarlist