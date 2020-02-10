import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const SuccessPage = () => (
    <Layout>
        <SEO title="Success Page"/>
        <div style={{
          display: "flex",
          height: "100vh",
          alignItems: "center",
          flexWrap: "wrap"
        }}>
        <h2 style={{ textAlign:"center", width:"100%" }}>Thank you for Booking!</h2>
      </div>
    </Layout>
)

export default SuccessPage
