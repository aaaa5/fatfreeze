import React from "react"

export default () => (
  <form
    name="contact"
    method="post"
    action="/success"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
  > 
    <h3>REQUEST AN APPOINTMENT</h3>
    <input type="hidden" name="bot-field" />
    <div>
      <label htmlFor="FirstName">First Name</label>
      <input type="text" name="FirstName" id="FirstName" required/>
    </div>
    <div>
      <label htmlFor="LastName">Last Name</label>
      <input type="text" name="LastName" id="LastName" required/>
    </div>
    <div>
      <label htmlFor="email">Email</label>
      <input type="text" name="email" id="email" required/>
    </div>
    <div>
      <label htmlFor="phone">Phone</label>
      <input type="text" name="phone" id="phone" required/>
    </div>
    <div>
      <label htmlFor="location">Select Location</label>
      <select name="location" required  >
        <option value="" selected="selected">-</option>
        <option value="Downtown NYC Location">Downtown NYC Location</option>
        <option value="Central Park South Location">Central Park South Location</option>
        <option value="Hewlett Long Island">Hewlett Long Island</option>
      </select>
    </div>
    <div>
      <input type="submit" value="MAKE AN APPOINTMENT" />
    </div>
  </form>
)