import { Fragment, h } from 'preact'

let Tags = ({ children }) => (
  <Fragment>
    {children.split(/\s/).map((tag) => (
      <span class="tag"># {tag}</span>
    ))}
  </Fragment>
)

let MeetupHeader = ({ title, date, topic, location }) => (
  <Fragment>
    <h2>{title}</h2>
    <summary>{topic}</summary>
    <div class="date-location">
      <address>{location}</address>
      <time>{date}</time>
    </div>
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
        <MeetupHeader title="viennageo #6" date="9.12.2019" topic="vector tiles & sotm" location="donaucity-treff" />
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
        <MeetupHeader title="viennageo #5" date="29.10.2019" topic="vector tiles" location="donaucity-treff" />
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
        <MeetupHeader title="viennageo #4" date="20.3.2019" topic="alles geo!" location="donaucity-treff" />
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
        <MeetupHeader
          title="herbert edelsbrunner *"
          date="15.11.2018"
          topic="computational geometry + topology"
          location="tu wien"
        />
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
        <MeetupHeader title="viennageo #3" date="19.9.2018" topic="????????" location="dc-treff" />
        <ul>
          <li>analyse verkehrsnetzgeometrie</li>
          <li>osm datenmodell</li>
          <li>sotm 2018 milano</li>
        </ul>
        <MeetupHeader title="viennageo #2" date="4.6.2018" topic="linien und räume" location="dc-treff" />
        <img src="/img/dctreff.jpg" />
        <ul>
          <li>openstreetmap team wien<br />erzählt aktuelles von der lokalen osm community</li>
          <li>thomas hulka<br />über generalisierung im allgemeinen und von linienzügen</li>
          <li>michael birsak<br />
                    (phd student tu wien, institut für computer graphik) präsentiert das paper
                    <a href="/files/dynamic-path-exploration.pdf">Dynamic Path Exploration on Mobile Devices</a>
                    über die visualisierung von routen.</li>
          <li>wien gibt raum<br/>
          dipl-ing dr lothar eysn (ma 41, stadtvermessung) gibt einblick in das projekt.
          </li>


                    // aktuelles von der lokalen osm community
#openstreetmap

// zur vereinfachung paralleler linienzüge
#algorithmen #praxis

// schöne routen statt schnelle routen: forscher michael birsak (phd student tu wien, institut für computer graphik) präsentiert das research paper "Dynamic Path Exploration on Mobile Devices"
#research #application #routing

// "wien gibt raum". dipl-ing dr lothar eysn (ma 41, stadtvermessung) gibt einblick in das projekt.
#wien #geodäsie

// erfrischungsgetränke auf der terrasse
#gemütlich #hirter #murauer #budweiser #paulaner #ottakringer #weinwurm #jurtschitsch #mayer

                </ul>
        <MeetupHeader title="viennageo #1" date="10.4.2018" topic="los gehts!" location="raum d, mq" />
        <img src="/img/meetup1-anita-graser.jpg" />
        <ul>
          <li>// willkommen<br />beim geo-meetup! über wiens und österreichs exzellenz auf dem interdisziplinären gebiet "geo" (<i>thomas hulka</i>)</li>
          <li>// basemap.at<br /><i>wolfgang jörg</i>, vienna gis koordinator (stadt wien), stellt uns den wichtigsten öffentlichen geodatendienst vor. <a href="https://basemap.at/">basemap.at</a></li>
          <li>// bewegungsdatenanalyse<br /><i>anita graser</i>, forscherin und österreichs wichtigste geo - open source aktivistin berichtet über ihre forschung am ait.</li>
          <li>// fossgis 2018<br /><i>robert koch</i>, entwickler von <a href="https://www.osmhydrant.org/">osmhydrant</a> erzählt über die <a href="https://www.fossgis-konferenz.de/2018/">fossgis 2018</a>
          </li>
        </ul>
      </section>
    </article>
  )
}
