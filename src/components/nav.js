import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { ThemeToggler } from "gatsby-plugin-dark-mode"

const Nav = () => {
  const data = useStaticQuery(graphql`
    query NavQuery {
      logo: file(absolutePath: { regex: "/nav-icon.png/" }) {
        childImageSharp {
          fixed(width: 150, height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const navStyle = {
    boxShadow: "var(--navShadow)",
    borderBottom: "var(--navBorder)",
    position: "fixed",
    width: "100%",
    zIndex: "99",
    top: 0,
    borderTop: "4px solid hsl(243, 100%, 70%)",
  }

  const navCont = {
    maxWidth: "650px",
    margin: "auto",
    padding: "0 24px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  }

  return (
    <>
      <nav style={navStyle} className="bg-color">
        <div style={navCont}>
          <Link to="/">
            <Image
              fixed={data.logo.childImageSharp.fixed}
              alt="Yash"
              style={{ height: 72 }}
              id="nav-img"
            />
          </Link>

          <div className="nav-links">
            <ThemeToggler>
              {({ theme, toggleTheme }) => (
                <div id="themeBtn">
                  <input
                    type="checkbox"
                    id="switch"
                    onChange={e =>
                      toggleTheme(e.target.checked ? "dark" : "light")
                    }
                    checked={theme === "dark"}
                  />
                  <label htmlFor="switch">Toggle</label>
                </div>
              )}
            </ThemeToggler>
            <Link to="/" className="navHide">
              Blog
            </Link>
            <Link to="/talks" className="navHide">
              Talks
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Nav
