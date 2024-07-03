import React, { useEffect, useState } from 'react'
import BorderCountry from './BorderCountry'

const Border = (props) => {
    let borderStates = []
    console.log(props.listofbordercountries)
    // console.log(props.listofbordercountries)
    // let listing = props.listofbordercountries.split(',')
    // console.log(listing)
    // // console.log(borderState)
    // listing.forEach((country) => {
    //     console.log(country)
        
    // })

    // useEffect(()=>{
    //     listing.forEach((country) => {
    //         fetch(`https://restcountries.com/v3.1/alpha/${country}`)
    //        .then(res => res.json())
    //        .then(data => {
    //         borderStates.push(data[0].name.common)
    //         // console.log(borderStates)
    //     })
    //     },[])
    // })
    
  return (
    <div>
        <p><b>Border Countries : </b></p>
        {/* <BorderCountry name={borderStates}/>    */}
    </div>
  )
}

export default Border
