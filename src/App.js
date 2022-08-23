import { Parallax, useParallax } from 'react-mouse-parallax'

const App = () => {
    const ref = useParallax({
        bottom: 10,
        right: 5,
        type: 'px'
    })

    return (
        <div className="Test">
            <h1 style={{
                textAlign: 'center'
            }}>Parallax Example</h1>

            <Parallax move={{
                left: 5,
                top: 4,
                type: '%'
            }}>
                <img style={{
                    borderRadius: '150px',
                    marginLeft: '100px'
                }} src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="Контент для элемента с параллаксом" />
            </Parallax>
            
            <img ref={ref} style={{
                    margin: '100px 150px 150px 150px'
                }} src="https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGNpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="Контент для элемента с параллаксом" />
        </div>
    )
}

export default App