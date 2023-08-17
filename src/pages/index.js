import * as React from "react"
import Layout from "./components/Layout"
import './styles/global.css'

export default function Home() {
  return (
    <Layout>
   <section>
    <div >
      <h1 className="text-lg font-bold  text-center uppercase mt-24">Hi my name is Suhaib Ali Ahmed</h1>
      
      <p className="mt-4 leading-6 text-center">Am a Software Developer and also an upcoming UI/UX Designer</p>
    </div>
   </section>
  </Layout>
  )
}
