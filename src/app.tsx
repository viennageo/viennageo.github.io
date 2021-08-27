import { h } from 'preact'
import { About } from './about'
import { render } from './base'
import { IndexPage } from './index'

render(() => <IndexPage />, "index.html", "main")
render(() => <About />, "about.html", "main")
