import React from 'react';
import './App.css';
import './components/Languages'
import { render } from 'react-dom';
import Languages from './components/Languages';
import Loading from './components/Loading';
import RepoGrid from './components/RepoGrid';
import  RepoListing from'./components/RepoListing';
  

class App extends React.Component{
    constructor(props){
      super(props)

      this.state = {
        Languages: ['All','Java', 'JavaScript', 'Rugby', 'PHP', 'C'],
        activeLanguage: 'all',
        repo: [],
        loading: true
        
      }

      this.fetchRepos = this.fetchRepos.bind(this)
      this.fetchPopularRepos = this.fetchPopularRepos.bind(this)
  
    
}
 
  fetchPopularRepos(language) {
    // "language" can be "javascript", "ruby", "python", or "all"
    const encodedURI = encodeURI(`https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`)
    return fetch(encodedURI)
      .then((data) => data.json())
      .then((repos) => repos.items)
      .catch((error) => {
        console.warn(error)
        return null
      });
  }




 fetchRepos = async (selectedLanguage) => {
  this.setState({ isLoading: true, selectedLanguage });
  const repos = await this.fetchPopularRepos(selectedLanguage);
  this.setState({ isLoading: false, repos });      
}



render(){ 
  return (
    <div className="App">
      <div>
      <Languages 
      Languagelist={this.state.Languages}
      HandlesellectProgram={this.fetchRepos}/>
</div><div>
{this.state.isLoading
    ? <Loading />
    : <RepoListing language={this.state.selectedLanguage} repos={this.state.repos} />}
    </div>
  </div>
  );
  
}
}

export default App;
