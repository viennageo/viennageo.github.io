import { h } from 'preact'
import { About } from './about'
import { render } from './base'
import { MainPage } from './main'

render(() => <MainPage />, "index.html", "main")
render(() => <About />, "about.html", "main")
