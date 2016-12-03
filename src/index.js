import {Header} from './header'
import 'normalize.css'
import "./index.pcss"

function assembleHeader() {
    const header = new Header(document.querySelector('header'))
}

function initAll() {
    assembleHeader()
}

initAll()
