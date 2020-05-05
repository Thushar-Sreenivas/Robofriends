import React, {Component} from 'react'

class ErrorBoundary extends Component {
    state = {
        hasErrorOccurred: false
    }
    componentDidCatch (error, info) {
        this.setState({hasErrorOccurred: true})
    }
    render() {
        
            if(this.state.hasErrorOccurred) {
                return <h1>Oops Error</h1>
            }
            return this.props.children
        
    }
}

export default ErrorBoundary