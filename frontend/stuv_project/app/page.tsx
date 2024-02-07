import React from "react"
import Search from "./components/Chatbot/Chatbot"
import Output from "./components/Output/Output"
import Layout from "./components/Layout/layout"
import Chatbot from "./components/Chatbot/Chatbot"

export default function Home() {
  return (
    <main>
      {
        <div>  
          <Layout>
          <Chatbot />
          <div className="py-2"></div>
          <Output />
          </Layout>
        </div>
      }
    </main>
  )
}
