import React, {Component} from 'react'
import SearchInput, {createFilter} from 'react-search-input'
 
 
const KEYS_TO_FILTERS = ['user.name', 'subject', 'dest.name']
 
class Search extends Component {
  constructor (props) {
    super(props)
    this.state = {
     
    }
    this.searchUpdated = this.searchUpdated.bind(this)
  }
 
  render () {
    // const filteredChilds = this.props.children.filter(createFilter(this.props.children, KEYS_TO_FILTERS))
 
    return (
      <div>
        <SearchInput className="search-input" onChange={this.searchUpdated} />
        {/* {filteredChilds.map(email => {
          return (
            <div className="mail" key={email.id}>
              <div className="from">aaa</div>
              <div className="subject">aaa</div>
            </div>
          )
        })} */}
      </div>
    )
  }
 
  searchUpdated (term) {
    this.setState({children: term})
  }
}

export default Search
 