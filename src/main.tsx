import { Fragment, h } from 'preact'

let Tags = ({ children }) => (
    <Fragment>
        {children.split(/\s/).map((tag) => (
            <span class="tag"># {tag}</span>
        ))}
    </Fragment>
)

let MeetupHeader = ({ title, date, topic }) => (
    <Fragment>
        <h2>
            <span>{title}</span> <time>{date}</time>
        </h2>
        <summary>{topic}</summary>
    </Fragment>
)

export let MainPage = () => {
    return (
        <article>
            <section>
                <div class="logo">
                    <img src="/img/viennageo-logo_250px.png" />
                    <h3 class="desktop">the meetup with the logo</h3>
                </div>
            </section>
            <section>
                <h1>vienna geo</h1>
                <p>die wiener geo community trifft sich zum fachlichen austausch über themen wie</p>
                <br />
                <Tags>openstreetmap open-geodata gis kartografie geodatenanalyse computational-geometry</Tags>
                <p class="aboutlink">
                    <a href="about.html">mehr darüber</a>
                </p>
            </section>
            <section>
                <h1>das nächste treffen</h1>
                <p>
                    veranstalten wir <span class="next">sobald persönliche treffen wieder gut möglich sind.</span>
                </p>
                <p>
                    alle sind willkommen, eintritt ist frei. wir freuen uns auch über erfahrungsberichte, forschungs&shy;berichte, neues aus
                    der verwaltung - alles was mit geo zu tun hat. vorschläge an viennageo@gmx.at
                </p>
            </section>
            <section>
                <h1>bisherige treffen</h1>
                <MeetupHeader title="viennageo #6" date="9.12.2019" topic="vector tiles & sotm" />
                <ul>
                    <li>
                        // wolfgang jörg <br />
                        zeigt uns das neue vektor-produkt der basemap.at
                    </li>
                    <li>
                        // robert kaiser <br />
                        berichtet von seinem besuch der sotm 2019 in heidelberg
                    </li>
                    <li>
                        // andreas voit
                        <br />
                        berichtet vom mapathon der ärzte ohne grenzen und gibt einen auszug aus der aktuellen osm wochennotiz
                    </li>
                </ul>
                <MeetupHeader title="viennageo #5" date="29.10.2019" topic="vector tiles" />
                <ul>
                    <li>
                        // markus mayr
                        <br />
                        über technologie und standards
                    </li>
                    <li>
                        // franz gusenbauer
                        <br />
                        berichtet seine praxiserfahrungen und
                    </li>
                    <li>
                        // jürgen hahn
                        <br />
                        erläutert die darstellung im web mit postgis + tegola sowie mit mbtiles + tileserver-gl
                    </li>
                </ul>
                <MeetupHeader title="viennageo #4" date="20.3.2019" topic="alles geo!" />
                <p>zur krönung der ballsaison treffen uns wieder im donau city treff und danken für ein buntes programm:</p>
                <ul>
                    <li>
                        stephan bösch-plepelits
                        <br />
                        workshop overpass - die schnittstelle zu openstreetmap
                    </li>
                    <li>
                        jakob listabarth
                        <br />
                        mapping united nations sustainability goals
                    </li>
                    <li>
                        robert kaiser
                        <br />
                        vr map - virtual reality mit openstreetmap
                    </li>
                    <li>
                        fachlicher austausch
                        <br />
                        hirter, murauer und wasser
                    </li>
                </ul>
                <MeetupHeader title="herbert edelsbrunner *" date="15.11.2018" topic="computational geometry + topology" />
                <div class="edelsbrunner">
                    we are delighted to announce that professor herbert edelsbrunner (institute of science and technology austria) will
                    visit our group on november 15th! computational geometry is the foundation of our doing. we are very lucky that one of
                    the researchers who shaped the research field is back in austria and generously takes the time to visit us. professor
                    edelsbrunner will tell us about his involvement in the evolution of computational geometry and the younger research
                    field computational topology, he co-founded. starting from the history of academia he will address the related industry
                    and the recent application of computational topology to data analysis. this will be interactive - bring your topics +
                    questions. about professor edelsbrunner - professor at the institute of science and technology austria - worldwide
                    leading researcher in computational geometry and topology - founder of raindrop geomagic - wittgensteinpreis 2018 - alan
                    t. waterman award 1991 - http://pub.ist.ac.at/~edels/ - https://en.wikipedia.org/wiki/Herbert_Edelsbrunner research
                    papers at http://pub.ist.ac.at/~edels/Papers/ the meetup is in english this time
                </div>
                <MeetupHeader title="viennageo #3" date="19.9.2018" topic="????????" />
                <ul>
                    <li>analyse verkehrsnetzgeometrie</li>
                    <li>osm datenmodell</li>
                    <li>sotm 2018 milano</li>
                </ul>
                <MeetupHeader title="viennageo #2" date="4.6.2018" topic="????????" />
                <ul>
                    <li>openstreetmap</li>
                    <li>generalisierung</li>
                    <li>schöne routen</li>
                    <li>wien gibt raum</li>
                </ul>
                <MeetupHeader title="viennageo #1" date="10.4.2018" topic="los gehts!" />
                <img src="/img/meetup1-anita-graser.jpeg" />
                <ul>
                    <li>// thomas hulka<br/>willkommen beim geo-meetup! wiens und österreichs exzellenz auf dem interdisziplinären gebiet "geo"</li>
                    <li>// wolfgang jörg,<br/>vienna gis koordinator (stadt wien), stellt uns den wichtigsten öffentlichen geodatendienst vor, <a href="https://basemap.at/">basemap.at</a></li>
                    <li>// anita graser<br/>berichtet über ihre forschung in der bewegungsdatenanalyse</li>
                    <li>// robert koch<br/>erzählt von der <a href="https://www.fossgis-konferenz.de/2018/">fossgis 2018</a></li>
                </ul>
            </section>
        </article>
    )
}
