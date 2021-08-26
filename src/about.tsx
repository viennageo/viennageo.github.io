import { Fragment, h } from 'preact'
import { Link } from './base'

export let About = () => (
    <div class="intro">
        <p>die wiener geo community trifft sich regelmäßig zum fachlichen austausch beim "vienna geo meetup".</p>
        <p>
            wir wollen wiens und österreichs exzellenz auf dem gebiet "geo" transparent machen und forschungseinrichtungen,
            unternehmen, bürger und alle die hier sind zusammenbringen. mit dem kurzwort geo wollen wir übergreifend fachleute und interessierte
            aus kartografie, openstreetmap, forscher im bereich geodatenanalyse oder computational geometry und die
            öffentliche verwaltung zusammenbringen.
        </p>
        <h3>meetups - die treffen</h3>
        <p>

        </p>
        <h4>exzellenz - geo aktivitäten in wien und österreich</h4>
        <ul>
            <li>
                <b>computational geometry</b>, die grundlage der geoinformatik, wurde von einem österreicher miterfunden, zugleich einer der
                bedeutendsten computer wissenschaftler österreichs:{' '}
                <a href="https://ist.ac.at/research/research-groups/edelsbrunner-group/">prof herbert edelsbrunner</a>
            </li>
            <li>
                <b>zwei institute für kartographie</b> <Link>http://cartography.tuwien.ac.at/</Link>{' '}
                <Link>https://geographie.univie.ac.at/arbeitsgruppen/kartographie-und-geoinformation/</Link>
            </li>
            <li>
                <b>ausseruniversitäre und angewandte forschung</b> zB{' '}
                <Link>https://www.ait.ac.at/news-events/single-view/detail/6803?cHash=b1aa81181d7f1471bb890679cf2ee6b8/</Link>
            </li>
            <li>
                aktivität an weltweit führenden open source programmen <Link>https://anitagraser.com/</Link>
            </li>
            <li>
                <b>aktivität der stadtverwaltung</b> <Link>https://www.data.gv.at/</Link> <Link>https://twitter.com/ogdwien</Link>
            </li>
            <li>
                kartendienst der bundesländer <Link>https://basemap.at/</Link>
            </li>
            <li>
                der dach bereich macht ein drittel der openstreetmap daten aus, österreich zählt mit seinen nachbarn also zu den
                fleissigsten mitarbeitern bei <a href="http://openstreetmap.at">openstreetmap</a>
            </li>
        </ul>
        <div>
            // mini-talks alle sind eingeladen sich oder ihr unternehmen durch einen mini-talk zu präsentieren. eine 3 minütige erzählung
            über ein projekt oder thema ist genug. slides sind nicht nötig. die community soll durch die minitalks erfahren was die
            mitglieder tun und wo deren expertise liegt. die stadt wien stellt auch einen karten- und datendienst zur verfügung, der in
            umfang und qualität einzigartig ist: https://www.wien.gv.at/viennagis/ https://basemap.at/
        </div>
    </div>
)
