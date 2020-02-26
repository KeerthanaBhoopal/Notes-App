import React from 'react'
import {BrowserRouter,Route,Link,Switch} from 'react-router-dom'
import {NavItem, NavLink, Nav, Breadcrumb, BreadcrumbItem } from 'reactstrap'
//npm install bootstrap
//import 'bootstrap/dist/css/bootstrap.css'

import Home from './components/Home'
import Login from './components/Users/Login'
import Register from './components/Users/Register'

import NotesList from './components/Notes/List'
import NoteNew from './components/Notes/New'
import NotesShow from './components/Notes/Show'
import NotesEdit from './components/Notes/Edit'

import CategoryList from './components/Categories/List'
import CategoryShow from './components/Categories/Show'
import CategoryEdit from './components/Categories/Edit'

function App(props){
  const handleLogout = () => {
    localStorage.removeItem('authToken')
    window.location.href = '/users/login'
    // return (
    //  <Redirect to="/account/login"/>
    // ) < does not work
  }

    return(
  <BrowserRouter>
  <div className="container">
  {/* <h1>Notes - App</h1> */}
    <Breadcrumb>
        <BreadcrumbItem><a href="/">Notes-App</a></BreadcrumbItem>
    </Breadcrumb>
  {/* <Link to="/"><Button outline color="info">Notes-App</Button>{' '}</Link> */}
  {
    localStorage.getItem('authToken') ? (
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink href="/notes">Notes</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/category">Categories</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" onClick={handleLogout}>Logout</NavLink>
          </NavItem>
        </Nav>
        {/* <Link to="/notes">Notes</Link>
        <Link to="/category">Categories</Link>
        <Link to="#" onClick={handleLogout}>Logout</Link> */}
      </div>
    ) : (
      <div>
        <Nav tabs>
          <NavItem>
              <NavLink href="/users/login">Login</NavLink>
          </NavItem>
          <NavItem>
              <NavLink href="/users/register">Register</NavLink>
          </NavItem>
        </Nav>
        {/* <Link to="/users/login">Login</Link>
        <Link to="/users/register">Register</Link> */}
      </div>
    )
  }

  <Switch>
    <Route path="/" component={Home} exact />
    <Route path="/users/register" component={Register} />
    <Route path="/users/login" component={Login} />

    <Route path="/notes" component={NotesList} exact={true}/>
    <Route path="/notes/new" component={NoteNew} exact={true}/>
    <Route path="/notes/:id" component={NotesShow} exact={true}/>
    <Route path="/notes/edit/:id" component={NotesEdit} exact={true}/>
    <Route path="/category" component={CategoryList} exact={true}/>
    <Route path="/category/:id" component={CategoryShow} exact={true}/>
    <Route path="/category/edit/:id" component={CategoryEdit} exact={true}/>
  </Switch>
  </div>
  </BrowserRouter>
    )}
export default App