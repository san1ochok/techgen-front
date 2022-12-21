import * as React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import { MantineProvider } from '@mantine/core'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <MantineProvider withGlobalStyles withNormalizeCSS>
        <App />
    </MantineProvider>
)
