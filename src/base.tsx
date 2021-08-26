import { Fragment, h } from 'preact'// preact
import rendertostring from 'preact-render-to-string'
import JSX = preact.JSX

// node
import fs from 'fs'
import path from 'path'
import prettier from 'prettier'

export function render(h: () => JSX.Element, filename, title) {
    let html = fs.readFileSync("./src/template.html").toString()
    let page = rendertostring(h())
    html = html.replace("{children}", page).replace("{title}", title)
    //let htmlf = prettier.format(html, { parser: 'html' })
    let htmlf = html
    filename = './docs/' + filename
    fs.mkdirSync(path.dirname(filename), { recursive: true })
    fs.writeFileSync(filename, htmlf)
    console.log('wrote', filename)
}

// n.trim = test for string type
export function cc(...names): string {
    return names.flatMap((n) => (n.trim ? n : Object.keys(n).filter((k) => n[k]))).join(' ') // n.trim detects strings
}

export let Link = ({ children }) => {
  let href = children
  let text = href.replace(/^https?:\/\/(www\.)?/, '')
  return (
      <a href={href} target="_self">
          {text}
      </a>
  )
}