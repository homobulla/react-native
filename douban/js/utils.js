import React, { PureComponent } from 'react'

const eventBus = React.createContext()

const initState = {
    articleList: []
}
class EventProvider extends PureComponent {
    state = {
        ...initState
    }
    render() {
        return (
            <eventBus.Provider value={{ ...this.state, set: this.set }}>
                {this.props.children}
            </eventBus.Provider>
        )
    }
    set = state => this.setState({ ...state })
}

const EventConsumer = eventBus.Consumer

export { EventProvider, EventConsumer }
