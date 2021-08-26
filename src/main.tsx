import { Fragment, h } from 'preact'

let Tags = ({ children }) => (
    <Fragment>
        {children.split(/\s/).map((tag) => (
            <span class="tag"># {tag}</span>
        ))}
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
                <br />
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
                    es sind alle willkommen, eintritt ist frei. wir freuen uns auch über erfahrungsberichte, forschungsberichte, neues aus
                    der verwaltung - alles was mit geo zu tun hat. vorschläge an viennageo@gmx.at
                </p>
            </section>
            <section>
                <h1>bisherige treffen</h1>
                <h2>
                    <span>viennageo #5</span> <time>3.3.2018</time>
                </h2>
                <h2>
                    <span>viennageo #4</span> <time>3.3.2018</time>
                </h2>
                <ul></ul>

                <h2>
                    <span>herbert edelsbrunner *</span>
                </h2>
                <ul>
                    <li>professor ...</li>
                </ul>

                <h2>
                    <span>viennageo #3</span> <time>19.9.2018</time>
                </h2>
                <ul>
                    <li>analyse verkehrsnetzgeometrie</li>
                    <li>osm datenmodell</li>
                    <li>sotm 2018 milano</li>
                </ul>

                <h2>
                    <span>viennageo #2</span> <time>4.6.2018</time>
                </h2>
                <ul>
                    <li>openstreetmap</li>
                    <li>generalisierung</li>
                    <li>schöne routen</li>
                    <li>wien gibt raum</li>
                </ul>

                <h2>
                    <span>viennageo #1</span> <time>10.4.2018</time>
                </h2>
                <p>meetup1 final.txt</p>
                <ul>
                    <li>bild raum d</li>
                    <li>thomas hulka</li>
                    <li>wolfgang jörg</li>
                    <li>anita graser</li>
                    <li>robert koch</li>
                </ul>
            </section>
        </article>
    )
}
