import '../components/RepoListing.css'
import React from 'react'
function RepoListing({ language, repos }) {
    if (!repos || repos.length == 0) return null;
    return (
      <div  className="main">
          <div className="card_content">
        <h1 style={{textAlign: 'center'}}>{language}</h1>
        <ul className="cards">
          {repos.map(repo => {
            return (
              <li key={repo.id}>
                <ul>
                  <li  >
                    <a href={repo.html_url}>{repo.name}</a>
                  </li>
                  <li  >
                    @{repo.owner.login}
                  </li>
                  <li >
                    {repo.stargazers_count} stars
                  </li>
                </ul>
              </li>
            )
          })}
        </ul>
        </div>
      </div>
    );      
  }
  export default RepoListing;