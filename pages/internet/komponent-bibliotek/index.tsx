import React from 'react'
import { Container } from '@components/container'
import { Header } from '@components/header'
import { Footer } from '@components/footer'

const ComponentLibrary = () => {
  return (
    <Container>
      <Header />

      <main className="u-constrain">
        <section className="Section u-bgBaseLight u-textDark u-islandT48B72  Section--image" style={{backgroundImage: 'url(/space.png)'}} data-scroll="in">
              <div className="Hero Grid">
                  <div className="Grid-cell u-span10of12 u-before1of12 u-md-span7of12 u-md-before4of12" data-scroll="in">
                      <section className="Section u-bgBaseLight u-textBaseDark">
                          <div className="u-islandT48B64 u-islandH48">
                              <div className="Copy">
                                  <h1 className="u-serif80">Komponent Bibliotek</h1>
  <p>Nu kan du få en moderne løsning fra Norlys til din Frontend platform. Vi tilbyder et intelligent bibliotek i høj kvalitet - og den kan booste din effektivitet på dit team.</p>
  <ul>
  <li>Fokusér kun på dine forretningsspecifikke opgaver</li>
  <li>Nem integration uden at røre en finger</li>
  <li>En fremtidssikret løsning</li>
  </ul>
                              </div>
                          </div>
                      </section>
                  </div>
              </div>
      </section>
      </main>

      <Footer />
    </Container>
  )
}

export default ComponentLibrary